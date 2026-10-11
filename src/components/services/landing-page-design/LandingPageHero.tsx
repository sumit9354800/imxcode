
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  MousePointer2,
  TrendingUp,
  Check,
  Sparkles,
} from "lucide-react";

export default function LandingPageHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let time = 0;
    let width = 0;
    let height = 0;
    let isVisible = true;

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

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      if (!reducedMotion) time += 0.012;

      const cx = width * 0.5;
      const cy = height * 0.48;
      const scale = Math.min(width / 440, height / 440, 1);

      // Ambient radial glow
      const glowRadius = Math.min(width, height) * 0.49;
      const glow = ctx.createRadialGradient(
        cx,
        cy,
        8,
        cx,
        cy,
        glowRadius
      );

      glow.addColorStop(0, "rgba(115, 122, 26, 0.19)");
      glow.addColorStop(0.48, "rgba(115, 122, 26, 0.065)");
      glow.addColorStop(1, "rgba(115, 122, 26, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Orbital rings
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1, 0.72);

      [105, 145, 185].forEach((radius, index) => {
        ctx.beginPath();
        ctx.arc(0, 0, radius * scale, 0, Math.PI * 2);

        ctx.strokeStyle =
          index === 1
            ? "rgba(115, 122, 26, 0.2)"
            : "rgba(255, 255, 255, 0.075)";

        ctx.lineWidth = 1;
        ctx.setLineDash(index === 2 ? [3, 8] : []);
        ctx.stroke();
      });

      ctx.setLineDash([]);
      ctx.restore();

      // Funnel layers
      const funnelLayers = [
        { offset: -132, layerWidth: 220, label: "ATTENTION" },
        { offset: -53, layerWidth: 190, label: "INTEREST" },
        { offset: 26, layerWidth: 160, label: "TRUST" },
        { offset: 105, layerWidth: 130, label: "CONVERT" },
      ];

      funnelLayers.forEach((layer, index) => {
        const layerHeight = 49;
        const y =
          cy +
          layer.offset * scale +
          Math.sin(time * 1.15 + index * 0.65) * 4 * scale;

        const layerWidth = layer.layerWidth * scale;
        const x = cx - layerWidth / 2;
        const radius = 11 * scale;

        ctx.save();

        // Layer shadow
        ctx.shadowBlur = index === 3 ? 24 : 0;
        ctx.shadowColor = "rgba(115, 122, 26, 0.28)";

        ctx.beginPath();
        ctx.roundRect(
          x,
          y,
          layerWidth,
          layerHeight * scale,
          radius
        );

        const fill = ctx.createLinearGradient(x, y, x + layerWidth, y);

        if (index === 3) {
          fill.addColorStop(0, "rgba(115, 122, 26, 0.96)");
          fill.addColorStop(1, "rgba(145, 153, 40, 0.88)");
        } else {
          fill.addColorStop(0, "rgba(255,255,255,0.075)");
          fill.addColorStop(1, "rgba(255,255,255,0.025)");
        }

        ctx.fillStyle = fill;
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.strokeStyle =
          index === 3
            ? "rgba(190, 198, 72, 0.75)"
            : "rgba(255, 255, 255, 0.14)";

        ctx.lineWidth = 1;
        ctx.stroke();

        // Small left indicator
        ctx.beginPath();
        ctx.arc(
          x + 16 * scale,
          y + (layerHeight * scale) / 2,
          3 * scale,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          index === 3
            ? "rgba(255,255,255,0.95)"
            : "rgba(151, 160, 50, 0.9)";

        ctx.fill();

        // Layer label
        ctx.font = `600 ${Math.max(8, 9 * scale)}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle =
          index === 3
            ? "rgba(255,255,255,0.96)"
            : "rgba(255,255,255,0.68)";

        ctx.fillText(
          layer.label,
          cx + 5 * scale,
          y + (layerHeight * scale) / 2
        );

        ctx.restore();

        // Connecting indicators
        if (index < funnelLayers.length - 1) {
          const lineStart = y + layerHeight * scale + 3 * scale;
          const lineEnd = lineStart + 25 * scale;

          ctx.beginPath();
          ctx.moveTo(cx, lineStart);
          ctx.lineTo(cx, lineEnd);

          ctx.strokeStyle = "rgba(115, 122, 26, 0.45)";
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(cx, lineEnd, 2 * scale, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(151, 160, 50, 0.9)";
          ctx.fill();
        }
      });

      // Moving particles
      for (let i = 0; i < 22; i++) {
        const progress = (time * 0.17 + i / 22) % 1;
        const y = cy - 177 * scale + progress * 355 * scale;
        const spread = (155 - progress * 95) * scale;
        const x =
          cx +
          Math.sin(i * 2.4 + time * 0.8) * spread * 0.7;

        const alpha = 0.25 + Math.sin(time * 2 + i) * 0.18;

        ctx.beginPath();
        ctx.arc(x, y, (i % 3 === 0 ? 2.4 : 1.5) * scale, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(151, 160, 50, ${Math.max(0.1, alpha)})`;
        ctx.fill();
      }

      // Center focus point
      const pulse = 4 + Math.sin(time * 2) * 1.2;

      ctx.beginPath();
      ctx.arc(cx, cy + 2 * scale, pulse * scale, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(190, 198, 72, 0.2)";
      ctx.stroke();

      if (!reducedMotion && isVisible) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;

        if (isVisible) {
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
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.75) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.75) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />

      {/* Ambient lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/4 h-[420px] w-[420px] rounded-full bg-[#737A1A]/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-[#737A1A]/10 blur-[140px]"
      />

      {/* Main content */}
      <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-[1600px] items-center gap-14 px-6 py-20 sm:px-8 md:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-12 lg:py-24 xl:px-16">
        {/* Left content */}
        <div className="relative z-10 max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#737A1A]/30 bg-[#737A1A]/[0.08] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#737A1A] opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9CA33B]" />
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-xs">
              Landing Page Design
            </span>

            <Sparkles size={13} className="text-[#9CA33B]" />
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-[clamp(2.7rem,5.5vw,5.5rem)] font-semibold leading-[0.99] tracking-[-0.065em]">
            Make every
            <span className="block">click count.</span>
            <span className="mt-2 block text-[#91982F]">
              Turn visits into action.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            We create strategic landing pages that make your offer clear,
            earn customer trust, and turn more of your traffic into meaningful
            action.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#landing-page-types"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#737A1A] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9CA33B] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Explore our work
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-[#737A1A]/70 hover:bg-[#737A1A]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9CA33B]"
            >
              Let's build your page
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/50">
            <span className="inline-flex items-center gap-2">
              <Check size={14} className="text-[#9CA33B]" />
              Strategy-led design
            </span>

            <span className="hidden h-4 w-px bg-white/15 sm:block" />

            <span className="inline-flex items-center gap-2">
              <Check size={14} className="text-[#9CA33B]" />
              Responsive experiences
            </span>

            <span className="hidden h-4 w-px bg-white/15 sm:block" />

            <span className="inline-flex items-center gap-2">
              <Check size={14} className="text-[#9CA33B]" />
              Conversion-focused
            </span>
          </div>

          {/* Process strip */}
          <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-5">
            {[
              { number: "01", title: "Clarify", text: "The message" },
              { number: "02", title: "Engage", text: "The visitor" },
              { number: "03", title: "Convert", text: "The action" },
            ].map((step, index) => (
              <div
                key={step.number}
                className={`${
                  index !== 0 ? "border-l border-white/10 pl-4 sm:pl-6" : ""
                }`}
              >
                <p className="text-[10px] font-medium tracking-[0.18em] text-[#9CA33B]">
                  {step.number}
                </p>
                <p className="mt-2 text-sm font-semibold text-white/90">
                  {step.title}
                </p>
                <p className="mt-1 text-xs text-white/40">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">
          {/* Outer decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-5 rounded-[2.5rem] border border-white/[0.045]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 rounded-full bg-[#737A1A]/[0.07] blur-[75px]"
          />

          {/* Main visual panel */}
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080808] shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:rounded-[2rem]">
            {/* Panel grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            {/* Canvas illustration */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            />

            {/* Panel header */}
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between sm:left-6 sm:right-6 sm:top-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9CA33B]" />
                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-[10px]">
                  Conversion system
                </span>
              </div>

              <span className="font-mono text-[10px] tracking-widest text-white/30">
                LP / 001
              </span>
            </div>

            {/* Floating top card */}
            <div className="absolute right-3 top-[19%] w-[125px] rounded-xl border border-white/10 bg-[#111]/90 p-3 shadow-xl backdrop-blur-md sm:right-6 sm:w-[150px] sm:p-4 motion-safe:animate-[floatCard_5s_ease-in-out_infinite]">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-wider text-white/45 sm:text-[10px]">
                  Engagement
                </span>
                <TrendingUp size={13} className="text-[#9CA33B]" />
              </div>

              <div className="mt-3 flex items-end gap-1">
                {[25, 40, 33, 58, 46, 72, 88].map((bar, index) => (
                  <span
                    key={index}
                    className={`flex-1 rounded-t-sm ${
                      index === 6 ? "bg-[#91982F]" : "bg-white/20"
                    }`}
                    style={{ height: `${bar * 0.32}px` }}
                  />
                ))}
              </div>

              <p className="mt-2 text-[9px] text-white/40">
                Designed to engage
              </p>
            </div>

            {/* Floating conversion card */}
            <div className="absolute bottom-[19%] left-3 w-[145px] rounded-xl border border-[#737A1A]/35 bg-[#101108]/95 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:bottom-[18%] sm:left-6 sm:w-[170px] sm:p-4 motion-safe:animate-[floatCard_6s_ease-in-out_infinite_reverse]">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#737A1A]/20">
                  <Check size={14} className="text-[#B4BD4C]" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-white/90 sm:text-xs">
                    Clear next step
                  </p>
                  <p className="mt-0.5 text-[9px] text-white/40">
                    Friction-free journey
                  </p>
                </div>
              </div>
            </div>

            {/* Cursor detail */}
            <div className="absolute bottom-[31%] right-[12%] hidden items-center gap-2 rounded-full border border-white/10 bg-black/75 px-3 py-2 shadow-xl backdrop-blur-md sm:flex">
              <MousePointer2
                size={14}
                className="text-[#B4BD4C]"
              />
              <span className="text-[10px] text-white/65">
                One clear action
              </span>
            </div>

            {/* Bottom panel footer */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between border-t border-white/10 bg-black/55 px-4 py-4 backdrop-blur-md sm:px-6 sm:py-5">
              <div>
                <p className="text-[9px] uppercase tracking-[0.22em] text-white/35 sm:text-[10px]">
                  The journey
                </p>
                <p className="mt-1.5 text-sm font-semibold text-white sm:text-base">
                  Attention <span className="text-[#91982F]">→</span> Action
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="h-1.5 w-5 rounded-full bg-[#91982F]" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              </div>
            </div>
          </div>

          {/* Corner detail */}
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-br-[2rem] border-b border-r border-[#737A1A]/35"
          />
        </div>
      </div>

      {/* Bottom edge */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#737A1A]/40 to-transparent"
      />

      <style jsx>{`
        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
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
