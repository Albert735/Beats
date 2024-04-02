import React from "react";
import logo from "../assets/images/beats-logo-161616.png";
import { RiMenu4Line } from "react-icons/ri";
import { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  //opening the hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  //browser darkmode
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  //dropdown close button
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //maually chnaging to darkmode
  const [theme, setTheme] = useState(null);

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
    <div className="flex justify-between items-center max-w-screen-xl mx-auto flex-wrap p-4 ">
      <div>
        <img
          src={logo}
          alt=""
          className="h-[2rem] md:h-[3rem] drop-shadow-lg dark:bg-white dark:rounded-[2.2rem]"
        />
      </div>
      <div>
        <button className="flex justify-end xl:hidden" onClick={toggling}>
          <RiMenu4Line size={26} />
          {isOpen && (
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="ease-in-out"
              className="fixed  top-0 left-0 w-full h-screen dark:bg-[#191A1A] bg-[#FFFAFA] p-10"
            >
              <div className="flex justify-center items-center  ">
                <img
                  src={logo}
                  alt=""
                  className="h-[2rem] md:h-[3rem] m-2 drop-shadow-lg dark:bg-white dark:rounded-[2.2rem] absolute top-2 left-2"
                />
                <IoClose
                  size={35}
                  className="absolute m-2 top-2 right-2 cursor-pointer"
                  onClick={toggleDropdown}
                />

                <ul className="text-black w-[10rem] h-screen flex flex-col justify-center items-center gap-4 font-bold">
                  <a href="#home">
                    <li
                      key="home"
                      onClick={toggleDropdown}
                      className="hover:text-bold dark:hover:text-[#B1522E] hover:text-[#B1522E] dark:text-white scale-110 font-mono text-[1.5rem] leading-loose"
                    >
                      Home
                    </li>
                  </a>
                  <a href="#specs">
                    <li
                      key="specs"
                      onClick={toggleDropdown}
                      className="hover:text-bold dark:hover:text-[#B1522E] hover:text-[#B1522E] dark:text-white scale-110 font-mono text-[1.5rem] leading-loose"
                    >
                      <span>S</span>
                      <span>p</span>
                      <span>e</span>
                      <span>c</span>
                      <span>s</span>
                    </li>
                  </a>
                  <a href="#case">
                    <li
                      key="case"
                      onClick={toggleDropdown}
                      className="hover:text-bold dark:hover:text-[#B1522E] hover:text-[#B1522E] dark:text-white scale-110 font-mono text-[1.5rem] leading-loose"
                    >
                      Case
                    </li>
                  </a>
                  <a href="#products">
                    <li
                      key="product"
                      onClick={toggleDropdown}
                      className="hover:text-bold dark:hover:text-[#B1522E] hover:text-[#B1522E] dark:text-white scale-110 font-mono text-[1.5rem] leading-loose"
                    >
                      Product
                    </li>
                  </a>

                  <button onClick={handleThemeSwitch}>
                    {theme === "dark" ? (
                      <CiLight size={26} fill="white" />
                    ) : (
                      <IoMoon size={24} className="" />
                    )}
                  </button>
                </ul>
              </div>
            </div>
          )}
        </button>
        <ul className="hidden xl:flex gap-[3rem] w-full xl:w-auto">
          <Link to='/'>
            <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  hover:scale-100 active:bg-slate-400   duration-500 hover:ease-in">
              <a href="#home">Home</a>
            </li>
          </Link>

          <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  hover:scale-100  duration-500 hover:ease-in">
            <a href="#specs">Specs</a>
          </li>
          <Link to="/#case">
            <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  hover:scale-100  duration-500 hover:ease-in">
              Case
            </li>
          </Link>
          <a href="#products">
            <li className="text-[1.3rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] hover:text-black dark:hover:text-white  hover:scale-100  duration-500 hover:ease-in">
              Poduct
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
