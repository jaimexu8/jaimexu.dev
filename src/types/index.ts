export interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  location?: string;
  description?: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface NavigationLink {
  label: string;
  href: string;
  sectionRef: React.RefObject<HTMLElement>;
}

export interface BackgroundCircle {
  className: string;
  transformY: number;
  transformX: number;
}

