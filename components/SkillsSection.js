import React, { useState } from 'react'
import { Card, Col, Container, Row, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faWindowMaximize, faMobileAlt, faRobot } from '@fortawesome/free-solid-svg-icons'
import { Fade } from 'react-reveal'

const SkillsSection = () => {
    const myLoader = ({ src, width }) => {
        return `https://septianfauzi.com/${src}?w=${width}`
    }
    const [logo, setlogo] = useState('laravel')
    return (
        <Fade>
            <Row style={{ minHeight: '100vh' }} id="skills" className="mt-5">

                <Col className="d-flex h-100 mt-sm-5 pt-sm-4 mt-md-5 pt-md-5 pt-lg-5 mt-lg-5 pt-xl-5 mt-xl-5 flex-column justify-content-center" xs={12} sm={12} md={12} lg={6} xl={6}>
                    <p className={logo ? "text-teal font-weight-bold display-3" : "text-white font-weight-bold display-3"} >{`<-----`}</p>
                    <Row>
                        <h1 className="text-white font-weight-bold my-4">Explore My Skills</h1>
                        <Col xs={4} className="d-flex justify-content-center">
                            <Card className={logo === 'laravel' ? "border border-4 border-teal shadow " : "border border-4 shadow "} style={{ backgroundColor: '#7579E7', borderRadius: '20px', cursor: 'pointer', minHeight: "10vmax", minWidth: "10vmax" }} onClick={() => setlogo("laravel")}>
                                <Card.Body className="mx-auto d-flex align-items-center" >
                                    <FontAwesomeIcon style={{ fontSize: '5vmax', }} icon={faWindowMaximize} className={logo === 'laravel' ? "text-teal" : "text-white"} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4} className="d-flex justify-content-center">
                            <Card className={logo === 'lumen' ? "border border-4 border-teal shadow " : "border border-4 shadow "} style={{ backgroundColor: '#7579E7', borderRadius: '20px', cursor: 'pointer', minHeight: "10vmax", minWidth: "10vmax" }} onClick={() => setlogo("lumen")}>
                                <Card.Body className="mx-auto d-flex align-items-center" >
                                    <FontAwesomeIcon style={{ fontSize: '5vmax' }} icon={faMobileAlt} className={logo === 'lumen' ? "text-teal" : "text-white"} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4} className="d-flex justify-content-center">
                            <Card className={logo === 'react' ? "border border-4 border-teal shadow " : "border border-4 shadow "} style={{ backgroundColor: '#7579E7', borderRadius: '20px', cursor: 'pointer', minHeight: "10vmax", minWidth: "10vmax" }} onClick={() => setlogo("react")}>
                                <Card.Body className="mx-auto d-flex align-items-center" >
                                    <FontAwesomeIcon style={{ fontSize: '5vmax' }} icon={faRobot} className={logo === 'react' ? "text-teal" : "text-white"} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end mt-5">
                        <p className={logo ? "text-teal font-weight-bold display-3" : "text-white font-weight-bold display-3"}>{`----->`}</p>
                    </div>
                </Col>
                <Col className="d-flex h-100 mt-sm-3 pt-sm-3 mt-md-0 pt-md-0 pt-lg-5 mt-lg-5 pt-xl-5 mt-xl-5 flex-column justify-content-center justify-content-md-center justify-content-sm-start" md={12} lg={6} xl={6}>
                    <p className="text-teal"><FontAwesomeIcon icon={faCircle} size="sm" /> Skills </p>
                    <div className={logo === 'laravel' ? '' : 'd-none'} >
                        <h2 className="text-white">Web Development</h2>
                        <p className="text-white">Build a website with the latest technology with my expertise. Experience developing a website with a professional.
                            Some technology stacks that I am an expert on</p>
                        <p className="text-white">Front-End : HTML, CSS, JavaScript, SASS, SCSS, ReactJS, Redux, Bootstrap, MUI, Axios, Ant Design, React Query, jQuery</p>
                        <p className="text-white">Back-End : PHP, Node JS, Laravel, Lumen, REST API</p>
                        <p className="text-white">Others : Nginx, MySQL, Git</p>
                        <div className="text-center">
                            <hr className="text-white" />
                            <h6 className="text-white">Tech Stack</h6>
                        </div>
                        <Row>
                            <Col>
                                <Badge bg="secondary" className="mx-1">HTML</Badge>
                                <Badge bg="secondary" className="mx-1">CSS</Badge>
                                <Badge bg="secondary" className="mx-1">JavaScript</Badge>
                                {/* <Badge bg="secondary" className="mx-1">TypeScript</Badge> */}
                                <Badge bg="secondary" className="mx-1">Sass</Badge>
                                <Badge bg="secondary" className="mx-1">Scss</Badge>
                                <Badge bg="secondary" className="mx-1">Node JS</Badge>
                                <Badge bg="secondary" className="mx-1">PHP</Badge>
                                <Badge bg="secondary" className="mx-1">Git</Badge>
                                <Badge bg="secondary" className="mx-1">MySQL</Badge>
                                <Badge bg="secondary" className="mx-1">ReactJS</Badge>
                                <Badge bg="secondary" className="mx-1">Next.JS</Badge>
                                <Badge bg="secondary" className="mx-1">Redux</Badge>
                                <Badge bg="secondary" className="mx-1">Axios</Badge>
                                <Badge bg="secondary" className="mx-1">Webpack</Badge>
                                <Badge bg="secondary" className="mx-1">REST API</Badge>
                                <Badge bg="secondary" className="mx-1">jQuery</Badge>
                                <Badge bg="secondary" className="mx-1">Bootstrap</Badge>
                                <Badge bg="secondary" className="mx-1">MUI</Badge>
                                <Badge bg="secondary" className="mx-1">Ant Design</Badge>
                                {/* <Badge bg="secondary" className="mx-1">Tailwind</Badge> */}
                                <Badge bg="secondary" className="mx-1">Laravel</Badge>
                                <Badge bg="secondary" className="mx-1">Lumen</Badge>
                                <Badge bg="secondary" className="mx-1">NginX</Badge>
                                {/* <Badge bg="secondary" className="mx-1">React Query</Badge> */}
                            </Col>
                        </Row>
                    </div>
                    <div className={logo === 'lumen' ? '' : 'd-none'} >
                        <h2 className="text-white">Mobile Development</h2>
                        <p className="text-white">Developing an android or IOS mobile application is made easy by using React Native. Give an idea for the application you need, then I will make it with the latest technology using React Native</p>
                        <div className="text-center">
                            <hr className="text-white" />
                            <h6 className="text-white">Tech Stack</h6>
                        </div>
                        <Row>
                            <Col>
                                <Badge bg="secondary" className="mx-1">React Native</Badge>
                                <Badge bg="secondary" className="mx-1">IOS</Badge>
                                <Badge bg="secondary" className="mx-1">Android</Badge>
                                <Badge bg="secondary" className="mx-1">EXPO</Badge>
                            </Col>
                        </Row>
                    </div>
                    <div className={logo === 'react' ? '' : 'd-none'} >
                        <h2 className="text-white">Chatbot Development</h2>
                        <p className="text-white">Making chatbots is one of my skills. By using the Kata.ai platform, making conversations on chatbots can be easily created, besides that chatbots can be directly integrated with several chat channels such as Telegram, Line, Web widget, Whatsapp and many more. The chatbot can also be trained using NL (Natural Language) AI so that it can predict every user question</p>
                        <div className="text-center">
                            <hr className="text-white" />
                            <h6 className="text-white">Tech Stack</h6>
                        </div>
                        <Row>
                            <Col>
                                <Badge bg="secondary" className="mx-1">Kata.ai Platform</Badge>
                                <Badge bg="secondary" className="mx-1">YML</Badge>
                                <Badge bg="secondary" className="mx-1">NL Training</Badge>
                            </Col>
                        </Row>
                    </div>
                </Col>

            </Row >
        </Fade>
    )
}
export default SkillsSection
