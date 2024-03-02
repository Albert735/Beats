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
        <div className="flex justify-end w-full relative inset-0 z-20 bg-white  space-y-[3rem]">
          <div className="absolute top-0 right-0 mt-12 bg-white p-4 rounded-2xl shadow-lg space-y-[3rem]">
            <IoClose
              size={26}
              fill="red"
              className="absolute top-2 right-2 cursor-pointer"
              onClick={toggleDropdown}
            />

            <ul className="text-black w-[10rem] flex flex-col justify-center items-center gap-4 font-bold">
              <a href="#home">
                <li
                  key="home"
                  className="hover:text-bold hover:text-white scale-110"
                >
                  Home
                </li>
              </a>
              <a href="#specs">
                <li
                  key="specs"
                  className="hover:text-bold hover:text-white scale-110"
                >
                  Specs
                </li>
              </a>
              <a href="#case">
                <li
                  key="case"
                  className="hover:text-bold hover:text-white scale-110"
                >
                  Case
                </li>
              </a>
              <a href="#products">
                <li
                  key="product"
                  className="hover:text-bold hover:text-white scale-110"
                >
                  Product
                </li>
              </a>

              <button onClick={handleThemeSwitch}>
                {theme === "dark" ? (
                  <CiLight size={26} />
                ) : (
                  <IoMoon size={24} className="" fill="" />
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
