import React from "react";
import { GrShop } from "react-icons/gr";
import discountImage from "../assets/images/discount.png";

const Section3 = () => {
  return (
    <div className="flex justify-center items-center  md:m-[10rem]">
      <div>
        <h1>Immerse yourself in your music</h1>
        <p>Get it now, up to 50% off</p>
        <button className="flex items-center gap-1">
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
