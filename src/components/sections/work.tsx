import { Section } from "@/components/section";
import { ArchiveCard } from "@/components/work/archive-card";
import { ProjectCard } from "@/components/work/project-card";
import { archiveProjects, featuredProjects } from "@/content/projects";
import { delay } from "@/lib/motion";

export function Work() {
  return (
    <Section
      id="work"
      index="02"
      label="Selected work"
      title={
        <>
          Recent systems, from document retrieval to{" "}
          <span className="font-serif font-normal italic">phone calls</span>.
        </>
      }
      intro="Each project lists what it solves, my role and how it works. Private repositories are marked; their descriptions are based on the code."
    >
      <div>
        {featuredProjects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            total={featuredProjects.length}
          />
        ))}
      </div>

      <div className="mt-20 border-t border-line pt-12 md:mt-28">
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between" data-reveal>
          <h3 className="text-xl font-medium tracking-tight">Earlier full-stack builds</h3>
          <p className="text-sm text-muted">2025 · Next.js, Prisma, Express, real-time</p>
        </div>
        <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {archiveProjects.map((project, i) => (
            <li key={project.name} data-reveal style={delay(i * 70)}>
              <ArchiveCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
