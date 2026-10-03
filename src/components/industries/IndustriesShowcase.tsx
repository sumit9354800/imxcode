"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Sparkles,
  Rocket,
} from "lucide-react";

import { industriesShowcase } from "@/data/industries-showcase";

const icons = {
  education: GraduationCap,
  ecommerce: ShoppingBag,
  startups: Rocket,
  business: BriefcaseBusiness,
  "real-estate": Building2,
  healthcare: HeartPulse,
  "professional-services": Sparkles,
};

export default function IndustriesShowcase() {
  const [activeId, setActiveId] = useState(industriesShowcase[0].id);

  const activeIndustry =
    industriesShowcase.find((industry) => industry.id === activeId) ??
    industriesShowcase[0];

  const ActiveIcon = icons[activeIndustry.id as keyof typeof icons];

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white text-black"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Olive atmosphere */}

        <div className="absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-[#737A1A]/[0.07] blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#737A1A]/[0.05] blur-[150px]" />

        {/* Technical grid */}

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.45) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.45) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Giant background typography */}

        <div className="absolute -bottom-12 -left-4 select-none text-[25vw] font-semibold leading-none tracking-[-0.12em] text-black/[0.025]">
          03
        </div>

        {/* Vertical technical line */}

        <div className="absolute bottom-0 left-[7%] top-0 hidden w-px bg-black/[0.035] lg:block" />

        <div className="absolute bottom-0 right-[8%] top-0 hidden w-px bg-black/[0.035] lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 xl:px-16">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">
          {/* Eyebrow */}

          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-2">
              <span className="h-9 w-px bg-[#737A1A]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[10px]">
                Industries
              </p>

              <p className="mt-4 max-w-[220px] text-xs leading-6 text-black/40">
                Digital systems shaped around the way your industry operates.
              </p>
            </div>
          </div>

          {/* Heading */}

          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,5.8vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              Different industries.
              <span className="block text-[#737A1A]">
                Different digital needs.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-black/50 sm:text-base sm:leading-8">
              We adapt technology, design and creative execution around the
              specific challenges of the business we are building for.
            </p>
          </div>
        </div>

        {/* =====================================================
            INDUSTRY SYSTEM
        ====================================================== */}

        <div className="mt-14 lg:mt-20">
          <div className="overflow-hidden border-y border-black/10">
            <div className="grid lg:grid-cols-[280px_1fr]">
              {/* =================================================
                  INDUSTRY INDEX
              ================================================== */}

              <div className="border-b border-black/10 lg:border-b-0 lg:border-r">
                {/* Index header */}

                <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 sm:px-6">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-black/30">
                    Select industry
                  </span>

                  <span className="font-mono text-[8px] text-black/25">
                    {String(industriesShowcase.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Industry list */}

                <div className="flex overflow-x-auto lg:block">
                  {industriesShowcase.map((industry, index) => {
                    const isActive = industry.id === activeId;

                    const IndustryIcon =
                      icons[industry.id as keyof typeof icons];

                    return (
                      <button
                        key={industry.id}
                        type="button"
                        onClick={() => setActiveId(industry.id)}
                        className={`group relative flex min-w-[190px] flex-1 items-center gap-4 border-r border-black/10 px-5 py-5 text-left transition-all duration-300 last:border-r-0 sm:px-6 lg:min-w-0 lg:border-r-0 lg:border-b lg:last:border-b-0 ${
                          isActive
                            ? "bg-black text-white"
                            : "hover:bg-black/[0.025]"
                        }`}
                      >
                        {/* Active indicator */}

                        <span
                          className={`absolute bottom-0 left-0 top-0 w-[2px] transition-all duration-300 ${
                            isActive
                              ? "bg-[#737A1A]"
                              : "bg-transparent group-hover:bg-black/10"
                          }`}
                        />

                        {/* Number */}

                        <span
                          className={`font-mono text-[8px] tracking-[0.18em] ${
                            isActive ? "text-[#737A1A]" : "text-black/25"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Icon */}

                        <IndustryIcon
                          size={15}
                          strokeWidth={1.4}
                          className={
                            isActive
                              ? "text-[#737A1A]"
                              : "text-black/25 transition-colors group-hover:text-black/60"
                          }
                        />

                        {/* Title */}

                        <span
                          className={`whitespace-nowrap text-xs font-medium ${
                            isActive ? "text-white" : "text-black/60"
                          }`}
                        >
                          {industry.shortTitle}
                        </span>

                        {/* Arrow */}

                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.4}
                          className={`ml-auto transition-all duration-300 ${
                            isActive
                              ? "text-[#737A1A]"
                              : "text-black/15 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black/50"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* =================================================
                  ACTIVE INDUSTRY
              ================================================== */}

              <div className="relative min-h-[620px] overflow-hidden bg-black text-white sm:min-h-[650px] lg:min-h-[680px]">
                {/* Grid */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.045]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
                    `,
                    backgroundSize: "70px 70px",
                  }}
                />

                {/* Olive glow */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#737A1A]/15 blur-[130px]"
                />

                {/* Giant number */}

                <div
                  key={activeIndustry.id}
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-5 -top-10 select-none text-[18rem] font-black leading-none tracking-[-0.12em] text-white/[0.035] sm:text-[24rem]"
                >
                  {activeIndustry.number}
                </div>

                {/* Decorative cross */}

                <div
                  aria-hidden="true"
                  className="absolute right-8 top-8 hidden h-20 w-20 sm:block"
                >
                  <span className="absolute left-1/2 top-0 h-full w-px bg-[#737A1A]/20" />
                  <span className="absolute left-0 top-1/2 h-px w-full bg-[#737A1A]/20" />

                  <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#737A1A]" />
                </div>

                <div className="relative flex h-full flex-col p-7 sm:p-10 lg:p-14">
                  {/* =================================================
                      ACTIVE HEADER
                  ================================================== */}

                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#737A1A]" />

                        <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#737A1A]">
                          {activeIndustry.number} / Industry
                        </span>
                      </div>

                      <h3
                        key={activeIndustry.id}
                        className="mt-6 max-w-3xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]"
                      >
                        {activeIndustry.title}
                      </h3>
                    </div>

                    {/* Icon module */}

                    <div className="relative hidden shrink-0 sm:block">
                      <div className="flex h-20 w-20 items-center justify-center border border-[#737A1A]/30 bg-[#737A1A]/10">
                        <ActiveIcon
                          key={activeIndustry.id}
                          className="h-8 w-8 text-[#737A1A]"
                          strokeWidth={1.2}
                        />
                      </div>

                      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#737A1A]" />
                    </div>
                  </div>

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <div className="mt-12 max-w-2xl lg:mt-16">
                    <p className="text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                      {activeIndustry.description}
                    </p>
                  </div>

                  {/* =================================================
                      DATA ROWS
                  ================================================== */}

                  <div className="mt-auto pt-14">
                    <div className="grid border-t border-white/10 sm:grid-cols-2">
                      {/* Challenges */}

                      <div className="border-b border-white/10 py-7 sm:border-b-0 sm:border-r sm:pr-10">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-white/30">
                            Common challenges
                          </span>

                          <span className="font-mono text-[8px] text-white/20">
                            01
                          </span>
                        </div>

                        <div className="mt-6 space-y-0">
                          {activeIndustry.challenges.map((challenge, index) => (
                            <div
                              key={challenge}
                              className="group flex items-center gap-4 border-b border-white/[0.07] py-3 last:border-b-0"
                            >
                              <span className="font-mono text-[8px] text-[#737A1A]">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <span className="text-xs text-white/55 transition-colors duration-300 group-hover:text-white/85 sm:text-sm">
                                {challenge}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Solutions */}

                      <div className="py-7 sm:pl-10">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-white/30">
                            What we build
                          </span>

                          <span className="font-mono text-[8px] text-white/20">
                            02
                          </span>
                        </div>

                        <div className="mt-6 space-y-0">
                          {activeIndustry.solutions.map((solution, index) => (
                            <div
                              key={solution}
                              className="group flex items-center gap-4 border-b border-white/[0.07] py-3 last:border-b-0"
                            >
                              <span className="font-mono text-[8px] text-[#737A1A]">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <span className="text-xs text-white/55 transition-colors duration-300 group-hover:text-white/85 sm:text-sm">
                                {solution}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom signal */}

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#737A1A] via-[#737A1A]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mt-10 grid gap-6 border-t border-black/10 pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#737A1A]" />

            <p className="max-w-3xl text-xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-2xl lg:text-3xl">
              Your industry shapes the problem.
              <span className="text-black/30">
                {" "}
                Our job is to build the right digital solution.
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3 lg:pb-1">
            <span className="h-px w-8 bg-[#737A1A]" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/30">
              Technology · Design · Creative
            </span>
          </div>
        </div>

        {/* =====================================================
            FOOTER META
        ====================================================== */}

        <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-4">
          <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-black/25">
            IMX / Industry System
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-black/25">
            Built around context
          </span>
        </div>
      </div>
    </section>
  );
}
