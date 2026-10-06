import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-night-line bg-night text-night-muted">
      <div className="container-page flex flex-col gap-3 py-8 font-mono text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          Built with Next.js and TypeScript ·{" "}
          <a
            href={site.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-night-line underline-offset-4 transition-colors duration-200 hover:text-paper"
          >
            Source
          </a>
        </p>
      </div>
    </footer>
  );
}
