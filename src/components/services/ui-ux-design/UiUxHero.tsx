import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  MousePointer2,
  PenTool,
  Type,
} from "lucide-react";

export default function UiUxHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-[#737A1A]/15 blur-[130px]" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-40 xl:px-16">
        {/* Label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#737A1A]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
            UI/UX Design
          </span>
        </div>

        {/* Main */}
        <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          {/* Copy */}
          <div>
            <h1 className="max-w-4xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              Design that makes
              <br />
              <span className="text-[#737A1A]">sense.</span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
              We design digital experiences that balance clarity, usability
              and visual character — turning complex products into interfaces
              people understand naturally.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#ui-ux-types"
                className="group inline-flex items-center gap-3 bg-[#737A1A] px-5 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1"
              >
                Explore design
                <ArrowDown
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border border-white/15 px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04]"
              >
                Start a project
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Design System Visual */}
          <div className="relative mx-auto w-full max-w-[650px]">
            <div className="relative overflow-hidden border border-white/10 bg-[#080808]">
              {/* Top bar */}
              <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                  IMX / Design System
                </span>

                <MousePointer2
                  size={14}
                  strokeWidth={1.5}
                  className="text-[#737A1A]"
                />
              </div>

              <div className="grid min-h-[430px] grid-cols-[0.72fr_1.28fr] sm:min-h-[500px]">
                {/* Design tools */}
                <div className="border-r border-white/10 p-4 sm:p-6">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                    Components
                  </span>

                  <div className="mt-6 space-y-3">
                    {[
                      "Typography",
                      "Buttons",
                      "Inputs",
                      "Cards",
                      "Navigation",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`flex items-center gap-3 border p-3 ${
                          index === 1
                            ? "border-[#737A1A]/40 bg-[#737A1A]/10"
                            : "border-white/10"
                        }`}
                      >
                        <span
                          className={`h-2 w-2 ${
                            index === 1 ? "bg-[#737A1A]" : "bg-white/15"
                          }`}
                        />

                        <span
                          className={`text-[8px] ${
                            index === 1 ? "text-white/70" : "text-white/30"
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-5">
                    <div className="flex items-center gap-2">
                      <Type
                        size={13}
                        strokeWidth={1.4}
                        className="text-white/25"
                      />

                      <span className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                        Type Scale
                      </span>
                    </div>

                    <div className="mt-5 space-y-2">
                      <div className="h-3 w-24 bg-white/20" />
                      <div className="h-2 w-20 bg-white/10" />
                      <div className="h-1.5 w-16 bg-white/10" />
                    </div>
                  </div>
                </div>

                {/* Interface canvas */}
                <div className="relative p-5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[7px] uppercase tracking-[0.2em] text-white/25">
                        Preview
                      </span>

                      <div className="mt-2 h-3 w-28 bg-white/15" />
                    </div>

                    <div className="h-6 w-6 rounded-full border border-[#737A1A]/30 bg-[#737A1A]/10" />
                  </div>

                  {/* Main UI */}
                  <div className="mt-7 border border-white/10 p-4 sm:p-5">
                    <div className="grid grid-cols-[1fr_0.7fr] gap-4">
                      <div>
                        <div className="h-2 w-14 bg-[#737A1A]/60" />
                        <div className="mt-3 h-5 w-32 bg-white/20" />
                        <div className="mt-2 h-2 w-24 bg-white/10" />

                        <div className="mt-6 h-8 w-24 bg-[#737A1A]" />
                      </div>

                      <div className="relative border border-white/10 bg-white/[0.025]">
                        <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#737A1A]/40 bg-[#737A1A]/10" />

                        <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 border border-[#737A1A]/50" />
                      </div>
                    </div>
                  </div>

                  {/* Interaction cards */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="border border-white/10 p-4">
                      <PenTool
                        size={14}
                        strokeWidth={1.4}
                        className="text-[#737A1A]"
                      />

                      <div className="mt-4 h-2 w-16 bg-white/15" />
                      <div className="mt-2 h-1.5 w-10 bg-white/10" />
                    </div>

                    <div className="border border-white/10 p-4">
                      <MousePointer2
                        size={14}
                        strokeWidth={1.4}
                        className="text-white/30"
                      />

                      <div className="mt-4 h-2 w-16 bg-white/15" />
                      <div className="mt-2 h-1.5 w-10 bg-white/10" />
                    </div>
                  </div>

                  {/* Alignment guides */}
                  <div className="pointer-events-none absolute inset-y-0 left-[20%] w-px bg-[#737A1A]/10" />
                  <div className="pointer-events-none absolute inset-y-0 right-[20%] w-px bg-[#737A1A]/10" />
                </div>
              </div>
            </div>

            {/* Floating labels */}
            <div className="absolute -bottom-5 -left-5 hidden border border-white/10 bg-[#0b0b0b] px-5 py-4 sm:block">
              <span className="block text-[8px] uppercase tracking-[0.25em] text-white/30">
                Experience
              </span>

              <span className="mt-1 block text-sm font-medium">
                Clear by design.
              </span>
            </div>

            <div className="absolute -right-5 -top-5 hidden bg-[#737A1A] px-5 py-4 text-black sm:block">
              <span className="block text-[8px] uppercase tracking-[0.25em] text-black/55">
                Design
              </span>

              <span className="mt-1 block text-sm font-semibold">
                Purpose before decoration
              </span>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
            UX · UI · Systems · Prototypes
          </span>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
            IMX / UI/UX Design
          </span>
        </div>
      </div>
    </section>
  );
}