import React, { useState } from "react";
import productImage1 from "../assets/images/product1.png";
import productImage2 from "../assets/images/product2.png";
import productImage3 from "../assets/images/product3.png";
import productImage4 from "../assets/images/product4.png";
import productImage5 from "../assets/images/product5.png";
import PopCard from "./PopCard";

import { GrShop } from "react-icons/gr";
import AOS from "aos";

import "aos/dist/aos.css";

AOS.init();

const Products = () => {
  const [show, setShow] = useState(false);
  const handleOnClose = () => setShow(false);

  return (
    <div className="flex flex-col w-full justify-center items-center  max-w-screen-xl  mx-auto xl:mt-[10rem] md:mt-[5rem]">
      <h1 className="text-[4rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F]">
        Choose <br /> Your Style
      </h1>
      <div className="flex flex-col ">
        <div className="flex flex-wrap gap-8 xl:gap-[4rem] mt-[5rem] ">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="flex relative flex-col justify-center items-center bg-[#F1E9E9] dark:bg-[#191A1A] px-[2rem] py-5 rounded-lg h-fit hover:scale-125 duration-100 hover:ease-in-out "
          >
            <img
              src={productImage1}
              alt=""
              className="h-[10rem] xl:h-[10rem] -top-[3rem] absolute"
            />
            <div className="flex flex-col gap-2 mt-28">
              <h2>Black</h2>

              <button
                onClick={() => setShow(true)}
                className="flex justify-center items-center gap-5"
              >
                <p>GHC1599</p>
                <span>
                  <GrShop />
                </span>
              </button>
            </div>
          </div>
          <PopCard onClose={handleOnClose} visible={show} />

          <div
            data-aos="fade-left"
            data-aos-duration="1100"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            className="flex relative flex-col   justify-center items-center bg-[#F1E9E9] dark:bg-[#191A1A] px-[2rem] py-5 rounded-lg h-fit hover:scale-110 hover:ease-in-out duration-200"
          >
            <img
              src={productImage2}
              alt=""
              className="h-[10rem] xl:h-[10rem] -top-[3rem] absolute"
            />
            <div className="flex flex-col gap-2 mt-28">
              <h2>Red & black</h2>
              <button
                onClick={() => setShow(true)}
                className="flex justify-center items-center gap-5"
              >
                <p>GHC1599</p>
                <span>
                  <GrShop />
                </span>
              </button>
            </div>
          </div>
          <PopCard onClose={handleOnClose} visible={show} />

          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            className="flex relative flex-col justify-center items-center bg-[#F1E9E9] dark:bg-[#191A1A] px-[2rem] py-5 rounded-lg h-fit  hover:scale-110 hover:ease-in-out duration-200"
          >
            <img
              src={productImage3}
              alt=""
              className="h-[10rem] xl:h-[10rem] -top-[3rem] absolute"
            />
            <div className="flex flex-col gap-2 mt-28">
              <h2>Gold & Black</h2>
              <button
                onClick={() => setShow(true)}
                className="flex justify-center items-center gap-5"
              >
                <p>GHC1599</p>
                <span>
                  <GrShop />
                </span>
              </button>
            </div>
          </div>
          <PopCard onClose={handleOnClose} visible={show} />

          <div
            data-aos="fade-left"
            data-aos-duration="1300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            className="flex relative flex-col justify-center items-center bg-[#F1E9E9] dark:bg-[#191A1A] px-[2rem] py-5 rounded-lg h-fit  hover:scale-110 hover:ease-in-out duration-200"
          >
            <img
              src={productImage4}
              alt=""
              className="h-[10rem] xl:h-[10rem] -top-[3rem] absolute  "
            />
            <div className="flex flex-col gap-2 mt-28">
              <h2>Blue</h2>

              <button
                onClick={() => setShow(true)}
                className="flex justify-center items-center gap-5"
              >
                <p>GHC1599</p>
                <span>
                  <GrShop />
                </span>
              </button>
            </div>
          </div>
          <PopCard onClose={handleOnClose} visible={show} />

          <div
            data-aos="fade-left"
            data-aos-duration="1400"
            data-aos-delay="400"
            data-aos-easing="ease-in-out"
            className="flex relative  flex-col justify-center items-center bg-[#F1E9E9] dark:bg-[#191A1A] px-[2rem] py-5 rounded-lg h-fit  hover:scale-110 hover:ease-in-out duration-200"
          >
            <img
              src={productImage5}
              alt=""
              className="h-[10rem] xl:h-[10rem] -top-[3rem] absolute"
            />
            <div className="flex flex-col gap-2 mt-28">
              <h2>Cream & Black</h2>
              <button
                onClick={() => setShow(true)}
                className="flex justify-center items-center gap-5"
              >
                <p>GHC1599</p>
                <span>
                  <GrShop />
                </span>
              </button>
            </div>
          </div>
          <PopCard onClose={handleOnClose} visible={show} />
        </div>
      </div>
    </div>
  );
};

export default Products;
