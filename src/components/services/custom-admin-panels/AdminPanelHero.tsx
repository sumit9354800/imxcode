import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  LayoutDashboard,
  Users,
} from "lucide-react";

export default function AdminPanelHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-[#737A1A]/15 blur-[130px]" />

        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-white/[0.025] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-40 xl:px-16">
        {/* Label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#737A1A]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
            Custom Admin Panels
          </span>
        </div>

        {/* Main */}
        <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          {/* Copy */}
          <div>
            <h1 className="max-w-4xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              Put your entire
              <br />
              operation <span className="text-[#737A1A]">in control.</span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
              We build custom admin panels that turn complex business
              operations into clear, manageable workflows — giving your team
              one place to control the systems behind your digital product.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#admin-panel-types"
                className="group inline-flex items-center gap-3 bg-[#737A1A] px-5 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1"
              >
                Explore systems
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

          {/* Dashboard Visual */}
          <div className="relative mx-auto w-full max-w-[650px]">
            <div className="relative overflow-hidden border border-white/10 bg-[#080808]">
              {/* Browser top */}
              <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                  IMX / Control Center
                </span>

                <div className="h-5 w-5 rounded-full border border-[#737A1A]/40 bg-[#737A1A]/10" />
              </div>

              {/* Dashboard */}
              <div className="grid min-h-[430px] grid-cols-[74px_1fr] sm:min-h-[500px] sm:grid-cols-[105px_1fr]">
                {/* Sidebar */}
                <div className="border-r border-white/10 bg-white/[0.015] p-3 sm:p-4">
                  <div className="flex h-8 items-center justify-center bg-[#737A1A] text-black">
                    <LayoutDashboard size={15} strokeWidth={1.7} />
                  </div>

                  <div className="mt-8 space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className={`mx-auto h-2 ${
                          item === 1 ? "w-9 bg-white/25" : "w-6 bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Main dashboard */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                        Overview
                      </span>

                      <div className="mt-3 h-4 w-28 bg-white/15" />
                    </div>

                    <div className="flex h-7 items-center gap-2 border border-white/10 px-2.5">
                      <span className="text-[7px] text-white/30">This month</span>
                      <ChevronDown size={10} className="text-white/25" />
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      ["Revenue", "+24.8%"],
                      ["Orders", "1,284"],
                      ["Users", "8,420"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="border border-white/10 bg-white/[0.02] p-3 sm:p-4"
                      >
                        <span className="text-[7px] uppercase tracking-[0.15em] text-white/25">
                          {label}
                        </span>

                        <div className="mt-2 text-sm font-medium text-white/80 sm:text-base">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="mt-4 border border-white/10 p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                        Performance
                      </span>

                      <BarChart3
                        size={14}
                        strokeWidth={1.5}
                        className="text-[#737A1A]"
                      />
                    </div>

                    <div className="relative mt-6 h-28">
                      <div className="absolute inset-x-0 top-0 border-t border-white/5" />
                      <div className="absolute inset-x-0 top-1/2 border-t border-white/5" />
                      <div className="absolute inset-x-0 bottom-0 border-t border-white/5" />

                      <svg
                        viewBox="0 0 500 120"
                        className="absolute inset-0 h-full w-full"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 94 C45 88 65 98 105 76 C145 55 166 72 202 59 C245 44 260 68 300 45 C342 22 360 42 397 29 C435 15 460 23 500 8"
                          stroke="#737A1A"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom cards */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="border border-white/10 p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[7px] uppercase tracking-[0.15em] text-white/25">
                          Active Users
                        </span>
                        <Users
                          size={13}
                          strokeWidth={1.4}
                          className="text-white/25"
                        />
                      </div>

                      <div className="mt-4 h-1.5 w-3/4 bg-white/10">
                        <div className="h-full w-[68%] bg-[#737A1A]" />
                      </div>
                    </div>

                    <div className="border border-white/10 p-3">
                      <span className="text-[7px] uppercase tracking-[0.15em] text-white/25">
                        System Status
                      </span>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
                        <span className="text-[8px] text-white/50">
                          Operational
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating labels */}
            <div className="absolute -bottom-5 -left-5 hidden border border-white/10 bg-[#0b0b0b] px-5 py-4 sm:block">
              <span className="block text-[8px] uppercase tracking-[0.25em] text-white/30">
                Workflow
              </span>

              <span className="mt-1 block text-sm font-medium">
                One place. Full control.
              </span>
            </div>

            <div className="absolute -right-5 -top-5 hidden bg-[#737A1A] px-5 py-4 text-black sm:block">
              <span className="block text-[8px] uppercase tracking-[0.25em] text-black/55">
                Custom
              </span>

              <span className="mt-1 block text-sm font-semibold">
                Built around your team
              </span>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
            Dashboards · Workflows · Control
          </span>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
            IMX / Admin Panels
          </span>
        </div>
      </div>
    </section>
  );
}