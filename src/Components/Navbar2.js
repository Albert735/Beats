import React from "react";
import logo from "../assets/images/beats-logo-161616.png";

const Navbar2 = () => {
  return (
    <div className="flex justify-between items-center px-10 pb-6 pt-3">
      <div className="flex justify-center items-center gap-8 ">
        <img src={logo} alt="" className="md:h-[3rem]" />
        <div className="p-0 border-2 h-8"></div>
        <p className="font-bold text-gray-500">Order Overview</p>
      </div>
      <div className="flex justify-center items-center gap-[3rem]">
        <h1>Information</h1>
        <h1>Payment Details</h1>
        <h1>Complete Order</h1>
      </div>
    </div>
  );
};

export default Navbar2;
