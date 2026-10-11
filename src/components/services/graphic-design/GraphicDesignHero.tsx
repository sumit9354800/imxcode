
"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, Palette, Layers3, PenTool } from "lucide-react";
import { useEffect, useRef } from "react";

const designBars = [38, 55, 43, 68, 50, 78, 62, 92, 72, 100];

export default function GraphicDesignHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let animationFrame = 0;
    let time = 0;
    let width = 0;
    let height = 0;
    let isVisible = true;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      if (!ctx || !isVisible) return;

      ctx.clearRect(0, 0, width, height);

      if (!reducedMotion) time += 0.008;

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height);

      // Ambient olive light
      const glow = ctx.createRadialGradient(
        cx,
        cy,
        5,
        cx,
        cy,
        scale * 0.52
      );

      glow.addColorStop(0, "rgba(115,122,26,0.2)");
      glow.addColorStop(0.45, "rgba(115,122,26,0.07)");
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Technical composition grid
      ctx.save();
      ctx.translate(cx, cy);

      for (let i = 1; i <= 7; i++) {
        const radius = scale * (0.07 + i * 0.055);

        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          radius,
          radius * 0.38,
          -0.3,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          i === 4
            ? "rgba(115,122,26,0.4)"
            : "rgba(255,255,255,0.075)";

        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();

      // Orbiting design particles
      for (let i = 0; i < 16; i++) {
        const angle =
          time * (i % 2 === 0 ? 0.3 : -0.24) + (Math.PI * 2 * i) / 16;

        const radius = scale * (0.17 + (i % 4) * 0.065);

        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius * 0.58;

        ctx.beginPath();
        ctx.arc(x, y, i % 4 === 0 ? 3 : 1.5, 0, Math.PI * 2);

        ctx.fillStyle =
          i % 4 === 0
            ? "rgba(173,181,78,0.95)"
            : "rgba(255,255,255,0.42)";

        ctx.fill();
      }

      // Floating design boards
      const cards = [
        {
          x: -0.25,
          y: -0.23,
          w: 0.28,
          h: 0.2,
          rotation: -0.1,
          type: "layout",
        },
        {
          x: 0.25,
          y: -0.22,
          w: 0.27,
          h: 0.22,
          rotation: 0.09,
          type: "type",
        },
        {
          x: -0.25,
          y: 0.24,
          w: 0.29,
          h: 0.21,
          rotation: 0.08,
          type: "graphic",
        },
        {
          x: 0.25,
          y: 0.24,
          w: 0.27,
          h: 0.21,
          rotation: -0.08,
          type: "brand",
        },
      ];

      cards.forEach((card, index) => {
        const cardWidth = scale * card.w;
        const cardHeight = scale * card.h;

        const floatY = reducedMotion
          ? 0
          : Math.sin(time * 1.1 + index * 1.5) * scale * 0.012;

        ctx.save();

        ctx.translate(
          cx + card.x * width,
          cy + card.y * height + floatY
        );

        ctx.rotate(card.rotation);

        // Card shadow
        ctx.shadowColor = "rgba(0,0,0,0.3)";
        ctx.shadowBlur = 20;
        ctx.shadowOffsetY = 8;

        ctx.beginPath();
        ctx.roundRect(
          -cardWidth / 2,
          -cardHeight / 2,
          cardWidth,
          cardHeight,
          Math.max(7, scale * 0.018)
        );

        ctx.fillStyle = "rgba(18,19,15,0.94)";
        ctx.fill();

        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;

        ctx.strokeStyle = "rgba(255,255,255,0.17)";
        ctx.lineWidth = 1;
        ctx.stroke();

        const left = -cardWidth / 2;
        const top = -cardHeight / 2;

        if (card.type === "layout") {
          // Editorial layout
          ctx.fillStyle = "#737A1A";
          ctx.fillRect(left + cardWidth * 0.12, top + cardHeight * 0.2, cardWidth * 0.45, 4);

          ctx.fillStyle = "rgba(255,255,255,0.8)";
          ctx.font = `600 ${Math.max(11, scale * 0.027)}px Arial`;
          ctx.fillText(
            "LAYOUT",
            left + cardWidth * 0.12,
            top + cardHeight * 0.46
          );

          ctx.fillStyle = "rgba(255,255,255,0.2)";
          ctx.fillRect(left + cardWidth * 0.12, top + cardHeight * 0.56, cardWidth * 0.72, 3);
          ctx.fillRect(left + cardWidth * 0.12, top + cardHeight * 0.65, cardWidth * 0.53, 3);

          ctx.fillStyle = "rgba(115,122,26,0.25)";
          ctx.fillRect(left + cardWidth * 0.12, top + cardHeight * 0.76, cardWidth * 0.76, cardHeight * 0.1);
        }

        if (card.type === "type") {
          ctx.fillStyle = "rgba(255,255,255,0.9)";
          ctx.font = `bold ${Math.max(25, scale * 0.075)}px Georgia`;
          ctx.fillText("Aa", left + cardWidth * 0.13, top + cardHeight * 0.55);

          ctx.fillStyle = "#A4AB4B";
          ctx.font = `600 ${Math.max(6, scale * 0.015)}px Arial`;
          ctx.fillText(
            "TYPE / SYSTEM",
            left + cardWidth * 0.14,
            top + cardHeight * 0.79
          );
        }

        if (card.type === "graphic") {
          ctx.save();

          ctx.translate(0, -cardHeight * 0.02);

          ctx.beginPath();
          ctx.arc(0, 0, cardWidth * 0.23, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(115,122,26,0.95)";
          ctx.lineWidth = Math.max(3, scale * 0.01);
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(0, 0, cardWidth * 0.12, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(115,122,26,0.3)";
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(-cardWidth * 0.29, cardHeight * 0.25);
          ctx.lineTo(cardWidth * 0.29, -cardHeight * 0.25);
          ctx.strokeStyle = "rgba(255,255,255,0.55)";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.restore();
        }

        if (card.type === "brand") {
          const block = cardWidth * 0.22;

          ctx.fillStyle = "#737A1A";
          ctx.fillRect(
            left + cardWidth * 0.13,
            top + cardHeight * 0.17,
            block,
            block
          );

          ctx.fillStyle = "rgba(255,255,255,0.9)";
          ctx.fillRect(
            left + cardWidth * 0.43,
            top + cardHeight * 0.17,
            block,
            block
          );

          ctx.fillStyle = "rgba(255,255,255,0.22)";
          ctx.fillRect(left + cardWidth * 0.13, top + cardHeight * 0.67, cardWidth * 0.65, 3);
          ctx.fillRect(left + cardWidth * 0.13, top + cardHeight * 0.77, cardWidth * 0.42, 3);
        }

        ctx.restore();
      });

      // Central 3D graphic mark
      ctx.save();

      const coreFloat = reducedMotion ? 0 : Math.sin(time * 0.8) * scale * 0.008;

      ctx.translate(cx, cy + coreFloat);

      const coreSize = scale * 0.19;
      const rotation = reducedMotion ? 0 : Math.sin(time * 0.45) * 0.035;

      ctx.rotate(rotation);

      // Outer shadow / glow
      ctx.shadowColor = "rgba(115,122,26,0.32)";
      ctx.shadowBlur = scale * 0.07;

      ctx.beginPath();
      ctx.roundRect(
        -coreSize / 2,
        -coreSize / 2,
        coreSize,
        coreSize,
        scale * 0.035
      );

      ctx.fillStyle = "#737A1A";
      ctx.fill();

      ctx.shadowBlur = 0;

      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Inner frame
      ctx.strokeStyle = "rgba(255,255,255,0.22)";
      ctx.strokeRect(
        -coreSize * 0.34,
        -coreSize * 0.34,
        coreSize * 0.68,
        coreSize * 0.68
      );

      // Geometric design mark
      ctx.beginPath();
      ctx.moveTo(-coreSize * 0.22, coreSize * 0.22);
      ctx.lineTo(-coreSize * 0.22, -coreSize * 0.22);
      ctx.lineTo(-coreSize * 0.02, -coreSize * 0.22);
      ctx.lineTo(coreSize * 0.22, coreSize * 0.02);
      ctx.lineTo(coreSize * 0.22, coreSize * 0.22);
      ctx.closePath();

      ctx.strokeStyle = "rgba(255,255,255,0.95)";
      ctx.lineWidth = Math.max(1.5, scale * 0.004);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-coreSize * 0.02, -coreSize * 0.22);
      ctx.lineTo(-coreSize * 0.02, coreSize * 0.22);

      ctx.strokeStyle = "rgba(255,255,255,0.65)";
      ctx.stroke();

      ctx.restore();

      // Fine center guide lines
      ctx.save();

      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(cx - scale * 0.44, cy);
      ctx.lineTo(cx - scale * 0.35, cy);
      ctx.moveTo(cx + scale * 0.35, cy);
      ctx.lineTo(cx + scale * 0.44, cy);
      ctx.moveTo(cx, cy - scale * 0.43);
      ctx.lineTo(cx, cy - scale * 0.35);
      ctx.moveTo(cx, cy + scale * 0.35);
      ctx.lineTo(cx, cy + scale * 0.43);
      ctx.stroke();

      ctx.restore();

      if (!reducedMotion) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      cancelAnimationFrame(animationFrame);

      if (isVisible) draw();
    });

    visibilityObserver.observe(canvas);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.65) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.65) 1px, transparent 1px)",
          backgroundSize: "68px 68px",
          maskImage: "linear-gradient(to bottom, black, transparent 95%)",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-[#737A1A]/15 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-white/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 pb-10 pt-8 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16 xl:px-16">
        {/* Top metadata */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.27em] text-white/50 sm:text-xs">
              Graphic Design
            </span>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/35 sm:block">
            Visual systems / 001
          </span>
        </div>

        {/* Hero content */}
        <div className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:py-16 xl:gap-12 xl:py-20">
          {/* Copy */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2.5 border border-[#737A1A]/30 bg-[#737A1A]/10 px-3.5 py-2">
              <Palette size={14} className="text-[#A4AB4B]" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#C0C58A] sm:text-[10px]">
                Ideas into visual identity
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(2.8rem,5.7vw,6rem)] font-semibold leading-[0.93] tracking-[-0.075em]">
              Visuals that make
              <br />
              ideas
              <br />
              <span className="text-[#929849]">impossible to ignore.</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:mt-8 sm:text-base sm:leading-8">
              We create purposeful graphics for brands, campaigns and digital
              experiences — combining strong composition, clear communication
              and a distinctive visual language.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Link
                href="#graphic-design-types"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#737A1A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#929849] hover:text-black"
              >
                Explore graphic design
                <ArrowDown
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 border border-white/15 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-[#737A1A] hover:bg-[#737A1A]/10"
              >
                Start a project
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Process indicators */}
            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-5 sm:mt-12 sm:pt-6">
              {[
                { number: "01", label: "Concept", detail: "Find the idea" },
                { number: "02", label: "Compose", detail: "Shape the story" },
                { number: "03", label: "Impact", detail: "Make it memorable" },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className={
                    index
                      ? "border-l border-white/10 pl-3 sm:pl-6"
                      : ""
                  }
                >
                  <span className="font-mono text-[10px] text-[#929849]">
                    {item.number}
                  </span>
                  <p className="mt-2 text-sm font-medium text-white/90 sm:text-base">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[8px] leading-4 text-white/40 sm:text-xs">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Design visual */}
          <div className="relative mx-auto w-full max-w-[650px] lg:max-w-none">
            {/* Canvas artwork */}
            <div className="pointer-events-none absolute inset-[-7%]">
              <canvas
                ref={canvasRef}
                className="h-full w-full"
                aria-hidden="true"
              />
            </div>

            {/* Main composition frame */}
            <div className="relative z-10 overflow-hidden border border-white/15 bg-[#080908]/80 shadow-[0_35px_100px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              {/* Frame header */}
              <div className="flex h-11 items-center justify-between border-b border-white/10 px-3 sm:h-12 sm:px-5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#737A1A]" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <div className="flex items-center gap-2">
                  <Layers3 size={12} className="text-[#929849]" />
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/40 sm:text-[9px]">
                    IMX / Design Studio
                  </span>
                </div>

                <span className="text-[8px] uppercase tracking-widest text-white/30">
                  01—04
                </span>
              </div>

              {/* Composition canvas */}
              <div className="relative aspect-[0.95/1] overflow-hidden sm:aspect-[1.08/1]">
                {/* Background typography */}
                <div className="pointer-events-none absolute left-[7%] top-[8%] select-none text-[clamp(4rem,10vw,8rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.035]">
                  Aa
                </div>

                <div className="absolute inset-[7%] border border-white/[0.07]" />

                {/* Editorial corner marks */}
                <div className="absolute left-[7%] top-[7%] h-4 w-4 border-l border-t border-[#929849]/70" />
                <div className="absolute right-[7%] top-[7%] h-4 w-4 border-r border-t border-[#929849]/70" />
                <div className="absolute bottom-[7%] left-[7%] h-4 w-4 border-b border-l border-[#929849]/70" />
                <div className="absolute bottom-[7%] right-[7%] h-4 w-4 border-b border-r border-[#929849]/70" />

                {/* Main poster */}
                <div className="absolute left-[16%] top-[15%] h-[67%] w-[68%] animate-[posterFloat_7s_ease-in-out_infinite] border border-white/15 bg-[#11120E] shadow-[0_25px_65px_rgba(0,0,0,0.45)] [transform:perspective(1000px)_rotateY(-7deg)_rotateX(3deg)] motion-reduce:animate-none">
                  {/* Poster background split */}
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(115,122,26,0.15),transparent_48%,rgba(255,255,255,0.03))]" />

                  {/* Olive graphic shape */}
                  <div className="absolute right-[8%] top-[10%] h-[45%] w-[46%] border border-[#929849]/50 bg-[#737A1A]/10">
                    <div className="absolute -right-[12%] top-[12%] h-[76%] w-[76%] rounded-full border border-[#929849]/65" />
                    <div className="absolute -right-[4%] top-[20%] h-[60%] w-[60%] rounded-full border border-white/20" />
                    <div className="absolute left-[18%] top-[20%] h-[60%] w-[60%] bg-[#737A1A]/55 mix-blend-screen" />
                  </div>

                  {/* Vertical typography */}
                  <div className="absolute left-[9%] top-[11%]">
                    <p className="text-[7px] uppercase tracking-[0.25em] text-[#A4AB4B] sm:text-[8px]">
                      Visual study / 001
                    </p>

                    <h2 className="mt-5 text-[clamp(1.3rem,3vw,2.6rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
                      MAKE
                      <br />
                      <span className="text-[#929849]">A</span>
                      <br />
                      STATEMENT.
                    </h2>
                  </div>

                  {/* Fine details */}
                  <div className="absolute bottom-[10%] left-[9%] right-[9%]">
                    <div className="h-px w-full bg-white/15" />

                    <div className="mt-3 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-[7px] uppercase tracking-[0.18em] text-white/40 sm:text-[8px]">
                          Art direction
                        </p>
                        <p className="mt-1 text-[9px] font-medium sm:text-xs">
                          Form / Contrast / Identity
                        </p>
                      </div>

                      <span className="text-[8px] text-[#A4AB4B] sm:text-[9px]">
                        IMX®
                      </span>
                    </div>
                  </div>

                  {/* Registration marks */}
                  <span className="absolute left-[5%] top-1/2 h-2 w-2 border border-white/30" />
                  <span className="absolute right-[5%] top-1/2 h-2 w-2 border border-white/30" />
                </div>

                {/* Floating palette */}
                <div className="absolute bottom-[13%] left-[6%] z-20 border border-white/10 bg-[#0D0E0B]/95 p-3 shadow-xl backdrop-blur-md sm:p-4">
                  <p className="mb-2 text-[7px] uppercase tracking-[0.18em] text-white/40 sm:text-[8px]">
                    Color system
                  </p>

                  <div className="flex gap-1.5">
                    <span className="h-5 w-5 bg-[#737A1A] sm:h-6 sm:w-6" />
                    <span className="h-5 w-5 border border-white/10 bg-[#E9E8DF] sm:h-6 sm:w-6" />
                    <span className="h-5 w-5 border border-white/10 bg-[#1B1C18] sm:h-6 sm:w-6" />
                    <span className="h-5 w-5 border border-white/10 bg-[#77766C] sm:h-6 sm:w-6" />
                  </div>
                </div>

                {/* Floating type card */}
                <div className="absolute right-[5%] top-[11%] z-20 border border-white/10 bg-[#0D0E0B]/95 px-3 py-2.5 shadow-xl backdrop-blur-md sm:px-4 sm:py-3">
                  <p className="text-[7px] uppercase tracking-[0.18em] text-white/35 sm:text-[8px]">
                    Typography
                  </p>
                  <p className="mt-1 text-xl font-semibold tracking-[-0.08em] sm:text-2xl">
                    Aa<span className="text-[#929849]">.</span>
                  </p>
                </div>

                {/* Floating layer indicator */}
                <div className="absolute bottom-[12%] right-[6%] z-20 hidden items-center gap-2 border border-[#737A1A]/30 bg-[#737A1A] px-3 py-2 text-black sm:flex">
                  <PenTool size={13} />
                  <span className="text-[8px] font-semibold uppercase tracking-[0.15em]">
                    Creative direction
                  </span>
                </div>

                {/* Vertical annotation */}
                <div className="absolute right-[3%] top-[37%] hidden [writing-mode:vertical-rl] text-[7px] uppercase tracking-[0.24em] text-white/35 sm:block">
                  Structure / Shape / Meaning
                </div>
              </div>

              {/* Frame footer */}
              <div className="flex items-center justify-between border-t border-white/10 px-3 py-3 sm:px-5">
                <span className="text-[7px] uppercase tracking-[0.16em] text-white/35 sm:text-[8px]">
                  Concept / Composition / Impact
                </span>

                <div className="flex items-center gap-2">
                  <span className="h-px w-5 bg-[#737A1A]" />
                  <span className="text-[7px] uppercase tracking-[0.16em] text-white/45 sm:text-[8px]">
                    Design system 001
                  </span>
                </div>
              </div>
            </div>

            {/* Floating design process card */}
            <div className="absolute -bottom-5 -left-2 z-20 hidden animate-[posterFloat_6s_ease-in-out_infinite] border border-white/10 bg-[#10110D]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:block lg:-left-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center bg-[#737A1A]/15 text-[#A4AB4B]">
                  <Layers3 size={17} />
                </div>

                <div>
                  <p className="text-[8px] uppercase tracking-[0.18em] text-white/35">
                    Design process
                  </p>
                  <p className="mt-1 text-xs font-medium">
                    One visual language
                  </p>
                </div>
              </div>
            </div>

            {/* Floating brand card */}
            <div className="absolute -right-2 -top-5 z-20 hidden animate-[posterFloat_7s_ease-in-out_infinite] border border-[#737A1A]/30 bg-[#737A1A] px-4 py-3 text-black shadow-[0_15px_40px_rgba(0,0,0,0.3)] [animation-delay:-2s] sm:block lg:-right-4 motion-reduce:animate-none">
              <div className="flex items-center gap-2">
                <Palette size={14} />
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
                  Design with purpose
                </span>
              </div>

              <p className="mt-1.5 text-xs font-medium">
                Made to be remembered
              </p>
            </div>

            {/* Caption */}
            <div className="mt-5 flex items-center justify-between gap-3 px-1">
              <p className="text-[9px] uppercase tracking-[0.15em] text-white/35 sm:text-[10px] sm:tracking-[0.2em]">
                Visual identity · Art direction
              </p>

              <div className="flex items-center gap-2">
                <span className="h-px w-5 bg-[#737A1A]" />
                <span className="text-[9px] uppercase tracking-[0.14em] text-white/45 sm:text-[10px]">
                  IMX / Design
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <span className="text-[9px] uppercase tracking-[0.16em] text-white/30 sm:text-[10px] sm:tracking-[0.22em]">
            Branding · Campaigns · Digital Graphics · Art Direction
          </span>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 text-xs text-white/50 transition hover:text-[#A4AB4B]"
          >
            Create something distinctive
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes posterFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -6px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(*) {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
