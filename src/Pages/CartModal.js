import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import { TiShoppingCart } from "react-icons/ti";
import CartItems from "../CartItems";
import { useStateContext } from "../Context/StateContext";
// import { product } from "../ProductArray";

const CartModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { cartItems,} = useStateContext();

  return (
    <div className=" relative  ">
      <span className="relative flex h-5 w-5">
        <span className="absolute inline-flex rounded-full h-3 w-3 bg-[#DF1D3C] left-3 -top-1 text-white text-[10px] justify-center items-center">
          {/* {product.quantity} */}0
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
          data-aos-duration="1000"
          data-aos-delay="ease-in-out"
          className="flex justify-end fixed backdrop-blur-md h-screen w-screen  right-0 top-0 bg-opacity-10   "
        >
          <div className=" xl:w-[30rem] overflow-y-scroll relaive w-full bg-[#191A1A] dark:bg-[#FFFAFA] dark:text-black text-white ">
            <div className="flex w-full justify-between items-center p-2 md:p-9">
              <h1 className="font-sans  text-[20px] font-light m-2  dark:text-black text-white">
                My Cart
              </h1>
              <TfiClose
                size={24}
                className=" m-2  cursor-pointer"
                onClick={toggleDropdown}
              />
            </div>
            <div className=" flex flex-col h-full justify-start items-center gap-2">
              {cartItems?.length === 0 ? (
                <div className="fixed top-[23rem] flex flex-col justify-center items-center">
                  <TiShoppingCart size={50} />
                  <p className=" text-white dark:text-black ">
                    Your shopping cart is empty
                  </p>
                  <a href="#products" onClick={toggleDropdown}>
                    <p className="underline font-light">Buy Now!</p>
                  </a>
                </div>
              ) : (
                cartItems.map((product) => (
                  <>
                    <CartItems
                      product={product}
                      key={product._id}
                      productImage={product.image}
                      productName={product.title}
                      productPrice={product.price}
                    />
                    <>
                      <div className="flex fixed  flex-col justify-center items-center text-black text-[1rem] w-full md:w-[30rem]  px-2 py-1 gap-2 mb-5 -bottom-5 dark:bg-[#FFFAFA] bg-[#191A1A]">
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
                          <span>{product.quantity}</span>
                        </button>
                        <button
                          type="button"
                          className="flex justify-center items-center w-full bg-[#000000] p-5 rounded-xl text-white font-bold"
                        >
                          Buy Now
                        </button>
                      </div>
                    </>
                  </>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
