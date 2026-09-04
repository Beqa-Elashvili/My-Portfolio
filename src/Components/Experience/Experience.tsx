import { useState } from "react";
import { EXPERIENCES, CATEGORY_LABELS } from "src@/Constants";
import { ExperienceCategory, Experiencetype } from "src@/assets/types";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { CategoryBadge } from "../ui/CategoryBadge";

type FilterOption = "all" | ExperienceCategory;

const FILTERS: { value: FilterOption; label: string }[] = [
  { value: "all", label: "All" },
  { value: "ai", label: CATEGORY_LABELS.ai },
  { value: "fullstack", label: CATEGORY_LABELS.fullstack },
  { value: "frontend", label: CATEGORY_LABELS.frontend },
  { value: "backend", label: CATEGORY_LABELS.backend },
];

function ExperienceItem({ item }: { item: Experiencetype }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-accent border-2 border-surface" />
      <div className="absolute left-[5px] top-5 bottom-0 w-px bg-surface-border last:hidden" />

      <div className="glass-card p-6 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-lg text-neutral-100">
              {item.role}
            </h3>
            <p className="text-accent-light text-sm font-medium mt-0.5">
              {item.company}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <CategoryBadge category={item.category} />
            <span className="text-xs text-neutral-500 whitespace-nowrap">
              {item.year}
            </span>
          </div>
        </div>

        <p className="text-sm text-neutral-400 leading-relaxed">
          {item.description}
        </p>

        <ul className="space-y-2">
          {item.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-sm text-neutral-400"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-light" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          {item.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const [filter, setFilter] = useState<FilterOption>("all");

  const filtered =
    filter === "all"
      ? EXPERIENCES
      : EXPERIENCES.filter((e) => e.category === filter);

  return (
    <section id="experience" className="section-container section-divider pt-24">
      <SectionHeading title="Professional" subtitle="Experience" />

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

      <div className="relative">
        {filtered.map((item) => (
          <ExperienceItem key={item.id} item={item} />
        ))}
        {filtered.length === 0 && (
          <p className="text-neutral-500 text-sm text-center py-8">
            No experience entries in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
