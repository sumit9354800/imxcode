import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Gauge,
  Search,
  ShieldCheck,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import Hero3D from "@/components/resources/Hero3D";

export const metadata: Metadata = {
  title: "Web Development Resources, SEO & Website Guides | IMX",
  description:
    "Explore practical website development, SEO, website performance and security guides to build a better online presence.",
  alternates: {
    canonical: "https://imxcode.in/resources",
  },
  openGraph: {
    title: "Practical Web Resources | IMX Digital Studio",
    description:
      "Useful guides for building, improving and maintaining websites.",
    url: "https://imxcode.in/resources",
    type: "website",
  },
};

const topics = [
  {
    title: "Website Performance",
    description:
      "Page speed, image optimization, Core Web Vitals and the technical choices that shape user experience.",
    icon: Gauge,
    href: "/blog",
    label: "Explore guides",
    featured: true,
  },
  {
    title: "SEO Fundamentals",
    description:
      "Search intent, technical SEO, metadata, internal links and content that is useful to your audience.",
    icon: Search,
    href: "/services/seo",
    label: "Explore SEO",
  },
  {
    title: "Web Development",
    description:
      "Responsive layouts, modern web technologies, accessibility and the foundations of maintainable websites.",
    icon: Code2,
    href: "/services/website-development",
    label: "Explore development",
  },
  {
    title: "Website Security",
    description:
      "Why updates, HTTPS, secure authentication, reliable backups and careful access management matter.",
    icon: ShieldCheck,
    href: "/services/website-maintenance",
    label: "Explore maintenance",
    featured: true,
  },
];

const checklist = [
  "Make your website easy to navigate on mobile devices.",
  "Compress images and avoid unnecessary scripts.",
  "Use descriptive page titles and clear headings.",
  "Publish original content that answers real questions.",
  "Keep software, dependencies and security practices updated.",
];

function AdvertisementSpace({ label }: { label: string }) {
  return (
    <div
      aria-label="Advertisement placement reserved for future advertising"
      className="mx-auto flex min-h-[120px] w-full max-w-5xl items-center justify-center border-y border-dashed border-black/15 px-4 py-8"
    >
      <div className="text-center">
        <p className="text-[10px] font-medium tracking-[0.2em] text-black/45">
          Advertisement
        </p>
        <p className="mt-2 text-xs text-black/45">{label}</p>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      {/* Hero */}
      <section className="relative bg-black px-6 pb-16 pt-16 text-white sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-[#737A1A]/25 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 h-[380px] w-[380px] rounded-full bg-[#737A1A]/10 blur-[120px]"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#a9b05a]" />
              IMX Digital Resources
            </div>

            <h1 className="mt-7 max-w-2xl text-4xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Build a better
              <span className="block text-[#a9b05a]">website, smarter.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Practical guides to website development, SEO, performance and
              security, written to help you make better decisions online.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#explore"
                className="inline-flex items-center gap-2 rounded-full bg-[#737A1A] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#858d20] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#a9b05a]/40"
              >
                Explore resources
                <ArrowDown size={16} />
              </a>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              >
                Visit our blog
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/55">
              {[
                "Practical information",
                "Web and SEO topics",
                "Free to read",
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#a9b05a]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* 3D model */}
          <Hero3D />
        </div>
      </section>

      {/* First ad placement */}
      <section className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <AdvertisementSpace label="Top content placement" />
        </div>
      </section>

      {/* Topics */}
      <section id="explore" className="px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Pick a topic and start reading.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-black/65 sm:text-base">
              Each topic links to a guide or to the service that helps you act
              on it.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => {
              const Icon = topic.icon;
              const dark = topic.featured;

              return (
                <article
                  key={topic.title}
                  className={`group relative flex min-h-[280px] flex-col overflow-hidden rounded-[1.75rem] p-7 transition-all duration-300 hover:-translate-y-1 sm:p-9 ${
                    dark
                      ? "bg-black text-white"
                      : "border border-black/10 bg-[#fafaf8] text-black hover:border-[#737A1A]/50"
                  }`}
                >
                  {dark && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#737A1A]/35 blur-[70px] transition-opacity group-hover:opacity-100"
                    />
                  )}

                  <span
                    className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${
                      dark
                        ? "bg-[#737A1A] text-white"
                        : "bg-[#737A1A]/10 text-[#737A1A]"
                    }`}
                  >
                    <Icon size={22} strokeWidth={1.7} />
                  </span>

                  <h3 className="relative mt-8 text-2xl font-semibold tracking-tight">
                    {topic.title}
                  </h3>

                  <p
                    className={`relative mt-3 max-w-md text-sm leading-6 ${
                      dark ? "text-white/65" : "text-black/65"
                    }`}
                  >
                    {topic.description}
                  </p>

                  <Link
                    href={topic.href}
                    className={`relative mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:underline ${
                      dark ? "hover:text-[#a9b05a]" : "hover:text-[#737A1A]"
                    }`}
                  >
                    {topic.label}
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Second ad placement */}
      <section className="bg-[#f7f7f4] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <AdvertisementSpace label="In-content placement" />
        </div>
      </section>

      {/* Checklist */}
      <section className="px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
              A practical website improvement checklist.
            </h2>

            <p className="mt-5 text-sm leading-7 text-black/65 sm:text-base">
              A useful website needs more than an attractive design. It should
              load reliably, work across screen sizes, communicate clearly and
              protect its visitors.
            </p>

            <Link
              href="/blog"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold hover:text-[#737A1A]"
            >
              Read more on the blog
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="rounded-[1.75rem] border border-black/10 bg-[#fafaf8] p-6 sm:p-9">
            <h3 className="text-lg font-semibold">Five things to review</h3>

            <ol className="mt-6 divide-y divide-black/10">
              {checklist.map((item, index) => (
                <li key={item} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#737A1A]/10 text-xs font-semibold text-[#737A1A]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-black/75">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Third ad placement */}
      <section className="px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <AdvertisementSpace label="Related content placement" />
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative bg-black px-6 py-20 text-white sm:px-8 sm:py-28 lg:px-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#737A1A]/15 blur-[120px]"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-1 lg:items-start lg:gap-20">
          <div className="rounded-[1.75rem] bg-white text-black shadow-2xl shadow-[#737A1A]/20">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#737A1A] px-6 py-12 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs text-white/70">IMX Digital Studio</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Better digital experiences start with better decisions.
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/85"
          >
            Explore the blog
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
