import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Vallabhi Engineering Services",
    date: "2019 - 2023",
    details: [
      "Developed and delivered an online one on one video calling application alongwith with its whole ecosystem <span style='color: white;'>Nvidia, Hostinger, and Amazon</span>.",
      "<span style='color: white;'>Designed and developed innovative</span> Websites for  group companies.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Developer Intern",
    company_name: "Vallabhi Group Of Companies",
    date: "Jan 2024 - May 2024",
    details: [
      "Built custom websites using reactjs and tailwind css, react query, redux for an NGO for a Cow Shelter.",
      "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for the website.",
      "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
    ],
  },
];

const portfolio = [
  {
    name: "A demo ecommerce webpage",
    description:
      "I created a webpage for a product view of the website  understanding the concept of react hooks and context api",
    image: oscs,
  },
  {
    name: "Event and Wedding Management",
    description:
      "During my final year of graduation, I created a website for event and wedding management.",
    image: devnotes,
  },
  {
    name: "Coffee Shop Application",
    description:
      "I created and application UI of demo coffee shop to understand the concept of react native.",
    image: algorithms,
  },
];

export { experiences, portfolio };

