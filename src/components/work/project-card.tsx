import type { FeaturedProject } from "@/content/types";
import { ArrowUpRightIcon, LockIcon } from "@/components/icons";
import { TagList } from "@/components/tag-list";
import { Pipeline } from "./pipeline";

type ProjectCardProps = {
  project: FeaturedProject;
  index: number;
  total: number;
};

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  const headingId = `project-${project.slug}`;
  const position = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <article
      aria-labelledby={headingId}
      data-reveal
      className="group grid gap-10 border-t border-line py-12 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-12 md:py-16"
    >
      <div className="flex flex-col md:col-span-5">
        <p className="label flex items-center gap-3 text-muted">
          <span className="text-ink">{position}</span>
          <span aria-hidden className="h-px w-6 bg-line-strong" />
          {project.year}
        </p>

        <h3 id={headingId} className="mt-5 text-2xl font-medium tracking-tight md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-4 leading-relaxed text-pretty text-ink-soft">{project.summary}</p>

        <dl className="mt-8 space-y-5 text-sm">
          <div>
            <dt className="label text-muted">Problem</dt>
            <dd className="mt-1.5 leading-relaxed text-pretty text-muted">{project.problem}</dd>
          </div>
          <div>
            <dt className="label text-muted">Role</dt>
            <dd className="mt-1.5">{project.role}</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-auto md:pt-10">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 border-b border-line-strong pb-0.5 text-sm font-medium transition-colors duration-200 hover:border-ink"
            >
              {link.label}
              <span className="sr-only"> for {project.name} (opens in a new tab)</span>
              <ArrowUpRightIcon
                width={14}
                height={14}
                className="transition-transform duration-300 ease-out-soft group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          ))}
          {project.visibility && (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
              <LockIcon width={13} height={13} />
              {project.visibility}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-8 md:col-span-7">
        <Pipeline steps={project.pipeline} label={`${project.name} system flow`} />

        <ul className="space-y-3">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-pretty text-ink-soft">
              <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>

        <TagList items={project.stack} label={`${project.name} technologies`} />
      </div>
    </article>
  );
}
