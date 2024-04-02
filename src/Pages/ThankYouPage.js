import React from "react";
import Navbar2 from "../Components/Navbar2";
import ThankYouSection from "../Sections/ThankYouSection";
import Testimonial2 from "../Sections/Testimonial2";

const ThankYouPage = () => {
  return (
    <div className="dark:bg-[#0E0F10] dark:text-white bg-[#FFFAFA] h-screen">
      <Navbar2 />
      <ThankYouSection />
      <Testimonial2 />
    </div>
  );
};

export default ThankYouPage;
