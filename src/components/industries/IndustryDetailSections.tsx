"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";

import { industryDetails } from "@/data/industry-details";

export default function IndustryDetailSections() {
  const [activeId, setActiveId] = useState(industryDetails[0].id);

  useEffect(() => {
    const handleIndustryChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ id?: string }>;

      if (
        customEvent.detail?.id &&
        industryDetails.some(
          (industry) => industry.id === customEvent.detail.id,
        )
      ) {
        setActiveId(customEvent.detail.id);
      }
    };

    window.addEventListener("imx-industry-change", handleIndustryChange);

    return () => {
      window.removeEventListener("imx-industry-change", handleIndustryChange);
    };
  }, []);

  const activeIndustry =
    industryDetails.find((industry) => industry.id === activeId) ??
    industryDetails[0];

  const activeIndex = industryDetails.findIndex(
    (industry) => industry.id === activeIndustry.id,
  );

  return (
    <section
      id="industry-details"
      className="relative overflow-hidden bg-[#f4f4f1] text-black"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Olive atmosphere */}

        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#737A1A]/[0.06] blur-[150px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#737A1A]/[0.05] blur-[150px]" />

        {/* Technical grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Giant background word */}

        <div className="absolute -bottom-10 -left-3 select-none text-[24vw] font-semibold leading-none tracking-[-0.12em] text-black/[0.025]">
          DETAIL
        </div>

        <div className="absolute bottom-0 left-[7%] top-0 hidden w-px bg-black/[0.035] lg:block" />

        <div className="absolute bottom-0 right-[8%] top-0 hidden w-px bg-black/[0.035] lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 xl:px-16">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-2">
              <span className="h-9 w-px bg-[#737A1A]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[10px]">
                Industry Detail
              </p>

              <p className="mt-4 max-w-[230px] text-xs leading-6 text-black/40">
                Explore the specific problems, solutions and opportunities
                within each industry.
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(2.8rem,5.8vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              Solutions shaped around
              <span className="block text-[#737A1A]">real business needs.</span>
            </h2>
          </div>
        </div>

        {/* =====================================================
            INDUSTRY TAB RAIL
        ====================================================== */}

        <div className="mt-14 border-y border-black/10">
          <div className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {industryDetails.map((industry, index) => {
              const active = industry.id === activeId;

              return (
                <button
                  key={industry.id}
                  type="button"
                  onClick={() => setActiveId(industry.id)}
                  className={`group relative flex min-w-[150px] shrink-0 items-center gap-3 border-r border-black/10 px-5 py-5 text-left transition-all duration-300 last:border-r-0 sm:min-w-[170px] sm:px-6 ${
                    active
                      ? "bg-black text-white"
                      : "bg-transparent text-black hover:bg-white"
                  }`}
                >
                  {/* Active line */}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                      active
                        ? "w-full bg-[#737A1A]"
                        : "w-0 bg-[#737A1A] group-hover:w-full"
                    }`}
                  />

                  <span
                    className={`font-mono text-[8px] tracking-[0.2em] ${
                      active ? "text-[#737A1A]" : "text-black/25"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${
                      active ? "text-white" : "text-black/50"
                    }`}
                  >
                    {industry.tabLabel}
                  </span>

                  <ChevronRight
                    size={13}
                    strokeWidth={1.5}
                    className={`ml-auto transition-all duration-300 ${
                      active
                        ? "translate-x-0 text-[#737A1A]"
                        : "text-black/15 group-hover:translate-x-1 group-hover:text-black/50"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            ACTIVE INDUSTRY INTRO
        ====================================================== */}

        <div
          key={activeIndustry.id}
          className="relative mt-8 overflow-hidden border border-black/10 bg-white"
        >
          {/* Top technical strip */}

          <div className="flex items-center justify-between border-b border-black/10 px-5 py-3 sm:px-7">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-black/35">
                {activeIndustry.eyebrow}
              </span>
            </div>

            <span className="font-mono text-[8px] tracking-[0.2em] text-black/20">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(industryDetails.length).padStart(2, "0")}
            </span>
          </div>

          {/* Main intro */}

          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-14 xl:p-16">
            {/* Giant number */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-[-35px] select-none text-[15rem] font-black leading-none tracking-[-0.12em] text-black/[0.025] sm:text-[20rem]"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </div>

            {/* Headline */}

            <div className="relative">
              <div className="flex items-start gap-5">
                <span className="mt-2 font-mono text-[9px] tracking-[0.2em] text-[#737A1A]">
                  0{activeIndex + 1}
                </span>

                <h3 className="max-w-4xl text-[clamp(2.3rem,5vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                  {activeIndustry.headline}
                </h3>
              </div>
            </div>

            {/* Description */}

            <div className="relative flex items-end lg:pb-1">
              <div>
                <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-black/25">
                  Context
                </span>

                <p className="mt-5 max-w-xl text-sm leading-7 text-black/50 sm:text-base sm:leading-8">
                  {activeIndustry.description}
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              CHALLENGES / SOLUTIONS
          ================================================== */}

          <div className="grid border-t border-black/10 lg:grid-cols-2">
            {/* Challenges */}

            <div className="p-7 sm:p-10 lg:border-r lg:p-14">
              <div className="flex items-end justify-between border-b border-black/10 pb-5">
                <div>
                  <span className="font-mono text-[8px] text-[#737A1A]">
                    01
                  </span>

                  <h4 className="mt-2 text-lg font-semibold tracking-[-0.03em]">
                    {activeIndustry.challengeTitle}
                  </h4>
                </div>

                <span className="hidden text-[8px] uppercase tracking-[0.25em] text-black/20 sm:block">
                  Friction
                </span>
              </div>

              <div className="mt-7">
                {activeIndustry.challenges.map((challenge, index) => (
                  <div
                    key={challenge}
                    className="group flex gap-4 border-b border-black/[0.07] py-5 last:border-b-0"
                  >
                    <span className="font-mono text-[8px] text-black/20 transition-colors duration-300 group-hover:text-[#737A1A]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-black/20 transition-colors duration-300 group-hover:bg-[#737A1A]" />

                      <p className="text-sm leading-6 text-black/55 transition-colors duration-300 group-hover:text-black/80">
                        {challenge}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}

            <div className="border-t border-black/10 p-7 sm:p-10 lg:border-t-0 lg:p-14">
              <div className="flex items-end justify-between border-b border-black/10 pb-5">
                <div>
                  <span className="font-mono text-[8px] text-[#737A1A]">
                    02
                  </span>

                  <h4 className="mt-2 text-lg font-semibold tracking-[-0.03em]">
                    {activeIndustry.solutionTitle}
                  </h4>
                </div>

                <span className="hidden text-[8px] uppercase tracking-[0.25em] text-black/20 sm:block">
                  Response
                </span>
              </div>

              <div className="mt-7 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
                {activeIndustry.solutions.map((solution, index) => (
                  <div
                    key={solution}
                    className="group flex min-h-[86px] items-center justify-between bg-white px-5 py-5 transition-colors duration-300 hover:bg-[#737A1A]/[0.045]"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[8px] text-black/20 group-hover:text-[#737A1A]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-medium text-black/70 transition-colors group-hover:text-black">
                        {solution}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.4}
                      className="text-black/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#737A1A]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              USE CASES
          ================================================== */}

          <div className="border-t border-black/10 bg-black text-white">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
              {/* Intro */}

              <div className="border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
                <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#737A1A]">
                  Typical use cases
                </span>

                <h4 className="mt-5 max-w-sm text-3xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-4xl">
                  Built for businesses
                  <span className="block text-white/30">like yours.</span>
                </h4>

                <div className="mt-10 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#737A1A]" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                    {activeIndustry.tabLabel}
                  </span>
                </div>
              </div>

              {/* Use case rail */}

              <div className="grid sm:grid-cols-2">
                {activeIndustry.useCases.map((useCase, index) => (
                  <div
                    key={useCase}
                    className="group relative flex min-h-[120px] items-end border-b border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.025] sm:min-h-[145px] sm:border-r"
                  >
                    <span className="absolute right-5 top-5 font-mono text-[8px] text-white/20 transition-colors group-hover:text-[#737A1A]">
                      0{index + 1}
                    </span>

                    <div>
                      <span className="mb-3 block h-px w-6 bg-[#737A1A]/50 transition-all duration-300 group-hover:w-12 group-hover:bg-[#737A1A]" />

                      <span className="text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-white">
                        {useCase}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            STATEMENT
        ====================================================== */}

        <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#737A1A]">
              The takeaway
            </span>

            <p className="mt-5 text-2xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-3xl lg:text-4xl">
              {activeIndustry.statement}
            </p>
          </div>

          <a
            href="/contact"
            className="group flex w-fit items-center gap-4 border-b border-black/20 pb-2 text-xs font-medium transition-colors duration-300 hover:border-[#737A1A] hover:text-[#737A1A]"
          >
            Discuss your project
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-[#737A1A]">
              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </div>

        {/* Footer metadata */}

        <div className="mt-9 flex items-center justify-between border-t border-black/10 pt-4">
          <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-black/25">
            IMX / Industry Detail System
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-black/25">
            Context · Strategy · Execution
          </span>
        </div>
      </div>
    </section>
  );
}
