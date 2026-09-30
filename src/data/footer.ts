export type FooterLink = {
  label: string;
  href: string;
};

export type FooterGroup = {
  title: string;
  links: FooterLink[];
};

export const footerGroups: FooterGroup[] = [
  {
    title: "Explore",
    links: [
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
        label: "Studio",
        href: "/about",
      },
      {
        label: "Insights",
        href: "/insights",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        label: "Web Development",
        href: "/services/website-development",
      },
      {
        label: "UI/UX Design",
        href: "/services/ui-ux-design",
      },
      {
        label: "Branding",
        href: "/services/branding",
      },
      {
        label: "Graphic Design",
        href: "/services/graphic-design",
      },
      {
        label: "Video Editing",
        href: "/services/video-editing",
      },
      {
        label: "Motion Graphics",
        href: "/services/motion-graphics",
      },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: "Contact",
        href: "/contact",
      },
      {
        label: "Instagram",
        href: "#",
      },
      {
        label: "LinkedIn",
        href: "#",
      },
      {
        label: "Behance",
        href: "#",
      },
    ],
  },
];