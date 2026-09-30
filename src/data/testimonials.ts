export type Testimonial = {
  number: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    number: "01",
    quote:
      "IMX understood the vision quickly and translated it into a digital experience that feels modern, clear and genuinely aligned with our brand.",
    name: "Client Name",
    role: "Founder",
    company: "Company",
  },
  {
    number: "02",
    quote:
      "The combination of design, technology and creative thinking made the entire process feel much more connected and purposeful.",
    name: "Client Name",
    role: "Director",
    company: "Company",
  },
  {
    number: "03",
    quote:
      "From the initial concept to the final execution, the focus stayed on creating something useful, polished and built for the long term.",
    name: "Client Name",
    role: "Marketing Lead",
    company: "Company",
  },
];