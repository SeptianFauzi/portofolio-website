"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

import dktLogo from "../../../assets/images/dkt-logo.png";
import dktAsm from "../../../assets/images/dkt-asm.png";
import dktLogin from "../../../assets/images/dkt-login.png";
import dktMasterData from "../../../assets/images/dkt-master-data.png";
import dktUploadData from "../../../assets/images/dkt-upload-data.png";
import dktChatbot1 from "../../../assets/images/dkt-chatbot-1.jpg";
import dktChatbot2 from "../../../assets/images/dkt-chatbot-2.jpg";
import dktChatbot3 from "../../../assets/images/dkt-chatbot-3.jpg";

import konnekLogo from "../../../assets/images/konnek-logo.png";
import tempoLogo from "../../../assets/images/tempo-logo.png";
import tempoLogin from "../../../assets/images/tempo-login.png";
import tempoRichMenu from "../../../assets/images/tempo-richmenu.png";
import tempoCreateRichMenu from "../../../assets/images/tempo-create-richmenu.png";
import tempoUser from "../../../assets/images/tempo-user.png";

import konnekLGeneralData from "../../../assets/images/konnek-general-data.png";
import konnekChangePassword from "../../../assets/images/konnek-change-password.png";
import konnekModalLogout from "../../../assets/images/konnek-modal-logout.png";
import konnekNewTopic from "../../../assets/images/konnek-new-topic.png";
import konnekOpen from "../../../assets/images/konnek-open.png";
import konnekLogin from "../../../assets/images/konnek-login.png";
import PortfolioFooter from "./PortfolioFooter";
import dbsLogo from "../../../assets/images/dbs-logo.png";

import edkmLogo2 from "../../../assets/images/edkm-logo2.png";
import edkmDetailPeserta from "../../../assets/images/edkm-detail-peserta.png";
import edkmLogin from "../../../assets/images/edkm-login.png";
import edkmPesertaQurban from "../../../assets/images/edkm-peserta-qurban.png";
import edkmTambahPeserta from "../../../assets/images/edkm-tambah-peserta.png";

import edkmMobile1 from "../../../assets/images/edkm-mobile-1.png";
import edkmMobile2 from "../../../assets/images/edkm-mobile-2.png";
import edkmMobile3 from "../../../assets/images/edkm-mobile-3.png";

import medlinxLogo from "../../../assets/images/medlinx-logo.png";

import siloamLogo from "../../../assets/images/siloam-logo.png";
import { FaGlobe, FaMobile, FaRobot } from "react-icons/fa";
import Modal from "./Modal";
import { IModalContent } from "../../interfaces/modal";
import { IProjectList, ProjectCategory } from "../../interfaces/projects";
import { motion } from "framer-motion";

