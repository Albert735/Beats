import React from "react";
import FormSection from "../Sections/FormSection";
import OrderSection from "../Sections/OrderSection";
import { useStateContext } from "../Context/StateContext";
import emptyCart from "../assets/Svg/Add to Cart-amico .svg";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { cartItems, totalPrice } = useStateContext();
  return (
    <div className="flex flex-col xl:flex-row justify-center items-start px-[10rem]  gap-[5rem] dark:bg-[#0E0F10] dark:text-white bg-[#FFFAFA] h-screen ">
      <div className="flex justify-center items-center flex-col gap-2 p-5">
        {cartItems?.length === 0 ? (
          <div>
            <div className="flex flex-col justify-center items-center ">
              <img src={emptyCart} alt="" className="h-[45rem]" />
              <Link to="/">
                <button className="bg-blue-600 w-[20rem] p-[1rem] rounded-lg">
                  <p className="text-white">Shop Now</p>
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-start gap-[5rem] ">
            <FormSection />
            <div>
              <h1 className="text-[2rem]">Order Summary</h1>
              {cartItems.map((product) => (
                <div key={product._id}>
                  <OrderSection
                    product={product}
                    productImage={product.image}
                    productName={product.title}
                    productPrice={product.price}
                  />
                </div>
              ))}
              <div>
                <div className="w-full space-y-[3rem] p-5 border-b-2">
                  <span className="flex justify-between">
                    <h1 className="font-bold">Subtotal</h1>
                    <p>Ghc 1200</p>
                  </span>
                  <span className="flex justify-between">
                    <h1 className="font-bold">Shipping</h1>
                    <p>Ghc 1200</p>
                  </span>
                </div>
                <div className="flex justify-between w-full p-5">
                  <span>
                    <p className="font-bold">Total</p>
                  </span>
                  <span>
                    <p>Ghc {totalPrice}</p>
                  </span>
                </div>
                <div className="flex flex-col justify-center w-full p-5 gap-y-4">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="rounded-lg bg-transparent"
                  />
                  <button className="bg-blue-600 w-full rounded-lg ring">
                    <p className="p-3 text-white">Apply</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
