"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  FaBars,
  FaAddressCard,
  FaFileAlt,
  FaBriefcase,
  FaTimes,
} from "react-icons/fa";
import DarkModeButton from "./DarkModeButton";
function PortfolioNavigation() {
  const pathname = usePathname();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  return (
    <div className="grid grid-cols-1 pt-6 lg:mb-28 mb-4 px-4 lg:px-0">
      <div className="justify-self-end flex justify-center gap-3 p-4 2xl:p-0">
        <DarkModeButton />
        {/* Mobile Menu */}
        <button
          className="lg:hidden size-12 rounded-full p-4 shadow-xl bg-primary-2-darker dark:bg-gray-700"
          onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
          aria-label="Toggle Mobile Menu"
        >
          {isOpenMobileMenu ? (
            <FaTimes className="text-white" />
          ) : (
            <FaBars className="text-white" />
          )}
        </button>
        {/* End mobile menu */}
      </div>
      <div className="relative">
        <div
          className={`lg:hidden absolute w-full bg-white rounded-xl z-50 shadow-lg transition-all duration-300 ${
            isOpenMobileMenu ? "opacity-100" : "opacity-0"
          } dark:bg-gray-700`}
          id="mobile-menu"
        >
          <ul className="flex flex-col gap-4 py-6 px-10">
            <li>
              <Link
                className={`${
                  pathname === "/"
                    ? "text-primary-2-darker dark:text-slate-200"
                    : "text-black dark:text-slate-400"
                } text-black text-base font-medium flex flex-row w-full gap-2 items-center`}
                href="/"
                scroll={false}
                onClick={() => {
                  setTimeout(() => {
                    setIsOpenMobileMenu(false);
                  }, 300);
                }}
                aria-label="Home"
              >
                <FaAddressCard />
                About
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/resume"
                    ? "text-primary-2-darker dark:text-slate-200"
                    : "text-black dark:text-slate-400"
                } text-base font-medium flex flex-row w-full gap-2  items-center`}
                href="/resume"
                scroll={false}
                onClick={() => {
                  setTimeout(() => {
                    setIsOpenMobileMenu(false);
                  }, 300);
                }}
                aria-label="Resume"
              >
                <FaFileAlt />
                Resume
              </Link>
            </li>
            <li>
              <Link
                scroll={false}
                className={`${
                  pathname === "/project"
                    ? "text-primary-2-darker dark:text-slate-200"
                    : "text-black dark:text-slate-400"
                } text-base font-medium flex flex-row w-full gap-2  items-center`}
                href="/project"
                onClick={() => {
                  setTimeout(() => {
                    setIsOpenMobileMenu(false);
                  }, 300);
                }}
                aria-label="Project"
              >
                <FaBriefcase />
                Project
              </Link>
            </li>
            {/* <li>
              <a
                className="text-black text-base font-medium flex flex-row w-full gap-2  items-center"
                href="#contact"
              >
                <FaCompass />
                Explore
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PortfolioNavigation;
