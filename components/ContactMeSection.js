import Image from 'next/image'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { faCircle, faHeart, faMailBulk, faMapMarker, faMapPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Fade } from 'react-reveal'

const ContactMe = () => {
    const myLoader = ({ src, width }) => {
        return `https://septianfauzi.com/${src}?w=${width}`
    }
    return (
        <Fade>
            <Row style={{ minHeight: '100vh' }} id="contact">
                <Row className="text-center text-white d-flex flex-row align-items-start py-3 my-5">

                    <Col className="d-flex flex-column align-items-start" xl={12}>
                        <p className="text-teal"><FontAwesomeIcon icon={faCircle} size="sm" /> Contact </p>
                        <p className={"text-teal font-weight-bold display-3"} >{`{`}</p>
                    </Col>
                    <h2 className="text-white text-center" style={{ marginTop: '25px' }}>Contact Me</h2>
                    <h2 style={{ marginBottom: '100px' }}>To Collaborate on Awasome Project</h2>
                    <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
                        <a target="_blank" href="https://www.linkedin.com/in/septian-fauzi-09sf/" rel="noreferrer"><FontAwesomeIcon style={{ fontSize: '2.5rem' }} icon={faLinkedinIn} /></a>
                        <h5 className="mt-3 mb-0 font-bold">LinkedIn</h5>
                        <p>@septian-fauzi-09sf</p>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
                        <a target="_blank" href="mailto:fauzy434@gmail.com" rel="noreferrer"><FontAwesomeIcon className="text-white" style={{ fontSize: '2.5rem' }} icon={faMailBulk} /></a>
                        <h5 className="mt-3 mb-0">Email</h5>
                        <p>fauzy434@gmail.com</p>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
                        <a target="_blank" href="https://www.instagram.com/septianfauzi9" rel="noreferrer"><FontAwesomeIcon className="text-white" style={{ fontSize: '2.5rem' }} icon={faInstagram} /></a>
                        <h5 className="mt-3 mb-0">Instagram</h5>
                        <p>@septianfauzi9</p>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
                        <FontAwesomeIcon className="text-white" style={{ fontSize: '2.5rem' }} icon={faMapMarker} />
                        <h5 className="mt-3 mb-0">Location</h5>
                        <p>Bogor, West Java, Indonesia</p>
                    </Col>
                    <Col className="d-flex flex-column align-items-end" xl={12}>
                        <p className={"text-teal font-weight-bold display-3"} >{`}`}</p>
                    </Col>
                    <hr className="text-white" />
                    <Col className="text-center my-auto py-5">
                        <p className="text-white text-center">Made With <FontAwesomeIcon className="text-white" icon={faHeart} /></p>
                        <p className="text-white text-center">&copy; Septian Fauzi 2022</p>
                        <p className="text-white text-center"></p>
                    </Col>
                </Row>

            </Row >
        </Fade>
    )
}

export default ContactMe
