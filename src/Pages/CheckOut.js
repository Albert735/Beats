import React from "react";
import FormSection from "../Sections/FormSection";
import OrderSection from "../Sections/OrderSection";
// import Navbar from "../Components/Navbar";

const CheckOut = () => {
  return (
    <div className="flex flex-col-reverse  md:flex-row justify-center items-start  md:p-[4rem] gap-3 md:gap-[5rem] w-full">
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
