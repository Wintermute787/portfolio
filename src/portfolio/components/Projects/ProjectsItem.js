import React from "react";
import { Link } from "react-router-dom";
import "./ProjectItem.css";
import { Image, Button } from "react-bootstrap";
const ProjectsItem = props => {
  return (
    <div className="project-main">
      <div className="project-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="project-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.buttonLink}>
          <Button variant="outline-success" size="lg">
            View Site
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectsItem;
