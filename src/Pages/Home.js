import React from "react";

import logo from "../assets/images/home-2.png";

const Home = () => {
  return (
    <div className="flex justify-center items-center relative max-w-screen-xl mx-auto ">
      <div className="flex  justify-center items-center relative w-full ">
        <img
          src={logo}
          alt=""
          className="  min-h-[20rem] min-top-[38rem] min-left-[18rem] absolute md:-top-[40rem] -top-[59.8rem] max-h-[43rem] max-w-[20rem]  left-[14rem]   drop-shadow-2xl"
        />
      </div>

      <div className="p-[10rem]">
        <h1 className="md:text-[5rem] text-[2rem] font-bold">
          <span className="text-right">Over Head</span> <br />
          <span className="">Bagna Beats </span>
        </h1>
        <h2 className="md:text-[1.5rem] mb-5">Overview</h2>
        <p className="leading-loose">
          Enjoy award-winning Beats sound with wireless listening freedom and a
          sleek, streamlined design with comfortable padded earphones,
          delivering first-rate playback.
        </p>
        <button
          type="button"
          className="bg-[#f6e7e7] gap-5 flex mt-[3rem]  p-4 rounded-[3rem] drop-shadow-md ease-in-out duration-300"
        >
          <p>Add to Bag</p>
          <p> GHC1799</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
