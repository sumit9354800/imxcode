import { ArrowUpRight } from "lucide-react";
import { workImpactItems } from "@/data/work-impact";

export default function WorkImpactSection() {
  return (
    <section
      id="work-impact"
      className="relative overflow-hidden bg-white text-black"
    >
      {/* Ambient olive glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#737A1A]/10 blur-[150px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          {/* Label */}
          <div className="flex items-start gap-4">
            <span className="mt-2 h-px w-10 shrink-0 bg-[#737A1A]" />

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#737A1A] sm:text-xs">
                Work in numbers
              </p>

              <p className="mt-5 max-w-xs text-sm leading-6 text-black/55">
                The work is visual. The impact goes deeper.
              </p>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h2 className="max-w-6xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              Built to perform.
              <span className="block text-[#737A1A]">
                Designed to matter.
              </span>
            </h2>
          </div>
        </div>

        {/* Impact Grid */}
        <div className="mt-20 border-t border-black/10 lg:mt-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {workImpactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className={[
                    "group relative border-b border-black/10 py-9",
                    "sm:px-6 lg:border-b-0 lg:border-r lg:px-8 lg:py-10",
                    index === 0 ? "sm:pl-0" : "",
                    index === 1 ? "sm:border-r-0 lg:border-r" : "",
                    index === 2 ? "lg:border-r" : "",
                    index === workImpactItems.length - 1
                      ? "lg:border-r-0 lg:pr-0"
                      : "",
                  ].join(" ")}
                >
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#737A1A]">
                      {item.label}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-all duration-500 group-hover:border-[#737A1A] group-hover:bg-[#737A1A]">
                      <Icon
                        size={17}
                        strokeWidth={1.5}
                        className="transition-colors duration-500 group-hover:text-white"
                      />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="mt-14">
                    <p className="text-[clamp(3.5rem,6vw,6rem)] font-semibold leading-none tracking-[-0.08em] transition-colors duration-300 group-hover:text-[#737A1A]">
                      {item.value}
                    </p>

                    <p className="mt-5 max-w-xs text-sm leading-6 text-black/55">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover line */}
                  <div className="mt-8 h-px w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col gap-8 border-t border-black/10 pt-8 lg:mt-24 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#737A1A]">
              Beyond the interface
            </p>

            <p className="mt-4 max-w-3xl text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl lg:text-4xl">
              Every pixel has a purpose.
              <span className="text-[#737A1A]">
                {" "}
                Every system has a reason.
              </span>
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium"
          >
            Work with IMX

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:border-[#737A1A] group-hover:bg-[#737A1A] group-hover:text-white">
              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}