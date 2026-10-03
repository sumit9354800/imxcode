import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { blogArticles } from "@/data/blog-articles";
import BlogRelated from "@/components/blog/BlogRelated";
import BlogFinalCta from "@/components/blog/BlogFinalCta";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;

  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-[#f5f5f0]">
      {/* Article Hero */}
      <section className="bg-black px-6 py-24 text-white md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to journal
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#737A1A] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em]">
              {article.category}
            </span>

            <span className="text-xs text-white/35">{article.date}</span>

            <span className="text-xs text-white/35">{article.readTime}</span>
          </div>

          <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            {article.title}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-3xl">
          {article.sections.map((section) => (
            <section key={section.heading} className="mb-14">
              <h2 className="text-2xl font-semibold tracking-tight text-black md:text-3xl">
                {section.heading}
              </h2>

              <div className="mt-5 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-8 text-black/60"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
      <BlogRelated currentSlug={article.slug} />
      <BlogFinalCta />
    </main>
  );
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = blogArticles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,

    alternates: {
      canonical: `https://imxcode.in/blog/${article.slug}`,
    },

    openGraph: {
      type: "article",
      url: `https://imxcode.in/blog/${article.slug}`,
      title: article.title,
      description: article.excerpt,
      siteName: "IMX Digital Studio",
      locale: "en_IN",
      publishedTime: article.date,
      images: [
        {
          url: `/blog/${article.slug}.webp`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [`/blog/${article.slug}.webp`],
    },
  };
}
