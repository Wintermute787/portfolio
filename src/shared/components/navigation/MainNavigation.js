import React from "react";
import "./MainNavigation.css";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Nav,
  Container
} from "react-bootstrap";
import NavLinks from "./NavLinks";

const MainNavigation = props => {
  return (
    // <MainHeader>
    //   <NavLinks />
    // </MainHeader>
    // bg="dark" variant="dark"
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Joseph Barnes</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-center">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavigation;
