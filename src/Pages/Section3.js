import React from "react";
import { GrShop } from "react-icons/gr";
import discountImage from "../assets/images/discount.png";
import AOS from "aos";

import "aos/dist/aos.css";

AOS.init();

const Section3 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center max-w-screen-xl mx-auto py-[5rem] gap-8 md:gap-0 xl:gap-[5rem] dark:bg-[#191A1A] bg-[#F1E9E9] xl:rounded-lg">
      <div className="flex flex-col gap-7 text-center ">
        <div className="gap-4">
          <div>
            <h1 className="font-bold text-[2rem]">
              Immerse yourself in <br />
              your music
            </h1>
          </div>
          <div>
            <p>Get it now, up to 50% off</p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="flex flex-row justify-center items-center dark:bg-[#f6e7e7] dark:text-black text-white  bg-[#191A1A] gap-2 p-[1rem] rounded-[3rem] drop-shadow-md xl:hover:ml-3 hover:scale-110 hover:ease-in-out duration-500">
            <GrShop />
            <span>Shop Now</span>
          </button>
        </div>
      </div>
      <div>
        <img src={discountImage} alt="" className="h-[13rem] md:h-[17rem]" />
      </div>
    </div>
  );
};

export default Section3;
