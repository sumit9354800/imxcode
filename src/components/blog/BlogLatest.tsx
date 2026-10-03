"use client";

import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { useMemo, useState } from "react";

import { blogPosts } from "@/data/blog";
import { blogCategories } from "@/data/blog-categories";
import Image from "next/image";

export default function BlogLatest() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof blogCategories)[number]>("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return blogPosts.filter((post) => !post.featured);
    }

    return blogPosts.filter(
      (post) => post.category === activeCategory && !post.featured,
    );
  }, [activeCategory]);

  return (
    <section className="bg-white px-6 py-20 md:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#737A1A]">
            Latest Articles
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-black md:text-5xl">
              Ideas worth exploring.
            </h2>

            <p className="max-w-md text-sm leading-6 text-black/45">
              Practical thoughts on technology, design, business and building
              better digital experiences.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 overflow-x-auto border-b border-black/10">
          <div className="flex min-w-max">
            {blogCategories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-5 py-4 text-sm font-medium transition md:px-6 ${
                    isActive ? "text-black" : "text-black/35 hover:text-black"
                  }`}
                >
                  {category}

                  {isActive && (
                    <span className="absolute bottom-[-1px] left-0 h-0.5 w-full bg-[#737A1A]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles */}
        {filteredPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col border border-black/10 bg-[#f5f5f0] transition hover:border-black/20"
              >
                {/* Image / Visual */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                      backgroundSize: "45px 45px",
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-20 w-20 md:h-28 md:w-28">
                      <Image
                        src="/icons/favicon-light.png"
                        alt="IMX Digital Studio logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <span className="absolute left-5 top-5 bg-[#737A1A] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-black/35">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock3 size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-tight tracking-tight text-black transition group-hover:text-[#737A1A]">
                    {post.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-black/50">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-7 flex items-center gap-2 text-sm font-semibold text-black transition hover:text-[#737A1A]"
                  >
                    Read article
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-black/10 bg-[#f5f5f0] px-6 py-16 text-center">
            <p className="text-sm text-black/45">
              More articles in this category are coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
