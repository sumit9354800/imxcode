import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { workCta } from "@/data/work-cta";

export default function WorkFinalCta() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-black text-white sm:min-h-[680px] lg:min-h-[760px]">
      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Olive atmospheric glow */}

        <div className="absolute -left-48 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#737A1A]/20 blur-[160px]" />

        <div className="absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-[#737A1A]/10 blur-[180px]" />

        {/* Technical grid */}

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* Large editorial number */}

        <div className="absolute -bottom-20 right-[-2%] select-none text-[28vw] font-semibold leading-none tracking-[-0.12em] text-white/[0.025]">
          10
        </div>

        {/* Vertical technical line */}

        <div className="absolute bottom-0 left-[8%] top-0 hidden w-px bg-white/[0.06] lg:block" />

        <div className="absolute bottom-0 right-[12%] top-0 hidden w-px bg-white/[0.04] lg:block" />
      </div>

      <div className="relative mx-auto flex min-h-[620px] max-w-[1600px] flex-col px-5 py-10 sm:min-h-[680px] sm:px-8 sm:py-12 lg:min-h-[760px] lg:px-12 lg:py-16 xl:px-16">
        {/* =====================================================
            TOP SYSTEM BAR
        ====================================================== */}

        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A] shadow-[0_0_12px_rgba(115,122,26,0.8)]" />

            <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-white/45 sm:text-[9px]">
              {workCta.eyebrow}
            </span>
          </div>

          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
            IMX / 010
          </span>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="flex flex-1 items-center py-20 sm:py-24 lg:py-28">
          <div className="grid w-full gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-20">
            {/* LEFT — MASSIVE STATEMENT */}

            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#737A1A]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#737A1A]">
                  Start something meaningful
                </span>
              </div>

              <h2 className="max-w-6xl text-[clamp(3.5rem,8.5vw,9rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
                {workCta.title}
              </h2>

              {/* Decorative underline */}

              <div className="mt-10 flex items-center gap-3">
                <span className="h-px w-16 bg-[#737A1A]" />

                <span className="h-px w-3 bg-white/20" />

                <span className="h-px w-3 bg-white/10" />
              </div>
            </div>

            {/* RIGHT — CTA PANEL */}

            <div className="relative lg:pl-8">
              {/* Small orbital accent */}

              <div
                aria-hidden="true"
                className="absolute -right-4 -top-10 hidden h-32 w-32 rounded-full border border-[#737A1A]/20 lg:block"
              />

              <div
                aria-hidden="true"
                className="absolute -right-4 -top-10 hidden h-32 w-32 rotate-45 rounded-full border border-white/[0.05] lg:block"
              />

              <p className="relative max-w-lg text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                {workCta.description}
              </p>

              {/* Actions */}

              <div className="relative mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href={workCta.primaryAction.href}
                  className="group inline-flex items-center justify-between gap-6 rounded-full bg-[#737A1A] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#858D20] hover:shadow-[0_0_35px_rgba(115,122,26,0.25)]"
                >
                  <span>{workCta.primaryAction.label}</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>

                <Link
                  href={workCta.secondaryAction.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/35 hover:bg-white/[0.04] hover:text-white"
                >
                  {workCta.secondaryAction.label}
                </Link>
              </div>

              {/* Small information block */}

              <div className="mt-12 border-l border-[#737A1A]/50 pl-5">
                <p className="text-[8px] uppercase tracking-[0.28em] text-white/25">
                  What comes next
                </p>

                <p className="mt-2 text-xs leading-6 text-white/45">
                  Strategy → Design → Technology → Launch
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM SYSTEM
        ====================================================== */}

        <div className="border-t border-white/10 pt-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {[
                "Strategy",
                "Design",
                "Technology",
                "Creative",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-white/30"
                >
                  {index > 0 && (
                    <span className="mr-2 h-1 w-1 rounded-full bg-[#737A1A]/60" />
                  )}

                  {item}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/15" />

              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
                IMX Digital Studio
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SIDE SIGNAL
      ====================================================== */}

      <div
        aria-hidden="true"
        className="absolute bottom-24 right-5 hidden flex-col items-center gap-3 lg:flex xl:right-8"
      >
        <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20 [writing-mode:vertical-rl]">
          Digital experiences
        </span>

        <span className="h-16 w-px bg-gradient-to-b from-[#737A1A] to-transparent" />
      </div>
    </section>
  );
}