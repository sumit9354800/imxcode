
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Play,
  Pause,
  Scissors,
  AudioLines,
  Clapperboard,
  Film,
  SlidersHorizontal,
  Volume2,
  Sparkles,
  Check,
} from "lucide-react";

// Deterministic waveform: same values on the server and client.
// Never use Math.random() during component rendering.
const WAVEFORM = Array.from({ length: 48 }, (_, index) => {
  const value =
    Math.abs(
      Math.sin(index * 1.731) * 5.2 +
        Math.cos(index * 0.713) * 3.1 +
        Math.sin(index * 0.237) * 2.4,
    ) + 2;

  return Number(Math.min(19, Math.max(3, value)).toFixed(2));
});

const CAPABILITIES = [
  "Story-driven editing",
  "Cinematic color",
  "Sound & motion",
];

const PROCESS_STEPS = [
  { number: "01", title: "Shape", text: "Find the story" },
  { number: "02", title: "Refine", text: "Perfect the rhythm" },
  { number: "03", title: "Deliver", text: "Ready for the world" },
];

const COLOR_CONTROLS = [
  { label: "Exposure", value: "+0.3", fill: "62%" },
  { label: "Contrast", value: "+18", fill: "74%" },
  { label: "Saturation", value: "+8", fill: "55%" },
  { label: "Highlights", value: "-12", fill: "38%" },
];

const COLOR_PRESETS = [
  "linear-gradient(135deg,#202419,#737A1A)",
  "linear-gradient(135deg,#101b20,#41616a)",
  "linear-gradient(135deg,#21151a,#785044)",
];

const TIMELINE_CLIPS = [
  "linear-gradient(135deg,#343c1b,#12140c)",
  "linear-gradient(135deg,#555b2a,#202316)",
  "linear-gradient(135deg,#273027,#111713)",
  "linear-gradient(135deg,#484d24,#1a1c11)",
  "linear-gradient(135deg,#363a27,#11130e)",
];

const RULER_MARKS = ["00:00", "00:08", "00:16", "00:24", "00:32"];

