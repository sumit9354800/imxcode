"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { industriesHero } from "@/data/industries-hero";
import { useEffect, useState } from "react";

const industryCards = [
  {
    title: "Education",
    subtitle: "Digital Learning",
    icon: GraduationCap,
    className: "industry-card-education",
  },
  {
    title: "E-Commerce",
    subtitle: "Digital Commerce",
    icon: ShoppingBag,
    className: "industry-card-commerce",
  },
  {
    title: "Business",
    subtitle: "Business Systems",
    icon: BriefcaseBusiness,
    className: "industry-card-business",
  },
  {
    title: "Healthcare",
    subtitle: "Health Technology",
    icon: HeartPulse,
    className: "industry-card-health",
  },
];

export default function IndustriesHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-black text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0">
        {/* Technical grid */}
        <div className="absolute inset-0 industries-grid opacity-[0.16]" />

        {/* Radial atmosphere */}
        <div className="absolute left-[65%] top-[45%] h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#737A1A]/[0.08] blur-[130px]" />

        <div className="absolute left-[75%] top-[15%] h-[260px] w-[260px] rounded-full bg-[#737A1A]/[0.05] blur-[100px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#000_82%)]" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* =====================================================
              LEFT
          ====================================================== */}

          <div className="relative z-20 max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#737A1A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/50">
                Industries We Transform
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
              {industriesHero.title}
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              {industriesHero.description}
            </p>

            {/* CTA */}
       <div className="mt-10 flex flex-wrap items-center gap-4">
  {/* Primary CTA */}
  <Link
    href={industriesHero.primaryAction.href}
    className="group inline-flex items-center gap-3 rounded-full bg-[#737A1A] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#858D20]"
  >
    {industriesHero.primaryAction.label}

    <ArrowUpRight
      size={17}
      strokeWidth={1.8}
      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </Link>

  {/* Secondary CTA */}
  <Link
    href={industriesHero.secondaryAction.href}
    className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#737A1A]/40 hover:bg-[#737A1A]/10 hover:text-white"
  >
    {industriesHero.secondaryAction.label}

    <ArrowUpRight
      size={16}
      strokeWidth={1.6}
      className="opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
    />
  </Link>
