import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fs from "node:fs/promises";
import path from "node:path";

dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
});

const PROJECT_ROOT = process.cwd();

const PUBLIC_DIRECTORY = path.join(
  PROJECT_ROOT,
  "public"
);

const ASSETS_FILE = path.join(
  PROJECT_ROOT,
  "src",
  "data",
  "cloudinary-assets.json"
);

const CLOUDINARY_FOLDER =
  process.env.CLOUDINARY_FOLDER || "imx";

const SUPPORTED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".avif",
  ".svg",
]);

function validateEnvironment() {
  const requiredVariables = [
    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
  ];

  const missingVariables = requiredVariables.filter(
    (variable) => !process.env[variable]
  );

  if (missingVariables.length > 0) {
    throw new Error(
      `Missing Cloudinary environment variables: ${missingVariables.join(
        ", "
      )}`
    );
  }
}

function configureCloudinary() {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

async function collectImageFiles(directory) {
  const entries = await fs.readdir(directory, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(
      directory,
      entry.name
    );

    if (entry.isDirectory()) {
      files.push(
        ...(await collectImageFiles(fullPath))
      );

      continue;
    }

    const extension = path
      .extname(entry.name)
      .toLowerCase();

    if (SUPPORTED_EXTENSIONS.has(extension)) {
      files.push(fullPath);
    }
  }

  return files;
}

function getRelativePublicPath(filePath) {
  return path
    .relative(PUBLIC_DIRECTORY, filePath)
    .replaceAll("\\", "/");
}

function getPublicId(filePath) {
  const relativePath =
    getRelativePublicPath(filePath);

  const parsedPath = path.parse(relativePath);

  return path
    .join(
      CLOUDINARY_FOLDER,
      parsedPath.dir,
      parsedPath.name
    )
    .replaceAll("\\", "/");
}

function setNestedAsset(root, relativePath, data) {
  const parsedPath = path.parse(relativePath);

  const parts = [
    ...parsedPath.dir
      .split("/")
      .filter(Boolean),
    parsedPath.name,
  ];

  let current = root;

  parts.forEach((part, index) => {
    const isLast =
      index === parts.length - 1;

    if (isLast) {
      current[part] = data;
      return;
    }

    if (
      !current[part] ||
      typeof current[part] !== "object"
    ) {
      current[part] = {};
    }

    current = current[part];
  });
}

async function loadExistingAssets() {
  try {
    const content =
      await fs.readFile(
        ASSETS_FILE,
        "utf8"
      );

    return JSON.parse(content);
  } catch {
    return {};
  }
}

async function saveAssets(assets) {
  await fs.mkdir(
    path.dirname(ASSETS_FILE),
    {
      recursive: true,
    }
  );

  await fs.writeFile(
    ASSETS_FILE,
    `${JSON.stringify(
      assets,
      null,
      2
    )}\n`,
    "utf8"
  );
}

async function uploadImage(filePath) {
  const publicId =
    getPublicId(filePath);

  const result =
    await cloudinary.uploader.upload(
      filePath,
      {
        public_id: publicId,
        resource_type: "image",
        overwrite: true,
        invalidate: true,
      }
    );

  return {
    type: "image",
    format: result.format,
    publicId: result.public_id,
    url: result.secure_url,
    width: result.width,
    height: result.height,
  };
}

async function main() {
  validateEnvironment();
  configureCloudinary();

  const imageFiles =
    await collectImageFiles(
      PUBLIC_DIRECTORY
    );

  if (imageFiles.length === 0) {
    console.log(
      "No supported images found inside public/."
    );

    return;
  }

  console.log(
    `Found ${imageFiles.length} image(s).\n`
  );

  const assets =
    await loadExistingAssets();

  let uploadedCount = 0;
  let failedCount = 0;

  for (const filePath of imageFiles) {
    const relativePath =
      getRelativePublicPath(filePath);

    try {
      const asset =
        await uploadImage(filePath);

      setNestedAsset(
        assets,
        relativePath,
        asset
      );

      uploadedCount++;

      console.log(
        `✅ /${relativePath}`
      );

      console.log(
        `   ${asset.url}\n`
      );
    } catch (error) {
      failedCount++;

      console.error(
        `❌ /${relativePath}`
      );

      console.error(
        `   ${
          error instanceof Error
            ? error.message
            : error
        }\n`
      );
    }
  }

  await saveAssets(assets);

  console.log(
    "────────────────────────────"
  );

  console.log(
    `Uploaded: ${uploadedCount}`
  );

  console.log(
    `Failed:   ${failedCount}`
  );

  console.log(
    `Assets:   ${path.relative(
      PROJECT_ROOT,
      ASSETS_FILE
    )}`
  );

  console.log(
    "────────────────────────────"
  );
}

main().catch((error) => {
  console.error(
    "\nCloudinary upload failed:"
  );

  console.error(
    error instanceof Error
      ? error.message
      : error
  );

  process.exit(1);
});