"use client";

import { useState } from "react";
import {
  ArrowRight,
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
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#737A1A]">
                Industries
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Different industries.
              <br />
              Different digital needs.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
              We adapt technology, design and creative execution around the
              specific challenges of the business we are building for.
            </p>
          </div>
        </div>

        {/* Showcase */}
        <div className="mt-16 grid overflow-hidden border border-black/10 lg:grid-cols-[300px_1fr]">
          {/* Industry navigation */}
          <div className="border-b border-black/10 bg-[#f7f7f5] lg:border-b-0 lg:border-r">
            {industriesShowcase.map((industry) => {
              const isActive = industry.id === activeId;

              return (
                <button
                  key={industry.id}
                  type="button"
                  onClick={() => setActiveId(industry.id)}
                  className={`group flex w-full items-center justify-between border-b border-black/10 px-5 py-5 text-left transition-all duration-300 last:border-b-0 sm:px-6 ${
                    isActive
                      ? "bg-black text-white"
                      : "text-black hover:bg-black/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-[10px] font-semibold tracking-[0.18em] ${
                        isActive ? "text-[#737A1A]" : "text-black/30"
                      }`}
                    >
                      {industry.number}
                    </span>

                    <span className="text-sm font-medium">
                      {industry.shortTitle}
                    </span>
                  </div>

                  <ArrowRight
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isActive
                        ? "translate-x-1 text-[#737A1A]"
                        : "text-black/20 group-hover:translate-x-1"
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
              );
            })}
          </div>

          {/* Active industry */}
          <div className="relative min-h-[580px] bg-black text-white sm:min-h-[620px]">
            {/* Decorative giant number */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 select-none text-[14rem] font-black leading-none tracking-[-0.08em] text-white/[0.035] sm:text-[20rem]"
            >
              {activeIndustry.number}
            </div>

            {/* Grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            <div className="relative flex h-full flex-col justify-between p-7 sm:p-10 lg:p-14">
              {/* Top */}
              <div className="flex items-start justify-between gap-8">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#737A1A]">
                    {activeIndustry.number} / Industry
                  </span>

                  <h3 className="mt-5 max-w-2xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                    {activeIndustry.title}
                  </h3>
                </div>

                <div className="hidden h-16 w-16 shrink-0 items-center justify-center border border-[#737A1A]/30 bg-[#737A1A]/10 sm:flex">
                  <ActiveIcon
                    className="h-7 w-7 text-[#737A1A]"
                    strokeWidth={1.3}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mt-12 max-w-2xl">
                <p className="text-base leading-7 text-white/55">
                  {activeIndustry.description}
                </p>
              </div>

              {/* Bottom information */}
              <div className="mt-14 grid gap-10 border-t border-white/10 pt-8 sm:grid-cols-2">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    Common challenges
                  </span>

                  <ul className="mt-5 space-y-3">
                    {activeIndustry.challenges.map((challenge) => (
                      <li
                        key={challenge}
                        className="flex items-center gap-3 text-sm text-white/70"
                      >
                        <span className="h-1.5 w-1.5 bg-[#737A1A]" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                    What we build
                  </span>

                  <ul className="mt-5 space-y-3">
                    {activeIndustry.solutions.map((solution) => (
                      <li
                        key={solution}
                        className="flex items-center gap-3 text-sm text-white/70"
                      >
                        <span className="h-1.5 w-1.5 bg-[#737A1A]" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-lg font-medium leading-snug tracking-[-0.02em] sm:text-xl">
            Your industry shapes the problem. Our job is to build the right
            digital solution.
          </p>

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
            Technology · Design · Creative
          </span>
        </div>
      </div>
    </section>
  );
}