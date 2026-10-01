export type TeamCultureItem = {
  number: string;
  title: string;
  description: string;
  statement: string;
};

export const teamCultureItems: TeamCultureItem[] = [
  {
    number: "01",
    title: "Curiosity",
    description:
      "We stay curious about technology, design, people and the changing digital landscape.",
    statement: "Keep learning.",
  },
  {
    number: "02",
    title: "Craft",
    description:
      "We care about the details that turn a functional product into a memorable experience.",
    statement: "Make it meaningful.",
  },
  {
    number: "03",
    title: "Ownership",
    description:
      "Everyone takes responsibility for the work they bring to the table and the outcome it creates.",
    statement: "Own the outcome.",
  },
  {
    number: "04",
    title: "Clarity",
    description:
      "We believe good communication and simple thinking lead to better creative and technical decisions.",
    statement: "Keep it clear.",
  },
];