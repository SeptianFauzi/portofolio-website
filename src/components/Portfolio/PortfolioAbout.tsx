import Image from "next/image";
import React from "react";
import { FaCode, FaMobileAlt } from "react-icons/fa";

import PortfolioFooter from "./PortfolioFooter";

function PortfolioAbout() {
  const techStackList = [
    {
      name: "Javascript",
      logo: "https://assets.septianfauzi.com/images/javascript-logo.png",
    },
    {
      name: "Typescript",
      logo: "https://assets.septianfauzi.com/images/typescript-logo.png",
    },
    {
      name: "HTML",
      logo: "https://assets.septianfauzi.com/images/html-logo.png",
    },
    {
      name: "CSS",
      logo: "https://assets.septianfauzi.com/images/css-logo.png",
    },
    {
      name: "Bootstrap",
      logo: "https://assets.septianfauzi.com/images/bootstrap-logo.png",
    },
    {
      name: "Ant Design",
      logo: "https://assets.septianfauzi.com/images/ant-design-logo.png",
    },
    {
      name: "Tailwind CSS",
      logo: "https://assets.septianfauzi.com/images/tailwind-logo.png",
    },
    {
      name: "Material UI",
      logo: "https://assets.septianfauzi.com/images/material-ui-logo.png",
    },
    {
      name: "Styled Components",
      logo: "https://assets.septianfauzi.com/images/styled-components-logo.png",
    },
    {
      name: "React Testing Library",
      logo: "https://assets.septianfauzi.com/images/react-testing-library-logo.png",
    },
    {
      name: "React JS",
      logo: "https://assets.septianfauzi.com/images/react-logo.png",
    },
    {
      name: "Redux",
      logo: "https://assets.septianfauzi.com/images/redux-logo.png",
    },
    {
      name: "SASS",
      logo: "https://assets.septianfauzi.com/images/sass-logo.png",
    },
    {
      name: "Next.js",
      logo: "https://assets.septianfauzi.com/images/nextjs-logo.png",
    },
    {
      name: "Babel",
      logo: "https://assets.septianfauzi.com/images/babel-logo.png",
    },
    {
      name: "Axios",
      logo: "https://assets.septianfauzi.com/images/axios-logo.png",
    },
    {
      name: "Eslint",
      logo: "https://assets.septianfauzi.com/images/eslint-logo.png",
    },
    {
      name: "NodeJS",
      logo: "https://assets.septianfauzi.com/images/nodejs-logo.png",
    },
    {
      name: "Git",
      logo: "https://assets.septianfauzi.com/images/git-logo.png",
    },
    {
      name: "Jest",
      logo: "https://assets.septianfauzi.com/images/jest-logo.png",
    },
    {
      name: "JQuery",
      logo: "https://assets.septianfauzi.com/images/jquery-logo.png",
    },
    {
      name: "PHP",
      logo: "https://assets.septianfauzi.com/images/php-logo.png",
    },
    {
      name: "Laravel",
      logo: "https://assets.septianfauzi.com/images/laravel-logo.png",
    },
    {
      name: "MySQL",
      logo: "https://assets.septianfauzi.com/images/mysql-logo.png",
    },
    {
      name: "React Native",
      logo: "https://assets.septianfauzi.com/images/react-native-logo.png",
    },
    {
      name: "React Hook Form",
      logo: "https://assets.septianfauzi.com/images/react-hook-form-logo.png",
    },
    {
      name: "RESTful API",
      logo: "https://assets.septianfauzi.com/images/restful-api-logo.png",
    },
    {
      name: "Webpack",
      logo: "https://assets.septianfauzi.com/images/webpack-logo.png",
    },
  ];
  return (
    <main className="flex-grow h-fit rounded-2xl bg-white dark:bg-gray-700">
      <div className="md:p-12 p-7 flex flex-col gap-4">
        {/* About Me */}
        <div>
          <div className="flex items-center mb-4 gap-4">
            <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white ">
              About Me
            </h2>
            <div className="w-1/4 h-2 border-b-4 border-primary"></div>
          </div>
          <p className="text-base md:text-lg mb-4 text-slate-500 dark:text-slate-400">
            Greetings, I'm Septian Fauzi. I'm deeply curious about technology
            development, particularly when it comes to websites. I have over 3
            years of experience in website development. Some of the technologies
            I frequently use include HTML, CSS, Javascript, Typescript, ReactJS,
            Next.JS, Jest, React Testing Library, Styled Component, Bootstrap,
            RESTful API Axios, Redux, Git, and many others.
          </p>
          <p className="text-base md:text-lg text-slate-500 mb-4 dark:text-slate-400">
            I am very happy if I can collaborate with everyone to develop and
            build projects that are useful for many people. If you're seeking a
            partner to help build a website, please don't hesitate to reach out
            to me to build your awasome project.
          </p>
          <p className="text-md md:text-xl text-slate-500 font-semibold dark:text-slate-400">
            "Build Your Idea With My Code"
          </p>
        </div>
        {/* End About Me */}
        {/* What I do */}
        <div>
          <div className="flex items-center mb-4 gap-4">
            <h2 className="text-3xl font-semibold text-black dark:text-white">
              What I Do!
            </h2>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-4 rounded-2xl border-2 border-primary-2-darker shadow-lg">
              <div className="flex flex-col justify-center text-center items-center gap-4 p-4">
                <FaCode className="text-3xl text-primary-2-darker" />
                <div>
                  <h3 className="text-lg text-primary-2-darker font-medium mb-2">
                    Web Development
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400">
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
                  <p className="text-slate-500 dark:text-slate-400">
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
            <h2 className="text-3xl font-semibold text-black dark:text-white">
              Tech Stack
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4  overflow-y-auto gap-4">
            {techStackList.map((item, index) => (
              <div
                className="flex flex-col justify-between items-center text-center"
                key={index}
              >
                <Image
                  src={item.logo}
                  alt="html"
                  className="rounded-lg my-auto pb-1"
                  width={80}
                  height={80}
                />
                <p className="dark:text-slate-400">{item.name}</p>
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
