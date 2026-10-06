import { Section } from "@/components/section";
import { TagList } from "@/components/tag-list";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      label="Experience"
      title={
        <>
          From frontend teams to{" "}
          <span className="font-serif font-normal italic">AI engineering</span>.
        </>
      }
    >
      <ol>
        {experience.map((entry) => (
          <li
            key={`${entry.company}-${entry.period}`}
            data-reveal
            className="grid gap-4 border-t border-line py-10 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-12"
          >
            <p className="label pt-1 text-muted md:col-span-3">{entry.period}</p>

            <div className="md:col-span-9">
              <h3 className="text-xl font-medium tracking-tight">
                {entry.role}
                <span className="text-muted"> · {entry.company}</span>
              </h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-pretty text-ink-soft">
                {entry.summary}
              </p>
              <ul className="mt-5 max-w-2xl space-y-2.5">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-pretty text-muted">
                    <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-line-strong" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <TagList items={entry.stack} label={`Technologies used at ${entry.company}`} />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
