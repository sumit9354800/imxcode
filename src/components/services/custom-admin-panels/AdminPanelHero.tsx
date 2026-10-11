
"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  LayoutDashboard,
  Users,
  ShieldCheck,
  Activity,
  Layers3,
  Zap,
} from "lucide-react";
import { useEffect, useRef } from "react";

const metrics = [
  { label: "Revenue", value: "$48.2k", change: "+24.8%" },
  { label: "Orders", value: "1,284", change: "+12.4%" },
  { label: "Users", value: "8,420", change: "+18.6%" },
];

const chartBars = [28, 42, 34, 55, 46, 66, 49, 72, 58, 82, 67, 94];

export default function AdminPanelHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let frame = 0;
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
      if (!ctx || !visible) return;

      ctx.clearRect(0, 0, width, height);

      if (!reducedMotion) time += 0.009;

      const cx = width * 0.5;
      const cy = height * 0.49;
      const scale = Math.min(width, height);

      // Ambient olive light
      const glow = ctx.createRadialGradient(
        cx,
        cy,
        4,
        cx,
        cy,
        scale * 0.5
      );

      glow.addColorStop(0, "rgba(115,122,26,0.22)");
      glow.addColorStop(0.45, "rgba(115,122,26,0.07)");
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Perspective grid
      ctx.save();
      ctx.translate(cx, cy);

      for (let i = 0; i < 9; i++) {
        const radius = scale * (0.08 + i * 0.045);

        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          radius,
          radius * 0.38,
          -0.28,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          i === 4
            ? "rgba(115,122,26,0.35)"
            : "rgba(255,255,255,0.075)";

        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();

      // Rotating dashboard orbital rings
      for (let i = 0; i < 3; i++) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * (i % 2 === 0 ? 0.13 : -0.1) + i * 0.7);

        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          scale * (0.27 + i * 0.07),
          scale * (0.1 + i * 0.027),
          -0.3,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          i === 1
            ? "rgba(115,122,26,0.75)"
            : "rgba(255,255,255,0.15)";

        ctx.lineWidth = i === 1 ? 1.5 : 1;
        ctx.stroke();

        // Moving signal
        const angle = time * (i % 2 === 0 ? 0.7 : -0.55);
        const px = Math.cos(angle) * scale * (0.27 + i * 0.07);
        const py = Math.sin(angle) * scale * (0.1 + i * 0.027);

        ctx.beginPath();
        ctx.arc(px, py, i === 1 ? 3.5 : 2, 0, Math.PI * 2);
        ctx.fillStyle =
          i === 1 ? "#A4AB4B" : "rgba(255,255,255,0.65)";
        ctx.fill();

        ctx.restore();
      }

      // Isometric control-system cube
      const cubeSize = scale * 0.17;
      const rotation = time * 0.35 + 0.45;
      const tilt = 0.55;

      const vertices = [
        [-1, -1, -1],
        [1, -1, -1],
        [1, 1, -1],
        [-1, 1, -1],
        [-1, -1, 1],
        [1, -1, 1],
        [1, 1, 1],
        [-1, 1, 1],
      ];

      const projected = vertices.map(([x, y, z]) => {
        const rx = x * Math.cos(rotation) - z * Math.sin(rotation);
        const rz = x * Math.sin(rotation) + z * Math.cos(rotation);

        const ry = y * Math.cos(tilt) - rz * Math.sin(tilt);
        const finalZ = y * Math.sin(tilt) + rz * Math.cos(tilt);
        const perspective = 3.8 / (3.8 + finalZ * 0.25);

        return {
          x: cx + rx * cubeSize * perspective,
          y: cy + ry * cubeSize * perspective,
          z: finalZ,
        };
      });

      const faces = [
        { points: [0, 1, 5, 4], color: "rgba(115,122,26,0.16)" },
        { points: [1, 2, 6, 5], color: "rgba(115,122,26,0.38)" },
        { points: [4, 5, 6, 7], color: "rgba(115,122,26,0.12)" },
        { points: [0, 4, 7, 3], color: "rgba(255,255,255,0.035)" },
        { points: [3, 2, 6, 7], color: "rgba(255,255,255,0.025)" },
        { points: [0, 1, 2, 3], color: "rgba(255,255,255,0.025)" },
      ];

      faces
        .map((face) => ({
          ...face,
          depth:
            face.points.reduce(
              (sum, index) => sum + projected[index].z,
              0
            ) / face.points.length,
        }))
        .sort((a, b) => a.depth - b.depth)
        .forEach((face) => {
          ctx.beginPath();

          face.points.forEach((index, i) => {
            const point = projected[index];

            if (i === 0) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
          });

          ctx.closePath();
          ctx.fillStyle = face.color;
          ctx.fill();

          ctx.strokeStyle = "rgba(170,178,92,0.72)";
          ctx.lineWidth = 1;
          ctx.stroke();
        });

      // Orbiting data particles
      for (let i = 0; i < 18; i++) {
        const angle = time * (i % 2 ? -0.28 : 0.36) + i * 0.83;
        const radius = scale * (0.18 + (i % 5) * 0.047);

        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius * 0.55;

        ctx.beginPath();
        ctx.arc(x, y, i % 4 === 0 ? 3 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle =
          i % 4 === 0
            ? "rgba(175,184,82,0.95)"
            : "rgba(255,255,255,0.45)";
        ctx.fill();
      }

      // Fine center crosshair
      ctx.beginPath();
      ctx.moveTo(cx - scale * 0.36, cy);
      ctx.lineTo(cx - scale * 0.23, cy);
      ctx.moveTo(cx + scale * 0.23, cy);
      ctx.lineTo(cx + scale * 0.36, cy);
      ctx.moveTo(cx, cy - scale * 0.3);
      ctx.lineTo(cx, cy - scale * 0.22);
      ctx.moveTo(cx, cy + scale * 0.22);
      ctx.lineTo(cx, cy + scale * 0.3);

      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 1;
      ctx.stroke();

      if (!reducedMotion) {
        frame = requestAnimationFrame(draw);
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;

      cancelAnimationFrame(frame);

      if (visible) {
        draw();
      }
    });

    visibilityObserver.observe(canvas);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 95%)",
        }}
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-[#737A1A]/15 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-white/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 pb-10 pt-8 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16 lg:pt-10 xl:px-16">
        {/* Top metadata */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.27em] text-white/50 sm:text-xs">
              Custom Admin Panels
            </span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#737A1A] opacity-50 motion-reduce:animate-none" />
              <span className="relative h-2 w-2 rounded-full bg-[#929849]" />
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
              Business control systems
            </span>
          </div>
        </div>

        {/* Hero layout */}
        <div className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:py-16 xl:gap-12 xl:py-20">
          {/* Left content */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2.5 border border-[#737A1A]/30 bg-[#737A1A]/10 px-3.5 py-2">
              <LayoutDashboard size={14} className="text-[#A4AB4B]" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#C0C58A] sm:text-[10px]">
                Your business, one command center
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(2.8rem,5.7vw,6rem)] font-semibold leading-[0.92] tracking-[-0.075em]">
              Put your entire
              <br />
              operation
              <br />
              <span className="text-[#929849]">in control.</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:mt-8 sm:text-base sm:leading-8">
              We build custom admin panels that turn complex business
              operations into clear, manageable workflows — giving your team
              one place to control the systems behind your digital product.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Link
                href="#admin-panel-types"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#737A1A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#929849] hover:text-black"
              >
                Explore systems
                <ArrowDown
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 border border-white/15 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-[#737A1A] hover:bg-[#737A1A]/10"
              >
                Start a project
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Capability indicators */}
            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-5 sm:mt-12 sm:pt-6">
              {[
                { number: "01", label: "Monitor", detail: "Live insights" },
                { number: "02", label: "Manage", detail: "Workflows" },
                { number: "03", label: "Scale", detail: "Full control" },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className={
                    index
                      ? "border-l border-white/10 pl-4 sm:pl-6"
                      : ""
                  }
                >
                  <span className="font-mono text-[10px] text-[#929849]">
                    {item.number}
                  </span>
                  <p className="mt-2 text-sm font-medium text-white/90 sm:text-base">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[9px] text-white/40 sm:text-xs">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right dashboard scene */}
          <div className="relative mx-auto w-full max-w-[700px] lg:max-w-none">
            {/* Canvas behind dashboard */}
            <div className="pointer-events-none absolute inset-[-8%]">
              <canvas
                ref={canvasRef}
                className="h-full w-full"
                aria-hidden="true"
              />
            </div>

            {/* Dashboard window */}
            <div className="relative z-10 animate-[adminFloat_7s_ease-in-out_infinite] border border-white/15 bg-[#080908]/95 shadow-[0_35px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl motion-reduce:animate-none">
              {/* Browser top bar */}
              <div className="flex h-11 items-center justify-between border-b border-white/10 px-3 sm:h-12 sm:px-5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#737A1A]" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck size={12} className="text-[#929849]" />
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/35 sm:text-[9px]">
                    IMX / Control Center
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="hidden text-[8px] text-white/30 sm:block">
                    Secure
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#737A1A]" />
                </div>
              </div>

              <div className="grid grid-cols-[46px_minmax(0,1fr)] sm:grid-cols-[66px_minmax(0,1fr)]">
                {/* Sidebar */}
                <aside className="border-r border-white/10 bg-white/[0.015] p-2 sm:p-3">
                  <div className="flex h-8 items-center justify-center bg-[#737A1A] text-black sm:h-9">
                    <LayoutDashboard size={15} />
                  </div>

                  <div className="mt-6 flex flex-col items-center gap-5">
                    {[BarChart3, Users, Layers3, Activity, ShieldCheck].map(
                      (Icon, index) => (
                        <div
                          key={index}
                          className={`flex h-7 w-7 items-center justify-center ${
                            index === 0
                              ? "bg-[#737A1A]/15 text-[#A4AB4B]"
                              : "text-white/30"
                          }`}
                        >
                          <Icon size={14} strokeWidth={1.5} />
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-10 border-t border-white/10 pt-4">
                    <div className="mx-auto h-5 w-5 rounded-full border border-white/15 bg-white/5" />
                  </div>
                </aside>

                {/* Dashboard content */}
                <div className="min-w-0 p-3 sm:p-5 lg:p-6">
                  {/* Dashboard heading */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[7px] uppercase tracking-[0.2em] text-white/35 sm:text-[8px]">
                        Dashboard overview
                      </p>
                      <h2 className="mt-2 text-sm font-medium tracking-tight text-white/90 sm:text-lg">
                        Good morning, Admin
                      </h2>
                      <p className="mt-1 text-[8px] text-white/35 sm:text-[10px]">
                        Here&apos;s what&apos;s happening today.
                      </p>
                    </div>

                    <div className="flex h-7 shrink-0 items-center gap-1.5 border border-white/10 px-2 sm:gap-2 sm:px-3">
                      <span className="text-[7px] text-white/45 sm:text-[9px]">
                        This month
                      </span>
                      <ChevronDown size={10} className="text-white/35" />
                    </div>
                  </div>

                  {/* Metric cards */}
                  <div className="mt-5 grid grid-cols-3 gap-1.5 sm:mt-6 sm:gap-3">
                    {metrics.map((metric, index) => (
                      <div
                        key={metric.label}
                        className="min-w-0 border border-white/10 bg-white/[0.025] p-2 sm:p-3"
                      >
                        <p className="truncate text-[6px] uppercase tracking-[0.1em] text-white/35 sm:text-[8px] sm:tracking-[0.14em]">
                          {metric.label}
                        </p>

                        <p className="mt-2 truncate text-[11px] font-medium text-white/90 sm:text-lg">
                          {metric.value}
                        </p>

                        <p
                          className={`mt-1 truncate text-[7px] sm:text-[9px] ${
                            index === 0
                              ? "text-[#A4AB4B]"
                              : "text-white/40"
                          }`}
                        >
                          {metric.change}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Performance chart */}
                  <div className="mt-3 border border-white/10 bg-white/[0.015] p-3 sm:mt-4 sm:p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[7px] uppercase tracking-[0.16em] text-white/35 sm:text-[8px]">
                          Performance analytics
                        </p>
                        <p className="mt-1 text-xs font-medium text-white/85 sm:text-sm">
                          Business growth
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-[#929849]">
                        <Activity size={13} />
                        <span className="text-[7px] sm:text-[9px]">
                          Trending up
                        </span>
                      </div>
                    </div>

                    <div className="relative mt-4 h-24 sm:h-32">
                      {[0, 1, 2, 3].map((line) => (
                        <div
                          key={line}
                          className="absolute inset-x-0 border-t border-white/[0.055]"
                          style={{ top: `${line * 33}%` }}
                        />
                      ))}

                      <svg
                        viewBox="0 0 500 120"
                        className="absolute inset-0 h-full w-full overflow-visible"
                        fill="none"
                        preserveAspectRatio="none"
                        aria-label="Illustrative upward business performance chart"
                        role="img"
                      >
                        <defs>
                          <linearGradient
                            id="adminChartFill"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#737A1A"
                              stopOpacity="0.35"
                            />
                            <stop
                              offset="100%"
                              stopColor="#737A1A"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>

                        <path
                          d="M0 100 C35 95 52 88 82 91 S125 65 157 76 S200 62 230 65 S275 40 310 48 S354 28 386 36 S450 14 500 7 L500 120 L0 120 Z"
                          fill="url(#adminChartFill)"
                        />

                        <path
                          d="M0 100 C35 95 52 88 82 91 S125 65 157 76 S200 62 230 65 S275 40 310 48 S354 28 386 36 S450 14 500 7"
                          stroke="#929849"
                          strokeWidth="2"
                          vectorEffect="non-scaling-stroke"
                        />

                        <circle cx="386" cy="36" r="3" fill="#B9C16B" />
                        <circle
                          cx="386"
                          cy="36"
                          r="7"
                          stroke="#737A1A"
                          strokeOpacity=".65"
                        />
                      </svg>
                    </div>

                    <div className="mt-2 flex justify-between text-[7px] text-white/25 sm:text-[8px]">
                      <span>WEEK 01</span>
                      <span>WEEK 02</span>
                      <span>WEEK 03</span>
                      <span>WEEK 04</span>
                    </div>
                  </div>

                  {/* Bottom analytics */}
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
                    <div className="border border-white/10 p-2.5 sm:p-3">
                      <div className="flex items-center justify-between gap-1">
                        <p className="text-[7px] uppercase tracking-[0.12em] text-white/35 sm:text-[8px]">
                          Activity volume
                        </p>
                        <BarChart3
                          size={12}
                          className="text-[#929849]"
                        />
                      </div>

                      <div className="mt-3 flex h-9 items-end gap-1 sm:h-12 sm:gap-1.5">
                        {chartBars.map((bar, index) => (
                          <div
                            key={index}
                            className="flex-1 bg-[#737A1A]/80 transition-colors duration-300 hover:bg-[#B4BB61]"
                            style={{ height: `${bar}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="border border-white/10 p-2.5 sm:p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-[7px] uppercase tracking-[0.12em] text-white/35 sm:text-[8px]">
                          System health
                        </p>
                        <ShieldCheck
                          size={12}
                          className="text-[#929849]"
                        />
                      </div>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute h-full w-full animate-ping rounded-full bg-[#737A1A] opacity-40 motion-reduce:animate-none" />
                          <span className="relative h-2 w-2 rounded-full bg-[#929849]" />
                        </span>
                        <span className="text-[9px] font-medium text-white/80 sm:text-[11px]">
                          All systems operational
                        </span>
                      </div>

                      <div className="mt-3 h-1 bg-white/10">
                        <div className="h-full w-[94%] bg-[#737A1A]" />
                      </div>
                      <p className="mt-1.5 text-[7px] text-white/30 sm:text-[8px]">
                        System status overview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating workflow card */}
            <div className="absolute -bottom-5 -left-2 z-20 hidden animate-[adminFloat_6s_ease-in-out_infinite] border border-white/10 bg-[#10110D]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:block lg:-left-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center bg-[#737A1A]/15 text-[#A4AB4B]">
                  <Layers3 size={17} />
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-[0.17em] text-white/35">
                    Workflow engine
                  </p>
                  <p className="mt-1 text-xs font-medium">
                    Everything connected
                  </p>
                </div>
                <ArrowUpRight size={14} className="text-[#929849]" />
              </div>
            </div>

            {/* Floating live status card */}
            <div className="absolute -right-2 -top-5 z-20 hidden animate-[adminFloat_7s_ease-in-out_infinite] border border-[#737A1A]/30 bg-[#737A1A] px-4 py-3 text-black shadow-[0_15px_40px_rgba(0,0,0,0.3)] [animation-delay:-2s] sm:block lg:-right-4 motion-reduce:animate-none">
              <div className="flex items-center gap-2">
                <Zap size={15} />
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
                  Centralized control
                </span>
              </div>
              <p className="mt-1.5 text-xs font-medium">
                Built around your team
              </p>
            </div>

            {/* Visual caption */}
            <div className="mt-5 flex items-center justify-between gap-3 px-1">
              <p className="text-[9px] uppercase tracking-[0.15em] text-white/35 sm:text-[10px] sm:tracking-[0.2em]">
                One interface. Every workflow.
              </p>
              <div className="flex items-center gap-2">
                <span className="h-px w-5 bg-[#737A1A]" />
                <span className="text-[9px] uppercase tracking-[0.14em] text-white/45 sm:text-[10px]">
                  Control / 001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer metadata */}
        <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <span className="text-[9px] uppercase tracking-[0.16em] text-white/30 sm:text-[10px] sm:tracking-[0.22em]">
            Dashboards · Workflows · Analytics · Control
          </span>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 text-xs text-white/50 transition hover:text-[#A4AB4B]"
          >
            Build your control center
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes adminFloat {
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

