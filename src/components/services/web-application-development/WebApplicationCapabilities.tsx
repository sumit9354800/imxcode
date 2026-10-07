"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { webApplicationCapabilities } from "@/data/services/web-application-development";

export default function WebApplicationCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">

        {/* Header */}
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                Application Capabilities
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
              The systems behind the interface matter just as much as the
              experience people see.
            </p>
          </div>

          <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
            Built to handle the complexity behind your digital product.
          </h2>
        </div>

        {/* Capability layout */}
        <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Navigation */}
          <div className="bg-black">
            {webApplicationCapabilities.map((capability, index) => {
              const active = activeIndex === index;

              return (
                <button
                  key={capability.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex w-full items-start gap-5 border-b border-white/10 px-5 py-6 text-left transition-all duration-300 last:border-b-0 sm:px-7 ${
                    active
                      ? "bg-white/[0.06]"
                      : "hover:bg-white/[0.025]"
                  }`}
                >
                  <span
                    className={`pt-1 text-[10px] font-medium tracking-[0.2em] ${
                      active
                        ? "text-[#737A1A]"
                        : "text-white/25"
                    }`}
                  >
                    {capability.number}
                  </span>

                  <span className="flex-1">
                    <span
                      className={`block text-sm font-medium sm:text-base ${
                        active
                          ? "text-white"
                          : "text-white/55 group-hover:text-white"
                      }`}
                    >
                      {capability.title}
                    </span>

                    <span
                      className={`mt-2 block max-w-md text-xs leading-5 transition-all duration-300 ${
                        active
                          ? "text-white/40"
                          : "text-white/20"
                      }`}
                    >
                      {capability.description}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className={`mt-1 shrink-0 transition-all duration-300 ${
                      active
                        ? "text-[#737A1A]"
                        : "text-white/15 group-hover:text-white/40"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active capability */}
          <div className="relative min-h-[420px] bg-[#0b0b0b]">

            {/* Grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.055]"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                }}
              />
            </div>

            <div className="relative flex min-h-[420px] flex-col justify-between p-7 sm:p-10 lg:p-14">

              {/* Top */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-white/25">
                  Technical layer
                </span>

                <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#737A1A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
                  Active
                </span>
              </div>

              {/* Content */}
              <div>
                <div className="mb-8 flex items-center gap-4">
                  <span className="text-[clamp(4rem,8vw,8rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.06]">
                    {webApplicationCapabilities[activeIndex].number}
                  </span>

                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <h3 className="max-w-2xl text-[clamp(2rem,4vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                  {webApplicationCapabilities[activeIndex].title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
                  {webApplicationCapabilities[activeIndex].description}
                </p>
              </div>

              {/* Capability items */}
              <div className="mt-10 grid gap-2 sm:grid-cols-3">
                {webApplicationCapabilities[activeIndex].items.map(
                  (item) => (
                    <div
                      key={item}
                      className="border border-white/10 bg-white/[0.025] px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 bg-[#737A1A]" />

                        <span className="text-xs text-white/60">
                          {item}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>

            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-5 text-white/35 sm:text-sm">
            From architecture and data to interfaces and performance, every
            layer works together as one application.
          </p>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
            Technology · Experience · Reliability
          </span>
        </div>

      </div>
    </section>
  );
}