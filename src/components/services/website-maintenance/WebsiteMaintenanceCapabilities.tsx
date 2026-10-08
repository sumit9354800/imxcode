"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { websiteMaintenanceCapabilities } from "@/data/services/website-maintenance";

export default function WebsiteMaintenanceCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCapability = websiteMaintenanceCapabilities[activeIndex];

  return (
    <section className="bg-black px-6 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#737A1A]">
              Maintenance capabilities
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Keep every part
              <span className="block text-[#737A1A]">
                working together.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/50 lg:ml-auto">
            Reliable maintenance goes beyond fixing problems. We look after
            the technical health, security, performance and ongoing evolution
            of your website.
          </p>
        </div>

        {/* Capability selector */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-4">
          {websiteMaintenanceCapabilities.map((capability, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={capability.number}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative min-h-[185px] p-6 text-left transition-colors sm:p-7 ${
                  isActive
                    ? "bg-[#737A1A] text-white"
                    : "bg-black text-white/55 hover:bg-white/[0.045] hover:text-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`text-xs ${
                      isActive ? "text-white/70" : "text-white/25"
                    }`}
                  >
                    {capability.number}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className={
                      isActive ? "text-white" : "text-white/20"
                    }
                  />
                </div>

                <h3 className="mt-12 text-base font-medium">
                  {capability.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active capability */}
        <div className="mt-px overflow-hidden rounded-b-[2rem] border-x border-b border-white/10">
          <div className="grid gap-10 bg-[#0a0a0a] p-7 sm:p-10 lg:grid-cols-[1fr_1fr] lg:p-14">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#737A1A]">
                <span className="h-px w-7 bg-[#737A1A]" />
                Capability {activeCapability.number}
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                {activeCapability.title}
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                {activeCapability.description}
              </p>
            </div>

            <div className="lg:border-l lg:border-white/10 lg:pl-12">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                Included
              </p>

              <div className="mt-5">
                {activeCapability.items.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-white/10 py-4 first:border-t"
                  >
                    <span className="text-sm text-white/75">
                      {item}
                    </span>

                    <span className="text-xs text-[#737A1A]">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-white/40">
            The best maintenance is proactive — solving issues early and
            continuously improving the website instead of waiting for problems
            to become critical.
          </p>

          <span className="text-xs uppercase tracking-[0.18em] text-[#737A1A]">
            Protect × Maintain × Improve
          </span>
        </div>
      </div>
    </section>
  );
}