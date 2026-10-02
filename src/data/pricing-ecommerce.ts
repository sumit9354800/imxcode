import type { PricingPlan } from "./pricing-website-development";

export const pricingEcommerce = {
  eyebrow: "03 / E-commerce",

  title: "Online stores built to sell and scale.",

  description:
    "From a simple product store to a complete e-commerce platform, we build fast, responsive and easy-to-manage online stores with the essential tools to run your business.",

  plans: [
    {
      name: "Basic",
      price: "₹35,000",
      description:
        "A professional online store for businesses starting their e-commerce journey.",

      delivery: "15–20 working days",

      features: [
        "Up to 20 products",
        "Responsive storefront",
        "Custom UI design",
        "Product pages",
        "Product categories",
        "Shopping cart",
        "Checkout",
        "Basic CMS",
        "Admin panel",
        "WhatsApp integration",
        "Call button",
        "Payment gateway integration",
        "Basic SEO",
        "Google Analytics",
        "Free hosting",
        "Free SSL",
        "Deployment",
        "30 days support",
      ],

      suitableFor: [
        "Small online stores",
        "Local brands",
        "New businesses",
        "Product sellers",
      ],

      cta: {
        label: "Choose Basic",
        href: "/contact",
      },
    },

    {
      name: "Pro",
      price: "₹60,000",
      popular: true,

      description:
        "A complete e-commerce solution with advanced store management and a better shopping experience.",

      delivery: "20–30 working days",

      features: [
        "Up to 50 products",
        "Custom e-commerce UI/UX",
        "Responsive storefront",
        "Product management",
        "Category management",
        "Product variants",
        "Shopping cart",
        "Checkout system",
        "Payment gateway",
        "Order management",
        "Customer management",
        "Advanced CMS",
        "Admin dashboard",
        "WhatsApp integration",
        "Floating WhatsApp button",
        "Click-to-call",
        "Coupon & discount system",
        "Advanced SEO",
        "Google Analytics",
        "Performance optimisation",
        "Free hosting",
        "Free SSL",
        "Deployment",
        "45 days support",
      ],

      suitableFor: [
        "Growing online stores",
        "D2C brands",
        "Fashion brands",
        "Retail businesses",
      ],

      cta: {
        label: "Choose Pro",
        href: "/contact",
      },
    },

    {
      name: "Premium",
      price: "₹1,00,000+",

      description:
        "A powerful e-commerce platform for established brands that need advanced functionality and room to scale.",

      delivery: "30–60+ working days",

      features: [
        "100+ products",
        "Premium custom UI/UX",
        "Advanced product management",
        "Unlimited categories",
        "Product variants",
        "Advanced search & filtering",
        "Shopping cart",
        "Advanced checkout",
        "Multiple payment options",
        "Order management",
        "Customer accounts",
        "Wishlist",
        "Coupon & discount system",
        "Advanced CMS",
        "Advanced admin dashboard",
        "Inventory management",
        "Customer management",
        "WhatsApp integration",
        "Email notifications",
        "Order notifications",
        "Advanced SEO",
        "Google Analytics",
        "Performance optimisation",
        "Security configuration",
        "Free hosting",
        "Free SSL",
        "Production deployment",
        "60 days support",
        "Post-launch technical assistance",
      ],

      suitableFor: [
        "Established e-commerce brands",
        "Large online stores",
        "D2C businesses",
        "Scaling businesses",
      ],

      cta: {
        label: "Discuss your store",
        href: "/contact",
      },
    },
  ] satisfies PricingPlan[],
};