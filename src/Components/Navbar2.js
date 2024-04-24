import React from "react";
import logo from "../assets/images/beats-logo-161616.png";
import { Link } from "react-router-dom";
import check from "../assets/Svg/icons8-ok.svg";

const Navbar2 = ({ step }) => {
  return (
    <div className="flex flex-col xl:flex-row justify-between items-center w-[100%]  md:p-5">
      <div className="flex justify-between xl:justify-start w-full items-center gap-8 p-3 ">
        <Link to="/">
          <img src={logo} alt="" className="md:h-[3rem] h-[2rem]" />
        </Link>

        <div className="hidden xl:flex p-0 border-2 h-8"></div>
        <p className="font-bold text-gray-500">Order Overview</p>
      </div>

      <div className="flex relative justify-between xl:justify-between items-start md:gap-[1rem] w-[23rem] md:w-[40rem] xl:w-full  gap-9 p-4">
        <div className={`absolute top-[1.6rem] left-[2rem] md:top-[1.7rem] md:left-[3rem] justify-center ${step === 1 ? "w-[16rem] bg-slate-400" : ""} xl:justify-between items-center h-1 border-2  border-blue-300 w-[20rem] md:w-[33rem] xl:w-[48rem]`}></div>
        <div className="flex flex-col items-center  md:gap-2">
          <div
            className={`flex  justify-center items-center z-10  rounded-full md:w-6 md:h-6 w-6  h-6 ${
              step === 1 ? "bg-blue-300" : ""
            }`}
          >
            {step > 1 ? (
              <img src={check} alt="" className="h-[1.5rem]" />
            ) : step === 1 ? (
              "1"
            ) : null}
          </div>
          <h1 className="hidden md:flex text-[12px] md:text-[1rem]">
            Information
          </h1>
        </div>
        <div className="flex  flex-col items-center gap-3 md:gap-2 ">
          <div
            className={`flex justify-center text-black z-10  items-center rounded-full md:w-6 md:h-6  w-6  h-6 
          ${step === 2 ? "bg-blue-300" : step > 2 ? "" : "bg-blue-300"}
          `}
          >
            {step > 2 ? (
              <img src={check} alt="" className="h-[1.5rem]" />
            ) : step === 2 ? (
              "2"
            ) : null}
          </div>
          <h1 className="hidden md:flex text-[12px] md:text-[1rem]">
            Payment Details
          </h1>
        </div>
        <div className="flex  flex-col items-center gap-4  md:gap-2">
          <div
            className={`flex justify-center z-10 text-black items-center rounded-full  md:w-6 md:h-6  w-6  h-6   ${
              step >= 3 ? "bg-blue-300" : "bg-blue-300"
            }`}
          >
            {step >= 3 ? (
              "3"
            ) : step > +3 ? (
              <img src={check} alt="" className="h-[1.5rem]" />
            ) : null}
          </div>
          <h1 className="hidden md:flex text-[12px] md:text-[1rem]">
            Complete Order
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
