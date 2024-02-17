import React from "react";
import { DiGhostSmall } from "react-icons/di";
import logo from "../assets/images/beats-logo-161616.png";

const Navbar = () => {
  return (
    <div className="flex max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4">
      <img src={logo} alt="" className="h-[3rem] drop-shadow-lg" />
      <div className="flex">
        <DiGhostSmall size={20} className="md:hidden" />
        <ul className="hidden md:flex gap-[3rem] w-full md:w-auto">
          <li aria-current="page" className="text-[1.3rem] font-semibold">
            Home
          </li>

          <li className="text-[1.3rem] font-semibold">Specs</li>
          <li className="text-[1.3rem] font-semibold">Case</li>
          <li className="text-[1.3rem] font-semibold">Poduct</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
