import React, { useEffect } from "react";
import "../styles/projects.css";
import { ProjectsGrid } from "../components";

function Projects() {
  useEffect(() => {
    document.title = "Jazpher Carpio | Projects";
  }, []);
  return (
    <div id="projects" className="projects page-container">
      <div className="wrapper">
        <p className="title">Projects</p>

        {/* Projects List */}
        <ProjectsGrid />
      </div>
    </div>
  );
}

export default Projects;
