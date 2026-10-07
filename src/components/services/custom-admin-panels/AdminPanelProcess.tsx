import { adminPanelProcess } from "@/data/services/custom-admin-panels";
import { ArrowRight } from "lucide-react";

export default function AdminPanelProcess() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45">
                How We Build
              </span>
            </div>

            <p className="mt-7 max-w-sm text-sm leading-6 text-black/50">
              We start with the way your team works today, then turn those
              workflows into a simpler and more useful digital system.
            </p>
          </div>

          <h2 className="max-w-5xl text-[clamp(2.5rem,5vw,5.4rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
            From messy workflows
            <br />
            to <span className="text-[#737A1A]">clear systems.</span>
          </h2>
        </div>

        {/* Process flow */}
        <div className="mt-16 border-t border-black/10">
          {adminPanelProcess.map((step, index) => (
            <div
              key={step.number}
              className="group grid border-b border-black/10 py-8 sm:py-10 lg:grid-cols-[90px_0.75fr_1.25fr_70px] lg:items-center lg:gap-10"
            >
              {/* Number */}
              <div>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#737A1A]">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <div className="mt-4 lg:mt-0">
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

              {/* Connector */}
              <div className="mt-6 flex lg:mt-0 lg:justify-end">
                <div className="flex h-11 w-11 items-center justify-center border border-black/10 transition-all duration-300 group-hover:border-[#737A1A] group-hover:bg-[#737A1A]">
                  <ArrowRight
                    size={17}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* Mobile connector */}
              {index < adminPanelProcess.length - 1 && (
                <div className="mt-8 h-px w-12 bg-black/5 lg:hidden" />
              )}
            </div>
          ))}
        </div>

        {/* Workflow visual */}
        <div className="mt-14 overflow-hidden bg-black text-white">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
            <div className="border-b border-white/10 px-7 py-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-10">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#737A1A]">
                Workflow Logic
              </span>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
                Every admin system connects people, information and actions
                into one predictable flow.
              </p>
            </div>

            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap sm:gap-0">
                {["People", "Data", "Actions", "Results"].map(
                  (label, index) => (
                    <div
                      key={label}
                      className="flex min-w-0 items-center"
                    >
                      <div
                        className={`flex h-11 items-center border px-4 sm:px-5 ${
                          index === 0
                            ? "border-[#737A1A]/40 bg-[#737A1A]/10"
                            : "border-white/10"
                        }`}
                      >
                        <span
                          className={`text-[9px] uppercase tracking-[0.18em] ${
                            index === 0
                              ? "text-[#737A1A]"
                              : "text-white/35"
                          }`}
                        >
                          {label}
                        </span>
                      </div>

                      {index < 3 && (
                        <div className="mx-2 hidden h-px w-7 bg-white/15 sm:block" />
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
          <p className="max-w-2xl text-sm leading-6 text-black/50 sm:text-base">
            We build around real operational behaviour, so the final system
            feels like an improvement to the way your team already works.
          </p>

          <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-black/30">
            Understand · Structure · Build · Refine
          </span>
        </div>
      </div>
    </section>
  );
}