import React from "react";
import logo from "../assets/images/beats-logo-161616.png";
import {Link} from 'react-router-dom'

const Navbar2 = ({ step }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-5 px-10 pb-6 pt-3 w-full">
      <div className="flex justify-center items-center gap-8 ">
        <Link to='/'>
          <img src={logo} alt="" className="md:h-[3rem] h-[2rem]" />
        </Link>

        <div className="p-0 border-2 h-8"></div>
        <p className="font-bold text-gray-500">Order Overview</p>
      </div>

      <div className="flex justify-center items-center md:gap-[1rem]  gap-1">
        <div className="flex items-center  md:gap-2">
          <div
            className={`flex justify-center items-center text-white rounded-full md:w-6 md:h-6 w-3  h-3 ${
              step === 1 ? "animate-pulse bg-gray-300" : "bg-black"
            }`}
          >
            {step > 1 ? "1" : null}
          </div>
          <h1 className="text-[12px] md:text-[1rem]">Information</h1>
        </div>
        <div className="flex items-center md:gap-2 ">
          <span className="h-1 border-2 border-dashed border-gray-500 w-[1rem] md:w-[3rem] "></span>
          <div
            className={`flex justify-center items-center text-white rounded-full md:w-6 md:h-6 w-3  h-3 
          ${
            step === 2
              ? "animate-pulse bg-gray-300"
              : step > 2
              ? "bg-black"
              : "bg-gray-300"
          }
          `}
          >
            {step > 2 ? "2" : null}
          </div>
          <h1 className="text-[12px] md:text-[1rem]">Payment Details</h1>
        </div>
        <div className="flex items-center  md:gap-2">
          <span className="h-1 border-2 border-dashed border-gray-500 w-[1rem] md:w-[3rem] "></span>
          <div
            className={`flex justify-center items-center text-white rounded-full  md:w-6 md:h-6 w-3  h-3  ${
              step === 3 ? "animate-pulse bg-black" : "bg-gray-300"
            }`}
          >
            {step === 3 ? "3" : null}
          </div>
          <h1 className="text-[12px] md:text-[1rem]">Complete Order</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
