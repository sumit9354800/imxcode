"use client";

import dynamic from "next/dynamic";

// three.js needs the browser, so the scene is loaded client-side only.
const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-24 w-24 animate-pulse rounded-full bg-[#737A1A]/25 blur-2xl" />
    </div>
  ),
});

export default function Hero3D() {
  return (
    <div
      className="relative h-[380px] w-full sm:h-[460px] lg:h-[580px]"
      role="img"
      aria-label="3D illustration of website layers floating above each other"
    >
      <Scene3D />
      <p className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-white/40">
        Move your cursor to tilt the layers
      </p>
    </div>
  );
}