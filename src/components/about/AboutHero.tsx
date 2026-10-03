"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Layers3,
  Code2,
  Palette,
} from "lucide-react";
import Link from "next/link";
import { aboutHero } from "@/data/about-hero";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutHero() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      setMouse({
        x,
        y,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <section className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-black text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[650px] w-[650px] rounded-full bg-[#737A1A]/10 blur-[170px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-[#737A1A]/8 blur-[150px]"
      />

      {/* Center atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[65%] top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#737A1A]/[0.035] blur-[120px]"
      />

      {/* =====================================================
          TECH GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto flex min-h-[calc(100svh-80px)] max-w-[1600px] flex-col justify-between px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-16">

        {/* ===================================================
            TOP BAR
        ==================================================== */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[10px]">
              {aboutHero.eyebrow}
            </p>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

            <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
              Technology · Design · Creative
            </span>
          </div>

        </div>

        {/* ===================================================
            HERO GRID
        ==================================================== */}

        <div className="grid flex-1 items-center gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-0 lg:py-8">

          {/* =================================================
              LEFT
          ================================================== */}

          <div className="relative z-20">

            <div className="mb-7 flex items-center gap-3">

              <div className="flex h-8 w-8 items-center justify-center border border-white/10 bg-white/[0.03]">
                <Sparkles
                  size={14}
                  className="text-[#737A1A]"
                />
              </div>

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                Who we are
              </span>

            </div>

            <h1 className="max-w-5xl text-[clamp(3.5rem,7.5vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em]">

              A digital 

              <span className="block text-[#737A1A]">
               team built
              </span>

              <span className="block">
               around ideas.
              </span>

            </h1>

            <div className="mt-8 flex max-w-xl items-start gap-3">

              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#737A1A]" />

              <p className="text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                {aboutHero.description}
              </p>

            </div>

            {/* =================================================
                ACTIONS
            ================================================== */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href={aboutHero.primaryAction.href}
                className="group inline-flex items-center justify-center gap-3 bg-[#737A1A] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                {aboutHero.primaryAction.label}

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href={aboutHero.secondaryAction.href}
                className="group inline-flex items-center justify-center gap-3 border border-white/15 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65 transition-all duration-300 hover:border-[#737A1A] hover:text-white"
              >
                {aboutHero.secondaryAction.label}

                <ArrowUpRight
                  size={14}
                  className="text-[#737A1A] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

            </div>

          </div>

          {/* =================================================
              RIGHT 3D VISUAL
          ================================================== */}

          <div className="relative flex min-h-[390px] items-center justify-center lg:min-h-[570px]">

            <div
              className="relative h-[330px] w-[330px] transition-transform duration-300 ease-out sm:h-[430px] sm:w-[430px] lg:h-[530px] lg:w-[530px]"
              style={{
                transform: `
                  perspective(1200px)
                  rotateX(${-mouse.y * 5}deg)
                  rotateY(${mouse.x * 7}deg)
                `,
              }}
            >

              {/* =================================================
                  LARGE ATMOSPHERIC GLOW
              ================================================== */}

              <div
                className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#737A1A]/20 blur-[90px]"
              />

              <div
                className="absolute left-1/2 top-1/2 h-[35%] w-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#737A1A]/20 blur-[50px]"
              />

              {/* =================================================
                  OUTER ORBIT 1
              ================================================== */}

              <div
                className="absolute inset-[4%] rounded-full border border-[#737A1A]/20"
                style={{
                  animation:
                    "imxSpin 24s linear infinite",
                }}
              />

              {/* =================================================
                  OUTER ORBIT 2
              ================================================== */}

              <div
                className="absolute inset-[12%] rounded-full border border-white/[0.08]"
                style={{
                  transform:
                    "rotateX(65deg) rotateZ(15deg)",
                  animation:
                    "imxSpinReverse 18s linear infinite",
                }}
              />

              {/* =================================================
                  OUTER ORBIT 3
              ================================================== */}

              <div
                className="absolute inset-[18%] rounded-full border border-[#737A1A]/30"
                style={{
                  transform:
                    "rotateY(65deg) rotateZ(30deg)",
                  animation:
                    "imxSpin 14s linear infinite",
                }}
              />

              {/* =================================================
                  DIAGONAL ORBIT
              ================================================== */}

              <div
                className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#737A1A]/20"
                style={{
                  transform:
                    "translate(-50%, -50%) rotate(45deg) scaleY(.45)",
                }}
              />

              {/* =================================================
                  FLOATING PARTICLES
              ================================================== */}

              <div
                className="absolute left-[18%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#737A1A] shadow-[0_0_18px_#737A1A]"
                style={{
                  animation:
                    "imxFloat 4s ease-in-out infinite",
                }}
              />

              <div
                className="absolute right-[17%] top-[32%] h-1 w-1 rounded-full bg-white/70"
                style={{
                  animation:
                    "imxFloat 5s ease-in-out infinite .4s",
                }}
              />

              <div
                className="absolute bottom-[20%] left-[24%] h-2 w-2 rounded-full bg-[#737A1A] shadow-[0_0_20px_#737A1A]"
                style={{
                  animation:
                    "imxFloat 4.5s ease-in-out infinite .8s",
                }}
              />

              <div
                className="absolute bottom-[28%] right-[24%] h-1.5 w-1.5 rounded-full bg-white/50"
                style={{
                  animation:
                    "imxFloat 3.5s ease-in-out infinite 1s",
                }}
              />

              <div
                className="absolute left-[30%] top-[13%] h-1 w-1 rounded-full bg-[#737A1A]"
              />

              {/* =================================================
                  MAIN 3D CORE
              ================================================== */}

              <div
                className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2"
                style={{
                  transformStyle: "preserve-3d",
                  animation:
                    "imxCoreFloat 7s ease-in-out infinite",
                }}
              >

                {/* Core glow */}
                <div className="absolute inset-[-25%] rounded-full bg-[#737A1A]/15 blur-[55px]" />

                {/* =================================================
                    BACK CRYSTAL
                ================================================== */}

                <div
                  className="absolute inset-[8%] border border-[#737A1A]/30 bg-[#737A1A]/[0.025]"
                  style={{
                    transform:
                      "rotateX(60deg) rotateZ(45deg) translateZ(-35px)",
                    boxShadow:
                      "0 0 60px rgba(115,122,26,.12)",
                  }}
                />

                {/* =================================================
                    MAIN GLASS DIAMOND
                ================================================== */}

                <div
                  className="absolute inset-0 border border-[#737A1A]/60 bg-[#737A1A]/[0.06] backdrop-blur-[3px]"
                  style={{
                    transform:
                      "rotateX(2deg) rotateY(2deg) rotateZ(45deg)",
                    boxShadow:
                      "inset 0 0 50px rgba(115,122,26,.06), 0 0 80px rgba(115,122,26,.15)",
                  }}
                >

                  {/* Inner glass */}
                  <div className="absolute inset-[12%] border border-white/[0.08] bg-white/[0.015]" />

                  {/* diagonal reflection */}
                  <div
                    className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#737A1A]/70 to-transparent"
                    style={{
                      transform:
                        "rotate(45deg)",
                    }}
                  />

                </div>

                {/* =================================================
                    FRONT CORE
                ================================================== */}

                <div
                  className="absolute left-1/2 top-1/2 flex h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#737A1A]/45 bg-black/60 backdrop-blur-xl"
                  style={{
                    transform:
                      "translate(-50%, -50%) rotate(45deg) translateZ(45px)",
                    boxShadow:
                      "0 0 50px rgba(115,122,26,.18)",
                  }}
                >

                  <div
                    className="-rotate-45 text-center"
                    style={{
                      transform:
                        "translateZ(25px)",
                    }}
                  >

                    <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#737A1A]/40 bg-black/80 sm:h-16 sm:w-16">

                      <Image
                        src="/icons/favicon-light.png"
                        alt="IMX Digital Studio"
                        width={48}
                        height={48}
                        className="h-9 w-9 object-contain sm:h-10 sm:w-10"
                      />

                    </div>

                    <p className="mt-4 whitespace-nowrap text-[7px] uppercase tracking-[0.3em] text-white/35">
                      Digital Core
                    </p>

                  </div>

                </div>

                {/* =================================================
                    ENERGY LINE
                ================================================== */}

                <div
                  className="absolute left-1/2 top-1/2 h-[115%] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#737A1A]/60 to-transparent"
                  style={{
                    transform:
                      "translate(-50%, -50%) rotate(45deg)",
                  }}
                />

              </div>

              {/* =================================================
                  NODE — CODE
              ================================================== */}

              <div
                className="absolute left-[5%] top-[42%] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/80 shadow-[0_0_25px_rgba(115,122,26,.08)] backdrop-blur-xl"
                style={{
                  animation:
                    "imxNodeFloat 5s ease-in-out infinite",
                }}
              >
                <Code2
                  size={15}
                  className="text-[#737A1A]"
                />
              </div>

              {/* =================================================
                  NODE — DESIGN
              ================================================== */}

              <div
                className="absolute right-[5%] top-[24%] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/80 shadow-[0_0_25px_rgba(115,122,26,.08)] backdrop-blur-xl"
                style={{
                  animation:
                    "imxNodeFloat 4.5s ease-in-out infinite .5s",
                }}
              >
                <Palette
                  size={15}
                  className="text-[#737A1A]"
                />
              </div>

              {/* =================================================
                  NODE — LAYERS
              ================================================== */}

              <div
                className="absolute bottom-[10%] left-[21%] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/80 shadow-[0_0_25px_rgba(115,122,26,.08)] backdrop-blur-xl"
                style={{
                  animation:
                    "imxNodeFloat 5.5s ease-in-out infinite 1s",
                }}
              >
                <Layers3
                  size={15}
                  className="text-[#737A1A]"
                />
              </div>

              {/* =================================================
                  TECH LABELS
              ================================================== */}

              <div className="absolute -right-2 top-[7%] hidden sm:block">
                <div className="flex items-center gap-2">
                  <span className="h-px w-7 bg-[#737A1A]/40" />

                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                    Digital Systems
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-1 left-[7%] hidden sm:block">
                <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                  01 / IMX
                </p>
              </div>

              {/* Status */}
              <div className="absolute bottom-[16%] right-[12%] hidden items-center gap-2 sm:flex">

                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#737A1A] shadow-[0_0_12px_#737A1A]"
                  style={{
                    animation:
                      "imxPulse 2s ease-in-out infinite",
                  }}
                />

                <span className="text-[7px] uppercase tracking-[0.25em] text-white/20">
                  System Active
                </span>

              </div>

            </div>

            {/* =================================================
                VERTICAL MARKER
            ================================================== */}

            <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:flex lg:flex-col lg:items-center lg:gap-3">

              <span className="h-14 w-px bg-gradient-to-b from-transparent via-[#737A1A] to-transparent" />

              <span className="text-[8px] uppercase tracking-[0.3em] text-white/20 [writing-mode:vertical-rl]">
                Technology · Design · Creative
              </span>

              <span className="h-14 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            </div>

          </div>

        </div>

        {/* ===================================================
            BOTTOM
        ==================================================== */}

        <div className="flex items-center justify-between border-t border-white/10 pt-6">

          <div className="flex items-center gap-3">

            <ArrowDown
              size={14}
              className="text-[#737A1A]"
            />

            <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
              Discover IMX
            </span>

          </div>

          <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
            Built for digital
          </span>

        </div>

      </div>

      {/* =====================================================
          CSS ANIMATIONS
      ====================================================== */}

    </section>
  );
}