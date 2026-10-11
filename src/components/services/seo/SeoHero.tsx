
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  TrendingUp,
  Search,
  MousePointer2,
  BarChart3,
  Check,
  Sparkles,
} from "lucide-react";

export default function SeoHero() {
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

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      if (!reducedMotion) time += 0.012;

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width / 480, height / 480, 1);

      // Ambient glow
      const glow = ctx.createRadialGradient(
        cx,
        cy,
        10,
        cx,
        cy,
        Math.min(width, height) * 0.52
      );

      glow.addColorStop(0, "rgba(115,122,26,0.2)");
      glow.addColorStop(0.5, "rgba(115,122,26,0.06)");
      glow.addColorStop(1, "rgba(115,122,26,0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Background grid
      const gridSize = 36;

      ctx.strokeStyle = "rgba(255,255,255,0.045)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Orbit rings around search center
      [72, 110, 148].forEach((radius, index) => {
        ctx.save();
        ctx.translate(cx, cy - 5 * scale);
        ctx.rotate(time * (index % 2 === 0 ? 0.1 : -0.07));

        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          radius * scale,
          radius * scale * 0.72,
          0,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          index === 1
            ? "rgba(145,153,40,0.32)"
            : "rgba(255,255,255,0.09)";

        ctx.lineWidth = 1;
        ctx.setLineDash(index === 2 ? [3, 7] : []);
        ctx.stroke();

        ctx.restore();
      });

      ctx.setLineDash([]);

      // Search result cards
      const rows = [
        { offset: -128, width: 208 },
        { offset: -76, width: 180 },
        { offset: -24, width: 225 },
        { offset: 28, width: 192 },
        { offset: 80, width: 164 },
      ];

      rows.forEach((row, index) => {
        const rowWidth = row.width * scale;
        const rowHeight = 32 * scale;
        const x = cx - rowWidth / 2;
        const y =
          cy +
          row.offset * scale +
          Math.sin(time * 0.8 + index * 0.7) * 2 * scale;

        ctx.beginPath();
        ctx.roundRect(x, y, rowWidth, rowHeight, 7 * scale);

        ctx.fillStyle =
          index === 0
            ? "rgba(115,122,26,0.15)"
            : "rgba(255,255,255,0.045)";

        ctx.fill();

        ctx.strokeStyle =
          index === 0
            ? "rgba(145,153,40,0.55)"
            : "rgba(255,255,255,0.09)";

        ctx.lineWidth = 1;
        ctx.stroke();

        // Ranking indicator
        ctx.beginPath();
        ctx.arc(
          x + 13 * scale,
          y + rowHeight / 2,
          3.5 * scale,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          index === 0
            ? "rgba(178,187,63,1)"
            : "rgba(255,255,255,0.3)";

        ctx.fill();

        // Result text bars
        ctx.fillStyle =
          index === 0
            ? "rgba(255,255,255,0.48)"
            : "rgba(255,255,255,0.18)";

        ctx.fillRect(
          x + 24 * scale,
          y + 9 * scale,
          rowWidth * 0.39,
          3 * scale
        );

        ctx.fillStyle = "rgba(255,255,255,0.08)";

        ctx.fillRect(
          x + 24 * scale,
          y + 17 * scale,
          rowWidth * 0.57,
          2.5 * scale
        );

        // Rank badge
        ctx.font = `600 ${Math.max(8, 9 * scale)}px Arial`;
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";

        ctx.fillStyle =
          index === 0
            ? "rgba(190,198,72,0.95)"
            : "rgba(255,255,255,0.28)";

        ctx.fillText(
          `0${index + 1}`,
          x + rowWidth - 10 * scale,
          y + rowHeight / 2
        );
      });

      // Upward organic growth curve
      const graphWidth = Math.min(width * 0.72, 300);
      const graphHeight = Math.min(height * 0.31, 145);
      const startX = cx - graphWidth / 2;
      const startY = cy + graphHeight * 0.72;

      ctx.beginPath();

      for (let i = 0; i <= 100; i++) {
        const p = i / 100;

        const x = startX + p * graphWidth;
        const y =
          startY -
          p * graphHeight -
          Math.sin(p * Math.PI * 3 + time) * 2 * scale;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(145,153,40,0.95)";
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Graph glow
      ctx.save();
      ctx.shadowBlur = 12;
      ctx.shadowColor = "rgba(145,153,40,0.5)";
      ctx.strokeStyle = "rgba(145,153,40,0.5)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(startX + graphWidth * 0.58, startY - graphHeight * 0.58);
      ctx.lineTo(startX + graphWidth * 0.82, startY - graphHeight * 0.8);
      ctx.stroke();

      ctx.restore();

      // Animated data points on the graph
      for (let i = 0; i < 9; i++) {
        const p = (time * 0.13 + i / 9) % 1;

        const x = startX + p * graphWidth;
        const y =
          startY -
          p * graphHeight -
          Math.sin(p * Math.PI * 3 + time) * 2 * scale;

        ctx.beginPath();
        ctx.arc(x, y, (i % 3 === 0 ? 3 : 1.7) * scale, 0, Math.PI * 2);

        ctx.fillStyle =
          i % 3 === 0
            ? "rgba(190,198,72,1)"
            : "rgba(255,255,255,0.65)";

        ctx.fill();
      }

      // Search symbol in the center
      const searchY = cy - 5 * scale;
      const searchRadius = 29 * scale;

      ctx.save();

      ctx.shadowBlur = 28;
      ctx.shadowColor = "rgba(115,122,26,0.32)";

      ctx.beginPath();
      ctx.arc(cx, searchY, searchRadius, 0, Math.PI * 2);

      const searchGradient = ctx.createLinearGradient(
        cx - searchRadius,
        searchY - searchRadius,
        cx + searchRadius,
        searchY + searchRadius
      );

      searchGradient.addColorStop(0, "rgba(145,153,40,0.98)");
      searchGradient.addColorStop(1, "rgba(82,88,17,0.98)");

      ctx.fillStyle = searchGradient;
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(255,255,255,0.75)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Magnifying glass
      ctx.beginPath();
      ctx.arc(
        cx - 3 * scale,
        searchY - 3 * scale,
        10 * scale,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle = "rgba(255,255,255,0.95)";
      ctx.lineWidth = 2.7 * scale;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(
        cx + 4 * scale,
        searchY + 4 * scale
      );

      ctx.lineTo(
        cx + 14 * scale,
        searchY + 14 * scale
      );

      ctx.strokeStyle = "rgba(255,255,255,0.95)";
      ctx.lineWidth = 3 * scale;
      ctx.lineCap = "round";
      ctx.stroke();

      ctx.restore();

      // Floating particles
      for (let i = 0; i < 15; i++) {
        const angle = time * (i % 2 === 0 ? 0.22 : -0.18) +
          (Math.PI * 2 * i) / 15;

        const radius = (145 + (i % 3) * 18) * scale;

        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius * 0.64;

        ctx.beginPath();
        ctx.arc(x, y, (i % 4 === 0 ? 2.7 : 1.5) * scale, 0, Math.PI * 2);

        ctx.fillStyle =
          i % 4 === 0
            ? "rgba(178,187,63,0.95)"
            : "rgba(255,255,255,0.38)";

        ctx.fill();
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
    <section className="relative isolate overflow-hidden bg-black text-white">
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

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-[#737A1A]/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-[#737A1A]/10 blur-[140px]"
      />

      {/* Main layout */}
      <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-[1600px] items-center gap-12 px-6 py-20 sm:px-8 md:py-24 lg:grid-cols-[1fr_0.95fr] lg:gap-10 lg:px-12 lg:py-24 xl:px-16">
        {/* Left content */}
        <div className="relative z-10 max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#737A1A]/30 bg-[#737A1A]/[0.08] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#737A1A] opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A0A73C]" />
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-xs">
              Search Engine Optimization
            </span>

            <Sparkles size={13} className="text-[#A0A73C]" />
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-[clamp(2.8rem,5.7vw,5.8rem)] font-semibold leading-[0.99] tracking-[-0.065em]">
            Be visible.
            <span className="block">Be relevant.</span>
            <span className="mt-2 block text-[#91982F]">
              Be discovered.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            We build smarter SEO foundations that help your business reach
            the right audience, improve search visibility and turn organic
            discovery into meaningful opportunities.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#seo-types"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#737A1A] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A0A73C] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Explore SEO services
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

          {/* Service benefits */}
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/50">
            <span className="inline-flex items-center gap-2">
              <Check size={14} className="text-[#A0A73C]" />
              Search-focused strategy
            </span>

            <span className="inline-flex items-center gap-2">
              <Check size={14} className="text-[#A0A73C]" />
              Technical foundations
            </span>

            <span className="inline-flex items-center gap-2">
              <Check size={14} className="text-[#A0A73C]" />
              Sustainable growth
            </span>
          </div>

          {/* SEO process */}
          <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-5">
            {[
              { number: "01", title: "Discover", subtitle: "Find opportunities" },
              { number: "02", title: "Optimize", subtitle: "Build relevance" },
              { number: "03", title: "Grow", subtitle: "Track progress" },
            ].map((item, index) => (
              <div
                key={item.number}
                className={
                  index === 0
                    ? ""
                    : "border-l border-white/10 pl-4 sm:pl-6"
                }
              >
                <p className="text-[10px] font-medium tracking-[0.18em] text-[#A0A73C]">
                  {item.number}
                </p>

                <p className="mt-2 text-sm font-semibold text-white/90">
                  {item.title}
                </p>

                <p className="mt-1 text-[10px] text-white/40 sm:text-xs">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-5 rounded-[2.5rem] border border-white/[0.045] sm:-inset-7"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-10 rounded-full bg-[#737A1A]/10 blur-[80px]"
          />

          <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080808] shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:rounded-[2rem]">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            />

            {/* Panel header */}
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between sm:left-6 sm:right-6 sm:top-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-3 py-2 backdrop-blur-md">
                <Search size={12} className="text-[#A0A73C]" />

                <span className="text-[9px] uppercase tracking-[0.18em] text-white/65 sm:text-[10px]">
                  Organic search
                </span>
              </div>

              <span className="font-mono text-[9px] tracking-widest text-white/30 sm:text-[10px]">
                SEO / 001
              </span>
            </div>

            {/* Floating analytics card */}
            <div className="absolute right-3 top-[19%] w-[132px] rounded-xl border border-white/10 bg-[#101010]/90 p-3 shadow-2xl backdrop-blur-xl sm:right-6 sm:w-[160px] sm:p-4 motion-safe:animate-[seoFloat_6s_ease-in-out_infinite]">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-wider text-white/45 sm:text-[10px]">
                  Visibility
                </span>

                <TrendingUp size={13} className="text-[#A0A73C]" />
              </div>

              <div className="mt-3 flex h-9 items-end gap-1">
                {[24, 35, 29, 43, 38, 58, 48, 68, 84].map(
                  (bar, index) => (
                    <div
                      key={index}
                      className={`flex-1 rounded-t-sm ${
                        index === 8 ? "bg-[#91982F]" : "bg-white/20"
                      }`}
                      style={{ height: `${bar * 0.38}px` }}
                    />
                  )
                )}
              </div>

              <p className="mt-2 text-[9px] text-white/40">
                Organic discovery
              </p>
            </div>

            {/* Floating keyword card */}
            <div className="absolute bottom-[24%] left-3 w-[145px] rounded-xl border border-[#737A1A]/35 bg-[#101108]/95 p-3 shadow-xl backdrop-blur-xl sm:bottom-[22%] sm:left-6 sm:w-[172px] sm:p-4 motion-safe:animate-[seoFloat_5s_ease-in-out_infinite_reverse]">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#737A1A]/20">
                  <Search size={14} className="text-[#B5BE45]" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-white/90 sm:text-xs">
                    Search intent
                  </p>

                  <p className="mt-1 text-[9px] text-white/40">
                    Relevant discovery
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-full border border-white/10 px-2 py-1 text-[8px] text-white/50">
                  Keywords
                </span>

                <span className="rounded-full border border-[#737A1A]/30 bg-[#737A1A]/10 px-2 py-1 text-[8px] text-[#B5BE45]">
                  Intent
                </span>
              </div>
            </div>

            {/* Floating click signal */}
            <div className="absolute right-3 top-[46%] hidden items-center gap-2 rounded-full border border-white/10 bg-black/75 px-3 py-2 shadow-xl backdrop-blur-md sm:flex">
              <MousePointer2 size={13} className="text-[#A0A73C]" />
              <span className="text-[9px] text-white/60">
                Search to discovery
              </span>
            </div>

            {/* Bottom panel footer */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/10 bg-black/65 px-4 py-4 backdrop-blur-md sm:px-6 sm:py-5">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/35 sm:text-[10px]">
                  The SEO journey
                </p>

                <p className="mt-1.5 text-sm font-semibold text-white/90 sm:text-base">
                  Search <span className="text-[#91982F]">→</span> Visibility{" "}
                  <span className="text-[#91982F]">→</span> Growth
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#A0A73C]">
                <BarChart3 size={15} />
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

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#737A1A]/50 to-transparent"
      />

      <style jsx>{`
        @keyframes seoFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -7px, 0);
          }
        }
      `}</style>
    </section>
  );
}
