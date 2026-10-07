"use client";

import { useState } from "react";
import {
  adminPanelCapabilities,
  type AdminPanelCapability,
} from "@/data/services/custom-admin-panels";
import { ArrowUpRight } from "lucide-react";

export default function AdminPanelCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCapability: AdminPanelCapability =
    adminPanelCapabilities[activeIndex];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                Capabilities
              </span>
            </div>

            <p className="mt-7 max-w-sm text-sm leading-6 text-white/40">
              From the dashboard interface to permissions and connected data,
              every layer is designed to make your internal operations easier
              to manage.
            </p>
          </div>

          <h2 className="max-w-5xl text-[clamp(2.5rem,5vw,5.4rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
            Everything your team needs
            <br />
            <span className="text-white/30">behind the scenes.</span>
          </h2>
        </div>

        {/* Capability matrix */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
          {/* Left matrix */}
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {adminPanelCapabilities.map((capability, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={capability.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative min-h-[190px] bg-black p-6 text-left transition-colors duration-300 sm:p-7 ${
                    active ? "bg-[#0d0d0d]" : "hover:bg-[#090909]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-[10px] font-medium tracking-[0.2em] ${
                        active ? "text-[#737A1A]" : "text-white/25"
                      }`}
                    >
                      {capability.number}
                    </span>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.5}
                      className={`transition-all duration-300 ${
                        active
                          ? "text-[#737A1A]"
                          : "translate-y-1 text-white/15 opacity-0 group-hover:translate-x-0.5 group-hover:translate-y-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>

                  <h3
                    className={`mt-10 text-xl font-medium tracking-[-0.025em] transition-colors sm:text-2xl ${
                      active
                        ? "text-white"
                        : "text-white/45 group-hover:text-white/80"
                    }`}
                  >
                    {capability.title}
                  </h3>

                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#737A1A] transition-all duration-500 ${
                      active ? "w-full" : "w-0 group-hover:w-1/3"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active detail */}
          <div className="relative overflow-hidden border border-white/10 bg-[#080808]">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#737A1A]/10 blur-[110px]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:52px_52px]"
            />

            <div className="relative flex min-h-[400px] flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#737A1A]">
                    System Layer / {activeCapability.number}
                  </span>

                  <span className="text-5xl font-semibold tracking-[-0.06em] text-white/[0.05] sm:text-7xl">
                    {activeCapability.number}
                  </span>
                </div>

                <h3 className="mt-8 max-w-xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                  {activeCapability.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                  {activeCapability.description}
                </p>
              </div>

              {/* Included capabilities */}
              <div className="mt-12">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.23em] text-white/25">
                    Included
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.23em] text-white/20">
                    {activeCapability.items.length} Areas
                  </span>
                </div>

                <div className="border-t border-white/10">
                  {activeCapability.items.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-white/10 py-4"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[9px] tracking-[0.15em] text-[#737A1A]">
                          0{index + 1}
                        </span>

                        <span className="text-sm font-medium text-white/70">
                          {item}
                        </span>
                      </div>

                      <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 border-t border-white/10 pt-5">
                <span className="text-[9px] uppercase tracking-[0.22em] text-white/25">
                  IMX / Custom Systems
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-14 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
          <p className="max-w-2xl text-xl font-medium leading-8 tracking-[-0.025em] text-white/70 sm:text-2xl">
            The goal is simple: give your team a control center that feels
            obvious to use and powerful enough to grow with the business.
          </p>

          <span className="text-[9px] uppercase tracking-[0.24em] text-white/25">
            Control · Data · Workflow
          </span>
        </div>
      </div>
    </section>
  );
}