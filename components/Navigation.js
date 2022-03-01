import React from 'react'
import { Button, Col, Container, Nav, Navbar, NavLink, Row } from 'react-bootstrap'
import { Link as ScrollLink } from 'react-scroll'
const Navigation = () => {
    return (

        <Navbar bg="light" expand={true} fixed="top" style={{ backgroundColor: '#310A58', position: "fixed", zindex: 100 }}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-sm-start justify-content-center">
                    <Nav
                        activeKey="home"
                    >
                        <Nav.Item className="px-2">
                            <Nav.Link className="text-secondary active-scroll h5" eventKey="link-1" ><ScrollLink to="home" activeClass="text-teal active" spy={true} smooth={false}>Home</ScrollLink></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="item px-2">
                            <Nav.Link className="text-secondary active-scroll h5" eventKey="link-1" ><ScrollLink to="skills" activeClass="text-teal active" spy={true} smooth={false}>Skills</ScrollLink></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="item px-2">
                            <Nav.Link className="text-secondary active-scroll h5" eventKey="link-2" ><ScrollLink to="portofolio" activeClass="text-teal active" spy={true} smooth={false}>Portofolio</ScrollLink></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="item px-2">
                            <Nav.Link className="text-secondary active-scroll h5" eventKey="link-2" ><ScrollLink to="contact" activeClass="text-teal active" spy={true} smooth={false}>Contact</ScrollLink></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar>


    )
}

export default Navigation
