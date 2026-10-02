import {
  ArrowDownRight,
  Code2,
  Palette,
  Sparkles,
} from "lucide-react";
import { aboutWhoWeAre } from "@/data/about-who-we-are";

const capabilityIcons = [Code2, Palette, Sparkles];

export default function AboutWhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 select-none text-[18rem] font-black leading-none tracking-[-0.15em] text-black/[0.025] sm:text-[25rem] lg:text-[32rem]"
      >
        02
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">
        {/* Top label */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#737A1A]" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[10px]">
              {aboutWhoWeAre.eyebrow}
            </p>
          </div>

          <span className="text-[9px] uppercase tracking-[0.2em] text-black/20">
            IMX / 02
          </span>
        </div>

        {/* Main statement */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">
          <div>
            <p className="max-w-sm text-xs font-medium uppercase leading-6 tracking-[0.18em] text-black/30">
              Technology
              <br />
              Design
              <br />
              Creative
              <br />
              One connected team.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10">
                <ArrowDownRight size={15} className="text-[#737A1A]" />
              </span>

              <span className="text-[9px] uppercase tracking-[0.2em] text-black/30">
                What defines us
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-6xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.085em]">
              A digital team
              <span className="block">
                built around{" "}
                <span className="text-[#737A1A]">ideas.</span>
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-black/45 sm:text-base sm:leading-8">
              {aboutWhoWeAre.description}
            </p>
          </div>
        </div>

        {/* Capability cards */}
        <div className="mt-20 grid gap-4 lg:grid-cols-3">
          {aboutWhoWeAre.capabilities.map((item, index) => {
            const Icon = capabilityIcons[index % capabilityIcons.length];

            return (
              <article
                key={item.number}
                className="group relative min-h-[300px] overflow-hidden border border-black/10 bg-[#f5f5f2] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#737A1A]/40 sm:p-9"
              >
                {/* Large number */}
                <span className="absolute -right-3 -top-8 text-[9rem] font-black leading-none tracking-[-0.1em] text-black/[0.035] transition-colors duration-500 group-hover:text-[#737A1A]/10">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-11 w-11 items-center justify-center border border-black/10 bg-white transition-all duration-300 group-hover:border-[#737A1A]/50 group-hover:bg-[#737A1A]/10">
                  <Icon
                    size={18}
                    className="text-[#737A1A]"
                  />
                </div>

                <div className="relative mt-16">
                  <h3 className="text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-black/45">
                    {item.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-black/10 px-7 py-4 sm:px-9">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/25">
                    IMX Capability
                  </span>

                  <ArrowDownRight
                    size={15}
                    className="text-black/20 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#737A1A]"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Large closing statement */}
        <div className="mt-20 border-t border-black/10 pt-10">
          <div className="grid gap-8 lg:grid-cols-[0.3fr_1fr] lg:gap-12">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/25">
              Our perspective
            </span>

            <p className="max-w-5xl text-[clamp(1.7rem,3.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.055em]">
              {aboutWhoWeAre.statement}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}