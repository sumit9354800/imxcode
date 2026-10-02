export type PricingCategory = {
  id: string;
  number: string;
  label: string;
  shortLabel: string;
};

export const pricingCategories: PricingCategory[] = [
  {
    id: "website-development",
    number: "01",
    label: "Website Development",
    shortLabel: "Websites",
  },
  {
    id: "app-development",
    number: "02",
    label: "App Development",
    shortLabel: "Apps",
  },
  {
    id: "ecommerce",
    number: "03",
    label: "E-commerce",
    shortLabel: "E-commerce",
  },
  {
    id: "ui-ux-graphic",
    number: "04",
    label: "UI/UX & Graphic",
    shortLabel: "Design",
  },
  {
    id: "video-editing",
    number: "05",
    label: "Video Editing",
    shortLabel: "Video",
  },
];