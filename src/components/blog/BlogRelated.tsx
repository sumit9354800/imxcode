import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

import { getRelatedPosts } from "@/data/blog-related";

type BlogRelatedProps = {
  currentSlug: string;
};

export default function BlogRelated({
  currentSlug,
}: BlogRelatedProps) {
  const posts = getRelatedPosts(currentSlug);

  return (
    <section className="border-t border-black/10 bg-white px-6 py-20 md:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#737A1A]">
            Keep Exploring
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-black md:text-5xl">
            More from the journal.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden border border-black/10 bg-[#f5f5f0]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-5 top-5 bg-[#737A1A] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                  {post.category}
                </span>
              </div>

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
      </div>
    </section>
  );
}