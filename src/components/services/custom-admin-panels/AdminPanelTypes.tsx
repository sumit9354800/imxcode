"use client";

import { useState } from "react";
import {
  adminPanelTypes,
  type AdminPanelType,
} from "@/data/services/custom-admin-panels";
import {
  BarChart3,
  FileText,
  ShoppingCart,
  Users,
  Workflow,
  Settings2,
} from "lucide-react";

const typeIcons = [
  BarChart3,
  FileText,
  ShoppingCart,
  Users,
  BarChart3,
  Workflow,
];

export default function AdminPanelTypes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeType: AdminPanelType = adminPanelTypes[activeIndex];
  const ActiveIcon = typeIcons[activeIndex];

  return (
    <section
      id="admin-panel-types"
      className="relative overflow-hidden bg-white text-black"
    >
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* Header */}
        <div className="grid gap-8 border-b border-black/10 pb-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45">
                Systems We Build
              </span>
            </div>

            <p className="mt-7 max-w-sm text-sm leading-6 text-black/50">
              Different teams need different controls. We shape the admin
              experience around the information, people and workflows that
              matter to your business.
            </p>
          </div>

          <h2 className="max-w-5xl text-[clamp(2.5rem,5vw,5.4rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
            Your operations,
            <br />
            <span className="text-[#737A1A]">your control center.</span>
          </h2>
        </div>

        {/* Main */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          {/* Types */}
          <div className="border-t border-black/10">
            {adminPanelTypes.map((type, index) => {
              const active = activeIndex === index;

              return (
                <button
                  key={type.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group grid w-full grid-cols-[42px_1fr_24px] items-center gap-4 border-b border-black/10 py-5 text-left sm:py-6"
                >
                  <span
                    className={`text-[10px] font-medium tracking-[0.18em] transition-colors duration-300 ${
                      active ? "text-[#737A1A]" : "text-black/25"
                    }`}
                  >
                    {type.number}
                  </span>

                  <div>
                    <h3
                      className={`text-lg font-medium tracking-[-0.025em] transition-all duration-300 sm:text-xl ${
                        active
                          ? "translate-x-2 text-black"
                          : "text-black/45 group-hover:translate-x-1 group-hover:text-black"
                      }`}
                    >
                      {type.title}
                    </h3>

                    <div
                      className={`mt-2 h-px origin-left bg-[#737A1A] transition-transform duration-500 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </div>

                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-300 ${
                      active
                        ? "border-[#737A1A] bg-[#737A1A] text-black"
                        : "border-black/10 text-black/20 group-hover:border-black/25"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active preview */}
          <div className="relative min-h-[470px] overflow-hidden bg-black text-white sm:min-h-[520px]">
            {/* Background */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
            />

            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#737A1A]/10 blur-[100px]"
            />

            <div className="relative flex min-h-[470px] flex-col justify-between p-7 sm:min-h-[520px] sm:p-10 lg:p-12">
              {/* Top */}
              <div className="flex items-start justify-between gap-6">
                <div className="flex h-12 w-12 items-center justify-center border border-[#737A1A]/30 bg-[#737A1A]/10 text-[#737A1A]">
                  <ActiveIcon size={21} strokeWidth={1.5} />
                </div>

                <span className="text-6xl font-semibold tracking-[-0.07em] text-white/[0.05] sm:text-8xl">
                  {activeType.number}
                </span>
              </div>

              {/* Content */}
              <div className="mt-12">
                <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#737A1A]">
                  Admin System / {activeType.number}
                </span>

                <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                  {activeType.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                  {activeType.description}
                </p>
              </div>

              {/* Mini system map */}
              <div className="mt-12 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 flex-1 items-center border border-[#737A1A]/30 bg-[#737A1A]/10 px-3">
                    <span className="text-[8px] uppercase tracking-[0.18em] text-[#737A1A]">
                      Dashboard
                    </span>
                  </div>

                  <span className="h-px w-5 bg-white/15" />

                  <div className="flex h-9 flex-1 items-center border border-white/10 px-3">
                    <span className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                      Data
                    </span>
                  </div>

                  <span className="h-px w-5 bg-white/15" />

                  <div className="flex h-9 flex-1 items-center border border-white/10 px-3">
                    <span className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                      Actions
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <div className="flex items-center gap-2">
                  <Settings2
                    size={13}
                    strokeWidth={1.5}
                    className="text-white/25"
                  />

                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                    Custom Workflow
                  </span>
                </div>

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#737A1A]">
                  IMX Systems
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-14 flex justify-end">
          <p className="max-w-2xl border-l-2 border-[#737A1A] pl-5 text-lg font-medium leading-7 tracking-[-0.02em] sm:text-xl sm:leading-8">
            The best admin panel does not add complexity. It removes the
            unnecessary steps between your team and the work that matters.
          </p>
        </div>
      </div>
    </section>
  );
}