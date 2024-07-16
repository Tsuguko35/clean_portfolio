import React from "react";
import "../../styles/projectsGrid.css";
import { Link } from "react-router-dom";
import { projects } from "../../utils";

function ProjectsGrid() {
  return (
    <div
      id="projectsGrid"
      className="projectsGrid animate"
      style={{ animationDelay: "0.6s" }}
    >
      {projects.map((project) => (
        <div className="project" key={project.name}>
          <Link to={project.url} className="thumbnail">
            <p>Go to site ↗</p>
            <img src={project.image} alt={project.name} />
          </Link>
          <div className="project-details">
            <Link to={project.url} className="project-name">
              {project.name} ↗
            </Link>
            <p className="project-description">{project.description}</p>
          </div>
          <div className="tech-stack">
            {project.techstack.map((tech) => (
              <p className="tech">{tech}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsGrid;
