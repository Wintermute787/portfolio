import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li>
        <NavLink to="/projects">PROJECTS</NavLink>
      </li>
      {/* <li>
        <NavLink to="/contact">CONTACT</NavLink>
      </li> */}
    </ul>
  );
};

export default NavLinks;
