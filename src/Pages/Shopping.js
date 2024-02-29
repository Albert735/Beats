import React from "react";
import box from "../assets/images/shippingicon.png";
// import { LuPackage } from "react-icons/lu";
import boxreturn from "../assets/images/boxreturn.png";
import ipic from "../assets/images/ipic.png";

const Shopping = () => {
  return (
    <div className="flex  flex-col   justify-center items-center max-w-screen-xl mx-auto gap-[3rem] my-[6rem] gap">
      <div className="flex justify-center items-center">
        <h1 className="font-semi-bold text-[2.5rem] text-center leading-loose">
          Seamless Shopping Through{" "}
          <span className="font-bold underline">Apple</span>
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-y-[2rem] gap-[4rem]">
        <div className="flex flex-col justify-center items-center gap-y-[1rem]  dark:bg-white bg-[#F2EBEB] text-black p-8 rounded-xl drop-shadow-md">
          <img src={box} alt="" className="mix-blend-multiply h-[4rem] " />

          <h1 className="font-bold text-[1.5rem]">Fast and Free Delivery</h1>
          <p className=" text-center">
            Enjoy free two-day delivery on most <br /> in-stock items.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-[1rem] dark:bg-white bg-[#F2EBEB] text-black p-8 rounded-xl drop-shadow-md">
          <img src={ipic} alt="" className="mix-blend-multiply h-[4rem]" />
          <h1 className="font-bold text-[1.5rem]">In-Store Pickup</h1>
          <p className="text-center">
            Pick up your online order at an Apple
            <br /> Store near you.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-[1rem] dark:bg-white bg-[#F2EBEB] text-black p-8 rounded-xl drop-shadow-md">
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
