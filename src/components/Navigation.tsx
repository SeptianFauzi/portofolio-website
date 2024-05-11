import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
const Navigation = () => {
  return (
    <Navbar
      bg="light"
      expand={true}
      fixed="top"
      style={{ backgroundColor: "#310A58", position: "fixed", zIndex: 100 }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-sm-start justify-content-center"
        >
          <Nav activeKey="home">
            <Nav.Item className="px-2">
              <Nav.Link
                className="text-secondary active-scroll h5"
                eventKey="link-1"
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="item px-2">
              <Nav.Link
                className="text-secondary active-scroll h5"
                eventKey="link-1"
              >
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="item px-2">
              <Nav.Link
                className="text-secondary active-scroll h5"
                eventKey="link-2"
              >
                Portofolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="item px-2">
              <Nav.Link
                className="text-secondary active-scroll h5"
                eventKey="link-2"
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
