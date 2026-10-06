import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    role: "Generative AI Engineer",
    company: "Perk",
    period: "Mar 2026 – Present",
    summary:
      "Building LLM-powered products end to end: voice agents, retrieval pipelines and the Python services behind them.",
    highlights: [
      "Built Proxycall, a Georgian-language phone agent: Telnyx telephony, Groq Whisper STT, Claude with tool calling, ElevenLabs TTS, Supabase.",
      "Moved AI-Cruter's AI layer into a FastAPI service using Gemini Live for real-time voice interviews.",
      "Design RAG components with embeddings and vector search. Improve output quality through prompt engineering and evaluation.",
    ],
    stack: ["Python", "FastAPI", "Pipecat", "Claude", "Gemini", "ElevenLabs", "Supabase"],
  },
  {
    role: "Full-Stack Developer",
    company: "Mentori",
    period: "Mar 2025 – Apr 2026",
    summary:
      "Frontend of a tutoring platform connecting students and teachers, working against the team's .NET REST API.",
    highlights: [
      "Built and fixed the authentication flows: registration validation, email verification codes, password reset, refresh-token handling.",
      "Shipped landing-page features: teacher carousel, statistics counter, video modal.",
      "Worked in a feature-branch and pull-request workflow with code review. Wrote technical articles on development practices.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "REST APIs"],
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "Jun 2024 – Present",
    summary:
      "Web applications for clients, from requirements to deployment.",
    highlights: [
      "Built React and Next.js interfaces with TypeScript and Tailwind CSS.",
      "Added backends where projects needed them: Node.js, PostgreSQL or MongoDB, Prisma.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    role: "Front-End Developer",
    company: "LineDevLtd",
    period: "Jan 2024 – Feb 2025",
    summary:
      "Client web projects at a software company building custom web and mobile solutions.",
    highlights: [
      "Improved component structure across React codebases.",
      "Delivered client-facing features with cross-functional teams and debugged production issues.",
    ],
    stack: ["React", "TypeScript", "JavaScript"],
  },
];

export const education = {
  program: "Front-End Web Development (React)",
  institution: "Digital Institute",
  year: "2023",
};

export const languages = ["Georgian (native)", "English (B2)"];
