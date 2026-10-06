"use client";

import { useEffect, useState } from "react";
import { navigation, site } from "@/content/site";

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A thin band across the upper middle of the viewport decides which section is current.
      { rootMargin: "-35% 0px -60% 0px" },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navigation.map((item) => item.href.slice(1));

export function SiteHeader() {
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        menuOpen
          ? "border-b border-line bg-paper"
          : scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5 text-sm font-medium tracking-tight">
          <span
            aria-hidden
            className="grid size-7 place-items-center rounded-full bg-ink font-mono text-[0.625rem] text-paper transition-transform duration-300 group-hover:rotate-[-8deg]"
          >
            BE
          </span>
          {site.name}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200 ${
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-3.5 -bottom-px h-px origin-left bg-ink transition-transform duration-300 ease-out-soft ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 grid size-11 place-items-center rounded-full md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-px w-full bg-ink transition-transform duration-300 ${
                menuOpen ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-ink transition-transform duration-300 ${
                menuOpen ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Primary"
        hidden={!menuOpen}
        className="border-t border-line md:hidden"
      >
        <ul className="container-page flex flex-col py-3">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-3.5 text-lg tracking-tight"
              >
                {item.label}
                <span aria-hidden className="font-mono text-xs text-muted">
                  {item.href}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
