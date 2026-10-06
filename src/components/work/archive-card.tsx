import Image from "next/image";
import type { ArchiveProject } from "@/content/types";
import { ArrowUpRightIcon } from "@/components/icons";

type ArchiveCardProps = {
  project: ArchiveProject;
};

export function ArchiveCard({ project }: ArchiveCardProps) {
  const links = [
    project.live && { label: "Live", href: project.live },
    { label: "Code", href: project.code },
  ].filter((link) => !!link);

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-paper-sunken ring-1 ring-line">
        <Image
          src={project.image}
          alt={`Screenshot of the ${project.name.toLowerCase()} project`}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 90vw"
          className="object-cover object-top transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
        />
      </div>
      <h4 className="mt-5 font-medium tracking-tight">{project.name}</h4>
      <p className="mt-2 text-sm leading-relaxed text-pretty text-muted">{project.summary}</p>
      <p className="mt-3 font-mono text-[0.6875rem] leading-relaxed text-ink-soft">
        {project.stack.join(" · ")}
      </p>
      <div className="mt-auto flex gap-5 pt-5">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-ink"
          >
            {link.label}
            <span className="sr-only"> for {project.name} (opens in a new tab)</span>
            <ArrowUpRightIcon width={13} height={13} />
          </a>
        ))}
      </div>
    </article>
  );
}
