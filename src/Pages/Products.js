import React, { useState } from "react";
import productImage1 from "../assets/images/product1.png";
// import productImage2 from "../assets/images/product2.png";
// import productImage3 from "../assets/images/product3.png";
// import productImage4 from "../assets/images/product4.png";
// import productImage5 from "../assets/images/product5.png";
import PopCard from "./PopCard";
import { GrShop } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import { product } from "../ProductArray";

AOS.init();

const Products = ({ items }) => {
  const [show, setShow] = useState(false);
  const handleOnClose = () => setShow(false);

  return (
    <div
      key={product.id}
      id="products"
      className="flex flex-col  justify-center items-center xl:mt-[10rem] my-[5rem] md:mt-[5rem] md:mb-[10rem] overflow-hidden"
    >
      <h1 className="text-[4rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F]">
        Choose <br /> Your Style
      </h1>
      <div className="flex flex-col ">
        <div className="flex flex-wrap  justify-center items-center gap-7 xl:gap-[4rem] mt-[7rem] gap-y-[4rem]">
          {product.map((product) => (
            <div
              data-aos="fade-left"
              data-aos-duration="1100"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
              className="flex relative flex-col   justify-center items-center bg-[#F1E9E9] dark:bg-[#191A1A] px-[2rem] py-5 rounded-lg h-fit hover:dark:bg-[#F1E9E9] hover:bg-[#191A1A] hover:text-white hover:dark:text-black hover:delay-300  hover:ease-in-out duration-200"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-[10rem] xl:h-[10rem] -top-[3rem] absolute"
              />
              <div className="flex flex-col gap-2 mt-28">
                <h2 className="font-bold">{product.title}</h2>
                <button
                  onClick={() => setShow(true)}
                  className="flex justify-center items-center gap-5 bg-white hover:bg-[#F6E7E6] hover:dark:bg-[#2E2F30] dark:bg-black p-3 rounded-lg hover:text-black text-black dark:text-white "
                >
                  <p className="font-semi-bold">{product.price}</p>
                  <span>
                    <GrShop />
                  </span>
                </button>
              </div>
            </div>
          ))}

          {/* <PopCard onClose={handleOnClose} visible={show} /> */}

     
        </div>
      </div>
    </div>
  );
};

export default Products;
