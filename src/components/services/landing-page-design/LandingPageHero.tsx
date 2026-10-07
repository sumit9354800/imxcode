"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function LandingPageHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();

      ctx.clearRect(0, 0, width, height);

      time += 0.012;

      const centerX = width * 0.5;
      const centerY = height * 0.48;

      // Background glow
      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        Math.min(width, height) * 0.5
      );

      glow.addColorStop(0, "rgba(115, 122, 26, 0.18)");
      glow.addColorStop(0.55, "rgba(115, 122, 26, 0.05)");
      glow.addColorStop(1, "rgba(115, 122, 26, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Conversion funnel layers
      const layers = [
        { y: -150, width: 270, height: 58 },
        { y: -65, width: 230, height: 58 },
        { y: 20, width: 190, height: 58 },
        { y: 105, width: 150, height: 58 },
      ];

      layers.forEach((layer, index) => {
        const y =
          centerY +
          layer.y +
          Math.sin(time * 1.2 + index * 0.7) * 5;

        const x = centerX - layer.width / 2;

        ctx.beginPath();
        ctx.roundRect(x, y, layer.width, layer.height, 14);

        ctx.fillStyle =
          index === layers.length - 1
            ? "rgba(115, 122, 26, 0.9)"
            : "rgba(255, 255, 255, 0.055)";

        ctx.fill();

        ctx.strokeStyle =
          index === layers.length - 1
            ? "rgba(115, 122, 26, 0.95)"
            : "rgba(255, 255, 255, 0.12)";

        ctx.lineWidth = 1;
        ctx.stroke();

        // Connecting line
        if (index < layers.length - 1) {
          ctx.beginPath();
          ctx.moveTo(centerX, y + layer.height);
          ctx.lineTo(centerX, y + layer.height + 27);

          ctx.strokeStyle = "rgba(115, 122, 26, 0.35)";
          ctx.stroke();
        }
      });

      // Moving conversion points
      for (let i = 0; i < 9; i++) {
        const progress = (time * 0.18 + i / 9) % 1;

        const y = centerY - 185 + progress * 340;
        const spread = 145 - progress * 110;

        const x =
          centerX +
          Math.sin(i * 2.4 + time) * spread * 0.55;

        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);

        ctx.fillStyle = "rgba(115, 122, 26, 0.75)";
        ctx.fill();
      }

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
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#737A1A]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-28">
        {/* Content */}
        <div className="max-w-2xl">
          <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#737A1A]">
            <span className="h-px w-8 bg-[#737A1A]" />
            Landing Page Design
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Pages designed to
            <span className="block text-[#737A1A]">
              turn attention into action.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            We design focused landing experiences that communicate your offer
            quickly, build trust and guide visitors toward one clear next step.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#landing-page-types"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-[#737A1A] hover:text-white"
            >
              Explore landing pages
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:border-[#737A1A] hover:text-[#737A1A]"
            >
              Start a project
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-white/10 pt-5">
            <div>
              <p className="text-lg font-semibold">01</p>
              <p className="mt-1 text-xs text-white/45">
                Clear message
              </p>
            </div>

            <div className="border-l border-white/10 pl-5">
              <p className="text-lg font-semibold">02</p>
              <p className="mt-1 text-xs text-white/45">
                Focused journey
              </p>
            </div>

            <div className="border-l border-white/10 pl-5">
              <p className="text-lg font-semibold">03</p>
              <p className="mt-1 text-xs text-white/45">
                Strong action
              </p>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            />

            {/* Visual labels */}
            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur">
              Conversion flow
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  From
                </p>
                <p className="mt-1 text-sm font-medium">
                  Attention
                </p>
              </div>

              <div className="h-px w-16 bg-[#737A1A]" />

              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  To
                </p>
                <p className="mt-1 text-sm font-medium text-[#737A1A]">
                  Action
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}