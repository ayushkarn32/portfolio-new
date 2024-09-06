"use client";
import React, { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
  const [isDarkMode, setisDarkMode] = useState<boolean>(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
      setisDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setisDarkMode(!isDarkMode);
  };
  return (
    <nav className="flex w-full p-6 justify-between dark:bg-[#2c3e50] dark:text-white transition-all ease-in-out delay-100">
      <div>
        <h2>Aayush Karna</h2>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-4 mx-4">
          <div className="cursor-pointer">Work Experience</div>
          <div className="cursor-pointer">Projects</div>
          <div className="cursor-pointer">Academics</div>
        </div>
        <button onClick={toggleTheme}>
          {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
