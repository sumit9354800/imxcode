import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function WebApplicationHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* Ambient shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-[520px] w-[520px] rounded-full border border-[#737A1A]/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-36 h-[360px] w-[360px] rounded-full border border-[#737A1A]/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[14%] top-[32%] h-2 w-2 rounded-full bg-[#737A1A] shadow-[0_0_30px_8px_rgba(115,122,26,0.25)]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-20">

          {/* Copy */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
                Web Applications
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl text-[clamp(3.2rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              Software that works around your business.
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
              We build custom web applications that turn complex processes,
              data and workflows into simple digital experiences your team
              and customers can actually use.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#application-types"
                className="group inline-flex items-center justify-center gap-3 bg-[#737A1A] px-5 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#858c20]"
              >
                Explore applications

                <ArrowDown
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 border border-white/15 px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#737A1A] hover:text-[#737A1A]"
              >
                Start a project

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div
            aria-hidden="true"
            className="relative mx-auto aspect-square w-full max-w-[560px]"
          >
            {/* Outer frame */}
            <div className="absolute inset-[8%] rotate-6 border border-white/10" />

            <div className="absolute inset-[15%] -rotate-6 border border-[#737A1A]/25" />

            {/* Main application window */}
            <div className="absolute left-[14%] right-[8%] top-[17%] bottom-[14%] border border-white/15 bg-white/[0.025] backdrop-blur-sm">

              {/* Window top */}
              <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />

                <div className="ml-auto h-1.5 w-16 bg-white/10" />
              </div>

              {/* Application layout */}
              <div className="grid h-[calc(100%-40px)] grid-cols-[28%_1fr]">

                {/* Sidebar */}
                <div className="border-r border-white/10 p-3">
                  <div className="h-5 w-7 bg-[#737A1A]/70" />

                  <div className="mt-7 space-y-3">
                    <div className="h-1.5 w-full bg-white/15" />
                    <div className="h-1.5 w-4/5 bg-white/10" />
                    <div className="h-1.5 w-full bg-[#737A1A]/35" />
                    <div className="h-1.5 w-3/5 bg-white/10" />
                    <div className="h-1.5 w-4/5 bg-white/10" />
                  </div>
                </div>

                {/* Dashboard */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-2 w-24 bg-white/25" />
                      <div className="mt-2 h-1.5 w-16 bg-white/10" />
                    </div>

                    <div className="h-6 w-14 border border-white/10" />
                  </div>

                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <div className="border border-white/10 p-3">
                      <div className="h-1.5 w-8 bg-white/15" />
                      <div className="mt-3 h-4 w-12 bg-[#737A1A]/65" />
                    </div>

                    <div className="border border-white/10 p-3">
                      <div className="h-1.5 w-8 bg-white/15" />
                      <div className="mt-3 h-4 w-10 bg-white/25" />
                    </div>

                    <div className="border border-white/10 p-3">
                      <div className="h-1.5 w-8 bg-white/15" />
                      <div className="mt-3 h-4 w-11 bg-white/25" />
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="mt-3 border border-white/10 p-3">
                    <div className="h-1.5 w-20 bg-white/15" />

                    <div className="mt-6 flex h-24 items-end gap-2">
                      <span className="h-[35%] flex-1 bg-white/10" />
                      <span className="h-[52%] flex-1 bg-white/15" />
                      <span className="h-[44%] flex-1 bg-[#737A1A]/40" />
                      <span className="h-[72%] flex-1 bg-[#737A1A]/55" />
                      <span className="h-[62%] flex-1 bg-[#737A1A]/70" />
                      <span className="h-[88%] flex-1 bg-[#737A1A]" />
                    </div>
                  </div>

                  {/* Table */}
                  <div className="mt-3 space-y-2">
                    <div className="h-5 border border-white/10" />
                    <div className="h-5 border border-white/10" />
                    <div className="h-5 border border-white/10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating data blocks */}
            <div className="absolute bottom-[7%] left-[3%] border border-[#737A1A]/25 bg-black px-4 py-3">
              <div className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                System
              </div>
              <div className="mt-1 text-xs font-medium text-[#737A1A]">
                Connected
              </div>
            </div>

            <div className="absolute right-[1%] top-[9%] border border-white/10 bg-black px-4 py-3">
              <div className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                Workflow
              </div>
              <div className="mt-1 text-xs font-medium text-white/70">
                Active
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/30">
            Custom software · Digital workflows · Business systems
          </span>

          <span className="text-[10px] uppercase tracking-[0.22em] text-white/30">
            IMX / Web Applications
          </span>
        </div>
      </div>
    </section>
  );
}