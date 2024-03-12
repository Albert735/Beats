import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
// import { TiShoppingCart } from "react-icons/ti";
import CartItems from "../CartItems";

const CartModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" relative  ">
      <span className="relative flex h-5 w-5">
        <span className="absolute inline-flex rounded-full h-3 w-3 bg-[#DF1D3C] left-3 -top-1 text-white text-[10px] justify-center items-center">
          0
        </span>
        <BsCart3
          size={24}
          className="cursor-pointer dark:text-white text-black font-bold"
          onClick={toggling}
        />
      </span>
      {isOpen && (
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="ease-in-out"
          className="flex justify-end fixed backdrop-blur-md h-screen w-screen  right-0 top-0 bg-opacity-10  bg-red-400 "
        >
          <div className=" xl:w-[30rem] overflow-y-scroll relaive w-full bg-[#191A1A] dark:bg-[#FFFAFA]    dark:text-black text-white ">
            <div className="flex fixed w-full justify-between items-center p-2 md:p-9">
              <h1 className="font-sans  text-[20px] font-light m-2  dark:text-black text-white">
                My Cart
              </h1>
              <TfiClose
                size={24}
                className=" m-2  cursor-pointer"
                onClick={toggleDropdown}
              />
            </div>
            <div className="flex flex-col justify-center gap-10 items-center h-full mt-8">
              {/* <TiShoppingCart size={50} />
              <p className="text-white dark:text-black">
                Your shopping cart is empty
              </p> */}
              <CartItems />
              <div className="flex flex-col justify-center items-center text-black text-[1rem] w-full p-2 gap-2 mb-5">
                <button
                  type="button"
                  className="flex justify-between items-center w-full bg-gray-100 p-5 rounded-xl "
                >
                  <span>Sub total</span>
                  <span>Ghc 800</span>
                </button>
                <button
                  type="button"
                  className="flex justify-between items-center w-full bg-gray-100 p-5 rounded-xl font-bold"
                >
                  <span>Total</span>
                  <span>Ghc 850</span>
                </button>
                <button
                  type="button"
                  className="flex justify-center items-center w-full bg-[#000000] p-5 rounded-xl text-white font-bold"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
