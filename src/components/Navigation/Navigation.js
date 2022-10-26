import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuora } from "@fortawesome/free-brands-svg-icons";
import { faExclamation, faZ } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="fs-3">
            <FontAwesomeIcon icon={faExclamation} />
            <FontAwesomeIcon icon={faQuora} />
            <span className="fw-bold">ui</span>
            <FontAwesomeIcon icon={faZ} />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/topics">
              Topics
            </Nav.Link>
            <Nav.Link as={NavLink} to="/statistics">
              Statistics
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blogs">
              Blogs
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
