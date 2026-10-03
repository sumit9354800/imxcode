"use client";

import { ArrowDown, ArrowUpRight, BookOpen, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { blogHero } from "@/data/blog-hero";

export default function BlogHero() {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      setRotation({
        x: y * -6,
        y: x * 8,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-black text-white">
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Large accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#737A1A]/10 blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[-15%] h-[350px] w-[350px] rounded-full bg-white/[0.025] blur-[120px]"
      />

      {/* Technical lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-0 hidden h-full w-px bg-white/[0.035] lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-0 hidden h-full w-px bg-white/[0.035] lg:block"
      />

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="relative mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl flex-col justify-between px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#737A1A]">
              {blogHero.eyebrow}
            </p>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/20 sm:block">
            IMX / Journal
          </span>
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:py-8">
          {/* ===================================================
              LEFT COPY
          =================================================== */}

          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center border border-[#737A1A]/30 bg-[#737A1A]/5">
                <BookOpen
                  className="h-3.5 w-3.5 text-[#737A1A]"
                  strokeWidth={1.5}
                />
              </div>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Ideas · Research · Perspective
              </span>
            </div>

            <h1 className="max-w-4xl text-[3.4rem] font-semibold leading-[0.9] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[6.4rem]">
              {blogHero.title}
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50 sm:text-base md:text-lg md:leading-8">
              {blogHero.description}
            </p>

            {/* Topics */}
            <div className="mt-8 flex max-w-2xl flex-wrap gap-2.5">
              {blogHero.highlights.map((item, index) => (
                <span
                  key={item}
                  className="group inline-flex items-center gap-2 border border-white/10 bg-white/[0.015] px-3.5 py-2 text-[10px] uppercase tracking-[0.08em] text-white/45 transition-all duration-300 hover:border-[#737A1A]/40 hover:text-white/70"
                >
                  <span className="h-1 w-1 rounded-full bg-[#737A1A]/70 transition-transform duration-300 group-hover:scale-150" />

                  {item}

                  <span className="ml-1 text-white/15">
                    0{index + 1}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* ===================================================
              3D JOURNAL MODEL
          =================================================== */}

          <div className="relative mx-auto flex h-[390px] w-full max-w-[520px] items-center justify-center sm:h-[470px] lg:h-[520px]">
            {/* Orbit */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#737A1A]/15 sm:h-[430px] sm:w-[430px]"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] sm:h-[330px] sm:w-[330px]"
            />

            {/* Orbit dots */}
            <span className="absolute left-[8%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#737A1A] shadow-[0_0_18px_#737A1A]" />

            <span className="absolute right-[12%] top-[21%] h-1 w-1 rounded-full bg-white/40" />

            <span className="absolute bottom-[20%] right-[15%] h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

            <span className="absolute bottom-[12%] left-[17%] h-1 w-1 rounded-full bg-white/30" />

            {/* =================================================
                3D SCENE
            ================================================= */}

            <div
              className="relative h-[260px] w-[270px] sm:h-[315px] sm:w-[330px]"
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
                    rotateZ(-4deg)
                  `,
                }}
              >
                {/* =========================================
                    BACK PAGE
                ========================================= */}

                <div
                  className="absolute inset-[7%] border border-[#737A1A]/20 bg-[#737A1A]/[0.025]"
                  style={{
                    transform:
                      "translateZ(-90px) translateX(38px) translateY(22px) rotateZ(5deg)",
                  }}
                >
                  <div className="absolute right-5 top-5 h-10 w-10 border border-[#737A1A]/20" />
                </div>

                {/* =========================================
                    MIDDLE PAGE
                ========================================= */}

                <div
                  className="absolute inset-[4%] border border-white/[0.08] bg-white/[0.015]"
                  style={{
                    transform:
                      "translateZ(-45px) translateX(18px) translateY(11px) rotateZ(2deg)",
                  }}
                >
                  <div className="absolute bottom-7 left-7 h-px w-20 bg-white/10" />

                  <div className="absolute bottom-4 left-7 h-px w-12 bg-white/5" />
                </div>

                {/* =========================================
                    MAIN JOURNAL
                ========================================= */}

                <div
                  className="absolute inset-0 border border-white/15 bg-[#090909]/95 shadow-[0_40px_100px_rgba(0,0,0,0.65)]"
                  style={{
                    transform: "translateZ(30px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Olive top edge */}
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#737A1A] to-transparent" />

                  {/* Inner frame */}
                  <div className="absolute inset-4 border border-white/[0.055]" />

                  {/* Header */}
                  <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] px-6 py-5 sm:px-8">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A] shadow-[0_0_12px_#737A1A]" />

                      <span className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                        Featured Journal
                      </span>
                    </div>

                    <span className="text-[8px] tracking-[0.18em] text-white/15">
                      001
                    </span>
                  </div>

                  {/* Editorial area */}
                  <div className="relative z-10 px-6 py-7 sm:px-8">
                    <span className="text-[8px] uppercase tracking-[0.2em] text-[#737A1A]">
                      Perspective
                    </span>

                    <div className="mt-4 space-y-2">
                      <div className="h-2.5 w-[82%] bg-white/70" />
                      <div className="h-2.5 w-[65%] bg-white/25" />
                      <div className="h-2.5 w-[74%] bg-white/25" />
                    </div>

                    {/* Text lines */}
                    <div className="mt-8 space-y-2">
                      <div className="h-px w-full bg-white/[0.08]" />
                      <div className="h-px w-[88%] bg-white/[0.06]" />
                      <div className="h-px w-[72%] bg-white/[0.06]" />
                      <div className="h-px w-[82%] bg-white/[0.06]" />
                    </div>

                    {/* Graphic */}
                    <div className="mt-7 grid grid-cols-3 gap-2">
                      <div className="h-14 border border-[#737A1A]/20 bg-[#737A1A]/5">
                        <div className="m-2 h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
                      </div>

                      <div className="h-14 border border-white/[0.07]">
                        <div className="mt-7 h-px w-full bg-white/10" />
                      </div>

                      <div className="h-14 border border-white/[0.07]">
                        <div className="m-2 ml-auto h-5 w-5 border border-white/10" />
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-white/[0.08] px-6 py-4 sm:px-8">
                    <span className="text-[7px] uppercase tracking-[0.18em] text-white/20">
                      IMX / Insights
                    </span>

                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-[#737A1A]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* =========================================
                    RIGHT 3D EDGE
                ========================================= */}

                <div
                  className="absolute right-[-32px] top-[25px] h-[calc(100%-50px)] w-[32px] origin-left border border-white/10 bg-[#111]"
                  style={{
                    transform: "rotateY(90deg)",
                  }}
                >
                  <div className="flex h-full items-center justify-center">
                    <span className="text-[7px] uppercase tracking-[0.2em] text-white/20 [writing-mode:vertical-rl]">
                      JOURNAL
                    </span>
                  </div>
                </div>

                {/* =========================================
                    TOP 3D EDGE
                ========================================= */}

                <div
                  className="absolute left-[32px] right-[32px] top-[-22px] h-[22px] origin-bottom border border-white/10 bg-[#151515]"
                  style={{
                    transform: "rotateX(90deg)",
                  }}
                >
                  <div className="flex h-full items-center justify-center">
                    <span className="text-[7px] uppercase tracking-[0.18em] text-white/20">
                      Knowledge System
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING LABELS
            ================================================= */}

            <div className="absolute left-[0%] top-[18%] hidden border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-md sm:block">
              <span className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                Latest
              </span>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

                <span className="text-[10px] text-white/60">
                  Research
                </span>
              </div>
            </div>

            <div className="absolute bottom-[15%] right-[0%] hidden border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-md sm:block">
              <span className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                Format
              </span>

              <div className="mt-1 flex items-center gap-2">
                <Sparkles
                  className="h-2.5 w-2.5 text-[#737A1A]"
                  strokeWidth={1.5}
                />

                <span className="text-[10px] text-white/60">
                  Editorial
                </span>
              </div>
            </div>

            {/* Big background number */}
            <span className="absolute right-[4%] top-[7%] select-none text-[110px] font-semibold leading-none tracking-[-0.1em] text-white/[0.025] sm:text-[150px]">
              01
            </span>

            {/* Coordinate */}
            <span className="absolute bottom-[7%] left-[5%] text-[7px] uppercase tracking-[0.18em] text-white/15">
              Knowledge / 01
            </span>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="flex items-center justify-between border-t border-white/10 pt-5">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/25">
            <ArrowDown
              size={14}
              strokeWidth={1.4}
              className="text-[#737A1A]"
            />

            Explore the journal
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-white/15 sm:block">
            Technology · Design · Culture
          </span>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style jsx>{`
        @keyframes blogFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes blogPulse {
          0%,
          100% {
            opacity: 0.35;
          }

          50% {
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          .blog-float {
            animation: blogFloat 5s ease-in-out infinite;
          }

          .blog-pulse {
            animation: blogPulse 2.5s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  );
}