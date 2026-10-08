"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";

export default function WebsiteMaintenanceHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      context.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      /* Grid */
      context.strokeStyle = "rgba(255,255,255,0.045)";
      context.lineWidth = 1;

      const gridSize = 44;

      for (let x = 0; x <= width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      /* Central system */
      const boxWidth = Math.min(width * 0.38, 290);
      const boxHeight = 190;

      const boxX = centerX - boxWidth / 2;
      const boxY = centerY - boxHeight / 2 - 20;

      context.strokeStyle = "rgba(255,255,255,0.2)";
      context.lineWidth = 1.5;
      context.strokeRect(boxX, boxY, boxWidth, boxHeight);

      /* Header */
      context.fillStyle = "rgba(255,255,255,0.06)";
      context.fillRect(boxX, boxY, boxWidth, 30);

      /* Status indicator */
      context.beginPath();
      context.arc(boxX + 18, boxY + 15, 4, 0, Math.PI * 2);
      context.fillStyle = "#737A1A";
      context.fill();

      /* Dashboard lines */
      for (let index = 0; index < 4; index++) {
        const y = boxY + 58 + index * 27;

        context.fillStyle =
          index === 1
            ? "rgba(115,122,26,0.65)"
            : "rgba(255,255,255,0.08)";

        context.fillRect(
          boxX + 22,
          y,
          boxWidth * (0.5 + index * 0.07),
          8
        );
      }

      /* Pulse line */
      context.beginPath();

      for (let x = 0; x < boxWidth - 44; x += 4) {
        const normalized = x / (boxWidth - 44);
        const y =
          boxY +
          boxHeight -
          30 -
          Math.sin(normalized * 10 + time * 0.002) * 7;

        if (x === 0) {
          context.moveTo(boxX + 22 + x, y);
        } else {
          context.lineTo(boxX + 22 + x, y);
        }
      }

      context.strokeStyle = "rgba(115,122,26,0.7)";
      context.lineWidth = 1.5;
      context.stroke();

      /* Orbit */
      const orbitRadius = Math.min(width, height) * 0.22;

      context.beginPath();
      context.ellipse(
        centerX,
        centerY - 20,
        orbitRadius,
        orbitRadius * 0.4,
        time * 0.00025,
        0,
        Math.PI * 2
      );

      context.strokeStyle = "rgba(255,255,255,0.1)";
      context.lineWidth = 1;
      context.stroke();

      const orbitAngle = time * 0.001;

      const dotX =
        centerX + Math.cos(orbitAngle) * orbitRadius;

      const dotY =
        centerY -
        20 +
        Math.sin(orbitAngle) * orbitRadius * 0.4;

      context.beginPath();
      context.arc(dotX, dotY, 4, 0, Math.PI * 2);
      context.fillStyle = "#737A1A";
      context.fill();

      /* Floating status nodes */
      const nodes = [
        {
          x: boxX - 65,
          y: boxY + 35,
        },
        {
          x: boxX + boxWidth + 65,
          y: boxY + 70,
        },
        {
          x: boxX - 45,
          y: boxY + boxHeight + 35,
        },
        {
          x: boxX + boxWidth + 45,
          y: boxY + boxHeight - 20,
        },
      ];

      nodes.forEach((node, index) => {
        const pulse = 1 + Math.sin(time * 0.002 + index) * 0.15;

        context.beginPath();
        context.arc(node.x, node.y, 3 * pulse, 0, Math.PI * 2);

        context.fillStyle =
          index === 0 || index === 3
            ? "#737A1A"
            : "rgba(255,255,255,0.35)";

        context.fill();

        context.beginPath();
        context.moveTo(node.x, node.y);
        context.lineTo(
          centerX + (node.x - centerX) * 0.45,
          centerY - 20 + (node.y - (centerY - 20)) * 0.45
        );

        context.strokeStyle = "rgba(255,255,255,0.07)";
        context.lineWidth = 1;
        context.stroke();
      });

      time += 16;
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-black text-white">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-80"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(115,122,26,0.11),transparent_42%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl flex-col justify-between px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        {/* Top */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#737A1A]">
            Website Maintenance
          </span>

          <span className="hidden text-xs uppercase tracking-[0.18em] text-white/30 sm:block">
            Protect · Maintain · Improve
          </span>
        </div>

        {/* Main */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-5xl lg:text-6xl xl:text-7xl">
              Keep your website
              <span className="block text-[#737A1A]">
                working at its best.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              Ongoing technical care that keeps your website secure, fast,
              reliable and ready for what your business needs next.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#website-maintenance-types"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
              >
                Explore maintenance
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-[#737A1A] hover:text-[#737A1A]"
              >
                Get support
              </Link>
            </div>
          </div>

          {/* Status marker */}
          <div className="relative hidden h-[420px] lg:block">
            <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#737A1A]">
                <ShieldCheck size={14} />
              </span>

              <span className="text-xs uppercase tracking-[0.16em] text-white/50">
                System healthy
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-xs uppercase tracking-[0.18em] text-white/25">
            IMX Digital Studio
          </span>

          <a
            href="#website-maintenance-types"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-[#737A1A]"
          >
            Explore
            <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}