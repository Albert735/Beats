import React from "react";
import { DiGhostSmall } from "react-icons/di";

const Navbar = () => {
  return (
    <div className="flex max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4">
      <h1>Beats</h1>
      <div className="flex">
        <DiGhostSmall size={20} className="md:hidden" />
        <ul className="hidden md:flex gap-2 w-full md:w-auto">
          <li>Home</li>
          <li>Specs</li>
          <li>Case</li>
          <li>Poduct</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
