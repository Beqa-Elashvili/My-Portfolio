export const site = {
  name: "Beqa Elashvili",
  title: "Full-Stack & AI Engineer",
  description:
    "Beqa Elashvili — full-stack engineer building LLM applications, RAG pipelines, AI agents and voice AI with Next.js, TypeScript, Python and FastAPI.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-portfolio-neon-seven-25.vercel.app",
  currentRole: { title: "Generative AI Engineer", company: "Perk" },
  email: "beqaelashvili3@gmail.com",
  phone: "+995 591 448 452",
  github: "https://github.com/Beqa-Elashvili",
  linkedin: "https://www.linkedin.com/in/beqa-elashvili-493284234/",
  sourceCode: "https://github.com/Beqa-Elashvili/My-Portfolio",
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
