import React from "react";

import { IoMoon } from "react-icons/io5";
// import { LuSunMedium } from "react-icons/lu";
import logo from "../assets/images/beats-logo-161616.png";
import { useState, useEffect } from "react";
import Button from "../Pages/Button";

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
    <div className="fixed bg-transparent z-20 w-full backdrop-blur-md ">
      <div className="flex max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4  ">
        <img
          src={logo}
          alt=""
          className="h-[3rem] drop-shadow-lg dark:bg-white dark:rounded-[2.2rem]"
        />

        <div className="flex  ">
          <Button />
          <div>
            <ul className="hidden xl:flex gap-[3rem] w-full xl:w-auto">
              <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  hover:scale-125   duration-500 hover:ease-in">
                <a href="#home">Home</a>
              </li>

              <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  hover:scale-125  duration-500 hover:ease-in">
                <a href="#specs">Specs</a>
              </li>
              <a href="#case">
                <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  hover:scale-125  duration-500 hover:ease-in">
                  Case
                </li>
              </a>
              <a href="#products">
                <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  hover:scale-125  duration-500 hover:ease-in">
                  Poduct
                </li>
              </a>

              <li className="cursor-pointer flex justify-center items-center gap-2">
                <IoMoon
                  size={24}
                  className=""
                  onClick={handleThemeSwitch}
                  fill="red"
                />
                {/* <LuSunMedium size={24} className="" /> */}
                {/* <span>Dark Mode</span> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
