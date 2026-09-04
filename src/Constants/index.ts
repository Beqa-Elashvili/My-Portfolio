import { v4 as uuidv4 } from "uuid";
import {
  EducationType,
  Experiencetype,
  ProjectType,
  SkillGroup,
} from "src@/assets/types";
import amazonImage from "src@/assets/images/amazon.png";
import carRentApplication from "src@/assets/images/carRentApplication.png";
import MessengerClone from "src@/assets/images/messangerClone.png";
import InventoryManagement from "src@/assets/images/invetoryManagement.png";
import Bog from "src@/assets/images/Bog-clone.png";
import VeliClone from "src@/assets/images/Veli-clone.png";
import weatherImage from "src@/assets/images/weatherApp.png";
import TeacherElecronicMagazineImage from "src@/assets/images/TeacherElectonicMagazine.png";
import aiCruterImage from "src@/assets/images/ai-cruter.png";

export const EXPERIENCES: Experiencetype[] = [
  {
    id: uuidv4(),
    role: "Generative AI Engineer",
    company: "Perk",
    description:
      "Building and deploying production-grade Generative AI applications powered by LLMs, AI agents, and automated workflows.",
    highlights: [
      "Design RAG-based systems using embeddings, vector databases, and knowledge retrieval pipelines",
      "Integrate AI services with Node.js, Python, and REST APIs on scalable backend infrastructure",
      "Optimize model performance through prompt engineering, evaluation, and workflow improvements",
      "Develop conversational and voice AI solutions with speech recognition and text-to-speech",
    ],
    technologies: [
      "LLMs",
      "RAG",
      "Python",
      "Node.js",
      "Gemini API",
      "Vector DB",
      "WebSockets",
    ],
    year: "Mar 2026 – Present",
    category: "ai",
  },
  {
    id: uuidv4(),
    role: "Full-Stack Developer",
    company: "Mentori",
    description:
      "Contributed to scalable, user-focused products in a collaborative team environment with emphasis on clean architecture and responsive interfaces.",
    highlights: [
      "Developed and maintained production features using Next.js, TypeScript, and Tailwind CSS",
      "Integrated RESTful APIs and coordinated with backend teams for seamless data handling",
      "Participated in debugging, code reviews, and Git-based collaborative workflows",
      "Authored technical articles on programming best practices and modern development workflows",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Git",
    ],
    year: "Mar 2025 – Apr 2026",
    category: "fullstack",
  },
  {
    id: uuidv4(),
    role: "Front-End Developer",
    company: "LineDevLtd",
    description:
      "Enhanced codebase quality and delivered robust web applications for a software company specializing in tailored web and mobile solutions.",
    highlights: [
      "Improved application structure and component architecture across React projects",
      "Collaborated with cross-functional teams to deliver client-facing features on schedule",
      "Resolved production issues through systematic debugging and root-cause analysis",
      "Gained hands-on experience in real-world front-end development challenges",
    ],
    technologies: ["React.js", "TypeScript", "JavaScript"],
    year: "Jan 2024 – Feb 2025",
    category: "frontend",
  },
  {
    id: uuidv4(),
    role: "Freelance Front-End Developer",
    company: "Self-Employed",
    description:
      "Delivered responsive, high-quality web applications for diverse clients while continuously expanding expertise across the modern JavaScript ecosystem.",
    highlights: [
      "Built dynamic user interfaces with Next.js, React, TypeScript, and Tailwind CSS",
      "Managed full project lifecycles from requirements gathering to deployment",
      "Collaborated with remote teams to meet client specifications and deadlines",
      "Applied full-stack patterns with PostgreSQL, MongoDB, Prisma, and Redux",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Redux",
    ],
    year: "Jun 2024 – Present",
    category: "frontend",
  },
];

