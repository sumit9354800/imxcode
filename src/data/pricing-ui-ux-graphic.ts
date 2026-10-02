import type { PricingPlan } from "./pricing-website-development";

export const pricingUiUxGraphic = {
  eyebrow: "04 / UI/UX & Graphic Design",

  title: "Design that makes your brand look as good as it performs.",

  description:
    "From digital product interfaces to complete visual assets, we create clean, modern and consistent designs built around your brand and audience.",

  plans: [
    {
      name: "Basic",
      price: "₹8,000",
      description:
        "A focused design package for businesses that need professional digital visuals and a clean interface.",

      delivery: "5–7 working days",

      features: [
        "Up to 5 UI screens",
        "Modern UI design",
        "Mobile & desktop layouts",
        "Basic UX structure",
        "Color & typography system",
        "Basic graphic assets",
        "Social media creatives",
        "2 revision rounds",
        "Source files",
        "Design handoff",
        "7 days support",
      ],

      suitableFor: [
        "Small businesses",
        "Startups",
        "Personal brands",
        "Social media brands",
      ],

      cta: {
        label: "Choose Basic",
        href: "/contact",
      },
    },

    {
      name: "Pro",
      price: "₹18,000",
      popular: true,

      description:
        "A complete UI/UX and creative package for businesses that need a stronger and more consistent digital identity.",

      delivery: "10–15 working days",

      features: [
        "Up to 12 UI screens",
        "Custom UI/UX design",
        "Desktop & mobile layouts",
        "User flow planning",
        "Wireframes",
        "Interactive prototype",
        "Design system",
        "Color & typography system",
        "Custom graphic assets",
        "Social media creatives",
        "Marketing banners",
        "3 revision rounds",
        "Source files",
        "Developer handoff",
        "15 days support",
      ],

      suitableFor: [
        "Growing businesses",
        "Startups",
        "Web products",
        "Mobile apps",
      ],

      cta: {
        label: "Choose Pro",
        href: "/contact",
      },
    },

    {
      name: "Premium",
      price: "₹35,000+",
      description:
        "A complete premium design system covering product experience, brand visuals and creative assets.",

      delivery: "15–25+ working days",

      features: [
        "Up to 25 UI screens",
        "Premium UI/UX design",
        "Desktop, tablet & mobile layouts",
        "Complete user flow",
        "Wireframes",
        "High-fidelity prototypes",
        "Advanced design system",
        "Component library",
        "Typography & color system",
        "Custom illustrations",
        "Marketing creatives",
        "Social media creative set",
        "Presentation graphics",
        "Brand visual direction",
        "Unlimited design refinement within scope",
        "Complete source files",
        "Developer handoff",
        "30 days support",
      ],

      suitableFor: [
        "Established brands",
        "Digital products",
        "SaaS platforms",
        "Premium businesses",
      ],

      cta: {
        label: "Discuss your design",
        href: "/contact",
      },
    },
  ] satisfies PricingPlan[],
};