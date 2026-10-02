import { ArrowUpRight, Quote } from "lucide-react";
import { aboutBeliefs } from "@/data/about-beliefs";

export default function AboutBeliefs() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f2] text-black">
      {/* Large background mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 select-none text-[18rem] font-black leading-none tracking-[-0.12em] text-black/[0.025] sm:text-[25rem] lg:text-[32rem]"
      >
        IMX
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32 xl:px-16">
        {/* Intro */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#737A1A] text-white">
              <Quote size={12} />
            </span>

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#737A1A] sm:text-[10px]">
              {aboutBeliefs.eyebrow}
            </p>
          </div>

          <h2 className="mt-8 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.86] tracking-[-0.08em]">
            Good digital work
            <span className="block">
              starts with{" "}
              <span className="text-[#737A1A]">good thinking.</span>
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-black/45 sm:text-base sm:leading-8">
            {aboutBeliefs.description}
          </p>
        </div>

        {/* Philosophy statement */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div className="hidden lg:block">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-black/15" />
              <span className="text-[9px] uppercase tracking-[0.25em] text-black/30">
                Our philosophy
              </span>
            </div>

            <p className="mt-5 max-w-xs text-xs leading-6 text-black/35">
              Principles that guide the decisions behind every digital
              experience we create.
            </p>
          </div>

          <div className="border-l-2 border-[#737A1A] pl-6 sm:pl-8 lg:pl-10">
            <p className="max-w-5xl text-[clamp(1.7rem,3.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.055em]">
              We believe technology should{" "}
              <span className="text-[#737A1A]">simplify</span> complexity,
              design should{" "}
              <span className="text-[#737A1A]">create clarity</span>, and
              every detail should have a{" "}
              <span className="text-[#737A1A]">reason to exist.</span>
            </p>
          </div>
        </div>

        {/* Belief cards */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {aboutBeliefs.items.map((item, index) => (
            <article
              key={item.number}
              className={`group relative overflow-hidden border border-black/10 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#737A1A]/50 ${
                index === 1 ? "lg:translate-y-8" : ""
              } ${
                index === 3 ? "lg:translate-y-8" : ""
              }`}
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold tracking-[0.2em] text-[#737A1A]">
                  {item.number}
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#737A1A]"
                />
              </div>

              {/* Accent */}
              <div className="mt-10 h-8 w-8 border border-black/10 bg-[#f5f5f2] transition-colors duration-300 group-hover:border-[#737A1A]/40 group-hover:bg-[#737A1A]/10" />

              <h3 className="mt-7 text-lg font-semibold leading-tight tracking-[-0.035em]">
                {item.title}
              </h3>

              <p className="mt-4 text-xs leading-5 text-black/45">
                {item.description}
              </p>

              {/* Bottom line */}
              <div className="mt-8 h-px w-full bg-black/10">
                <div className="h-px w-0 bg-[#737A1A] transition-all duration-500 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-black/30">
            Think deeply · Build intentionally · Keep improving
          </p>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/30">
              IMX / 04
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}