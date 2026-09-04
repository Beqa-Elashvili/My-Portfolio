import { motion } from "framer-motion";
import aboutImg from "src@/assets/images/aboutimg.png";
import { SectionHeading } from "../ui/SectionHeading";

const HIGHLIGHTS = [
  "Front-end development with React, Next.js, TypeScript, and Tailwind CSS",
  "Generative AI solutions using LLMs, RAG, AI agents, and prompt engineering",
  "Full-stack architecture with Node.js, PostgreSQL, MongoDB, and Supabase",
  "Real-time applications with WebSockets, Pusher, and voice AI technologies",
];

export function About() {
  return (
    <section id="about" className="section-container section-divider pt-24">
      <SectionHeading title="About" subtitle="Me" />

      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative shrink-0 w-full lg:w-2/5"
        >
          <div className="absolute -inset-2 rounded-2xl bg-card-gradient" />
          <img
            className="relative rounded-2xl w-full shadow-card object-cover"
            src={aboutImg}
            alt="About Beqa Elashvili"
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-1 space-y-5"
        >
          <p className="text-neutral-300 leading-relaxed">
            Experienced Software Engineer specializing in front-end development
            and Generative AI. I design and deliver scalable, high-performance
            web applications and intelligent AI-powered products — from
            responsive interfaces to RAG pipelines and conversational agents.
          </p>
          <p className="text-neutral-400 leading-relaxed text-sm">
            Skilled in modern frontend architecture, state management, and
            performance optimization, with deep experience integrating AI
            services through Node.js, Python, REST APIs, and the Gemini API. I
            deliver clean, maintainable, production-ready code across the full
            stack.
          </p>

          <ul className="space-y-3 pt-2">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-neutral-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 pt-2 text-sm text-neutral-500">
            <span>
              <span className="text-neutral-300 font-medium">Languages:</span>{" "}
              Georgian (Native), English (B2)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
