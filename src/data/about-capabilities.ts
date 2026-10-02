export type AboutCapability = {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  services: string[];
};

export const aboutCapabilities = {
  eyebrow: "Our Capabilities",
  title: "Everything needed to turn an idea into a digital product.",
  description:
    "From the first concept to a production-ready experience, our capabilities connect technology, design and creative execution.",
  categories: [
    {
      number: "01",
      title: "Technology",
      shortTitle: "Build",
      description:
        "Engineering digital products that are fast, scalable and built around real business requirements.",
      services: [
        "Website Development",
        "Web Applications",
        "E-commerce",
        "Admin Panels",
      ],
    },
    {
      number: "02",
      title: "UI / UX",
      shortTitle: "Experience",
      description:
        "Designing interfaces that make complex products easier to understand, navigate and use.",
      services: [
        "UI/UX Design",
        "Landing Page Design",
        "Design Systems",
        "Product Interfaces",
      ],
    },
    {
      number: "03",
      title: "Creative",
      shortTitle: "Create",
      description:
        "Building visual systems and content that give brands a stronger and more distinctive digital presence.",
      services: [
        "Graphic Design",
        "Branding",
        "Video Editing",
        "Motion Graphics",
      ],
    },
    {
      number: "04",
      title: "Growth",
      shortTitle: "Grow",
      description:
        "Supporting digital products beyond launch with visibility, optimisation and ongoing improvements.",
      services: [
        "SEO",
        "Website Maintenance",
        "Performance Optimisation",
        "Digital Growth",
      ],
    },
  ],
};