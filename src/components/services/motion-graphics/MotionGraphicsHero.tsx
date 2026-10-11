
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Play,
  Sparkles,
  MoveUpRight,
  Layers3,
  CirclePlay,
} from "lucide-react";

export default function MotionGraphicsHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let time = 0;
    let width = 0;
    let height = 0;
    let visible = true;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      if (!reducedMotion) time += 0.012;

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width / 500, height / 500, 1);

      // Ambient glow
      const glow = context.createRadialGradient(
        cx,
        cy,
        10,
        cx,
        cy,
        Math.min(width, height) * 0.53
      );

      glow.addColorStop(0, "rgba(115,122,26,0.19)");
      glow.addColorStop(0.48, "rgba(115,122,26,0.055)");
      glow.addColorStop(1, "rgba(115,122,26,0)");

      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      // Technical grid
      const gridSize = 42;

      context.lineWidth = 1;
      context.strokeStyle = "rgba(255,255,255,0.045)";

      for (let x = 0; x < width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      // Orbit rings
      context.save();
      context.translate(cx, cy);

      for (let ring = 0; ring < 4; ring++) {
        const radius = (85 + ring * 31) * scale;
        const rotation = time * (ring % 2 === 0 ? 0.12 : -0.09);

        context.save();
        context.rotate(rotation);
        context.beginPath();

        context.ellipse(
          0,
          0,
          radius * 1.08,
          radius * 0.48,
          ring * 0.12,
          0,
          Math.PI * 2
        );

        context.strokeStyle =
          ring === 1
            ? "rgba(145,153,40,0.5)"
            : "rgba(255,255,255,0.1)";

        context.lineWidth = ring === 1 ? 1.4 : 1;
        context.setLineDash(ring === 3 ? [3, 8] : []);
        context.stroke();
        context.restore();
      }

      context.setLineDash([]);
      context.restore();

      // Central animated geometric object
      const pulse = 1 + Math.sin(time * 1.5) * 0.055;
      const size = 72 * scale * pulse;
      const rotation = time * 0.35;

      context.save();
      context.translate(cx, cy);
      context.rotate(rotation);

      // Outer polygon
      context.beginPath();

      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 2;
        const x = Math.cos(angle) * size;
        const y = Math.sin(angle) * size;

        if (i === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }

      context.closePath();

      const outerGradient = context.createLinearGradient(
        -size,
        -size,
        size,
        size
      );

      outerGradient.addColorStop(0, "rgba(145,153,40,0.9)");
      outerGradient.addColorStop(0.5, "rgba(115,122,26,0.28)");
      outerGradient.addColorStop(1, "rgba(115,122,26,0.08)");

      context.fillStyle = outerGradient;
      context.fill();

      context.strokeStyle = "rgba(196,204,90,0.8)";
      context.lineWidth = 1.2;
      context.stroke();

      // Inner geometric form
      context.beginPath();
      context.moveTo(0, -size * 0.52);
      context.lineTo(size * 0.43, size * 0.28);
      context.lineTo(0, size * 0.58);
      context.lineTo(-size * 0.43, size * 0.28);
      context.closePath();

      context.fillStyle = "rgba(255,255,255,0.13)";
      context.fill();

      context.strokeStyle = "rgba(255,255,255,0.38)";
      context.stroke();

      // Central point
      context.beginPath();
      context.arc(0, 0, 4 * scale, 0, Math.PI * 2);
      context.fillStyle = "#B5BE45";
      context.fill();

      context.restore();

      // Orbiting particles
      for (let i = 0; i < 16; i++) {
        const angle = time * (i % 2 === 0 ? 0.3 : -0.24) +
          (Math.PI * 2 * i) / 16;

        const radius = (115 + (i % 4) * 23) * scale;

        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius * 0.48;

        context.beginPath();
        context.arc(x, y, (i % 4 === 0 ? 3 : 1.7) * scale, 0, Math.PI * 2);

        context.fillStyle =
          i % 4 === 0
            ? "rgba(178,187,63,0.95)"
            : "rgba(255,255,255,0.5)";

        context.fill();
      }

      // Motion trails
      for (let i = 0; i < 5; i++) {
        const progress = (time * 0.17 + i / 5) % 1;
        const x = cx - 145 * scale + progress * 290 * scale;
        const y = cy + (105 + Math.sin(time + i) * 20) * scale;
        const trailWidth = (25 + progress * 35) * scale;

        const trailGradient = context.createLinearGradient(
          x - trailWidth,
          y,
          x + trailWidth,
          y
        );

        trailGradient.addColorStop(0, "rgba(115,122,26,0)");
        trailGradient.addColorStop(0.5, "rgba(145,153,40,0.65)");
        trailGradient.addColorStop(1, "rgba(115,122,26,0)");

        context.beginPath();
        context.moveTo(x - trailWidth, y);
        context.lineTo(x + trailWidth, y);

        context.strokeStyle = trailGradient;
        context.lineWidth = 1.4;
        context.stroke();
      }

      if (!reducedMotion && visible) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;

        if (visible) {
          cancelAnimationFrame(animationFrame);
          draw();
        } else {
          cancelAnimationFrame(animationFrame);
        }
      },
      { threshold: 0.05 }
    );

    resize();
    draw();
    observer.observe(canvas);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-black text-white">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />

      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-[#737A1A]/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px] rounded-full bg-[#737A1A]/10 blur-[140px]"
      />

      {/* Main layout */}
      <div className="relative mx-auto flex min-h-[calc(100svh-80px)] max-w-[1600px] flex-col justify-between px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-16">
        {/* Header strip */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#91982F]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A0A73C] sm:text-xs">
              Motion Graphics
            </span>
          </div>

          <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/35 sm:flex">
            <span>Movement</span>
            <span className="text-[#737A1A]">/</span>
            <span>Rhythm</span>
            <span className="text-[#737A1A]">/</span>
            <span>Impact</span>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 sm:hidden">
            <Sparkles size={15} />
          </div>
        </div>

        {/* Hero content */}
        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:py-10">
          {/* Copy */}
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9CA33B]" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/55 sm:text-[10px]">
                Ideas in motion
              </span>
            </div>

            <h1 className="text-[clamp(3.25rem,7vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
              Make your
              <span className="block">ideas</span>
              <span className="relative mt-2 inline-block text-[#91982F]">
                move
                <span
                  aria-hidden="true"
                  className="absolute -right-5 top-0 text-2xl font-normal tracking-normal text-white/40 sm:-right-7 sm:text-4xl"
                >
                  ↗
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-[2px] w-[78%] origin-left bg-[#737A1A]"
                />
              </span>
              <span className="text-white/35">.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              We transform static visuals into dynamic stories with motion
              graphics that explain ideas, build emotion and make your brand
              impossible to ignore.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#motion-graphics-types"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#737A1A] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A0A73C] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Explore motion services
                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-[#737A1A]/70 hover:bg-[#737A1A]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A0A73C]"
              >
                Start a project
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* Service qualities */}
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/45">
              <span className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#9CA33B]" />
                Story-driven
              </span>

              <span className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#9CA33B]" />
                Visually striking
              </span>

              <span className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#9CA33B]" />
                Brand-focused
              </span>
            </div>
          </div>

          {/* Motion artwork */}
          <div className="relative mx-auto w-full max-w-[620px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-5 rounded-[2.5rem] border border-white/[0.045] sm:-inset-7"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-10 rounded-full bg-[#737A1A]/10 blur-[75px]"
            />

            <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080808] shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:rounded-[2rem]">
              <canvas
                ref={canvasRef}
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              />

              {/* Artwork top label */}
              <div className="absolute left-4 right-4 top-4 flex items-center justify-between sm:left-6 sm:right-6 sm:top-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3 py-2 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A0A73C]" />
                  <span className="text-[9px] uppercase tracking-[0.19em] text-white/65 sm:text-[10px]">
                    Visual playground
                  </span>
                </div>

                <span className="font-mono text-[9px] tracking-widest text-white/30 sm:text-[10px]">
                  FRAME_001
                </span>
              </div>

              {/* Floating card: timeline */}
              <div className="absolute left-3 top-[22%] w-[132px] rounded-xl border border-white/10 bg-[#101010]/90 p-3 shadow-2xl backdrop-blur-xl sm:left-6 sm:w-[158px] sm:p-4 motion-safe:animate-[motionFloat_6s_ease-in-out_infinite]">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-wider text-white/45 sm:text-[10px]">
                    Timeline
                  </span>
                  <Layers3 size={13} className="text-[#A0A73C]" />
                </div>

                <div className="mt-3 space-y-1.5">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[72%] rounded-full bg-[#737A1A]" />
                  </div>
                  <div className="h-1.5 w-[78%] rounded-full bg-white/10" />
                  <div className="h-1.5 w-[54%] rounded-full bg-white/10" />
                </div>

                <div className="mt-3 flex justify-between font-mono text-[8px] text-white/35">
                  <span>00:04</span>
                  <span>00:12</span>
                </div>
              </div>

              {/* Floating card: playback */}
              <div className="absolute right-3 top-[43%] flex items-center gap-3 rounded-xl border border-[#737A1A]/35 bg-[#101108]/95 p-3 shadow-xl backdrop-blur-xl sm:right-6 sm:p-4 motion-safe:animate-[motionFloat_5s_ease-in-out_infinite_reverse]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#737A1A] text-white shadow-[0_0_25px_rgba(115,122,26,0.28)]">
                  <Play size={13} fill="currentColor" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-white/90 sm:text-xs">
                    Frame in motion
                  </p>
                  <p className="mt-1 text-[9px] text-white/40">
                    Design to animation
                  </p>
                </div>
              </div>

              {/* Floating motion label */}
              <div className="absolute bottom-[24%] left-3 rounded-lg border border-white/10 bg-black/65 px-3 py-2 backdrop-blur-md sm:bottom-[22%] sm:left-6">
                <div className="flex items-center gap-2">
                  <CirclePlay size={13} className="text-[#A0A73C]" />
                  <span className="text-[9px] uppercase tracking-[0.14em] text-white/65">
                    Frame by frame
                  </span>
                </div>
              </div>

              {/* Corner index */}
              <div className="absolute bottom-[23%] right-4 font-mono text-[9px] tracking-widest text-white/25 sm:right-6 sm:text-[10px]">
                01 — 24 FPS
              </div>

              {/* Bottom footer */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/10 bg-black/60 px-4 py-4 backdrop-blur-md sm:px-6 sm:py-5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35 sm:text-[10px]">
                    The creative process
                  </p>

                  <p className="mt-1.5 text-sm font-medium text-white/90 sm:text-base">
                    Design <span className="text-[#91982F]">→</span> Animate{" "}
                    <span className="text-[#91982F]">→</span> Deliver
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50">
                  <MoveUpRight size={15} />
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 -z-10 h-20 w-20 rounded-br-[2rem] border-b border-r border-[#737A1A]/40"
            />
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 sm:text-xs">
            IMX Digital Studio
          </span>

          <a
            href="#motion-graphics-types"
            className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-[#A0A73C] sm:text-xs"
          >
            Discover what’s possible
            <ArrowDown
              size={14}
              className="transition-transform group-hover:translate-y-1"
            />
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#737A1A]/50 to-transparent"
      />

      <style jsx>{`
        @keyframes motionFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -7px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(*) {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
