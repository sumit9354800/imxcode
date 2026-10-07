export type TeamProject = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

export type TeamSkill = {
  name: string;
  level: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  bio: string;
  image: string;
  location: string;
  experience: string;
  skills: TeamSkill[];
  tools: string[];
  projects: TeamProject[];
};

export const teamMembers: TeamMember[] = [
  {
    id: "sumit-shrivastava",
    name: "Sumit Shrivastava",
    role: "Full Stack Developer",
    shortBio:
      "Builds scalable digital products across frontend, backend and modern web technologies.",
    bio: "Sumit works across the full digital product lifecycle, from interface architecture and frontend development to backend systems and deployment.",
    image: "/team/sumit.jpeg",
    location: "India",
    experience: "2+ Years",
    skills: [
      {
        name: "React",
        level: "Expert",
      },
      {
        name: "Next.js",
        level: "Expert",
      },
      {
        name: "TypeScript",
        level: "Advanced",
      },
      {
        name: "JavaScript",
        level: "Expert",
      },
      {
        name: "Node.js",
        level: "Advanced",
      },
      {
        name: "Express.js",
        level: "Advanced",
      },
      {
        name: "MongoDB",
        level: "Advanced",
      },
      {
        name: "MySQL",
        level: "Advanced",
      },
    ],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
    projects: [
      {
        title: "FOSTIIMA Business School Website",
        category: "Full-Stack Development / Institutional Website",
        description:
          "A modern, responsive institutional website for FOSTIIMA Business School featuring academic programs, admissions, placements, campus life, events, faculty, blogs, and dynamic content management.",
        image:
          "https://res.cloudinary.com/njq5pi5g/image/upload/v1790754959/Screenshot_2026-09-30_at_1.24.47_PM.png",
        href: "https://fostiima.org/",
      },
      {
        title: "MRTECHYCOOL Business Website",
        category: "Client Project / Commercial",
        description:
          "Production commercial platform engineered for MRTECHYCOOL delivering digital service booking, lead generation pipeline, and technical service catalogs with sub-second load times.",
        image:
          "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944433/techcool.png",
        href: "https://www.mrtechycool.in/",
      },
      {
        title: "Growje Business Website",
        category: "Client Project / Commercial",
        description:
          "High-conversion corporate business portal for Growje facilitating enterprise business solutions, client onboarding, and digital marketing consulting services.",
        image:
          "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944324/growje.png",
        href: "https://growje.com/",
      },
      {
        title: "United Institute Educational Portal",
        category: "Commercial / Education",
        description:
          "Comprehensive educational and administrative portal for United Institute managing courses, student inquiries, academic notices, and faculty directories.",
        image:
          "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944453/united.png",
        href: "https://www.unitedinstitute.org.in/",
      },
      {
        title: "MX SAMMY | B2B Sales & Revenue Analytics CRM",
        category: "Full Stack / SaaS CRM",
        description:
          "High-performance enterprise B2B sales and revenue analytics CRM featuring real-time revenue tracking, conversion pipelines, customer lifetime metrics, and interactive multi-tier visual dashboards.",
        image:
          "https://res.cloudinary.com/njq5pi5g/image/upload/v1789039538/dashbord.png",
        href: "https://dashboard-chi-inky-30.vercel.app/",
      },
      {
        title: "STACKED — Immersive 3D Experience",
        category: "Creative Engineering / 3D Web",
        description:
          "High-fidelity 3D spatial interactive web experiment exploring dynamic 3D burger model choreography, lighting, and real-time pointer physics.",
        image:
          "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944464/burger-web.png",
        href: "https://3-d-model-website-phi.vercel.app/",
      },
      {
        title: "KiranaGo — Grocery E-commerce",
        category: "Web Application / Hyperlocal Delivery",
        description:
          "Hyperlocal grocery discovery and ordering platform facilitating neighborhood store connections, item catalog navigation, and rapid one-tap cart checkout.",
        image:
          "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944354/kirana.png",
        href: "https://kirana-go-tau.vercel.app/",
      },
      {
        title: "FreshCart Organics Web Application",
        category: "E-Commerce Application",
        description:
          "Farm-to-table organic produce platform with categorical filters, seasonal product badges, weight-based pricing, and price breakdown computations.",
        image:
          "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944300/freshcart.png",
        href: "https://freshcart-organics.vercel.app/",
      },
      {
        title: "Airbnb Clone — Full-Stack Rental Platform",
        category: "Web Application / Architecture Study",
        description:
          "Comprehensive reproduction of hospitality rental workflows including date-range reservations, amenity search, host property listings, and secure user bookings.",
        image:
          "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944173/airbnb.png",
        href: "https://airbnbclone-s4gi.onrender.com/",
      },
      {
        title: "Myntra Fashion E-Commerce UI",
        category: "Frontend Engineering / UI Reproduction",
        description:
          "Pixel-perfect responsive recreation of Myntra's catalog navigation, mega-menus, multi-tiered filter hierarchy, and product card hover carousels.",
        image:
          "https://res.cloudinary.com/njq5pi5g/image/upload/v1788944402/myntra.png",
        href: "https://cloth-ecommerce-frontend-uhj7.vercel.app/",
      },
      {
        title: "India Travel Safari — Premium Goa Holiday Landing Page",
        category: "Frontend Engineering / Travel & Tourism",
        description:
          "Premium conversion-focused Goa holiday landing page built for India Travel Safari, featuring a cinematic Goa hero section, 5 nights / 6 days itinerary, premium and standard package comparison, travel inclusions, upgrades, FAQs, WhatsApp and call CTAs, and a responsive mobile-first experience.",
        image:
          "https://res.cloudinary.com/njq5pi5g/image/upload/v1791392566/Screenshot_2026-10-07_at_10.30.43_PM.png",
        href: "https://travel.indiatravelsafari.com/",
      },
    ],
  },

  {
    id: "anuj-shrivastava",
    name: "Anuj Shrivastava",
    role: "Full Stack Developer",
    shortBio:
      "Develops modern web applications with a focus on performance, usability and scalable architecture.",
    bio: "Anuj works across frontend and backend development, helping turn product ideas into reliable and maintainable digital experiences.",
    image: "/team/anuj.png",
    location: "India",
    experience: "2+ Years",
    skills: [
      {
        name: "React",
        level: "Expert",
      },
      {
        name: "Next.js",
        level: "Expert",
      },
      {
        name: "TypeScript",
        level: "Advanced",
      },
      {
        name: "JavaScript",
        level: "Expert",
      },
      {
        name: "Node.js",
        level: "Advanced",
      },
      {
        name: "Express.js",
        level: "Advanced",
      },
      {
        name: "MongoDB",
        level: "Advanced",
      },
      {
        name: "MySQL",
        level: "Advanced",
      },
    ],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
    projects: [],
  },

  {
    id: "shubham-shrivastava",
    name: "Shubham Shrivastava",
    role: "UI/UX & Graphic Designer",
    shortBio:
      "Creates visual systems and interfaces that balance aesthetics, clarity and usability.",
    bio: "Shubham focuses on UI/UX and graphic design, shaping visual identities and digital interfaces that communicate clearly and feel distinctive.",
    image: "/team/shubham01.png",
    location: "India",
    experience: "2+ Years",
    skills: [
      {
        name: "UI Design",
        level: "Advanced",
      },
      {
        name: "UX Design",
        level: "Advanced",
      },
      {
        name: "Graphic Design",
        level: "Advanced",
      },
    ],
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],
    projects: [],
  },

  {
    id: "amit-shrivastava",
    name: "Amit Shrivastava",
    role: "UI/UX & Graphic Designer",
    shortBio:
      "Designs interfaces, graphics and visual experiences with a strong focus on detail.",
    bio: "Amit works across UI/UX and graphic design, translating ideas into polished visual experiences for digital products and brands.",
    image: "/team/amit.jpeg",
    location: "India",
    experience: "2+ Years",
    skills: [
      {
        name: "UI Design",
        level: "Advanced",
      },
      {
        name: "UX Design",
        level: "Advanced",
      },
      {
        name: "Graphic Design",
        level: "Advanced",
      },
      {
        name: "Visual Design",
        level: "Advanced",
      },
      {
        name: "Brand Identity",
        level: "Advanced",
      },
      {
        name: "Video Editing",
        level: "Advanced",
      },
      {
        name: "Motion Graphics",
        level: "Advanced",
      },
      {
        name: "Adobe After Effects",
        level: "Advanced",
      },
    ],
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],
    projects: [],
  },

  {
    id: "anish-shrivastava",
    name: "Anish Shrivastava",
    role: "Graphic & Video Editor",
    shortBio:
      "Creates visual content, motion graphics and edits that bring ideas to life.",
    bio: "Anish works across graphic design and video editing, creating visual content for brands, digital campaigns and creative projects.",
    image: "/team/anish1.jpeg",
    location: "India",
    experience: "2+ Years",
    skills: [
      {
        name: "Graphic Design",
        level: "Advanced",
      },
      {
        name: "Video Editing",
        level: "Expert",
      },
      {
        name: "Motion Graphics",
        level: "Advanced",
      },
      {
        name: "Visual Content",
        level: "Advanced",
      },
      {
        name: "Social Media Creative",
        level: "Advanced",
      },
      {
        name: "Adobe Premiere Pro",
        level: "Advanced",
      },
      {
        name: "Adobe After Effects",
        level: "Advanced",
      },
      {
        name: "Adobe Photoshop",
        level: "Advanced",
      },
      {
        name: "Adobe Illustrator",
        level: "Advanced",
      },
    ],
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe Premiere Pro",
      "Adobe After Effects",
    ],
    projects: [],
  },
  {
    id: "aditya-sharma",
    name: "Aditya Sharma",
    role: "Full Stack Developer",
    shortBio:
      "Builds scalable digital products across frontend, backend and modern web technologies.",
    bio: "Aditya works across the full digital product lifecycle, from interface architecture and frontend development to backend systems and deployment.",
    image: "/team/aditya.png",
    location: "India",
    experience: "2+ Years",
    skills: [
      {
        name: "React",
        level: "Expert",
      },
      {
        name: "Next.js",
        level: "Expert",
      },
      {
        name: "TypeScript",
        level: "Advanced",
      },
      {
        name: "JavaScript",
        level: "Expert",
      },
      {
        name: "Node.js",
        level: "Advanced",
      },
      {
        name: "Express.js",
        level: "Advanced",
      },
      {
        name: "MongoDB",
        level: "Advanced",
      },
      {
        name: "MySQL",
        level: "Advanced",
      },
    ],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
    projects: [],
  },

    {
    id: "sourav",
    name: "sourav",
    role: "Full Stack Developer",
    shortBio:
      "Builds scalable digital products across frontend, backend and modern web technologies.",
    bio: "Sourav works across the full digital product lifecycle, from interface architecture and frontend development to backend systems and deployment.",
    image: "/team/sourav.png",
    location: "India",
    experience: "2+ Years",
    skills: [
      {
        name: "React",
        level: "Expert",
      },
      {
        name: "Next.js",
        level: "Expert",
      },
      {
        name: "TypeScript",
        level: "Advanced",
      },
      {
        name: "JavaScript",
        level: "Expert",
      },
      {
        name: "Node.js",
        level: "Advanced",
      },
      {
        name: "Express.js",
        level: "Advanced",
      },
      {
        name: "MongoDB",
        level: "Advanced",
      },
      {
        name: "MySQL",
        level: "Advanced",
      },
    ],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
    projects: [],
  },

  {
    id: "rohit",
    name: "Rohit",
    role: "Full Stack Developer",
    shortBio:
      "Builds scalable digital products across frontend, backend and modern web technologies.",
    bio: "Rohit works across the full digital product lifecycle, from interface architecture and frontend development to backend systems and deployment.",
    image: "/team/rohit.png",
    location: "India",
    experience: "2+ Years",
    skills: [
      {
        name: "React",
        level: "Expert",
      },
      {
        name: "Next.js",
        level: "Expert",
      },
      {
        name: "TypeScript",
        level: "Advanced",
      },
      {
        name: "JavaScript",
        level: "Expert",
      },
      {
        name: "Node.js",
        level: "Advanced",
      },
      {
        name: "Express.js",
        level: "Advanced",
      },
      {
        name: "MongoDB",
        level: "Advanced",
      },
      {
        name: "MySQL",
        level: "Advanced",
      },
    ],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
    projects: [],
  },
];
