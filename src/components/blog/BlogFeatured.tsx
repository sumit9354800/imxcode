import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { featuredBlogPost } from "@/data/blog-featured";
import Image from "next/image";

export default function BlogFeatured() {
  const post = featuredBlogPost;

  return (
    <section className="bg-[#f5f5f0] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <div className="mb-10 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#737A1A]">
            Featured Article
          </p>

          <span className="text-xs text-black/35">01 / Featured</span>
        </div>

        {/* Featured Layout */}
        <article className="grid overflow-hidden bg-black lg:grid-cols-[1.15fr_0.85fr]">
          {/* Visual */}
          <div className="relative min-h-[360px] overflow-hidden bg-[#111] md:min-h-[500px]">
            {/* Decorative composition */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            <div className="absolute left-10 top-10 h-32 w-32 border border-[#737A1A]/40 md:left-16 md:top-16 md:h-48 md:w-48" />

            <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full border border-[#737A1A]/30 md:bottom-16 md:right-16 md:h-72 md:w-72" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-[#737A1A]/50 md:h-56 md:w-56">
                <div className="absolute h-24 w-24 rounded-full bg-[#737A1A]/20 blur-2xl md:h-36 md:w-36" />

                <div className="relative h-28 w-28 md:h-40 md:w-40">
                  <Image
                    src="/icons/favicon-light.png"
                    alt="IMX Digital Studio logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.2em] text-white/30">
              IMX Journal / 001
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-8 text-white md:p-12 lg:p-14">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-[#737A1A] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                  {post.category}
                </span>

                <span className="text-xs text-white/35">{post.date}</span>
              </div>

              <h2 className="mt-8 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                {post.title}
              </h2>

              <p className="mt-6 text-sm leading-7 text-white/50 md:text-base">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-12">
              <div className="mb-7 flex items-center gap-2 text-xs text-white/35">
                <Clock3 size={14} />
                {post.readTime}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="group flex w-fit items-center gap-3 bg-[#737A1A] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#626817]"
              >
                Read article
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
