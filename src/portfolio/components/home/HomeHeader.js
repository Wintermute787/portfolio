import React from "react";
import "./HomeHeader.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const HomeHeader = () => {
  return (
    <div className="header-main">
      <h2 className="header-title">
        React front-end developer with Node.js back-end experience
      </h2>
      <p>
        I specialize in custom websites built with clean, modern flow and
        functional server side connectivity.
      </p>
      <Link to="/projects">
        <Button variant="outline-success" size="lg">
          Check out my work!
        </Button>
      </Link>
    </div>
  );
};

export default HomeHeader;
