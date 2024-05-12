"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaAddressCard, FaBriefcase, FaFile } from "react-icons/fa";
import Loading from "./Loading";

function PortfolioSidebarNavigation() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <aside className="min-w-[120px] rounded-2xl bg-white dark:bg-gray-700 h-fit sticky top-[10px] hidden lg:block">
      {isLoading && (
        <div className=" transition-opacity duration-300 ease-out opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50">
          <Loading />
        </div>
      )}
      <nav className="p-4">
        <ul className="flex flex-col justify-center items-center gap-4">
          <li className="flex flex-col flex-grow size-20">
            <Link
              className={`${
                pathname === "/"
                  ? "bg-primary first:text-white dark:bg-gray-800 dark:text-slate-400"
                  : "bg-white first:text-primary dark:first:text-gray-700"
              } size-full  rounded-xl flex flex-col items-center justify-center shadow-lg p-4 text-sm`}
              rel="noreferrer"
              href={"/"}
              aria-label="Home"
            >
              <FaAddressCard className="text-2xl mb-2" />
              About
            </Link>
          </li>
          <li className="flex flex-col flex-grow size-20">
            <Link
              className={`${
                pathname === "/resume"
                  ? "bg-primary  first:text-white dark:bg-gray-800 dark:text-slate-400"
                  : "bg-white first:text-primary dark:first:text-gray-700"
              } size-full rounded-xl flex flex-col items-center justify-center shadow-lg p-4 text-sm`}
              rel="noreferrer"
              href="/resume"
              aria-label="Resume"
            >
              <FaFile className="text-2xl mb-2" />
              Resume
            </Link>
          </li>
          <li className="flex flex-col flex-grow size-20">
            <Link
              className={`${
                pathname === "/project"
                  ? "bg-primary first:text-white dark:bg-gray-800 dark:text-slate-400"
                  : "bg-white first:text-primary dark:first:text-gray-700"
              } size-full rounded-xl flex flex-col items-center justify-center shadow-lg p-4 text-sm`}
              rel="noreferrer"
              href="/project"
              aria-label="Projects"
            >
              <FaBriefcase className="text-2xl mb-2" />
              Projects
            </Link>
          </li>
          {/* <li className="flex flex-col flex-grow size-20">
            <a
              className="size-full bg-white rounded-xl flex flex-col items-center justify-center shadow-lg first:text-primary  p-4 text-sm"
              target="_blank"
              rel="noreferrer"
              href="mailto:fauzy434@gmail.com"
            >
              <FaCompass className="text-2xl mb-2" />
              Explore
            </a>
          </li> */}
        </ul>
      </nav>
    </aside>
  );
}

export default PortfolioSidebarNavigation;
