
"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Globe2,
  Layers3,
  Monitor,
  Smartphone,
  Zap,
} from "lucide-react";

export default function WebsiteDevelopmentHero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-y-0 left-[8%] w-px bg-white/[0.055]" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/[0.045]" />
        <div className="absolute inset-y-0 right-[8%] w-px bg-white/[0.055]" />

        <div className="absolute left-0 right-0 top-[22%] h-px bg-white/[0.04]" />
        <div className="absolute left-0 right-0 top-[72%] h-px bg-white/[0.04]" />

        <div className="absolute -right-48 top-[5%] h-[560px] w-[560px] rounded-full bg-[#737A1A]/20 blur-[150px]" />
        <div className="absolute -left-40 bottom-[-15%] h-[430px] w-[430px] rounded-full bg-[#737A1A]/10 blur-[140px]" />

        <div className="absolute right-[18%] top-[18%] h-2 w-2 rounded-full bg-[#737A1A]/60 shadow-[0_0_25px_5px_rgba(115,122,26,0.2)]" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-[1600px] flex-col px-5 py-6 sm:px-8 sm:py-8 lg:min-h-[850px] lg:px-12 xl:px-16">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:text-[10px] sm:tracking-[0.3em]">
              Website Development
            </span>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#737A1A]" />
            <span className="text-[9px] uppercase tracking-[0.24em] text-white/30">
              IMX Digital Studio / 01
            </span>
          </div>
        </div>

        {/* Main Hero */}
        <div className="grid flex-1 items-center gap-8 py-12 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6 lg:py-10 xl:gap-12">
          {/* Left Content */}
          <div className="relative z-20 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-3 border border-white/10 bg-white/[0.025] px-3 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#737A1A] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#737A1A]" />
              </span>

              <span className="text-[9px] uppercase tracking-[0.22em] text-white/55 sm:text-[10px] sm:tracking-[0.26em]">
                Digital Product Engineering
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(3.1rem,7vw,6.8rem)] font-semibold leading-[0.87] tracking-[-0.075em]">
              We build
              <br />
              websites that
              <br />
              <span className="relative inline-block text-[#858D25]">
                move you
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-1 h-[3px] w-[42%] bg-[#737A1A] sm:-bottom-3"
                />
              </span>
              <span className="text-white"> forward.</span>
            </h1>

            <p className="mt-8 max-w-lg text-sm leading-7 text-white/50 sm:mt-9 sm:text-base sm:leading-8">
              From a powerful first impression to a seamless user journey, we
              design and develop high-performance websites built to strengthen
              your brand and support real business growth.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-4 bg-[#737A1A] px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#8b9424] hover:shadow-[0_14px_40px_rgba(115,122,26,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a0a83b] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-6"
              >
                Start a project
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="#website-capabilities"
                className="group inline-flex min-h-12 items-center gap-2 px-3 text-sm text-white/55 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#737A1A]"
              >
                Explore the service
                <ArrowDown
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>

            {/* Service Highlights */}
            <div className="mt-10 grid max-w-lg grid-cols-3 border-t border-white/10 pt-5 sm:mt-12">
              <div className="pr-3">
                <div className="flex items-center gap-2 text-white/80">
                  <Zap size={14} className="text-[#858D25]" />
                  <span className="text-xs font-medium sm:text-sm">Fast</span>
                </div>
                <p className="mt-2 text-[10px] leading-4 text-white/35 sm:text-xs">
                  Performance first
                </p>
              </div>

              <div className="border-l border-white/10 px-3 sm:px-5">
                <div className="flex items-center gap-2 text-white/80">
                  <Monitor size={14} className="text-[#858D25]" />
                  <span className="text-xs font-medium sm:text-sm">Responsive</span>
                </div>
                <p className="mt-2 text-[10px] leading-4 text-white/35 sm:text-xs">
                  Every screen
                </p>
              </div>

              <div className="border-l border-white/10 pl-3 sm:pl-5">
                <div className="flex items-center gap-2 text-white/80">
                  <Code2 size={14} className="text-[#858D25]" />
                  <span className="text-xs font-medium sm:text-sm">Scalable</span>
                </div>
                <p className="mt-2 text-[10px] leading-4 text-white/35 sm:text-xs">
                  Built for growth
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-[680px] lg:ml-auto">
            <div className="relative aspect-square w-full">
              {/* Ambient Light */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#737A1A]/15 blur-[85px]"
              />

              {/* Orbital Frames */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rotate-[15deg] border border-white/[0.075]"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 -rotate-[12deg] border border-[#737A1A]/25"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/[0.045]"
              />

              {/* Code Window */}
              <div className="absolute left-[1%] top-[15%] z-20 w-[39%] -rotate-[7deg] border border-white/10 bg-[#090909]/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-transform duration-700 hover:rotate-[-4deg] sm:p-4">
                <div className="mb-4 flex items-center gap-1.5 border-b border-white/[0.07] pb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />

                  <span className="ml-auto text-[6px] uppercase tracking-[0.2em] text-white/30 sm:text-[7px]">
                    app.tsx
                  </span>
                </div>

                <div className="space-y-2 font-mono text-[7px] sm:text-[9px]">
                  <div className="flex gap-2">
                    <span className="text-white/20">01</span>
                    <span>
                      <span className="text-[#a2aa42]">const </span>
                      <span className="text-white/70">experience</span>
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-white/20">02</span>
                    <span className="pl-3 text-white/45">
                      = buildWebsite()
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-white/20">03</span>
                    <span className="text-[#a2aa42]">return</span>
                    <span className="text-white/40"> {"{"} </span>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-white/20">04</span>
                    <span className="pl-3 text-white/50">
                      speed: <span className="text-[#a2aa42]">"fast"</span>
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-white/20">05</span>
                    <span className="pl-3 text-white/50">
                      design: <span className="text-[#a2aa42]">"unique"</span>
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <span className="text-white/20">06</span>
                    <span className="text-white/40">{"}"}</span>
                  </div>
                </div>
              </div>

              {/* Main Browser */}
              <div className="absolute left-[16%] top-[23%] z-10 w-[79%] border border-white/15 bg-[#070707] shadow-[0_35px_100px_rgba(0,0,0,0.8)] [transform:perspective(1100px)_rotateY(-9deg)_rotateX(4deg)] transition-transform duration-700 hover:[transform:perspective(1100px)_rotateY(-4deg)_rotateX(1deg)]">
                {/* Browser Toolbar */}
                <div className="flex h-7 items-center gap-1.5 border-b border-white/10 px-2.5 sm:h-9 sm:px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]/80" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />

                  <div className="ml-3 flex h-3 w-[58%] items-center border border-white/[0.08] bg-white/[0.02] px-2 sm:h-4">
                    <Globe2 size={8} className="mr-1.5 text-white/20" />
                    <span className="truncate text-[6px] text-white/35 sm:text-[7px]">
                      yourbrand.com
                    </span>
                  </div>

                  <span className="ml-auto text-[6px] text-white/25 sm:text-[7px]">
                    HTTPS
                  </span>
                </div>

                {/* Website Preview */}
                <div className="p-3 sm:p-6 md:p-7">
                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-5 w-5 items-center justify-center bg-[#737A1A]">
                        <span className="text-[8px] font-bold text-black">W</span>
                      </div>
                      <span className="text-[7px] font-semibold tracking-wide text-white/75 sm:text-[9px]">
                        YOUR BRAND
                      </span>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="h-1 w-5 bg-white/20 sm:w-7" />
                      <span className="h-1 w-5 bg-white/20 sm:w-7" />
                      <span className="h-1 w-5 bg-white/20 sm:w-7" />
                      <div className="h-4 w-10 bg-[#737A1A] sm:h-5 sm:w-14" />
                    </div>
                  </div>

                  {/* Main Headline */}
                  <div className="mt-6 sm:mt-10">
                    <div className="h-2.5 w-[72%] bg-white/90 sm:h-4" />
                    <div className="mt-2 h-2.5 w-[48%] bg-white/30 sm:h-4" />

                    <div className="mt-3 flex gap-2 sm:mt-5">
                      <div className="flex h-5 w-14 items-center justify-center bg-[#737A1A] sm:h-7 sm:w-20">
                        <span className="text-[5px] font-semibold text-black sm:text-[7px]">
                          GET STARTED
                        </span>
                      </div>
                      <div className="h-5 w-14 border border-white/15 sm:h-7 sm:w-20" />
                    </div>
                  </div>

                  {/* Website Content */}
                  <div className="mt-5 grid grid-cols-5 gap-2 sm:mt-8 sm:gap-3">
                    <div className="col-span-3 h-16 border border-white/10 bg-gradient-to-br from-[#737A1A]/15 to-transparent sm:h-24">
                      <div className="m-2 h-1 w-8 bg-[#737A1A]/70 sm:m-3 sm:w-12" />
                      <div className="mx-2 h-1 w-[65%] bg-white/15 sm:mx-3" />
                      <div className="mx-2 mt-1.5 h-1 w-[45%] bg-white/10 sm:mx-3" />
                    </div>

                    <div className="col-span-2 space-y-2">
                      <div className="h-7 border border-white/10 bg-white/[0.025] sm:h-10" />
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-7 border border-[#737A1A]/25 bg-[#737A1A]/[0.06] sm:h-10" />
                        <div className="h-7 border border-white/10 bg-white/[0.025] sm:h-10" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Interface */}
                  <div className="mt-3 flex items-center justify-between border-t border-white/[0.08] pt-3 sm:mt-5 sm:pt-4">
                    <div className="h-1 w-[28%] bg-white/15" />
                    <div className="flex gap-1.5">
                      <span className="h-1 w-4 bg-white/10 sm:w-6" />
                      <span className="h-1 w-4 bg-[#737A1A]/70 sm:w-6" />
                      <span className="h-1 w-4 bg-white/10 sm:w-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Status Card */}
              <div className="absolute right-[0%] top-[8%] z-30 w-[30%] border border-white/10 bg-[#080808]/95 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-3.5">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="flex h-5 w-5 items-center justify-center border border-[#737A1A]/30 bg-[#737A1A]/10 sm:h-6 sm:w-6">
                    <Globe2 size={11} className="text-[#a0a83b]" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[7px] font-medium text-white/80 sm:text-[9px]">
                      Live website
                    </p>
                    <p className="text-[6px] text-white/35 sm:text-[7px]">
                      System operational
                    </p>
                  </div>
                </div>

                <div className="mt-3 h-1 w-full bg-white/[0.08]">
                  <div className="h-full w-[92%] bg-[#737A1A]" />
                </div>

                <div className="mt-2 flex items-end justify-between">
                  <span className="text-lg font-medium leading-none tracking-[-0.06em] sm:text-2xl">
                    99.9<span className="text-[9px] text-[#a0a83b] sm:text-xs">%</span>
                  </span>
                  <span className="text-[5px] uppercase tracking-[0.12em] text-white/35 sm:text-[7px] sm:tracking-[0.18em]">
                    Uptime
                  </span>
                </div>
              </div>

              {/* Architecture Card */}
              <div className="absolute bottom-[13%] left-[3%] z-30 w-[39%] rotate-[5deg]">
                <div className="absolute bottom-4 left-3 h-full w-full border border-white/[0.07] bg-white/[0.015]" />
                <div className="absolute bottom-2 left-1.5 h-full w-full border border-white/[0.09] bg-black/70" />

                <div className="relative border border-[#737A1A]/35 bg-[#080808]/95 p-2.5 shadow-xl backdrop-blur-xl sm:p-3.5">
                  <div className="flex items-center gap-2">
                    <Layers3 size={12} className="shrink-0 text-[#a0a83b]" />
                    <span className="text-[6px] uppercase tracking-[0.17em] text-white/45 sm:text-[8px] sm:tracking-[0.2em]">
                      System architecture
                    </span>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4">
                    <div className="border border-[#737A1A]/30 bg-[#737A1A]/10 p-1.5">
                      <div className="h-1 w-full bg-[#737A1A]/80" />
                    </div>
                    <div className="border border-white/10 p-1.5">
                      <div className="h-1 w-full bg-white/20" />
                    </div>
                    <div className="border border-white/10 p-1.5">
                      <div className="h-1 w-full bg-white/20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Device */}
              <div className="absolute bottom-[8%] right-[9%] z-30 h-[29%] w-[16%] min-w-[47px] rotate-[8deg] rounded-[7px] border border-white/20 bg-[#080808] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.8)] sm:rounded-[10px] sm:p-1.5">
                <div className="relative h-full overflow-hidden border border-white/[0.07] bg-black p-1.5 sm:p-2">
                  <div className="mx-auto mb-2 h-1 w-5 rounded-full bg-white/15 sm:mb-3 sm:w-7" />

                  <div className="h-1.5 w-[65%] bg-[#737A1A]" />
                  <div className="mt-2 space-y-1">
                    <div className="h-1 w-full bg-white/40" />
                    <div className="h-1 w-[75%] bg-white/15" />
                  </div>

                  <div className="mt-3 h-7 border border-white/10 bg-[#737A1A]/[0.05] sm:h-10" />

                  <div className="mt-2 grid grid-cols-2 gap-1">
                    <div className="h-4 border border-white/10 sm:h-6" />
                    <div className="h-4 border border-[#737A1A]/30 sm:h-6" />
                  </div>

                  <div className="mt-2 h-1 w-[60%] bg-white/10" />
                </div>
              </div>

              {/* Code Badge */}
              <div className="absolute bottom-[7%] right-[30%] z-30 flex h-9 w-9 items-center justify-center border border-white/10 bg-[#080808]/95 shadow-xl backdrop-blur-xl sm:h-12 sm:w-12">
                <Code2 size={17} className="text-[#a0a83b] sm:h-5 sm:w-5" />
              </div>

              {/* Connection Lines */}
              <div
                aria-hidden="true"
                className="absolute left-[42%] top-[12%] h-[62%] w-px rotate-[31deg] bg-gradient-to-b from-transparent via-[#737A1A]/45 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute left-[38%] top-[39%] h-px w-[48%] rotate-[10deg] bg-gradient-to-r from-[#737A1A]/40 to-transparent"
              />

              {/* Technical Nodes */}
              <span className="absolute left-[10%] top-[29%] h-1.5 w-1.5 rounded-full bg-[#a0a83b] shadow-[0_0_16px_rgba(115,122,26,0.8)]" />
              <span className="absolute right-[7%] top-[36%] h-1 w-1 rounded-full bg-white/50" />
              <span className="absolute left-[49%] bottom-[17%] h-1.5 w-1.5 rounded-full bg-[#a0a83b] shadow-[0_0_16px_rgba(115,122,26,0.8)]" />

              {/* Faint Index Number */}
              <span
                aria-hidden="true"
                className="absolute bottom-[1%] right-[2%] select-none text-[clamp(5rem,10vw,8rem)] font-semibold leading-none tracking-[-0.12em] text-white/[0.035]"
              >
                01
              </span>

              {/* Corner Markers */}
              <span className="absolute left-[3%] top-[6%] h-5 w-5 border-l border-t border-[#737A1A]/50" />
              <span className="absolute right-[3%] top-[6%] h-5 w-5 border-r border-t border-white/20" />
              <span className="absolute bottom-[5%] left-[3%] h-5 w-5 border-b border-l border-white/20" />
              <span className="absolute bottom-[5%] right-[3%] h-5 w-5 border-b border-r border-[#737A1A]/50" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] uppercase tracking-[0.18em] text-white/35 sm:text-[10px] sm:tracking-[0.22em]">
            Strategy <span className="px-1.5 text-[#737A1A]">·</span> UI/UX
            <span className="px-1.5 text-[#737A1A]">·</span> Development
          </span>

          <span className="text-[9px] uppercase tracking-[0.18em] text-white/35 sm:text-[10px] sm:tracking-[0.22em]">
            Built for speed. Designed for growth.
          </span>
        </div>
      </div>

      {/* Motion + Accessibility */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          :global(*) {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
