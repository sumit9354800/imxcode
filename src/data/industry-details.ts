export type IndustryDetail = {
  id: string;
  tabLabel: string;
  eyebrow: string;
  headline: string;
  description: string;
  challengeTitle: string;
  challenges: string[];
  solutionTitle: string;
  solutions: string[];
  useCases: string[];
  statement: string;
};
export const industryDetails: IndustryDetail[] = [
  {
    id: "education",
    tabLabel: "LEARN",

    eyebrow: "Education / Digital Transformation",

    headline: "Make complex education experiences easier to navigate.",

    description:
      "Educational institutions need more than an attractive website. They need digital experiences that make programs, admissions, information and interactions easier for students, parents and teams.",

    challengeTitle: "Where institutions often struggle",

    challenges: [
      "Large amounts of information are difficult to structure clearly.",
      "Students need faster access to programs, admissions and important information.",
      "Multiple digital systems can create disconnected user experiences.",
      "Institutional websites often become difficult to maintain and update.",
    ],

    solutionTitle: "What IMX can create",

    solutions: [
      "Institutional websites",
      "Admission and enquiry experiences",
      "Student-facing portals",
      "Custom admin panels",
      "Program and course platforms",
      "Interactive digital experiences",
    ],

    useCases: [
      "Business schools",
      "Colleges & universities",
      "Schools & institutions",
      "Education startups",
    ],

    statement:
      "Better digital experiences can make education easier to discover, understand and access.",
  },

  {
    id: "ecommerce",
    tabLabel: "COMMERCE",

    eyebrow: "E-commerce / Digital Commerce",

    headline: "Turn product discovery into a better buying experience.",

    description:
      "Modern commerce experiences need to make products easy to discover, understand and purchase while giving businesses the systems they need to manage their digital storefront.",

    challengeTitle: "Where commerce businesses often struggle",

    challenges: [
      "Customers struggle to find the right products quickly.",
      "Poor interfaces can create friction during the buying journey.",
      "Growing product catalogues become harder to manage.",
      "Business teams need better visibility into digital operations.",
    ],

    solutionTitle: "What IMX can create",

    solutions: [
      "E-commerce websites",
      "Product discovery experiences",
      "Custom storefronts",
      "Commerce dashboards",
      "Order management interfaces",
      "Conversion-focused landing pages",
    ],

    useCases: [
      "D2C brands",
      "Online retailers",
      "Product businesses",
      "Growing e-commerce companies",
    ],

    statement:
      "Great commerce experiences connect what customers want with what businesses need to grow.",
  },

  {
    id: "startups",
    tabLabel: "BUILD",

    eyebrow: "Startups / New Ventures",

    headline: "Turn an idea into a digital product people can experience.",

    description:
      "Startups need to move from concept to something real without building unnecessary complexity. We create digital foundations that can launch quickly and evolve as the product grows.",

    challengeTitle: "Where startups often struggle",

    challenges: [
      "Ideas need to be validated before large investments are made.",
      "Early products need speed without sacrificing the foundation.",
      "Small teams often need multiple digital capabilities at once.",
      "The first version needs to be ready for future growth.",
    ],

    solutionTitle: "What IMX can create",

    solutions: [
      "MVP websites",
      "Web applications",
      "SaaS interfaces",
      "Product landing pages",
      "Startup brand experiences",
      "Custom dashboards",
    ],

    useCases: [
      "Tech startups",
      "SaaS products",
      "New ventures",
      "Digital platforms",
    ],

    statement:
      "Start with the right foundation. Build what matters. Leave room for what comes next.",
  },

  {
    id: "business",
    tabLabel: "GROW",

    eyebrow: "Business / Corporate Digital",

    headline: "Make your business easier to understand and easier to choose.",

    description:
      "A business website should do more than explain what a company does. It should communicate credibility, make services clear and create meaningful opportunities for interaction.",

    challengeTitle: "Where businesses often struggle",

    challenges: [
      "Their digital presence does not reflect the quality of the business.",
      "Services and value propositions are difficult to understand.",
      "Potential clients have limited paths to enquire or take action.",
      "Internal processes still depend on disconnected manual systems.",
    ],

    solutionTitle: "What IMX can create",

    solutions: [
      "Corporate websites",
      "Lead-generation experiences",
      "Service platforms",
      "Business dashboards",
      "Custom admin systems",
      "Digital brand experiences",
    ],

    useCases: [
      "Corporate businesses",
      "B2B companies",
      "Service businesses",
      "Growing organisations",
    ],

    statement:
      "Your digital presence should communicate the same confidence as the business behind it.",
  },

  {
    id: "real-estate",
    tabLabel: "SPACE",

    eyebrow: "Real Estate / Property",

    headline: "Make properties easier to discover, explore and enquire about.",

    description:
      "Real estate depends heavily on presentation and trust. Digital experiences should help people understand properties, projects and opportunities without unnecessary friction.",

    challengeTitle: "Where real estate businesses often struggle",

    challenges: [
      "Large property information needs clear presentation.",
      "Potential buyers need an intuitive discovery experience.",
      "Projects need stronger digital presentation.",
      "Leads can become difficult to organise and follow up.",
    ],

    solutionTitle: "What IMX can create",

    solutions: [
      "Property websites",
      "Project showcase platforms",
      "Property listing experiences",
      "Lead-generation systems",
      "Interactive project pages",
      "Admin dashboards",
    ],

    useCases: [
      "Developers",
      "Real estate agencies",
      "Property consultants",
      "New property projects",
    ],

    statement:
      "A strong property experience helps people see the opportunity before they ever step inside.",
  },

  {
    id: "healthcare",
    tabLabel: "CARE",

    eyebrow: "Healthcare / Digital Experience",

    headline: "Make important healthcare information easier to access.",

    description:
      "Healthcare digital experiences need to prioritise clarity, accessibility and trust. We design and build interfaces that help users find the information and services they need.",

    challengeTitle: "Where healthcare organisations often struggle",

    challenges: [
      "Important information can be difficult to find.",
      "Services need to be explained clearly to different audiences.",
      "Users expect simple digital journeys.",
      "Multiple services can create complicated navigation.",
    ],

    solutionTitle: "What IMX can create",

    solutions: [
      "Healthcare websites",
      "Service discovery platforms",
      "Appointment experiences",
      "Information portals",
      "Custom dashboards",
      "Digital communication platforms",
    ],

    useCases: [
      "Clinics",
      "Healthcare organisations",
      "Wellness businesses",
      "Healthcare startups",
    ],

    statement:
      "When information matters, clarity becomes part of the experience.",
  },

  {
    id: "professional-services",
    tabLabel: "EXPERTISE",

    eyebrow: "Professional Services / Expertise",

    headline: "Turn expertise into a digital experience people can trust.",

    description:
      "Professional service businesses sell expertise, experience and trust. Their digital presence should make those qualities clear while creating simple paths for potential clients to connect.",

    challengeTitle: "Where professional services often struggle",

    challenges: [
      "Expertise is difficult to communicate through a generic website.",
      "Potential clients need stronger signals of credibility.",
      "Services can become difficult to differentiate.",
      "Enquiry journeys are often unnecessarily complicated.",
    ],

    solutionTitle: "What IMX can create",

    solutions: [
      "Professional websites",
      "Service showcases",
      "Lead-generation experiences",
      "Expertise-led content platforms",
      "Brand experiences",
      "Custom business interfaces",
    ],

    useCases: [
      "Consulting firms",
      "Agencies",
      "Legal services",
      "Financial services",
    ],

    statement:
      "Your expertise deserves a digital experience that communicates its value clearly.",
  },
];