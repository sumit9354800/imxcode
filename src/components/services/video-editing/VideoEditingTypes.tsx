"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { videoEditingTypes } from "@/data/services/video-editing";

export default function VideoEditingTypes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeType = videoEditingTypes[activeIndex];

  return (
    <section
      id="video-editing-types"
      className="bg-white px-6 py-20 text-black sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#737A1A]">
              What we edit
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Every format has a
              <span className="block text-[#737A1A]">
                different story to tell.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-black/50 lg:ml-auto">
            From short-form social content to long-form brand films, we shape
            the edit around the audience, message and platform.
          </p>
        </div>

        {/* Selector */}
        <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-black/10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Types */}
          <div className="border-b border-black/10 lg:border-b-0 lg:border-r">
            {videoEditingTypes.map((type, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={type.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex w-full items-center justify-between border-b border-black/10 px-6 py-5 text-left transition-colors last:border-b-0 sm:px-7 ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-black/[0.035]"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`text-xs ${
                        isActive ? "text-[#737A1A]" : "text-black/25"
                      }`}
                    >
                      {type.number}
                    </span>

                    <span className="text-sm font-medium sm:text-base">
                      {type.title}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className={`transition-transform ${
                      isActive
                        ? "text-[#737A1A]"
                        : "text-black/20 group-hover:text-black"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active content */}
          <div className="relative flex min-h-[360px] flex-col justify-between bg-[#f6f6f3] p-7 sm:p-10 lg:min-h-[470px] lg:p-14">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#737A1A]">
                Format {activeType.number}
              </span>

              <h3 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {activeType.title}
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-black/50 sm:text-base">
                {activeType.description}
              </p>
            </div>

            {/* Visual timeline */}
            <div className="mt-12">
              <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-black/30">
                <span>Opening</span>
                <span>Story</span>
                <span>Final frame</span>
              </div>

              <div className="relative h-12 overflow-hidden rounded-xl border border-black/10 bg-white">
                <div className="absolute left-0 top-0 h-full w-[31%] bg-black" />
                <div className="absolute left-[31%] top-0 h-full w-[27%] bg-[#737A1A]" />
                <div className="absolute left-[58%] top-0 h-full w-[42%] bg-black/10" />

                <div className="absolute left-[31%] top-0 h-full w-px bg-white/50" />
                <div className="absolute left-[58%] top-0 h-full w-px bg-white/50" />

                <div className="absolute left-[58%] top-1/2 h-6 w-px -translate-y-1/2 bg-black/30" />
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-black/30">
                Story first
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#737A1A]">
                IMX Editing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}