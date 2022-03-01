import Image from 'next/image'
import React from 'react'
import personPicture from '../assets/images/home-illustration.png'
import { Col, Container, Row } from 'react-bootstrap'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fade } from 'react-reveal'

const HomeSection = () => {
    const myLoader = ({ src, width }) => {
        return `https://septianfauzi.com/${src}?w=${width}`
    }

    return (
        <Fade>
            <Row style={{ minHeight: '100vh' }} id="home">
                <Col className="d-flex h-100 flex-column justify-content-center mt-xl-5 pt-xl-5 mt-xxl-5 pt-xxl-5 mt-lg-5 pt-5 mt-5 pt-lg-5 mt-md-5 mt-md-2 pt-md-5 mt-sm-5 pt-sm-5 align-items-start" xs={12} sm={12} md={12} lg={6} xl={6}>
                    <p className="text-teal"><FontAwesomeIcon icon={faCircle} size="sm" /> Introducing </p>
                    <h1 className="text-white font-weight-bold display-3">Hello</h1>
                    <h1 className="text-white font-weight-bold display-3">I&apos;m Septian Fauzi</h1>
                    <h3 className="text-teal">{`< Front-End Developer />`}</h3>
                    <p className="text-white">I am someone who is very interested in technology development especially website development. I have experience as a Developer for 2+ years. Some development technologies that I master include JavaScript, PHP, HTML, CSS, SCSS, SASS, Webpack, jQuery, Bootstrap, Material Design, React JS,  REST API, Git and many more. I am very happy if I can collaborate with everyone to develop and build projects that are useful for many people. Feel free to contact me if you need a partner to build an awasome project.</p>
                    <h5 className="font-italic text-white mx-auto mt-5">&quot;Build Your Idea With My Code&quot;</h5>
                </Col>
                <Col className="d-flex h-100 flex-column my-auto my-xxl-5 my-lg-5 mx-lg-auto mx-md-auto py-auto px-auto align-items-center justify-content-center pt-md-5" xs={12} sm={12} md={10} lg={6} xl={6}>
                    <div>
                        <Image loader={myLoader} src={personPicture} alt="-" />
                    </div>
                    <a href="http://www.freepik.com" className="text-white mt-2" style={{ fontSize: '8px' }}>Designed by Freepik</a>
                </Col>
            </Row >
        </Fade>
    )
}

export default HomeSection
