"use client";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function DarkModeButton() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  const toggleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <button className="size-12 bg-slate-50 dark:bg-gray-700 rounded-full p-4 shadow-xl">
      {theme === "dark" ? (
        <FaSun className=" text-white" onClick={toggleDarkMode} />
      ) : (
        <FaMoon className="text-gray-700" onClick={toggleDarkMode} />
      )}
    </button>
  );
}

export default DarkModeButton;
