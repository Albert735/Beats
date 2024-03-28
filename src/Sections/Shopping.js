import React from "react";
import box from "../assets/images/shippingicon.png";
// import { LuPackage } from "react-icons/lu";
import boxreturn from "../assets/images/boxreturn.png";
import ipic from "../assets/images/ipic.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Shopping = () => {
  return (
    <div className="flex flex-col  justify-center items-center max-w-screen-xl mx-auto gap-[3rem] md:my-[6rem] md:mb-[14rem] gap">
      <div
        // data-aos="fade-up-right"
        // data-aos-duration="500"
        // data-aos-easing="ease-in-out"
        className="flex justify-center items-center"
      >
        <h1 className="font-semi-bold text-[1.5rem]  md:text-[2.5rem] text-center leading-loose">
          Seamless Shopping Through <br />
          <span className="font-extrabold underline">Apple</span>
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        className="flex md:flex-wrap  xl:flex-row flex-col gap-y-[2rem] gap-[4rem]"
      >
        <div className="flex flex-col justify-center items-center gap-y-[1rem]  dark:bg-white bg-[#F2EBEB] text-black p-8 rounded-xl drop-shadow-md">
          <img src={box} alt="" className="mix-blend-multiply h-[4rem] " />

          <h1 className="font-bold text-[1.5rem]">Fast and Free Delivery</h1>
          <p className=" text-center">
            Enjoy free two-day delivery on most <br /> in-stock items.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex flex-col justify-center items-center gap-y-[1rem] dark:bg-white bg-[#F2EBEB] text-black p-8 rounded-xl drop-shadow-md"
        >
          <img src={ipic} alt="" className="mix-blend-multiply h-[4rem]" />
          <h1 className="font-bold text-[1.5rem]">In-Store Pickup</h1>
          <p className="text-center">
            Pick up your online order at an Apple
            <br /> Store near you.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className="flex flex-col justify-center items-center gap-y-[1rem] dark:bg-white bg-[#F2EBEB] text-black p-8 rounded-xl drop-shadow-md"
        >
          <img src={boxreturn} alt="" className="mix-blend-multiply h-[4rem]" />
          <h1 className="font-bold text-[1.5rem]">Easy Returns</h1>
          <p className="text-center">
            Return eligible items to Apple within 14 <br /> days of receipt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
