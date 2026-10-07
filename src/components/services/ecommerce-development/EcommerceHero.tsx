import Link from "next/link";
import { ArrowDown, ArrowUpRight, ShoppingBag } from "lucide-react";

export default function EcommerceHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="absolute -right-32 top-20 h-[520px] w-[520px] rounded-full bg-[#737A1A]/15 blur-[120px]" />

        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-white/[0.025] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-40 xl:px-16">
        {/* Top label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#737A1A]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55">
            E-commerce Development
          </span>
        </div>

        {/* Main */}
        <div className="mt-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          {/* Copy */}
          <div>
            <h1 className="max-w-4xl text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              Commerce experiences
              <br />
              <span className="text-[#737A1A]">built to sell.</span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
              We build e-commerce experiences that bring products, customers
              and business operations together — from high-converting
              storefronts to custom commerce platforms.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#ecommerce-types"
                className="group inline-flex items-center gap-3 bg-[#737A1A] px-5 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1"
              >
                Explore commerce
                <ArrowDown
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border border-white/15 px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04]"
              >
                Start a project
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Commerce visual */}
          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="relative aspect-[1.05/1] overflow-hidden border border-white/10 bg-[#080808]">
              {/* Browser chrome */}
              <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                  Store / Product
                </span>

                <ShoppingBag
                  size={15}
                  strokeWidth={1.5}
                  className="text-[#737A1A]"
                />
              </div>

              <div className="grid h-[calc(100%-44px)] grid-cols-[0.9fr_1.1fr]">
                {/* Product preview */}
                <div className="relative border-r border-white/10 p-5 sm:p-7">
                  <div className="absolute left-5 top-5 text-[8px] uppercase tracking-[0.25em] text-white/30 sm:left-7 sm:top-7">
                    Featured
                  </div>

                  <div className="flex h-full items-center justify-center">
                    <div className="relative aspect-[0.78] w-[72%] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.015]">
                      <div className="absolute left-1/2 top-1/2 h-[62%] w-[52%] -translate-x-1/2 -translate-y-1/2 border border-[#737A1A]/50 bg-[#737A1A]/10">
                        <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#737A1A]/30" />
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="h-1.5 w-16 bg-white/15" />
                        <div className="mt-2 h-1 w-10 bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product details */}
                <div className="flex flex-col justify-between p-5 sm:p-7">
                  <div>
                    <span className="text-[8px] uppercase tracking-[0.25em] text-[#737A1A]">
                      New Collection
                    </span>

                    <div className="mt-4 h-4 w-32 bg-white/15" />
                    <div className="mt-2 h-2 w-20 bg-white/10" />

                    <div className="mt-7 h-px w-full bg-white/10" />

                    <div className="mt-6 flex items-end justify-between">
                      <div>
                        <div className="h-2 w-12 bg-white/10" />
                        <div className="mt-2 h-5 w-20 bg-white/20" />
                      </div>

                      <span className="text-[9px] text-white/30">
                        In stock
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 h-9 w-full border border-white/10" />

                    <div className="flex h-10 items-center justify-center bg-[#737A1A] text-[9px] font-semibold uppercase tracking-[0.2em] text-black">
                      Add to cart
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating commerce metrics */}
            <div className="absolute -bottom-5 -left-5 hidden border border-white/10 bg-[#0b0b0b] px-5 py-4 sm:block">
              <span className="block text-[8px] uppercase tracking-[0.25em] text-white/30">
                Experience
              </span>
              <span className="mt-1 block text-sm font-medium">
                Discover → Purchase
              </span>
            </div>

            <div className="absolute -right-5 -top-5 hidden border border-[#737A1A]/30 bg-[#737A1A] px-5 py-4 text-black sm:block">
              <span className="block text-[8px] uppercase tracking-[0.25em] text-black/55">
                Commerce
              </span>
              <span className="mt-1 block text-sm font-semibold">
                Built around your business
              </span>
            </div>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
            Storefronts · Commerce Systems · Conversion
          </span>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
            IMX / E-commerce
          </span>
        </div>
      </div>
    </section>
  );
}