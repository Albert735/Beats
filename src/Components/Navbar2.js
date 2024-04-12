import React from "react";
import logo from "../assets/images/beats-logo-161616.png";
// import Stepper from "./Stepper";

const Navbar2 = () => {
  return (
    <div className="flex justify-between items-center px-10 pb-6 pt-3 w-full">
      <div className="flex justify-center items-center gap-8 ">
        <img src={logo} alt="" className="md:h-[3rem] h-[2rem]" />
        <div className="p-0 border-2 h-8"></div>
        <p className="font-bold text-gray-500">Order Overview</p>
      </div>
      <div>
        {/* <Stepper /> */}
      </div>
      <div className="hidden md:flex justify-center items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-lime-200 w-6 h-6 active:animate-ping "></div>
          <h1>Information</h1>
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <span className="h-1 border-2 border-dashed border-lime-300 w-[3rem] "></span>
          <div className="rounded-full bg-lime-200 w-6 h-6"></div>
          <h1>Payment Details</h1>
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <span className="h-1 border-2 border-dashed border-lime-300 w-[3rem] "></span>
          <div className="rounded-full bg-lime-200 w-6 h-6"></div>
          <h1>Complete Order</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
