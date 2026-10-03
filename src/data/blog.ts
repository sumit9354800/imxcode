export type BlogCategory =
  | "Web Development"
  | "UI/UX"
  | "Business"
  | "SEO"
  | "Technology"
  | "Creative";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: "modern-business-website",
    title: "What Makes a Modern Business Website Actually Work?",
    excerpt:
      "A business website is more than a collection of pages. Here's how design, performance, content and technology work together to create a better digital experience.",
    category: "Web Development",
    date: "October 02, 2026",
    readTime: "6 min read",
    image: "/blog/modern-business-website.webp",
    slug: "what-makes-a-modern-business-website-work",
    featured: true,
  },

  {
    id: "website-cost-india",
    title: "How Much Does a Professional Website Cost in India?",
    excerpt:
      "Website pricing can vary significantly depending on scope, design, functionality and technology. Here's what businesses should understand before starting a project.",
    category: "Business",
    date: "September 28, 2026",
    readTime: "7 min read",
    image: "/blog/website-cost-india.webp",
    slug: "professional-website-cost-india",
  },

  {
    id: "nextjs-business-websites",
    title: "Why Modern Businesses Are Moving Toward Next.js",
    excerpt:
      "From performance to scalability, modern frameworks are changing how businesses build and maintain their digital platforms.",
    category: "Technology",
    date: "September 24, 2026",
    readTime: "5 min read",
    image: "/blog/nextjs-business-websites.webp",
    slug: "why-businesses-are-moving-to-nextjs",
  },

  {
    id: "ux-conversion",
    title: "How Better UX Can Improve Website Conversions",
    excerpt:
      "Good UX is not only about making a website look attractive. It helps users understand, navigate and take action with less friction.",
    category: "UI/UX",
    date: "September 20, 2026",
    readTime: "6 min read",
    image: "/blog/ux-conversion.webp",
    slug: "how-ux-improves-website-conversions",
  },

  {
    id: "technical-seo",
    title: "Technical SEO Basics Every Business Website Needs",
    excerpt:
      "A beautiful website still needs a strong technical foundation to perform well in search engines.",
    category: "SEO",
    date: "September 16, 2026",
    readTime: "8 min read",
    image: "/blog/technical-seo.webp",
    slug: "technical-seo-basics-business-websites",
  },

  {
    id: "brand-digital-experience",
    title: "Why Your Website Should Feel Like Your Brand",
    excerpt:
      "Your website is one of the most important touchpoints between your brand and your audience. Visual consistency matters.",
    category: "Creative",
    date: "September 12, 2026",
    readTime: "5 min read",
    image: "/blog/brand-digital-experience.webp",
    slug: "website-brand-digital-experience",
  },
];