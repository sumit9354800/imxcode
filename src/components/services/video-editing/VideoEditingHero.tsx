"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { useEffect, useRef } from "react";

export default function VideoEditingHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      context.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Background grid
      context.strokeStyle = "rgba(255,255,255,0.055)";
      context.lineWidth = 1;

      const gridSize = 42;

      for (let x = 0; x <= width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      // Timeline tracks
      const trackWidth = Math.min(width * 0.72, 520);
      const startX = centerX - trackWidth / 2;
      const trackY = centerY + 75;

      for (let index = 0; index < 4; index++) {
        const y = trackY + index * 17;

        context.fillStyle =
          index === 0
            ? "rgba(115,122,26,0.85)"
            : "rgba(255,255,255,0.09)";

        context.fillRect(
          startX + index * 34,
          y,
          trackWidth - index * 55,
          9
        );
      }

      // Moving playhead
      const progress =
        ((Math.sin(time * 0.001) + 1) / 2) * (trackWidth - 40);

      context.fillStyle = "#737A1A";
      context.fillRect(startX + progress, trackY - 18, 2, 90);

      // Main frame
      const frameWidth = Math.min(width * 0.48, 340);
      const frameHeight = frameWidth * 0.58;
      const frameX = centerX - frameWidth / 2;
      const frameY = centerY - frameHeight / 2 - 35;

      context.strokeStyle = "rgba(255,255,255,0.2)";
      context.lineWidth = 1.5;
      context.strokeRect(frameX, frameY, frameWidth, frameHeight);

      // Inner visual
      const gradient = context.createLinearGradient(
        frameX,
        frameY,
        frameX + frameWidth,
        frameY + frameHeight
      );

      gradient.addColorStop(0, "rgba(115,122,26,0.34)");
      gradient.addColorStop(0.5, "rgba(255,255,255,0.07)");
      gradient.addColorStop(1, "rgba(115,122,26,0.08)");

      context.fillStyle = gradient;
      context.fillRect(
        frameX + 10,
        frameY + 10,
        frameWidth - 20,
        frameHeight - 20
      );

      // Play icon
      context.beginPath();
      context.moveTo(centerX - 10, frameY + frameHeight / 2 - 17);
      context.lineTo(centerX + 20, frameY + frameHeight / 2);
      context.lineTo(centerX - 10, frameY + frameHeight / 2 + 17);
      context.closePath();

      context.fillStyle = "rgba(255,255,255,0.85)";
      context.fill();

      // Floating edit points
      for (let index = 0; index < 7; index++) {
        const angle = time * 0.00045 + index * 0.9;
        const radius = 145 + Math.sin(time * 0.001 + index) * 18;

        const x = centerX + Math.cos(angle) * radius;
        const y = centerY - 35 + Math.sin(angle) * radius * 0.52;

        context.beginPath();
        context.arc(x, y, 2.5, 0, Math.PI * 2);
        context.fillStyle =
          index % 2 === 0
            ? "rgba(115,122,26,0.85)"
            : "rgba(255,255,255,0.35)";
        context.fill();
      }

      time += 16;
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-black text-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-80"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(115,122,26,0.12),transparent_42%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl flex-col justify-between px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        {/* Top */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#737A1A]">
            Video Editing
          </span>

          <span className="hidden text-xs uppercase tracking-[0.18em] text-white/30 sm:block">
            Story · Rhythm · Motion
          </span>
        </div>

        {/* Main */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-5xl lg:text-6xl xl:text-7xl">
              Turn raw footage into
              <span className="block text-[#737A1A]">
                something people remember.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              Thoughtful editing, strong storytelling and polished visuals
              designed to make every second of your content count.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#video-editing-types"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
              >
                Explore video services
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-[#737A1A] hover:text-[#737A1A]"
              >
                Start a project
              </Link>
            </div>
          </div>

          {/* Visual marker */}
          <div className="relative hidden h-[420px] lg:block">
            <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#737A1A]">
                <Play size={12} fill="currentColor" />
              </span>

              <span className="text-xs uppercase tracking-[0.16em] text-white/50">
                Edit / Refine / Deliver
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-xs uppercase tracking-[0.18em] text-white/25">
            IMX Digital Studio
          </span>

          <a
            href="#video-editing-types"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-[#737A1A]"
          >
            Explore
            <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}