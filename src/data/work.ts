export type WorkProject = {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  challenges: string;
  solution: string;
  features: string[];
  featured: boolean;
  published: boolean;
  order: number;
};



export const workProjects: WorkProject[] = [
  {
    id: "proj-1",
    title: "FOSTIIMA Business School Website",
    category: "Full-Stack Development / Institutional Website",
    year: "2026",
    role: "Full-Stack Developer",
    description:
      "A modern, responsive institutional website for FOSTIIMA Business School featuring academic programs, admissions, placements, campus life, events, faculty, blogs, and dynamic content management.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "MySQL",
      "Cloudinary",
      "Node.js",
    ],
    image: "https://res.cloudinary.com/njq5pi5g/image/upload/v1790754959/Screenshot_2026-09-30_at_1.24.47_PM.png",
    liveUrl: "https://fostiima.org/",
    githubUrl: "https://github.com/sumit9354800/fostiima",
    challenges:
      "Migrating and restructuring a large legacy institutional website into a modern Next.js architecture while preserving existing content, SEO-friendly URLs, responsive layouts, media assets, and legacy campaign links.",
    solution:
      "Built a component-driven Next.js architecture with reusable UI sections, Prisma and MySQL for dynamic content, Cloudinary-based media management, structured blog content blocks, responsive navigation, and scalable admin workflows for managing website content.",
    features: [
      "Responsive Institutional Website",
      "Dynamic Academic Programs",
      "Admissions & Application Sections",
      "Placement & Recruiter Showcase",
      "Faculty & Campus Information",
      "Dynamic Blog & Content Management",
      "Cloudinary Media Management",
      "MySQL Database Integration",
      "Admin Content Management",
      "Legacy URL & SEO Migration",
    ],
    featured: true,
    published: true,
    order: 10,
  },
  {
    id: "proj-2",
    title: "MRTECHYCOOL Business Website",
    category: "Client Project / Commercial",
    year: "2024",
    role: "Lead Full Stack Developer",
    description:
      "Production commercial platform engineered for MRTECHYCOOL delivering digital service booking, lead generation pipeline, and technical service catalogs with sub-second load times.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
    image:
      "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944433/techcool.png",
    liveUrl: "https://www.mrtechycool.in/",
    githubUrl: "https://github.com/sumit9354800/techcool",
    challenges:
      "Optimizing Core Web Vitals to sub-1.2s LCP on mobile devices while integrating real-time inquiry booking with automated dispatch pipelines.",
    solution:
      "Engineered server components with incremental static revalidation, lightweight SVG asset pipeline, and streamlined API routes with server-side validation.",
    features: [
      "Automated Lead Booking Engine",
      "Dynamic Service Catalog",
      "Admin Analytics Dashboard",
      "SEO & Core Web Vitals 98+",
    ],
    featured: true,
    published: true,
    order: 1,
  },

  {
    id: "proj-3",
    title: "Growje Business Website",
    category: "Client Project / Commercial",
    year: "2024",
    role: "Full Stack Web Developer",
    description:
      "High-conversion corporate business portal for Growje facilitating enterprise business solutions, client onboarding, and digital marketing consulting services.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "REST APIs",
    ],
    image:
      "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944324/growje.png",
    liveUrl: "https://growje.com/",
    githubUrl: "https://github.com/sumit9354800/growje",
    challenges:
      "Building a responsive, high-performance portal with zero layout shifts and custom interactive inquiry funnels.",
    solution:
      "Developed modular atomic components, validated contact pathways with Zod, and configured aggressive asset caching headers.",
    features: [
      "Custom Client Onboarding Funnel",
      "Responsive Architecture across 360px-1920px",
      "Secure Consultation Gateway",
      "Modern Dark-Mode Technical Aesthetic",
    ],
    featured: true,
    published: true,
    order: 2,
  },

  {
    id: "proj-4",
    title: "United Institute Educational Portal",
    category: "Commercial / Education",
    year: "2023",
    role: "Frontend & Backend Engineer",
    description:
      "Comprehensive educational and administrative portal for United Institute managing courses, student inquiries, academic notices, and faculty directories.",
    technologies: [
      "React",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
    ],
    image:
      "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944453/united.png",
    liveUrl: "https://www.unitedinstitute.org.in/",
    githubUrl: "https://github.com/sumit9354800/united-tech-era-main",
    challenges:
      "Consolidating multiple department notice streams and course syllabus downloads into a unified fast query interface.",
    solution:
      "Constructed indexed MongoDB schema relations, role-segmented document access, and cached server responses.",
    features: [
      "Notice Board Announcement Stream",
      "Course & Program Directory",
      "Admission Lead Pipeline",
      "Staff & Faculty Index",
    ],
    featured: true,
    published: true,
    order: 3,
  },

  {
    id: "proj-5",
    title: "MX SAMMY | B2B Sales & Revenue Analytics CRM",
    category: "Full Stack / SaaS CRM",
    year: "2024",
    role: "Full Stack Developer",
    description:
      "High-performance enterprise B2B sales and revenue analytics CRM featuring real-time revenue tracking, conversion pipelines, customer lifetime metrics, and interactive multi-tier visual dashboards.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Node.js",
      "MongoDB",
    ],
    image:
      "https://res.cloudinary.com/njq5pi5g/image/upload/v1789039538/dashbord.png",
    liveUrl: "https://dashboard-chi-inky-30.vercel.app/",
    githubUrl: "https://github.com/sumit9354800/dashboard",
    challenges:
      "Aggregating multi-source enterprise revenue streams into sub-second interactive analytics without client-side latency or frame drops.",
    solution:
      "Engineered memoized aggregation pipelines, modular dashboard cards, and optimized client state management.",
    features: [
      "Real-time Revenue Telemetry",
      "Lead Conversion Pipelines",
      "Interactive Financial Charts",
      "Customer Lifetime Analytics",
    ],
    featured: true,
    published: true,
    order: 4,
  },

  {
    id: "proj-6",
    title: "STACKED — Immersive 3D Experience",
    category: "Creative Engineering / 3D Web",
    year: "2024",
    role: "Creative Frontend Engineer",
    description:
      "High-fidelity 3D spatial interactive web experiment exploring dynamic 3D burger model choreography, lighting, and real-time pointer physics.",
    technologies: ["Three.js", "React", "GSAP", "Tailwind CSS", "TypeScript"],
    image:
      "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944464/burger-web.png",
    liveUrl: "https://3-d-model-website-phi.vercel.app/",
    githubUrl: "https://github.com/sumit9354800/3D-model-website",
    challenges:
      "Maintaining a solid 60 FPS on low-power mobile devices while computing dynamic matrix transformations and lighting passes.",
    solution:
      "Used instanced buffer geometries, memory pooling, and throttled pointer listeners with WebGL state memoization.",
    features: [
      "Custom GLSL Shader Illumination",
      "Spatial Camera Controls",
      "Procedural Geometry Stacking",
      "Touch & Pointer Physics",
    ],
    featured: true,
    published: true,
    order: 5,
  },

  {
    id: "proj-7",
    title: "KiranaGo — Grocery E-commerce",
    category: "Web Application / Hyperlocal Delivery",
    year: "2023",
    role: "Full Stack Developer",
    description:
      "Hyperlocal grocery discovery and ordering platform facilitating neighborhood store connections, item catalog navigation, and rapid one-tap cart checkout.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image:
      "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944354/kirana.png",
    liveUrl: "https://kirana-go-tau.vercel.app/",
    githubUrl: "https://github.com/sumit9354800/kirana-go",
    challenges:
      "Designing an ultra-intuitive order workflow for users with varying digital literacy.",
    solution:
      "Created clean, high-contrast visual item tags and streamlined one-tap checkout counters.",
    features: [
      "Localized Store Search",
      "Quick-Add Grocery Catalog",
      "Dynamic Order Estimator",
      "Mobile-First Responsive Layout",
    ],
    featured: false,
    published: true,
    order: 6,
  },

  {
    id: "proj-8",
    title: "FreshCart Organics Web Application",
    category: "E-Commerce Application",
    year: "2023",
    role: "Frontend & Backend Engineer",
    description:
      "Farm-to-table organic produce platform with categorical filters, seasonal product badges, weight-based pricing, and price breakdown computations.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    image:
      "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944300/freshcart.png",
    liveUrl: "https://freshcart-organics.vercel.app/",
    githubUrl: "https://github.com/sumit9354800/freshcart",
    challenges:
      "Handling complex price per weight calculations and dynamic promo discounts.",
    solution:
      "Built deterministic calculation utility routines with unit-test verified precision.",
    features: [
      "Weight-Based Pricing Engine",
      "Seasonal Filter Tags",
      "Customer Review Threads",
      "Receipt Generator",
    ],
    featured: false,
    published: true,
    order: 7,
  },

  {
    id: "proj-9",
    title: "Airbnb Clone — Full-Stack Rental Platform",
    category: "Web Application / Architecture Study",
    year: "2023",
    role: "Full Stack Developer",
    description:
      "Comprehensive reproduction of hospitality rental workflows including date-range reservations, amenity search, host property listings, and secure user bookings.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
    ],
    image:
      "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944173/airbnb.png",
    liveUrl: "https://airbnbclone-s4gi.onrender.com/",
    githubUrl: "https://github.com/sumit9354800/airbnbclone",
    challenges:
      "Accurately computing calendar date availability and overlapping booking conflict resolution.",
    solution:
      "Engineered date boundary validation logic in MongoDB query aggregation pipelines.",
    features: [
      "Interactive Property Map Viewer",
      "Date Range Availability Picker",
      "Host Property Publishing Form",
      "Filter by Property Type",
    ],
    featured: false,
    published: true,
    order: 8,
  },

  {
    id: "proj-10",
    title: "Myntra Fashion E-Commerce UI",
    category: "Frontend Engineering / UI Reproduction",
    year: "2023",
    role: "Frontend Engineer",
    description:
      "Pixel-perfect responsive recreation of Myntra's catalog navigation, mega-menus, multi-tiered filter hierarchy, and product card hover carousels.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    image:
      "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944402/myntra.png",
    liveUrl: "https://cloth-ecommerce-frontend-uhj7.vercel.app/",
    githubUrl: "https://github.com/sumit9354800/myntra-frontend",
    challenges:
      "Handling complex multi-level hover dropdown menus that remain fluid and accessible across desktop viewport breakpoints.",
    solution:
      "Utilized debounced hover intent listeners, keyboard focus traps, and performant CSS transforms.",
    features: [
      "Nested Mega-Menu Navigation",
      "Brand & Price Multi-Filter Slider",
      "Product Quick-View Preview Modal",
      "Responsive Mobile Drawer",
    ],
    featured: false,
    published: true,
    order: 9,
  },
];
