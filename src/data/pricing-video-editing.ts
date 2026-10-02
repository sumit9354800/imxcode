import type { PricingPlan } from "./pricing-website-development";

export const pricingVideoEditing = {
  eyebrow: "05 / Video Editing",

  title: "Content that keeps people watching.",

  description:
    "Professional video editing for brands, creators and businesses — from short-form social content to polished promotional and long-form videos.",

  plans: [
    {
      name: "Basic",
      price: "₹6,000",
      description:
        "A simple editing package for businesses and creators who need clean, engaging short-form content.",

      delivery: "3–5 working days",

      features: [
        "Up to 4 short videos",
        "Reels / Shorts editing",
        "Clean cuts & transitions",
        "Basic text animations",
        "Background music",
        "Basic colour correction",
        "Basic sound cleanup",
        "Logo / branding placement",
        "Social media format",
        "2 revision rounds",
        "7 days support",
      ],

      suitableFor: [
        "Creators",
        "Small businesses",
        "Social media pages",
        "Personal brands",
      ],

      cta: {
        label: "Choose Basic",
        href: "/contact",
      },
    },

    {
      name: "Pro",
      price: "₹15,000",
      popular: true,

      description:
        "A complete content editing package for brands and creators who want consistent, polished social media videos.",

      delivery: "5–10 working days",

      features: [
        "Up to 8 short videos",
        "Reels / Shorts editing",
        "Professional cuts",
        "Dynamic transitions",
        "Motion text & typography",
        "Advanced colour correction",
        "Audio enhancement",
        "Background music",
        "Sound effects",
        "Logo & brand integration",
        "Captions / subtitles",
        "Thumbnail design",
        "Social media optimisation",
        "3 revision rounds",
        "15 days support",
      ],

      suitableFor: [
        "Growing brands",
        "Creators",
        "Agencies",
        "Social media campaigns",
      ],

      cta: {
        label: "Choose Pro",
        href: "/contact",
      },
    },

    {
      name: "Premium",
      price: "₹30,000+",
      description:
        "A premium video production and editing package for campaigns, brands and businesses that need high-quality visual content.",

      delivery: "10–20+ working days",

      features: [
        "Up to 12 short videos",
        "Long-form video editing",
        "Professional storytelling",
        "Advanced transitions",
        "Motion graphics",
        "Advanced typography",
        "Advanced colour grading",
        "Professional audio editing",
        "Sound design",
        "Captions & subtitles",
        "Brand animation",
        "Intro / outro design",
        "Thumbnail designs",
        "Multiple social media formats",
        "Marketing video editing",
        "Promotional video editing",
        "4 revision rounds",
        "30 days support",
      ],

      suitableFor: [
        "Established brands",
        "Marketing campaigns",
        "YouTube channels",
        "Corporate businesses",
      ],

      cta: {
        label: "Discuss your project",
        href: "/contact",
      },
    },
  ] satisfies PricingPlan[],
};