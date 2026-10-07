"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  landingPageTypes,
} from "@/data/services/landing-page-design";

export default function LandingPageTypes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeType = landingPageTypes[activeIndex];

  return (
    <section
      id="landing-page-types"
      className="bg-white px-6 py-20 text-black sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#737A1A]">
              What we design
            </span>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              One page.
              <span className="block text-[#737A1A]">
                One clear objective.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-black/60 lg:ml-auto">
            Different campaigns need different landing experiences. We shape
            the structure, message and interaction around what the page needs
            to achieve.
          </p>
        </div>

        {/* Interactive layout */}
        <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-black/10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Selector */}
          <div className="border-b border-black/10 bg-black p-3 lg:border-b-0 lg:border-r">
            {landingPageTypes.map((type, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={type.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex w-full items-center gap-5 rounded-2xl px-5 py-5 text-left transition ${
                    isActive
                      ? "bg-[#737A1A] text-white"
                      : "text-white/55 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <span
                    className={`text-xs font-medium ${
                      isActive ? "text-white/80" : "text-white/30"
                    }`}
                  >
                    {type.number}
                  </span>

                  <span className="flex-1 text-sm font-medium sm:text-base">
                    {type.title}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className={`transition-transform ${
                      isActive
                        ? "translate-x-0 -translate-y-0"
                        : "opacity-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active content */}
          <div className="relative flex min-h-[360px] flex-col justify-between overflow-hidden bg-[#f7f7f4] p-7 sm:p-10 lg:min-h-[500px] lg:p-14">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#737A1A]/10 blur-3xl"
            />

            <div className="relative">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#737A1A]">
                Selected experience
              </span>

              <div className="mt-8 flex items-start justify-between gap-6">
                <span className="text-6xl font-semibold tracking-[-0.06em] text-black/10 sm:text-8xl">
                  {activeType.number}
                </span>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <h3 className="mt-8 max-w-lg text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                {activeType.title}
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-black/60">
                {activeType.description}
              </p>
            </div>

            {/* Bottom visual */}
            <div className="relative mt-12 border-t border-black/10 pt-6">
              <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.18em] text-black/40">
                <span>Message</span>
                <span>Trust</span>
                <span>Action</span>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded-full bg-black/10" />
                <div className="h-1.5 w-1/3 rounded-full bg-[#737A1A]" />
                <div className="h-1.5 w-1/5 rounded-full bg-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}