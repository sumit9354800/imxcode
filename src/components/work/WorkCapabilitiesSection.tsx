import { workCapabilities } from "@/data/work-capabilities";

export default function WorkCapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      <div className="mx-auto max-w-[1600px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32 xl:px-16">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-px w-10 bg-[#737A1A]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-black/45 sm:text-xs">
              What we bring
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              Built across
              <span className="block text-[#737A1A]">
                disciplines.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black/45 sm:text-lg sm:leading-8">
              Technology, design, creative and growth working together to turn
              ideas into digital experiences that move businesses forward.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-20 grid border-t border-black/10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {workCapabilities.map((capability) => (
            <article
              key={capability.number}
              className="group border-b border-black/10 p-7 sm:border-r lg:border-b-0 lg:p-8"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#737A1A]">
                  {capability.number}
                </span>

                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/35 transition-colors duration-300 group-hover:border-[#737A1A] group-hover:bg-[#737A1A] group-hover:text-white"
                >
                  ↗
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-16 text-2xl font-medium tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#737A1A]">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-black/45">
                {capability.description}
              </p>

              {/* Items */}
              <div className="mt-8 border-t border-black/10 pt-5">
                <ul className="space-y-3">
                  {capability.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-xs text-black/55"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#737A1A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-black/40 sm:text-base">
            Different capabilities. One connected team. One outcome-focused
            approach.
          </p>

          <span className="text-[9px] font-medium uppercase tracking-[0.24em] text-black/30">
            Technology · Design · Creative · Growth
          </span>
        </div>
      </div>
    </section>
  );
}