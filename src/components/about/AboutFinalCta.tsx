import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { aboutCta } from "@/data/about-cta";

export default function AboutFinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#737A1A] text-black">
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Large rings */}

        <div className="absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full border border-black/10" />

        <div className="absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full border border-black/10" />

        <div className="absolute -right-4 -top-4 h-[220px] w-[220px] rounded-full border border-black/10" />

        {/* Technical lines */}

        <div className="absolute bottom-0 left-0 h-px w-full bg-black/10" />

        <div className="absolute left-[12%] top-0 h-full w-px bg-black/10" />

        <div className="absolute left-[24%] top-0 h-full w-px bg-black/[0.06]" />

        <div className="absolute right-[12%] top-0 hidden h-full w-px bg-black/[0.05] lg:block" />

        {/* Ambient glow */}

        <div className="absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/[0.06] blur-[100px]" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto flex min-h-[480px] max-w-[1500px] flex-col justify-between px-6 py-12 sm:min-h-[500px] sm:px-8 sm:py-14 lg:min-h-[530px] lg:px-12 lg:py-16 xl:px-16">
        {/* =====================================================
            TOP BAR
        ====================================================== */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-black/60" />

            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.28em] sm:text-[9px]">
              {aboutCta.eyebrow}
            </span>
          </div>

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/45 sm:text-[9px]">
            IMX / 01
          </span>
        </div>

        {/* =====================================================
            MAIN CTA
        ====================================================== */}

        <div className="mt-14 lg:mt-16">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14">
            {/* Heading */}

            <div>
              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-black/70" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/45">
                  Start something meaningful
                </span>
              </div>

              <h2 className="max-w-5xl text-[clamp(3rem,6.5vw,7rem)] font-semibold leading-[0.86] tracking-[-0.08em]">
                {aboutCta.title}
              </h2>
            </div>

            {/* Description + Actions */}

            <div className="lg:pb-1">
              <p className="max-w-xl text-sm leading-6 text-black/60 sm:text-[15px] sm:leading-7">
                {aboutCta.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {/* Primary */}

                <Link
                  href={aboutCta.primaryAction.href}
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    bg-black
                    px-5
                    py-3.5
                    text-xs
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  {aboutCta.primaryAction.label}

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                    strokeWidth={1.5}
                  />
                </Link>

                {/* Secondary */}

                <Link
                  href={aboutCta.secondaryAction.href}
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    border
                    border-black/30
                    px-5
                    py-3.5
                    text-xs
                    font-medium
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-black
                    hover:bg-black/[0.04]
                  "
                >
                  {aboutCta.secondaryAction.label}

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM META
        ====================================================== */}

        <div className="mt-14 flex flex-col gap-4 border-t border-black/15 pt-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-black/60" />

            <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.2em] text-black/45">
              Technology · Design · Creative
            </span>
          </div>

          <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.2em] text-black/45">
            Built by IMX
          </span>
        </div>
      </div>
    </section>
  );
}