export const PROJECTES: ProjectType[] = [
  {
    id: uuidv4(),
    title: "AI-Cruter — AI Interview Platform",
    image: aiCruterImage,
    description:
      "An AI-powered interview platform that generates custom questionnaires for any role and evaluates candidate responses in real time. Streamlines hiring for recruiters and HR teams by automating interviews and delivering structured, objective candidate assessments.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Vapi",
      "Gemini API",
      "Tailwind CSS",
    ],
    live: "",
    code: "https://github.com/Beqa-Elashvili/aicruter",
    category: "ai",
    featured: true,
  },
  {
    id: uuidv4(),
    title: "Veli.Store Clone — E-Commerce Platform",
    image: VeliClone,
    description:
      "A full-stack e-commerce platform with user authentication, real-time cart management, product variations by size and color, order tracking, and secure checkout. Built with PostgreSQL for data integrity and Redux for predictable state management.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redux",
      "Prisma",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
    ],
    live: "https://veli-clone.vercel.app/",
    code: "https://github.com/Beqa-Elashvili/E-comerce_veli_clone",
    category: "fullstack",
    featured: true,
  },
  {
    id: uuidv4(),
    title: "Messenger Clone — Real-Time Chat",
    image: MessengerClone,
    description:
      "A real-time messaging platform with one-to-one and group chat, user presence tracking, and live status updates. Integrated Pusher for instant message delivery and NextAuth for secure authentication.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Prisma",
      "Pusher",
      "WebSockets",
      "Tailwind CSS",
    ],
    live: "https://messenger-clone-eight-neon.vercel.app/",
    code: "https://github.com/Beqa-Elashvili/messenger-clone",
    category: "fullstack",
    featured: true,
  },
  {
    id: uuidv4(),
    title: "Inventory Management System",
    image: InventoryManagement,
    description:
      "A comprehensive inventory platform with analytics dashboards, purchase and sales tracking, and real-time updates. Features dark mode support and seamless data interaction for efficient business operations.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Express.js",
      "Prisma",
      "Tailwind CSS",
    ],
    live: "https://inventorymanagement-liard.vercel.app/",
    code: "https://github.com/Beqa-Elashvili/inventory-management",
    category: "fullstack",
  },
  {
    id: uuidv4(),
    title: "BOG Mobile Bank",
    image: Bog,
    description:
      "A mobile banking application offering secure account management, fund transfers, and real-time transaction history. Designed for a smooth user experience with high security standards for financial data.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Redux",
      "MongoDB",
      "Prisma",
      "Tailwind CSS",
    ],
    live: "https://bog-app-zeta.vercel.app/",
    code: "https://github.com/Beqa-Elashvili/BOG-clone",
    category: "fullstack",
  },
  {
    id: uuidv4(),
    title: "Car Rental Application",
    image: carRentApplication,
    description:
      "A car rental platform where users browse vehicles, select dates via calendar, track rental periods, and complete secure reservations and payments through an intuitive interface.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Ant Design",
    ],
    live: "https://luxurydrive.vercel.app/",
    code: "https://github.com/Beqa-Elashvili/Car-Rent-Application",
    category: "fullstack",
  },
  {
    id: uuidv4(),
    title: "Weather Forecast Application",
    image: weatherImage,
    description:
      "A feature-rich weather app with location search, calendar integration for future and past forecasts, interactive map views, local timezone support, and fully responsive design across all devices.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Ant Design"],
    live: "https://weatherappier.netlify.app/",
    code: "https://github.com/Beqa-Elashvili/Weather_App",
    category: "frontend",
  },
  {
    id: uuidv4(),
    title: "Amazon E-Commerce Platform",
    image: amazonImage,
    description:
      "An Amazon-inspired e-commerce platform with comprehensive cart and checkout, wishlist functionality, profile management, and secure user authentication — mirroring essential features of top-tier shopping sites.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Ant Design"],
    live: "",
    code: "https://github.com/Beqa-Elashvili/Amazon-E-Comerce-Project",
    category: "frontend",
  },
  {
    id: uuidv4(),
    title: "Teacher's Electronic Magazine",
    image: TeacherElecronicMagazineImage,
    description:
      "A digital gradebook analogous to a standard teacher's journal with dynamic global database storage, week and subject-based score tracking, and validated scoring between 1 and 10.",
    technologies: ["JavaScript", "HTML", "CSS"],
    live: "https://resplendent-queijadas-4fd346.netlify.app/",
    code: "https://github.com/Beqa-Elashvili/Teacher-s-electronic-magazine",
    category: "frontend",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Front-End",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
      "HTML & CSS",
      "SASS",
      "Styled Components",
    ],
  },
  {
    title: "Back-End",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Supabase",
      "REST APIs",
      "WebSockets",
      "Pusher",
    ],
  },
  {
    title: "Generative AI",
    skills: [
      "LLMs",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "Embeddings",
      "Vector Databases",
      "Gemini API",
      "Speech Recognition",
      "Text-to-Speech",
    ],
  },
  {
    title: "Tools & Concepts",
    skills: [
      "Git & Gitflow",
      "Docker",
      "Postman",
      "pgAdmin",
      "npm & Yarn",
      "Responsive Design",
      "API Integration",
      "Functional Programming",
    ],
  },
];

export const EDUCATION: EducationType[] = [
  {
    id: uuidv4(),
    degree: "Front-End Web Development (React)",
    institution: "Digital Institute",
    year: "May 2023",
    description:
      "Advanced curriculum covering Material UI, Ant Design, Redux, payment integrations, and REST API development.",
  },
];

export const CONTACT: { number: string; gmail: string } = {
  number: "+995 591 448 452",
  gmail: "beqaelashvili3@gmail.com",
};

export const CATEGORY_LABELS: Record<string, string> = {
  frontend: "Front-End",
  backend: "Back-End",
  fullstack: "Full-Stack",
  ai: "Generative AI",
};
