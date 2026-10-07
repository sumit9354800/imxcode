export type SeoType = {
  number: string;
  title: string;
  description: string;
};

export const seoTypes: SeoType[] = [
  {
    number: "01",
    title: "Technical SEO",
    description:
      "A stronger technical foundation that helps search engines crawl, understand and index your website more effectively.",
  },
  {
    number: "02",
    title: "On-Page SEO",
    description:
      "Content and page-level optimization focused on relevance, structure, search intent and a better user experience.",
  },
  {
    number: "03",
    title: "Local SEO",
    description:
      "Search visibility strategies designed to help businesses reach customers in specific locations and service areas.",
  },
  {
    number: "04",
    title: "E-commerce SEO",
    description:
      "Search optimization for product, category and commerce pages designed to improve discovery and qualified traffic.",
  },
  {
    number: "05",
    title: "Content SEO",
    description:
      "Search-focused content strategies that connect useful information with the topics and questions your audience is searching for.",
  },
  {
    number: "06",
    title: "SEO Audits",
    description:
      "Detailed reviews of your existing search presence to identify technical, content and structural opportunities for improvement.",
  },
];

export type SeoCapability = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const seoCapabilities: SeoCapability[] = [
  {
    number: "01",
    title: "Technical Foundation",
    description:
      "We improve the technical signals that help search engines discover, crawl and understand your website.",
    items: [
      "Crawlability",
      "Indexing",
      "Site Performance",
    ],
  },
  {
    number: "02",
    title: "Search & Content",
    description:
      "We align pages and content with relevant search intent so the right audience can find your business.",
    items: [
      "Keyword Research",
      "Search Intent",
      "Content Optimization",
    ],
  },
  {
    number: "03",
    title: "On-Page Structure",
    description:
      "We improve the structure and signals within important pages to make their purpose clearer to search engines and users.",
    items: [
      "Metadata",
      "Heading Structure",
      "Internal Linking",
    ],
  },
  {
    number: "04",
    title: "Measurement & Growth",
    description:
      "We connect SEO work with measurable outcomes so performance can be understood and improved over time.",
    items: [
      "Search Analytics",
      "Performance Tracking",
      "Growth Opportunities",
    ],
  },
];

export type SeoProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const seoProcess: SeoProcessStep[] = [
  {
    number: "01",
    title: "Audit",
    description:
      "We examine your website, search presence, technical foundation and existing opportunities before defining the direction.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We prioritize technical improvements, search opportunities and content actions around your business goals.",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "We implement improvements across the website, content and technical foundation with a focus on sustainable search visibility.",
  },
  {
    number: "04",
    title: "Measure & Improve",
    description:
      "We monitor meaningful search signals, identify new opportunities and continuously refine the SEO strategy.",
  },
];