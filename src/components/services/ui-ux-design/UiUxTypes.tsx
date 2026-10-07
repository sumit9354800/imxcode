"use client";

import { useState } from "react";
import {
  uiUxTypes,
  type UiUxType,
} from "@/data/services/ui-ux-design";
import {
  Layout,
  Smartphone,
  PanelsTopLeft,
  Layers3,
  MousePointer2,
  Sparkles,
} from "lucide-react";

const typeIcons = [
  Layout,
  Sparkles,
  Smartphone,
  PanelsTopLeft,
  Layers3,
  MousePointer2,
];

export default function UiUxTypes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeType: UiUxType = uiUxTypes[activeIndex];
  const ActiveIcon = typeIcons[activeIndex];

  return (
    <section
      id="ui-ux-types"
      className="relative overflow-hidden bg-white text-black"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45">
                What We Design
              </span>
            </div>

            <p className="mt-7 max-w-sm text-sm leading-6 text-black/50">
              From a focused interface to an entire product experience, we
              design around the people who will actually use it.
            </p>
          </div>

          <h2 className="max-w-5xl text-[clamp(2.5rem,5vw,5.4rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
            Every interface has
            <br />
            <span className="text-[#737A1A]">a job to do.</span>
          </h2>
        </div>

        {/* Main */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Selector */}
          <div className="border-t border-black/10">
            {uiUxTypes.map((type, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={type.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group flex w-full items-center gap-5 border-b border-black/10 py-6 text-left"
                >
                  <span
                    className={`text-[10px] font-medium tracking-[0.18em] transition-colors ${
                      active ? "text-[#737A1A]" : "text-black/25"
                    }`}
                  >
                    {type.number}
                  </span>

                  <span
                    className={`flex-1 text-lg font-medium tracking-[-0.025em] transition-all duration-300 sm:text-xl ${
                      active
                        ? "translate-x-2 text-black"
                        : "text-black/45 group-hover:translate-x-1 group-hover:text-black"
                    }`}
                  >
                    {type.title}
                  </span>

                  <span
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      active
                        ? "scale-100 bg-[#737A1A]"
                        : "scale-50 bg-black/15 group-hover:scale-75"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Design preview */}
          <div className="relative min-h-[500px] overflow-hidden bg-black text-white">
            {/* Grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:52px_52px]"
            />

            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#737A1A]/10 blur-[100px]"
            />

            <div className="relative flex min-h-[500px] flex-col justify-between p-7 sm:p-10 lg:p-12">
              {/* Top */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center border border-[#737A1A]/30 bg-[#737A1A]/10 text-[#737A1A]">
                  <ActiveIcon size={21} strokeWidth={1.5} />
                </div>

                <span className="text-6xl font-semibold tracking-[-0.07em] text-white/[0.05] sm:text-8xl">
                  {activeType.number}
                </span>
              </div>

              {/* Content */}
              <div className="mt-12">
                <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#737A1A]">
                  Design / {activeType.number}
                </span>

                <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                  {activeType.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                  {activeType.description}
                </p>
              </div>

              {/* Interface anatomy */}
              <div className="mt-12 border-t border-white/10 pt-6">
                <div className="grid grid-cols-[0.7fr_1.3fr] gap-2">
                  <div className="border border-white/10 p-4">
                    <div className="h-2 w-10 bg-[#737A1A]" />

                    <div className="mt-5 space-y-2">
                      <div className="h-1.5 w-full bg-white/10" />
                      <div className="h-1.5 w-4/5 bg-white/10" />
                      <div className="h-1.5 w-3/5 bg-white/10" />
                    </div>
                  </div>

                  <div className="border border-white/10 p-4">
                    <div className="flex justify-between">
                      <div className="h-2 w-16 bg-white/15" />
                      <MousePointer2
                        size={13}
                        strokeWidth={1.4}
                        className="text-[#737A1A]"
                      />
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-2">
                      <div className="h-12 border border-white/10" />
                      <div className="h-12 border border-[#737A1A]/30 bg-[#737A1A]/5" />
                      <div className="h-12 border border-white/10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                  User · Interface · Interaction
                </span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#737A1A]">
                  IMX Design
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-14 flex justify-end">
          <p className="max-w-2xl border-l-2 border-[#737A1A] pl-5 text-lg font-medium leading-7 tracking-[-0.02em] sm:text-xl sm:leading-8">
            Good design is not decoration around functionality. It is the
            structure that makes functionality understandable.
          </p>
        </div>
      </div>
    </section>
  );
}