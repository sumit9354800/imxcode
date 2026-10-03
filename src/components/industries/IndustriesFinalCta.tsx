import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { industriesCta } from "@/data/industries-cta";

export default function IndustriesFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#737A1A] text-black">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Large background word */}
        <div className="absolute -bottom-8 -left-4 select-none whitespace-nowrap text-[17vw] font-black leading-none tracking-[-0.09em] text-black/[0.045] sm:-bottom-12">
          INDUSTRY
        </div>

        {/* Ambient glow */}
        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/[0.08] blur-[130px]" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Technical lines */}
        <div className="absolute left-[18%] top-0 h-full w-px bg-black/[0.08]" />
        <div className="absolute right-[18%] top-0 h-full w-px bg-black/[0.08]" />
        <div className="absolute left-0 top-[30%] h-px w-full bg-black/[0.08]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
        {/* Top system bar */}
        <div className="flex items-center justify-between border-b border-black/15 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-black/70" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-xs">
              {industriesCta.eyebrow}
            </span>
          </div>

          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-black/40 sm:block">
            IMX / Industries / 10
          </span>
        </div>

        {/* Main CTA */}
        <div className="grid gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20 lg:py-20">
          {/* Left */}
          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
              {industriesCta.title}
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-md lg:pb-2">
            <div className="mb-7 h-px w-12 bg-black/50" />

            <p className="text-sm leading-6 text-black/65 sm:text-[15px] sm:leading-7">
              {industriesCta.description}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href={industriesCta.primaryAction.href}
                className="group inline-flex items-center justify-center gap-3 bg-black px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black/90"
              >
                {industriesCta.primaryAction.label}

                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>

              <Link
                href={industriesCta.secondaryAction.href}
                className="group inline-flex items-center justify-center gap-3 border border-black/25 px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black/[0.04]"
              >
                {industriesCta.secondaryAction.label}

                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom industry strip */}
        <div className="border-t border-black/15 pt-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-black/45 sm:text-[10px]">
              <span>Education</span>
              <span className="text-black/20">/</span>
              <span>Commerce</span>
              <span className="text-black/20">/</span>
              <span>Business</span>
              <span className="text-black/20">/</span>
              <span>Healthcare</span>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-black/45 sm:text-[10px]">
              <span>Technology</span>
              <span className="text-black/20">/</span>
              <span>Design</span>
              <span className="text-black/20">/</span>
              <span>Creative</span>
            </div>
          </div>
        </div>

        {/* Bottom technical marker */}
        <div className="mt-7 flex items-center justify-between text-[8px] uppercase tracking-[0.2em] text-black/25">
          <span>IMX Digital Studio</span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-black/50" />
            Digital experiences
          </span>
        </div>
      </div>
    </section>
  );
}