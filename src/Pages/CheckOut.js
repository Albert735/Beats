import React from "react";
import FormSection from "../Sections/FormSection";
import OrderSection from "../Sections/OrderSection";
import Navbar from "../Components/Navbar";
import { useStateContext } from "../Context/StateContext";
import addtocart from "../assets/Svg/Add to Cart-amico .svg";

const CheckOut = () => {
  const { cartItems } = useStateContext();
  return (
    <div className="">
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center items-start md:pt-[7rem] xl:gap-[10rem] dark:bg-[#0E0F10] dark:text-white">
        <div>
          {cartItems?.lenght === 0 ? (
            <div>
              <img src={addtocart} alt="Add to Cart" className="h-[30rem]" />
            </div>
          ) : (
            cartItems.map((product) => (
              <div className="flex flex-col xl:flex-row xl:gap-[10rem]">
                <div className="">
                  <FormSection product={product} />
                </div>
                <div>
                  <OrderSection
                    key={product._id}
                    product={product}
                    productImage={product.image}
                    productName={product.title}
                    productPrice={product.price}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
