import React from "react";

import logo from "../assets/images/home-2.png";
import AOS from "aos";

import "aos/dist/aos.css";

AOS.init();

const Home = () => {
  function handleClick() {
    alert("Added to cart");
  }

  return (
    <div
      id="home"
      className="flex justify-center items-center relative md:max-w-screen-xl md:mx-auto overflow-hidden pt-[3rem] "
    >
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-delay="ease-in-out"
        className="flex  justify-center items-center relative md:w-full xl:w-full  "
      >
        <img
          src={logo}
          alt=""
          className="h-[25rem] absolute md:-top-[28rem] md:h-[43rem] md:left-[2rem] xl:-top-[29rem] -top-[27.25rem] xl:h-[45rem] max-w-[20rem]  xl:left-[14rem]  left-[15rem]  drop-shadow-2xl "
        />
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="ease-in-out"
        className="xl:mt-9 m-11 xl:m-0 md:w-full leading-shrug"
      >
        <h1 className="relative">
          <span className="xl:text-[5rem] md:text-[2.5rem] text-[2rem] text-right font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] ">
            Over Head
          </span>
          <br />
          <span className="xl:text-[4rem] md:text-[2.5rem] text-[2rem] font-bold ">
            Bagna Beats{" "}
          </span>
        </h1>
        <h2 className="xl:text-[1.5rem] text-semibold mb-5">Overview</h2>
        <p className="leading-loose md:text-[1.3rem] font-light mt-[2rem]">
          Enjoy award-winning Beats sound with wireless listening freedom and a
          sleek, streamlined design with comfortable padded earphones,
          delivering first-rate playback.
        </p>
        <button
          // onClick={handleButtonClick}
          onClick={handleClick}
          type="button"
          className="bg-[#ffffff] dark:bg-[black]  xl:gap-5 flex my-[1rem] xl:mt-[2rem] p-2 gap-2 xl:p-4 rounded-lg hover:bg-[#FFF0EF] drop-shadow-sm ease-in-out duration-500"
        >
          <p className=" text-sm p-1 xl:p-1 xl:text-[1rem]">Add to Bag</p>
          <p className="bg-white rounded-lg text-sm xl:px-1.5 p-1 xl:text-[1rem] dark:text-black font-bold">
            {" "}
            GHC1,799
          </p>
        </button>
      </div>
    </div>
  );
};

export default Home;
