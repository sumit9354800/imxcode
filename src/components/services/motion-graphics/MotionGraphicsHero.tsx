"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { useEffect, useRef } from "react";

export default function MotionGraphicsHero() {
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

      // Grid
      context.strokeStyle = "rgba(255,255,255,0.045)";
      context.lineWidth = 1;

      const gridSize = 44;

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

      // Animated orbit rings
      const baseRadius = Math.min(width, height) * 0.18;

      for (let ring = 0; ring < 3; ring++) {
        const radius =
          baseRadius +
          ring * 38 +
          Math.sin(time * 0.001 + ring) * 5;

        context.beginPath();

        context.ellipse(
          centerX,
          centerY - 30,
          radius,
          radius * 0.42,
          time * 0.00035 + ring * 0.5,
          0,
          Math.PI * 2
        );

        context.strokeStyle =
          ring === 1
            ? "rgba(115,122,26,0.65)"
            : "rgba(255,255,255,0.12)";

        context.lineWidth = ring === 1 ? 1.5 : 1;

        context.stroke();
      }

      // Central motion object
      const pulse = 1 + Math.sin(time * 0.002) * 0.06;
      const size = 76 * pulse;

      context.save();
      context.translate(centerX, centerY - 30);
      context.rotate(time * 0.0007);

      context.beginPath();

      context.moveTo(0, -size);
      context.lineTo(size * 0.72, -size * 0.25);
      context.lineTo(size * 0.48, size * 0.7);
      context.lineTo(-size * 0.48, size * 0.7);
      context.lineTo(-size * 0.72, -size * 0.25);
      context.closePath();

      const gradient = context.createLinearGradient(
        -size,
        -size,
        size,
        size
      );

      gradient.addColorStop(0, "rgba(115,122,26,0.85)");
      gradient.addColorStop(0.5, "rgba(255,255,255,0.12)");
      gradient.addColorStop(1, "rgba(115,122,26,0.15)");

      context.fillStyle = gradient;
      context.fill();

      context.strokeStyle = "rgba(255,255,255,0.3)";
      context.lineWidth = 1;
      context.stroke();

      context.restore();

      // Floating motion points
      for (let index = 0; index < 10; index++) {
        const angle =
          time * 0.00045 +
          index * ((Math.PI * 2) / 10);

        const radius =
          baseRadius +
          90 +
          Math.sin(time * 0.001 + index) * 20;

        const x =
          centerX +
          Math.cos(angle) * radius;

        const y =
          centerY -
          30 +
          Math.sin(angle) * radius * 0.42;

        context.beginPath();

        context.arc(
          x,
          y,
          index % 3 === 0 ? 3 : 1.8,
          0,
          Math.PI * 2
        );

        context.fillStyle =
          index % 3 === 0
            ? "rgba(115,122,26,0.9)"
            : "rgba(255,255,255,0.35)";

        context.fill();
      }

      // Motion trails
      for (let trail = 0; trail < 4; trail++) {
        const offset = trail * 18;
        const startX = centerX - 170 + offset;
        const startY =
          centerY +
          100 +
          Math.sin(time * 0.001 + trail) * 8;

        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(startX + 70, startY);
        context.strokeStyle =
          trail === 0
            ? "rgba(115,122,26,0.7)"
            : "rgba(255,255,255,0.1)";
        context.lineWidth = trail === 0 ? 2 : 1;
        context.stroke();
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
            Motion Graphics
          </span>

          <span className="hidden text-xs uppercase tracking-[0.18em] text-white/30 sm:block">
            Movement · Rhythm · Impact
          </span>
        </div>

        {/* Main */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-5xl lg:text-6xl xl:text-7xl">
              Make your ideas
              <span className="block text-[#737A1A]">
                move.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              Motion graphics that turn static ideas into dynamic visual
              experiences — designed to communicate, explain and capture
              attention.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#motion-graphics-types"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
              >
                Explore motion services
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
                Design / Animate / Deliver
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
            href="#motion-graphics-types"
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