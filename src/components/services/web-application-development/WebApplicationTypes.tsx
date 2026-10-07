"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { webApplicationTypes } from "@/data/services/web-application-development";

export default function WebApplicationTypes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeApplication = webApplicationTypes[activeIndex];

  return (
    <section
      id="application-types"
      className="bg-white text-black"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">

        {/* Header */}
        <div className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/40">
                What We Build
              </span>
            </div>
          </div>

          <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
            Digital systems designed around how your business works.
          </h2>
        </div>

        {/* Interactive content */}
        <div className="mt-10 grid lg:grid-cols-[0.7fr_1.3fr]">

          {/* Application list */}
          <div className="border-t border-black/10">
            {webApplicationTypes.map((application, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={application.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex w-full items-center gap-5 border-b border-black/10 px-2 py-5 text-left transition-all duration-300 sm:px-4 ${
                    active
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-black/[0.03]"
                  }`}
                >
                  <span
                    className={`text-[10px] font-medium tracking-[0.2em] ${
                      active
                        ? "text-[#737A1A]"
                        : "text-black/30"
                    }`}
                  >
                    {application.number}
                  </span>

                  <span
                    className={`flex-1 text-sm font-medium sm:text-base ${
                      active
                        ? "text-white"
                        : "text-black/65 group-hover:text-black"
                    }`}
                  >
                    {application.title}
                  </span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.6}
                    className={`transition-all duration-300 ${
                      active
                        ? "translate-x-0 text-[#737A1A]"
                        : "-translate-x-1 text-black/20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active application */}
          <div className="relative min-h-[390px] overflow-hidden bg-black text-white lg:min-h-[500px]">

            {/* Background structure */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                }}
              />
            </div>

            {/* Olive accent */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#737A1A]/30"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-10 right-10 h-2 w-2 rounded-full bg-[#737A1A] shadow-[0_0_25px_6px_rgba(115,122,26,0.25)]"
            />

            <div className="relative flex h-full min-h-[390px] flex-col justify-between p-7 sm:p-10 lg:min-h-[500px] lg:p-14">

              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                  Application / {activeApplication.number}
                </span>

                <span className="h-px w-16 bg-[#737A1A]" />
              </div>

              {/* Main content */}
              <div className="max-w-2xl">
                <h3 className="text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                  {activeApplication.title}
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                  {activeApplication.description}
                </p>
              </div>

              {/* Bottom marker */}
              <div className="flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Custom-built
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] text-[#737A1A]">
                  Built for real workflows
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-5 text-black/45 sm:text-sm">
            From internal systems to customer-facing platforms, we build
            applications around the way people actually work.
          </p>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/30">
            IMX / Web Applications
          </span>
        </div>

      </div>
    </section>
  );
}