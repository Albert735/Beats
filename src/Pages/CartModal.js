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

  const { cartItems, totalQuantity } = useStateContext();

  return (
    <div className=" relative  ">
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
                  
                    <CartItems
                      product={product}
                      key={product._id}
                      productImage={product.image}
                      productName={product.title}
                      productPrice={product.price}
                    />
                  
                      
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
