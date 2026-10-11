
"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Activity,
  Check,
  Globe2,
  LockKeyhole,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function WebsiteMaintenanceHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId = 0;
    let time = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.5;

      // Technical grid
      const gridSize = 44;
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255,255,255,0.045)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }

      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }

      ctx.stroke();

      // Center dashboard dimensions
      const boxWidth = Math.min(width * 0.48, 310);
      const boxHeight = Math.min(height * 0.47, 250);
      const boxX = centerX - boxWidth / 2;
      const boxY = centerY - boxHeight / 2;

      // Outer architectural frames
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-0.12);
      ctx.strokeStyle = "rgba(115,122,26,0.20)";
      ctx.strokeRect(
        -boxWidth * 0.64,
        -boxHeight * 0.58,
        boxWidth * 1.28,
        boxHeight * 1.16
      );

      ctx.rotate(0.24);
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      ctx.strokeRect(
        -boxWidth * 0.72,
        -boxHeight * 0.66,
        boxWidth * 1.44,
        boxHeight * 1.32
      );
      ctx.restore();

      // Dashboard shell
      ctx.fillStyle = "rgba(7,7,7,0.96)";
      ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

      ctx.strokeStyle = "rgba(255,255,255,0.20)";
      ctx.lineWidth = 1;
      ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);

      // Dashboard toolbar
      ctx.fillStyle = "rgba(255,255,255,0.045)";
      ctx.fillRect(boxX, boxY, boxWidth, 32);

      ctx.beginPath();
      ctx.arc(boxX + 15, boxY + 16, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#737A1A";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(boxX + 26, boxY + 16, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(boxX + 37, boxY + 16, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      ctx.fill();

      // Toolbar title
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      ctx.font = "8px monospace";
      ctx.fillText(
        "SYSTEM MONITOR",
        boxX + boxWidth - 100,
        boxY + 19
      );

      // Status rows
      const rowStart = boxY + 53;
      const availableWidth = boxWidth - 44;

      for (let i = 0; i < 3; i++) {
        const rowY = rowStart + i * 29;

        ctx.fillStyle = "rgba(255,255,255,0.035)";
        ctx.fillRect(boxX + 14, rowY - 7, boxWidth - 28, 22);

        ctx.fillStyle = "rgba(255,255,255,0.10)";
        ctx.fillRect(boxX + 22, rowY, 5, 5);

        ctx.fillStyle = "rgba(255,255,255,0.36)";
        ctx.font = "8px monospace";
        ctx.fillText(
          ["Security", "Performance", "Availability"][i],
          boxX + 34,
          rowY + 5
        );

        ctx.fillStyle = "rgba(115,122,26,0.12)";
        ctx.fillRect(
          boxX + boxWidth - 76,
          rowY - 2,
          50,
          8
        );

        ctx.fillStyle = "rgba(115,122,26,0.85)";
        ctx.fillRect(
          boxX + boxWidth - 76,
          rowY - 2,
          [44, 39, 47][i],
          8
        );
      }

      // Monitoring waveform
      const chartY = boxY + boxHeight - 35;
      const chartX = boxX + 18;
      const chartWidth = boxWidth - 36;

      ctx.beginPath();

      for (let x = 0; x <= chartWidth; x += 3) {
        const wave =
          Math.sin(x * 0.045 + time * 0.035) * 4 +
          Math.sin(x * 0.09 + time * 0.02) * 2;

        const y = chartY + wave;

        if (x === 0) {
          ctx.moveTo(chartX + x, y);
        } else {
          ctx.lineTo(chartX + x, y);
        }
      }

      ctx.strokeStyle = "rgba(145,155,43,0.9)";
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Orbit around the dashboard
      const orbitRadiusX = Math.min(width, height) * 0.34;
      const orbitRadiusY = orbitRadiusX * 0.38;
      const orbitY = centerY;

      ctx.beginPath();
      ctx.ellipse(
        centerX,
        orbitY,
        orbitRadiusX,
        orbitRadiusY,
        -0.12,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = "rgba(255,255,255,0.11)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Orbiting indicator
      const angle = time * 0.012;
      const dotX = centerX + Math.cos(angle) * orbitRadiusX;
      const dotY = orbitY + Math.sin(angle) * orbitRadiusY;

      ctx.beginPath();
      ctx.arc(dotX, dotY, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#929B2D";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(dotX, dotY, 8, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(115,122,26,0.28)";
      ctx.stroke();

      // Connection nodes
      const nodes = [
        { x: boxX - 22, y: boxY + 38 },
        { x: boxX + boxWidth + 22, y: boxY + 64 },
        { x: boxX - 16, y: boxY + boxHeight - 16 },
        { x: boxX + boxWidth + 18, y: boxY + boxHeight - 38 },
      ];

      nodes.forEach((node, index) => {
        const pulse = motionQuery.matches
          ? 1
          : 1 + Math.sin(time * 0.06 + index * 1.4) * 0.18;

        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(
          centerX + (node.x - centerX) * 0.65,
          centerY + (node.y - centerY) * 0.65
        );
        ctx.strokeStyle = "rgba(115,122,26,0.24)";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(node.x, node.y, 3 * pulse, 0, Math.PI * 2);
        ctx.fillStyle =
          index === 0 || index === 3
            ? "#858D25"
            : "rgba(255,255,255,0.40)";
        ctx.fill();
      });

      // Corner coordinates
      const corners = [
        [18, 18],
        [width - 18, 18],
        [18, height - 18],
        [width - 18, height - 18],
      ];

      corners.forEach(([x, y], index) => {
        const size = 12;
        const directionX = x < centerX ? 1 : -1;
        const directionY = y < centerY ? 1 : -1;

        ctx.beginPath();
        ctx.moveTo(x + size * directionX, y);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y + size * directionY);
        ctx.strokeStyle =
          index === 0 || index === 3
            ? "rgba(115,122,26,0.6)"
            : "rgba(255,255,255,0.2)";
        ctx.stroke();
      });
    };

    const animate = () => {
      draw();
      time += 1;
      frameId = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      window.cancelAnimationFrame(frameId);

      if (motionQuery.matches) {
        draw();
        return;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    startAnimation();

    window.addEventListener("resize", resize);
    motionQuery.addEventListener("change", startAnimation);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      motionQuery.removeEventListener("change", startAnimation);
    };
  }, []);

  return (
    <section className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-black text-white">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-y-0 left-[9%] w-px bg-white/[0.045]" />
        <div className="absolute inset-y-0 right-[9%] w-px bg-white/[0.045]" />

        <div className="absolute -right-40 top-[5%] h-[540px] w-[540px] rounded-full bg-[#737A1A]/15 blur-[150px]" />
        <div className="absolute -left-40 bottom-[-20%] h-[450px] w-[450px] rounded-full bg-[#737A1A]/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_52%_50%,transparent_10%,rgba(0,0,0,0.25)_70%,#000_100%)]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] max-w-[1600px] flex-col justify-between px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-10 xl:px-16">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#858D25]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/55 sm:text-[10px] sm:tracking-[0.3em]">
              Website Maintenance
            </span>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.24em] text-white/30 sm:block sm:text-[10px]">
            IMX / Care Systems
          </span>
        </div>

        {/* Hero Content */}
        <div className="grid items-center gap-5 py-10 sm:gap-8 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 lg:py-8 xl:gap-12">
          {/* Left Content */}
          <div className="relative z-20 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-3 border border-white/10 bg-white/[0.025] px-3 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#737A1A] opacity-40" />
                <span className="relative h-2 w-2 rounded-full bg-[#858D25]" />
              </span>

              <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 sm:text-[10px] sm:tracking-[0.24em]">
                Proactive website care
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(2.8rem,6.3vw,6.5rem)] font-semibold leading-[0.89] tracking-[-0.075em]">
              Your website.
              <br />
              Always
              <br />
              <span className="text-[#858D25]">at its best.</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 sm:mt-8 sm:text-base sm:leading-8 lg:text-[17px]">
              Keep your digital presence secure, fast and dependable with
              ongoing updates, performance checks and technical support
              designed to keep your business moving.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center gap-3 bg-[#737A1A] px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#8b9424] hover:shadow-[0_14px_40px_rgba(115,122,26,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a0a83b] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-6"
              >
                Get website support
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="#website-maintenance-types"
                className="group inline-flex min-h-12 items-center gap-2 px-3 py-3 text-sm text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#737A1A]"
              >
                Explore maintenance
                <ArrowDown
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="mt-10 grid max-w-lg grid-cols-3 border-t border-white/10 pt-5 sm:mt-12">
              <div className="pr-3">
                <ShieldCheck
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#858D25]"
                />
                <p className="mt-3 text-xs font-medium text-white/80 sm:text-sm">
                  Security
                </p>
                <p className="mt-1 text-[10px] leading-4 text-white/35 sm:text-xs">
                  Regular checks
                </p>
              </div>

              <div className="border-l border-white/10 px-3 sm:px-5">
                <Activity
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#858D25]"
                />
                <p className="mt-3 text-xs font-medium text-white/80 sm:text-sm">
                  Performance
                </p>
                <p className="mt-1 text-[10px] leading-4 text-white/35 sm:text-xs">
                  Ongoing tuning
                </p>
              </div>

              <div className="border-l border-white/10 pl-3 sm:pl-5">
                <Zap
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#858D25]"
                />
                <p className="mt-3 text-xs font-medium text-white/80 sm:text-sm">
                  Reliability
                </p>
                <p className="mt-1 text-[10px] leading-4 text-white/35 sm:text-xs">
                  Timely updates
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-[700px] lg:ml-auto">
            <div className="relative aspect-square w-full">
              {/* Animated Canvas */}
              <canvas
                ref={canvasRef}
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-90"
              />

              {/* Dashboard Status Card */}
              <div className="absolute left-[1%] top-[8%] z-20 w-[37%] border border-white/10 bg-[#080808]/90 p-3 shadow-[0_20px_55px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center border border-[#737A1A]/30 bg-[#737A1A]/10">
                    <ShieldCheck
                      size={14}
                      className="text-[#a0a83b]"
                    />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[8px] font-medium text-white/80 sm:text-[10px]">
                      Security status
                    </p>
                    <p className="mt-0.5 text-[7px] text-white/35 sm:text-[8px]">
                      Protection overview
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 border-t border-white/[0.07] pt-3">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#737A1A]/15">
                    <Check size={10} className="text-[#a0a83b]" />
                  </span>
                  <span className="text-[8px] text-white/55 sm:text-[9px]">
                    Security checks
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#737A1A]/15">
                    <Check size={10} className="text-[#a0a83b]" />
                  </span>
                  <span className="text-[8px] text-white/55 sm:text-[9px]">
                    Updates tracking
                  </span>
                </div>
              </div>

              {/* Main Status Card */}
              <div className="absolute right-[1%] top-[18%] z-20 w-[38%] border border-[#737A1A]/25 bg-[#080808]/95 p-3 shadow-[0_25px_65px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-[#737A1A] opacity-40" />
                    <span className="relative h-2 w-2 rounded-full bg-[#858D25]" />
                  </span>

                  <span className="text-[7px] uppercase tracking-[0.17em] text-white/50 sm:text-[9px] sm:tracking-[0.2em]">
                    System monitor
                  </span>
                </div>

                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-[7px] text-white/35 sm:text-[9px]">
                      Current status
                    </p>
                    <p className="mt-1 text-sm font-medium tracking-tight text-white sm:text-lg">
                      Operational
                    </p>
                  </div>

                  <Activity
                    size={20}
                    strokeWidth={1.4}
                    className="text-[#858D25]"
                  />
                </div>

                <div className="mt-4 flex h-8 items-end gap-1 sm:h-10">
                  {[30, 45, 35, 65, 42, 72, 53, 85, 60, 75, 48, 92].map(
                    (bar, index) => (
                      <span
                        key={index}
                        className="flex-1 bg-[#737A1A]/70"
                        style={{ height: `${bar}%` }}
                      />
                    )
                  )}
                </div>

                <div className="mt-2 flex items-center justify-between border-t border-white/[0.08] pt-2">
                  <span className="text-[7px] text-white/35 sm:text-[8px]">
                    Performance overview
                  </span>
                  <span className="text-[7px] text-[#a0a83b] sm:text-[8px]">
                    Monitoring
                  </span>
                </div>
              </div>

              {/* Maintenance Layers */}
              <div className="absolute bottom-[14%] left-[3%] z-20 w-[42%] rotate-[-5deg]">
                <div className="absolute bottom-3 left-3 h-full w-full border border-white/[0.07] bg-white/[0.015]" />
                <div className="absolute bottom-1.5 left-1.5 h-full w-full border border-white/[0.09] bg-black/70" />

                <div className="relative border border-white/10 bg-[#080808]/95 p-3 shadow-2xl backdrop-blur-xl sm:p-4">
                  <div className="flex items-center gap-2">
                    <LockKeyhole
                      size={13}
                      className="shrink-0 text-[#a0a83b]"
                    />
                    <span className="text-[7px] uppercase tracking-[0.17em] text-white/45 sm:text-[9px] sm:tracking-[0.2em]">
                      Maintenance workflow
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      ["Security review", "Complete"],
                      ["Update planning", "Scheduled"],
                      ["Performance audit", "Review"],
                    ].map(([label, status], index) => (
                      <div
                        key={label}
                        className="flex items-center justify-between gap-2"
                      >
                        <div className="flex min-w-0 items-center gap-2">
                          <span
                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                              index === 0
                                ? "bg-[#858D25]"
                                : "bg-white/25"
                            }`}
                          />
                          <span className="truncate text-[7px] text-white/50 sm:text-[9px]">
                            {label}
                          </span>
                        </div>

                        <span
                          className={`shrink-0 text-[6px] sm:text-[8px] ${
                            index === 0
                              ? "text-[#a0a83b]"
                              : "text-white/30"
                          }`}
                        >
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Website Device */}
              <div className="absolute bottom-[9%] right-[8%] z-20 h-[29%] w-[18%] min-w-[54px] rotate-[8deg] rounded-[9px] border border-white/20 bg-[#080808] p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.8)] sm:rounded-xl sm:p-2">
                <div className="h-full overflow-hidden border border-white/[0.07] bg-black p-1.5 sm:p-2">
                  <div className="mx-auto mb-2 h-1 w-5 rounded-full bg-white/20 sm:w-7" />

                  <div className="flex items-center gap-1">
                    <Globe2 size={9} className="text-[#858D25]" />
                    <span className="text-[6px] text-white/45">
                      Website
                    </span>
                  </div>

                  <div className="mt-3 h-1.5 w-[75%] bg-white/45" />
                  <div className="mt-1.5 h-1 w-full bg-white/15" />
                  <div className="mt-1 h-1 w-[65%] bg-white/15" />

                  <div className="mt-3 h-7 border border-[#737A1A]/25 bg-[#737A1A]/[0.06] sm:h-10" />

                  <div className="mt-2 grid grid-cols-2 gap-1">
                    <div className="h-4 border border-white/10" />
                    <div className="h-4 border border-white/10" />
                  </div>
                </div>
              </div>

              {/* Floating Shield */}
              <div className="absolute bottom-[8%] right-[32%] z-30 flex h-10 w-10 items-center justify-center border border-[#737A1A]/30 bg-[#080808]/95 shadow-xl backdrop-blur-xl sm:h-12 sm:w-12">
                <ShieldCheck
                  size={19}
                  strokeWidth={1.5}
                  className="text-[#a0a83b]"
                />
              </div>

              {/* Small Floating Labels */}
              <div className="absolute left-[6%] top-[42%] z-20 flex items-center gap-2 border border-white/10 bg-black/85 px-2.5 py-2 backdrop-blur-md sm:px-3">
                <Activity size={12} className="text-[#858D25]" />
                <span className="text-[7px] uppercase tracking-[0.13em] text-white/50 sm:text-[8px] sm:tracking-[0.16em]">
                  Active checks
                </span>
              </div>

              <div className="absolute bottom-[32%] right-[1%] z-20 flex items-center gap-2 border border-white/10 bg-black/85 px-2.5 py-2 backdrop-blur-md sm:px-3">
                <Zap size={12} className="text-[#858D25]" />
                <span className="text-[7px] uppercase tracking-[0.13em] text-white/50 sm:text-[8px] sm:tracking-[0.16em]">
                  Performance
                </span>
              </div>

              {/* Faint Index */}
              <span
                aria-hidden="true"
                className="absolute bottom-[0%] right-[1%] select-none text-[clamp(5rem,10vw,8rem)] font-semibold leading-none tracking-[-0.12em] text-white/[0.035]"
              >
                02
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] uppercase tracking-[0.18em] text-white/35 sm:text-[10px] sm:tracking-[0.22em]">
            Security <span className="px-1.5 text-[#737A1A]">·</span> Updates
            <span className="px-1.5 text-[#737A1A]">·</span> Optimization
          </span>

          <Link
            href="#website-maintenance-types"
            className="group inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-[#a0a83b] sm:text-[10px] sm:tracking-[0.22em]"
          >
            Explore maintenance
            <ArrowDown
              size={13}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </Link>
        </div>
      </div>

      {/* Reduced Motion */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          :global(*) {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

