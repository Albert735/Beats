import React from "react";
import { GrShop } from "react-icons/gr";
import discountImage from "../assets/images/discount.png";
import AOS from "aos";

import "aos/dist/aos.css";

AOS.init();

const Section3 = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-[5rem] xl:flex-row justify-center items-center   bg-[#F1E9E9] dark:bg-[#191A1A] p-10 md:max-w-screen-xl mx-auto rounded-lg my-10">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="dark:text-white g "
      >
        <div className="gap-[3rem]">
          <h1 className="xl:text-[2.5rem] font-bold leading-loose text-[1.3rem]">
            Immerse yourself in <br />
            your music
          </h1>
          <span>
            <p className="xl:text-[1.3rem] mt-5">Get it now, up to 50% off</p>
          </span>
        </div>

        <button className="  dark:bg-[#f6e7e7] dark:text-black text-white bg-[#191A1A] hover:scale-110 xl:gap-2 flex justify-center items-center mt-[1rem] xl:mt-[3rem] p-3 gap-3 xl:p-4 rounded-[3rem] drop-shadow-md ease-in-out duration-500">
          <GrShop />
          Shop Now
        </button>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className=""
      >
        <img src={discountImage} alt="" className="h-[3rem] " />
      </div>
    </div>
  );
};

export default Section3;
