"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function BrandingHero() {
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

      time += 0.008;

      const centerX = width / 2;
      const centerY = height / 2;

      // Ambient glow
      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        Math.min(width, height) * 0.48
      );

      glow.addColorStop(0, "rgba(115, 122, 26, 0.18)");
      glow.addColorStop(0.5, "rgba(115, 122, 26, 0.05)");
      glow.addColorStop(1, "rgba(115, 122, 26, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Rotating identity rings
      for (let i = 0; i < 3; i++) {
        const radius =
          85 +
          i * 48 +
          Math.sin(time * 1.5 + i) * 5;

        ctx.beginPath();

        ctx.ellipse(
          centerX,
          centerY,
          radius,
          radius * 0.42,
          time * (i % 2 === 0 ? 0.35 : -0.3) + i * 0.8,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          i === 1
            ? "rgba(115, 122, 26, 0.65)"
            : "rgba(255, 255, 255, 0.1)";

        ctx.lineWidth = i === 1 ? 1.5 : 1;
        ctx.stroke();
      }

      // Central brand mark
      const markSize = 82;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(Math.sin(time * 0.7) * 0.08);

      ctx.beginPath();
      ctx.roundRect(
        -markSize / 2,
        -markSize / 2,
        markSize,
        markSize,
        20
      );

      ctx.fillStyle = "rgba(115, 122, 26, 0.95)";
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-17, -23);
      ctx.lineTo(-17, 23);
      ctx.lineTo(5, 23);
      ctx.lineTo(24, 3);
      ctx.lineTo(4, -18);
      ctx.closePath();

      ctx.strokeStyle = "rgba(255,255,255,0.9)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();

      // Orbiting points
      for (let i = 0; i < 8; i++) {
        const angle =
          time * (i % 2 === 0 ? 0.7 : -0.55) +
          (Math.PI * 2 * i) / 8;

        const radius = 150 + (i % 3) * 22;

        const x =
          centerX + Math.cos(angle) * radius;

        const y =
          centerY + Math.sin(angle) * radius * 0.45;

        ctx.beginPath();
        ctx.arc(x, y, i % 3 === 0 ? 3 : 2, 0, Math.PI * 2);

        ctx.fillStyle =
          i % 3 === 0
            ? "rgba(115, 122, 26, 0.9)"
            : "rgba(255,255,255,0.35)";

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
      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#737A1A]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-28">
        {/* Content */}
        <div className="max-w-2xl">
          <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#737A1A]">
            <span className="h-px w-8 bg-[#737A1A]" />
            Branding
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Build a brand
            <span className="block text-[#737A1A]">
              people remember.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            We create distinctive brand identities that give businesses a
            clear visual voice, stronger recognition and a consistent presence
            across every touchpoint.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#branding-types"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-[#737A1A] hover:text-white"
            >
              Explore branding
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
                Strategy
              </p>
            </div>

            <div className="border-l border-white/10 pl-5">
              <p className="text-lg font-semibold">02</p>
              <p className="mt-1 text-xs text-white/45">
                Identity
              </p>
            </div>

            <div className="border-l border-white/10 pl-5">
              <p className="text-lg font-semibold">03</p>
              <p className="mt-1 text-xs text-white/45">
                Consistency
              </p>
            </div>
          </div>
        </div>

        {/* Brand visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            />

            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur">
              Brand identity system
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  Identity
                </p>
                <p className="mt-1 text-sm font-medium">
                  Distinctive
                </p>
              </div>

              <div className="h-px w-16 bg-[#737A1A]" />

              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  Recognition
                </p>
                <p className="mt-1 text-sm font-medium text-[#737A1A]">
                  Memorable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}