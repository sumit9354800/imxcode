"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { websiteTypes } from "@/data/services/website-development";

export default function WebsiteDevelopmentTypes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = websiteTypes[activeIndex];

  return (
    <section
      id="website-types"
      className="relative overflow-hidden bg-white text-black"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Olive atmosphere */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[5%] h-[460px] w-[460px] rounded-full bg-[#737A1A]/[0.07] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-[-180px] h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.045] blur-[130px]"
      />

      {/* Technical vertical guides */}

      <div className="pointer-events-none absolute inset-y-0 left-[8%] w-px bg-black/[0.035]" />

      <div className="pointer-events-none absolute inset-y-0 right-[8%] w-px bg-black/[0.035]" />

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr] lg:items-end">
          {/* Eyebrow */}

          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-full w-full animate-ping rounded-full bg-[#737A1A]/25" />

                <span className="relative h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-black/40">
                What We Build
              </span>
            </div>

            <div className="mt-5 hidden items-center gap-3 lg:flex">
              <span className="text-[8px] uppercase tracking-[0.22em] text-black/25">
                Website Systems
              </span>

              <span className="h-px w-8 bg-black/10" />

              <span className="text-[8px] uppercase tracking-[0.22em] text-[#737A1A]">
                {String(websiteTypes.length).padStart(2, "0")} Types
              </span>
            </div>
          </div>

          {/* Heading */}

          <div>
            <h2 className="max-w-[920px] text-[clamp(2.35rem,4.6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
              A website built
              <br />
              around your
              <br />
              <span className="text-[#737A1A]">business.</span>
            </h2>

           <p className="mt-5 max-w-[680px] text-[14px] leading-6 text-black/55 sm:text-base sm:leading-7">
  From business websites to custom digital experiences, we build
  around your audience, goals and content.
</p>
          </div>
        </div>

        {/* =================================================
            WEBSITE TYPE SYSTEM
        ================================================== */}

        <div className="mt-10 border-t border-black/10 lg:mt-12">
          {websiteTypes.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.number}
                className={`group relative border-b border-black/10 transition-all duration-500 ${
                  isActive ? "bg-[#f7f7f3]" : "bg-transparent"
                }`}
              >
                {/* Active olive line */}

                <span
                  className={`absolute left-0 top-0 h-full w-[2px] bg-[#737A1A] transition-transform duration-500 ${
                    isActive ? "scale-y-100" : "scale-y-0"
                  }`}
                />

                {/* =================================================
                    MAIN ROW
                ================================================== */}

                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-expanded={isActive}
                  className="flex w-full items-center gap-4 px-4 py-5 text-left sm:px-6 sm:py-6 lg:grid lg:grid-cols-[70px_minmax(280px,0.65fr)_1fr_auto] lg:items-center lg:gap-8 lg:px-7"
                >
                  {/* Number */}

                  <div className="flex shrink-0 items-center gap-3">
                    <span
                      className={`text-[9px] font-semibold tracking-[0.2em] transition-colors duration-300 ${
                        isActive ? "text-[#737A1A]" : "text-black/25"
                      }`}
                    >
                      {item.number}
                    </span>

                    <span
                      className={`hidden h-px transition-all duration-500 sm:block lg:hidden ${
                        isActive
                          ? "w-7 bg-[#737A1A]"
                          : "w-0 bg-transparent"
                      }`}
                    />
                  </div>

                  {/* Title */}

                  <div className="min-w-0">
                    <h3
                      className={`text-[18px] font-medium tracking-[-0.035em] transition-colors duration-300 sm:text-[21px] ${
                        isActive
                          ? "text-black"
                          : "text-black/65 group-hover:text-black"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Mobile description */}

                    <p
                      className={`mt-1.5 overflow-hidden text-[11px] leading-5 text-black/40 transition-all duration-500 lg:hidden ${
                        isActive
                          ? "max-h-12 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Desktop description */}

                  <p
                    className={`hidden max-w-[500px] text-[12px] leading-5 transition-colors duration-300 lg:block ${
                      isActive ? "text-black/50" : "text-black/30"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Arrow */}

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-300 ${
                      isActive
                        ? "border-[#737A1A] bg-[#737A1A] text-black"
                        : "border-black/10 text-black/25 group-hover:border-black/20 group-hover:text-black"
                    }`}
                  >
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className={`transition-transform duration-300 ${
                        isActive
                          ? "-translate-y-0.5 translate-x-0.5"
                          : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      }`}
                    />
                  </span>
                </button>

                {/* =================================================
                    ACTIVE DETAIL
                ================================================== */}

                <div
                  className={`grid overflow-hidden transition-all duration-500 lg:grid-cols-[70px_minmax(280px,0.65fr)_1fr_auto] lg:gap-8 ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 lg:col-span-4">
                    <div className="px-4 pb-6 sm:px-6 lg:px-7 lg:pb-7">
                      <div className="border-t border-black/[0.08] pt-5 lg:ml-[70px]">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                          {/* Service attributes */}

                          <div className="flex flex-wrap gap-x-5 gap-y-2">
                            {[
                              "Responsive",
                              "SEO-ready",
                              "Scalable",
                            ].map((feature) => (
                              <span
                                key={feature}
                                className="flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.14em] text-black/35"
                              >
                                <span className="h-1 w-1 rounded-full bg-[#737A1A]" />
                                {feature}
                              </span>
                            ))}
                          </div>

                          {/* CTA */}

                          <Link
                            href="/contact"
                            onClick={(event) => event.stopPropagation()}
                            className="group inline-flex w-fit items-center gap-2 border-b border-black/15 pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black transition-colors duration-300 hover:border-[#737A1A] hover:text-[#737A1A]"
                          >
                            Discuss this type

                            <ArrowUpRight
                              size={13}
                              strokeWidth={1.6}
                              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =================================================
            ACTIVE TYPE FOOTER
        ================================================== */}

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Check
              size={14}
              strokeWidth={2}
              className="text-[#737A1A]"
            />

            <span className="text-[9px] uppercase tracking-[0.16em] text-black/35">
              {activeService.title} selected
            </span>
          </div>

          {/* Progress */}

          <div className="flex items-center gap-2">
            {websiteTypes.map((item, index) => (
              <button
                key={item.number}
                type="button"
                aria-label={`Show ${item.title}`}
                onClick={() => setActiveIndex(index)}
                className="group flex h-4 items-center"
              >
                <span
                  className={`h-[2px] transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-[#737A1A]"
                      : "w-3 bg-black/10 group-hover:bg-black/25"
                  }`}
                />
              </button>
            ))}

            <span className="ml-2 text-[8px] font-semibold tracking-[0.15em] text-black/20">
              {String(activeIndex + 1).padStart(2, "0")} /
              {String(websiteTypes.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}