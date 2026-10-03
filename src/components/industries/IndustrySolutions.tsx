import {
  ArrowUpRight,
  Check,
} from "lucide-react";

import { industrySolutions } from "@/data/industry-solutions";

export default function IndustrySolutions() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#737A1A]/10 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#737A1A]/8 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* Header */}
        <div className="grid gap-7 border-b border-white/10 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:pb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#737A1A]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#737A1A] sm:text-xs">
              Solutions Across Industries
            </span>
          </div>

          {/* Heading */}
          <div>
            <h2 className="max-w-4xl text-[clamp(2.5rem,5.5vw,5.8rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
              One digital capability.
              <span className="block text-[#737A1A]">
                Many ways to apply it.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/45 sm:text-[15px]">
              Technology, design and creative expertise shaped around
              different industries, business models and digital needs.
            </p>
          </div>
        </div>

        {/* Compact Solution Matrix */}
        <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {industrySolutions.map((solution) => (
            <article
              key={solution.number}
              className="group relative min-w-0 bg-black p-6 transition-colors duration-300 hover:bg-[#0b0b0b] sm:p-7"
            >
              {/* Hover accent */}
              <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#737A1A] transition-transform duration-500 group-hover:scale-x-100" />

              {/* Top line */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#737A1A]">
                  {solution.number}
                </span>

                <ArrowUpRight
                  className="h-4 w-4 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#737A1A]"
                  strokeWidth={1.4}
                />
              </div>

              {/* Main content */}
              <div className="mt-5">
                <h3 className="text-xl font-medium tracking-[-0.035em] transition-colors duration-300 group-hover:text-[#737A1A] sm:text-2xl">
                  {solution.title}
                </h3>

                <p className="mt-2 max-w-xl text-xs leading-5 text-white/40 sm:text-sm">
                  {solution.description}
                </p>
              </div>

              {/* Services */}
              <div className="mt-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-px w-4 bg-[#737A1A]/60" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                    What we provide
                  </span>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {solution.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-1.5 text-xs text-white/60"
                    >
                      <Check
                        className="h-3 w-3 shrink-0 text-[#737A1A]"
                        strokeWidth={2}
                      />

                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div className="mt-5 border-t border-white/7 pt-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="mr-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/20">
                    Across
                  </span>

                  {solution.industries.map((industry) => (
                    <span
                      key={industry}
                      className="border border-white/8 px-2 py-1 text-[10px] text-white/40 transition-colors duration-300 group-hover:border-[#737A1A]/30 group-hover:text-white/60"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="mt-1 h-7 w-px bg-[#737A1A]" />

            <p className="max-w-2xl text-lg font-medium leading-tight tracking-[-0.025em] sm:text-xl">
              Different industries. Different challenges.
              <span className="text-white/40">
                {" "}
                One connected digital capability.
              </span>
            </p>
          </div>

          <a
            href="/services"
            className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-[#737A1A] pb-2 text-xs font-medium uppercase tracking-[0.12em] text-white transition-colors hover:text-[#737A1A]"
          >
            Explore services

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
        </div>

        {/* Technical footer */}
        <div className="mt-8 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-white/20">
          <span>IMX / INDUSTRY SYSTEM</span>

          <span>
            {String(industrySolutions.length).padStart(2, "0")} SOLUTIONS
          </span>
        </div>
      </div>
    </section>
  );
}