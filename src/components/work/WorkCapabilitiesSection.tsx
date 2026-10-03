import { workCapabilities } from "@/data/work-capabilities";

export default function WorkCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-40 top-[15%] h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.035] blur-[120px]" />

        <div className="absolute -right-40 bottom-[5%] h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.04] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-12">
          <div className="flex items-start gap-3">
            <span className="mt-2 h-px w-8 shrink-0 bg-[#737A1A]" />

            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-black/45 sm:text-[10px]">
              What we bring
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,5vw,5.8rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              Built across
              <span className="block text-[#737A1A]">
                disciplines.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/45 sm:text-base">
              Technology, design, creative and growth working together to turn
              ideas into digital experiences that move businesses forward.
            </p>
          </div>
        </div>

        {/* =====================================================
            CAPABILITIES
            2 COLUMNS
        ====================================================== */}

        <div className="mt-14 border-t border-black/10 pt-5 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {workCapabilities.map((capability) => (
              <article
                key={capability.number}
                className="
                  group
                  relative
                  min-w-0
                  overflow-hidden
                  border
                  border-black/10
                  bg-white/70
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#737A1A]/40
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                  sm:p-7
                  lg:p-8
                "
              >
                {/* Top olive accent */}

                <div className="absolute right-0 top-0 h-px w-16 bg-[#737A1A]/60 transition-all duration-500 group-hover:w-28" />

                {/* =================================================
                    TOP
                ================================================== */}

                <div className="flex items-center justify-between gap-5">
                  <span className="font-mono text-[9px] font-medium tracking-[0.22em] text-[#737A1A]">
                    {capability.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/10
                      text-sm
                      text-black/35
                      transition-all
                      duration-300
                      group-hover:border-[#737A1A]
                      group-hover:bg-[#737A1A]
                      group-hover:text-white
                    "
                  >
                    ↗
                  </span>
                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <h3 className="mt-10 text-2xl font-medium leading-none tracking-[-0.055em] transition-colors duration-300 group-hover:text-[#737A1A] sm:text-3xl lg:text-4xl">
                  {capability.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p className="mt-4 max-w-xl text-sm leading-7 text-black/45 sm:text-[15px]">
                  {capability.description}
                </p>

                {/* =================================================
                    DIVIDER
                ================================================== */}

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#737A1A]/60 transition-all duration-300 group-hover:w-12" />

                  <span className="h-px flex-1 bg-black/10" />
                </div>

                {/* =================================================
                    ITEMS
                ================================================== */}

                <div className="mt-6">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {capability.items.map((item) => (
                      <li
                        key={item}
                        className="
                          flex
                          min-w-0
                          items-center
                          gap-3
                          text-xs
                          text-black/55
                        "
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-[#737A1A]" />

                        <span className="truncate">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* =================================================
                    BOTTOM META
                ================================================== */}

                <div className="mt-7 flex items-center justify-between border-t border-black/10 pt-4">
                  <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-black/30">
                    Capability
                  </span>

                  <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-black/30">
                    IMX / {capability.number}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-black/40 sm:text-base">
            Different capabilities. One connected team. One outcome-focused
            approach.
          </p>

          <span className="text-[8px] font-medium uppercase tracking-[0.24em] text-black/30 sm:text-[9px]">
            Technology · Design · Creative · Growth
          </span>
        </div>
      </div>
    </section>
  );
}