import { ArrowUpRight } from "lucide-react";
import { workImpactItems } from "@/data/work-impact";

export default function WorkImpactSection() {
  return (
    <section
      id="work-impact"
      className="relative overflow-hidden bg-white text-black"
    >
      {/* =====================================================
          EDITORIAL BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Huge background word */}

        <div className="absolute -bottom-8 left-[-2%] select-none text-[18vw] font-semibold leading-none tracking-[-0.1em] text-black/[0.025]">
          IMPACT
        </div>

        {/* Olive glow */}

        <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#737A1A]/[0.07] blur-[150px]" />

        {/* Technical vertical line */}

        <div className="absolute right-[12%] top-0 hidden h-full w-px bg-black/[0.035] lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 xl:px-16">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          {/* Label */}

          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-2">
              <span className="h-8 w-px bg-[#737A1A]" />

              <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[10px]">
                Work in numbers
              </p>

              <p className="mt-5 max-w-xs text-sm leading-6 text-black/45">
                The work is visual.
                <br />
                The impact goes deeper.
              </p>
            </div>
          </div>

          {/* Heading */}

          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,5.5vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              Built to perform.
              <span className="block text-[#737A1A]">
                Designed to matter.
              </span>
            </h2>
          </div>
        </div>

        {/* =====================================================
            IMPACT METRICS
        ====================================================== */}

        <div className="mt-16 border-y border-black/10 lg:mt-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {workImpactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className={`
                    group
                    relative
                    min-w-0
                    px-0
                    py-8
                    sm:px-7
                    sm:py-10
                    lg:px-8
                    lg:py-12
                    xl:px-10
                    ${
                      index !== 0
                        ? "border-t border-black/10 sm:border-t-0 sm:border-l"
                        : ""
                    }
                    ${
                      index === 2
                        ? "lg:border-l"
                        : ""
                    }
                  `}
                >
                  {/* Index */}

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] tracking-[0.2em] text-black/30">
                      0{index + 1}
                    </span>

                    <Icon
                      size={15}
                      strokeWidth={1.4}
                      className="text-black/25 transition-all duration-500 group-hover:rotate-45 group-hover:text-[#737A1A]"
                    />
                  </div>

                  {/* Label */}

                  <p className="mt-10 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#737A1A]">
                    {item.label}
                  </p>

                  {/* Big Number */}

                  <p className="mt-3 whitespace-nowrap text-[clamp(3.2rem,5vw,5.8rem)] font-semibold leading-none tracking-[-0.09em] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#737A1A]">
                    {item.value}
                  </p>

                  {/* Description */}

                  <p className="mt-5 max-w-xs text-xs leading-6 text-black/45 sm:text-sm">
                    {item.description}
                  </p>

                  {/* Bottom indicator */}

                  <div className="mt-8 flex items-center gap-2">
                    <span className="h-px w-5 bg-black/20 transition-all duration-500 group-hover:w-10 group-hover:bg-[#737A1A]" />

                    <span className="h-1 w-1 rounded-full bg-black/20 group-hover:bg-[#737A1A]" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM EDITORIAL STATEMENT
        ====================================================== */}

        <div className="mt-12 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#737A1A]">
              Beyond the interface
            </p>

            <p className="mt-4 max-w-3xl text-2xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-3xl lg:text-4xl">
              Every pixel has a purpose.
              <span className="text-black/35">
                {" "}
                Every system has a reason.
              </span>
            </p>
          </div>

          {/* CTA */}

          <a
            href="/contact"
            className="group flex w-fit items-center gap-4 border-b border-black/20 pb-2 text-xs font-medium transition-colors duration-300 hover:border-[#737A1A] hover:text-[#737A1A]"
          >
            Work with IMX

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-[#737A1A]">
              <ArrowUpRight
                size={13}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </div>

        {/* =====================================================
            TECHNICAL FOOTER
        ====================================================== */}

        <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-4">
          <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-black/25">
            IMX / Performance System
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-black/25">
            Data · Design · Impact
          </span>
        </div>
      </div>
    </section>
  );
}