export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  delivery: string;
  popular?: boolean;
  features: string[];
  suitableFor: string[];
  cta: {
    label: string;
    href: string;
  };
};

export const pricingWebsiteDevelopment = {
  eyebrow: "01 / Website Development",

  title: "Websites built to move your business forward.",

  description:
    "From a simple business website to a complete premium digital experience, choose the level that matches your goals.",

  plans: [
    {
      name: "Basic",
      price: "₹12,999",
      description:
        "A professional starter website for businesses that need a clean and reliable online presence.",
      delivery: "5–7 working days",

      features: [
        "Up to 5 pages",
        "Responsive website",
        "Modern professional UI",
        "Mobile-friendly design",
        "Basic CMS",
        "Contact form",
        "WhatsApp integration",
        "Call button",
        "Basic SEO setup",
        "Google Maps integration",
        "Free hosting",
        "Free SSL",
        "Deployment",
        "7 days support",
      ],

      suitableFor: [
        "Small businesses",
        "Local businesses",
        "Personal brands",
        "Service providers",
      ],

      cta: {
        label: "Choose Basic",
        href: "/contact",
      },
    },

    {
      name: "Pro",
      price: "₹25,000",
      popular: true,

      description:
        "A complete business website with custom design, CMS, stronger SEO and advanced functionality.",

      delivery: "7–12 working days",

      features: [
        "Up to 10 pages",
        "Custom UI/UX",
        "Fully responsive",
        "Advanced CMS",
        "Easy content updates",
        "Contact & enquiry forms",
        "WhatsApp integration",
        "Floating WhatsApp button",
        "Click-to-call",
        "Advanced SEO",
        "Google Analytics",
        "Google Search Console",
        "Performance optimisation",
        "Custom animations",
        "Free hosting",
        "Free SSL",
        "Deployment",
        "30 days support",
      ],

      suitableFor: [
        "Growing businesses",
        "Startups",
        "Corporate websites",
        "Educational institutions",
      ],

      cta: {
        label: "Choose Pro",
        href: "/contact",
      },
    },

    {
      name: "Premium",
      price: "₹45,000",

      description:
        "A premium digital experience with advanced functionality and complete e-commerce capability.",

      delivery: "12–20 working days",

      features: [
        "Up to 20 pages",
        "Premium custom UI/UX",
        "Advanced CMS",
        "E-commerce functionality",
        "Up to 50 products",
        "Product & category management",
        "Shopping cart",
        "Checkout system",
        "Payment gateway",
        "WhatsApp integration",
        "Floating WhatsApp button",
        "Click-to-call",
        "Advanced SEO",
        "Google Analytics",
        "Google Search Console",
        "Advanced animations",
        "Performance optimisation",
        "Security configuration",
        "Free hosting",
        "Free SSL",
        "Deployment",
        "60 days support",
      ],

      suitableFor: [
        "E-commerce businesses",
        "Established brands",
        "Premium businesses",
        "Online stores",
      ],

      cta: {
        label: "Choose Premium",
        href: "/contact",
      },
    },
  ] satisfies PricingPlan[],
};