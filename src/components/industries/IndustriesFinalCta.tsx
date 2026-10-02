import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { industriesCta } from "@/data/industries-cta";

export default function IndustriesFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#737A1A] text-black">
      {/* Background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-0 select-none whitespace-nowrap text-[18vw] font-black leading-none tracking-[-0.08em] text-black/[0.045] sm:-bottom-16"
      >
        INDUSTRY
      </div>

      {/* Technical lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
      >
        <div className="absolute left-[18%] top-0 h-full w-px bg-black/10" />
        <div className="absolute left-[72%] top-0 h-full w-px bg-black/10" />
        <div className="absolute top-[28%] h-px w-full bg-black/10" />
        <div className="absolute top-[72%] h-px w-full bg-black/10" />
      </div>

      <div className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col justify-between px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:px-10 lg:py-24">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-black/60" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              {industriesCta.eyebrow}
            </span>
          </div>

          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-black/40 sm:block">
            IMX / Industries
          </span>
        </div>

        {/* Main */}
        <div className="relative z-10 max-w-6xl">
          <h2 className="max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[8rem]">
            {industriesCta.title}
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-xl text-sm leading-7 text-black/65 sm:text-base">
              {industriesCta.description}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={industriesCta.primaryAction.href}
                className="group inline-flex items-center justify-center gap-3 bg-black px-6 py-4 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-1"
              >
                {industriesCta.primaryAction.label}

                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>

              <Link
                href={industriesCta.secondaryAction.href}
                className="group inline-flex items-center justify-center gap-3 border border-black/25 px-6 py-4 text-sm font-medium transition-colors duration-300 hover:border-black"
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

        {/* Bottom */}
        <div className="relative z-10 flex flex-col gap-4 border-t border-black/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-black/45">
            Education · Commerce · Business · Healthcare
          </span>

          <span className="text-xs font-medium uppercase tracking-[0.18em] text-black/45">
            Technology · Design · Creative
          </span>
        </div>
      </div>
    </section>
  );
}