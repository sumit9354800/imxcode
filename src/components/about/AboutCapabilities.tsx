"use client";

import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { aboutCapabilities } from "@/data/about-capabilities";

export default function AboutCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = aboutCapabilities.categories[activeIndex];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#737A1A]/10 blur-[170px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">
        {/* Header */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#737A1A]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[10px]">
                {aboutCapabilities.eyebrow}
              </p>
            </div>

            <h2 className="mt-7 text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.085em]">
              Everything needed
              <span className="block text-[#737A1A]">
                to build what&apos;s next.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/40 sm:text-base sm:leading-8 lg:pb-1">
            {aboutCapabilities.description}
          </p>
        </div>

        {/* Capability architecture */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Navigation */}
          <div className="border-t border-white/10">
            {aboutCapabilities.categories.map((category, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={category.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex w-full items-center justify-between border-b border-white/10 py-6 text-left transition-all duration-300 sm:py-7 ${
                    isActive ? "text-white" : "text-white/35"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 h-px bg-[#737A1A] transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />

                  <div className="flex items-center gap-5">
                    <span className="text-[9px] font-medium tracking-[0.2em] text-[#737A1A]">
                      {category.number}
                    </span>

                    <span className="text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
                      {category.title}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-[#737A1A]"
                        : "text-white/20 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#737A1A]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active capability */}
          <div className="relative min-h-[430px] overflow-hidden border border-white/10 bg-white/[0.025] p-7 sm:p-10 lg:p-12">
            {/* Giant number */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-10 select-none text-[14rem] font-black leading-none tracking-[-0.12em] text-white/[0.025] sm:text-[18rem]"
            >
              {active.number}
            </span>

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center border border-[#737A1A]/40 bg-[#737A1A]/5">
                    <Plus
                      size={17}
                      className="text-[#737A1A]"
                    />
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                    {active.shortTitle}
                  </span>
                </div>

                <h3 className="mt-12 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                  {active.title}
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                  {active.description}
                </p>
              </div>

              {/* Services */}
              <div className="mt-12">
                <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/20">
                  What we do
                </p>

                <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {active.services.map((service) => (
                    <div
                      key={service}
                      className="group/service flex items-center gap-3 border-b border-white/10 pb-3"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#737A1A]" />

                      <span className="text-xs text-white/55 transition-colors duration-300 group-hover/service:text-white">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
                  IMX Capability
                </span>

                <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Explore capability
                  <ArrowUpRight
                    size={13}
                    className="text-[#737A1A]"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-white/30 sm:text-base">
            One team. Multiple disciplines. A connected way of building
            digital experiences.
          </p>

          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
            IMX / 05
          </span>
        </div>
      </div>
    </section>
  );
}