import {
  ArrowUpRight,
  Check,
} from "lucide-react";

import { industrySolutions } from "@/data/industry-solutions";

export default function IndustrySolutions() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#737A1A]">
                Solutions Across Industries
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              One digital capability.
              <br />
              Many ways to apply it.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
              Our capabilities are flexible by design. The same technology,
              design and creative expertise can be shaped around very
              different industries and business models.
            </p>
          </div>
        </div>

        {/* Solutions */}
        <div className="mt-16 border-t border-white/10">
          {industrySolutions.map((solution) => (
            <article
              key={solution.number}
              className="group grid gap-8 border-b border-white/10 py-10 lg:grid-cols-[90px_1fr_1fr_1fr] lg:items-start lg:gap-10"
            >
              {/* Number */}
              <div className="flex items-center justify-between lg:block">
                <span className="text-sm font-medium tracking-[0.15em] text-[#737A1A]">
                  {solution.number}
                </span>

                <ArrowUpRight
                  className="h-5 w-5 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#737A1A] lg:mt-12"
                  strokeWidth={1.4}
                />
              </div>

              {/* Title */}
              <div>
                <h3 className="max-w-md text-2xl font-medium tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#737A1A] sm:text-3xl">
                  {solution.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/45">
                  {solution.description}
                </p>
              </div>

              {/* Services */}
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
                  What we provide
                </span>

                <div className="mt-5 space-y-3">
                  {solution.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3 text-sm text-white/65"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center border border-[#737A1A]/50">
                        <Check
                          className="h-2.5 w-2.5 text-[#737A1A]"
                          strokeWidth={2}
                        />
                      </span>

                      {service}
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
                  Works across
                </span>

                <div className="mt-5 flex flex-wrap gap-2">
                  {solution.industries.map((industry) => (
                    <span
                      key={industry}
                      className="border border-white/10 px-3 py-2 text-xs text-white/45 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/65"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl">
            Different industries. Different challenges. One connected
            digital capability.
          </p>

          <a
            href="/services"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#737A1A] pb-2 text-sm font-medium"
          >
            Explore our services

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </section>
  );
}