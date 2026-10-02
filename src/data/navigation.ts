export type NavigationItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  label: string;
  href: string;
};

export type ServiceGroup = {
  title: string;
  items: ServiceItem[];
};

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Technology",
    items: [
      {
        label: "Website Development",
        href: "/services/website-development",
      },
      {
        label: "Web Applications",
        href: "/services/web-application-development",
      },
      {
        label: "E-commerce",
        href: "/services/ecommerce-development",
      },
      {
        label: "Admin Panels",
        href: "/services/custom-admin-panels",
      },
    ],
  },
  {
    title: "Design & Creative",
    items: [
      {
        label: "UI/UX Design",
        href: "/services/ui-ux-design",
      },
      {
        label: "Landing Page Design",
        href: "/services/landing-page-design",
      },
      {
        label: "Branding",
        href: "/services/branding",
      },
      {
        label: "Graphic Design",
        href: "/services/graphic-design",
      },
    ],
  },
  {
    title: "Growth & Media",
    items: [
      {
        label: "SEO",
        href: "/services/seo",
      },
      {
        label: "Video Editing",
        href: "/services/video-editing",
      },
      {
        label: "Motion Graphics",
        href: "/services/motion-graphics",
      },
      {
        label: "Website Maintenance",
        href: "/services/website-maintenance",
      },
    ],
  },
];