import { ExperienceCategory, ProjectCategory } from "src@/assets/types";
import { CATEGORY_LABELS } from "src@/Constants";

const CATEGORY_STYLES: Record<string, string> = {
  frontend: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  backend: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  fullstack: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  ai: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

type CategoryBadgeProps = {
  category: ExperienceCategory | ProjectCategory;
};

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${CATEGORY_STYLES[category]}`}
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}
