"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function GraphicDesignHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();

      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      const centerX = width / 2;
      const centerY = height / 2;

      // Ambient glow
      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        Math.min(width, height) * 0.5
      );

      glow.addColorStop(0, "rgba(115, 122, 26, 0.18)");
      glow.addColorStop(0.55, "rgba(115, 122, 26, 0.05)");
      glow.addColorStop(1, "rgba(115, 122, 26, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Floating design cards
      const cards = [
        {
          x: -115,
          y: -105,
          w: 150,
          h: 100,
          rotation: -0.12,
          type: "layout",
        },
        {
          x: 95,
          y: -95,
          w: 145,
          h: 110,
          rotation: 0.1,
          type: "type",
        },
        {
          x: -105,
          y: 95,
          w: 155,
          h: 105,
          rotation: 0.09,
          type: "graphic",
        },
        {
          x: 105,
          y: 100,
          w: 140,
          h: 100,
          rotation: -0.1,
          type: "brand",
        },
      ];

      cards.forEach((card, index) => {
        const floatY =
          Math.sin(time * 1.1 + index * 1.4) * 7;

        ctx.save();

        ctx.translate(
          centerX + card.x,
          centerY + card.y + floatY
        );

        ctx.rotate(card.rotation);

        ctx.beginPath();
        ctx.roundRect(
          -card.w / 2,
          -card.h / 2,
          card.w,
          card.h,
          15
        );

        ctx.fillStyle = "rgba(255,255,255,0.045)";
        ctx.fill();

        ctx.strokeStyle = "rgba(255,255,255,0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Card content
        if (card.type === "layout") {
          ctx.fillStyle = "rgba(115,122,26,0.85)";
          ctx.fillRect(-card.w / 2 + 16, -28, 55, 8);

          ctx.fillStyle = "rgba(255,255,255,0.2)";
          ctx.fillRect(-card.w / 2 + 16, -8, 100, 5);
          ctx.fillRect(-card.w / 2 + 16, 4, 75, 5);

          ctx.fillStyle = "rgba(255,255,255,0.08)";
          ctx.fillRect(-card.w / 2 + 16, 25, 120, 24);
        }

        if (card.type === "type") {
          ctx.font = "bold 28px Arial";
          ctx.fillStyle = "rgba(255,255,255,0.8)";
          ctx.fillText("Aa", -30, 10);

          ctx.font = "10px Arial";
          ctx.fillStyle = "rgba(115,122,26,0.9)";
          ctx.fillText("TYPOGRAPHY", -35, 30);
        }

        if (card.type === "graphic") {
          ctx.beginPath();
          ctx.arc(0, 0, 31, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(115,122,26,0.8)";
          ctx.lineWidth = 5;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(-40, 30);
          ctx.lineTo(40, -30);
          ctx.strokeStyle = "rgba(255,255,255,0.25)";
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        if (card.type === "brand") {
          ctx.fillStyle = "rgba(115,122,26,0.85)";
          ctx.fillRect(-42, -32, 32, 32);

          ctx.fillStyle = "rgba(255,255,255,0.85)";
          ctx.fillRect(2, -32, 32, 32);

          ctx.fillStyle = "rgba(255,255,255,0.18)";
          ctx.fillRect(-42, 12, 76, 8);
          ctx.fillRect(-42, 27, 50, 5);
        }

        ctx.restore();
      });

      // Central composition
      ctx.save();

      ctx.translate(
        centerX,
        centerY + Math.sin(time * 0.8) * 4
      );

      ctx.rotate(Math.sin(time * 0.5) * 0.025);

      ctx.beginPath();
      ctx.roundRect(-65, -65, 130, 130, 24);

      ctx.fillStyle = "rgba(115,122,26,0.95)";
      ctx.fill();

      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.stroke();

      // Abstract graphic mark
      ctx.beginPath();
      ctx.moveTo(-30, 28);
      ctx.lineTo(-30, -28);
      ctx.lineTo(-5, -28);
      ctx.lineTo(30, 5);
      ctx.lineTo(30, 28);
      ctx.closePath();

      ctx.strokeStyle = "rgba(255,255,255,0.9)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-4, -28);
      ctx.lineTo(-4, 28);

      ctx.strokeStyle = "rgba(255,255,255,0.55)";
      ctx.stroke();

      ctx.restore();

      // Orbit points
      for (let i = 0; i < 8; i++) {
        const angle =
          time * (i % 2 === 0 ? 0.45 : -0.35) +
          (Math.PI * 2 * i) / 8;

        const radius = 185;

        const x =
          centerX + Math.cos(angle) * radius;

        const y =
          centerY + Math.sin(angle) * radius * 0.55;

        ctx.beginPath();
        ctx.arc(x, y, i % 3 === 0 ? 3 : 2, 0, Math.PI * 2);

        ctx.fillStyle =
          i % 3 === 0
            ? "rgba(115,122,26,0.9)"
            : "rgba(255,255,255,0.3)";

        ctx.fill();
      }

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
    <section className="relative overflow-hidden bg-black text-white">
      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#737A1A]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-28">
        {/* Content */}
        <div className="max-w-2xl">
          <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#737A1A]">
            <span className="h-px w-8 bg-[#737A1A]" />
            Graphic Design
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Visuals that make
            <span className="block text-[#737A1A]">
              ideas impossible to ignore.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            We create purposeful graphics for brands, campaigns and digital
            experiences — combining strong composition, clear communication
            and a distinctive visual language.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#graphic-design-types"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-[#737A1A] hover:text-white"
            >
              Explore graphic design
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:border-[#737A1A] hover:text-[#737A1A]"
            >
              Start a project
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-white/10 pt-5">
            <div>
              <p className="text-lg font-semibold">01</p>
              <p className="mt-1 text-xs text-white/45">
                Concept
              </p>
            </div>

            <div className="border-l border-white/10 pl-5">
              <p className="text-lg font-semibold">02</p>
              <p className="mt-1 text-xs text-white/45">
                Composition
              </p>
            </div>

            <div className="border-l border-white/10 pl-5">
              <p className="text-lg font-semibold">03</p>
              <p className="mt-1 text-xs text-white/45">
                Impact
              </p>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            />

            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/50 backdrop-blur">
              Visual composition
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  From
                </p>
                <p className="mt-1 text-sm font-medium">
                  Idea
                </p>
              </div>

              <div className="h-px w-16 bg-[#737A1A]" />

              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                  To
                </p>
                <p className="mt-1 text-sm font-medium text-[#737A1A]">
                  Impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}