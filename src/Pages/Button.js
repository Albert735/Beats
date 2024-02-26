import React, { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { IoMoon } from "react-icons/io5";

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

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="xl:hidden  relative flex flex-col">
      <button className="flex justify-end" onClick={toggling}>
        <RiMenu4Line size={30} />
      </button>

      {isOpen && (
        <div className="flex justify-end w-full relative inset-0 z-20 ">
          <div className=" absolute">
            <ul className=" text-black flex flex-col bg-white  p-[2rem] rounded-2xl  gap-4 font-bold">
              <li
                key="home"
                className="hover:text-bold hover:text-white scale-110"
              >
                Home
              </li>
              <li
                key="specs"
                className="hover:text-bold hover:text-white scale-110"
              >
                Specs
              </li>
              <li
                key="case"
                className="hover:text-bold hover:text-white scale-110"
              >
                Case
              </li>
              <li
                key="product"
                className="hover:text-bold hover:text-white scale-110"
              >
                Product
              </li>
              <li className="cursor-pointer flex justify-center items-center gap-2">
                <IoMoon
                  size={24}
                  className=""
                  onClick={handleThemeSwitch}
                  fill="red"
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
