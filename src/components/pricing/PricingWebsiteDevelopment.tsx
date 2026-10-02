import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { pricingWebsiteDevelopment } from "@/data/pricing-website-development";

export default function PricingWebsiteDevelopment() {
  const { eyebrow, title, description, plans } = pricingWebsiteDevelopment;

  return (
    <section className="bg-[#f5f5f0] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#737A1A]">
            {eyebrow}
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl lg:text-6xl">
            {title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 md:text-lg">
            {description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col overflow-hidden border ${
                plan.popular
                  ? "border-[#737A1A] bg-black text-white"
                  : "border-black/10 bg-white text-black"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute right-5 top-5">
                  <span className="bg-[#737A1A] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-7 md:p-8">
                {/* Plan */}
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                      plan.popular ? "text-[#737A1A]" : "text-black/45"
                    }`}
                  >
                    {plan.name}
                  </p>

                  <div className="mt-5 flex items-end gap-2">
                    <span className="text-4xl font-semibold tracking-tight md:text-5xl">
                      {plan.price}
                    </span>
                    <span
                      className={`mb-1 text-sm ${
                        plan.popular ? "text-white/45" : "text-black/40"
                      }`}
                    >
                      onwards
                    </span>
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
                      plan.popular ? "text-white/40" : "text-black/40"
                    }`}
                  >
                    What's included
                  </p>

                  <ul className="space-y-3.5">
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
                            plan.popular ? "text-white/75" : "text-black/65"
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
                      plan.popular ? "text-white/40" : "text-black/40"
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
                            ? "border-white/10 text-white/55"
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
        <div className="mt-12 grid border border-black/10 bg-white md:grid-cols-4">
          <div className="border-b border-black/10 p-6 md:border-b-0 md:border-r">
            <p className="text-sm font-semibold text-black">Free Hosting</p>
            <p className="mt-2 text-xs leading-5 text-black/50">
              Hosting included with your website plan.
            </p>
          </div>

          <div className="border-b border-black/10 p-6 md:border-b-0 md:border-r">
            <p className="text-sm font-semibold text-black">Free SSL</p>
            <p className="mt-2 text-xs leading-5 text-black/50">
              Secure HTTPS connection included.
            </p>
          </div>

          <div className="border-b border-black/10 p-6 md:border-b-0 md:border-r">
            <p className="text-sm font-semibold text-black">Launch Support</p>
            <p className="mt-2 text-xs leading-5 text-black/50">
              We help you get the website live.
            </p>
          </div>

          <div className="p-6">
            <p className="text-sm font-semibold text-black">
              Post-Launch Support
            </p>
            <p className="mt-2 text-xs leading-5 text-black/50">
              Support period depends on your selected plan.
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 border-l-2 border-[#737A1A] pl-5">
          <p className="text-sm leading-6 text-black/55">
            Prices are starting prices. Final pricing may vary depending on
            pages, functionality, integrations, content, custom design and
            overall project requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