export default function VideoEditingHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let width = 0;
    let height = 0;
    let time = 0;
    let animationFrame = 0;
    let visible = false;
    let disposed = false;

    const resize = () => {
      if (disposed) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Redraw immediately after resizing, including reduced-motion mode.
      draw();
    };

    const draw = () => {
      if (disposed || width <= 0 || height <= 0) return;

      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.47;
      const reducedMotion = motionPreference.matches;

      if (!reducedMotion && visible) {
        time += 0.012;
      }

      // Background grid.
      ctx.strokeStyle = "rgba(255,255,255,0.045)";
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += 42) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += 42) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Cinematic ambient glow.
      const glow = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        Math.max(width, height) * 0.57,
      );

      glow.addColorStop(0, "rgba(115,122,26,0.18)");
      glow.addColorStop(0.55, "rgba(115,122,26,0.045)");
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Film frame.
      const frameW = Math.min(width * 0.63, 390);
      const frameH = frameW * 0.59;
      const fx = cx - frameW / 2;
      const fy = cy - frameH / 2 - 24;

      ctx.strokeStyle = "rgba(255,255,255,0.23)";
      ctx.lineWidth = 1;
      ctx.strokeRect(fx, fy, frameW, frameH);

      // Simulated cinematic scene.
      const scene = ctx.createLinearGradient(
        fx,
        fy,
        fx + frameW,
        fy + frameH,
      );

      scene.addColorStop(0, "#181b0b");
      scene.addColorStop(0.48, "#30351b");
      scene.addColorStop(1, "#080908");

      ctx.fillStyle = scene;
      ctx.fillRect(fx + 5, fy + 5, frameW - 10, frameH - 10);

      // Horizon lighting.
      const horizon = ctx.createRadialGradient(
        fx + frameW * 0.62,
        fy + frameH * 0.45,
        0,
        fx + frameW * 0.62,
        fy + frameH * 0.45,
        frameW * 0.48,
      );

      horizon.addColorStop(0, "rgba(175,184,76,0.38)");
      horizon.addColorStop(0.5, "rgba(115,122,26,0.13)");
      horizon.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = horizon;
      ctx.fillRect(fx + 5, fy + 5, frameW - 10, frameH - 10);

      // Abstract cinematic landscape.
      ctx.beginPath();
      ctx.moveTo(fx + 5, fy + frameH * 0.77);
      ctx.lineTo(fx + frameW * 0.24, fy + frameH * 0.47);
      ctx.lineTo(fx + frameW * 0.43, fy + frameH * 0.69);
      ctx.lineTo(fx + frameW * 0.65, fy + frameH * 0.34);
      ctx.lineTo(fx + frameW - 5, fy + frameH * 0.72);
      ctx.lineTo(fx + frameW - 5, fy + frameH - 5);
      ctx.lineTo(fx + 5, fy + frameH - 5);
      ctx.closePath();

      const landscape = ctx.createLinearGradient(
        0,
        fy + frameH * 0.35,
        0,
        fy + frameH,
      );

      landscape.addColorStop(0, "#34391c");
      landscape.addColorStop(1, "#080907");

      ctx.fillStyle = landscape;
      ctx.fill();

      // Deterministic film grain.
      for (let i = 0; i < 65; i++) {
        const x = fx + 8 + ((i * 47) % Math.max(1, frameW - 16));
        const y = fy + 8 + ((i * 31) % Math.max(1, frameH - 16));

        ctx.fillStyle =
          i % 3 === 0
            ? "rgba(255,255,255,0.13)"
            : "rgba(255,255,255,0.045)";

        ctx.fillRect(x, y, 1, 1);
      }

      // Cinematic letterbox bars.
      ctx.fillStyle = "rgba(0,0,0,0.45)";
      ctx.fillRect(fx + 5, fy + 5, frameW - 10, frameH * 0.1);
      ctx.fillRect(
        fx + 5,
        fy + frameH * 0.9,
        frameW - 10,
        frameH * 0.1 - 5,
      );

      // Frame corner guides.
      ctx.strokeStyle = "rgba(190,198,72,0.7)";
      ctx.lineWidth = 1.2;

      const corner = 11;

      const corners = [
        [fx, fy, 1, 1],
        [fx + frameW, fy, -1, 1],
        [fx, fy + frameH, 1, -1],
        [fx + frameW, fy + frameH, -1, -1],
      ];

      corners.forEach(([x, y, dx, dy]) => {
        ctx.beginPath();
        ctx.moveTo(x, y + dy * corner);
        ctx.lineTo(x, y);
        ctx.lineTo(x + dx * corner, y);
        ctx.stroke();
      });

      // Central play indicator.
      ctx.beginPath();
      ctx.arc(cx, cy, 22, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,0,0,0.46)";
      ctx.fill();

      ctx.strokeStyle = "rgba(255,255,255,0.7)";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(cx - 5, cy - 8);
      ctx.lineTo(cx + 8, cy);
      ctx.lineTo(cx - 5, cy + 8);
      ctx.closePath();

      ctx.fillStyle = "rgba(255,255,255,0.95)";
      ctx.fill();

      // Timeline.
      const timelineW = Math.min(width * 0.84, 540);
      const timelineX = cx - timelineW / 2;
      const timelineY = Math.min(
        height * 0.79,
        cy + frameH * 0.7 + 35,
      );

      ctx.fillStyle = "rgba(8,8,8,0.86)";
      ctx.fillRect(timelineX - 10, timelineY - 11, timelineW + 20, 69);

      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.strokeRect(timelineX - 10, timelineY - 11, timelineW + 20, 69);

      const trackGap = 13;
      const clipH = 7;

      for (let row = 0; row < 3; row++) {
        const y = timelineY + row * trackGap;

        for (let clip = 0; clip < 5; clip++) {
          const clipX = timelineX + clip * (timelineW / 5);
          const clipW = timelineW / 5 - 4;

          ctx.fillStyle =
            row === 0
              ? clip % 2 === 0
                ? "rgba(115,122,26,0.88)"
                : "rgba(115,122,26,0.42)"
              : row === 1
                ? "rgba(255,255,255,0.12)"
                : "rgba(255,255,255,0.075)";

          ctx.fillRect(clipX, y, clipW, clipH);

          if (row === 1) {
            for (let wave = 0; wave < 8; wave++) {
              const wx = clipX + 4 + wave * ((clipW - 8) / 8);
              const wh = 1 + Math.abs(Math.sin(wave * 1.8 + clip)) * 3;

              ctx.fillStyle = "rgba(190,198,72,0.5)";
              ctx.fillRect(wx, y + 3 - wh / 2, 1, wh);
            }
          }
        }
      }

      // Playhead animation.
      const progress = reducedMotion
        ? 0.42
        : ((Math.sin(time * 0.45) + 1) / 2) * 0.82 + 0.06;

      const playheadX = timelineX + timelineW * progress;

      ctx.fillStyle = "#a0a73c";
      ctx.fillRect(playheadX, timelineY - 16, 1.5, 53);

      ctx.beginPath();
      ctx.moveTo(playheadX - 4, timelineY - 16);
      ctx.lineTo(playheadX + 4, timelineY - 16);
      ctx.lineTo(playheadX, timelineY - 10);
      ctx.closePath();
      ctx.fill();

      // Floating particles.
      for (let i = 0; i < 18; i++) {
        const angle = (i / 18) * Math.PI * 2 + time * 0.13;
        const rx = Math.min(width * 0.41, 270);
        const ry = Math.min(height * 0.36, 210);
        const x = cx + Math.cos(angle) * rx;
        const y = cy + Math.sin(angle) * ry;

        ctx.beginPath();
        ctx.arc(x, y, i % 4 === 0 ? 2 : 1, 0, Math.PI * 2);

        ctx.fillStyle =
          i % 4 === 0
            ? "rgba(190,198,72,0.75)"
            : "rgba(255,255,255,0.22)";

        ctx.fill();
      }

      if (!reducedMotion && visible && !disposed) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    const handleVisibility = () => {
      if (disposed) return;

      visible = Boolean(
        canvas.isConnected &&
          canvas.getBoundingClientRect().width > 0 &&
          canvas.getBoundingClientRect().height > 0,
      );

      cancelAnimationFrame(animationFrame);

      if (visible) {
        draw();
      }
    };

    const handleMotionPreference = () => {
      cancelAnimationFrame(animationFrame);
      draw();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;

        cancelAnimationFrame(animationFrame);

        if (visible) {
          draw();
        }
      },
      { threshold: 0.05 },
    );

    resize();
    observer.observe(canvas);
    window.addEventListener("resize", resize);
    motionPreference.addEventListener("change", handleMotionPreference);

    // Initial render is static until IntersectionObserver reports visibility.
    handleVisibility();

    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      motionPreference.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "68px 68px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
        }}
      />

      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-[#737A1A]/15 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-40 h-[400px] w-[400px] rounded-full bg-[#737A1A]/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 pb-8 pt-16 sm:px-8 sm:pb-10 sm:pt-20 lg:px-12 lg:pt-24 xl:px-16">
        {/* Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#A0A73C]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60 sm:text-xs">
              Video Editing Studio
            </span>
          </div>

          <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/35 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A0A73C]" />
            Story · Rhythm · Motion
          </div>
        </div>

        {/* Main layout */}
        <div className="grid items-center gap-12 py-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 lg:py-16 xl:gap-16">
          {/* Copy */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/[0.025] px-3 py-2">
              <Clapperboard size={13} className="text-[#A0A73C]" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                From raw footage to final cut
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(3.2rem,6.6vw,7rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
              Every frame
              <span className="block">has a story.</span>
              <span className="mt-2 block text-[#91982F]">
                Make it count.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              We transform raw footage into compelling visual stories through
              thoughtful editing, cinematic pacing, precise sound and polished
              color. Every cut has a purpose. Every second moves your story
              forward.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#video-editing-types"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#737A1A] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A0A73C] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Explore video services
                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#737A1A]/70 hover:bg-[#737A1A]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A0A73C]"
              >
                Start a project
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* Capabilities */}
            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/50">
              {CAPABILITIES.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check size={13} className="text-[#A0A73C]" />
                  {item}
                </span>
              ))}
            </div>

            {/* Process */}
            <div className="mt-12 grid grid-cols-3 border-t border-white/10 pt-5">
              {PROCESS_STEPS.map((step, index) => (
                <div
                  key={step.number}
                  className={
                    index === 0
                      ? "pr-3"
                      : "border-l border-white/10 pl-4 sm:pl-6"
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

          {/* Cinematic visual */}
          <div className="relative mx-auto w-full max-w-[720px] lg:ml-auto">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 border border-white/[0.06] sm:-inset-6"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-10 rounded-full bg-[#737A1A]/10 blur-[90px]"
            />

            <div className="relative overflow-hidden border border-white/10 bg-[#080908] shadow-[0_35px_100px_rgba(0,0,0,0.55)]">
              {/* Editor top bar */}
              <div className="flex h-12 items-center justify-between border-b border-white/10 px-4 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <span className="text-[8px] uppercase tracking-[0.22em] text-white/35 sm:text-[9px]">
                  IMX / Edit Suite 01
                </span>

                <div className="flex items-center gap-1.5 text-[#A0A73C]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A0A73C]" />
                  <span className="text-[8px] uppercase tracking-wider">
                    Timeline
                  </span>
                </div>
              </div>

              {/* Preview window */}
              <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_125px]">
                <div className="relative min-w-0 border-b border-white/10 sm:border-b-0 sm:border-r">
                  <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5 sm:px-4">
                    <div className="flex items-center gap-2">
                      <Film size={12} className="text-[#A0A73C]" />
                      <span className="text-[8px] uppercase tracking-[0.18em] text-white/45">
                        Preview monitor
                      </span>
                    </div>

                    <span className="font-mono text-[8px] text-white/30">
                      00:00:12:08
                    </span>
                  </div>

                  <div className="relative aspect-[16/9] overflow-hidden">
                    <canvas
                      ref={canvasRef}
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 h-full w-full"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                    <div className="absolute left-3 top-3 flex items-center gap-2">
                      <span className="bg-black/60 px-2 py-1 text-[7px] uppercase tracking-[0.15em] text-white/70 backdrop-blur">
                        Scene 01
                      </span>
                      <span className="bg-[#737A1A]/80 px-2 py-1 text-[7px] uppercase tracking-[0.15em] text-white">
                        Color graded
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <p className="text-[7px] uppercase tracking-[0.22em] text-white/55">
                          Visual storytelling
                        </p>
                        <p className="mt-1 text-xs font-medium tracking-wide text-white sm:text-sm">
                          Find the feeling.
                        </p>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/35 bg-black/25 text-white backdrop-blur">
                        <Play size={12} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inspector */}
                <aside className="hidden bg-white/[0.015] p-3 sm:block">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal
                      size={12}
                      className="text-[#A0A73C]"
                    />
                    <span className="text-[8px] uppercase tracking-[0.15em] text-white/50">
                      Color grade
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {COLOR_CONTROLS.map((control) => (
                      <div key={control.label}>
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[8px] text-white/45">
                            {control.label}
                          </span>
                          <span className="font-mono text-[7px] text-white/30">
                            {control.value}
                          </span>
                        </div>

                        <div className="mt-2 h-1 bg-white/10">
                          <div
                            className="h-full bg-[#737A1A]"
                            style={{ width: control.fill }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2">
                      <Sparkles size={11} className="text-[#A0A73C]" />
                      <span className="text-[8px] text-white/50">
                        Look preset
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-1.5">
                      {COLOR_PRESETS.map((background, index) => (
                        <div
                          key={background}
                          className={`aspect-square border ${
                            index === 0
                              ? "border-[#A0A73C]"
                              : "border-white/10"
                          }`}
                          style={{ background }}
                        />
                      ))}
                    </div>
                  </div>
                </aside>
              </div>

              {/* Timeline */}
              <div className="border-t border-white/10 bg-[#0a0a09] p-3 sm:p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scissors size={12} className="text-[#A0A73C]" />
                    <span className="text-[8px] uppercase tracking-[0.18em] text-white/55">
                      Editing timeline
                    </span>
                  </div>

                  <span className="font-mono text-[8px] text-white/30">
                    00:00 — 00:32
                  </span>
                </div>

                {/* Ruler */}
                <div className="mb-2 flex justify-between pl-1 font-mono text-[7px] text-white/25">
                  {RULER_MARKS.map((time) => (
                    <span key={time}>{time}</span>
                  ))}
                </div>

                <div className="relative space-y-1.5">
                  {/* Video track */}
                  <div className="flex h-8 gap-1 overflow-hidden">
                    {TIMELINE_CLIPS.map((background, index) => (
                      <div
                        key={index}
                        className="relative min-w-0 flex-1 overflow-hidden border border-white/10"
                        style={{ background }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-50">
                          {Array.from({ length: 4 }, (_, i) => (
                            <span
                              key={i}
                              className="h-3 w-1/5 border border-white/15 bg-black/15"
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stable audio waveform */}
                  <div className="flex h-7 items-center gap-[2px] overflow-hidden border border-white/[0.06] bg-[#737A1A]/[0.08] px-1">
                    {WAVEFORM.map((wave, index) => (
                      <span
                        key={index}
                        className="min-w-[2px] flex-1 bg-[#91982F]/75"
                        style={{ height: `${wave}px` }}
                      />
                    ))}
                  </div>

                  {/* Playhead */}
                  <div className="pointer-events-none absolute bottom-0 left-[42%] top-[-18px] w-px bg-[#A0A73C]">
                    <span className="absolute -top-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 bg-[#A0A73C]" />
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-white/35">
                    <Pause size={12} />
                    <Volume2 size={12} />
                    <AudioLines size={12} />
                    <span className="font-mono text-[8px]">24 FPS</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[8px] uppercase tracking-[0.12em] text-white/30">
                      Sequence ready
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A0A73C]" />
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center bg-[#737A1A]/20 text-[#A0A73C]">
                    <Clapperboard size={12} />
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.15em] text-white/45">
                    IMX Post Production
                  </span>
                </div>

                <span className="text-[8px] uppercase tracking-[0.15em] text-white/30">
                  Edit / Refine / Deliver
                </span>
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -left-3 top-[24%] hidden border border-white/10 bg-[#101010]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:block lg:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center bg-[#737A1A]/20 text-[#A0A73C]">
                  <Film size={15} />
                </div>

                <div>
                  <p className="text-[9px] font-medium text-white/85">
                    Frame by frame
                  </p>
                  <p className="mt-1 text-[8px] text-white/40">
                    Precision in every cut
                  </p>
                </div>
              </div>
            </div>

            {/* Floating delivery badge */}
            <div className="absolute -bottom-4 right-3 hidden border border-[#737A1A]/30 bg-[#111207]/95 px-4 py-3 shadow-xl sm:block lg:-right-5">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center bg-[#737A1A]/20 text-[#A0A73C]">
                  <Check size={13} />
                </span>

                <div>
                  <p className="text-[9px] font-medium text-white/85">
                    Final cut
                  </p>
                  <p className="mt-1 text-[8px] text-white/40">
                    Ready to make an impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/35 sm:text-[10px]">
            Video Editing · Color Grading · Sound Design · Motion
          </span>

          <Link
            href="#video-editing-types"
            className="group inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-[#A0A73C] sm:text-[10px]"
          >
            Discover the possibilities
            <ArrowDown
              size={13}
              className="transition-transform group-hover:translate-y-1"
            />
          </Link>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#737A1A]/60 to-transparent"
      />
    </section>
  );
}
