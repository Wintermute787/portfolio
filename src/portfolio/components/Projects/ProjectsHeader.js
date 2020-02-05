import React from "react";
import { Container } from "react-bootstrap";
import "./ProjectsHeader.css";

const ProjectsHeader = () => {
  return (
    <div className="projects-header__main">
      <h1 className="projects-title">Projects</h1>
      <p className="project-p">
        Please check out some of the projects I have completed on my own time.
      </p>
    </div>
  );
};

export default ProjectsHeader;
