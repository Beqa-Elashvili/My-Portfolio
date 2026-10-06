import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
};

export function Section({ id, index, label, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line">
      <div className="container-page py-20 md:py-28">
        <header className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12" data-reveal>
          <p className="label flex items-center gap-3 self-start text-muted md:col-span-3 md:pt-4">
            <span className="text-accent">{index}</span>
            <span aria-hidden className="h-px w-6 bg-line-strong" />
            {label}
          </p>
          <div className="md:col-span-9">
            <h2
              id={headingId}
              className="max-w-3xl text-3xl font-medium tracking-tight text-balance md:text-[2.75rem] md:leading-[1.1]"
            >
              {title}
            </h2>
            {intro && (
              <p className="mt-5 max-w-2xl leading-relaxed text-pretty text-muted">{intro}</p>
            )}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
