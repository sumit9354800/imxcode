import { ArrowRight, Check } from "lucide-react";
import { websiteProcess } from "@/data/services/website-development";

export default function WebsiteDevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Olive atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.07] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-[400px] w-[400px] rounded-full bg-[#737A1A]/[0.055] blur-[130px]"
      />

      {/* Technical vertical lines */}
      <div className="pointer-events-none absolute inset-y-0 left-[8%] hidden w-px bg-black/[0.045] lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-[8%] hidden w-px bg-black/[0.045] lg:block" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[0.35fr_1fr] lg:items-end lg:gap-16">
          {/* Eyebrow / Meta */}

          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-full w-full animate-ping rounded-full bg-[#737A1A]/20" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-black/40">
                How We Build
              </span>
            </div>

            <div className="mt-5 hidden items-center gap-3 lg:flex">
              <span className="text-[8px] uppercase tracking-[0.22em] text-black/25">
                Website / Process
              </span>

              <span className="h-px w-8 bg-black/10" />

              <span className="text-[8px] uppercase tracking-[0.22em] text-[#737A1A]">
                01 — {String(websiteProcess.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Heading */}

          <div>
            <h2 className="max-w-[950px] text-[clamp(2.3rem,4.6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
              From first idea to a website
              <span className="block text-[#737A1A]">ready to launch.</span>
            </h2>

            <p className="mt-5 max-w-[680px] text-[14px] leading-6 text-black/50 sm:text-base sm:leading-7">
              A focused process keeps decisions clear, development efficient and
              the final experience aligned with your goals.
            </p>
          </div>
        </div>

        {/* =================================================
            PROCESS SYSTEM
        ================================================== */}

        {/* =================================================
    PROCESS SYSTEM
================================================== */}

        <div className="mt-10 lg:mt-12">
          {/* Top system label */}

          <div className="mb-4 flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/30">
              Project Workflow
            </span>

            <span className="font-mono text-[9px] tracking-[0.15em] text-black/25">
              {String(websiteProcess.length).padStart(2, "0")} PHASES
            </span>
          </div>

          {/* Process rail */}

          <div className="relative">
            {/* Desktop connecting line */}

            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[25px] hidden h-px bg-black/10 lg:block" />

            <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {websiteProcess.map((step, index) => (
                <div
                  key={step.number}
                  className="
            group
            relative
            min-w-0
            bg-white
            px-5
            py-5
            transition-colors
            duration-300
            sm:px-6
            sm:py-6
            lg:px-6
            lg:py-6
          "
                >
                  {/* Olive side indicator */}

                  <div
                    className="
              absolute
              left-0
              top-0
              h-full
              w-[2px]
              origin-top
              scale-y-0
              bg-[#737A1A]
              transition-transform
              duration-500
              group-hover:scale-y-100
            "
                  />

                  {/* =================================================
              STEP HEADER
          ================================================== */}

                  <div className="relative z-10 flex items-center justify-between">
                    {/* Number node */}

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition-colors duration-300 group-hover:border-[#737A1A]/50">
                      <span className="font-mono text-[10px] font-semibold tracking-[0.1em] transition-colors duration-300 group-hover:text-[#737A1A]">
                        {step.number}
                      </span>
                    </div>

                    {/* Arrow */}

                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 transition-colors duration-300 group-hover:border-[#737A1A] group-hover:text-[#737A1A]">
                      <ArrowRight
                        size={13}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>

                  {/* =================================================
              CONTENT
          ================================================== */}

                  <div className="mt-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="h-px w-6 bg-[#737A1A]/60 transition-all duration-500 group-hover:w-10" />

                      <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/25">
                        Phase {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-[20px] font-medium tracking-[-0.04em] sm:text-[21px]">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-[300px] text-[13px] leading-5.5 text-black/50">
                      {step.description}
                    </p>
                  </div>

                  {/* =================================================
              BOTTOM SIGNAL
          ================================================== */}

                  <div className="mt-5 flex items-center justify-between border-t border-black/[0.07] pt-3">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

                      <span className="text-[8px] uppercase tracking-[0.15em] text-black/25">
                        Process
                      </span>
                    </div>

                    <span className="font-mono text-[8px] text-black/20">
                      {String(index + 1).padStart(2, "0")}/
                      {String(websiteProcess.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Bottom hover accent */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================== */}

        <div className="mt-7 grid gap-5 border-t border-black/10 pt-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-black/35 sm:text-[10px]">
              Clear process · Thoughtful execution · Confident launch
            </p>
          </div>

          <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.16em] text-black/25">
            <Check size={13} strokeWidth={1.5} className="text-[#737A1A]" />
            Structured for clarity
          </div>
        </div>
      </div>
    </section>
  );
}
