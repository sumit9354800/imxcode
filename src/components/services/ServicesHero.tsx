"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Palette,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function ServicesHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let rotation = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.max(1, rect.width * dpr);
      canvas.height = Math.max(1, rect.height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (!width || !height) {
        animationFrame = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.5;

      rotation += 0.0045;

      const min = Math.min(width, height);
      const base = min * 0.27;

      /* =====================================================
         AMBIENT CORE
      ===================================================== */

      const glow = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        base * 1.8,
      );

      glow.addColorStop(0, "rgba(115,122,26,0.22)");
      glow.addColorStop(0.28, "rgba(115,122,26,0.09)");
      glow.addColorStop(0.7, "rgba(115,122,26,0.025)");
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, base * 1.8, 0, Math.PI * 2);
      ctx.fill();

      /* =====================================================
         ORBIT RINGS
      ===================================================== */

      const rings = [
        {
          radius: base * 0.72,
          ry: 0.34,
          rotation: rotation * 1.2,
          alpha: 0.3,
        },
        {
          radius: base * 0.96,
          ry: 0.58,
          rotation: -rotation * 0.75,
          alpha: 0.22,
        },
        {
          radius: base * 1.18,
          ry: 0.78,
          rotation: rotation * 0.45,
          alpha: 0.15,
        },
      ];

      rings.forEach((ring, ringIndex) => {
        ctx.save();

        ctx.translate(cx, cy);
        ctx.rotate(ring.rotation);

        ctx.beginPath();

        ctx.ellipse(
          0,
          0,
          ring.radius,
          ring.radius * ring.ry,
          0,
          0,
          Math.PI * 2,
        );

        ctx.strokeStyle = `rgba(115,122,26,${ring.alpha})`;
        ctx.lineWidth = ringIndex === 0 ? 1.1 : 0.8;
        ctx.stroke();

        ctx.restore();
      });

      /* =====================================================
         DIMENSIONAL LATITUDE LINES
      ===================================================== */

      const latitudeCount = 9;

      for (let i = 0; i < latitudeCount; i++) {
        const progress = i / (latitudeCount - 1);
        const y = (progress - 0.5) * base * 1.55;

        const normalized = Math.abs(progress - 0.5) * 2;

        const widthFactor = Math.sqrt(
          Math.max(0, 1 - normalized * normalized),
        );

        const halfWidth = base * widthFactor;

        if (halfWidth < 2) continue;

        ctx.beginPath();

        ctx.ellipse(
          cx,
          cy + y * 0.75,
          halfWidth,
          Math.max(4, halfWidth * 0.18),
          rotation * 0.15,
          0,
          Math.PI * 2,
        );

        ctx.strokeStyle = `rgba(115,122,26,${
          0.08 + (1 - normalized) * 0.1
        })`;

        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      /* =====================================================
         LONGITUDE LINES
      ===================================================== */

      const longitudeCount = 12;

      for (let i = 0; i < longitudeCount; i++) {
        const angle =
          (i / longitudeCount) * Math.PI * 2 + rotation;

        const xRadius = base * 0.98;
        const yRadius = base * 0.73;

        ctx.beginPath();

        ctx.ellipse(
          cx,
          cy,
          Math.abs(Math.cos(angle)) * xRadius,
          yRadius,
          0,
          0,
          Math.PI * 2,
        );

        ctx.strokeStyle = `rgba(255,255,255,${
          0.025 + Math.abs(Math.cos(angle)) * 0.045
        })`;

        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      /* =====================================================
         CONNECTION NODES
      ===================================================== */

      const nodeCount = 8;

      for (let i = 0; i < nodeCount; i++) {
        const angle =
          (i / nodeCount) * Math.PI * 2 + rotation * 0.7;

        const radius =
          base * (1.02 + Math.sin(i * 1.7) * 0.08);

        const x =
          cx +
          Math.cos(angle) * radius;

        const y =
          cy +
          Math.sin(angle) * radius * 0.68;

        /* Connection */
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);

        ctx.strokeStyle = "rgba(115,122,26,0.08)";
        ctx.lineWidth = 0.7;
        ctx.stroke();

        /* Node glow */
        const nodeGlow = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          12,
        );

        nodeGlow.addColorStop(0, "rgba(115,122,26,0.35)");
        nodeGlow.addColorStop(1, "rgba(115,122,26,0)");

        ctx.fillStyle = nodeGlow;
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(115,122,26,0.9)";
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      /* =====================================================
         CORE
      ===================================================== */

      const coreRadius = base * 0.27;

      const coreGlow = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        coreRadius * 2.4,
      );

      coreGlow.addColorStop(0, "rgba(115,122,26,0.55)");
      coreGlow.addColorStop(0.25, "rgba(115,122,26,0.22)");
      coreGlow.addColorStop(0.65, "rgba(115,122,26,0.045)");
      coreGlow.addColorStop(1, "rgba(115,122,26,0)");

      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius * 2.4, 0, Math.PI * 2);
      ctx.fill();

      const core = ctx.createRadialGradient(
        cx - coreRadius * 0.25,
        cy - coreRadius * 0.25,
        0,
        cx,
        cy,
        coreRadius,
      );

      core.addColorStop(0, "rgba(190,195,100,0.9)");
      core.addColorStop(0.18, "rgba(115,122,26,0.8)");
      core.addColorStop(0.55, "rgba(115,122,26,0.2)");
      core.addColorStop(1, "rgba(115,122,26,0)");

      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      /* Core rings */
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();

        ctx.arc(
          cx,
          cy,
          coreRadius * (0.65 + i * 0.25),
          0,
          Math.PI * 2,
        );

        ctx.strokeStyle = `rgba(115,122,26,${0.3 - i * 0.07})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
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
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-60 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-[#737A1A]/10 blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-60 bottom-[-220px] h-[500px] w-[500px] rounded-full bg-[#737A1A]/[0.04] blur-[150px]"
      />

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="relative mx-auto grid min-h-[620px] max-w-[1600px] items-center px-5 py-16 sm:min-h-[660px] sm:px-8 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-20 xl:px-16">
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="relative z-10 max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[10px]">
              Digital capabilities
            </p>
          </div>

          {/* Heading */}
          <h1 className="mt-6 max-w-4xl text-[clamp(3rem,6.2vw,6.7rem)] font-semibold leading-[0.83] tracking-[-0.08em]">
            We build the
            <span className="block text-[#737A1A]">
              digital layer.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
            From websites and applications to design, creative production and
            digital growth, we bring the right capabilities together around
            what your business needs.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            <Link
              href="#services"
              className="group inline-flex items-center gap-3 bg-[#737A1A] px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#858c20]"
            >
              Explore services

              <ArrowDownRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-white/15 px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#737A1A] hover:bg-white/[0.025]"
            >
              Start a project

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Capability strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4">
            {[
              { label: "Technology", icon: Code2 },
              { label: "Design", icon: Palette },
              { label: "Growth", icon: TrendingUp },
            ].map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                className="flex items-center gap-2"
              >
                <Icon
                  size={11}
                  strokeWidth={1.4}
                  className="text-[#737A1A]"
                />

                <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/30">
                  {label}
                </span>

                {index < 2 && (
                  <span className="ml-1 hidden h-px w-3 bg-white/10 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            RIGHT VISUAL
        ================================================= */}

        <div className="relative mt-2 h-[360px] w-full sm:h-[430px] lg:mt-0 lg:h-[590px]">
          {/* Outer frame */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 border border-white/[0.07]"
          />

          {/* Inner frame */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 border border-[#737A1A]/10"
          />

          {/* Canvas */}
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
          />

          {/* =================================================
              FLOATING SERVICE LABELS
          ================================================= */}

          <div className="absolute left-[7%] top-[20%] hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#737A1A]" />
              <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/30">
                Strategy
              </span>
            </div>

            <span className="ml-3 mt-1 block h-5 w-px bg-white/10" />
          </div>

          <div className="absolute right-[5%] top-[29%] hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/30">
                Technology
              </span>

              <span className="h-1 w-1 rounded-full bg-[#737A1A]" />
            </div>
          </div>

          <div className="absolute bottom-[23%] left-[13%] hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#737A1A]" />

              <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/30">
                Design
              </span>
            </div>
          </div>

          <div className="absolute bottom-[17%] right-[10%] hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/30">
                Growth
              </span>

              <span className="h-1 w-1 rounded-full bg-[#737A1A]" />
            </div>
          </div>

          {/* Core label */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[105px] text-center sm:translate-y-[130px]">
            <p className="text-[7px] font-semibold uppercase tracking-[0.28em] text-white/20">
              IMX / Digital System
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#737A1A]">
              Connected capabilities
            </p>
          </div>

          {/* Coordinate markers */}
          <span className="absolute left-[15%] top-[12%] h-1.5 w-1.5 bg-[#737A1A]" />
          <span className="absolute right-[16%] top-[15%] h-1 w-1 bg-white/20" />
          <span className="absolute right-[11%] bottom-[18%] h-1.5 w-1.5 bg-[#737A1A]" />
          <span className="absolute left-[23%] bottom-[13%] h-1 w-1 bg-white/20" />

          {/* Vertical coordinate */}
          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 rotate-90 items-center gap-3 lg:flex">
            <span className="h-px w-8 bg-white/10" />

            <span className="text-[7px] uppercase tracking-[0.25em] text-white/20">
              26.04 / 01
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM SYSTEM BAR
      ===================================================== */}

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-3 sm:px-8 lg:px-12 xl:px-16">
          <span className="text-[7px] uppercase tracking-[0.25em] text-white/20">
            Digital systems / creative thinking / measurable growth
          </span>

          <span className="hidden text-[7px] uppercase tracking-[0.22em] text-[#737A1A] sm:block">
            IMX Digital Studio
          </span>
        </div>
      </div>
    </section>
  );
}