"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  FaMoon,
  FaBars,
  FaAddressCard,
  FaFileAlt,
  FaBriefcase,
  FaTimes,
  FaCompass,
} from "react-icons/fa";
function PortfolioNavigation() {
  const pathname = usePathname();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  return (
    <div className="grid grid-cols-1 pt-6 lg:mb-28 mb-4 px-4 lg:px-0">
      <div className="justify-self-end flex justify-center gap-3 p-4 2xl:p-0">
        <button className="size-12 bg-slate-50 rounded-full p-4 shadow-xl">
          <FaMoon className="text-black" />
        </button>
        {/* Mobile Menu */}
        <button
          className="lg:hidden size-12 rounded-full p-4 shadow-xl bg-primary-2-darker"
          onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
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
          }`}
          id="mobile-menu"
        >
          <ul className="flex flex-col gap-4 py-6 px-10">
            <li>
              <Link
                className={`${
                  pathname === "/" ? "text-primary-2-darker" : "text-black"
                } text-black text-base font-medium flex flex-row w-full gap-2 items-center`}
                href="/"
                scroll={false}
                onClick={() => {
                  setTimeout(() => {
                    setIsOpenMobileMenu(false);
                  }, 300);
                }}
              >
                <FaAddressCard />
                About
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/resume"
                    ? "text-primary-2-darker"
                    : "text-black"
                } text-base font-medium flex flex-row w-full gap-2  items-center`}
                href="/resume"
                scroll={false}
                onClick={() => {
                  setTimeout(() => {
                    setIsOpenMobileMenu(false);
                  }, 300);
                }}
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
                    ? "text-primary-2-darker"
                    : "text-black"
                } text-base font-medium flex flex-row w-full gap-2  items-center`}
                href="/project"
                onClick={() => {
                  setTimeout(() => {
                    setIsOpenMobileMenu(false);
                  }, 300);
                }}
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
