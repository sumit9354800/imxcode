import type { PricingPlan } from "./pricing-website-development";

export const pricingAppDevelopment = {
  eyebrow: "02 / App Development",

  title: "Mobile apps built around your business and users.",

  description:
    "From focused business apps to feature-rich mobile products, we design and develop modern applications with smooth user experiences, secure backends and scalable architecture.",

  plans: [
    {
      name: "Basic",
      price: "₹45,000",
      description:
        "A focused mobile application for businesses that need a simple and useful digital product.",

      delivery: "20–30 working days",

      features: [
        "Android app development",
        "Custom UI/UX",
        "Responsive mobile interface",
        "User authentication",
        "Basic backend",
        "Database integration",
        "Basic admin panel",
        "API integration",
        "Push notifications",
        "WhatsApp integration",
        "Basic analytics",
        "App testing",
        "Free hosting",
        "SSL configuration",
        "App deployment support",
        "30 days support",
      ],

      suitableFor: [
        "Small businesses",
        "Service businesses",
        "Startup MVPs",
        "Internal business apps",
      ],

      cta: {
        label: "Choose Basic",
        href: "/contact",
      },
    },

    {
      name: "Pro",
      price: "₹75,000",
      popular: true,

      description:
        "A complete mobile application with advanced features, backend systems and a polished user experience.",

      delivery: "30–45 working days",

      features: [
        "Android app development",
        "iOS app development",
        "Custom UI/UX",
        "User authentication",
        "Role-based access",
        "Custom backend",
        "Database architecture",
        "Admin panel",
        "REST API development",
        "Third-party API integrations",
        "Push notifications",
        "WhatsApp integration",
        "Payment gateway integration",
        "Analytics dashboard",
        "Search & filtering",
        "Performance optimisation",
        "App testing",
        "Security configuration",
        "Free hosting",
        "Production deployment",
        "45 days support",
      ],

      suitableFor: [
        "Growing businesses",
        "Startups",
        "Business platforms",
        "Customer-facing apps",
      ],

      cta: {
        label: "Choose Pro",
        href: "/contact",
      },
    },

    {
      name: "Premium",
      price: "₹1,50,000+",

      description:
        "A complete scalable mobile product for businesses that need advanced functionality, integrations and long-term growth.",

      delivery: "45–75+ working days",

      features: [
        "Android & iOS development",
        "Premium custom UI/UX",
        "Scalable application architecture",
        "Advanced authentication",
        "Role & permission management",
        "Custom backend",
        "Advanced database architecture",
        "Enterprise-style admin panel",
        "REST / API development",
        "Third-party integrations",
        "Payment systems",
        "Push notifications",
        "Email & WhatsApp automation",
        "Advanced analytics",
        "Reports & dashboards",
        "Advanced search & filtering",
        "File & media management",
        "Real-time functionality",
        "Performance optimisation",
        "Security hardening",
        "App testing & QA",
        "Production deployment",
        "60 days support",
        "Post-launch technical assistance",
      ],

      suitableFor: [
        "SaaS products",
        "Large businesses",
        "Digital platforms",
        "Complex mobile products",
      ],

      cta: {
        label: "Discuss your app",
        href: "/contact",
      },
    },
  ] satisfies PricingPlan[],
};