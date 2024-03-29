import React from "react";
// import check from "../assets/Svg/check-circle.svg";
import beathead from "../assets/images/studiopro-pdp-p08.png.large.2x.png";
import { Link } from "react-router-dom";

const ThankYouSection = () => {
  return (
    <div className="flex flex-col md:flex-row  gap-y-7 justify-center items-center h-screen gap-[2rem]">
      <img
        src={beathead}
        alt=""
        className="w-[50rem] h-[30rem] brightness-75"
      />
      <div>
        <p className="text-[5rem] font-serif leading-tight">
          Thank you for <br /> your
          <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#A59F9F] to-[#847B7C] ">
            {" "}
            Purchase
          </span>
        </p>
        <p className="font-sans text-[1.3rem] leading-loose">
          Your beats would be delivered soon ✅
        </p>
        <Link to="/">
          <button className="border dark:border-[#2E2E2E] dark:bg-[#1C1C1B] rounded-md bg-gradient-to-r from-[#545452] to-[#343131] ring-black">
            <p className="p-4 text-white">Back to Home Page</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouSection;
