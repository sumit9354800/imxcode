import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export default function TeamHero() {
  return (
    <section className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-black text-white">
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-[#737A1A]/15 blur-[180px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#737A1A]/10 blur-[150px]"
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-76px)] max-w-[1600px] flex-col px-6 pb-8 pt-10 sm:px-8 lg:px-12 xl:px-16">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#737A1A]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white sm:text-xs">
              The People Behind IMX
            </p>
          </div>

          <p className="hidden text-[10px] uppercase tracking-[0.28em] text-white/30 sm:block">
            01 — Team
          </p>
        </div>

        {/* Main */}
        <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1fr_0.9fr] lg:gap-8 lg:py-16">
          {/* LEFT */}
          <div className="relative z-10">
            <p className="mb-7 max-w-md text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
              A multidisciplinary team combining technology, design and
              creativity to build digital experiences that move businesses
              forward.
            </p>

            <h1 className="max-w-6xl text-[clamp(4rem,9.5vw,9.5rem)] font-semibold leading-[0.8] tracking-[-0.085em]">
              Meet the
              <span className="block text-[#737A1A]">people</span>
              <span className="block">behind IMX.</span>
            </h1>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#our-team"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#737A1A] hover:text-white"
              >
                Meet the team

                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
              >
                Work with us

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT — 3D ORBITAL VISUAL */}
          <div className="relative mx-auto aspect-square w-full max-w-[620px]">
            {/* Outer glow */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#737A1A]/20 blur-[90px]"
            />

            {/* Outer orbital ring */}
            <div className="absolute inset-[4%] rounded-full border border-white/[0.08]" />

            <div className="absolute inset-[11%] rounded-full border border-white/[0.06]" />

            {/* Tilted orbital system */}
            <div className="absolute left-1/2 top-1/2 h-[86%] w-[48%] -translate-x-1/2 -translate-y-1/2 rotate-[38deg] rounded-[50%] border border-[#737A1A]/30" />

            <div className="absolute left-1/2 top-1/2 h-[48%] w-[86%] -translate-x-1/2 -translate-y-1/2 rotate-[-22deg] rounded-[50%] border border-white/[0.09]" />

            {/* Inner 3D sphere */}
            <div className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#737A1A]/40 bg-gradient-to-br from-[#737A1A]/20 via-black to-white/[0.04] shadow-[0_0_100px_rgba(115,122,26,0.16)] backdrop-blur-xl">
              {/* Sphere highlight */}
              <div className="absolute inset-[8%] rounded-full border border-white/[0.08]" />

              <div className="absolute left-[18%] top-[14%] h-[25%] w-[25%] rounded-full bg-white/10 blur-xl" />

              {/* Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/icons/favicon-light.png"
                  width={110}
                  height={110}
                  priority
                  alt="IMX Digital Studio"
                  className="h-20 w-20 object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] sm:h-24 sm:w-24"
                />
              </div>

              {/* Small orbiting light */}
              <span className="absolute -right-1 top-[28%] h-2 w-2 rounded-full bg-[#737A1A] shadow-[0_0_20px_rgba(115,122,26,0.8)]" />
            </div>

            {/* TEAM NODES */}

            {/* Technology */}
            <div className="absolute left-[5%] top-[25%] flex h-20 w-20 -rotate-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] shadow-2xl backdrop-blur-xl sm:h-24 sm:w-24">
              <div className="text-center">
                <span className="mx-auto mb-2 block h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
                <span className="text-[8px] uppercase tracking-[0.22em] text-white/60">
                  Technology
                </span>
              </div>
            </div>

            {/* Design */}
            <div className="absolute right-[2%] top-[17%] flex h-24 w-24 rotate-6 items-center justify-center rounded-full border border-[#737A1A]/30 bg-[#737A1A]/[0.06] shadow-2xl backdrop-blur-xl sm:h-28 sm:w-28">
              <div className="text-center">
                <Sparkles
                  size={14}
                  className="mx-auto mb-2 text-[#737A1A]"
                />

                <span className="text-[8px] uppercase tracking-[0.22em] text-[#737A1A]">
                  Design
                </span>
              </div>
            </div>

            {/* Creative */}
            <div className="absolute bottom-[12%] left-[7%] flex h-24 w-24 rotate-3 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] shadow-2xl backdrop-blur-xl sm:h-28 sm:w-28">
              <div className="text-center">
                <span className="mx-auto mb-2 block h-1.5 w-1.5 rounded-full bg-white/50" />

                <span className="text-[8px] uppercase tracking-[0.22em] text-white/60">
                  Creative
                </span>
              </div>
            </div>

            {/* Strategy */}
            <div className="absolute bottom-[7%] right-[8%] flex h-20 w-20 -rotate-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] shadow-2xl backdrop-blur-xl sm:h-24 sm:w-24">
              <div className="text-center">
                <span className="mx-auto mb-2 block h-1.5 w-1.5 rounded-full bg-white/40" />

                <span className="text-[8px] uppercase tracking-[0.22em] text-white/60">
                  Strategy
                </span>
              </div>
            </div>

            {/* Floating particles */}
            <span className="absolute left-[44%] top-[3%] h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

            <span className="absolute right-[4%] top-[48%] h-1 w-1 rounded-full bg-white/50" />

            <span className="absolute bottom-[3%] left-[48%] h-1.5 w-1.5 rounded-full bg-white/40" />

            <span className="absolute left-[17%] top-[57%] h-1 w-1 rounded-full bg-[#737A1A]/70" />
          </div>
        </div>

        {/* Bottom stats */}
        <div className="flex items-end justify-between border-t border-white/10 pt-5">
          <div className="flex gap-8 sm:gap-12">
            <div>
              <p className="text-xl font-semibold tracking-tight">05</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/30">
                Core members
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold tracking-tight">04</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/30">
                Disciplines
              </p>
            </div>

            <div className="hidden sm:block">
              <p className="text-xl font-semibold tracking-tight">01</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/30">
                Direction
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}