import { cloudinaryAsset } from "@/lib/cloudinary";

export type CreativeItem = {
  number: string;
  title: string;
  category: string;
  image: string;
  href: string;
};

export const creativeItems: CreativeItem[] = [
  {
    number: "01",
    title: "UI/UX Design",
    category: "Design",
    image: cloudinaryAsset("/creative/ui-ux.png"),
    href: "/services/ui-ux-design",
  },

  {
    number: "02",
    title: "Brand Identity",
    category: "Branding",
    image: cloudinaryAsset("/creative/branding.png"),
    href: "/services/branding",
  },

  {
    number: "03",
    title: "Graphic Design",
    category: "Creative",
    image: cloudinaryAsset("/creative/graphic-design.png"),
    href: "/services/graphic-design",
  },

  {
    number: "04",
    title: "Video Editing",
    category: "Media",
    image: cloudinaryAsset("/creative/video-editing.png"),
    href: "/services/video-editing",
  },
];