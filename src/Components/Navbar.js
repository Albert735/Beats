import React from "react";
// import { BsCart3 } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
// import { LuSunMedium } from "react-icons/lu";
import logo from "../assets/images/beats-logo-161616.png";
import { useState, useEffect } from "react";
import Button from "../Sections/Button";
import { CiLight } from "react-icons/ci";
import CartModal from "../Sections/CartModal";

const Navbar = () => {
  const [theme, setTheme] = useState(null);
  const [scrolling, setScrolling] = useState(false);

  //browser darkmode
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Add scroll event listener to update scrolling state
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolling(window.scrollY > 0);
    });

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", () => {
        setScrolling(window.scrollY > 0);
      });
    };
  }, []);

  //manual system darkmode
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
    <div
      className={`fixed z-20 w-full ${
        scrolling
          ? "dark:bg-[#0E0F10] bg-[#FFFAFA] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex px-10 flex-wrap items-center justify-between  p-4  ">
        <img
          src={logo}
          alt=""
          className="h-[2rem] md:h-[3rem] drop-shadow-lg dark:bg-white dark:rounded-[2.2rem]"
        />

        <div className="flex  ">
          <Button />
          <div>
            <ul className="hidden xl:flex gap-[3rem] w-full xl:w-auto">
              <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  hover:scale-100 active:bg-slate-400   duration-500 hover:ease-in">
                <a href="#home">Home</a>
              </li>

              <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  hover:scale-100  duration-500 hover:ease-in">
                <a href="#specs">Specs</a>
              </li>
              <a href="#case">
                <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  hover:scale-100  duration-500 hover:ease-in">
                  Case
                </li>
              </a>
              <a href="#products">
                <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  hover:scale-100  duration-500 hover:ease-in">
                  Poduct
                </li>
              </a>
              <li className="text-[1.3rem] font-bold  text-transparent flex relative">
                <span className="relative flex h-5 w-5">
                  <span className="absolute inline-flex rounded-full h-3 w-3 bg-[#DF1D3C] left-3 -top-1 text-white text-[10px] justify-center items-center">
                    0
                  </span>
                  <CartModal />
                </span>
              </li>

              <button onClick={handleThemeSwitch}>
                {theme === "dark" ? (
                  <CiLight size={26} fill="white" />
                ) : (
                  <IoMoon size={24} />
                )}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
