"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Layers3,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

import { pricingHero } from "@/data/pricing-hero";

export default function PricingHero() {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      setRotation({
        x: y * -7,
        y: x * 9,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-black text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Large technical glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#737A1A]/10 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-15%] top-[10%] h-[300px] w-[300px] rounded-full bg-white/[0.025] blur-[120px]"
      />

      {/* Technical corner marks */}
      <div
        aria-hidden="true"
        className="absolute left-6 top-6 hidden h-12 w-12 border-l border-t border-white/10 sm:block"
      />

      <div
        aria-hidden="true"
        className="absolute right-6 top-6 hidden h-12 w-12 border-r border-t border-white/10 sm:block"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-6 hidden h-12 w-12 border-b border-l border-white/10 sm:block"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-6 right-6 hidden h-12 w-12 border-b border-r border-white/10 sm:block"
      />

      {/* =========================================================
          MAIN WRAPPER
      ========================================================= */}

      <div className="relative mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl flex-col justify-between px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#737A1A]">
              {pricingHero.eyebrow}
            </span>
          </div>

          <span className="hidden text-xs uppercase tracking-[0.2em] text-white/20 sm:block">
            IMX / Pricing System
          </span>
        </div>

        {/* =======================================================
            MAIN
        ======================================================= */}

        <div className="grid items-center gap-12 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:py-6">
          {/* =====================================================
              COPY
          ===================================================== */}

          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center border border-[#737A1A]/30 bg-[#737A1A]/5">
                <Layers3
                  className="h-3.5 w-3.5 text-[#737A1A]"
                  strokeWidth={1.5}
                />
              </div>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Flexible architecture
              </span>
            </div>

            <h1 className="max-w-4xl text-[3.4rem] font-semibold leading-[0.9] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[5.7rem] xl:text-[6.1rem]">
              {pricingHero.title}
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
              {pricingHero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href={pricingHero.primaryAction.href}
                className="group inline-flex items-center gap-3 bg-[#737A1A] px-5 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#858c20]"
              >
                {pricingHero.primaryAction.label}

                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>

              <Link
                href={pricingHero.secondaryAction.href}
                className="group inline-flex items-center gap-3 border border-white/15 px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#737A1A] hover:text-[#737A1A]"
              >
                {pricingHero.secondaryAction.label}

                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>

          {/* =====================================================
              3D PRICING SYSTEM
          ===================================================== */}

          <div className="relative mx-auto flex h-[430px] w-full max-w-[560px] items-center justify-center sm:h-[500px] lg:h-[540px]">
            {/* Orbit */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#737A1A]/15 sm:h-[470px] sm:w-[470px]"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] sm:h-[350px] sm:w-[350px]"
            />

            {/* Orbiting points */}
            <span className="absolute left-[8%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#737A1A] shadow-[0_0_20px_#737A1A]" />

            <span className="absolute right-[10%] top-[23%] h-1 w-1 rounded-full bg-white/40" />

            <span className="absolute bottom-[22%] right-[14%] h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

            <span className="absolute bottom-[16%] left-[20%] h-1 w-1 rounded-full bg-white/30" />

            {/* =================================================
                3D SCENE
            ================================================= */}

            <div
              className="relative h-[260px] w-[300px] sm:h-[310px] sm:w-[360px]"
              style={{
                perspective: "1100px",
              }}
            >
              <div
                className="relative h-full w-full transition-transform duration-300 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `
                    rotateX(${rotation.x}deg)
                    rotateY(${rotation.y}deg)
                    rotateZ(-2deg)
                  `,
                }}
              >
                {/* =============================================
                    BACK DEPTH CARD
                ============================================= */}

                <div
                  className="absolute inset-[8%] border border-[#737A1A]/20 bg-[#737A1A]/[0.025]"
                  style={{
                    transform:
                      "translateZ(-80px) translateX(32px) translateY(25px) rotateZ(3deg)",
                  }}
                />

                {/* =============================================
                    MIDDLE DEPTH CARD
                ============================================= */}

                <div
                  className="absolute inset-[4%] border border-white/[0.08] bg-white/[0.015]"
                  style={{
                    transform:
                      "translateZ(-40px) translateX(17px) translateY(13px)",
                  }}
                />

                {/* =============================================
                    MAIN CARD
                ============================================= */}

                <div
                  className="absolute inset-0 border border-white/15 bg-[#090909]/95 shadow-[0_35px_100px_rgba(0,0,0,0.6)]"
                  style={{
                    transform: "translateZ(30px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* top accent */}
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#737A1A] to-transparent" />

                  {/* inner frame */}
                  <div className="absolute inset-4 border border-white/[0.055]" />

                  {/* Header */}
                  <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] px-7 py-5 sm:px-9">
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                        IMX / SYSTEM
                      </span>

                      <p className="mt-1 text-xs font-medium text-white/70">
                        Project Scope
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A] shadow-[0_0_12px_#737A1A]" />

                      <span className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                        Active
                      </span>
                    </div>
                  </div>

                  {/* Scope */}
                  <div className="relative z-10 px-7 py-6 sm:px-9">
                    <div className="mb-5 flex items-end justify-between">
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                          Architecture
                        </span>

                        <h3 className="mt-1 text-xl font-medium tracking-[-0.03em] sm:text-2xl">
                          Scope-based
                        </h3>
                      </div>

                      <span className="text-4xl font-semibold leading-none tracking-[-0.08em] text-[#737A1A]">
                        ∞
                      </span>
                    </div>

                    {/* Progress */}
                    <div className="relative h-1 bg-white/[0.06]">
                      <div className="absolute left-0 top-0 h-full w-[72%] bg-[#737A1A]" />

                      <div className="absolute left-[72%] top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black bg-[#737A1A]" />
                    </div>

                    <div className="mt-2 flex justify-between text-[8px] uppercase tracking-[0.16em] text-white/20">
                      <span>Requirements</span>
                      <span>Solution</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="relative z-10 border-t border-white/[0.08] px-7 py-3 sm:px-9">
                    {pricingHero.highlights
                      .slice(0, 3)
                      .map((highlight, index) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-3 border-b border-white/[0.06] py-3 last:border-b-0"
                        >
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center border border-[#737A1A]/25 bg-[#737A1A]/[0.04]">
                            <Check
                              className="h-3 w-3 text-[#737A1A]"
                              strokeWidth={1.8}
                            />
                          </div>

                          <span className="flex-1 text-[11px] text-white/55">
                            {highlight}
                          </span>

                          <span className="text-[8px] tracking-[0.15em] text-white/15">
                            0{index + 1}
                          </span>
                        </div>
                      ))}
                  </div>

                  {/* Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/[0.08] px-7 py-4 sm:px-9">
                    <span className="text-[8px] uppercase tracking-[0.18em] text-white/20">
                      Transparent
                    </span>

                    <span className="text-[8px] uppercase tracking-[0.18em] text-[#737A1A]">
                      Flexible
                    </span>

                    <span className="text-[8px] uppercase tracking-[0.18em] text-white/20">
                      Purposeful
                    </span>
                  </div>
                </div>

                {/* =============================================
                    RIGHT 3D SIDE
                ============================================= */}

                <div
                  className="absolute right-[-45px] top-[28px] h-[calc(100%-56px)] w-[45px] origin-left border border-white/10 bg-[#111]/95"
                  style={{
                    transform: "rotateY(90deg)",
                  }}
                >
                  <div className="flex h-full flex-col items-center justify-between py-5">
                    <span className="text-[7px] uppercase tracking-[0.2em] text-white/20 [writing-mode:vertical-rl]">
                      PRICING
                    </span>

                    <span className="h-12 w-px bg-[#737A1A]/50" />

                    <span className="text-[7px] uppercase tracking-[0.2em] text-white/20 [writing-mode:vertical-rl]">
                      IMX
                    </span>
                  </div>
                </div>

                {/* =============================================
                    TOP 3D SIDE
                ============================================= */}

                <div
                  className="absolute left-[45px] right-[45px] top-[-27px] h-[27px] origin-bottom border border-white/10 bg-[#161616]"
                  style={{
                    transform: "rotateX(90deg)",
                  }}
                >
                  <div className="flex h-full items-center justify-center gap-3">
                    <Sparkles className="h-3 w-3 text-[#737A1A]" />

                    <span className="text-[7px] uppercase tracking-[0.2em] text-white/25">
                      Built around requirements
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING TAGS
            ================================================= */}

            <div className="absolute left-[3%] top-[17%] hidden border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-md sm:block">
              <span className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                Requirement
              </span>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

                <span className="text-[10px] text-white/65">
                  Defined
                </span>
              </div>
            </div>

            <div className="absolute bottom-[15%] right-[1%] hidden border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-md sm:block">
              <span className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                Solution
              </span>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

                <span className="text-[10px] text-white/65">
                  Tailored
                </span>
              </div>
            </div>

            {/* Floating infinity */}
            <div className="absolute right-[7%] top-[8%] text-4xl font-light text-white/[0.06]">
              ∞
            </div>

            {/* Technical coordinates */}
            <div className="absolute bottom-[7%] left-[5%] text-[8px] uppercase tracking-[0.18em] text-white/15">
              26.9124° N / 75.7873° E
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM
        ======================================================= */}

        <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] uppercase tracking-[0.18em] text-white/25">
            Technology · Design · Creative
          </span>

          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-white/10" />

            <span className="text-[10px] uppercase tracking-[0.18em] text-white/25">
              Transparent · Flexible · Purposeful
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATION
      ========================================================= */}

    </section>
  );
}