import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import { TiShoppingCart } from "react-icons/ti";
import CartItems from "../CartItems";
import { useStateContext } from "../Context/StateContext";
import { Link } from "react-router-dom";
import { IoIosInformationCircle } from "react-icons/io";

const CartModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const toggleDropdown = () => {
    if (isOpen !== null) {
      setIsOpen(!isOpen);
    } else {
      console.error("toggleDropdown encountered null isOpen value");
    }
  };

  const { cartItems, totalQuantity, totalPrice } = useStateContext();

  return (
    <div>
      <span className="relative flex h-5 w-5">
        <span className="absolute inline-flex rounded-full h-4 w-4 bg-[#DF1D3C] left-3 -top-1 text-white text-[10px] justify-center items-center">
          {totalQuantity}
        </span>
        <BsCart3
          size={24}
          className="cursor-pointer dark:text-white text-black font-bold"
          onClick={toggling}
        />
      </span>
      {isOpen && (
        <div
          data-aos="fade-left"
          data-aos-duration="100"
          data-aos-delay="ease-in-out"
          className="flex flex-col fixed justify-end items-end  top-0 right-0 w-screen  bg-black/60 backdrop-blur   h-screen z-50"
        >
          <div className="xl:w-[30rem] relaive w-full h-screen overflow-y-scroll scroll-mb-[90rem] bg-white">
            <div className="flex relative inset-0 z-20 justify-between items-center p-2 text-black md:p-9">
              <h1 className=" text-[20px]  m-2  ">My cart</h1>
              <TfiClose
                size={24}
                className=" m-2 cursor-pointer border-2 border-slate-400 rounded-full p-1 "
                onClick={toggleDropdown}
              />
            </div>

            <div className=" flex justify-center items-center  flex-col gap-2   p-5 ">
              {cartItems?.length === 0 ? (
                <div className="flex absolute top-[22rem] justify-center items-center text-black flex-col p-5  border-2 rounded-xl">
                  <TiShoppingCart size={50} />
                  <p className="">Your shopping cart is empty</p>
                  <a href="#products" onClick={toggleDropdown}>
                    <p className="underline font-light">Buy Now!</p>
                  </a>
                </div>
              ) : (
                cartItems.map((product) => (
                  <CartItems
                    product={product}
                    key={product._id}
                    productImage={product.image}
                    productName={product.title}
                    productPrice={product.price}
                    className="m-[8rem]"
                  />
                ))
              )}
            </div>
          </div>
          <div className="bg-white xl:w-[30rem] w-screen  md:w-full flex justify-center items-center border-none">
            {cartItems?.length === 0 ? (
              <div></div>
            ) : (
              <div className="flex  flex-col justify-between items-center xl:w-36">
                <div className="flex flex-col justify-start items-center text-black text-[1rem]  w-screen md:w-[38rem] xl:w-[28rem] p-5  space-y-2  ">
                  <p className="flex justify-between items-center w-full  rounded-xl ">
                    <span className="font-light">Subtotal</span>
                    <span className="font-light">Ghc {totalPrice}</span>
                  </p>
                  <p className="flex justify-between items-center w-full  rounded-xl font-bold">
                    <span className="font-light">Discount</span>
                    <span className="font-light">Ghc 20%</span>
                  </p>
                  <p className="flex justify-between items-center w-full rounded-xl font-bold">
                    <span className="flex justify-center items-center gap-1 font-light">
                      Tax
                      <IoIosInformationCircle />
                    </span>
                    <span className="font-light">Ghc </span>
                  </p>
                </div>
                <div className="flex justify-between items-center text-black text-[1rem]  w-screen md:w-[38rem] xl:w-[28rem] px-5">
                  <span>Total</span>
                  <span className="font-bold">Ghc {totalPrice}</span>
                </div>
                <div className="flex flex-col justify-start items-center text-black text-[1rem]  w-screen md:w-[38rem] xl:w-[28rem] p-5 gap-3">
                
                    <button
                    onClick={toggleDropdown}
                      type="button"
                      className="flex justify-center items-center border border-gray-300  px-5 py-4 rounded-xl w-full  font-bold"
                    >
                    Continue Shopping
                    </button>
             
                  <button
                    type="button"
                    className="flex justify-center items-center bg-[#000000] px-5 py-4 rounded-xl w-full text-white font-bold"
                  >
                    <Link to="/checkout">Checkout </Link>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