</div>

            {/* Bottom metadata */}
            <div className="mt-16 flex gap-10 border-t border-white/10 pt-6">
              <div>
                <p className="text-xl font-medium text-white">04</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Core Industries
                </p>
              </div>

              <div>
                <p className="text-xl font-medium text-white">360°</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Digital Solutions
                </p>
              </div>

              <div>
                <p className="text-xl font-medium text-white">IMX</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Digital Studio
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — 3D INDUSTRY ECOSYSTEM
          ====================================================== */}

          <div
            className="relative mx-auto h-[560px] w-full max-w-[650px]"
            style={{
              perspective: "1400px",
            }}
          >
            <div
              className="absolute inset-0 transition-transform duration-500 ease-out"
              style={{
                transform: `
                  rotateX(${-mouse.y * 3}deg)
                  rotateY(${mouse.x * 5}deg)
                  translateZ(0)
                `,
                transformStyle: "preserve-3d",
              }}
            >
              {/* =================================================
                  BACK DECORATIVE FRAME
              ================================================== */}

              <div
                className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-[38px] border border-white/[0.06]"
                style={{
                  transform: "translate(-50%, -50%) rotate(18deg)",
                }}
              />

              <div
                className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-[#737A1A]/10"
                style={{
                  transform: "translate(-50%, -50%) rotate(-18deg)",
                }}
              />

              {/* =================================================
                  CONNECTING LINES
              ================================================== */}

              <div className="absolute left-[23%] top-[28%] h-px w-[55%] origin-left rotate-[24deg] bg-gradient-to-r from-transparent via-[#737A1A]/40 to-transparent" />

              <div className="absolute left-[26%] top-[69%] h-px w-[50%] origin-left rotate-[-23deg] bg-gradient-to-r from-transparent via-[#737A1A]/35 to-transparent" />

              <div className="absolute left-[48%] top-[24%] h-[280px] w-px rotate-[18deg] bg-gradient-to-b from-transparent via-[#737A1A]/25 to-transparent" />

              {/* =================================================
                  CENTRAL CORE
              ================================================== */}

              <div
                className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* outer glow */}
                <div className="absolute inset-[-60px] rounded-full bg-[#737A1A]/10 blur-[60px]" />

                {/* rotating ring */}
                <div className="absolute inset-0 animate-industry-ring rounded-full border border-[#737A1A]/30" />

                <div className="absolute inset-[18px] rounded-full border border-white/[0.07]" />

                {/* dotted ring */}
                <div className="absolute inset-[32px] rounded-full border border-dashed border-[#737A1A]/25" />

                {/* Core sphere */}
                <div className="absolute left-1/2 top-1/2 h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#737A1A]/30 via-black to-black shadow-[0_0_80px_rgba(115,122,26,0.25)]">
                  <div className="absolute inset-[8px] rounded-full border border-[#737A1A]/30" />

                  <div className="absolute inset-[22px] rounded-full bg-[#737A1A]/10 blur-xl" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex h-16 w-16 items-center justify-center">
                      <div className="absolute inset-0 rotate-45 border border-[#737A1A]/60 bg-[#737A1A]/10" />

                      <Sparkles
                        size={22}
                        strokeWidth={1.5}
                        className="relative z-10 text-[#A5AC42]"
                      />
                    </div>
                  </div>
                </div>

                {/* Core label */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">
                    IMX DIGITAL
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-[#737A1A]">
                    Connected Ecosystem
                  </p>
                </div>
              </div>

              {/* =================================================
                  INDUSTRY CARDS
              ================================================== */}

              {industryCards.map((industry, index) => {
                const Icon = industry.icon;

                return (
                  <div
                    key={industry.title}
                    className={`absolute ${industry.className}`}
                  >
                    <div className="industry-card group relative w-[185px] rounded-2xl border border-white/[0.10] bg-white/[0.045] p-5 backdrop-blur-xl">
                      {/* top light */}
                      <div className="absolute left-5 right-5 top-0 h-px bg-gradient-to-r from-transparent via-[#737A1A]/60 to-transparent" />

                      {/* icon */}
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#737A1A]/25 bg-[#737A1A]/10">
                          <Icon
                            size={18}
                            strokeWidth={1.5}
                            className="text-[#9DA53A]"
                          />
                        </div>

                        <span className="text-[8px] tracking-[0.25em] text-white/20">
                          0{index + 1}
                        </span>
                      </div>

                      {/* text */}
                      <p className="text-sm font-medium text-white/90">
                        {industry.title}
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/30">
                        {industry.subtitle}
                      </p>

                      {/* mini signal */}
                      <div className="mt-5 flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#737A1A]" />
                        <span className="h-px w-8 bg-white/10" />
                        <span className="text-[7px] uppercase tracking-[0.2em] text-white/20">
                          Active
                        </span>
                      </div>

                      {/* hover glow */}
                      <div className="absolute inset-0 -z-10 rounded-2xl bg-[#737A1A]/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </div>
                );
              })}

              {/* =================================================
                  DATA NODES
              ================================================== */}

              <span className="absolute left-[18%] top-[49%] h-1.5 w-1.5 animate-industry-pulse rounded-full bg-[#737A1A]" />

              <span className="absolute right-[19%] top-[47%] h-1 w-1 rounded-full bg-white/50" />

              <span className="absolute left-[48%] top-[13%] h-1 w-1 rounded-full bg-[#737A1A]" />

              <span className="absolute bottom-[18%] left-[48%] h-1.5 w-1.5 animate-industry-pulse rounded-full bg-[#737A1A]" />

              {/* =================================================
                  TECH LABELS
              ================================================== */}

              <div className="absolute left-[8%] top-[13%] hidden sm:block">
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/20">
                  INDUSTRY / 001
                </p>
              </div>

              <div className="absolute bottom-[10%] right-[7%] hidden sm:block text-right">
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/20">
                  SYSTEM / ONLINE
                </p>

                <div className="mt-2 flex items-center justify-end gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#737A1A]" />
                  <span className="text-[7px] uppercase tracking-[0.25em] text-[#737A1A]">
                    Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          CSS
      ========================================================== */}

  
    </section>
  );
}