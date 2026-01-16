import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-links">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <FontAwesomeIcon icon={faGithub} />
          View Code
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            aria-label={`View ${project.title} live demo`}
          >
            View Live
          </a>
        )}
      </div>
    </div>
  );
};
