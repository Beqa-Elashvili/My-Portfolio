import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl">BE</h1>
      <nav className="flex gap-2 text-2xl">
        <nav className="flex gap-2 text-2xl" aria-label="Social media links">
          <a
            href="https://github.com/Beqa-Elashvili"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub className="cursor-pointer hover:text-gray-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/beqa-elashvili-493284234/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="cursor-pointer hover:text-blue-500" />
          </a>
          <a
            href="https://www.instagram.com/beqa_elashvili/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
          </a>
        </nav>
      </nav>
    </div>
  );
}
