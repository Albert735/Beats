import React from "react";

import logo from "../assets/images/home-2.png";

const Home = () => {
  return (
    <div className="flex justify-center items-center relative max-w-screen-xl mx-auto">
      <div className="flex  justify-center items-center relative md:w-full ">
        <img
          src={logo}
          alt=""
          className="h-[26.5rem]  min-top-[38rem] min-left-[18rem] absolute md:-top-[29rem] -top-[29rem] md:h-[43rem] max-w-[20rem]  left-[14rem]   drop-shadow-2xl"
        />
      </div>

      <div className="md:mt-9 m-11 md:m-0 ">
        <h1 className="md:text-[5rem] text-[2rem] font-bold">
          <span className="text-right">Over Head</span> <br />
          <span className="">Bagna Beats </span>
        </h1>
        <h2 className="md:text-[1.5rem]  mb-5">Overview</h2>
        <p className="leading-loose text-sm md:text-[1rem]">
          Enjoy award-winning Beats sound with wireless listening freedom and a
          sleek, streamlined design with comfortable padded earphones,
          delivering first-rate playback.
        </p>
        <button
          type="button"
          className="bg-[#f6e7e7] dark:bg-[#28292B] hover:ml-5 md:gap-5 flex mt-[1rem] md:mt-[3rem] p-3 gap-3 md:p-4 rounded-[3rem] drop-shadow-md ease-in-out duration-500"
        >
          <p className=" text-sm p-1 md:p-1 md:text-[1rem]">Add to Bag</p>
          <p className="bg-white rounded-[2rem] text-sm md:px-1.5 p-1 md:text-[1rem] dark:text-black">
            {" "}
            GHC1,799
          </p>
        </button>
      </div>
    </div>
  );
};

export default Home;
