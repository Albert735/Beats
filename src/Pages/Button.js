import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  

  return (
    <div className="xl:hidden  relative flex flex-col">
      <button className="flex justify-end" onClick={toggling}>
        <RiMenu4Line size={30} />
      </button>

      {isOpen && (
        <div className=" z-50 inset-0 ">
          <div className="absolute  right-[20rem] w-full mx-auto">
            <ul className=" text-black flex justify-center flex-col   bg-white px-[5rem]  ">
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
        </div>
      )}
    </div>
  );
};

export default Button;
