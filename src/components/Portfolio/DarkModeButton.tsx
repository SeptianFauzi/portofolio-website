"use client";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function DarkModeButton() {
  const [theme, setTheme] = useState<string>("light");

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
    } else {
      setTheme("dark");
      document.body.classList.add("dark");
    }
  };
  return (
    <button
      className="size-12 bg-slate-50 dark:bg-gray-700 rounded-full p-4 shadow-xl"
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <FaSun className=" text-white" />
      ) : (
        <FaMoon className="text-gray-700" />
      )}
    </button>
  );
}

export default DarkModeButton;
