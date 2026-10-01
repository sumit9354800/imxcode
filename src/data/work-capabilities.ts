export type WorkCapability = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const workCapabilities: WorkCapability[] = [
  {
    number: "01",
    title: "Technology",
    description:
      "Scalable digital foundations built for performance, flexibility and long-term growth.",
    items: [
      "Web Development",
      "Web Applications",
      "E-commerce",
      "Admin Panels",
    ],
  },
  {
    number: "02",
    title: "Design",
    description:
      "Purposeful interfaces and visual systems that make complex digital products easier to use.",
    items: [
      "UI/UX Design",
      "Landing Pages",
      "Design Systems",
      "Responsive Interfaces",
    ],
  },
  {
    number: "03",
    title: "Creative",
    description:
      "Visual content that gives brands a distinct presence across digital touchpoints.",
    items: [
      "Branding",
      "Graphic Design",
      "Video Editing",
      "Motion Graphics",
    ],
  },
  {
    number: "04",
    title: "Growth",
    description:
      "Digital experiences structured to improve visibility, engagement and business outcomes.",
    items: [
      "SEO",
      "Conversion Optimization",
      "Performance",
      "Website Maintenance",
    ],
  },
];