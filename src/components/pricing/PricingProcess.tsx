import { ArrowDownRight } from "lucide-react";

import { pricingProcess } from "@/data/pricing-process";

export default function PricingProcess() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#737A1A]">
              {pricingProcess.eyebrow}
            </span>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              {pricingProcess.title}
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
              {pricingProcess.description}
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="relative mt-16">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[19px] top-10 hidden h-[calc(100%-80px)] w-px bg-black/10 lg:block"
          />

          <div className="grid gap-0 lg:grid-cols-4">
            {pricingProcess.items.map((item, index) => (
              <article
                key={item.number}
                className="group relative border-t border-black/10 py-8 lg:border-t-0 lg:border-l lg:px-7 lg:py-5 first:lg:border-l-0"
              >
                {/* Number */}
                <div className="flex items-center justify-between lg:block">
                  <span className="flex h-10 w-10 items-center justify-center border border-black/10 bg-white text-xs font-semibold text-[#737A1A]">
                    {item.number}
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.18em] text-black/25 lg:mt-6 lg:block">
                    Step {index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#737A1A]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-6 text-black/50">
                  {item.description}
                </p>

                {/* Focus */}
                <div className="mt-8 flex items-center justify-between border-t border-black/[0.07] pt-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/30">
                    {item.focus}
                  </span>

                  <ArrowDownRight
                    className="h-4 w-4 text-black/20 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#737A1A]"
                    strokeWidth={1.5}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-14 border-t border-black/10 pt-8">
          <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl">
            You don't pay for a preset package. You invest in the solution
            your project actually needs.
          </p>
        </div>
      </div>
    </section>
  );
}