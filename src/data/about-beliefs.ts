export type AboutBeliefItem = {
  number: string;
  title: string;
  description: string;
};

export const aboutBeliefs = {
  eyebrow: "Our Beliefs",
  title: "How we think shapes what we build.",
  description:
    "We believe better digital work comes from clarity, thoughtful decisions and a balance between technology, design and business goals.",
  items: [
    {
      number: "01",
      title: "Start with the problem",
      description:
        "Before building anything, we understand what needs to be solved and who it needs to work for.",
    },
    {
      number: "02",
      title: "Make complexity clear",
      description:
        "Good design and technology should make things easier, not more complicated.",
    },
    {
      number: "03",
      title: "Design with purpose",
      description:
        "Every visual decision should support the experience, the brand or the user's next action.",
    },
    {
      number: "04",
      title: "Build for real use",
      description:
        "We care about performance, responsiveness, maintainability and how a product works beyond the first launch.",
    },
    {
      number: "05",
      title: "Keep improving",
      description:
        "Digital products should evolve with the people, businesses and ideas behind them.",
    },
  ],
};