import Image from "next/image";
import React from "react";
import { FaBuilding, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";
import PortfolioFooter from "./PortfolioFooter";

function PortfolioResume() {
  return (
    <main className="flex-grow h-fit rounded-2xl bg-white">
      <div className="md:p-12 p-7 flex flex-col gap-4">
        {/* About Me */}
        <div>
          <div className="flex items-center mb-4 gap-4">
            <h2 className="text-2xl md:text-4xl font-bold text-black ">
              Resume
            </h2>
            <div className="w-1/4 h-2 border-b-4 border-primary"></div>
          </div>
        </div>
        {/* End About Me */}
        {/* What I do */}
        <div>
          <div className="flex items-center mb-4 gap-4">
            <h2 className="text-3xl font-semibold text-black ">Experience</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-4 rounded-2xl border-2 border-primary-2-darker shadow-lg">
              <div className="flex flex-col gap-4 p-4">
                <div>
                  <p className="text-slate-500 font-medium text-xs">
                    May 2022 - Dec 2023 (1 year 8 months)
                  </p>
                  <div className="mb-3">
                    <h3 className="text-lg text-primary-2-darker font-medium">
                      ReactJS Developer
                    </h3>
                    <div className="flex items-center gap-2">
                      <FaBuilding />
                      <p>Beyondsoft</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 text-slate-500 text-base gap-2 max-h-15 overflow-auto ">
                    <li>
                      Assignment as a React developer at DBS bank Singapore and
                      successfully developed DBS Internet banking web
                      application in collaboration with overseas developer with
                      React
                    </li>
                    <li>
                      Successfully increased unit test coverage to over 80%
                      using Jest and React Testing Library.
                    </li>
                    <li>
                      Effectively collaborated with the UI/UX team to implement
                      mockups into interactive web applications
                    </li>
                    <li>
                      Actively participated in Agile ceremonies such as sprint
                      planning, daily stand-ups, sprint reviews, and
                      retrospectives, ensuring alignment and swift adaptation to
                      project needs.
                    </li>
                    <li>
                      Took a key role as a Front-End Developer in Agile team,
                      closely collaborating with Business Analysts, Product
                      Owners, QA testers, and Scrum Masters to ensure the
                      delivery of high-quality software solutions following
                      Agile principles.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border-2 border-primary-3-darker shadow-lg">
              <div className="flex flex-col gap-4 p-4">
                <div>
                  <p className="text-slate-500 font-medium text-xs">
                    January 2022 - April 2022 (5 months)
                  </p>
                  <div className="mb-3">
                    <h3 className="text-lg text-primary-3-darker font-medium">
                      Frontend Developer
                    </h3>
                    <div className="flex items-center gap-2">
                      <FaBuilding />
                      <p>Sprint Asia Technology</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 text-slate-500 text-base gap-2 max-h-15 overflow-auto ">
                    <li>
                      Successfully Developed Konnek Multichannel Platform with
                      React
                    </li>
                    <li>
                      Improved web loading speed by 50% using React code
                      splitting technique
                    </li>
                    <li>
                      Integrated RESTful APIs provided by the backend team to
                      fetch and update data, ensuring data accuracy and
                      consistency within the platform
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border-2 border-primary shadow-lg">
              <div className="flex flex-col gap-4 p-4">
                <div>
                  <p className="text-slate-500 font-medium text-xs">
                    February 2020 - December 2021 (1 year 11 months)
                  </p>
                  <div className="mb-3">
                    <h3 className="text-lg text-primary font-medium">
                      Fullstack Developer
                    </h3>
                    <div className="flex items-center gap-2">
                      <FaBuilding />
                      <p>Medlinx Asia Teknologi</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 text-slate-500 text-base gap-2 max-h-15 overflow-auto ">
                    <li>
                      Successfully Developed Tempo, DKT Indonesia, Siloam
                      Hospital and Medlinx Chatbot with Kata.ai Platform. These
                      implementations improved user satisfaction and increased
                      interaction rates, contributing to stronger customer
                      relationships across diverse channels such as Telegram,
                      WhatsApp, and other platforms.
                    </li>
                    <li>
                      Successfully Developed DKT chatbot dashboard with Laravel
                      Framework, MySQL & React. This dashboard significantly
                      supported customer service in managing and organizing
                      customer data effectively, enhancing their ability to
                      respond promptly and provide personalized support from
                      chatbot.
                    </li>
                    <li>
                      Successfully Developed Tempo chatbot dashboard with
                      Laravel Framework, Jquery & MySQL. This dashboard
                      significantly empowered customer service by efficiently
                      managing and controlling chatbot content specifically for
                      the Line platform.
                    </li>
                    <li>
                      Collaborated with business analysts, offering technical
                      advice for application development, ensuring alignment
                      with business goals.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End What I do */}
        <div>
          <div className="flex items-center mb-4 gap-4">
            <h2 className="text-3xl font-semibold text-black">Education</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-4 rounded-2xl border-2 border-teal-500 shadow-lg">
              <div className="flex flex-col gap-4 p-4">
                <div>
                  <p className="text-slate-500 font-medium text-xs">
                    May 2015 - December 2019
                  </p>
                  <div className="mb-3">
                    <h3 className="text-lg text-teal-500 font-medium">
                      Bachelors Of Information Technology
                    </h3>
                    <div className="flex items-center gap-2">
                      <FaGraduationCap />
                      <p>Ibn Khaldun Bogor University</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p>GPA: 3.82</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Menu */}
        <PortfolioFooter />
        {/* End Footer */}
      </div>
    </main>
  );
}

export default PortfolioResume;
