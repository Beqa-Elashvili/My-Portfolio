import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    href: "https://github.com/Beqa-Elashvili",
    icon: FaGithub,
    label: "GitHub",
    hover: "hover:text-neutral-300",
  },
  {
    href: "https://www.linkedin.com/in/beqa-elashvili-493284234/",
    icon: FaLinkedin,
    label: "LinkedIn",
    hover: "hover:text-blue-400",
  },
  {
    href: "https://www.instagram.com/beqa_elashvili/",
    icon: FaInstagram,
    label: "Instagram",
    hover: "hover:text-pink-400",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 -mx-8 lg:-mx-28 px-8 lg:px-28 py-4 bg-surface/80 backdrop-blur-md border-b border-surface-border/50">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <a
          href="#"
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
        >
          BE
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="flex gap-4 text-xl" aria-label="Social media links">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label, hover }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-neutral-400 transition-colors duration-200 ${hover}`}
            >
              <Icon />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
