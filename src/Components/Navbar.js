import React from "react";
import { DiGhostSmall } from "react-icons/di";
import { IoMoon } from "react-icons/io5";
// import { LuSunMedium } from "react-icons/lu";
import logo from "../assets/images/beats-logo-161616.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("initialTheme");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-fixed z-10">
      <div className="flex max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4 ">
        <img
          src={logo}
          alt=""
          className="h-[3rem] drop-shadow-lg dark:bg-white dark:rounded-[2.2rem]"
        />
        <div className="flex">
          <DiGhostSmall size={30} className="md:hidden" />
          <ul className="hidden md:flex gap-[3rem] w-full md:w-auto">
            <li className="text-[1.3rem] font-semibold">Home</li>

            <li className="text-[1.3rem] font-semibold">Specs</li>

            <li className="text-[1.3rem] font-semibold">Case</li>

            <li className="text-[1.3rem] font-semibold">Poduct</li>
            <li className="cursor-pointer flex justify-center items-center gap-2">
              <IoMoon size={24} className="" onClick={handleThemeSwitch} />
              {/* <LuSunMedium size={24} className="" /> */}
              {/* <span>Dark Mode</span> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
