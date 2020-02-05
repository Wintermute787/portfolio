import React from "react";
import { Container } from "react-bootstrap";
import "./Project.css";
import ProjectsHeader from "../components/Projects/ProjectsHeader";
import ProjectList from "../components/Projects/ProjectsList";
import capture1 from "../../shared/content/capture1.PNG";
import capture2 from "../../shared/content/capture2.PNG";

const PROJECTS = [
  {
    id: "p1",
    title: "Tetris",
    image: `${capture1}`,
    description: "A Tetris game built with react, html and css",
    buttonLink: "https://TETRIS-9455B.FIREBASEAPP.COM"
  },
  {
    id: "p2",
    title: "Bloody disgusting",
    image: `${capture2}`,
    description: 'A remake of the website "Bloody Disgusting" using Angular',
    buttonLink: "https://HORROR-SITE.FIREBASEAPP.COM"
  }
];

const Projects = () => {
  return (
    <div>
      <ProjectsHeader />
      <Container>
        <ProjectList items={PROJECTS} />
      </Container>
    </div>
  );
};

export default Projects;
