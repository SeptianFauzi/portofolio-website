import Image from "next/image";
import React from "react";
import { FaCode, FaMobileAlt } from "react-icons/fa";

import javascriptLogo from "../../../assets/images/javascript-logo.png";
import typescriptLogo from "../../../assets/images/typescript-logo.png";
import htmlLogo from "../../../assets/images/html-logo.png";
import cssLogo from "../../../assets/images/css-logo.png";
import reactLogo from "../../../assets/images/react-logo.png";
import bootstrapLogo from "../../../assets/images/bootstrap-logo.png";
import babelLogo from "../../../assets/images/babel-logo.png";
import antDesignLogo from "../../../assets/images/ant-design-logo.png";
import axiosLogo from "../../../assets/images/axios-logo.png";
import eslintLogo from "../../../assets/images/eslint-logo.png";
import styledComponentsLogo from "../../../assets/images/styled-components-logo.png";
import tailwindLogo from "../../../assets/images/tailwind-logo.png";
import nextjsLogo from "../../../assets/images/nextjs-logo.png";
import nodejsLogo from "../../../assets/images/nodejs-logo.png";
import gitLogo from "../../../assets/images/git-logo.png";
import jestLogo from "../../../assets/images/jest-logo.png";
import jqueryLogo from "../../../assets/images/jquery-logo.png";
import laravelLogo from "../../../assets/images/laravel-logo.png";
import materialUILogo from "../../../assets/images/material-ui-logo.png";
import mysqlLogo from "../../../assets/images/mysql-logo.png";
import phpLogo from "../../../assets/images/php-logo.png";
import reacthookformLogo from "../../../assets/images/react-hook-form-logo.png";
import reduxLogo from "../../../assets/images/redux-logo.png";
import reactNativeLogo from "../../../assets/images/react-native-logo.png";
import reactTestingLibraryLogo from "../../../assets/images/react-testing-library-logo.png";
import restfulAPILogo from "../../../assets/images/restful-api-logo.png";
import sassLogo from "../../../assets/images/sass-logo.png";
import webpackLogo from "../../../assets/images/webpack-logo.png";
import PortfolioFooter from "./PortfolioFooter";

function PortfolioAbout() {
  const techStackList = [
    {
      name: "Javascript",
      logo: javascriptLogo,
    },
    {
      name: "Typescript",
      logo: typescriptLogo,
    },
    {
      name: "HTML",
      logo: htmlLogo,
    },
    {
      name: "CSS",
      logo: cssLogo,
    },
    {
      name: "Bootstrap",
      logo: bootstrapLogo,
    },
    {
      name: "Ant Design",
      logo: antDesignLogo,
    },
    {
      name: "Tailwind CSS",
      logo: tailwindLogo,
    },
    {
      name: "Material UI",
      logo: materialUILogo,
    },
    {
      name: "Styled Components",
      logo: styledComponentsLogo,
    },
    {
      name: "React Testing Library",
      logo: reactTestingLibraryLogo,
    },
    {
      name: "React JS",
      logo: reactLogo,
    },
    {
      name: "Redux",
      logo: reduxLogo,
    },
    {
      name: "SASS",
      logo: sassLogo,
    },
    {
      name: "Next.js",
      logo: nextjsLogo,
    },
    {
      name: "Babel",
      logo: babelLogo,
    },
    {
      name: "Axios",
      logo: axiosLogo,
    },
    {
      name: "Eslint",
      logo: eslintLogo,
    },
    {
      name: "NodeJS",
      logo: nodejsLogo,
    },
    {
      name: "Git",
      logo: gitLogo,
    },
    {
      name: "Jest",
      logo: jestLogo,
    },
    {
      name: "JQuery",
      logo: jqueryLogo,
    },
    {
      name: "PHP",
      logo: phpLogo,
    },
    {
      name: "Laravel",
      logo: laravelLogo,
    },
    {
      name: "MySQL",
      logo: mysqlLogo,
    },
    {
      name: "React Native",
      logo: reactNativeLogo,
    },
    {
      name: "React Hook Form",
      logo: reacthookformLogo,
    },
    {
      name: "RESTful API",
      logo: restfulAPILogo,
    },
    {
      name: "Webpack",
      logo: webpackLogo,
    },
  ];
  return (
    <main className="flex-grow h-fit rounded-2xl bg-white">
      <div className="md:p-12 p-7 flex flex-col gap-4">
        {/* About Me */}
        <div>
          <div className="flex items-center mb-4 gap-4">
            <h2 className="text-2xl md:text-4xl font-bold text-black ">
              About Me
            </h2>
            <div className="w-1/4 h-2 border-b-4 border-primary"></div>
          </div>
          <p className="text-base md:text-lg mb-4 text-slate-500">
            Greetings, I'm Septian Fauzi. I'm deeply curious about technology
            development, particularly when it comes to websites. I have over 3
            years of experience in website development. Some of the technologies
            I frequently use include HTML, CSS, Javascript, Typescript, ReactJS,
            Jest, React Testing Library, Styled Component, Bootstrap, PHP, REST
            API Axios, Redux, Git, and many others.
          </p>
          <p className="text-base md:text-lg text-slate-500 mb-4">
            I am very happy if I can collaborate with everyone to develop and
            build projects that are useful for many people. If you're seeking a
            partner to help build a website, please don't hesitate to reach out
            to me to build your awasome project.
          </p>
          <p className="text-md md:text-xl text-slate-500 font-semibold">
            "Build Your Idea With My Code"
          </p>
        </div>
        {/* End About Me */}
        {/* What I do */}
        <div>
          <div className="flex items-center mb-4 gap-4">
            <h2 className="text-3xl font-semibold text-black ">What I Do!</h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-4 rounded-2xl border-2 border-primary-2-darker shadow-lg">
              <div className="flex flex-col justify-center text-center items-center gap-4 p-4">
                <FaCode className="text-3xl text-primary-2-darker" />
                <div>
                  <h3 className="text-lg text-primary-2-darker font-medium mb-2">
                    Web Development
                  </h3>
                  <p className="text-slate-500">
                    I'm skilled at building modern websites using the latest
                    technology. With my experience, I'll create a professional
                    website that suits your needs perfectly.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border-2 border-primary-3-darker shadow-lg">
              <div className="flex flex-col text-center items-center gap-4 p-4">
                <FaMobileAlt className="text-3xl text-primary-3-darker" />
                <div>
                  <h3 className="text-lg text-primary-3-darker font-medium mb-2">
                    Mobile Development
                  </h3>
                  <p className="text-slate-500">
                    Building mobile apps for Android or iOS is simple with React
                    Native. Tell me your app idea, and I'll use the latest
                    technology in React Native to bring it to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End What I do */}
        <div>
          <div className="flex items-center mb-4 gap-4">
            <h2 className="text-3xl font-semibold text-black ">Tech Stack</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4  overflow-y-auto gap-4">
            {techStackList.map((item, index) => (
              <div
                className="flex flex-col justify-between items-center text-center"
                key={index}
              >
                <Image
                  src={item.logo.src}
                  alt="html"
                  className="rounded-lg my-auto pb-1"
                  width={80}
                  height={80}
                />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Footer Menu */}
        <PortfolioFooter />
        {/* End Footer */}
      </div>
    </main>
  );
}

export default PortfolioAbout;
