"use client";

import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

import { pricingWebsiteDevelopment } from "@/data/pricing-website-development";
import { pricingAppDevelopment } from "@/data/pricing-app-development";
import { pricingEcommerce } from "@/data/pricing-ecommerce";
import { pricingUiUxGraphic } from "@/data/pricing-ui-ux-graphic";
import { pricingVideoEditing } from "@/data/pricing-video-editing";

type PricingPlansProps = {
  category: string;
};

export default function PricingPlans({ category }: PricingPlansProps) {
  /*
   * Website Development is the first category.
   * Other category data files will be connected here
   * in the next steps.
   */
  const pricingData =
    category === "website-development"
      ? pricingWebsiteDevelopment
      : category === "app-development"
        ? pricingAppDevelopment
        : category === "ecommerce"
          ? pricingEcommerce
          : category === "ui-ux-graphic"
            ? pricingUiUxGraphic
            : category === "video-editing"
              ? pricingVideoEditing
              : null;

  if (!pricingData) {
    return (
      <div className="border border-black/10 bg-white p-10 text-center md:p-16">
        <p className="text-sm font-medium text-black/50">
          Pricing for this category is coming next.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Category Heading */}
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#737A1A]">
          {pricingData.eyebrow}
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl lg:text-5xl">
          {pricingData.title}
        </h2>

        <p className="mt-5 text-sm leading-7 text-black/55 md:text-base">
          {pricingData.description}
        </p>
      </div>

      {/* Plans */}
      <div className="grid gap-5 lg:grid-cols-3">
        {pricingData.plans.map((plan) => (
          <article
            key={plan.name}
            className={`relative flex flex-col border ${
              plan.popular
                ? "border-[#737A1A] bg-black text-white"
                : "border-black/10 bg-white text-black"
            }`}
          >
            {/* Popular */}
            {plan.popular && (
              <div className="absolute right-5 top-5">
                <span className="bg-[#737A1A] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  Most Popular
                </span>
              </div>
            )}

            <div className="flex flex-1 flex-col p-7 md:p-8">
              {/* Plan Header */}
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                    plan.popular ? "text-[#737A1A]" : "text-black/40"
                  }`}
                >
                  {plan.name}
                </p>

                <div className="mt-5 flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-tight md:text-5xl">
                    {plan.price}
                  </span>

                  <span
                    className={`mb-1 text-xs ${
                      plan.popular ? "text-white/40" : "text-black/35"
                    }`}
                  >
                    onwards
                  </span>
                </div>

                {/* Delivery */}
                <div
                  className={`mt-4 inline-flex border px-3 py-2 text-xs font-medium ${
                    plan.popular
                      ? "border-[#737A1A]/40 bg-[#737A1A]/10 text-[#737A1A]"
                      : "border-black/10 bg-black/[0.03] text-black/55"
                  }`}
                >
                  Delivery: {plan.delivery}
                </div>

                <p
                  className={`mt-5 min-h-[72px] text-sm leading-6 ${
                    plan.popular ? "text-white/60" : "text-black/55"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div
                className={`my-7 h-px ${
                  plan.popular ? "bg-white/10" : "bg-black/10"
                }`}
              />

              {/* Features */}
              <div className="flex-1">
                <p
                  className={`mb-5 text-xs font-semibold uppercase tracking-[0.15em] ${
                    plan.popular ? "text-white/35" : "text-black/35"
                  }`}
                >
                  What's included
                </p>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center ${
                          plan.popular
                            ? "bg-[#737A1A] text-white"
                            : "bg-black text-white"
                        }`}
                      >
                        <Check size={12} strokeWidth={2.5} />
                      </span>

                      <span
                        className={
                          plan.popular ? "text-white/70" : "text-black/60"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitable For */}
              <div
                className={`mt-8 border-t pt-6 ${
                  plan.popular ? "border-white/10" : "border-black/10"
                }`}
              >
                <p
                  className={`mb-3 text-xs font-semibold uppercase tracking-[0.15em] ${
                    plan.popular ? "text-white/35" : "text-black/35"
                  }`}
                >
                  Suitable for
                </p>

                <div className="flex flex-wrap gap-2">
                  {plan.suitableFor.map((item) => (
                    <span
                      key={item}
                      className={`border px-2.5 py-1.5 text-xs ${
                        plan.popular
                          ? "border-white/10 text-white/50"
                          : "border-black/10 text-black/50"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href={plan.cta.href}
                className={`mt-8 flex items-center justify-between px-5 py-4 text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-[#737A1A] text-white hover:bg-[#626817]"
                    : "bg-black text-white hover:bg-[#737A1A]"
                }`}
              >
                {plan.cta.label}

                <ArrowUpRight size={17} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pricing Note */}
      <div className="mt-8 border-l-2 border-[#737A1A] pl-5">
        <p className="text-sm leading-6 text-black/50">
          Prices are starting prices. Final pricing depends on project scope,
          functionality, integrations, content, custom requirements and overall
          complexity.
        </p>
      </div>
    </div>
  );
}
