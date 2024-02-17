import React from "react";
import { GrShop } from "react-icons/gr";
import discountImage from "../assets/images/discount.png";

const Section3 = () => {
  return (
    <div className="flex justify-center items-center   bg-[#F1E9E9] p-10 max-w-screen-xl mx-auto rounded-lg">
      <div>
        <h1 className="text-[2.5rem] font-semibold">
          Immerse yourself in <br />
          your music
        </h1>
        <p className="text-[1.3rem] mt-5">Get it now, up to 50% off</p>
        <button className="bg-[#0E0F10] gap-1 flex justify-center items-center mt-[2rem] text-white p-4 rounded-[3rem] drop-shadow-md">
          <GrShop />
          Shop Now
        </button>
      </div>

      <div className="">
        <img src={discountImage} alt="" className="drop-shadow-[6rem]" />
      </div>
    </div>
  );
};

export default Section3;
