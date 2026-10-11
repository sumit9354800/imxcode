
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ShoppingBag,
  ShoppingCart,
  Heart,
  Star,
  Package,
  TrendingUp,
  Zap,
  ShieldCheck,
} from "lucide-react";

const salesBars = [35, 52, 42, 66, 49, 75, 60, 88, 70, 96, 78, 100];

export default function EcommerceHero() {
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

      // Ambient commerce glow
      const glow = ctx.createRadialGradient(
        cx,
        cy,
        2,
        cx,
        cy,
        scale * 0.48
      );

      glow.addColorStop(0, "rgba(115,122,26,0.19)");
      glow.addColorStop(0.5, "rgba(115,122,26,0.055)");
      glow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Perspective rings
      ctx.save();
      ctx.translate(cx, cy);

      for (let i = 0; i < 7; i++) {
        const radius = scale * (0.12 + i * 0.055);

        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          radius,
          radius * 0.36,
          -0.28,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          i === 3
            ? "rgba(115,122,26,0.38)"
            : "rgba(255,255,255,0.075)";

        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();

      // Rotating commerce orbit
      for (let i = 0; i < 3; i++) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * (i === 1 ? -0.12 : 0.09) + i * 0.8);

        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          scale * (0.25 + i * 0.065),
          scale * (0.095 + i * 0.025),
          -0.25,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          i === 1
            ? "rgba(115,122,26,0.75)"
            : "rgba(255,255,255,0.18)";

        ctx.stroke();

        const angle = time * (i % 2 === 0 ? 0.5 : -0.4);
        const px = Math.cos(angle) * scale * (0.25 + i * 0.065);
        const py = Math.sin(angle) * scale * (0.095 + i * 0.025);

        ctx.beginPath();
        ctx.arc(px, py, i === 1 ? 3.5 : 2, 0, Math.PI * 2);
        ctx.fillStyle = i === 1 ? "#A5AD4D" : "#D6D6D6";
        ctx.fill();

        ctx.restore();
      }

      // Floating isometric product cube
      const cubeSize = scale * 0.15;
      const rotation = time * 0.3 + 0.5;
      const tilt = 0.6;

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

      const points = vertices.map(([x, y, z]) => {
        const rx = x * Math.cos(rotation) - z * Math.sin(rotation);
        const rz = x * Math.sin(rotation) + z * Math.cos(rotation);

        const ry = y * Math.cos(tilt) - rz * Math.sin(tilt);
        const finalZ = y * Math.sin(tilt) + rz * Math.cos(tilt);
        const perspective = 3.8 / (3.8 + finalZ * 0.25);

        return {
          x: cx + rx * cubeSize * perspective,
          y: cy + ry * cubeSize * perspective,
          z: finalZ,
        };
      });

      const faces = [
        { indices: [0, 1, 5, 4], fill: "rgba(115,122,26,0.12)" },
        { indices: [1, 2, 6, 5], fill: "rgba(115,122,26,0.4)" },
        { indices: [4, 5, 6, 7], fill: "rgba(115,122,26,0.18)" },
        { indices: [0, 4, 7, 3], fill: "rgba(255,255,255,0.04)" },
        { indices: [3, 2, 6, 7], fill: "rgba(255,255,255,0.025)" },
        { indices: [0, 1, 2, 3], fill: "rgba(255,255,255,0.02)" },
      ];

      faces
        .map((face) => ({
          ...face,
          depth:
            face.indices.reduce((sum, index) => sum + points[index].z, 0) /
            face.indices.length,
        }))
        .sort((a, b) => a.depth - b.depth)
        .forEach((face) => {
          ctx.beginPath();

          face.indices.forEach((index, i) => {
            const point = points[index];

            if (i === 0) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
          });

          ctx.closePath();
          ctx.fillStyle = face.fill;
          ctx.fill();

          ctx.strokeStyle = "rgba(154,163,65,0.7)";
          ctx.lineWidth = 1;
          ctx.stroke();
        });

      // Orbiting data particles
      for (let i = 0; i < 22; i++) {
        const angle = time * (i % 2 ? -0.3 : 0.4) + i * 0.75;
        const radius = scale * (0.17 + (i % 5) * 0.047);

        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius * 0.53;

        ctx.beginPath();
        ctx.arc(x, y, i % 4 === 0 ? 2.8 : 1.4, 0, Math.PI * 2);
        ctx.fillStyle =
          i % 4 === 0
            ? "rgba(164,173,69,0.95)"
            : "rgba(255,255,255,0.45)";
        ctx.fill();
      }

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
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 95%)",
        }}
      />

      {/* Ambient lights */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#737A1A]/15 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-white/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 pb-10 pt-8 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16 xl:px-16">
        {/* Top metadata */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#737A1A]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.27em] text-white/50 sm:text-xs">
              E-commerce Development
            </span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#929849]" />
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
              Digital commerce systems
            </span>
          </div>
        </div>

        {/* Main hero */}
        <div className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:py-16 xl:gap-12 xl:py-20">
          {/* Copy */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2.5 border border-[#737A1A]/30 bg-[#737A1A]/10 px-3.5 py-2">
              <ShoppingBag size={14} className="text-[#A4AB4B]" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#C0C58A] sm:text-[10px]">
                From discovery to checkout
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(2.8rem,5.8vw,6rem)] font-semibold leading-[0.92] tracking-[-0.075em]">
              Commerce
              <br />
              experiences
              <br />
              <span className="text-[#929849]">built to sell.</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:mt-8 sm:text-base sm:leading-8">
              We build e-commerce experiences that bring products, customers
              and business operations together — from high-converting
              storefronts to custom commerce platforms.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Link
                href="#ecommerce-types"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#737A1A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#929849] hover:text-black"
              >
                Explore commerce
                <ArrowDown
                  size={17}
                  strokeWidth={1.8}
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
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Commerce capabilities */}
            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-5 sm:mt-12 sm:pt-6">
              {[
                { number: "01", label: "Discover", detail: "Product journeys" },
                { number: "02", label: "Convert", detail: "Frictionless checkout" },
                { number: "03", label: "Grow", detail: "Commerce systems" },
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

          {/* Commerce visual */}
          <div className="relative mx-auto w-full max-w-[700px] lg:max-w-none">
            {/* Canvas background */}
            <div className="pointer-events-none absolute inset-[-8%]">
              <canvas
                ref={canvasRef}
                className="h-full w-full"
                aria-hidden="true"
              />
            </div>

            {/* Store window */}
            <div className="relative z-10 animate-[commerceFloat_7s_ease-in-out_infinite] border border-white/15 bg-[#080908]/95 shadow-[0_35px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl motion-reduce:animate-none">
              {/* Browser bar */}
              <div className="flex h-11 items-center justify-between border-b border-white/10 px-3 sm:h-12 sm:px-5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#737A1A]" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <div className="flex items-center gap-2">
                  <ShoppingBag size={12} className="text-[#929849]" />
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/35 sm:text-[9px]">
                    IMX / Commerce Studio
                  </span>
                </div>

                <span className="text-[8px] uppercase tracking-widest text-white/30">
                  Live
                </span>
              </div>

              {/* Store navigation */}
              <div className="flex h-10 items-center justify-between border-b border-white/10 px-3 sm:h-12 sm:px-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center bg-[#737A1A] text-black">
                    <Zap size={11} />
                  </div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.15em] sm:text-[10px]">
                    FORM / OBJECT
                  </span>
                </div>

                <div className="hidden items-center gap-4 sm:flex">
                  <span className="text-[8px] text-white/35">Shop</span>
                  <span className="text-[8px] text-white/35">Objects</span>
                  <span className="text-[8px] text-white/35">About</span>
                </div>

                <div className="relative flex h-7 w-7 items-center justify-center border border-white/10">
                  <ShoppingCart size={13} className="text-white/75" />
                  <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#737A1A] text-[7px] font-semibold text-black">
                    2
                  </span>
                </div>
              </div>

              {/* Product page */}
              <div className="grid grid-cols-[0.9fr_1.1fr]">
                {/* Product stage */}
                <div className="relative flex min-h-[285px] items-center justify-center overflow-hidden border-r border-white/10 bg-[#0B0C09] p-3 sm:min-h-[390px] sm:p-6">
                  <span className="absolute left-3 top-4 text-[7px] uppercase tracking-[0.2em] text-white/30 sm:left-5 sm:top-5 sm:text-[8px]">
                    Featured object / 01
                  </span>

                  {/* Product frame */}
                  <div className="absolute inset-5 border border-white/[0.045] sm:inset-8" />

                  {/* Product object */}
                  <div className="relative flex aspect-[0.78] w-[77%] max-w-[230px] items-center justify-center">
                    <div className="absolute inset-0 rotate-[-8deg] border border-[#737A1A]/20 bg-gradient-to-br from-[#737A1A]/10 via-transparent to-white/[0.025]" />

                    <div className="relative h-[65%] w-[59%] animate-[productFloat_6s_ease-in-out_infinite] [transform:perspective(600px)_rotateY(-14deg)_rotateX(4deg)] motion-reduce:animate-none">
                      {/* Box front */}
                      <div className="absolute inset-0 border border-[#929849]/60 bg-gradient-to-br from-[#737A1A]/25 via-[#171912] to-[#090A08] shadow-[15px_20px_40px_rgba(0,0,0,0.5)]">
                        <div className="absolute inset-3 border border-white/10 sm:inset-4" />

                        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#929849]/60 bg-[#737A1A]/10 sm:h-20 sm:w-20">
                          <div className="h-8 w-8 rounded-full border border-[#929849]/70 sm:h-12 sm:w-12">
                            <div className="m-auto mt-[27%] h-[46%] w-[46%] rounded-full bg-[#929849]/60 shadow-[0_0_25px_rgba(115,122,26,0.5)]" />
                          </div>
                        </div>

                        <span className="absolute bottom-4 left-3 text-[6px] uppercase tracking-[0.2em] text-white/50 sm:bottom-5 sm:left-4 sm:text-[8px]">
                          Designed to last
                        </span>
                      </div>

                      {/* Product right depth */}
                      <div className="absolute -right-[13px] top-[7px] h-full w-[13px] origin-left skew-y-[35deg] border-r border-t border-[#737A1A]/50 bg-[#272B15]" />

                      {/* Product top depth */}
                      <div className="absolute -top-[13px] left-[7px] h-[13px] w-full origin-bottom skew-x-[55deg] border-l border-t border-[#929849]/50 bg-[#3C4120]" />
                    </div>

                    {/* Product spotlight */}
                    <div className="pointer-events-none absolute bottom-[-5%] left-[10%] right-[10%] h-5 rounded-full bg-[#737A1A]/25 blur-xl" />
                  </div>

                  {/* Stage markers */}
                  <div className="absolute bottom-4 left-3 flex items-center gap-2 sm:bottom-5 sm:left-5">
                    <span className="h-px w-5 bg-[#929849]" />
                    <span className="text-[7px] uppercase tracking-[0.15em] text-white/35">
                      Object 001
                    </span>
                  </div>

                  <div className="absolute right-3 top-4 flex items-center gap-1.5 sm:right-5 sm:top-5">
                    <Star size={10} className="text-[#929849]" />
                    <span className="text-[7px] text-white/35">Featured</span>
                  </div>
                </div>

                {/* Product details */}
                <div className="flex min-w-0 flex-col justify-between p-3 sm:p-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[7px] uppercase tracking-[0.18em] text-[#A4AB4B] sm:text-[8px]">
                      <span className="h-1 w-1 rounded-full bg-[#929849]" />
                      New collection
                    </span>

                    <h2 className="mt-4 text-base font-medium leading-tight tracking-tight sm:mt-5 sm:text-2xl">
                      Form
                      <br />
                      Everyday.
                    </h2>

                    <p className="mt-2 text-[8px] leading-4 text-white/40 sm:text-[10px] sm:leading-5">
                      Thoughtful design.
                      <br />
                      Everyday essentials.
                    </p>

                    <div className="mt-4 flex items-center gap-1 sm:mt-5">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Star
                          key={item}
                          size={9}
                          className="fill-[#929849] text-[#929849]"
                        />
                      ))}
                      <span className="ml-1 text-[7px] text-white/30">
                        (128)
                      </span>
                    </div>

                    <div className="mt-5 border-t border-white/10 pt-4 sm:mt-6 sm:pt-5">
                      <span className="text-[7px] uppercase tracking-[0.15em] text-white/35 sm:text-[8px]">
                        Price
                      </span>

                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <span className="text-lg font-medium sm:text-2xl">
                          $128
                        </span>
                        <span className="text-[8px] text-white/30 line-through">
                          $160
                        </span>
                      </div>

                      <span className="mt-2 inline-flex items-center gap-1.5 text-[7px] text-[#A4AB4B] sm:text-[8px]">
                        <Package size={10} />
                        In stock · Ready to ship
                      </span>
                    </div>

                    <div className="mt-5">
                      <span className="text-[7px] uppercase tracking-[0.15em] text-white/35 sm:text-[8px]">
                        Select finish
                      </span>

                      <div className="mt-2 flex gap-2">
                        <span className="h-5 w-5 border border-[#929849] bg-[#737A1A]/40 p-0.5">
                          <span className="block h-full w-full border border-black/40" />
                        </span>
                        <span className="h-5 w-5 border border-white/10 bg-[#242424]" />
                        <span className="h-5 w-5 border border-white/10 bg-[#77766C]" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex h-9 items-center justify-center gap-2 bg-[#737A1A] text-[8px] font-semibold uppercase tracking-[0.15em] text-black transition-colors sm:h-11 sm:text-[9px]">
                      <ShoppingBag size={12} />
                      Add to cart
                    </div>

                    <div className="mt-2 flex items-center justify-center gap-1.5 text-[7px] text-white/35 sm:text-[8px]">
                      <ShieldCheck size={10} />
                      Secure checkout
                    </div>
                  </div>
                </div>
              </div>

              {/* Store footer */}
              <div className="flex items-center justify-between border-t border-white/10 px-3 py-2.5 sm:px-5">
                <span className="text-[7px] uppercase tracking-[0.16em] text-white/30">
                  Product / 001
                </span>
                <span className="text-[7px] uppercase tracking-[0.16em] text-white/30">
                  Crafted for commerce
                </span>
              </div>
            </div>

            {/* Floating sales card */}
            <div className="absolute -bottom-5 -left-2 z-20 hidden animate-[commerceFloat_6s_ease-in-out_infinite] border border-white/10 bg-[#10110D]/95 p-4 shadow-xl backdrop-blur-xl sm:block lg:-left-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center bg-[#737A1A]/15 text-[#A4AB4B]">
                  <TrendingUp size={17} />
                </div>

                <div>
                  <span className="block text-[8px] uppercase tracking-[0.18em] text-white/35">
                    Commerce flow
                  </span>
                  <span className="mt-1 block text-xs font-medium">
                    Discover → Purchase
                  </span>
                </div>
              </div>

              <div className="mt-3 flex h-7 items-end gap-1">
                {salesBars.slice(0, 8).map((bar, index) => (
                  <div
                    key={index}
                    className="w-3 bg-[#737A1A]/80"
                    style={{ height: `${bar}%` }}
                  />
                ))}
                <span className="ml-2 self-center text-[8px] text-[#A4AB4B]">
                  Growth
                </span>
              </div>
            </div>

            {/* Floating cart card */}
            <div className="absolute -right-2 -top-5 z-20 hidden animate-[commerceFloat_7s_ease-in-out_infinite] border border-[#737A1A]/30 bg-[#737A1A] px-4 py-3 text-black shadow-[0_15px_40px_rgba(0,0,0,0.3)] [animation-delay:-2s] sm:block lg:-right-4 motion-reduce:animate-none">
              <div className="flex items-center gap-2">
                <ShoppingCart size={15} />
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em]">
                  Checkout ready
                </span>
              </div>

              <p className="mt-1.5 text-xs font-medium">
                Built around your business
              </p>
            </div>

            {/* Visual caption */}
            <div className="mt-5 flex items-center justify-between gap-3 px-1">
              <p className="text-[9px] uppercase tracking-[0.15em] text-white/35 sm:text-[10px] sm:tracking-[0.2em]">
                Storefronts · Commerce · Conversion
              </p>

              <div className="flex items-center gap-2">
                <span className="h-px w-5 bg-[#737A1A]" />
                <span className="text-[9px] uppercase tracking-[0.14em] text-white/45 sm:text-[10px]">
                  Commerce / 001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <span className="text-[9px] uppercase tracking-[0.16em] text-white/30 sm:text-[10px] sm:tracking-[0.22em]">
            Storefronts · Commerce Systems · Conversion
          </span>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 text-xs text-white/50 transition hover:text-[#A4AB4B]"
          >
            Build your commerce experience
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes commerceFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -7px, 0);
          }
        }

        @keyframes productFloat {
          0%,
          100% {
            transform: perspective(600px) rotateY(-14deg) rotateX(4deg)
              translateY(0);
          }
          50% {
            transform: perspective(600px) rotateY(-9deg) rotateX(7deg)
              translateY(-5px);
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

