"use client";

import { useState } from "react";
import { pricingCategories } from "@/data/pricing-categories";
import PricingPlans from "./PricingPlans";

export default function PricingCategoryTabs() {
  const [activeCategory, setActiveCategory] = useState(
    pricingCategories[0].id
  );

  return (
    <section className="bg-[#f5f5f0] px-6 pb-24 md:px-10 lg:px-16 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        {/* Category Tabs */}
        <div className="mb-12 overflow-x-auto border-b border-black/10">
          <div className="flex min-w-max">
            {pricingCategories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative flex items-center gap-3 px-5 py-5 text-left transition md:px-7 ${
                    isActive
                      ? "text-black"
                      : "text-black/40 hover:text-black"
                  }`}
                >
                  <span
                    className={`text-[10px] font-semibold tracking-[0.15em] ${
                      isActive
                        ? "text-[#737A1A]"
                        : "text-black/25 group-hover:text-[#737A1A]"
                    }`}
                  >
                    {category.number}
                  </span>

                  <span className="text-sm font-semibold whitespace-nowrap md:text-base">
                    {category.label}
                  </span>

                  {isActive && (
                    <span className="absolute bottom-[-1px] left-0 h-0.5 w-full bg-[#737A1A]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Pricing */}
        <PricingPlans category={activeCategory} />
      </div>
    </section>
  );
}