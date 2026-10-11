
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  MousePointer2,
  PenTool,
  Type,
  Layers3,
  Eye,
  Sparkles,
  LayoutDashboard,
  Check,
  MoveUpRight,
} from "lucide-react";

const components = [
  { name: "Typography", icon: Type },
  { name: "Buttons", icon: MousePointer2 },
  { name: "Inputs", icon: PenTool },
  { name: "Cards", icon: Layers3 },
  { name: "Navigation", icon: LayoutDashboard },
];

export default function UiUxHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeComponent, setActiveComponent] = useState("Buttons");
  const [previewMode, setPreviewMode] = useState<"Desktop" | "Mobile">(
    "Desktop"
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let frame = 0;
    let time = 0;
    let visible = true;

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

      if (!reducedMotion) time += 0.008;

      const cx = width / 2;
      const cy = height / 2;

      // Ambient center glow
      const glow = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        Math.max(width, height) * 0.65
      );

      glow.addColorStop(0, "rgba(115,122,26,0.13)");
      glow.addColorStop(0.55, "rgba(115,122,26,0.035)");
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Fine grid
      ctx.strokeStyle = "rgba(255,255,255,0.055)";
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += 28) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += 28) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Orbital design guides
      const orbitScale = Math.min(width / 440, height / 440, 1);

      [75, 120, 165].forEach((radius, index) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * (index % 2 === 0 ? 0.12 : -0.08));

        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          radius * orbitScale,
          radius * orbitScale * 0.72,
          0,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          index === 1
            ? "rgba(145,153,40,0.28)"
            : "rgba(255,255,255,0.1)";

        ctx.setLineDash(index === 2 ? [3, 7] : []);
        ctx.stroke();
        ctx.restore();
      });

      ctx.setLineDash([]);

      // Moving anchor points
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12 + time * 0.18;
        const radius = (145 + (i % 3) * 15) * orbitScale;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius * 0.72;

        ctx.beginPath();
        ctx.arc(x, y, i % 3 === 0 ? 2.4 : 1.3, 0, Math.PI * 2);
        ctx.fillStyle =
          i % 3 === 0
            ? "rgba(190,198,72,0.95)"
            : "rgba(255,255,255,0.35)";
        ctx.fill();
      }

      // Central design system node
      const nodeRadius = 43 * orbitScale;

      ctx.save();
      ctx.shadowBlur = 32;
      ctx.shadowColor = "rgba(115,122,26,0.24)";

      ctx.beginPath();
      ctx.arc(cx, cy, nodeRadius, 0, Math.PI * 2);

      const gradient = ctx.createLinearGradient(
        cx - nodeRadius,
        cy - nodeRadius,
        cx + nodeRadius,
        cy + nodeRadius
      );

      gradient.addColorStop(0, "rgba(115,122,26,0.3)");
      gradient.addColorStop(1, "rgba(115,122,26,0.04)");

      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.strokeStyle = "rgba(160,167,60,0.65)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Central geometric symbol
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(Math.sin(time * 0.6) * 0.08);

      ctx.strokeStyle = "rgba(190,198,72,0.95)";
      ctx.lineWidth = 1.4;

      ctx.strokeRect(-15, -15, 30, 30);
      ctx.strokeRect(-8, -8, 16, 16);

      ctx.beginPath();
      ctx.moveTo(-23, 0);
      ctx.lineTo(-15, 0);
      ctx.moveTo(15, 0);
      ctx.lineTo(23, 0);
      ctx.moveTo(0, -23);
      ctx.lineTo(0, -15);
      ctx.moveTo(0, 15);
      ctx.lineTo(0, 23);
      ctx.stroke();

      ctx.restore();

      // Crosshair details
      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.lineWidth = 1;

      const crossSize = 7;

      [
        [cx - 175 * orbitScale, cy - 120 * orbitScale],
        [cx + 175 * orbitScale, cy - 120 * orbitScale],
        [cx - 175 * orbitScale, cy + 120 * orbitScale],
        [cx + 175 * orbitScale, cy + 120 * orbitScale],
      ].forEach(([x, y]) => {
        ctx.beginPath();
        ctx.moveTo(x - crossSize, y);
        ctx.lineTo(x + crossSize, y);
        ctx.moveTo(x, y - crossSize);
        ctx.lineTo(x, y + crossSize);
        ctx.stroke();
      });

      if (!reducedMotion && visible) {
        frame = requestAnimationFrame(draw);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;

        if (visible) {
          cancelAnimationFrame(frame);
          draw();
        } else {
          cancelAnimationFrame(frame);
        }
      },
      { threshold: 0.05 }
    );

    resize();
    draw();
    observer.observe(canvas);

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "68px 68px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-[#737A1A]/15 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.07] blur-[130px]"
      />

      {/* Main */}
      <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-[1600px] items-center gap-14 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:px-12 lg:py-24 xl:px-16">
        {/* Left content */}
        <div className="relative z-10 max-w-2xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-9 bg-[#91982F]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55 sm:text-xs">
              UI/UX Design Studio
            </span>

            <Sparkles size={14} className="text-[#91982F]" />
          </div>

          <h1 className="text-[clamp(3.1rem,6.2vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
            Design that
            <span className="block">feels right.</span>
            <span className="mt-2 block text-[#91982F]">
              Works better.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            We turn complex ideas into clear, intuitive digital experiences.
            From first wireframe to polished interface, every detail is
            designed to make your product easier to understand and better
            to use.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#ui-ux-types"
              className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#737A1A] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A0A73C] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Explore our design services
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-3 border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#737A1A]/60 hover:bg-[#737A1A]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A0A73C]"
            >
              Start a project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Benefits */}
          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/50">
            {[
              "User-first thinking",
              "Purposeful interfaces",
              "Scalable design systems",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check size={13} className="text-[#A0A73C]" />
                {item}
              </span>
            ))}
          </div>

          {/* Process strip */}
          <div className="mt-12 grid grid-cols-3 border-t border-white/10 pt-5">
            {[
              { number: "01", title: "Discover", text: "Understand people" },
              { number: "02", title: "Design", text: "Shape the experience" },
              { number: "03", title: "Validate", text: "Refine every detail" },
            ].map((step, index) => (
              <div
                key={step.number}
                className={
                  index === 0 ? "pr-3" : "border-l border-white/10 pl-4 sm:pl-6"
                }
              >
                <span className="font-mono text-[10px] text-[#A0A73C]">
                  / {step.number}
                </span>

                <p className="mt-2 text-sm font-semibold text-white/90">
                  {step.title}
                </p>

                <p className="mt-1 text-[10px] leading-5 text-white/40 sm:text-xs">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right design visual */}
        <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">
          {/* Outer frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 border border-white/[0.06] sm:-inset-6"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-10 rounded-full bg-[#737A1A]/10 blur-[90px]"
          />

          <div className="relative overflow-hidden border border-white/10 bg-[#080808] shadow-[0_35px_100px_rgba(0,0,0,0.55)]">
            {/* Window header */}
            <div className="flex h-12 items-center justify-between border-b border-white/10 px-4 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>

              <span className="text-[8px] uppercase tracking-[0.22em] text-white/35 sm:text-[9px]">
                IMX / Experience Lab
              </span>

              <div className="flex items-center gap-2 text-[#A0A73C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A0A73C]" />
                <span className="text-[8px] uppercase tracking-wider">
                  Live preview
                </span>
              </div>
            </div>

            <div className="grid grid-cols-[100px_minmax(0,1fr)] sm:grid-cols-[145px_minmax(0,1fr)]">
              {/* Sidebar */}
              <aside className="border-r border-white/10 bg-white/[0.012] p-2.5 sm:p-4">
                <div className="mb-5 flex items-center gap-2 px-1.5 pt-1">
                  <div className="flex h-6 w-6 items-center justify-center bg-[#737A1A]/20 text-[#A0A73C]">
                    <Layers3 size={12} />
                  </div>

                  <span className="hidden text-[9px] font-semibold tracking-wide text-white/70 sm:block">
                    Design system
                  </span>
                </div>

                <p className="mb-3 px-1.5 text-[7px] uppercase tracking-[0.15em] text-white/30 sm:text-[8px]">
                  Components
                </p>

                <div className="space-y-1">
                  {components.map(({ name, icon: Icon }) => {
                    const active = activeComponent === name;

                    return (
                      <button
                        key={name}
                        type="button"
                        onClick={() => setActiveComponent(name)}
                        aria-pressed={active}
                        className={`flex w-full items-center gap-2 border px-2 py-2.5 text-left transition-colors duration-200 sm:px-2.5 ${
                          active
                            ? "border-[#737A1A]/35 bg-[#737A1A]/10 text-white/90"
                            : "border-transparent text-white/35 hover:border-white/10 hover:text-white/70"
                        }`}
                      >
                        <Icon
                          size={12}
                          className={
                            active ? "shrink-0 text-[#A0A73C]" : "shrink-0"
                          }
                        />

                        <span className="truncate text-[8px] sm:text-[9px]">
                          {name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="mb-4 text-[7px] uppercase tracking-[0.15em] text-white/30 sm:text-[8px]">
                    Color palette
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {["#737A1A", "#A0A73C", "#FFFFFF", "#343434"].map(
                      (color) => (
                        <div
                          key={color}
                          title={color}
                          className="h-4 w-4 border border-white/10 sm:h-5 sm:w-5"
                          style={{ backgroundColor: color }}
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="mt-6 hidden border-t border-white/10 pt-4 sm:block">
                  <div className="flex items-center gap-2 text-white/35">
                    <Type size={12} />
                    <span className="text-[8px] uppercase tracking-wider">
                      Typography
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="h-2.5 w-16 bg-white/20" />
                    <div className="h-1.5 w-20 bg-white/10" />
                    <div className="h-1.5 w-12 bg-white/10" />
                  </div>
                </div>
              </aside>

              {/* Main canvas */}
              <div className="relative min-w-0">
                <div className="flex items-center justify-between border-b border-white/10 px-3 py-3 sm:px-5">
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.18em] text-white/35">
                      Canvas / 01
                    </p>

                    <p className="mt-1 text-[10px] font-medium text-white/80 sm:text-xs">
                      Interface playground
                    </p>
                  </div>

                  <div className="flex items-center gap-1 rounded-full border border-white/10 p-1">
                    {(["Desktop", "Mobile"] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setPreviewMode(mode)}
                        aria-pressed={previewMode === mode}
                        className={`px-2 py-1 text-[8px] transition-colors sm:px-3 ${
                          previewMode === mode
                            ? "bg-[#737A1A] text-white"
                            : "text-white/40 hover:text-white/80"
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Canvas and orbit background */}
                <div className="relative min-h-[390px] overflow-hidden p-3 sm:min-h-[450px] sm:p-5">
                  <canvas
                    ref={canvasRef}
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full"
                  />

                  {/* Preview card */}
                  <div
                    className={`relative z-10 mx-auto mt-4 border border-white/10 bg-[#0c0c0c] shadow-2xl transition-all duration-500 ${
                      previewMode === "Mobile"
                        ? "max-w-[210px]"
                        : "max-w-[360px]"
                    }`}
                  >
                    {/* Mini website navbar */}
                    <div className="flex items-center justify-between border-b border-white/10 px-3 py-3 sm:px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="h-4 w-4 bg-[#737A1A]" />
                        <span className="h-1.5 w-10 bg-white/35" />
                      </div>

                      {previewMode === "Desktop" ? (
                        <div className="flex items-center gap-2">
                          <span className="h-1 w-5 bg-white/15" />
                          <span className="h-1 w-5 bg-white/15" />
                          <span className="h-1 w-5 bg-white/15" />
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <span className="block h-px w-4 bg-white/50" />
                          <span className="block h-px w-4 bg-white/50" />
                        </div>
                      )}
                    </div>

                    {/* Hero preview */}
                    <div className="relative overflow-hidden px-3 py-5 sm:px-5 sm:py-7">
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#737A1A]/15 blur-3xl" />

                      <div className="relative">
                        <span className="inline-flex items-center gap-1.5 text-[7px] uppercase tracking-[0.15em] text-[#A0A73C]">
                          <span className="h-1 w-1 rounded-full bg-[#A0A73C]" />
                          {activeComponent} / Preview
                        </span>

                        <h3 className="mt-3 max-w-[230px] text-xl font-semibold leading-[1.05] tracking-[-0.06em] text-white sm:text-3xl">
                          Less noise.
                          <span className="block text-[#91982F]">
                            More meaning.
                          </span>
                        </h3>

                        <p className="mt-3 max-w-[220px] text-[8px] leading-4 text-white/45 sm:text-[9px] sm:leading-5">
                          A thoughtful digital experience built around what
                          people need.
                        </p>

                        <div className="mt-4 flex items-center gap-2">
                          <span className="inline-flex items-center gap-2 bg-[#737A1A] px-3 py-2 text-[8px] font-medium text-white">
                            Explore
                            <MoveUpRight size={10} />
                          </span>

                          <span className="inline-flex items-center gap-1.5 border border-white/10 px-2.5 py-2 text-[8px] text-white/55">
                            <Eye size={10} />
                            Preview
                          </span>
                        </div>
                      </div>

                      {/* Selected component details */}
                      <div className="relative mt-5 border border-white/10 bg-white/[0.025] p-3">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-[8px] font-medium text-white/75">
                            {activeComponent}
                          </span>

                          <span className="text-[7px] text-[#A0A73C]">
                            Active state
                          </span>
                        </div>

                        {activeComponent === "Typography" && (
                          <div className="space-y-2">
                            <div className="text-lg font-semibold tracking-tight">
                              Aa Bb Cc
                            </div>
                            <div className="h-1.5 w-4/5 bg-white/20" />
                            <div className="h-1.5 w-3/5 bg-white/10" />
                          </div>
                        )}

                        {activeComponent === "Buttons" && (
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-[#737A1A] px-3 py-2 text-[8px]">
                              Primary action
                            </span>
                            <span className="border border-white/15 px-3 py-2 text-[8px] text-white/60">
                              Secondary
                            </span>
                          </div>
                        )}

                        {activeComponent === "Inputs" && (
                          <div className="space-y-2">
                            <div className="border border-white/15 px-3 py-2 text-[8px] text-white/30">
                              Your email address
                            </div>
                            <div className="h-1 w-20 bg-[#737A1A]/70" />
                          </div>
                        )}

                        {activeComponent === "Cards" && (
                          <div className="grid grid-cols-2 gap-2">
                            <div className="border border-white/10 p-2">
                              <div className="h-4 w-4 bg-[#737A1A]/40" />
                              <div className="mt-3 h-1.5 w-full bg-white/20" />
                              <div className="mt-2 h-1 w-2/3 bg-white/10" />
                            </div>
                            <div className="border border-white/10 p-2">
                              <div className="h-4 w-4 border border-[#737A1A]/50" />
                              <div className="mt-3 h-1.5 w-full bg-white/20" />
                              <div className="mt-2 h-1 w-2/3 bg-white/10" />
                            </div>
                          </div>
                        )}

                        {activeComponent === "Navigation" && (
                          <div className="flex items-center justify-between border border-white/10 p-2">
                            <div className="h-3 w-3 bg-[#737A1A]" />
                            <div className="flex gap-2">
                              <span className="h-1 w-4 bg-white/20" />
                              <span className="h-1 w-4 bg-white/20" />
                              <span className="h-1 w-4 bg-white/20" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Design metrics */}
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {[
                          ["01", "Clarity"],
                          ["02", "Consistency"],
                          ["03", "Usability"],
                        ].map(([number, label]) => (
                          <div
                            key={number}
                            className="border border-white/[0.08] px-2 py-2"
                          >
                            <span className="text-[7px] text-[#A0A73C]">
                              {number}
                            </span>
                            <p className="mt-1 text-[7px] text-white/50">
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Preview footer */}
                    <div className="flex items-center justify-between border-t border-white/10 px-3 py-2.5 sm:px-4">
                      <span className="text-[7px] uppercase tracking-[0.15em] text-white/30">
                        Crafted by IMX
                      </span>

                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#A0A73C]" />
                        <span className="text-[7px] text-white/45">
                          Design system ready
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating annotation */}
                  <div className="absolute left-3 top-[30%] z-20 hidden border border-white/10 bg-[#101010]/95 p-3 shadow-xl backdrop-blur-xl sm:block">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center bg-[#737A1A]/20 text-[#A0A73C]">
                        <PenTool size={13} />
                      </div>
                      <div>
                        <p className="text-[8px] font-medium text-white/85">
                          Intentional details
                        </p>
                        <p className="mt-1 text-[7px] text-white/40">
                          Every pixel has a purpose
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating status */}
                  <div className="absolute bottom-[14%] right-3 z-20 hidden border border-[#737A1A]/30 bg-[#111207]/95 px-3 py-2.5 shadow-xl sm:block">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center bg-[#737A1A]/20 text-[#A0A73C]">
                        <Check size={12} />
                      </span>
                      <div>
                        <p className="text-[8px] font-medium text-white/80">
                          System aligned
                        </p>
                        <p className="mt-1 text-[7px] text-white/40">
                          Consistent by design
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom status bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-white/[0.015] px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A0A73C]" />
                  <span className="text-[8px] uppercase tracking-[0.17em] text-white/40">
                    Design in progress
                  </span>
                </div>

                <span className="font-mono text-[8px] text-white/25">
                  IMX / UX-001
                </span>
              </div>
            </div>

            {/* Decorative corner marks */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-20 w-20 border-b border-r border-[#737A1A]/45"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-3 -z-10 h-12 w-12 border-l border-t border-[#737A1A]/30"
            />
          </div>
        </div>
      </div>

      {/* Bottom metadata */}
      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-3 border-t border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12 xl:px-16">
        <p className="text-[9px] uppercase tracking-[0.2em] text-white/35 sm:text-[10px]">
          UX Research · UI Design · Prototyping · Design Systems
        </p>

        <p className="text-[9px] uppercase tracking-[0.2em] text-white/35 sm:text-[10px]">
          IMX Digital Studio / Design with intention
        </p>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#737A1A]/60 to-transparent"
      />
    </section>
  );
}

