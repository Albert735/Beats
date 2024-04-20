import React from "react";
import { IoInformationCircleSharp } from "react-icons/io5";
import FedEx from "../assets/Svg/FedEx.svg";
import DHL from "../assets/Svg/DHL.svg";
import Navbar2 from "../Components/Navbar2";
import { useStateContext } from "../Context/StateContext";
import CheckOutItem from "../CheckOutItem";
import StepForm from "../Sections/MultiStepForm";

const CheckOut = () => {
  const { cartItems, totalQuantity, step } = useStateContext();

  return (
    <div>
      <Navbar2 step={step} />
      <div className="flex flex-col md:flex-col xl:flex-row justify-center items-start h-full gap-9   md:gap-11 xl:gap-0  ">
        <div className="flex flex-col justify-center items-center xl:w-[100rem] md:w-full w-full ">
          <div className="flex flex-col justify-center items-center  w-full p-3 ">
            <span className="w-full md:w-[35rem]">
              <h1 className="font-bold text-[1.5rem]">Summary Order</h1>
              <p className="font-light text-slate-500">
                Check your item and select your shipping for better <br />{" "}
                experience order item.
              </p>
            </span>
          </div>

          <div className="flex flex-col justify-center items-center  w-full xl:w-full p-3">
            <span className="md:w-[35rem] w-full">
              <p className="text-start">
                <span className="font-bold ">Total Quantity: </span>
                <span className="Font-light">{totalQuantity}</span>
              </p>
            </span>
            <div className="flex flex-col  border-2  md:w-[35rem] h-[27rem] px-3  md:px-[2rem] py-[1rem] w-full  rounded-lg gap-y-7 overflow-y-auto ">
              {cartItems.map((product) => (
                <CheckOutItem
                  product={product}
                  key={product._id}
                  productImage={product.image}
                  productName={product.title}
                  productPrice={product.price}
                />
              ))}
            </div>
          </div>

          <div className="pb-[1rem] flex flex-col justify-center items-center  w-full gap-8 p-3">
            <div className=" flex flex-col justify-center items-start w-full md:w-[35rem]">
              <div className="w-full ">
                <div className="flex justify-start items-center gap-2">
                  <h2 className="font-bold">Available Shipping Method</h2>{" "}
                  <IoInformationCircleSharp fill="gray" />
                </div>

                <button className="flex border-2 justify-between items-center rounded-lg px-[1.5rem] py-[0.5rem] md:w-[35rem] w-full">
                  <span className="flex justify-center items-center gap-4">
                    <img src={FedEx} alt="" className="md:h-[5rem] h-[3rem]" />
                    <span>
                      <h3 className="font-bold">FedEX Delivery</h3>
                      <p className="font-light text-slate-500">
                        Delivery: 2-3 days work
                      </p>
                    </span>
                  </span>
                  <span className="flex justify-center items-center gap-3">
                    <p className="font-bold">Free</p>
                    <input
                      name="shipping"
                      value="FedEX"
                      type="radio"
                      className="rounded-full"
                    />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full md:w-[35rem]">
              <div>
                <h2 className="font-light text-slate-600">
                  Available International Shipping:
                </h2>
              </div>
              <button className="flex border-2 justify-between items-center rounded-lg px-[1.5rem] py-[0.5rem] md:w-[35rem] w-full">
                <span className="flex justify-start items-center gap-4">
                  <img src={DHL} alt="" className="md:h-[5rem] h-[3rem]" />
                  <span>
                    <h3 className="font-bold">DHL Delivery</h3>
                    <p className="font-light text-slate-500">
                      Delivery: 1-3 days work
                    </p>
                  </span>
                </span>
                <span className="flex justify-center items-center gap-3">
                  <p className="font-bold">Free</p>
                  <input
                    type="radio"
                    name="shipping"
                    value="DHL"
                    className="rounded-full"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center  items-center xl:w-[100rem] md:w-full w-full  bg-[#F9FAFB] p-3">
          <StepForm />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
