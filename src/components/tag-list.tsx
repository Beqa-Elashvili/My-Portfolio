type TagListProps = {
  items: readonly string[];
  label: string;
};

export function TagList({ items, label }: TagListProps) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-paper-raised px-2.5 py-1 font-mono text-[0.6875rem] leading-none text-ink-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
