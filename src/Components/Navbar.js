import React from "react";
import { DiGhostSmall } from "react-icons/di";
import logo from "../assets/images/beats-logo-161616.png";


const Navbar = () => {
  return (
    <div className="flex max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4">
      <img src={logo} alt="" className="h-[3rem] drop-shadow-lg" />
      <div className="flex">
        <DiGhostSmall size={20} className="md:hidden" />
        <ul className="hidden md:flex gap-2 w-full md:w-auto">
          
            <li aria-current="page">Home</li>
          

          <li>Specs</li>
          <li>Case</li>
          <li>Poduct</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
