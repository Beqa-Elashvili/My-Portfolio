import Image from "next/image";
import portrait from "@/assets/portrait.jpg";
import { site } from "@/content/site";
import { delay } from "@/lib/motion";
import { ArrowDownIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const socialLinks = [
  { label: "GitHub", href: site.github, icon: GitHubIcon },
  { label: "LinkedIn", href: site.linkedin, icon: LinkedInIcon },
  { label: "Email", href: `mailto:${site.email}`, icon: MailIcon },
];

const portraitAlt = `Portrait of ${site.name}`;

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden">
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />

      <div className="container-page relative grid gap-12 pt-28 pb-16 md:grid-cols-12 md:pt-40 md:pb-24">
        <div className="md:col-span-7 lg:col-span-8">
          <div className="enter flex items-center gap-4" style={delay(0)}>
            <span className="size-14 shrink-0 overflow-hidden rounded-full ring-1 ring-line md:hidden">
              <Image
                src={portrait}
                alt=""
                width={112}
                height={112}
                placeholder="blur"
                className="size-full origin-[51%_36%] scale-[2.2] object-cover"
              />
            </span>
            <p className="label flex items-center gap-2.5 text-muted">
              <span aria-hidden className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent/40 motion-reduce:hidden" />
                <span className="relative size-2 rounded-full bg-accent" />
              </span>
              <span>
                {site.currentRole.title} at {site.currentRole.company}
              </span>
            </p>
          </div>

          <h1
            className="enter mt-8 text-[clamp(3rem,10vw,6.5rem)] leading-[0.92] font-medium tracking-[-0.045em]"
            style={delay(80)}
          >
            Beqa
            <br />
            Elashvili
          </h1>

          <p
            className="enter mt-8 max-w-xl font-serif text-[1.75rem] leading-[1.15] text-ink-soft italic md:text-[2.125rem]"
            style={delay(160)}
          >
            Full-stack engineer building LLM, RAG and voice AI systems.
          </p>

          <p
            className="enter mt-6 max-w-xl leading-relaxed text-pretty text-muted"
            style={delay(240)}
          >
            I build product interfaces in React, Next.js and TypeScript, and the Python and Node.js
            backends behind them: retrieval pipelines that cite their sources, agents that act
            through validated tools, and real-time voice agents.
          </p>

          <div
            className="enter mt-10 flex flex-wrap items-center gap-3"
            style={delay(320)}
          >
            <a
              href="#work"
              className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-ink px-6 text-sm font-medium text-paper transition-colors duration-200 hover:bg-ink-soft"
            >
              Selected work
              <ArrowDownIcon className="transition-transform duration-300 ease-out-soft group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-full border border-line-strong px-6 text-sm font-medium transition-colors duration-200 hover:border-ink"
            >
              Get in touch
            </a>
            <ul className="-ml-3 flex items-center gap-1 sm:ml-1" aria-label="Profiles">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    className="grid size-11 place-items-center rounded-full text-muted transition-colors duration-200 hover:bg-paper-sunken hover:text-ink"
                  >
                    <Icon width={18} height={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure
          className="enter hidden md:col-span-5 md:block lg:col-span-4"
          style={delay(200)}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-paper-sunken ring-1 ring-line">
            <Image
              src={portrait}
              alt={portraitAlt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 360px, 40vw"
              className="origin-[52%_38%] scale-[1.35] object-cover"
            />
          </div>
          <figcaption className="label mt-3 flex justify-between text-muted">
            <span>{site.name}</span>
            <span>{site.title}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
