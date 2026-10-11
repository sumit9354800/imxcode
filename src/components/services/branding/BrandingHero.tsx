
"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, Asterisk, MoveUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function BrandingHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let animationFrame = 0;
    let time = 0;
    let width = 0;
    let height = 0;

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

    // Draw a perspective-projected rotating cube using Canvas only.
    const drawCube = (
      cx: number,
      cy: number,
      size: number,
      rotation: number,
      tilt: number
    ) => {
      const vertices = [
        [-1, -1, -1],
        [1, -1, -1],
        [1, 1, -1],
        [-1, 1, -1],
        [-1, -1, 1],
        [1, -1, 1],
        [1, 1, 1],
        [-1, 1, 1],
      ];

      const projected = vertices.map(([x, y, z]) => {
        const rx = x * Math.cos(rotation) - z * Math.sin(rotation);
        const rz = x * Math.sin(rotation) + z * Math.cos(rotation);

        const ry = y * Math.cos(tilt) - rz * Math.sin(tilt);
        const finalZ = y * Math.sin(tilt) + rz * Math.cos(tilt);

        const perspective = 3.7 / (3.7 + finalZ * 0.28);

        return {
          x: cx + rx * size * perspective,
          y: cy + ry * size * perspective,
          z: finalZ,
        };
      });

      const faces = [
        { points: [0, 1, 5, 4], color: "rgba(115,122,26,0.18)" },
        { points: [1, 2, 6, 5], color: "rgba(115,122,26,0.42)" },
        { points: [4, 5, 6, 7], color: "rgba(115,122,26,0.12)" },
        { points: [0, 4, 7, 3], color: "rgba(255,255,255,0.035)" },
        { points: [3, 2, 6, 7], color: "rgba(255,255,255,0.025)" },
        { points: [0, 1, 2, 3], color: "rgba(255,255,255,0.025)" },
      ];

      faces
        .map((face) => ({
          ...face,
          depth:
            face.points.reduce((sum, index) => sum + projected[index].z, 0) /
            face.points.length,
        }))
        .sort((a, b) => a.depth - b.depth)
        .forEach((face) => {
          ctx.beginPath();

          face.points.forEach((index, i) => {
            const point = projected[index];

            if (i === 0) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
          });

          ctx.closePath();
          ctx.fillStyle = face.color;
          ctx.fill();

          ctx.strokeStyle = "rgba(185,190,119,0.65)";
          ctx.lineWidth = 1;
          ctx.stroke();
        });

      // Vertex points
      projected.forEach((point, i) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, i % 2 === 0 ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle =
          i % 2 === 0 ? "rgba(190,196,100,0.95)" : "rgba(255,255,255,0.7)";
        ctx.fill();
      });
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, width, height);

      if (!reducedMotion) time += 0.009;

      const cx = width * 0.5;
      const cy = height * 0.49;
      const scale = Math.min(width, height);

      // Ambient radial glow
      const glow = ctx.createRadialGradient(
        cx,
        cy,
        8,
        cx,
        cy,
        scale * 0.49
      );

      glow.addColorStop(0, "rgba(115,122,26,0.2)");
      glow.addColorStop(0.48, "rgba(115,122,26,0.065)");
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Fine circular technical grid
      ctx.save();
      ctx.translate(cx, cy);

      for (let r = 1; r <= 5; r++) {
        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          scale * (0.085 + r * 0.064),
          scale * (0.085 + r * 0.034),
          -0.22,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          r === 3
            ? "rgba(115,122,26,0.36)"
            : "rgba(255,255,255,0.075)";

        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();

      // Radial guide lines
      ctx.save();
      ctx.translate(cx, cy);

      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12 + 0.12;
        const r1 = scale * 0.14;
        const r2 = scale * 0.4;

        ctx.beginPath();
        ctx.moveTo(Math.cos(angle) * r1, Math.sin(angle) * r1);
        ctx.lineTo(Math.cos(angle) * r2, Math.sin(angle) * r2);

        ctx.strokeStyle = "rgba(255,255,255,0.055)";
        ctx.stroke();
      }

      ctx.restore();

      // Outer orbit rings
      for (let i = 0; i < 3; i++) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * (i % 2 === 0 ? 0.15 : -0.11) + i * 0.5);

        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          scale * (0.27 + i * 0.075),
          scale * (0.105 + i * 0.032),
          -0.32,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          i === 1
            ? "rgba(115,122,26,0.7)"
            : "rgba(255,255,255,0.16)";

        ctx.lineWidth = i === 1 ? 1.4 : 1;
        ctx.stroke();

        // Orbit marker
        const angle = time * (i % 2 === 0 ? 0.8 : -0.6) + i;
        const px = Math.cos(angle) * scale * (0.27 + i * 0.075);
        const py = Math.sin(angle) * scale * (0.105 + i * 0.032);

        ctx.beginPath();
        ctx.arc(px, py, i === 1 ? 4 : 2.5, 0, Math.PI * 2);
        ctx.fillStyle =
          i === 1 ? "rgba(190,196,100,1)" : "rgba(255,255,255,0.65)";
        ctx.fill();

        ctx.restore();
      }

      // Rotating 3D cube
      drawCube(
        cx,
        cy,
        scale * 0.155,
        time * 0.55 + 0.35,
        0.55 + Math.sin(time * 0.7) * 0.08
      );

      // Central brand emblem
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(Math.sin(time * 0.45) * 0.035);

      const emblemSize = scale * 0.19;

      ctx.shadowColor = "rgba(115,122,26,0.45)";
      ctx.shadowBlur = 35;

      const emblemGradient = ctx.createLinearGradient(
        -emblemSize / 2,
        -emblemSize / 2,
        emblemSize / 2,
        emblemSize / 2
      );

      emblemGradient.addColorStop(0, "#929849");
      emblemGradient.addColorStop(0.5, "#737A1A");
      emblemGradient.addColorStop(1, "#42470D");

      ctx.beginPath();
      ctx.roundRect(
        -emblemSize / 2,
        -emblemSize / 2,
        emblemSize,
        emblemSize,
        scale * 0.025
      );

      ctx.fillStyle = emblemGradient;
      ctx.fill();

      ctx.shadowBlur = 0;

      // Abstract identity symbol
      ctx.beginPath();
      ctx.moveTo(-emblemSize * 0.2, -emblemSize * 0.27);
      ctx.lineTo(-emblemSize * 0.2, emblemSize * 0.27);
      ctx.lineTo(emblemSize * 0.02, emblemSize * 0.27);
      ctx.lineTo(emblemSize * 0.25, emblemSize * 0.03);
      ctx.lineTo(emblemSize * 0.03, -emblemSize * 0.2);
      ctx.closePath();

      ctx.strokeStyle = "rgba(255,255,255,0.95)";
      ctx.lineWidth = Math.max(1.5, scale * 0.004);
      ctx.stroke();

      // Inner frame
      ctx.beginPath();
      ctx.roundRect(
        -emblemSize * 0.39,
        -emblemSize * 0.39,
        emblemSize * 0.78,
        emblemSize * 0.78,
        scale * 0.015
      );

      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();

      // Orbiting particles
      for (let i = 0; i < 16; i++) {
        const angle = time * (i % 2 === 0 ? 0.36 : -0.25) + i * 0.9;
        const radius = scale * (0.2 + (i % 4) * 0.055);

        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius * 0.55;

        ctx.beginPath();
        ctx.arc(x, y, i % 4 === 0 ? 3 : 1.6, 0, Math.PI * 2);

        ctx.fillStyle =
          i % 4 === 0
            ? "rgba(175,184,82,0.95)"
            : "rgba(255,255,255,0.42)";

        ctx.fill();
      }

      // Small technical crosshair
      const corners = [
        [width * 0.12, height * 0.16, 1, 1],
        [width * 0.88, height * 0.16, -1, 1],
        [width * 0.12, height * 0.82, 1, -1],
        [width * 0.88, height * 0.82, -1, -1],
      ];

      corners.forEach(([x, y, dx, dy]) => {
        ctx.beginPath();
        ctx.moveTo(x, y + dy * 12);
        ctx.lineTo(x, y);
        ctx.lineTo(x + dx * 12, y);

        ctx.strokeStyle = "rgba(255,255,255,0.24)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      if (!reducedMotion) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* Technical background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.065]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 95%)",
        }}
      />

      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-10 h-[440px] w-[440px] rounded-full bg-[#737A1A]/15 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-[420px] w-[420px] rounded-full bg-[#737A1A]/10 blur-[140px]"
      />

      {/* Vertical guide */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[5%] top-0 hidden w-px bg-white/[0.06] xl:block"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 pb-10 pt-8 sm:px-8 sm:pb-14 sm:pt-10 lg:px-12 lg:pt-12 xl:px-16">
        {/* Top metadata */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/55 sm:text-xs">
              IMX / Branding Studio
            </span>
          </div>

          <div className="hidden items-center gap-2.5 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#737A1A] opacity-50 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#929849]" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
              Strategy · Identity · Design
            </span>
          </div>
        </div>

        {/* Main hero */}
        <div className="grid items-center gap-8 py-12 sm:gap-10 sm:py-16 lg:grid-cols-[1.03fr_0.97fr] lg:gap-5 lg:py-16 xl:gap-10 xl:py-20">
          {/* Copy */}
          <div className="relative z-10 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#737A1A]/30 bg-[#737A1A]/10 px-3.5 py-2">
              <Asterisk size={14} className="text-[#A4AB4B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B6BB76]">
                Brands with a point of view
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(2.85rem,6.2vw,6.4rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
              Make your
              <br />
              brand{" "}
              <span className="relative inline-block text-[#929849]">
                impossible
                <span className="absolute -bottom-1 left-1 h-[3px] w-[42%] bg-[#737A1A] sm:bottom-0" />
              </span>
              <br />
              to ignore<span className="text-[#737A1A]">.</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
              We turn your vision into a distinctive brand identity — from
              strategy and visual language to the details people recognize,
              remember and trust.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Link
                href="#branding-types"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#737A1A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#929849] hover:text-black"
              >
                Explore our branding
                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/85 transition duration-300 hover:border-[#737A1A] hover:bg-[#737A1A]/10 hover:text-white"
              >
                Start a project
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* Brand process */}
            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-5 sm:mt-12 sm:pt-6">
              {[
                { number: "01", label: "Discover", detail: "Strategy" },
                { number: "02", label: "Define", detail: "Identity" },
                { number: "03", label: "Deliver", detail: "Consistency" },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className={index > 0 ? "border-l border-white/10 pl-4 sm:pl-6" : ""}
                >
                  <span className="font-mono text-[10px] text-[#929849]">
                    {item.number}
                  </span>
                  <p className="mt-2 text-sm font-medium text-white/90 sm:text-base">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/35 sm:text-xs">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Animated brand identity visual */}
          <div className="relative mx-auto w-full max-w-[610px] lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080908] sm:rounded-[2rem]">
              {/* Canvas scene */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              />

              {/* Corner metadata */}
              <div className="absolute left-4 top-4 z-10 flex items-center gap-2 sm:left-6 sm:top-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#929849]" />
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 sm:text-[10px]">
                  Identity system / 001
                </span>
              </div>

              <div className="absolute right-4 top-4 z-10 font-mono text-[9px] text-white/30 sm:right-6 sm:top-6 sm:text-[10px]">
                IMX—BS
              </div>

              {/* Floating brand card */}
              <div className="absolute left-[6%] top-[29%] z-10 animate-[brandFloat_6s_ease-in-out_infinite] rounded-xl border border-white/10 bg-[#10110D]/90 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md sm:left-[7%] sm:p-4 motion-reduce:animate-none">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#737A1A] sm:h-9 sm:w-9">
                    <Asterisk size={21} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-white sm:text-xs">
                      Visual identity
                    </p>
                    <p className="mt-1 text-[9px] text-white/40">
                      Distinct by design
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating palette card */}
              <div className="absolute right-[5%] top-[42%] z-10 animate-[brandFloat_7s_ease-in-out_infinite] rounded-xl border border-white/10 bg-[#10110D]/90 p-3 backdrop-blur-md [animation-delay:-2s] sm:right-[6%] sm:p-4 motion-reduce:animate-none">
                <p className="mb-2.5 text-[9px] uppercase tracking-[0.16em] text-white/45">
                  Brand palette
                </p>
                <div className="flex gap-1.5">
                  <span className="h-5 w-5 rounded-full border border-white/10 bg-[#737A1A]" />
                  <span className="h-5 w-5 rounded-full border border-white/10 bg-[#D7D9C2]" />
                  <span className="h-5 w-5 rounded-full border border-white/10 bg-[#171814]" />
                  <span className="h-5 w-5 rounded-full border border-white/10 bg-[#85877A]" />
                </div>
              </div>

              {/* Bottom editorial label */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between border-t border-white/10 pt-4 sm:bottom-6 sm:left-6 sm:right-6 sm:pt-5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-white/35 sm:text-[10px]">
                    Brand direction
                  </p>
                  <p className="mt-1 text-sm font-medium tracking-tight sm:text-base">
                    Built to be remembered.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[#929849]">
                  <span className="hidden text-[9px] uppercase tracking-[0.16em] sm:block">
                    Explore identity
                  </span>
                  <MoveUpRight size={17} />
                </div>
              </div>

              {/* Decorative coordinate */}
              <div className="absolute bottom-[19%] left-[7%] z-10 hidden font-mono text-[9px] text-white/25 sm:block">
                X 072.18 / Y 014.06
              </div>

              <div className="absolute right-[7%] top-[19%] z-10 hidden h-5 w-5 border-r border-t border-[#737A1A]/70 sm:block" />
              <div className="absolute bottom-[19%] right-[7%] z-10 hidden h-5 w-5 border-b border-r border-[#737A1A]/70 sm:block" />
            </div>

            {/* Below visual metadata */}
            <div className="mt-4 flex items-center justify-between gap-4 px-1">
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/35 sm:text-[10px] sm:tracking-[0.2em]">
                Strategy meets expression
              </p>
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-[#737A1A]" />
                <span className="text-[9px] uppercase tracking-[0.16em] text-white/45 sm:text-[10px]">
                  Designed with intent
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <p className="text-[9px] uppercase tracking-[0.18em] text-white/30 sm:text-[10px] sm:tracking-[0.24em]">
            Brand strategy / Visual identity / Brand systems
          </p>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 text-xs text-white/55 transition hover:text-[#A4AB4B]"
          >
            Have a brand in mind?
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes brandFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -8px, 0);
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
