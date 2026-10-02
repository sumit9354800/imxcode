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

export default function AboutHero() {
  return (
    <section className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-black text-white">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[650px] w-[650px] rounded-full bg-[#737A1A]/12 blur-[170px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-[#737A1A]/8 blur-[150px]"
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main container */}
      <div className="relative mx-auto flex min-h-[calc(100svh-80px)] max-w-[1600px] flex-col justify-between px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-16">
        {/* Top */}
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

        {/* Hero content */}
        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:py-8">
          {/* Left */}
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center border border-white/10 bg-white/[0.03]">
                <Sparkles size={14} className="text-[#737A1A]" />
              </div>

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                Who we are
              </span>
            </div>

            <h1 className="max-w-5xl text-[clamp(3.5rem,7.5vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              We build
              <span className="block text-[#737A1A]">digital experiences</span>
              <span className="block">with purpose.</span>
            </h1>

            <div className="mt-8 flex max-w-xl items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#737A1A]" />

              <p className="text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                {aboutHero.description}
              </p>
            </div>

            {/* Actions */}
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

          {/* Right visual */}
          <div className="relative flex min-h-[360px] items-center justify-center lg:min-h-[560px]">
            {/* Main orbital visual */}
            <div className="relative h-[300px] w-[300px] sm:h-[390px] sm:w-[390px] lg:h-[500px] lg:w-[500px]">
              {/* Outer glow */}
              <div
                aria-hidden="true"
                className="absolute inset-[18%] rounded-full bg-[#737A1A]/15 blur-[80px]"
              />

              {/* Outer orbit */}
              <div className="absolute inset-[7%] rounded-full border border-[#737A1A]/25" />

              {/* Second orbit */}
              <div className="absolute inset-[18%] rounded-full border border-white/10" />

              {/* Rotated orbit */}
              <div className="absolute inset-[13%] rotate-[55deg] rounded-full border border-[#737A1A]/30" />

              {/* Main glass core */}
              <div className="absolute left-1/2 top-1/2 flex h-[155px] w-[155px] -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center border border-[#737A1A]/50 bg-[#737A1A]/[0.07] shadow-[0_0_80px_rgba(115,122,26,0.16)] backdrop-blur-md sm:h-[200px] sm:w-[200px]">
                <div className="-rotate-45 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#737A1A]/50 bg-black/70 sm:h-16 sm:w-16">
                    <Image
                      src="/icons/favicon-light.png"
                      alt="IMX Digital Studio"
                      width={40}
                      height={40}
                      className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                    />
                  </div>

                  <p className="mt-4 text-[8px] uppercase tracking-[0.3em] text-white/35">
                    Digital Core
                  </p>
                </div>
              </div>

              {/* Orbit nodes */}
              <div className="absolute left-[8%] top-[42%] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/80 backdrop-blur">
                <Code2 size={15} className="text-[#737A1A]" />
              </div>

              <div className="absolute right-[8%] top-[25%] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/80 backdrop-blur">
                <Palette size={15} className="text-[#737A1A]" />
              </div>

              <div className="absolute bottom-[12%] left-[22%] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/80 backdrop-blur">
                <Layers3 size={15} className="text-[#737A1A]" />
              </div>

              {/* Accent points */}
              <span className="absolute right-[18%] bottom-[22%] h-2 w-2 rounded-full bg-[#737A1A] shadow-[0_0_18px_rgba(115,122,26,0.8)]" />

              <span className="absolute left-[27%] top-[17%] h-1.5 w-1.5 rounded-full bg-white/50" />

              {/* Technical labels */}
              <div className="absolute -right-2 top-[8%] hidden sm:block">
                <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                  Digital Systems
                </p>
              </div>

              <div className="absolute -bottom-1 left-[8%] hidden sm:block">
                <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                  01 / IMX
                </p>
              </div>
            </div>

            {/* Vertical marker */}
            <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:flex lg:flex-col lg:items-center lg:gap-3">
              <span className="h-14 w-px bg-gradient-to-b from-transparent via-[#737A1A] to-transparent" />

              <span className="text-[8px] uppercase tracking-[0.3em] text-white/20 [writing-mode:vertical-rl]">
                Technology · Design · Creative
              </span>

              <span className="h-14 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex items-center gap-3">
            <ArrowDown size={14} className="text-[#737A1A]" />

            <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
              Discover IMX
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
            Built for digital
          </span>
        </div>
      </div>
    </section>
  );
}
