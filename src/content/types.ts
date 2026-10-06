import type { StaticImageData } from "next/image";

export type ExternalLink = {
  label: string;
  href: string;
};

export type FeaturedProject = {
  slug: string;
  name: string;
  /** One sentence: what it is. */
  summary: string;
  /** The problem it addresses. */
  problem: string;
  role: string;
  year: string;
  /** Shown instead of a code link when the repository is not public. */
  visibility?: string;
  /** The system's data flow, rendered as a pipeline diagram. */
  pipeline: string[];
  highlights: string[];
  stack: string[];
  links: ExternalLink[];
};

export type ArchiveProject = {
  name: string;
  summary: string;
  image: StaticImageData;
  stack: string[];
  live?: string;
  code: string;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};
