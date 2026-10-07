"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function SeoHero() {
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
      time += 0.009;

      const centerX = width / 2;
      const centerY = height / 2;

      // Ambient glow
      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        Math.min(width, height) * 0.5
      );

      glow.addColorStop(0, "rgba(115, 122, 26, 0.2)");
      glow.addColorStop(0.55, "rgba(115, 122, 26, 0.05)");
      glow.addColorStop(1, "rgba(115, 122, 26, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Search ranking lines
      const lines = [
        { y: -125, width: 210, opacity: 0.14 },
        { y: -72, width: 175, opacity: 0.1 },
        { y: -19, width: 230, opacity: 0.12 },
        { y: 34, width: 190, opacity: 0.1 },
        { y: 87, width: 150, opacity: 0.08 },
      ];

      lines.forEach((line, index) => {
        const y =
          centerY +
          line.y +
          Math.sin(time * 1.2 + index) * 3;

        const x = centerX - 125;

        // Result row
        ctx.beginPath();
        ctx.roundRect(x, y, 250, 34, 8);

        ctx.fillStyle = `rgba(255,255,255,${line.opacity})`;
        ctx.fill();

        // Ranking indicator
        ctx.beginPath();
        ctx.arc(x + 17, y + 17, 5, 0, Math.PI * 2);

        ctx.fillStyle =
          index === 0
            ? "rgba(115,122,26,0.95)"
            : "rgba(255,255,255,0.25)";

        ctx.fill();

        // Text lines
        ctx.fillStyle = "rgba(255,255,255,0.16)";
        ctx.fillRect(x + 31, y + 10, line.width * 0.45, 4);

        ctx.fillStyle = "rgba(255,255,255,0.08)";
        ctx.fillRect(x + 31, y + 19, line.width * 0.7, 3);
      });

      // Search arrow / growth curve
      ctx.beginPath();

      for (let i = 0; i <= 100; i++) {
        const progress = i / 100;

        const x = centerX - 125 + progress * 250;
        const y =
          centerY +
          125 -
          progress * 165 -
          Math.sin(progress * Math.PI * 3 + time) * 5;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = "rgba(115,122,26,0.9)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Arrow head
      ctx.beginPath();
      ctx.moveTo(centerX + 120, centerY - 42);
      ctx.lineTo(centerX + 103, centerY - 46);
      ctx.moveTo(centerX + 120, centerY - 42);
      ctx.lineTo(centerX + 112, centerY - 58);

      ctx.strokeStyle = "rgba(115,122,26,0.9)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Floating data points
      for (let i = 0; i < 9; i++) {
        const progress = (time * 0.16 + i / 9) % 1;

        const x =
          centerX -
          130 +
          progress * 260;

        const y =
          centerY +
          115 -
          progress * 155 -
          Math.sin(progress * Math.PI * 3 + time) * 5;

        ctx.beginPath();
        ctx.arc(x, y, i % 3 === 0 ? 3 : 2, 0, Math.PI * 2);

        ctx.fillStyle =
          i % 3 === 0
            ? "rgba(115,122,26,0.9)"
            : "rgba(255,255,255,0.35)";

        ctx.fill();
      }

      // Central search icon
      ctx.beginPath();
      ctx.arc(centerX, centerY - 5, 42, 0, Math.PI * 2);

      ctx.fillStyle = "rgba(115,122,26,0.95)";
      ctx.fill();

      ctx.strokeStyle = "rgba(255,255,255,0.8)";
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(centerX + 30, centerY + 25);
      ctx.lineTo(centerX + 53, centerY + 48);

      ctx.strokeStyle = "rgba(255,255,255,0.9)";
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.stroke();

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
            Search Engine Optimization
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Get found by
            <span className="block text-[#737A1A]">
              the right people.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            We build SEO foundations that help your website become easier to
            discover, understand and trust — connecting search visibility with
            real business opportunities.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#seo-types"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-[#737A1A] hover:text-white"
            >
              Explore SEO
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
                Discover
              </p>
            </div>

            <div className="border-l border-white/10 pl-5">
              <p className="text-lg font-semibold">02</p>
              <p className="mt-1 text-xs text-white/45">
                Optimize
              </p>
            </div>

            <div className="border-l border-white/10 pl-5">
              <p className="text-lg font-semibold">03</p>
              <p className="mt-1 text-xs text-white/45">
                Grow
              </p>
            </div>
          </div>
        </div>

        {/* SEO visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            />

            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur">
              Organic visibility
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  Search
                </p>
                <p className="mt-1 text-sm font-medium">
                  Discoverability
                </p>
              </div>

              <div className="h-px w-16 bg-[#737A1A]" />

              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  Growth
                </p>
                <p className="mt-1 text-sm font-medium text-[#737A1A]">
                  Visibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}