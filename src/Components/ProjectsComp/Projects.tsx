import { useState } from "react";
import { PROJECTES, CATEGORY_LABELS } from "src@/Constants";
import { ProjectCategory, ProjectType } from "src@/assets/types";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { CategoryBadge } from "../ui/CategoryBadge";

type FilterOption = "all" | ProjectCategory;

const FILTERS: { value: FilterOption; label: string }[] = [
  { value: "all", label: "All" },
  { value: "ai", label: CATEGORY_LABELS.ai },
  { value: "fullstack", label: CATEGORY_LABELS.fullstack },
  { value: "frontend", label: CATEGORY_LABELS.frontend },
  { value: "backend", label: CATEGORY_LABELS.backend },
];

function ProjectCard({ item, index }: { item: ProjectType; index: number }) {
  return (
    <motion.article
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`glass-card overflow-hidden group hover:border-accent/30 transition-all duration-300 ${
        item.featured ? "md:col-span-2" : ""
      }`}
    >
      <div
        className={`flex flex-col ${item.featured ? "md:flex-row" : ""} h-full`}
      >
        <div
          className={`overflow-hidden bg-surface-raised ${
            item.featured ? "md:w-2/5 shrink-0" : "h-44"
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              item.featured ? "h-full min-h-[200px]" : "h-44"
            }`}
          />
        </div>

        <div className="p-6 flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold text-neutral-100 leading-snug">
              {item.title}
            </h3>
            <CategoryBadge category={item.category} />
          </div>

          <p className="text-sm text-neutral-400 leading-relaxed flex-1">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            {item.live !== "" && (
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent-light hover:text-white transition-colors"
              >
                <CiGlobe className="text-base" />
                Live Demo
              </a>
            )}
            <a
              href={item.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-base" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<FilterOption>("all");

  const filtered =
    filter === "all"
      ? PROJECTES
      : PROJECTES.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-container section-divider pt-24">
      <SectionHeading title="Featured" subtitle="Projects" />

      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === value
                ? "bg-accent text-white shadow-glow"
                : "bg-surface-raised text-neutral-400 border border-surface-border hover:text-neutral-200 hover:border-accent/30"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item, index) => (
          <ProjectCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-neutral-500 text-sm text-center py-8">
          No projects in this category.
        </p>
      )}
    </section>
  );
}
