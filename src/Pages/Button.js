import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <div className="xl:hidden  relative flex justify-center items-center">
      <div>
        <button onClick={toggling}>
          <RiMenu4Line size={30} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute   dark:bg-[#323536] border shadow-md right-10 top-10 p-9 bg-orange-300">
          <ul className="flex flex-col justify-center items-center text-black  mt-[4rem] bg-white ">
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
          </ul>
        </div>
      )}
    </div>
  );
};

export default Button;
