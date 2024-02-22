import React from "react";
import { DiGhostSmall } from "react-icons/di";
import { IoMoon } from "react-icons/io5";
// import { LuSunMedium } from "react-icons/lu";
import logo from "../assets/images/beats-logo-161616.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

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
        />{" "}
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown">
          <DiGhostSmall size={30} className="xl:hidden" />
        </button>
        <div id="dropdown" className="flex ">
          <ul
            aria-labelledby="dropdownDefaultButton"
            className="hidden xl:flex gap-[3rem] w-full xl:w-auto"
          >
            <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  rounded-sm border-spacing-4 hover:border-solid hover:border-4 hover:border-t-0 hover:border-r-0 hover:border-l-0 hover:scale-125  duration-500 hover:ease-in">
              Home
            </li>

            <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  rounded-sm border-spacing-4 hover:border-solid hover:border-4 hover:border-t-0 hover:border-r-0 hover:border-l-0 hover:scale-125  duration-500 hover:ease-in">
              Specs
            </li>

            <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  rounded-sm border-spacing-4 hover:border-solid hover:border-4 hover:border-t-0 hover:border-r-0 hover:border-l-0 hover:scale-125  duration-500 hover:ease-in">
              Case
            </li>

            <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  rounded-sm border-spacing-4 hover:border-solid hover:border-4 hover:border-t-0 hover:border-r-0 hover:border-l-0 hover:scale-125  duration-500 hover:ease-in">
              Poduct
            </li>
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
