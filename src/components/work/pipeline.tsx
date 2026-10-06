import { delay } from "@/lib/motion";

type PipelineProps = {
  steps: string[];
  label: string;
};

/** A project's data flow. Steps highlight in order while the parent `.group` is hovered. */
export function Pipeline({ steps, label }: PipelineProps) {
  return (
    <figure className="rounded-sm border border-line bg-paper-raised p-4 md:p-5">
      <figcaption className="label mb-4 flex items-center justify-between text-muted">
        <span>System flow</span>
        <span aria-hidden>{steps.length} stages</span>
      </figcaption>
      <ol aria-label={label} className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step}
            style={delay(i * 90)}
            className="relative flex min-h-16 flex-col justify-between gap-2 rounded-sm border border-line bg-paper px-3 py-2.5 transition-[border-color,background-color] duration-500 [transition-delay:var(--delay)] group-hover:border-ink/40 group-hover:bg-paper-raised"
          >
            <span className="font-mono text-[0.625rem] text-muted">
              {String(i + 1).padStart(2, "0")}
              {i < steps.length - 1 && <span aria-hidden> →</span>}
            </span>
            <span className="font-mono text-xs leading-snug text-ink">{step}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
