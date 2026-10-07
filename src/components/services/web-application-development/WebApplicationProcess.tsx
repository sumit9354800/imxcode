import { ArrowRight } from "lucide-react";
import { webApplicationProcess } from "@/data/services/web-application-development";

export default function WebApplicationProcess() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">

        {/* Header */}
        <div className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/40">
                How We Build
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-black/45">
              Complex software becomes easier to build when the right
              decisions are made before the code gets complicated.
            </p>
          </div>

          <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
            From business problem to working product.
          </h2>
        </div>

        {/* Process */}
        <div className="mt-14">
          {webApplicationProcess.map((step, index) => {
            const isLast =
              index === webApplicationProcess.length - 1;

            return (
              <div
                key={step.number}
                className={`group grid gap-6 py-8 sm:grid-cols-[90px_1fr_auto] sm:items-start sm:gap-10 ${
                  !isLast
                    ? "border-b border-black/10"
                    : ""
                }`}
              >
                {/* Number */}
                <div className="flex items-center gap-4 sm:block">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#737A1A]">
                    {step.number}
                  </span>

                  <div className="hidden h-px w-10 bg-black/10 sm:mt-5 sm:block" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[clamp(1.8rem,3vw,3.2rem)] font-semibold leading-none tracking-[-0.05em] transition-colors duration-300 group-hover:text-[#737A1A]">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-black/45 sm:text-base sm:leading-7">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden pt-1 sm:block">
                  <ArrowRight
                    size={20}
                    strokeWidth={1.4}
                    className="text-black/20 transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#737A1A]"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 grid gap-6 border-t border-black/10 pt-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="max-w-2xl text-sm leading-6 text-black/45">
            We keep the process collaborative from the first conversation
            to the final release, so technical decisions stay connected
            to the business problem they are solving.
          </p>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/30">
            Understand · Architect · Develop · Launch
          </span>
        </div>

      </div>
    </section>
  );
}