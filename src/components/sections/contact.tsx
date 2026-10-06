import { site } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/icons";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: "beqa-elashvili", href: site.linkedin },
  { label: "GitHub", value: "Beqa-Elashvili", href: site.github },
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-night text-paper selection:bg-paper selection:text-night"
    >
      <div className="container-page py-20 md:py-32">
        <p className="label flex items-center gap-3 text-night-muted" data-reveal>
          <span className="text-accent-soft">05</span>
          <span aria-hidden className="h-px w-6 bg-night-line" />
          Contact
        </p>

        <div className="mt-10 grid gap-14 md:grid-cols-12" data-reveal>
          <div className="md:col-span-7">
            <h2
              id="contact-heading"
              className="text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.02] font-medium tracking-[-0.035em] text-balance"
            >
              Open to full-stack and{" "}
              <span className="font-serif font-normal italic">AI engineering</span> roles.
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="group mt-10 inline-flex h-12 items-center gap-2.5 rounded-full bg-paper px-6 text-sm font-medium text-night transition-colors duration-200 hover:bg-white"
            >
              Write to me
              <ArrowUpRightIcon className="transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <ul className="md:col-span-5 md:pt-3">
            {channels.map((channel) => {
              const external = channel.href.startsWith("http");
              return (
                <li key={channel.label} className="border-b border-night-line first:border-t">
                  <a
                    href={channel.href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex min-h-16 items-center justify-between gap-4 py-4"
                  >
                    <span className="label text-night-muted">{channel.label}</span>
                    <span className="flex min-w-0 items-center gap-2 text-sm text-paper/90 transition-colors duration-200 group-hover:text-paper">
                      <span className="truncate">{channel.value}</span>
                      <ArrowUpRightIcon
                        width={13}
                        height={13}
                        className="shrink-0 text-night-muted transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-paper"
                      />
                    </span>
                    {external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
