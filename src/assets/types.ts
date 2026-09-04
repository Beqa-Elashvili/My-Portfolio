export type ExperienceCategory = "frontend" | "backend" | "fullstack" | "ai";

export type Experiencetype = {
  id: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
  technologies: string[];
  year: string;
  category: ExperienceCategory;
};

export type ProjectCategory = "frontend" | "backend" | "fullstack" | "ai";

export type ProjectType = {
  id: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  live: string;
  code: string;
  category: ProjectCategory;
  featured?: boolean;
};

export type EducationType = {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};
