"use client";

import { useState } from "react";
import {
  ecommerceCapabilities,
  type EcommerceCapability,
} from "@/data/services/ecommerce-development";
import { ArrowUpRight } from "lucide-react";

export default function EcommerceCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCapability: EcommerceCapability =
    ecommerceCapabilities[activeIndex];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                What We Build
              </span>
            </div>

            <p className="mt-7 max-w-sm text-sm leading-6 text-white/40">
              Every layer of your store has a role — from the first product
              impression to the systems that complete the order.
            </p>
          </div>

          <h2 className="max-w-5xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
            More than a storefront.
            <br />
            <span className="text-white/35">A complete commerce system.</span>
          </h2>
        </div>

        {/* Capability layout */}
        <div className="mt-16 grid border-t border-white/10 lg:grid-cols-[1fr_1.2fr]">
          {/* Capability list */}
          <div className="border-r border-white/10">
            {ecommerceCapabilities.map((capability, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={capability.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group flex w-full items-start gap-5 border-b border-white/10 px-1 py-7 text-left transition-colors duration-300 hover:bg-white/[0.025] sm:py-8 lg:px-6"
                >
                  <span
                    className={`pt-1 text-[10px] font-medium tracking-[0.2em] transition-colors ${
                      active ? "text-[#737A1A]" : "text-white/25"
                    }`}
                  >
                    {capability.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3
                      className={`text-xl font-medium tracking-[-0.025em] transition-colors sm:text-2xl ${
                        active
                          ? "text-white"
                          : "text-white/45 group-hover:text-white/80"
                      }`}
                    >
                      {capability.title}
                    </h3>

                    <div
                      className={`mt-4 h-px origin-left bg-[#737A1A] transition-transform duration-500 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </div>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className={`mt-1 transition-all duration-300 ${
                      active
                        ? "translate-x-0 -translate-y-0 text-[#737A1A]"
                        : "-translate-x-1 translate-y-1 text-white/20 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detail */}
          <div className="relative min-h-[460px] overflow-hidden bg-[#080808]">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#737A1A]/10 blur-[110px]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:48px_48px]"
            />

            <div className="relative flex min-h-[460px] flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#737A1A]">
                  Capability / {activeCapability.number}
                </span>

                <h3 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                  {activeCapability.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                  {activeCapability.description}
                </p>
              </div>

              <div className="mt-12">
                <div className="mb-4 text-[9px] font-medium uppercase tracking-[0.25em] text-white/25">
                  Included
                </div>

                <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
                  {activeCapability.items.map((item, index) => (
                    <div
                      key={item}
                      className="bg-[#080808] p-5 sm:min-h-[105px]"
                    >
                      <span className="text-[9px] tracking-[0.18em] text-[#737A1A]">
                        0{index + 1}
                      </span>

                      <p className="mt-3 text-sm font-medium text-white/75">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-[9px] uppercase tracking-[0.22em] text-white/25">
                  Commerce Infrastructure
                </span>

                <span className="text-[9px] uppercase tracking-[0.22em] text-[#737A1A]">
                  IMX
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-14 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
          <p className="max-w-2xl text-xl font-medium leading-8 tracking-[-0.025em] text-white/75 sm:text-2xl">
            A strong store is not just easy to shop. It is built to support the
            business behind every transaction.
          </p>

          <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
            Product · Platform · Performance
          </span>
        </div>
      </div>
    </section>
  );
}