function PortfolioProject() {
  const projectList: IProjectList[] = [
    {
      id: 1,
      title: "DKT Indonesia Order Dashboard",
      category: ProjectCategory.Web,
      image: dktLogo,
      imageList: [dktLogin, dktMasterData, dktAsm, dktUploadData],
      techStack:
        "HTML, CSS, JavaScript, Sass, Scss, Node JS, Webpack, Git, ReactJS, Redux, Axios, REST API, React Bootstrap, MySQL, NginX",
      client: "DKT Indonesia",
      description:
        "DKT dashboard is a dashboard of a retail health company in Indonesia. This dashboard displays some data such as customer data, orders, prices, sales, and so on. The data is obtained from the customer interaction process with the chatbot owned by DKT Indonesia company. Some of the features of this dashboard are uploading products, downloading reports, adding orders, adding customer data, sending messages to sales, downloading reports in excel format and others. I am working on this project as Full Stack Developer using Laravel, React JS, and MySQL",
    },
    {
      id: 2,
      title: "Konnek MultiChannel Platform",
      category: ProjectCategory.Web,
      image: konnekLogo,
      imageList: [
        konnekLGeneralData,
        konnekChangePassword,
        konnekModalLogout,
        konnekNewTopic,
        konnekOpen,
        konnekLogin,
      ],
      techStack:
        "HTML, CSS, JavaScript, Sass, Scss, Node JS, Webpack, Git, ReactJS, Redux, Axios, REST API, React Bootstrap, Ant Design, NginX",
      client: "Sprint Asia Technology",
      description:
        "Konnek is a multi-channel platform where you can combine several chat platforms such as whatsapp, telegram, web widget, line into one dashboard. This platform helps agents answer every message sent by a customer through several chat platforms. In addition, this platform can show some visual data such as how many messages are received, how long the agent takes to reply to customers, and so on. this platform can connect via chatbot by entering some required credentials. I am working on this project as a front end developer using React JS",
    },
    {
      id: 3,
      title: "Tempo.co Tara Account Management ",
      category: ProjectCategory.Web,
      image: tempoLogo,
      imageList: [tempoLogin, tempoRichMenu, tempoCreateRichMenu, tempoUser],
      techStack:
        "HTML, CSS, JavaScript, JQuery, PHP, Sass, Scss, Webpack, Git, Axios, REST API, Bootstrap, Laravel, MySQL",
      client: "Tempo.co",
      description:
        "Tara Account Management is a dashboard for data management on the Tara chatbot owned by Tempo.co. This dashboard has several features, one of which is creating a Line richmenu and doing pushes based on the type of subscription of a tempo.co customer and a certain time, in addition to displaying news content created by users which will be selected by a Tempo.co agent. This website is made using PHP, Laravel, MySQL and jQuery",
    },
    {
      id: 4,
      title: "E-DKM Al-Irfan Dashboard",
      category: ProjectCategory.Web,
      image: edkmLogo2,
      imageList: [
        edkmLogin,
        edkmDetailPeserta,
        edkmPesertaQurban,
        edkmTambahPeserta,
      ],
      techStack:
        "HTML, CSS, JavaScript, PHP, Sass, Scss, Webpack, Git, ReactJS, Redux Toolkit, Axios, REST API, MUI, Laravel, PostgreSQL",
      client: "DKM Al-Irfan",
      description:
        "E-DKM dashboard is a data management system for Sirnasari Bogor residents that is used in the EDKM Android mobile application. This website stores data on qurban recipients, citizen data, zakat recipients and other services owned by the Al Irfan organization. Some of the features of this dashboard are create, read, update, and delete citizen data, qurban recipients, zakat (donations), and download data in csv format. I am working on this project as Full Stack Developer using Laravel, React JS, and PostgreSQL",
    },
    {
      id: 5,
      title: "DBS Internet Banking Application",
      category: ProjectCategory.Web,
      image: dbsLogo,
      imageList: [],
      techStack:
        "HTML, CSS, Typescript, Styled Component, React Testing Library, ReactJS, Redux-Saga, Axios, Eslint, React Hook Form, RESTful API, JEST",
      client: "DBS Bank",
      description: `DBS Internet Banking Application is the newest version of internet banking web application owned by DBS bank. This project has many functions such as currency transfers, managing customer data, currency conversion, investments, and more. I’m part of the ReactJS Development team in this project my responsibilities for this project are :
        Assignment as a React developer at DBS bank Singapore and successfully developed DBS Internet banking web application in collaboration with overseas developer with React, Successfully increased unit test coverage to over 80% using Jest and React Testing Library, Effectively collaborated with the UI/UX team to implement mockups into interactive web applications, Actively participated in Agile ceremonies such as sprint planning, daily stand-ups, sprint reviews, and retrospectives, ensuring alignment and swift adaptation to project needs, Took a key role as a Front-End Developer in Agile team, closely collaborating with Business Analysts, Product Owners, QA testers, and Scrum Masters to ensure the delivery of high-quality software solutions following Agile principles, Integrated RESTful APIs provided by the backend team to ensure data is updated accurately.`,
    },
    {
      id: 6,
      title: "E-DKM Android Mobile Application",
      category: ProjectCategory.MobileApp,
      image: edkmLogo2,
      imageList: [edkmMobile1, edkmMobile2, edkmMobile3],
      techStack: "React Native, Android, Javascript, Axios, REST API",
      client: "DKM Al-Irfan",
      description:
        "E-DKM Android Mobile Application is an application to scan the recipients of qurban and zakat (donations) in the Sirna Sari village, Bogor, West Java, Indonesia. Each recipient of the service is given a card which will later be used for the identity of the recipient of the service owned by the Al-irfan organization. This card will be scanned if the recipient has received the service. Some of the features application are scanning cards for recipients of zakat (donations) and qurban, displaying a list of service recipients. This app is connected with EDKM Dashboard. This app is made using React Native",
    },
    {
      id: 7,
      title: "Silvia Siloam Hospital Chatbot",
      category: ProjectCategory.CHATBOT,
      image: siloamLogo,
      imageList: [],
      videoLink: "/silvia-demo.mp4",
      techStack: "Kata.ai Platform, YML, Natural Language, Web Widget",
      client: "Siloam Hospital",
      description:
        "Silvia is the name of the chatbot owned by Siloam Hospitals. This chatbot can answer various questions from users such as FAQs, search for doctor's schedules, information about Siloam Hospitals, Siloam Hospital Doctors, and others. This chatbot was created using the kata.ai platform",
    },
    {
      id: 8,
      title: "Merci Medlinx Chatbot",
      category: ProjectCategory.CHATBOT,
      image: medlinxLogo,
      imageList: [],
      videoLink: "/merci-demo.mp4",
      techStack: "Kata.ai Platform, YML, Natural Language, Web Widget",
      client: "Medlinx Asia Teknologi",
      description:
        "A chatbot owned by the technology company Medlinx Asia. This chatbot can run on the WhatsApp platform. some questions from users regarding FAQs, Medlinx information, covid 19 screening can be answered by this chatbot. This chatbot also uses Natural Language (NL) technology to classify the types of user questions. This chatbot is built using the kata.ai platform.",
    },
    {
      id: 9,
      title: "Nisa DKT Indonesia Chatbot",
      category: ProjectCategory.CHATBOT,
      image: dktLogo,
      imageList: [dktChatbot1, dktChatbot2, dktChatbot3],
      techStack: "Kata.ai Platform, YML, Natural Language, Web Widget",
      client: "DKT Indonesia",
      description:
        "Nisa is the name of the DKT Indonesia chatbot. This chatbot can answer various user questions, make orders, consult, and much more. This chatbot is connected to the DKT dashboard so that any information sent by the user will be stored on the DKT Dashboard. This chatbot is built using the Kata.ai Platform",
    },
    {
      id: 8,
      title: "Tara Tempo.co Chatbot",
      category: ProjectCategory.CHATBOT,
      image: tempoLogo,
      imageList: [],
      videoLink: "/tara-demo.mp4",
      techStack: "Kata.ai Platform, YML, Natural Language, Web Widget",
      client: "Tempo.co",
      description:
        "Tara is a chatbot for Tempo.co. one of the most trusted popular news sites in Indonesia. Tara has several features including news search, tempo.co information, newspaper and magazine searches for subscription users, popular news, user generate content, and many more. Tara is built using PHP from the Line library.",
    },
  ];

  const [category, setCategory] = useState<string>("");

  const [modalContent, setModalContent] = useState<IModalContent>(
    {} as IModalContent
  );
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModalBox = () => {
    setModalIsOpen(true);
  };
  const closeModalBox = () => {
    setModalIsOpen(false);
  };
  return (
    <main className="flex-grow h-fit rounded-2xl bg-white">
      <div className="md:p-12 p-7 flex flex-col gap-4">
        <div>
          <div className="flex items-center mb-4 gap-4">
            <h2 className="text-2xl md:text-4xl font-bold text-black ">
              Project
            </h2>
            <div className="w-1/4 h-2 border-b-4 border-primary"></div>
          </div>
        </div>
        <div className="flex justify-end">
          <ul className="flex gap-4 cursor-pointer">
            <li
              className={`${
                category === "" &&
                "text-primary transition-colors duration-200 ease-in"
              } `}
              onClick={() => setCategory("")}
            >
              All
            </li>
            <li
              className={`${
                category === ProjectCategory.Web &&
                "text-primary transition-colors duration-200 ease-in"
              } `}
              onClick={() => setCategory(ProjectCategory.Web)}
            >
              Web
            </li>
            <li
              className={`${
                category === ProjectCategory.MobileApp &&
                "text-primary transition-colors duration-200 ease-in"
              } `}
              onClick={() => setCategory(ProjectCategory.MobileApp)}
            >
              Mobile App
            </li>
            <li
              className={`${
                category === ProjectCategory.CHATBOT &&
                "text-primary transition-colors duration-200 ease-in"
              } `}
              onClick={() => setCategory(ProjectCategory.CHATBOT)}
            >
              Chatbot
            </li>
          </ul>
        </div>
        <motion.div className="grid 2xl:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          {projectList
            .filter(
              (project) => project.category === category || category === ""
            )
            .map((project, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                key={index}
                className={` ${
                  project.category === ProjectCategory.Web
                    ? "bg-portfolio-color-02"
                    : project.category === ProjectCategory.CHATBOT
                    ? "bg-portfolio-color-01"
                    : project.category === ProjectCategory.MobileApp
                    ? "bg-portfolio-color-04"
                    : ""
                } flex flex-col gap-4 rounded-2xl shadow-lg group`}
              >
                <div className="flex flex-col gap-4 p-4">
                  <div className=" bg-white rounded-2xl flex justify-center items-center h-48">
                    <Image
                      onClick={() => {
                        openModalBox();
                        setModalContent(project);
                      }}
                      src={project.image.src}
                      className="cursor-pointer transition duration-200 ease-in-out p-3 group-hover:scale-105 max-w-60 max-h-48 object-contain"
                      alt="Picture of the author"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      {project.category === ProjectCategory.Web ? (
                        <FaGlobe className="text-slate-700" />
                      ) : project.category === ProjectCategory.CHATBOT ? (
                        <FaRobot className="text-slate-700" />
                      ) : project.category === ProjectCategory.MobileApp ? (
                        <FaMobile className="text-slate-700" />
                      ) : (
                        ""
                      )}

                      <p className=" text-slate-700 text-xs">
                        {project.category}
                      </p>
                    </div>
                    <p
                      className="text-base text-white cursor-pointer hover:text-primary-2-darker"
                      onClick={() => {
                        openModalBox();
                        setModalContent(project);
                      }}
                    >
                      {project.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
        {/* Footer Menu */}
        <PortfolioFooter />
        {/* End Footer */}
        <Modal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          content={modalContent}
        />
      </div>
    </main>
  );
}

export default PortfolioProject;
