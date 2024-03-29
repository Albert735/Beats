import React from "react";
import FormSection from "../Sections/FormSection";
import OrderSection from "../Sections/OrderSection";
import { useStateContext } from "../Context/StateContext";
// import addtocart from "../assets/Svg/Add to Cart-amico .svg";

const CheckOut = (product) => {
  const { cartItems } = useStateContext();
  return (
    <div className="flex justify-center items-start px-[10rem] py-[7rem] gap-[5rem] dark:bg-[#0E0F10] dark:text-white bg-[#FFFAFA] h-full ">
      <FormSection />

      <div>
        {cartItems.map((product) => (
          <OrderSection
            key={product._id}
            product={product}
            productImage={product.image}
            productName={product.title}
            productPrice={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
