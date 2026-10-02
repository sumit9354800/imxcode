import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { teamCta } from "@/data/team-cta";

export default function TeamFinalCta() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#737A1A]/15 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -left-40 h-[500px] w-[500px] rounded-full bg-[#737A1A]/8 blur-[150px]"
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

      <div className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        {/* Top line */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[10px]">
              {teamCta.eyebrow}
            </p>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/20 sm:block">
            IMX Digital Studio
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-12 pt-14 lg:grid-cols-[1fr_0.45fr] lg:items-end lg:pt-20">
          <div>
            <h2 className="max-w-6xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              Have an idea
              <span className="block text-[#737A1A]">worth building?</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
              {teamCta.description}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href={teamCta.primaryAction.href}
                className="group inline-flex items-center justify-center gap-3 bg-[#737A1A] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
              >
                {teamCta.primaryAction.label}

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href={teamCta.secondaryAction.href}
                className="group inline-flex items-center justify-center gap-3 border border-white/15 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 transition-all duration-300 hover:border-[#737A1A] hover:text-white"
              >
                {teamCta.secondaryAction.label}

                <ArrowUpRight
                  size={14}
                  className="text-[#737A1A] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 border-t border-white/10 pt-6 sm:mt-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
              Technology · Design · Creative · Strategy
            </p>

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
                Let&apos;s make something meaningful
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}