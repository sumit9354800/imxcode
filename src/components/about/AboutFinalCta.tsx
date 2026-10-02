import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { aboutCta } from "@/data/about-cta";

export default function AboutFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#737A1A] text-black">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-black/10" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-black/10" />
        <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-black/10" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-black/10" />
        <div className="absolute left-[12%] top-0 h-full w-px bg-black/10" />
        <div className="absolute left-[24%] top-0 h-full w-px bg-black/[0.06]" />
      </div>

      <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-between px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[680px] lg:px-10 lg:py-24">
        {/* Top */}
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-black/60" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              {aboutCta.eyebrow}
            </span>
          </div>

          <span className="hidden text-xs font-medium tracking-[0.2em] text-black/50 sm:block">
            IMX / 01
          </span>
        </div>

        {/* Main */}
        <div className="max-w-6xl">
          <h2 className="max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[8.5rem]">
            {aboutCta.title}
          </h2>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-black/65 sm:text-base">
              {aboutCta.description}
            </p>

            <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
              <Link
                href={aboutCta.primaryAction.href}
                className="group inline-flex items-center justify-center gap-3 bg-black px-6 py-4 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-1"
              >
                {aboutCta.primaryAction.label}

                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>

              <Link
                href={aboutCta.secondaryAction.href}
                className="group inline-flex items-center justify-center gap-3 border border-black/30 px-6 py-4 text-sm font-medium transition-colors duration-300 hover:border-black"
              >
                {aboutCta.secondaryAction.label}

                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-black/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-black/50">
            Technology · Design · Creative
          </span>

          <span className="text-xs font-medium uppercase tracking-[0.18em] text-black/50">
            Built by IMX
          </span>
        </div>
      </div>
    </section>
  );
}