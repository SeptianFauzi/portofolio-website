import Image from "next/image";
import React from "react";
import {
  FaEnvelope,
  FaFileDownload,
  FaGithubAlt,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import personPicture from "../../../assets/images/avatar-septian-fauzi.jpg";
import Link from "next/link";
function PortfolioProfile() {
  return (
    <div className="lg:max-w-80 lg:min-w-80 w-full rounded-2xl bg-white p-7 h-fit lg:sticky top-[110px]">
      <div className="flex items-center flex-col gap-8">
        <Image
          src={personPicture}
          className="rounded-2xl size-60 object-cover lg:-mt-[50%] border-white border-solid border-4"
          alt="Picture of the author"
          width={300}
          height={300}
        />
        <div className="flex flex-col gap-4 items-center">
          <h4 className="text-3xl font-medium text-black">Septian Fauzi</h4>
          <p className="text-lg border-primary border rounded-md px-4 py-2 text-primary font-semibold">
            Frontend Developer
          </p>
          {/* Social Media list */}
          <ul className="flex gap-4">
            <li>
              <a
                className="size-10 flex justify-center items-center bg-slate-100 rounded-md hover:bg-linkedIn first:hover:text-white first:text-linkedIn"
                href="https://www.linkedin.com/in/septian-fauzi-09sf/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                className="size-10 flex justify-center items-center bg-slate-100 rounded-md hover:bg-github first:hover:text-white first:text-github"
                href="https://github.com/SeptianFauzi"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubAlt className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                className="size-10 flex justify-center items-center bg-slate-100 rounded-md hover:bg-instagram first:hover:text-white first:text-instagram"
                href="https://www.instagram.com/septianfauzi9"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </li>
          </ul>
          {/* End of Social Media list */}
        </div>
        {/* Addtional Information */}
        <div className="flex flex-col px-5 py-8 bg-slate-100 rounded-2xl w-full">
          <div className="flex flex-row border-b border-slate-200 pb-3 gap-3">
            <Link
              className="size-11 bg-white rounded-xl flex items-center justify-center shadow-lg first:text-primary hover:bg-primary hover:first:text-white"
              target="_blank"
              rel="noreferrer"
              href="mailto:fauzy434@gmail.com"
            >
              <FaEnvelope />
            </Link>
            <div className="flex flex-col justify-between">
              <p className="text-xs text-slate-500">Email</p>
              <p className="text-base">fauzy434@gmail.com</p>
            </div>
          </div>
          <div className="flex py-3 gap-3">
            <Link
              className="size-11 bg-white rounded-xl flex items-center justify-center shadow-lg first:text-secondary hover:bg-secondary hover:first:text-white"
              href="https://maps.app.goo.gl/5TQTE56yafYE3VUg6"
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarkerAlt />
            </Link>
            <div className="flex flex-col justify-between">
              <p className="text-xs text-slate-500">Location</p>
              <p className="text-base">Bogor, Indonesia</p>
            </div>
          </div>
        </div>
        {/* End of Addtional Information */}

        {/* Download CV */}
        <div className="w-fit">
          <Link
            className=" bg-primary px-4 py-2 rounded-md flex items-center justify-center gap-2 w-full"
            target="_blank"
            href="https://septianfauzi.com/assets/CV/CV_Septian_Fauzi_2024.pdf"
            rel="noreferrer"
          >
            <FaFileDownload className="text-2xl text-white" />
            <button className="mx-1 text-white font-medium ">
              Download CV
            </button>
          </Link>
        </div>
        {/* End of Download CV */}
      </div>
    </div>
  );
}

export default PortfolioProfile;
