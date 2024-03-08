import React, { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { IoMoon } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Button = () => {
  //browser darkmode
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  //opening the hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  //maually chnaging to darkmode
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  //dropdown close button
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="xl:hidden relative flex gap-4 ">
      <div className="">
        <span className="relative flex h-5 w-5">
          <span className="absolute inline-flex rounded-full h-3 w-3 bg-[#DF1D3C] left-3 -top-1 text-white text-[10px] justify-center items-center">
            0
          </span>
          <BsCart3
            size={24}
            className="cursor-pointer dark:text-white text-black font-bold"
          />
        </span>
      </div>
      <div>
        <button className="flex justify-end" onClick={toggling}>
          <RiMenu4Line size={26} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed  top-0 left-0 w-full h-screen dark:bg-[#191A1A] bg-[#FFFAFA] p-10">
          <div className="flex justify-center items-center  ">
            <IoClose
              size={35}
              className="absolute top-2 right-2 cursor-pointer"
              onClick={toggleDropdown}
            />

            <ul className="text-black w-[10rem] h-screen flex flex-col justify-center items-center gap-4 font-bold">
              <a href="#home">
                <li
                  key="home"
                  className="hover:text-bold hover:text-white dark:text-white scale-110 font-mono text-[1.5rem] leading-loose"
                >
                  Home
                </li>
              </a>
              <a href="#specs">
                <li
                  key="specs"
                  className="hover:text-bold hover:text-white dark:text-white scale-110 font-mono text-[1.5rem] leading-loose"
                >
                  Specs
                </li>
              </a>
              <a href="#case">
                <li
                  key="case"
                  className="hover:text-bold hover:text-white dark:text-white scale-110 font-mono text-[1.5rem] leading-loose"
                >
                  Case
                </li>
              </a>
              <a href="#products">
                <li
                  key="product"
                  className="hover:text-bold hover:text-white dark:text-white scale-110 font-mono text-[1.5rem] leading-loose"
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
    </div>
  );
};

export default Button;
