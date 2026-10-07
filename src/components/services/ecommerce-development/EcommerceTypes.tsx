"use client";

import { useState } from "react";
import {
  ecommerceTypes,
  type EcommerceType,
} from "@/data/services/ecommerce-development";

export default function EcommerceTypes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeType: EcommerceType = ecommerceTypes[activeIndex];

  return (
    <section
      id="ecommerce-types"
      className="relative overflow-hidden bg-white text-black"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* Heading */}
        <div className="grid gap-8 border-b border-black/10 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/50">
                Commerce Experiences
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5.4rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              Built around the way
              <br />
              your customers buy.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-6 text-black/55 sm:text-base sm:leading-7">
              From focused online stores to custom commerce platforms, we
              design the experience around your products, customers and
              business model.
            </p>
          </div>
        </div>

        {/* Interactive area */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Selector */}
          <div className="border-t border-black/10">
            {ecommerceTypes.map((type, index) => {
              const active = activeIndex === index;

              return (
                <button
                  key={type.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group grid w-full grid-cols-[42px_1fr_auto] items-center gap-3 border-b border-black/10 py-5 text-left"
                >
                  <span
                    className={`text-[10px] font-medium tracking-[0.18em] transition-colors duration-300 ${
                      active ? "text-[#737A1A]" : "text-black/30"
                    }`}
                  >
                    {type.number}
                  </span>

                  <span
                    className={`text-base font-medium transition-all duration-300 sm:text-lg ${
                      active
                        ? "translate-x-2 text-black"
                        : "text-black/50 group-hover:translate-x-1 group-hover:text-black"
                    }`}
                  >
                    {type.title}
                  </span>

                  <span
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      active
                        ? "scale-100 bg-[#737A1A]"
                        : "scale-50 bg-black/20 group-hover:scale-75"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active commerce experience */}
          <div className="relative min-h-[470px] overflow-hidden bg-black text-white sm:min-h-[520px]">
            {/* Grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px]"
            />

            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#737A1A]/15 blur-[90px]"
            />

            <div className="relative flex min-h-[470px] flex-col justify-between p-7 sm:min-h-[520px] sm:p-10 lg:p-12">
              {/* Top */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#737A1A]">
                    Commerce / {activeType.number}
                  </span>

                  <h3 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                    {activeType.title}
                  </h3>
                </div>

                <span className="text-5xl font-semibold tracking-[-0.06em] text-white/[0.06] sm:text-7xl">
                  {activeType.number}
                </span>
              </div>

              {/* Commerce journey visual */}
              <div className="my-12">
                <div className="grid grid-cols-3">
                  <div>
                    <div className="h-2 w-2 rounded-full bg-[#737A1A]" />
                    <div className="mt-3 text-[9px] uppercase tracking-[0.18em] text-white/35">
                      Discover
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute right-1/2 top-[3px] h-px w-full bg-white/15" />

                    <div className="relative mx-auto h-2 w-2 rounded-full border border-[#737A1A] bg-black" />

                    <div className="mt-3 text-center text-[9px] uppercase tracking-[0.18em] text-white/35">
                      Decide
                    </div>
                  </div>

                  <div className="relative text-right">
                    <div className="absolute right-0 top-[3px] h-px w-1/2 bg-white/15" />

                    <div className="relative ml-auto h-2 w-2 rounded-full border border-white/30 bg-black" />

                    <div className="mt-3 text-[9px] uppercase tracking-[0.18em] text-white/35">
                      Purchase
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-white/10 pt-7">
                <p className="max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                  {activeType.description}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.22em] text-white/25">
                    Customer Journey
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.22em] text-[#737A1A]">
                    IMX Commerce
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-14 flex justify-end">
          <p className="max-w-2xl border-l-2 border-[#737A1A] pl-5 text-lg font-medium leading-7 tracking-[-0.02em] sm:text-xl sm:leading-8">
            Every commerce experience starts with understanding what you sell,
            who buys it and how they make the decision to purchase.
          </p>
        </div>
      </div>
    </section>
  );
}