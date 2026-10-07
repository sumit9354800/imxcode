import { ArrowRight } from "lucide-react";
import {
  landingPageProcess,
} from "@/data/services/landing-page-design";

export default function LandingPageProcess() {
  return (
    <section className="bg-white px-6 py-20 text-black sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#737A1A]">
              Our process
            </span>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              From the first idea
              <span className="block text-[#737A1A]">
                to the final click.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-black/60 lg:ml-auto">
            We keep the process focused around one thing: creating a landing
            experience where the message is clear and the next action feels
            natural.
          </p>
        </div>

        {/* Process */}
        <div className="mt-16 border-t border-black/10">
          {landingPageProcess.map((step, index) => (
            <div
              key={step.number}
              className="group grid gap-6 border-b border-black/10 py-8 sm:py-10 lg:grid-cols-[100px_1fr_auto] lg:items-center lg:gap-10"
            >
              {/* Number */}
              <div className="flex items-center justify-between lg:block">
                <span className="text-sm font-medium text-[#737A1A]">
                  {step.number}
                </span>

                <span className="text-xs uppercase tracking-[0.16em] text-black/25 lg:hidden">
                  Step {index + 1}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[#737A1A] group-hover:bg-[#737A1A] group-hover:text-white lg:flex">
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs uppercase tracking-[0.18em] text-black/30">
            04 stages
          </span>

          <span className="text-sm font-medium text-[#737A1A]">
            Focused by design.
          </span>
        </div>
      </div>
    </section>
  );
}