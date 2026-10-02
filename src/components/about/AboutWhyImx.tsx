import { ArrowRight, Check, Sparkles } from "lucide-react";
import { aboutWhyImx } from "@/data/about-why-imx";

export default function AboutWhyImx() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#737A1A]/6 blur-[150px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#737A1A] text-white">
                <Sparkles size={13} />
              </span>

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[10px]">
                {aboutWhyImx.eyebrow}
              </p>
            </div>

            <h2 className="mt-8 text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.84] tracking-[-0.08em]">
              Why
              <span className="block text-[#737A1A]">IMX?</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-black/45 sm:text-base sm:leading-8">
              {aboutWhyImx.description}
            </p>

            {/* Small signature */}
            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-10 bg-black/15" />

              <span className="text-[9px] uppercase tracking-[0.22em] text-black/25">
                The IMX difference
              </span>
            </div>
          </div>

          {/* Right */}
          <div>
            {aboutWhyImx.items.map((item, index) => (
              <article
                key={item.number}
                className="group relative border-b border-black/10 py-8 first:border-t sm:py-10"
              >
                <div className="flex gap-6 sm:gap-10">
                  {/* Number */}
                  <div className="shrink-0">
                    <span className="flex h-9 w-9 items-center justify-center border border-black/10 text-[9px] font-semibold tracking-[0.15em] text-[#737A1A] transition-all duration-300 group-hover:border-[#737A1A]/50 group-hover:bg-[#737A1A]/5">
                      {item.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="max-w-xl text-2xl font-semibold tracking-[-0.045em] sm:text-3xl lg:text-4xl">
                        {item.title}
                      </h3>

                      <ArrowRight
                        size={18}
                        className="mt-2 shrink-0 text-black/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#737A1A]"
                      />
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-black/45">
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2">
                      <Check size={12} className="text-[#737A1A]" />

                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/25">
                        IMX principle
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover accent */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 overflow-hidden border-t border-black/10 pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-4xl text-[clamp(1.5rem,3vw,3rem)] font-medium leading-[1.05] tracking-[-0.05em]">
              Different disciplines.
              <span className="text-[#737A1A]"> One direction.</span>
            </p>

            <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/25">
              IMX / 06
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
