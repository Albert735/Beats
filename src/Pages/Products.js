import React from "react";
import productImage1 from "../assets/images/product1.png";
import productImage2 from "../assets/images/product2.png";
import productImage3 from "../assets/images/product3.png";
import productImage4 from "../assets/images/product4.png";
import productImage5 from "../assets/images/product5.png";
import { GrShop } from "react-icons/gr";

const Products = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-screen-xl mx-1 md:mx-auto my-11 md:m-[10rem]">
      <h1 className="text-[4rem] font-bold text-center">
        Choose <br /> Your Style
      </h1>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-[4rem] mt-[5rem]">
          <div className="flex relative flex-col justify-center items-center bg-[#F1E9E9] dark:bg-[#191A1A] px-[2rem] py-5 rounded-lg h-fit drop-shadow-xl hover:scale-110 hover:ease-in-out duration-200">
            <img
              src={productImage1}
              alt=""
              className="h-[10rem] md:h-[10rem] -top-[3rem] absolute drop-shadow-xl"
            />
            <div className="flex flex-col gap-2 mt-28">
              <h2>Black</h2>
              <div className="flex gap-5">
                <p>GHC1599</p>
                <span>
                  <GrShop />
                </span>
              </div>
            </div>
          </div>

          <div className="flex relative flex-col   justify-center items-center bg-[#F1E9E9] dark:bg-[#191A1A] px-[2rem] py-5 rounded-lg h-fit drop-shadow-xl hover:scale-110 hover:ease-in-out duration-200">
            <img
              src={productImage2}
              alt=""
              className="h-[10rem] md:h-[10rem] -top-[3rem] absolute drop-shadow-xl"
            />
            <div className="flex flex-col gap-2 mt-28">
              <h2>Red & black</h2>
              <div className="flex gap-5">
                <p>GHC1599</p>
                <span>
                  <GrShop />
                </span>
              </div>
            </div>
          </div>

          <div className="flex relative flex-col justify-center items-center bg-[#F1E9E9] dark:bg-[#191A1A] px-[2rem] py-5 rounded-lg h-fit drop-shadow-xl hover:scale-110 hover:ease-in-out duration-200">
            <img
              src={productImage3}
              alt=""
              className="h-[10rem] md:h-[10rem] -top-[3rem] absolute drop-shadow-xl"
            />
            <div className="flex flex-col gap-2 mt-28">
              <h2>Gold & Black</h2>
              <div className="flex gap-5">
                <p>GHC1599</p>
                <span>
                  <GrShop />
                </span>
              </div>
            </div>
          </div>

          <div className="flex relative flex-col justify-center items-center bg-[#F1E9E9] dark:bg-[#191A1A] px-[2rem] py-5 rounded-lg h-fit drop-shadow-xl hover:scale-110 hover:ease-in-out duration-200">
            <img
              src={productImage4}
              alt=""
              className="h-[10rem] md:h-[10rem] -top-[3rem] absolute drop-shadow-xl "
            />
            <div className="flex flex-col gap-2 mt-28">
              <h2>Blue</h2>

              <div className="flex gap-5">
                <p>GHC1599</p>
                <span>
                  <GrShop />
                </span>
              </div>
            </div>
          </div>

          <div className="flex relative  flex-col   justify-center items-center bg-[#F1E9E9] dark:bg-[#191A1A] px-[2rem] py-5 rounded-lg h-fit drop-shadow-xl hover:scale-110 hover:ease-in-out duration-200">
            <img
              src={productImage5}
              alt=""
              className="h-[10rem] md:h-[10rem] -top-[3rem] absolute drop-shadow-xl"
            />
            <div className="flex flex-col gap-2 mt-28">
              <h2>Cream & Black</h2>
              <div className="flex gap-5">
                <p>GHC1599</p>
                <span>
                  <GrShop />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
