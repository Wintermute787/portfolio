import React from "react";
import { Container } from "react-bootstrap";
import "./AboutText.css";
const AboutText = () => {
  return (
    <Container>
      <div className="about-text">
        <p className="about-text__intro">
          I am a front-end developer, graduate from the Epicodus school of web
          design in Portland OR. I have 2 years of experience building websites
          with sleek, clean UI layouts.
        </p>
        <h2 className="about-text__skills">Skills</h2>
        <p className="about-text__skills-text">
          During my private study and time with developing functional websites,
          I have picked up various skills. My primary focus is front-end
          development, but I also do works on the backend. My skills include:
        </p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>C#</li>
          <li>ASP.NET</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
        <h2 className="about-text__frontend">Front-end Development</h2>
        <p className="about-text__frontend-text1">
          I specialize in creating sleek, clean designs. Creating layouts that
          are accessible for everyone is of upmost importance to me. During the
          creation process, I like to keep in mind those who may not have the
          luxury of utilizing a website like most. Color, layout and readable
          font are a few of the tools I utilize.
        </p>
        <p className="about-text__frontend-text2">
          Alongside accessibility, I love to play around with dynamic layouts. I
          strive to make sure my UI design works best for mobile or desktop
          view. I believe it to be important in the new age of mobile web and
          application usage.
        </p>
        <h2 className="about-text__backend">Back-end Development</h2>
        <p className="about-text__backend-text">
          By using technologies such as Node.js and Express, I can also create
          back-end applications that will suit a wide range of needs. I will
          help you establish a database to hold your important information, and
          user authentication to provide security for your users. Build websites
          from It's foundation, all the way to the visual representation takes
          time and effort. I will help alleviate those development headaches and
          act as your advocate in creating the best server side application
          possible.
        </p>
      </div>
    </Container>
  );
};

export default AboutText;
