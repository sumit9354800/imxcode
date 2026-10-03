import { workProcessSteps } from "@/data/work-process";

export default function WorkProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#080808] text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Technical grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Ambient olive lights */}

        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#737A1A]/10 blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#737A1A]/10 blur-[130px]" />

        {/* Vertical technical line */}

        <div className="absolute left-[12%] top-0 hidden h-full w-px bg-white/[0.04] lg:block" />

        <div className="absolute right-[12%] top-0 hidden h-full w-px bg-white/[0.04] lg:block" />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-12">
          {/* Eyebrow */}

          <div className="flex items-start gap-3">
            <span className="mt-2 h-px w-8 shrink-0 bg-[#737A1A]" />

            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/45 sm:text-[10px]">
              How we build
            </p>
          </div>

          {/* Heading */}

          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,5vw,5.8rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              From idea
              <span className="block text-[#737A1A]">to impact.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
              Every project follows a connected process that brings strategy,
              design, technology and execution together.
            </p>
          </div>
        </div>

        {/* =====================================================
            PROCESS SYSTEM
        ====================================================== */}

        <div className="relative mt-14 border-t border-white/10 sm:mt-20">
          {workProcessSteps.map((step, index) => (
            <div
              key={step.number}
              className="
                group
                relative
                grid
                gap-5
                border-b
                border-white/10
                py-7
                transition-colors
                duration-500
                hover:bg-white/[0.015]
                sm:py-8
                lg:grid-cols-[72px_minmax(220px,0.8fr)_minmax(300px,1.2fr)]
                lg:items-center
                lg:gap-10
                lg:py-9
              "
            >
              {/* =================================================
                  NUMBER
              ================================================== */}

              <div className="relative">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#737A1A]">
                  {step.number}
                </span>

                {/* Process connector */}

                {index !== workProcessSteps.length - 1 && (
                  <span className="absolute left-[3px] top-7 hidden h-[calc(100%+2.25rem)] w-px bg-gradient-to-b from-[#737A1A]/30 to-transparent lg:block" />
                )}
              </div>

              {/* =================================================
                  TITLE
              ================================================== */}

              <div className="relative min-w-0">
                <h3 className="text-2xl font-medium tracking-[-0.055em] transition-colors duration-300 group-hover:text-[#737A1A] sm:text-3xl lg:text-4xl">
                  {step.title}
                </h3>

                {/* Small active line */}

                <span className="mt-3 block h-px w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-10" />
              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <div className="flex min-w-0 items-start gap-4">
                <span className="mt-2 h-px w-7 shrink-0 bg-white/15 transition-colors duration-300 group-hover:bg-[#737A1A]/60" />

                <p className="max-w-xl text-xs leading-6 text-white/40 sm:text-sm sm:leading-7">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-6 text-white/30 sm:text-sm">
            Clear thinking. Thoughtful design. Solid technology. Every stage
            works together.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

            <span className="font-mono text-[8px] font-medium uppercase tracking-[0.22em] text-white/25">
              Strategy · Design · Technology
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}