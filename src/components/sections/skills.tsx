import { Section } from "@/components/section";
import { skillGroups } from "@/content/skills";
import { delay } from "@/lib/motion";

export function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      label="Skills"
      title="Tools I use in shipped and published work."
      intro="Grouped by layer. Everything listed here appears in my work experience or my repositories."
    >
      <div className="divide-y divide-line border-y border-line">
        {skillGroups.map((group, i) => (
          <div
            key={group.title}
            data-reveal
            style={delay(i * 50)}
            className="grid gap-4 py-7 md:grid-cols-12 md:gap-12"
          >
            <div className="md:col-span-3">
              <h3 className="font-medium tracking-tight">{group.title}</h3>
              <p className="mt-1 text-sm text-muted">{group.description}</p>
            </div>
            <ul
              aria-label={group.title}
              className="flex flex-wrap gap-x-2 gap-y-2.5 md:col-span-9 md:pt-0.5"
            >
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line px-3 py-1.5 text-sm text-ink-soft transition-colors duration-200 hover:border-ink hover:text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
