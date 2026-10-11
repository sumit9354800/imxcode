"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Activity,
  Check,
  ChevronRight,
  Command,
  Database,
  Layers3,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  Search,
  Settings2,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const metrics = [
  {
    label: "Total revenue",
    value: "$48,290",
    change: "+12.8%",
    bars: [28, 42, 35, 55, 46, 68, 53, 76, 62, 88, 71, 96],
  },
  {
    label: "Active users",
    value: "2,840",
    change: "+8.4%",
    bars: [35, 48, 40, 61, 52, 72, 64, 80, 69, 91, 77, 100],
  },
  {
    label: "Conversion rate",
    value: "6.24%",
    change: "+2.1%",
    bars: [30, 38, 45, 39, 57, 51, 67, 60, 76, 69, 86, 95],
  },
];

const activityRows = [
  {
    initials: "AC",
    name: "Acme Corporation",
    type: "Enterprise plan",
    amount: "$2,400",
    status: "Completed",
  },
  {
    initials: "ST",
    name: "Studio North",
    type: "Professional plan",
    amount: "$890",
    status: "Processing",
  },
  {
    initials: "MK",
    name: "Market House",
    type: "Starter plan",
    amount: "$320",
    status: "Completed",
  },
];

const workflowSteps = [
  { number: "01", title: "Capture", description: "Collect the right data" },
  { number: "02", title: "Process", description: "Automate the workflow" },
  { number: "03", title: "Deliver", description: "Turn insight into action" },
];

const navigationItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Analytics", icon: Activity, active: false },
  { label: "Customers", icon: Users, active: false },
  { label: "Workflows", icon: Workflow, active: false },
  { label: "Integrations", icon: Database, active: false },
];

