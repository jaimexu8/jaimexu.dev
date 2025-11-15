import { MutableRefObject } from "react";
import { PROJECTS_DATA } from "../constants";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {
  sectionRef: MutableRefObject<HTMLElement | null>;
}

export const Projects = ({ sectionRef }: ProjectsProps) => {
  return (
    <section ref={sectionRef} className="fade-in-up">
      <h2>Projects</h2>
      <p className="mb-8">
        Here are some projects that demonstrate my skills in full-stack
        development.
      </p>

      <div className="projects-grid">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

