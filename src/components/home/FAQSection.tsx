"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Olive ambient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#737A1A]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-28 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-px w-10 bg-[#737A1A]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black sm:text-xs">
              FAQ
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-black">
              Questions,
              <span className="block text-[#737A1A]">
                answered clearly.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black sm:text-lg sm:leading-8">
              A few things you may want to know before starting a project with
              IMX.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 border-t border-black/10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.number}
                className="border-b border-black/10"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="
                    group flex w-full items-center gap-5
                    py-7 text-left
                    transition-colors duration-300
                    hover:bg-[#737A1A]/5
                    sm:py-8
                  "
                >
                  <span className="w-8 shrink-0 text-[10px] font-medium tracking-[0.2em] text-[#737A1A]">
                    {item.number}
                  </span>

                  <span
                    className="
                      flex-1 text-lg font-medium
                      tracking-[-0.025em]
                      text-black
                      transition-colors duration-300
                      group-hover:text-[#737A1A]
                      sm:text-xl lg:text-2xl
                    "
                  >
                    {item.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-full
                      border border-[#737A1A]
                      bg-white
                      text-lg text-black
                      transition-all duration-300
                      group-hover:bg-[#737A1A]
                      group-hover:text-white
                    "
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="grid grid-cols-[32px_1fr] gap-5 pb-8">
                    <span />

                    <p className="max-w-3xl text-sm leading-7 text-black sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}