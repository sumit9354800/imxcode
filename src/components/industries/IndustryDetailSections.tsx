"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
} from "lucide-react";

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

    window.addEventListener(
      "imx-industry-change",
      handleIndustryChange,
    );

    return () => {
      window.removeEventListener(
        "imx-industry-change",
        handleIndustryChange,
      );
    };
  }, []);

  const activeIndustry =
    industryDetails.find((industry) => industry.id === activeId) ??
    industryDetails[0];

  return (
    <section className="relative overflow-hidden bg-[#f4f4f1] text-black">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#737A1A]">
              Industry Detail
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            Solutions shaped around
            <br />
            real business needs.
          </h2>
        </div>

        {/* Industry selector */}
        <div className="mt-14 flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {industryDetails.map((industry) => {
            const active = industry.id === activeId;

            return (
              <button
                key={industry.id}
                type="button"
                onClick={() => setActiveId(industry.id)}
                className={`shrink-0 border px-4 py-3 text-xs font-medium transition-all duration-300 ${
                  active
                    ? "border-black bg-black text-white"
                    : "border-black/10 bg-white text-black/55 hover:border-black/30 hover:text-black"
                }`}
              >
                {industry.id === "professional-services"
                  ? "Professional Services"
                  : industry.headline.replace(
                      " & Institutions",
                      "",
                    )}
              </button>
            );
          })}
        </div>

        {/* Main detail */}
        <div className="mt-10 overflow-hidden border border-black/10 bg-white">
          {/* Intro */}
          <div className="grid gap-10 border-b border-black/10 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#737A1A]">
                {activeIndustry.eyebrow}
              </span>

              <div className="mt-7 flex items-start gap-5">
                <span className="text-sm font-semibold text-black/20">
                  {activeIndustry.id === "education"
                    ? "01"
                    : industryDetails.findIndex(
                        (item) => item.id === activeIndustry.id,
                      ) + 1}
                </span>

                <h3 className="max-w-2xl text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  {activeIndustry.headline}
                </h3>
              </div>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl text-sm leading-7 text-black/55 sm:text-base">
                {activeIndustry.description}
              </p>
            </div>
          </div>

          {/* Challenges + Solutions */}
          <div className="grid lg:grid-cols-2">
            {/* Challenges */}
            <div className="border-b border-black/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
                  {activeIndustry.challengeTitle}
                </span>

                <span className="text-xs text-black/20">
                  01
                </span>
              </div>

              <div className="mt-9 space-y-5">
                {activeIndustry.challenges.map((challenge) => (
                  <div
                    key={challenge}
                    className="flex gap-4 border-b border-black/[0.07] pb-5 last:border-0"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      <Check className="h-3 w-3" strokeWidth={2} />
                    </span>

                    <p className="text-sm leading-6 text-black/65">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
                  {activeIndustry.solutionTitle}
                </span>

                <span className="text-xs text-black/20">
                  02
                </span>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {activeIndustry.solutions.map((solution) => (
                  <div
                    key={solution}
                    className="group flex min-h-16 items-center justify-between border border-black/10 px-4 transition-all duration-300 hover:border-[#737A1A] hover:bg-[#737A1A]/5"
                  >
                    <span className="text-sm font-medium">
                      {solution}
                    </span>

                    <ChevronRight
                      className="h-4 w-4 text-black/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#737A1A]"
                      strokeWidth={1.5}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Use cases */}
          <div className="border-t border-black/10 bg-black p-7 text-white sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#737A1A]">
                  Typical use cases
                </span>

                <h4 className="mt-5 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  Built for businesses
                  <br />
                  like yours.
                </h4>
              </div>

              <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {activeIndustry.useCases.map((useCase) => (
                  <div
                    key={useCase}
                    className="flex min-h-24 items-center bg-black px-5 py-5 text-sm text-white/65"
                  >
                    {useCase}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-12 flex flex-col gap-6 border-t border-black/10 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-3xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl">
            {activeIndustry.statement}
          </p>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#737A1A] pb-2 text-sm font-medium"
          >
            Discuss your project

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </section>
  );
}