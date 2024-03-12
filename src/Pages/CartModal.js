import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

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
          className="flex justify-end fixed backdrop-blur-md  w-screen  right-0 top-0 bg-opacity-10  bg-red-400 "
        >
          <div className=" xl:w-[30rem] relative h-screen w-screen bg-[#191A1A] dark:bg-[#FFFAFA]    dark:text-black text-white ">
            <div className="flex justify-center items-start ">
              <IoClose
                size={35}
                className="absolute m-2 top-5 right-4 cursor-pointer"
                onClick={toggleDropdown}
              />
              <h1 className="font-sans absolute text-[1.5rem] font-bold top-5 left-4  m-2  dark:text-black text-white">
                My Cart
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center h-screen">
              <TiShoppingCart size={50} />
              <p className="text-white dark:text-black">
                Your shopping cart is empty
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
