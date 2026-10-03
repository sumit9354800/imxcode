"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navigation, serviceGroups } from "@/data/navigation";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================== */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  /* =========================================================
     BODY SCROLL LOCK + ESCAPE
  ========================================================== */

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  /* =========================================================
     RESET MOBILE STATE WHEN DESKTOP OPENS
  ========================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="sticky top-0 z-[100] w-full border-b border-white/10 bg-black text-white">
        <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-4 sm:h-[76px] sm:px-8 lg:px-12 xl:px-16">
          {/* =================================================
              BRAND
          ================================================== */}

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex shrink-0 items-center"
            aria-label="IMX Digital Studio home"
          >
            <Image
              src="/icons/navbar-light-log.png"
              alt="IMX Digital Studio"
              width={110}
              height={40}
              priority
              className="h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80 sm:h-9"
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              /* ===============================================
                 SERVICES
              ================================================ */

              if (item.label === "Services") {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className="
                        relative flex items-center gap-2
                        px-4 py-2
                        text-[13px] font-medium
                        text-white/70
                        transition-colors duration-200
                        hover:text-[#737A1A]
                      "
                    >
                      <span>Services</span>

                      <span
                        aria-hidden="true"
                        className="
                          text-[10px] text-[#737A1A]
                          transition-transform duration-300
                          group-hover:rotate-180
                        "
                      >
                        ↓
                      </span>

                      <span
                        className="
                          absolute bottom-0 left-4 right-4
                          h-px origin-left scale-x-0
                          bg-[#737A1A]
                          transition-transform duration-300
                          group-hover:scale-x-100
                        "
                      />
                    </Link>

                    {/* =========================================
                        DESKTOP MEGA MENU
                    ========================================== */}

                    <div
                      className="
                        pointer-events-none invisible
                        absolute left-1/2 top-full
                        w-[min(760px,calc(100vw-32px))]
                        -translate-x-1/2
                        translate-y-3
                        pt-4
                        opacity-0
                        transition-all duration-300
                        group-hover:pointer-events-auto
                        group-hover:visible
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <div
                        className="
                          overflow-hidden
                          rounded-2xl
                          border border-white/10
                          bg-black
                          shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                        "
                      >
                        {/* Top accent */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#737A1A] to-transparent" />

                        <div className="p-6">
                          <div className="grid grid-cols-3 gap-8">
                            {serviceGroups.map((group) => (
                              <div key={group.title}>
                                <p className="mb-4 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#737A1A]">
                                  {group.title}
                                </p>

                                <div className="space-y-1">
                                  {group.items.map((service) => (
                                    <Link
                                      key={service.href}
                                      href={service.href}
                                      className="
                                        group/item
                                        flex items-center justify-between
                                        rounded-lg
                                        px-3 py-2.5
                                        text-[13px]
                                        text-white/65
                                        transition-all duration-200
                                        hover:bg-[#737A1A]/10
                                        hover:text-white
                                      "
                                    >
                                      <span>{service.label}</span>

                                      <span
                                        className="
                                          translate-x-[-5px]
                                          text-[#737A1A]
                                          opacity-0
                                          transition-all duration-200
                                          group-hover/item:translate-x-0
                                          group-hover/item:opacity-100
                                        "
                                      >
                                        ↗
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* =====================================
                              MEGA MENU CTA
                          ====================================== */}

                          <div className="mt-6 flex items-center justify-between gap-6 border-t border-white/10 pt-5">
                            <div>
                              <p className="text-sm font-medium text-white">
                                Need something custom?
                              </p>

                              <p className="mt-1 text-xs text-white/40">
                                Tell us what you are building.
                              </p>
                            </div>

                            <Link
                              href="/contact"
                              className="
    group
    hidden h-10
    items-center gap-3
    rounded-full
    bg-[#737A1A]
    px-5
    text-[12px] font-medium
    text-white
    transition-all duration-300
    hover:bg-white
    hover:text-black
    xl:inline-flex
  "
                            >
                              <span>Start a project</span>

                              <span
                                aria-hidden="true"
                                className="transition-transform duration-200 group-hover:translate-x-1"
                              >
                                ↗
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              /* ===============================================
                 NORMAL DESKTOP NAVIGATION
              ================================================ */

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    group relative
                    px-4 py-2
                    text-[13px] font-medium
                    text-white/70
                    transition-colors duration-200
                    hover:text-[#737A1A]
                  "
                >
                  {item.label}

                  <span
                    className="
                      absolute bottom-0 left-4 right-4
                      h-px origin-left scale-x-0
                      bg-[#737A1A]
                      transition-transform duration-300
                      group-hover:scale-x-100
                    "
                  />
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              RIGHT CONTROLS
          ================================================== */}

          <div className="flex items-center gap-2.5">
            {/* Desktop CTA */}

            <Link
              href="/contact"
              className="
  group
  hidden h-10
  items-center gap-3
  rounded-full
  bg-[#737A1A]
  px-5
  text-[12px] font-medium
  text-white
  transition-all duration-300
  hover:bg-white
  hover:text-black
  lg:inline-flex
"
            >
              <span>Start a project</span>

              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>

            {/* Mobile Menu Button */}

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="
    relative
    inline-flex h-10 w-10
    items-center justify-center
    rounded-full
    border border-white/15
    bg-white/[0.03]
    text-white
    transition-all duration-300
    hover:border-[#737A1A]
    hover:bg-[#737A1A]
    xl:hidden
  "
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <span className="flex w-4 flex-col gap-[5px]">
                <span className="block h-px w-full bg-current" />
                <span className="block h-px w-3/4 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        aria-hidden={!mobileOpen}
        onClick={closeMobileMenu}
        className={`
    fixed inset-0 z-[110]
    bg-black/70
    backdrop-blur-sm
    transition-all duration-300
    xl:hidden
    ${
      mobileOpen
        ? "pointer-events-auto visible opacity-100"
        : "pointer-events-none invisible opacity-0"
    }
  `}
      />

      {/* =====================================================
          MOBILE SIDEBAR
      ====================================================== */}

      <aside
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        className={`
    fixed right-0 top-0 z-[120]
    flex h-[100dvh]
    w-[min(88vw,390px)]
    flex-col
    border-l border-white/10
    bg-[#050505]
    shadow-[-30px_0_80px_rgba(0,0,0,0.45)]
    transition-transform duration-500
    ease-[cubic-bezier(0.22,1,0.36,1)]
    xl:hidden
    ${mobileOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        {/* ===================================================
            SIDEBAR HEADER
        ==================================================== */}

        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-white/10 px-5">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center"
          >
            <Image
              src="/icons/navbar-light-log.png"
              alt="IMX Digital Studio"
              width={100}
              height={36}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={closeMobileMenu}
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              border border-white/10
              text-white/60
              transition-all duration-300
              hover:border-[#737A1A]
              hover:bg-[#737A1A]
              hover:text-white
            "
            aria-label="Close navigation menu"
          >
            <span className="relative h-4 w-4">
              <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        {/* ===================================================
            SIDEBAR CONTENT
        ==================================================== */}

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6">
          {/* Small system label */}

          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#737A1A]">
              Navigation
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
              IMX / 001
            </span>
          </div>

          <nav className="flex flex-col" aria-label="Mobile navigation">
            {navigation.map((item) => {
              /* =============================================
                 MOBILE SERVICES
              ============================================== */

              if (item.label === "Services") {
                return (
                  <div key={item.href} className="border-b border-white/10">
                    {/* Services trigger */}

                    <button
                      type="button"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      className="
                        group
                        flex w-full
                        items-center justify-between
                        py-4
                        text-left
                        text-base font-medium
                        text-white
                        transition-colors duration-200
                        hover:text-[#737A1A]
                      "
                      aria-expanded={servicesOpen}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`
                            h-1.5 w-1.5
                            rounded-full
                            bg-[#737A1A]
                            transition-transform duration-300
                            ${servicesOpen ? "scale-125" : "scale-75"}
                          `}
                        />

                        <span>Services</span>
                      </span>

                      {/* Plus / minus */}

                      <span
                        className={`
                          relative flex h-7 w-7
                          items-center justify-center
                          rounded-full
                          border
                          transition-all duration-300
                          ${
                            servicesOpen
                              ? "rotate-180 border-[#737A1A]/40 bg-[#737A1A]/10"
                              : "border-white/10"
                          }
                        `}
                      >
                        <span className="absolute h-px w-2.5 bg-current" />

                        <span
                          className={`
                            absolute h-px w-2.5
                            bg-current
                            transition-transform duration-300
                            ${servicesOpen ? "rotate-0" : "rotate-90"}
                          `}
                        />
                      </span>
                    </button>

                    {/* =========================================
                        SERVICES ACCORDION
                    ========================================== */}

                    <div
                      className={`
                        grid
                        transition-[grid-template-rows,opacity]
                        duration-400
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${
                          servicesOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="pb-5 pl-4">
                          {serviceGroups.map((group, groupIndex) => (
                            <div
                              key={group.title}
                              className={`
                                ${
                                  groupIndex > 0
                                    ? "mt-5 border-t border-white/[0.06] pt-5"
                                    : ""
                                }
                              `}
                            >
                              <p className="mb-2 font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#737A1A]">
                                {group.title}
                              </p>

                              <div className="space-y-0.5">
                                {group.items.map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    onClick={closeMobileMenu}
                                    className="
                                      group/service
                                      flex items-center justify-between
                                      rounded-lg
                                      px-3 py-2.5
                                      text-[13px]
                                      text-white/55
                                      transition-all duration-200
                                      hover:bg-white/[0.04]
                                      hover:text-white
                                    "
                                  >
                                    <span>{service.label}</span>

                                    <span
                                      className="
                                        translate-x-[-4px]
                                        text-[#737A1A]
                                        opacity-0
                                        transition-all duration-200
                                        group-hover/service:translate-x-0
                                        group-hover/service:opacity-100
                                      "
                                    >
                                      ↗
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              /* =============================================
                 NORMAL MOBILE NAV
              ============================================== */

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="
                    group
                    flex items-center justify-between
                    border-b border-white/10
                    py-4
                    text-base font-medium
                    text-white
                    transition-colors duration-200
                    hover:text-[#737A1A]
                  "
                >
                  <span>{item.label}</span>

                  <span
                    className="
                      translate-x-[-5px]
                      text-[#737A1A]
                      opacity-0
                      transition-all duration-200
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  >
                    ↗
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              MOBILE CTA
          ================================================== */}

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="
              group
              mt-7
              flex h-12
              items-center justify-center
              gap-3
              rounded-full
              bg-[#737A1A]
              px-5
              text-[12px] font-medium
              text-white
              transition-all duration-300
              hover:bg-white
              hover:text-black
            "
          >
            <span>Start a project</span>

            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              ↗
            </span>
          </Link>

          {/* =================================================
              MOBILE FOOTER INFO
          ================================================== */}

          <div className="mt-8 border-t border-white/10 pt-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                Digital Studio
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#737A1A]/70">
                India
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
