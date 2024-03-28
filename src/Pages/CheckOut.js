import React from "react";
import FormSection from "../Sections/FormSection";
import OrderSection from "../Sections/OrderSection";
// import Navbar from "../Components/Navbar";

const CheckOut = () => {
  return (
    <div className="flex justify-center items-center max-w-screen-xl mx-auto gap-[6rem] ">
      <div>
        <FormSection />
      </div>
      <div>
        <OrderSection />
      </div>
    </div>
  );
};

export default CheckOut;
