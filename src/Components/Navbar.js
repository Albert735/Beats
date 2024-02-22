import React from "react";
// import { RiMenu4Line } from "react-icons/ri";
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
    <div className="bg-fixed bg-transparent z-10">
      <div className="flex max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4 ">
        <img
          src={logo}
          alt=""
          className="h-[3rem] drop-shadow-lg dark:bg-white dark:rounded-[2.2rem]"
        />
        {/* <button>
          <RiMenu4Line size={30} />
        </button> */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="Home"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="specs"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="case"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="Product"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>
            
          </ul>
        </div>

        <div className="flex ">
          <ul className="hidden xl:flex gap-[3rem] w-full xl:w-auto">
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