export default function WebApplicationHero() {
  const [activeMetric, setActiveMetric] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dashboardReady, setDashboardReady] = useState(false);

  useEffect(() => {
    setDashboardReady(true);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom,black 0%,black 68%,transparent 100%)",
        }}
      />

      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-12 h-[520px] w-[520px] rounded-full bg-[#737A1A]/15 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-[15%] h-[420px] w-[420px] rounded-full bg-[#737A1A]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24 xl:px-16">
        {/* Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#A0A73C]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55 sm:text-xs">
              Custom Web Applications
            </span>
          </div>

          <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/35 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A0A73C]" />
            Engineered for your workflow
          </div>
        </div>

        {/* Hero content */}
        <div className="grid items-center gap-14 py-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 lg:py-16 xl:gap-16">
          {/* Left content */}
          <div className="relative z-10 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/[0.025] px-3 py-2">
              <Command size={13} className="text-[#A0A73C]" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-white/55">
                Your business. Your platform.
              </span>
            </div>

            <h1 className="text-[clamp(3.1rem,6.3vw,7rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
              Software built
              <span className="block">around your</span>
              <span className="mt-2 block text-[#91982F]">
                business.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              We build custom web applications that turn complex processes,
              data and workflows into intuitive digital experiences your team
              and customers can actually use.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#application-types"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#737A1A] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A0A73C] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Explore applications

                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#737A1A]/70 hover:bg-[#737A1A]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A0A73C]"
              >
                Discuss your project

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* Capabilities */}
            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/50">
              {[
                "Custom-built systems",
                "Connected workflows",
                "Scalable architecture",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check size={13} className="text-[#A0A73C]" />
                  {item}
                </span>
              ))}
            </div>

            {/* Workflow process */}
            <div className="mt-12 grid grid-cols-3 border-t border-white/10 pt-5">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={
                    index === 0
                      ? "pr-3"
                      : "border-l border-white/10 pl-4 sm:pl-6"
                  }
                >
                  <span className="font-mono text-[10px] text-[#A0A73C]">
                    / {step.number}
                  </span>

                  <p className="mt-2 text-sm font-semibold text-white/90">
                    {step.title}
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-white/40 sm:text-xs">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: application preview */}
          <div className="relative mx-auto w-full max-w-[760px] lg:ml-auto">
            {/* Technical framing */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 border border-white/[0.06] sm:-inset-6"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[12%] rounded-full bg-[#737A1A]/10 blur-[90px]"
            />

            {/* Floating top status */}
            <div className="absolute -right-2 -top-5 z-20 hidden items-center gap-3 border border-white/10 bg-[#10110b]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex lg:-right-5">
              <div className="flex h-8 w-8 items-center justify-center bg-[#737A1A]/20 text-[#A0A73C]">
                <Zap size={15} />
              </div>

              <div>
                <p className="text-[9px] font-medium text-white/85">
                  Workflow engine
                </p>

                <p className="mt-1 flex items-center gap-1.5 text-[8px] text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A0A73C]" />
                  All systems operational
                </p>
              </div>
            </div>

            {/* Dashboard frame */}
            <div className="relative overflow-hidden border border-white/10 bg-[#090a08] shadow-[0_35px_100px_rgba(0,0,0,0.6)]">
              {/* Browser chrome */}
              <div className="flex h-12 items-center justify-between border-b border-white/10 px-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-[#737A1A]" />
                </div>

                <div className="mx-3 flex h-7 min-w-0 max-w-[220px] flex-1 items-center justify-center gap-2 border border-white/[0.07] bg-white/[0.025] px-3">
                  <LockKeyhole
                    size={10}
                    className="shrink-0 text-[#A0A73C]"
                  />

                  <span className="truncate text-[8px] tracking-wide text-white/35">
                    app.yourbusiness.com
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden text-[8px] uppercase tracking-wider text-white/35 sm:block">
                    Live preview
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A0A73C]" />
                </div>
              </div>

              {/* App header */}
              <div className="flex items-center justify-between border-b border-white/[0.07] px-3 py-3 sm:px-5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#737A1A]/20 text-[#A0A73C]">
                    <Layers3 size={15} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-semibold text-white/90 sm:text-xs">
                      Workspace overview
                    </p>
                    <p className="mt-1 text-[8px] text-white/35">
                      Monday, 09:41 AM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Search workspace preview"
                    className="flex h-8 w-8 items-center justify-center border border-white/10 text-white/40 transition-colors hover:border-[#737A1A]/50 hover:text-[#A0A73C]"
                  >
                    <Search size={13} />
                  </button>

                  <div className="flex h-8 w-8 items-center justify-center border border-[#737A1A]/30 bg-[#737A1A]/15 text-[9px] font-semibold text-[#C0C66A]">
                    IM
                  </div>
                </div>
              </div>

              {/* Dashboard body */}
              <div className="grid grid-cols-[42px_minmax(0,1fr)] sm:grid-cols-[150px_minmax(0,1fr)]">
                {/* Sidebar */}
                <aside className="border-r border-white/[0.07] bg-white/[0.012] p-2 sm:p-3">
                  <div className="mb-4 hidden items-center justify-between px-2 sm:flex">
                    <span className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                      Workspace
                    </span>

                    <Settings2 size={11} className="text-white/25" />
                  </div>

                  <nav aria-label="Dashboard preview" className="space-y-1">
                    {navigationItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className={`flex min-h-9 items-center justify-center gap-2 px-2 sm:justify-start ${
                            item.active
                              ? "border border-[#737A1A]/25 bg-[#737A1A]/15 text-[#C0C66A]"
                              : "text-white/35"
                          }`}
                          title={item.label}
                        >
                          <Icon size={13} className="shrink-0" />

                          <span className="hidden truncate text-[9px] sm:block">
                            {item.label}
                          </span>

                          {item.active && (
                            <span className="ml-auto hidden h-1 w-1 rounded-full bg-[#A0A73C] sm:block" />
                          )}
                        </div>
                      );
                    })}
                  </nav>

                  <div className="mt-6 hidden border-t border-white/[0.07] pt-4 sm:block">
                    <p className="px-2 text-[8px] uppercase tracking-[0.18em] text-white/25">
                      System status
                    </p>

                    <div className="mt-3 flex items-center gap-2 px-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A0A73C]" />
                      <span className="text-[8px] text-white/45">
                        Connected
                      </span>
                    </div>
                  </div>
                </aside>

                {/* Main dashboard */}
                <div className="min-w-0 p-3 sm:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold tracking-tight text-white/90 sm:text-base">
                        Business analytics
                      </p>

                      <p className="mt-1 text-[8px] leading-4 text-white/35 sm:text-[9px]">
                        Monitor your business performance in one place.
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 border border-white/10 px-2 py-1.5 text-[8px] text-white/45">
                      Last 30 days
                      <ChevronRight size={10} />
                    </div>
                  </div>

                  {/* Interactive metrics */}
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {metrics.map((metric, index) => (
                      <button
                        key={metric.label}
                        type="button"
                        onClick={() => setActiveMetric(index)}
                        aria-pressed={activeMetric === index}
                        className={`min-w-0 border p-2 text-left transition-colors duration-200 sm:p-3 ${
                          activeMetric === index
                            ? "border-[#737A1A]/50 bg-[#737A1A]/[0.09]"
                            : "border-white/[0.08] bg-white/[0.015] hover:border-white/20"
                        }`}
                      >
                        <span className="block truncate text-[7px] text-white/40 sm:text-[8px]">
                          {metric.label}
                        </span>

                        <span className="mt-2 block truncate text-[12px] font-semibold tracking-tight text-white/90 sm:text-lg">
                          {metric.value}
                        </span>

                        <span className="mt-1 flex items-center gap-1 text-[7px] text-[#A0A73C] sm:text-[8px]">
                          <Activity size={9} />
                          {metric.change}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Analytics chart */}
                  <div className="mt-3 border border-white/[0.08] bg-white/[0.012] p-3 sm:p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-[9px] font-medium text-white/75 sm:text-[10px]">
                          {metrics[activeMetric].label}
                        </p>

                        <p className="mt-1 text-[8px] text-white/30">
                          Performance overview
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#A0A73C]" />
                        <span className="text-[7px] text-white/35">
                          Current period
                        </span>
                      </div>
                    </div>

                    <div className="relative mt-4 h-[104px]">
                      <div className="absolute inset-0 flex flex-col justify-between">
                        {[0, 1, 2, 3].map((line) => (
                          <div
                            key={line}
                            className="border-t border-dashed border-white/[0.07]"
                          />
                        ))}
                      </div>

                      <div className="absolute inset-0 flex items-end gap-1.5 px-1">
                        {metrics[activeMetric].bars.map((bar, index) => (
                          <div
                            key={index}
                            className="relative flex h-full min-w-0 flex-1 items-end"
                          >
                            <div
                              className={`w-full transition-[height] duration-500 ${
                                index ===
                                metrics[activeMetric].bars.length - 1
                                  ? "bg-[#A0A73C]"
                                  : index >=
                                      metrics[activeMetric].bars.length - 4
                                    ? "bg-[#737A1A]/65"
                                    : "bg-[#737A1A]/30"
                              }`}
                              style={{ height: `${bar}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-2 flex justify-between font-mono text-[7px] text-white/25">
                      <span>01 JUN</span>
                      <span>08 JUN</span>
                      <span>15 JUN</span>
                      <span>22 JUN</span>
                      <span>30 JUN</span>
                    </div>
                  </div>

                  {/* Activity table */}
                  <div className="mt-3 border border-white/[0.08]">
                    <div className="flex items-center justify-between border-b border-white/[0.07] px-3 py-2.5">
                      <span className="text-[8px] font-medium text-white/70 sm:text-[9px]">
                        Recent activity
                      </span>

                      <span className="text-[7px] text-[#A0A73C]">
                        View all
                      </span>
                    </div>

                    <div className="divide-y divide-white/[0.05]">
                      {activityRows.map((row) => (
                        <div
                          key={row.name}
                          className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-2"
                        >
                          <div className="flex min-w-0 items-center gap-2">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center border border-white/10 bg-white/[0.04] text-[7px] text-white/55">
                              {row.initials}
                            </div>

                            <div className="min-w-0">
                              <p className="truncate text-[8px] text-white/75">
                                {row.name}
                              </p>

                              <p className="mt-0.5 truncate text-[7px] text-white/30">
                                {row.type}
                              </p>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-[8px] text-white/70">
                              {row.amount}
                            </p>

                            <p
                              className={`mt-0.5 text-[7px] ${
                                row.status === "Completed"
                                  ? "text-[#A0A73C]"
                                  : "text-white/35"
                              }`}
                            >
                              {row.status}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard bottom bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.07] px-3 py-2.5 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A0A73C]" />
                  <span className="text-[7px] text-white/35">
                    Application systems connected
                  </span>
                </div>

                <span className="font-mono text-[7px] text-white/25">
                  BUILD / DEPLOY / SCALE
                </span>
              </div>
            </div>

            {/* Floating integration card */}
            <div className="absolute -bottom-5 -left-3 z-20 hidden border border-[#737A1A]/30 bg-[#101108]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:block lg:-left-7">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center bg-[#737A1A]/20 text-[#A0A73C]">
                  <Workflow size={15} />
                </div>

                <div>
                  <p className="text-[9px] font-medium text-white/85">
                    Connected workflows
                  </p>

                  <p className="mt-1 text-[8px] text-white/40">
                    One seamless system
                  </p>
                </div>
              </div>
            </div>

            {/* Floating security badge */}
            <div className="absolute bottom-[19%] -right-2 z-20 hidden border border-white/10 bg-[#101010]/95 px-3 py-3 shadow-xl backdrop-blur-xl sm:block lg:-right-5">
              <div className="flex items-center gap-2">
                <LockKeyhole size={13} className="text-[#A0A73C]" />

                <div>
                  <p className="text-[8px] font-medium text-white/80">
                    Secure by design
                  </p>
                  <p className="mt-1 text-[7px] text-white/35">
                    Access controlled
                  </p>
                </div>
              </div>
            </div>

            {/* Optional visual status */}
            <div className="absolute left-3 top-3 z-20 flex items-center gap-2 border border-white/10 bg-black/80 px-2.5 py-2 backdrop-blur sm:left-5 sm:top-5">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  dashboardReady ? "bg-[#A0A73C]" : "bg-white/30"
                }`}
              />

              <span className="text-[7px] uppercase tracking-[0.15em] text-white/55">
                {dashboardReady ? "Interactive preview" : "App preview"}
              </span>
            </div>

            {/* Mobile menu preview */}
            <div className="absolute right-3 top-3 z-30 sm:hidden">
              <button
                type="button"
                aria-label={menuOpen ? "Close preview menu" : "Open preview menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                className="flex h-8 w-8 items-center justify-center border border-white/15 bg-black/90 text-white/70"
              >
                <Menu size={14} />
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-10 w-36 border border-white/10 bg-[#10110b] p-2 shadow-xl">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className={`flex items-center gap-2 px-2 py-2 text-[9px] ${
                          item.active ? "text-[#C0C66A]" : "text-white/50"
                        }`}
                      >
                        <Icon size={12} />
                        {item.label}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/35 sm:text-[10px]">
            Custom software · Digital workflows · Business systems
          </span>

          <Link
            href="#application-types"
            className="group inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-[#A0A73C] sm:text-[10px]"
          >
            Explore what is possible

            <ArrowDown
              size={13}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </Link>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#737A1A]/60 to-transparent"
      />
    </section>
  );
}
