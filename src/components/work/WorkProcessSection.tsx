import { workProcessSteps } from '@/data/work-process';


export default function WorkProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#080808] text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32 xl:px-16">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-px w-10 bg-[#737A1A]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/40 sm:text-xs">
              How we build
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              From idea
              <span className="block text-[#737A1A]">to impact.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/40 sm:text-lg sm:leading-8">
              Every project follows a connected process that brings strategy,
              design, technology and execution together.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="mt-20 border-t border-white/10 lg:mt-28">
          {workProcessSteps.map((step) => (
            <div
              key={step.number}
              className="group grid gap-6 border-b border-white/10 py-8 sm:py-10 lg:grid-cols-[90px_0.8fr_1.2fr] lg:items-center lg:gap-10 lg:py-12"
            >
              {/* Number */}
              <span className="text-[10px] font-medium tracking-[0.2em] text-[#737A1A]">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-3xl font-medium tracking-[-0.055em] transition-colors duration-300 group-hover:text-[#737A1A] sm:text-4xl lg:text-5xl">
                {step.title}
              </h3>

              {/* Description */}
              <div className="flex items-start gap-5">
                <span className="mt-3 hidden h-px w-8 shrink-0 bg-white/15 sm:block" />

                <p className="max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-white/30 sm:text-base">
            Clear thinking. Thoughtful design. Solid technology. Every stage
            works together.
          </p>

          <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-white/25">
            Strategy · Design · Technology
          </span>
        </div>
      </div>
    </section>
  );
}