import { ecommerceProcess } from "@/data/services/ecommerce-development";
import { ArrowDownRight } from "lucide-react";

export default function EcommerceProcess() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45">
                Our Process
              </span>
            </div>

            <p className="mt-7 max-w-sm text-sm leading-6 text-black/50">
              A commerce project needs more than development. We connect
              strategy, experience and technology from the beginning.
            </p>
          </div>

          <h2 className="max-w-5xl text-[clamp(2.5rem,5vw,5.4rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
            From product idea
            <br />
            to <span className="text-[#737A1A]">purchase.</span>
          </h2>
        </div>

        {/* Process */}
        <div className="mt-16 border-t border-black/10">
          {ecommerceProcess.map((step, index) => (
            <div
              key={step.number}
              className="group grid border-b border-black/10 py-8 sm:py-10 lg:grid-cols-[100px_0.7fr_1fr_80px] lg:items-center lg:gap-10"
            >
              {/* Number */}
              <div className="mb-5 lg:mb-0">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#737A1A]">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl lg:text-4xl">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div className="mt-4 max-w-xl lg:mt-0">
                <p className="text-sm leading-6 text-black/55 sm:text-base sm:leading-7">
                  {step.description}
                </p>
              </div>

              {/* Direction */}
              <div className="mt-6 flex lg:mt-0 lg:justify-end">
                <div className="flex h-11 w-11 items-center justify-center border border-black/10 transition-all duration-300 group-hover:border-[#737A1A] group-hover:bg-[#737A1A]">
                  <ArrowDownRight
                    size={18}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Journey visual */}
        <div className="mt-14 overflow-hidden bg-black text-white">
          <div className="grid min-h-[190px] items-center lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-white/10 px-7 py-7 lg:border-b-0 lg:border-r lg:px-10">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#737A1A]">
                The Commerce Journey
              </span>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">
                Every stage connects to the next — reducing friction between
                discovering a product and completing the purchase.
              </p>
            </div>

            <div className="px-7 py-8 sm:px-10">
              <div className="flex items-center">
                {["Discover", "Explore", "Decide", "Purchase"].map(
                  (label, index) => (
                    <div
                      key={label}
                      className="flex min-w-0 flex-1 items-center"
                    >
                      <div className="relative flex flex-col items-center">
                        <span
                          className={`h-2.5 w-2.5 rounded-full border ${
                            index === 0
                              ? "border-[#737A1A] bg-[#737A1A]"
                              : "border-white/30"
                          }`}
                        />

                        <span className="mt-3 text-[8px] uppercase tracking-[0.18em] text-white/35 sm:text-[9px]">
                          {label}
                        </span>
                      </div>

                      {index < 3 && (
                        <div className="mx-3 h-px flex-1 bg-white/10 sm:mx-5" />
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-black/50 sm:text-base">
            We build with the full customer journey in mind — not just the
            final checkout screen.
          </p>

          <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-black/30">
            Strategy · Experience · Technology
          </span>
        </div>
      </div>
    </section>
  );
}