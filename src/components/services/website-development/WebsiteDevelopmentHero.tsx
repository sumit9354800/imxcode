
"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, Code2, Globe2, Layers3 } from "lucide-react";

export default function WebsiteDevelopmentHero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-black text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Vertical Grid */}
        <div className="absolute inset-y-0 left-[12%] w-px bg-white/[0.07]" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.05]" />
        <div className="absolute inset-y-0 right-[12%] w-px bg-white/[0.07]" />

        {/* Horizontal Grid */}
        <div className="absolute left-0 right-0 top-[25%] h-px bg-white/[0.05]" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-white/[0.07]" />
        <div className="absolute left-0 right-0 top-[75%] h-px bg-white/[0.05]" />

        {/* Olive Glow */}
        <div className="absolute -right-[120px] top-[10%] h-[600px] w-[600px] rounded-full bg-[#737A1A]/20 blur-[150px]" />

        <div className="absolute right-[25%] top-[45%] h-[280px] w-[280px] rounded-full bg-[#737A1A]/10 blur-[100px]" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto flex min-h-[88vh] max-w-[1600px] flex-col justify-between px-6 py-8 sm:px-8 lg:px-12 xl:px-16">
        {/* =======================================================
            TOP
        ======================================================== */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
              Website Development
            </span>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/25 sm:block">
            IMX / 01
          </span>
        </div>

        {/* =======================================================
            HERO
        ======================================================== */}

        <div className="grid items-center gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] xl:gap-16">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="relative z-20">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A] shadow-[0_0_14px_rgba(115,122,26,0.9)]" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                Digital Product Engineering
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(2.8rem,5.5vw,6.1rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              Websites built
              <br />
              for
              <br />
              <span className="text-[#737A1A]">real growth.</span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              High-performance websites engineered around your brand, your
              users and your business goals — from strategy and UI to
              development and launch.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#737A1A] px-5 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(115,122,26,0.22)]"
              >
                Start a project

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="#website-capabilities"
                className="group inline-flex items-center gap-2 px-2 py-3 text-sm text-white/55 transition-colors hover:text-white"
              >
                Explore the service

                <ArrowDown
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT — WEBSITE 4D MODEL
          ====================================================== */}

          <div className="relative mx-auto w-full max-w-[680px]">
            <div className="relative aspect-square w-full">
              {/* -------------------------------------------------
                  AMBIENT LIGHT
              -------------------------------------------------- */}

              <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#737A1A]/10 blur-[90px]" />

              {/* -------------------------------------------------
                  BACK ARCHITECTURE
              -------------------------------------------------- */}

              <div className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rotate-[12deg] border border-white/[0.07]" />

              <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 -rotate-[14deg] border border-[#737A1A]/20" />

              {/* -------------------------------------------------
                  CODE PANEL
              -------------------------------------------------- */}

              <div className="absolute left-[5%] top-[16%] w-[42%] rotate-[-8deg] border border-white/10 bg-[#080808]/90 p-4 shadow-2xl backdrop-blur-md">
                <div className="mb-4 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />

                  <span className="ml-auto text-[7px] uppercase tracking-[0.2em] text-white/20">
                    code
                  </span>
                </div>

                <div className="space-y-2 font-mono text-[7px]">
                  <div className="flex gap-2">
                    <span className="text-white/20">01</span>
                    <span className="text-[#737A1A]">const</span>
                    <span className="text-white/55">website</span>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-white/20">02</span>
                    <span className="ml-3 text-white/30">
                      = buildExperience()
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-white/20">03</span>
                    <span className="text-[#737A1A]">return</span>
                    <span className="text-white/40">{"{"}</span>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-white/20">04</span>
                    <span className="ml-3 text-white/40">
                      performance: 100
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-white/20">05</span>
                    <span className="text-white/40">{"}"}</span>
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------
                  MAIN BROWSER
              -------------------------------------------------- */}

              <div className="absolute left-[20%] top-[22%] h-[48%] w-[72%] border border-white/15 bg-[#050505] shadow-[0_30px_100px_rgba(0,0,0,0.8)] [transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)]">
                {/* Browser Header */}
                <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />

                  <div className="ml-4 flex h-3 w-[55%] items-center border border-white/[0.06] px-2">
                    <span className="text-[6px] text-white/20">
                      yourbrand.com
                    </span>
                  </div>
                </div>

                {/* Website UI */}
                <div className="p-5 sm:p-7">
                  {/* Nav */}
                  <div className="flex items-center justify-between">
                    <div className="h-2.5 w-12 bg-[#737A1A]" />

                    <div className="flex gap-2">
                      <span className="h-1 w-7 bg-white/20" />
                      <span className="h-1 w-7 bg-white/20" />
                      <span className="h-1 w-7 bg-white/20" />
                    </div>
                  </div>

                  {/* Hero */}
                  <div className="mt-8">
                    <div className="h-3 w-[70%] bg-white/85" />
                    <div className="mt-2 h-3 w-[48%] bg-white/30" />

                    <div className="mt-5 flex gap-2">
                      <div className="h-5 w-16 bg-[#737A1A]" />
                      <div className="h-5 w-16 border border-white/10" />
                    </div>
                  </div>

                  {/* Content Blocks */}
                  <div className="mt-7 grid grid-cols-3 gap-2">
                    <div className="h-12 border border-white/10 bg-white/[0.02]" />
                    <div className="h-12 border border-white/10 bg-white/[0.02]" />
                    <div className="h-12 border border-[#737A1A]/30 bg-[#737A1A]/[0.03]" />
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------
                  FLOATING UI CARD
              -------------------------------------------------- */}

              <div className="absolute right-[2%] top-[10%] w-[28%] border border-white/10 bg-black/80 p-3 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Globe2 size={12} className="text-[#737A1A]" />

                  <span className="text-[7px] uppercase tracking-[0.18em] text-white/35">
                    Live Website
                  </span>
                </div>

                <div className="mt-3 h-1 w-[80%] bg-white/20" />
                <div className="mt-1.5 h-1 w-[55%] bg-white/10" />

                <div className="mt-3 flex items-end justify-between">
                  <span className="text-lg font-medium tracking-[-0.05em]">
                    99.9
                  </span>

                  <span className="text-[7px] text-[#737A1A]">
                    PERFORMANCE
                  </span>
                </div>
              </div>

              {/* -------------------------------------------------
                  LAYER STACK
              -------------------------------------------------- */}

              <div className="absolute bottom-[14%] left-[7%] w-[38%] rotate-[6deg]">
                <div className="absolute bottom-5 left-4 h-20 w-full border border-white/[0.07] bg-white/[0.015]" />
                <div className="absolute bottom-2 left-2 h-20 w-full border border-white/[0.1] bg-white/[0.02]" />

                <div className="relative h-20 border border-[#737A1A]/40 bg-black/80 p-3 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <Layers3 size={12} className="text-[#737A1A]" />

                    <span className="text-[7px] uppercase tracking-[0.18em] text-white/35">
                      Architecture
                    </span>
                  </div>

                  <div className="mt-4 flex gap-1">
                    <span className="h-1 flex-1 bg-[#737A1A]/70" />
                    <span className="h-1 flex-1 bg-white/15" />
                    <span className="h-1 flex-1 bg-white/15" />
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------
                  MOBILE DEVICE
              -------------------------------------------------- */}

              <div className="absolute bottom-[9%] right-[10%] h-[28%] w-[14%] rotate-[8deg] rounded-[8px] border border-white/15 bg-[#050505] p-1 shadow-2xl">
                <div className="h-full w-full border border-white/[0.06] p-1">
                  <div className="h-1.5 w-5 bg-[#737A1A]" />

                  <div className="mt-3 space-y-1.5">
                    <div className="h-1.5 w-full bg-white/40" />
                    <div className="h-1.5 w-[70%] bg-white/15" />
                  </div>

                  <div className="mt-3 h-8 border border-white/10" />

                  <div className="mt-2 grid grid-cols-2 gap-1">
                    <div className="h-4 border border-white/10" />
                    <div className="h-4 border border-white/10" />
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------
                  CODE ICON
              -------------------------------------------------- */}

              <div className="absolute bottom-[9%] right-[29%] flex h-10 w-10 items-center justify-center border border-white/10 bg-black/80 backdrop-blur-md">
                <Code2 size={16} className="text-[#737A1A]" />
              </div>

              {/* -------------------------------------------------
                  CONNECTING LINES
              -------------------------------------------------- */}

              <div className="absolute left-[46%] top-[15%] h-[55%] w-px rotate-[32deg] bg-gradient-to-b from-transparent via-[#737A1A]/40 to-transparent" />

              <div className="absolute left-[42%] top-[38%] h-px w-[40%] rotate-[12deg] bg-gradient-to-r from-[#737A1A]/40 to-transparent" />

              {/* -------------------------------------------------
                  NODES
              -------------------------------------------------- */}

              <span className="absolute left-[12%] top-[28%] h-1.5 w-1.5 rounded-full bg-[#737A1A] shadow-[0_0_15px_rgba(115,122,26,0.9)]" />

              <span className="absolute right-[9%] top-[37%] h-1 w-1 rounded-full bg-white/50" />

              <span className="absolute left-[49%] bottom-[16%] h-1.5 w-1.5 rounded-full bg-[#737A1A] shadow-[0_0_15px_rgba(115,122,26,0.8)]" />

              {/* -------------------------------------------------
                  LARGE NUMBER
              -------------------------------------------------- */}

              <span className="absolute right-[5%] bottom-[3%] text-[clamp(4rem,8vw,7rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.035]">
                01
              </span>

              {/* Technical Corners */}
              <div className="absolute left-[4%] top-[8%] h-5 w-5 border-l border-t border-[#737A1A]/50" />

              <div className="absolute right-[4%] top-[8%] h-5 w-5 border-r border-t border-white/20" />

              <div className="absolute bottom-[7%] left-[4%] h-5 w-5 border-b border-l border-white/20" />

              <div className="absolute bottom-[7%] right-[4%] h-5 w-5 border-b border-r border-[#737A1A]/50" />
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM
        ======================================================== */}

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            Strategy · UI/UX · Development
          </span>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            Fast · Responsive · Scalable
          </span>
        </div>
      </div>
    </section>
  );
}
