"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation, serviceGroups } from "@/data/navigation";
import Image from "next/image";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* =====================================================
            BRAND
        ====================================================== */}
        <Link
          href="/"
          className="group flex items-center"
          aria-label="IMX Digital Studio home"
        >
          <Image
            src="/icons/navbar-light-log.png"
            alt="IMX Digital Studio"
            width={110}
            height={40}
            priority
            className="h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            {
              /* -------------------------------------------------
                SERVICES
            -------------------------------------------------- */
            }
            if (item.label === "Services") {
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="relative flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-white/70 transition-colors duration-200 hover:text-[#737A1A]"
                  >
                    <span>Services</span>

                    <span
                      aria-hidden="true"
                      className="text-[10px] text-[#737A1A] transition-transform duration-200 group-hover:rotate-180"
                    >
                      ↓
                    </span>

                    <span className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-[#737A1A] transition-transform duration-200 group-hover:scale-x-100" />
                  </Link>

                  {/* =================================================
                      SERVICES MEGA MENU
                  ================================================== */}
                  <div className="pointer-events-none invisible absolute left-1/2 top-full w-[760px] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-2xl border border-white/10 bg-black p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
                      <div className="grid grid-cols-3 gap-8">
                        {serviceGroups.map((group) => (
                          <div key={group.title}>
                            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#737A1A]">
                              {group.title}
                            </p>

                            <div className="space-y-1">
                              {group.items.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className="group/item flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] text-white/70 transition-colors duration-200 hover:bg-[#737A1A]/10 hover:text-[#737A1A]"
                                >
                                  <span>{service.label}</span>

                                  <span className="translate-x-[-4px] text-[#737A1A] opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100">
                                    ↗
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* =================================================
                          MEGA MENU CTA
                      ================================================== */}
                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                        <div>
                          <p className="text-sm font-medium text-white">
                            Need something custom?
                          </p>

                          <p className="mt-1 text-xs text-white/50">
                            Tell us what you are building.
                          </p>
                        </div>

                        <Link
                          href="/contact"
                          className="group inline-flex h-10 items-center gap-3 rounded-full bg-[#737A1A] px-5 text-[12px] font-medium text-white transition-colors duration-300 hover:bg-white hover:text-black"
                        >
                          <span>Start a project</span>

                          <span
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                          >
                            ↗
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            {
              /* -------------------------------------------------
                NORMAL NAVIGATION
            -------------------------------------------------- */
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-[13px] font-medium text-white/70 transition-colors duration-200 hover:text-[#737A1A]"
              >
                {item.label}

                <span className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-[#737A1A] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            );
          })}
        </nav>

        {/* =====================================================
            RIGHT CONTROLS
        ====================================================== */}
        <div className="flex items-center gap-2.5">
          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="group hidden h-10 items-center gap-3 rounded-full bg-[#737A1A] px-5 text-[12px] font-medium text-white transition-colors duration-300 hover:bg-white hover:text-black md:inline-flex"
          >
            <span>Start a project</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black text-white transition-colors duration-300 hover:border-[#737A1A] hover:bg-[#737A1A] hover:text-white md:hidden"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >
            <span className="flex w-4 flex-col gap-[5px]">
              <span className="block h-px w-full bg-current" />
              <span className="block h-px w-3/4 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {/* =======================================================
          MOBILE NAVIGATION
      ======================================================== */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black px-5 py-6 md:hidden">
          <nav className="flex flex-col">
            {navigation.map((item) => {
              {
                /* -------------------------------------------------
                  MOBILE SERVICES
              -------------------------------------------------- */
              }
              if (item.label === "Services") {
                return (
                  <div key={item.href} className="border-b border-white/10">
                    <button
                      type="button"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-white transition-colors duration-200 hover:text-[#737A1A]"
                    >
                      <span>Services</span>

                      <span className="text-[#737A1A]">
                        {servicesOpen ? "↑" : "↓"}
                      </span>
                    </button>

                    {servicesOpen && (
                      <div className="pb-4">
                        {serviceGroups.map((group) => (
                          <div key={group.title} className="mb-5">
                            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#737A1A]">
                              {group.title}
                            </p>

                            <div className="space-y-1">
                              {group.items.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2 text-sm text-white/70 transition-colors duration-200 hover:text-[#737A1A]"
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              {
                /* -------------------------------------------------
                  NORMAL MOBILE NAV
              -------------------------------------------------- */
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-white/10 py-4 text-base font-medium text-white transition-colors duration-200 hover:text-[#737A1A]"
                >
                  {item.label}
                </Link>
              );
            })}

            {/* =================================================
                MOBILE CTA
            ================================================== */}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-5 inline-flex h-11 items-center justify-center gap-3 rounded-full bg-[#737A1A] px-5 text-[12px] font-medium text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              <span>Start a project</span>

              <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
