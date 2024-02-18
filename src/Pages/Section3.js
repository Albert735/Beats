import React from "react";
import { GrShop } from "react-icons/gr";
import discountImage from "../assets/images/discount.png";

const Section3 = () => {
  return (
    <div className="flex md:flex-row justify-center items-center h-fit   bg-[#F1E9E9] dark:bg-[#191A1A] p-10 max-w-screen-xl mx-auto rounded-lg">
      <div className="dark:text-white ">
        <h1 className="md:text-[2.5rem] font-semibold">
          Immerse yourself in <br />
          your music
        </h1>
        <p className="md:text-[1.3rem] mt-5">Get it now, up to 50% off</p>
        <button className="  bg-[#191A1A] text-white hover:ml-5 md:gap-2 flex justify-center items-center mt-[1rem] md:mt-[3rem] p-3 gap-3 md:p-4 rounded-[3rem] drop-shadow-md ease-in-out duration-500">
          <GrShop />
          Shop Now
        </button>
      </div>

      <div className="relative">
        <img
          src={discountImage}
          alt=""
          className="drop-shadow-2xl  h-[10rem] md:h-full"
        />
      </div>
    </div>
  );
};

export default Section3;
