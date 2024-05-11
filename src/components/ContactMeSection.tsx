import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import {
  faCircle,
  faHeart,
  faMailBulk,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <Row style={{ minHeight: "100vh" }} id="contact">
      <Row className="text-center text-white d-flex flex-row align-items-start py-3 my-5">
        <Col className="d-flex flex-column align-items-start" xl={12}>
          <p className="text-teal">
            <FontAwesomeIcon icon={faCircle} size="sm" /> Contact{" "}
          </p>
          <p className={"text-teal font-weight-bold display-3"}>{`{`}</p>
        </Col>
        <h2 className="text-white text-center" style={{ marginTop: "25px" }}>
          Contact Me
        </h2>
        <h2 style={{ marginBottom: "100px" }}>
          To Collaborate on Awasome Project
        </h2>
        <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/septian-fauzi-09sf/"
            rel="noreferrer"
          >
            <FontAwesomeIcon style={{ fontSize: "2.5rem" }} icon={faLinkedin} />
          </a>
          <h5 className="mt-3 mb-0 font-bold">LinkedIn</h5>
          <p>@septian-fauzi-09sf</p>
          <a
            className="d-grid"
            target="_blank"
            href="https://www.linkedin.com/in/septian-fauzi-09sf/"
            rel="noreferrer"
          >
            <Button className="mx-1 text-white " variant="outline-secondary">
              Go to Linkedin
            </Button>
          </a>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
          <a target="_blank" href="mailto:fauzy434@gmail.com" rel="noreferrer">
            <FontAwesomeIcon
              className="text-white"
              style={{ fontSize: "2.5rem" }}
              icon={faMailBulk}
            />
          </a>
          <h5 className="mt-3 mb-0">Email</h5>
          <p>fauzy434@gmail.com</p>
          <a
            className="d-grid"
            target="_blank"
            href="mailto:fauzy434@gmail.com"
            rel="noreferrer"
          >
            <Button className="mx-1 text-white " variant="outline-secondary">
              Send Email
            </Button>
          </a>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
          <a
            target="_blank"
            href="https://www.instagram.com/septianfauzi9"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="text-white"
              style={{ fontSize: "2.5rem" }}
              icon={faInstagram}
            />
          </a>
          <h5 className="mt-3 mb-0">Instagram</h5>
          <p>@septianfauzi9</p>
          <a
            className="d-grid"
            target="_blank"
            href="https://www.instagram.com/septianfauzi9"
            rel="noreferrer"
          >
            <Button className="mx-1 text-white " variant="outline-secondary">
              Go to Instagram
            </Button>
          </a>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
          <FontAwesomeIcon
            className="text-white"
            style={{ fontSize: "2.5rem" }}
            icon={faFilePdf}
          />
          <h5 className="mt-3 mb-0">CV</h5>
          <p>Download My Latest CV</p>
          <a
            className="d-grid"
            target="_blank"
            href="https://septianfauzi.com/assets/CV/CV_Septian_Fauzi_2023.pdf"
            rel="noreferrer"
          >
            <Button className="mx-1 text-white " variant="outline-secondary">
              Download CV
            </Button>
          </a>
        </Col>
        <Col className="d-flex flex-column align-items-end" xl={12}>
          <p className={"text-teal font-weight-bold display-3"}>{`}`}</p>
        </Col>
        <hr className="text-white" />
        <Col className="text-center my-auto py-5">
          <p className="text-white text-center">
            Made With <FontAwesomeIcon className="text-white" icon={faHeart} />
          </p>
          <p className="text-white text-center">&copy; Septian Fauzi 2023</p>
          <p className="text-white text-center"></p>
        </Col>
      </Row>
    </Row>
  );
};

export default ContactMe;
