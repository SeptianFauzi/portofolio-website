import Image from 'next/image'
import React from 'react'
import { Badge, Button, Card, Carousel, Col, Container, Form, Modal, Nav, Row } from 'react-bootstrap'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Fade } from 'react-reveal'
import konnekLogin from '../assets/images/konnek-login.png'
import konnekLogo from '../assets/images/konnek-logo.png'
import konnekLGeneralData from '../assets/images/konnek-general-data.png'
import konnekChangePassword from '../assets/images/konnek-change-password.png'
import konnekModalLogout from '../assets/images/konnek-modal-logout.png'
import konnekNewTopic from '../assets/images/konnek-new-topic.png'
import konnekOpen from '../assets/images/konnek-open.png'


import dktLogin from '../assets/images/dkt-login.png'
import dktLogo from '../assets/images/dkt-logo.png'
import dktMasterData from '../assets/images/dkt-master-data.png'
import dktAsm from '../assets/images/dkt-asm.png'
import dktUploadData from '../assets/images/dkt-upload-data.png'


import edkmLogo from '../assets/images/edkm-logo.png'
import edkmLogin from '../assets/images/edkm-login.png'
import edkmDetailPeserta from '../assets/images/edkm-detail-peserta.png'
import edkmPesertaQurban from '../assets/images/edkm-peserta-qurban.png'
import edkmTambahPeserta from '../assets/images/edkm-tambah-peserta.png'

import edkmMobile1 from '../assets/images/edkm-mobile-1.png'
import edkmMobile2 from '../assets/images/edkm-mobile-2.png'
import edkmMobile3 from '../assets/images/edkm-mobile-3.png'

import siloamLogo from '../assets/images/siloam-logo.png'
import medlinxLogo from '../assets/images/medlinx-logo.png'
import tempoLogo from '../assets/images/tempo-logo.png'

import dktChatbot1 from '../assets/images/dkt-chatbot-1.jpg'
import dktChatbot2 from '../assets/images/dkt-chatbot-2.jpg'
import dktChatbot3 from '../assets/images/dkt-chatbot-3.jpg'

import tempoLogin from '../assets/images/tempo-login.png'
import tempoRichMenu from '../assets/images/tempo-richmenu.png'
import tempoCreateRichMenu from '../assets/images/tempo-create-richmenu.png'
import tempoUser from '../assets/images/tempo-user.png'

