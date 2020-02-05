import React from "react";
import ProjectsItem from "./ProjectsItem";

const ProjectsList = props => {
  return (
    <div>
      {props.items.map(project => (
        <ProjectsItem
          key={project.id}
          id={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          buttonLink={project.buttonLink}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
