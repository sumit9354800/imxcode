"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { websiteMaintenanceTypes } from "@/data/services/website-maintenance";

export default function WebsiteMaintenanceTypes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeType = websiteMaintenanceTypes[activeIndex];

  return (
    <section
      id="website-maintenance-types"
      className="bg-white px-6 py-20 text-black sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#737A1A]">
              What we maintain
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Support that keeps
              <span className="block text-[#737A1A]">
                your website moving.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-black/50 lg:ml-auto">
            Websites need ongoing attention. We provide the technical support,
            improvements and care required to keep your digital presence
            reliable as your business grows.
          </p>
        </div>

        {/* Selector */}
        <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-black/10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Types */}
          <div className="border-b border-black/10 lg:border-b-0 lg:border-r">
            {websiteMaintenanceTypes.map((type, index) => {
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
                Service {activeType.number}
              </span>

              <h3 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {activeType.title}
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-black/50 sm:text-base">
                {activeType.description}
              </p>
            </div>

            {/* System visual */}
            <div className="mt-12">
              <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-black/30">
                <span>Monitor</span>
                <span>Maintain</span>
                <span>Improve</span>
              </div>

              <div className="relative h-16 overflow-hidden rounded-xl border border-black/10 bg-white">
                <div className="absolute left-0 top-0 h-full w-[34%] bg-black" />

                <div className="absolute left-[34%] top-0 h-full w-[30%] bg-[#737A1A]" />

                <div className="absolute left-[64%] top-0 h-full w-[36%] bg-black/10" />

                <div className="absolute left-[34%] top-0 h-full w-px bg-white/60" />

                <div className="absolute left-[64%] top-0 h-full w-px bg-white/60" />

                <div className="absolute left-[78%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-black/20" />
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-black/30">
                Continuous care
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#737A1A]">
                IMX Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}