import dbsLogo from '../assets/images/dbs-logo.png'
const PortofolioSection = () => {
    const [show, setShow] = useState(false)
    const [project, setProject] = useState(false)
    const handleClose = () => {
        setShow(false)

    }
    const handleOpen = (data) => {
        setShow(true)
        setProject(data)
    }
    const handleSelect = (e) => {
        setMenu(e.target.value)
    }

    const myLoader = ({ src, width }) => {
        return `https://septianfauzi.com//${src}?w=${width}`
    }
    const [menu, setMenu] = useState('web')
    return (
        <Row style={{ minHeight: '100vh' }} id="portofolio">
            <Fade>
                <Col md={12} lg={12} xl={12} className="d-flex flex-column mt-5 pt-5">
                    <p className="text-teal"><FontAwesomeIcon icon={faCircle} size="sm" /> Portofolio </p>
                    <h2 className="text-white text-center">My Recent Work</h2>
                    <div className="d-flex justify-content-end align-items-end pb-4 pe-4">
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Col xs={12} sm={12}>
                                <Form.Select aria-label="Default select example" onChange={(e) => handleSelect(e)}>
                                    <option value="web" className="text-primary">Web Development</option>
                                    <option value="mobile" className="text-primary">Mobile Development</option>
                                    <option value="chatbot" className="text-primary">Chatbot Development</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                    </div>
                    {menu === 'web' && (
                        <Row className="pb-5 g-2">
                            <Col xs={11} sm={6} md={6} lg={4} xl={4} xxl={4} className="d-flex mx-auto justify-content-center">
                                <Card className="text-center shadow-lg border-primary rounded">
                                    <Image loader={myLoader}
                                        className="d-block w-100"
                                        src={konnekLogo}
                                        alt="First slide"
                                    />
                                    <Card.Body className="pb-3 mb-0 bg-secondary text-white ">
                                        <Card.Title><h4>Konnek</h4></Card.Title>
                                        <Card.Text>
                                            A Multi-channel platform to integrate multiple chat platform into one dashboard
                                        </Card.Text>
                                        <hr className="text-primary" />
                                        <div className="d-flex justify-content-center">
                                            <Button className="mx-1 text-white" variant="primary" onClick={() => handleOpen('konnek')}>Detail</Button>
                                            <Button className="mx-1 text-white" variant="primary"><a rel="noreferrer" target="_blank" href="https://wekonnek.id">Visit</a></Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col xs={11} sm={6} md={6} lg={4} xl={4} xxl={4} className="d-flex mx-auto mx-sm-0 justify-content-center">
                                <Card className="text-center shadow-lg border-primary rounded">
                                    <Image
                                        loader={myLoader}
                                        className="d-block w-100"
                                        src={dktLogo}
                                        alt="First slide"
                                    />
                                    <Card.Body className="pb-3 mb-0 bg-secondary text-white">
                                        <Card.Title><h4>DKT Dashboard</h4></Card.Title>
                                        <Card.Text>
                                            A dashboard that displaying customer order information from the DKT Indonesia company
                                        </Card.Text>
                                        <hr className="text-primary" />
                                        <div className="d-flex justify-content-center">
                                            <Button className="mx-1 text-white" variant="primary" onClick={() => handleOpen('dkt')}>Detail</Button>
                                            {/* <Button className="mx-1 text-white" variant="primary">Visit</Button> */}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={11} sm={6} md={6} lg={4} xl={4} xxl={4} className="d-flex justify-content-center mx-auto mx-sm-0">
                                <Card className="text-center shadow-lg border-primary rounded">
                                    <Image loader={myLoader}
                                        className="d-block w-100"
                                        src={edkmLogo}
                                        alt="First slide"
                                    />
                                    <Card.Body className="pb-3 mb-0 bg-secondary text-white">
                                        <Card.Title><h4>E-DKM Al-Irfan Dashboard</h4></Card.Title>
                                        <Card.Text>
                                            A dashboard for data management of qurban recipients and zakat (donations)
                                        </Card.Text>
                                        <hr className="text-primary" />
                                        <div className="d-flex justify-content-center">
                                            <Button className="mx-1 text-white" variant="primary" onClick={() => handleOpen('edkm')}>Detail</Button>
                                            <Button className="mx-1 text-white" variant="primary"><a rel="noreferrer" target="_blank" href="https://e-dkm.herokuapp.com">Visit</a></Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={11} sm={6} md={6} lg={4} xl={4} xxl={4} className="d-flex justify-content-center mx-auto mx-sm-0">
                                <Card className="text-center shadow-lg border-primary rounded">
                                    <Image loader={myLoader}
                                        className="d-block w-100"
                                        src={tempoLogo}
                                        alt="First slide"
                                    />
                                    <Card.Body className="pb-3 mb-0 bg-secondary text-white">
                                        <Card.Title><h4>Tara Account Management</h4></Card.Title>
                                        <Card.Text>
                                            A dashboard for data management of Tara Chatbot owned By Tempo.co
                                        </Card.Text>
                                        <hr className="text-primary" />
                                        <div className="d-flex justify-content-center">
                                            <Button className="mx-1 text-white" variant="primary" onClick={() => handleOpen('tempo')}>Detail</Button>
                                            <Button className="mx-1 text-white" variant="primary"><a rel="noreferrer" target="_blank" href="https://tara.tempo.co">Visit</a></Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={11} sm={6} md={6} lg={4} xl={4} xxl={4} className="d-flex justify-content-center mx-auto mx-sm-0">
                                <Card className="text-center shadow-lg border-primary rounded">
                                    <Image loader={myLoader}
                                        className="d-block w-100"
                                        src={dbsLogo}
                                        alt="First slide"
                                    />
                                    <Card.Body className="pb-3 mb-0 bg-secondary text-white">
                                        <Card.Title><h4>DBS Internet Banking</h4></Card.Title>
                                        <Card.Text>
                                            DBS Internet Banking Website Application
                                        </Card.Text>
                                        <hr className="text-primary" />
                                        <div className="d-flex justify-content-center">
                                            {/* <Button className="mx-1 text-white" variant="primary" onClick={() => handleOpen('dbs')}>Detail</Button> */}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )}
                    {menu === 'mobile' && (
                        <Row className="pb-5 g-2">
                            <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className="d-flex justify-content-center">
                                <Card className="text-center shadow-lg border-primary rounded">
                                    <Image loader={myLoader}
                                        className="d-block w-100"
                                        src={edkmLogo}
                                        alt="First slide"
                                    />
                                    <Card.Body className="pb-3 mb-0 bg-secondary text-white">
                                        <Card.Title><h4>E-DKM Android Mobile Application</h4></Card.Title>
                                        <Card.Text>
                                            An android mobile application for the Al-Irfan organization that is used to record recipients of qurban and zakat (donations)
                                        </Card.Text>
                                        <hr className="text-primary" />
                                        <div className="d-flex justify-content-center">
                                            <Button className="mx-1 text-white" variant="primary" onClick={() => handleOpen('edkm-mobile')}>Detail</Button>
                                            {/* <Button className="mx-1 text-white" variant="primary">Visit</Button> */}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )}
                    {menu === 'chatbot' && (
                        <Row className="pb-5 g-2">
                            <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className="d-flex justify-content-center">
                                <Card className="text-center shadow-lg border-primary rounded">
                                    <Image
                                        loader={myLoader}
                                        className="d-block w-100"
                                        src={siloamLogo}
                                        alt="First slide"
                                    />
                                    <Card.Body className="pb-3 mb-0 bg-secondary text-white">
                                        <Card.Title><h4>Silvia</h4></Card.Title>
                                        <Card.Text>
                                            A chatbot for Siloam Hospital
                                        </Card.Text>
                                        <hr className="text-primary" />
                                        <div className="d-flex justify-content-center">
                                            <Button className="mx-1 text-white" variant="primary" onClick={() => handleOpen('chatbot-siloam')}>Detail</Button>
                                            <Button className="mx-1 text-white" variant="primary"><a rel="noreferrer" target="_blank" href="https://www.siloamhospitals.com">Visit</a></Button>
                                            {/* <Button className="mx-1 text-white" variant="primary">Visit</Button> */}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className="d-flex justify-content-center">
                                <Card className="text-center shadow-lg border-primary rounded">
                                    <Image
                                        loader={myLoader}
                                        className="d-block w-100"
                                        src={medlinxLogo}
                                        alt="First slide"
                                    />
                                    <Card.Body className="pb-3 mb-0 bg-secondary text-white">
                                        <Card.Title><h4>Merci</h4></Card.Title>
                                        <Card.Text>
                                            A chatbot for Medlinx Asia Teknologi Company
                                        </Card.Text>
                                        <hr className="text-primary" />
                                        <div className="d-flex justify-content-center">
                                            <Button className="mx-1 text-white" variant="primary" onClick={() => handleOpen('chatbot-medlinx')}>Detail</Button>
                                            <Button className="mx-1 text-white" variant="primary"><a rel="noreferrer" target="_blank" href="https://wa.me/+628111137982?text=hi">Visit</a></Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className="d-flex justify-content-center">
                                <Card className="text-center shadow-lg border-primary rounded">
                                    <Image
                                        loader={myLoader}
                                        className="d-block w-100"
                                        src={dktLogo}
                                        alt="First slide"
                                    />
                                    <Card.Body className="pb-3 mb-0 bg-secondary text-white">
                                        <Card.Title><h4>Nisa</h4></Card.Title>
                                        <Card.Text>
                                            A chatbot for DKT Indonesia Company
                                        </Card.Text>
                                        <hr className="text-primary" />
                                        <div className="d-flex justify-content-center">
                                            <Button className="mx-1 text-white" variant="primary" onClick={() => handleOpen('chatbot-dkt')}>Detail</Button>
                                            <Button className="mx-1 text-white" variant="primary"><a rel="noreferrer" target="_blank" href="https://wa.me/+628111326459?text=hi">Visit</a></Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4} xl={4} xxl={4} className="d-flex justify-content-center">
                                <Card className="text-center shadow-lg border-primary rounded">
                                    <Image
                                        loader={myLoader}
                                        className="d-block w-100"
                                        src={tempoLogo}
                                        alt="First slide"
                                    />
                                    <Card.Body className="pb-3 mb-0 bg-secondary text-white">
                                        <Card.Title><h4>Tara</h4></Card.Title>
                                        <Card.Text>
                                            A chatbot for Tempo.co
                                        </Card.Text>
                                        <hr className="text-primary" />
                                        <div className="d-flex justify-content-center">
                                            <Button className="mx-1 text-white" variant="primary" onClick={() => handleOpen('chatbot-tempo')}>Detail</Button>
                                            <Button className="mx-1 text-white" variant="primary"><a rel="noreferrer" target="_blank" href="https://liff.line.me/1645278921-kWRPP32q/?accountId=tempodotco">Visit</a></Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )}

                    <Modal show={show} onHide={handleClose} keyboard={false} size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        {project === 'konnek' && (
                            <div id="konnek">
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter" className="text-secondary">Konnek</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Carousel variant="dark">
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={konnekLogin}
                                                alt="Slide 1"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={konnekLGeneralData}
                                                alt="Slide 2"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={konnekOpen}
                                                alt="Slide 3"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={konnekChangePassword}
                                                alt="Slide 4"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={konnekModalLogout}
                                                alt="Slide 5"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={konnekNewTopic}
                                                alt="Slide 6"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Modal.Body>
                                <Modal.Footer className="overflow-auto">
                                    <Row>
                                        <h6 className="text-secondary">Project description</h6>
                                        <p>Konnek is a multi-channel platform where you can combine several chat platforms such as whatsapp, telegram, web widget, line into one dashboard. This platform helps agents answer every message sent by a customer through several chat platforms. In addition, this platform can show some visual data such as how many messages are received, how long the agent takes to reply to customers, and so on.
                                            this platform can connect via chatbot by entering some required credentials.
                                            I am working on this project as a front end developer using React JS</p>
                                        {/* <hr className="text-primary" /> */}
                                        <h6 className="text-secondary">Tech Stack</h6>
                                        <Col>
                                            <Badge bg="secondary" className="mx-1">HTML</Badge>
                                            <Badge bg="secondary" className="mx-1">CSS</Badge>
                                            <Badge bg="secondary" className="mx-1">JavaScript</Badge>
                                            <Badge bg="secondary" className="mx-1">Sass</Badge>
                                            <Badge bg="secondary" className="mx-1">Scss</Badge>
                                            <Badge bg="secondary" className="mx-1">Node JS</Badge>
                                            <Badge bg="secondary" className="mx-1">Webpack</Badge>
                                            <Badge bg="secondary" className="mx-1">Git</Badge>
                                            <Badge bg="secondary" className="mx-1">ReactJS</Badge>
                                            <Badge bg="secondary" className="mx-1">Redux</Badge>
                                            <Badge bg="secondary" className="mx-1">Axios</Badge>
                                            <Badge bg="secondary" className="mx-1">REST API</Badge>
                                            <Badge bg="secondary" className="mx-1">React Bootstrap</Badge>
                                            <Badge bg="secondary" className="mx-1">Ant Design</Badge>
                                            <Badge bg="secondary" className="mx-1">NginX</Badge>
                                        </Col>
                                    </Row>
                                </Modal.Footer>
                            </div>)}
                        {project === 'dkt' && (
                            <div id="dkt">
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter" className="text-secondary">DKT Dashboard</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Carousel variant="dark">
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={dktLogin}
                                                alt="Slide 1"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={dktMasterData}
                                                alt="Slide 2"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={dktUploadData}
                                                alt="Slide 3"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={dktAsm}
                                                alt="Slide 4"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Modal.Body>
                                <Modal.Footer className="overflow-auto">
                                    <Row>
                                        <h6 className="text-secondary">Project description</h6>
                                        <p>DKT dashboard is a dashboard of a retail health company in Indonesia. This dashboard displays some data such as customer data, orders, prices, sales, and so on. The data is obtained from the customer interaction process with the chatbot owned by DKT Indonesia company.
                                            Some of the features of this dashboard are uploading products, downloading reports, adding orders, adding customer data, sending messages to sales, downloading reports in excel format and others. I am working on this project as Full Stack Developer using Laravel, React JS, and MySQL</p>
                                        <h6 className="text-secondary">Tech Stack</h6>
                                        <Col>
                                            <Badge bg="secondary" className="mx-1">HTML</Badge>
                                            <Badge bg="secondary" className="mx-1">CSS</Badge>
                                            <Badge bg="secondary" className="mx-1">JavaScript</Badge>
                                            <Badge bg="secondary" className="mx-1">PHP</Badge>
                                            <Badge bg="secondary" className="mx-1">Sass</Badge>
                                            <Badge bg="secondary" className="mx-1">Scss</Badge>
                                            <Badge bg="secondary" className="mx-1">Webpack</Badge>
                                            <Badge bg="secondary" className="mx-1">Git</Badge>
                                            <Badge bg="secondary" className="mx-1">ReactJS</Badge>
                                            <Badge bg="secondary" className="mx-1">Redux</Badge>
                                            <Badge bg="secondary" className="mx-1">Axios</Badge>
                                            <Badge bg="secondary" className="mx-1">REST API</Badge>
                                            <Badge bg="secondary" className="mx-1">React Bootstrap</Badge>
                                            <Badge bg="secondary" className="mx-1">Laravel</Badge>
                                            <Badge bg="secondary" className="mx-1">MySQL</Badge>
                                            <Badge bg="secondary" className="mx-1">Apache</Badge>
                                        </Col>
                                    </Row>
                                </Modal.Footer>
                            </div>
                        )}
                        {project === 'edkm' && (
                            <div id="edkm">
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter" className="text-secondary">E-DKM Al-Irfan Dashboard</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Carousel variant="dark">
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={edkmLogin}
                                                alt="Slide 1"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={edkmDetailPeserta}
                                                alt="Slide 2"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={edkmPesertaQurban}
                                                alt="Slide 3"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={edkmTambahPeserta}
                                                alt="Slide 4"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Modal.Body>
                                <Modal.Footer className="overflow-auto">
                                    <Row>
                                        <h6 className="text-secondary">Project description</h6>
                                        <p>E-DKM dashboard is a data management system for Sirnasari Bogor residents that is used in the EDKM Android mobile application. This website stores data on qurban recipients, citizen data, zakat recipients and other services owned by the Al Irfan organization. Some of the features of this dashboard are create, read, update, and delete citizen data, qurban recipients, zakat (donations), and download data in csv format. I am working on this project as Full Stack Developer using Laravel, React JS, and PostgreSQL</p>
                                        <h6 className="text-secondary">Tech Stack</h6>
                                        <Col>
                                            <Badge bg="secondary" className="mx-1">HTML</Badge>
                                            <Badge bg="secondary" className="mx-1">CSS</Badge>
                                            <Badge bg="secondary" className="mx-1">JavaScript</Badge>
                                            <Badge bg="secondary" className="mx-1">PHP</Badge>
                                            <Badge bg="secondary" className="mx-1">Sass</Badge>
                                            <Badge bg="secondary" className="mx-1">Scss</Badge>
                                            <Badge bg="secondary" className="mx-1">Webpack</Badge>
                                            <Badge bg="secondary" className="mx-1">Git</Badge>
                                            <Badge bg="secondary" className="mx-1">ReactJS</Badge>
                                            <Badge bg="secondary" className="mx-1">Redux Toolkit</Badge>
                                            <Badge bg="secondary" className="mx-1">Axios</Badge>
                                            <Badge bg="secondary" className="mx-1">REST API</Badge>
                                            <Badge bg="secondary" className="mx-1">MUI</Badge>
                                            <Badge bg="secondary" className="mx-1">Laravel</Badge>
                                            <Badge bg="secondary" className="mx-1">PostgreSQL</Badge>
                                            <Badge bg="secondary" className="mx-1">Heroku</Badge>
                                        </Col>
                                    </Row>
                                </Modal.Footer>
                            </div>
                        )}
                        {project === 'dbs' && (
                            <div id="dbs">
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter" className="text-secondary">Tara Account Management</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Carousel variant="dark">
                                        <Carousel.Item>
                                            <Image
                                                loader={myLoader}
                                                className="d-block w-100"
                                                src={dbsLogo}
                                                alt="Slide 1"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Modal.Body>
                                <Modal.Footer className="overflow-auto">
                                    <Row>
                                        <h6 className="text-secondary">Project description</h6>
                                        <p>Tara Account Management is a dashboard for data management on the Tara chatbot owned by Tempo.co. This dashboard has several features, one of which is creating a Line richmenu and doing pushes based on the type of subscription of a tempo.co customer and a certain time, in addition to displaying news content created by users which will be selected by a Tempo.co agent. This website is made using PHP, Laravel, MySQL and jQuery</p>
                                        <h6 className="text-secondary">Tech Stack</h6>
                                        <Col>
                                            <Badge bg="secondary" className="mx-1">HTML</Badge>
                                            <Badge bg="secondary" className="mx-1">CSS</Badge>
                                            <Badge bg="secondary" className="mx-1">JavaScript</Badge>
                                            <Badge bg="secondary" className="mx-1">PHP</Badge>
                                            <Badge bg="secondary" className="mx-1">Sass</Badge>
                                            <Badge bg="secondary" className="mx-1">Scss</Badge>
                                            <Badge bg="secondary" className="mx-1">Webpack</Badge>
                                            <Badge bg="secondary" className="mx-1">Git</Badge>
                                            <Badge bg="secondary" className="mx-1">ReactJS</Badge>
                                            <Badge bg="secondary" className="mx-1">Redux Toolkit</Badge>
                                            <Badge bg="secondary" className="mx-1">Axios</Badge>
                                            <Badge bg="secondary" className="mx-1">REST API</Badge>
                                            <Badge bg="secondary" className="mx-1">MUI</Badge>
                                            <Badge bg="secondary" className="mx-1">Laravel</Badge>
                                            <Badge bg="secondary" className="mx-1">PostgreSQL</Badge>
                                            <Badge bg="secondary" className="mx-1">Heroku</Badge>
                                        </Col>
                                    </Row>
                                </Modal.Footer>
                            </div>
                        )}
                        {project === 'tempo' && (
                            <div id="tempo">
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter" className="text-secondary">Tara Account Management</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Carousel variant="dark">
                                        <Carousel.Item>
                                            <Image
                                                loader={myLoader}
                                                className="d-block w-100"
                                                src={tempoLogin}
                                                alt="Slide 1"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image
                                                loader={myLoader}
                                                className="d-block w-100"
                                                src={tempoRichMenu}
                                                alt="Slide 2"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image
                                                loader={myLoader}
                                                className="d-block w-100"
                                                src={tempoCreateRichMenu}
                                                alt="Slide 3"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image
                                                loader={myLoader}
                                                className="d-block w-100"
                                                src={tempoUser}
                                                alt="Slide 4"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Modal.Body>
                                <Modal.Footer className="overflow-auto">
                                    <Row>
                                        <h6 className="text-secondary">Project description</h6>
                                        <p>Tara Account Management is a dashboard for data management on the Tara chatbot owned by Tempo.co. This dashboard has several features, one of which is creating a Line richmenu and doing pushes based on the type of subscription of a tempo.co customer and a certain time, in addition to displaying news content created by users which will be selected by a Tempo.co agent. This website is made using PHP, Laravel, MySQL and jQuery</p>
                                        <h6 className="text-secondary">Tech Stack</h6>
                                        <Col>
                                            <Badge bg="secondary" className="mx-1">HTML</Badge>
                                            <Badge bg="secondary" className="mx-1">CSS</Badge>
                                            <Badge bg="secondary" className="mx-1">JavaScript</Badge>
                                            <Badge bg="secondary" className="mx-1">PHP</Badge>
                                            <Badge bg="secondary" className="mx-1">Sass</Badge>
                                            <Badge bg="secondary" className="mx-1">Scss</Badge>
                                            <Badge bg="secondary" className="mx-1">Webpack</Badge>
                                            <Badge bg="secondary" className="mx-1">Git</Badge>
                                            <Badge bg="secondary" className="mx-1">ReactJS</Badge>
                                            <Badge bg="secondary" className="mx-1">Redux Toolkit</Badge>
                                            <Badge bg="secondary" className="mx-1">Axios</Badge>
                                            <Badge bg="secondary" className="mx-1">REST API</Badge>
                                            <Badge bg="secondary" className="mx-1">MUI</Badge>
                                            <Badge bg="secondary" className="mx-1">Laravel</Badge>
                                            <Badge bg="secondary" className="mx-1">PostgreSQL</Badge>
                                            <Badge bg="secondary" className="mx-1">Heroku</Badge>
                                        </Col>
                                    </Row>
                                </Modal.Footer>
                            </div>
                        )}
                        {project === 'edkm-mobile' && (
                            <div id="edkm-mobile">
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter" className="text-secondary">E-DKM Android Mobile Application</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Carousel variant="dark">
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={edkmMobile1}
                                                alt="Slide 1"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={edkmMobile2}
                                                alt="Slide 2"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <Image loader={myLoader}
                                                className="d-block w-100"
                                                src={edkmMobile3}
                                                alt="Slide 3"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Modal.Body>
                                <Modal.Footer className="overflow-auto">
                                    <Row>
                                        <h6 className="text-secondary">Project description</h6>
                                        <p>E-DKM Android Mobile Application is an application to scan the recipients of qurban and zakat (donations) in the Sirna Sari village, Bogor, West Java, Indonesia. Each recipient of the service is given a card which will later be used for the identity of the recipient of the service owned by the Al-irfan organization. This card will be scanned if the recipient has received the service. Some of the features application are scanning cards for recipients of zakat (donations) and qurban, displaying a list of service recipients. This app is connected with EDKM Dashboard. This app is made using React Native</p>
                                        <h6 className="text-secondary">Tech Stack</h6>
                                        <Col>
                                            <Badge bg="secondary" className="mx-1">React Native</Badge>
                                            <Badge bg="secondary" className="mx-1">Android</Badge>
                                            <Badge bg="secondary" className="mx-1">REST API</Badge>
                                            <Badge bg="secondary" className="mx-1">Expo</Badge>
                                        </Col>
                                    </Row>
                                </Modal.Footer>
                            </div>
                        )}
                        {project === 'chatbot-siloam' && (
                            <div id="chatbot-siloam">
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter" className="text-secondary">Silvia</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="d-flex justify-content-center">
                                        <video controls height="400" width="300" muted>
                                            <source src="/silvia-demo.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="overflow-auto">
                                    <Row>
                                        <h6 className="text-secondary">Project description</h6>
                                        <p>Silvia is the name of the chatbot owned by Siloam Hospitals. This chatbot can answer various questions from users such as FAQs, search for doctor's schedules, information about Siloam Hospitals, Siloam Hospital Doctors, and others. This chatbot was created using the kata.ai platform</p>
                                        <h6 className="text-secondary">Tech Stack</h6>
                                        <Col>
                                            <Badge bg="secondary" className="mx-1">Kata.ai Platform</Badge>
                                            <Badge bg="secondary" className="mx-1">YML</Badge>
                                            <Badge bg="secondary" className="mx-1">Natural Language</Badge>
                                            <Badge bg="secondary" className="mx-1">Web Widget</Badge>
                                        </Col>
                                    </Row>
                                </Modal.Footer>
                            </div>
                        )}
                        {project === 'chatbot-medlinx' && (
                            <div id="chatbot-medlinx">
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter" className="text-secondary">Merci</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="d-flex justify-content-center">
                                        <video controls height="400" width="300" muted>
                                            <source src="/merci-demo.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="overflow-auto">
                                    <Row>
                                        <h6 className="text-secondary">Project description</h6>
                                        <p>A chatbot owned by the technology company Medlinx Asia. This chatbot can run on the WhatsApp platform. some questions from users regarding FAQs, Medlinx information, covid 19 screening can be answered by this chatbot. This chatbot also uses Natural Language (NL) technology to classify the types of user questions. This chatbot is built using the kata.ai platform.</p>
                                        <h6 className="text-secondary">Tech Stack</h6>
                                        <Col>
                                            <Badge bg="secondary" className="mx-1">Kata.ai Platform</Badge>
                                            <Badge bg="secondary" className="mx-1">YML</Badge>
                                            <Badge bg="secondary" className="mx-1">Natural Language</Badge>
                                            <Badge bg="secondary" className="mx-1">WhatsApp</Badge>
                                        </Col>
                                    </Row>
                                </Modal.Footer>
                            </div>
                        )}
                        {project === 'chatbot-dkt' && (
                            <div id="chatbot-dkt">
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter" className="text-secondary">Nisa</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Carousel variant="dark">
                                        <Carousel.Item>
                                            <div className="d-flex justify-content-center">
                                                <Image
                                                    loader={myLoader}
                                                    className="d-block w-100 text-center"
                                                    src={dktChatbot1}
                                                    alt="Slide 1"
                                                    width="250"
                                                    height="400"
                                                />
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className="d-flex justify-content-center">
                                                <Image
                                                    loader={myLoader}
                                                    className="d-block w-100"
                                                    src={dktChatbot2}
                                                    alt="Slide 2"
                                                    width="250"
                                                    height="400"
                                                />
                                            </div>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className="d-flex justify-content-center">
                                                <Image
                                                    loader={myLoader}
                                                    className="d-block w-100"
                                                    src={dktChatbot3}
                                                    alt="Slide 3"
                                                    width="250"
                                                    height="400"
                                                />
                                            </div>
                                        </Carousel.Item>
                                    </Carousel>
                                </Modal.Body>
                                <Modal.Footer className="overflow-auto">
                                    <Row>
                                        <h6 className="text-secondary">Project description</h6>
                                        <p>Nisa is the name of the DKT Indonesia chatbot. This chatbot can answer various user questions, make orders, consult, and much more. This chatbot is connected to the DKT dashboard so that any information sent by the user will be stored on the DKT Dashboard. This chatbot is built using the Kata.ai Platform</p>
                                        <h6 className="text-secondary">Tech Stack</h6>
                                        <Col>
                                            <Badge bg="secondary" className="mx-1">Kata.ai Platform</Badge>
                                            <Badge bg="secondary" className="mx-1">YML</Badge>
                                            <Badge bg="secondary" className="mx-1">Natural Language</Badge>
                                            <Badge bg="secondary" className="mx-1">WhatsApp</Badge>
                                        </Col>
                                    </Row>
                                </Modal.Footer>
                            </div>
                        )}
                        {project === 'chatbot-tempo' && (
                            <div id="chatbot-tempo">
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter" className="text-secondary">Tara</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="d-flex justify-content-center">
                                        <video controls height="400" width="300" muted>
                                            <source src="/tara-demo.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="overflow-auto">
                                    <Row>
                                        <h6 className="text-secondary">Project description</h6>
                                        <p>Tara is a chatbot for Tempo.co. one of the most trusted popular news sites in Indonesia. Tara has several features including news search, tempo.co information, newspaper and magazine searches for subscription users, popular news, user generate content, and many more. Tara is built using PHP from the Line library.</p>
                                        <h6 className="text-secondary">Tech Stack</h6>
                                        <Col>
                                            <Badge bg="secondary" className="mx-1">PHP</Badge>
                                            <Badge bg="secondary" className="mx-1">Natural Language</Badge>
                                            <Badge bg="secondary" className="mx-1">Line</Badge>
                                        </Col>
                                    </Row>
                                </Modal.Footer>
                            </div>
                        )}
                    </Modal>
                </Col>
            </Fade>


        </Row >
    )
}

export default PortofolioSection
