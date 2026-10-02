import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { workCta } from "@/data/work-cta";

export default function WorkFinalCta() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#737A1A]/15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40 xl:px-16">
        <div className="border-t border-white/15 pt-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#737A1A]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#737A1A] sm:text-xs">
              {workCta.eyebrow}
            </p>
          </div>

          {/* Main content */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
            <div>
              <h2 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
                {workCta.title}
              </h2>
            </div>

            <div className="max-w-xl lg:pb-2">
              <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                {workCta.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={workCta.primaryAction.href}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#737A1A] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#858D20]"
                >
                  {workCta.primaryAction.label}

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href={workCta.secondaryAction.href}
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
                >
                  {workCta.secondaryAction.label}
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Strategy · Design · Technology · Creative
            </p>

            <p className="text-xs uppercase tracking-[0.2em] text-white/30">
              IMX Creative Tech
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}