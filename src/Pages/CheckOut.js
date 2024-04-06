import React from "react";
import product1 from "../assets//images/product1.png";
import { IoInformationCircleSharp } from "react-icons/io5";
import FedEx from "../assets/Svg/FedEx.svg";
import { GrLinkNext } from "react-icons/gr";
import DHL from "../assets/Svg/DHL.svg";
import Navbar2 from "../Components/Navbar2";

const CheckOut = () => {
  return (
    <div className="">
      <Navbar2 />
      <div className="flex flex-col md:flex-col xl:flex-row justify-center items-center   md:gap-11 xl:gap-0  ">
        <div className="flex flex-col justify-start items-center xl:w-[100rem] w-full  ">
          <div className="flex flex-col justify-start items-start space-y-12 xl:w-[35rem]">
            <span>
              <h1 className="font-bold text-[1.5rem]">Summary Order</h1>
              <p className="font-light text-slate-500">
                Check your item and select your shipping for better <br />{" "}
                experience order item.
              </p>
            </span>

            <div className="flex flex-col border-2 md:w-[35rem]  rounded-lg gap-y-5 ">
              <div className="flex  justify-between  p-[1rem] w-full">
                <span className="flex gap-6">
                  <img
                    src={product1}
                    alt=""
                    className="xl:h-[5rem] h-[3rem] xl:w-[4rem] "
                  />
                  <span className="space-y-3">
                    <h2 className="font-bold ">
                      Beats Studio Pro{" "}
                      <span className="font-semibold text-slate-400">
                        (Black)
                      </span>{" "}
                    </h2>
                    <p className="font-extrabold">Ghc 1200</p>
                  </span>{" "}
                </span>{" "}
                <p className="text-slate-500"> 42 EU - 8.5 US</p>
              </div>
              <div className="flex  justify-between  p-[1rem] w-full">
                <span className="flex gap-6">
                  <img
                    src={product1}
                    alt=""
                    className="xl:h-[5rem] h-[3rem] xl:w-[4rem]"
                  />
                  <span className="space-y-3">
                    <h2 className="font-bold ">
                      Beats Studio Pro{" "}
                      <span className="font-semibold text-slate-400">
                        (Black)
                      </span>
                    </h2>
                    <p className="font-extrabold">Ghc 1200</p>
                  </span>{" "}
                </span>{" "}
                <p className="text-slate-500"> 42 EU - 8.5 US</p>
              </div>
              <div className="flex  justify-between  p-[1rem] w-full">
                <span className="flex gap-6">
                  <img
                    src={product1}
                    alt=""
                    className="xl:h-[5rem] h-[3rem] xl:w-[4rem]"
                  />
                  <span className="space-y-3">
                    <h2 className="font-bold ">
                      Beats Studio Pro{" "}
                      <span className="font-semibold text-slate-400">
                        (Black)
                      </span>
                    </h2>
                    <p className="font-extrabold">Ghc 1200</p>
                  </span>{" "}
                </span>{" "}
                <p className="text-slate-500"> 42 EU - 8.5 US</p>
              </div>
            </div>

            <div className=" flex flex-col justify-start items-center  ">
              <div className="space-y-2">
                <div className="flex justify-start items-center gap-2">
                  <h2 className="font-bold">Available Shipping Method</h2>{" "}
                  <IoInformationCircleSharp fill="gray" />
                </div>
                <div className="flex border-2 justify-between rounded-lg px-[1.5rem] py-[0.5rem] md:w-[35rem]">
                  <span className="flex justify-start items-center gap-4">
                    <img src={FedEx} alt="" className="md:h-[5rem] h-[3rem]" />
                    <span>
                      <h3 className="font-bold">Fedex Delivery</h3>
                      <p className="font-light text-slate-500">
                        Delivery: 2-3 days work
                      </p>
                    </span>
                  </span>
                  <span className="flex justify-center items-center gap-3">
                    <p className="font-bold">Free</p>
                    <input type="checkbox" className="rounded-full" />
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <h2 className="font-light text-slate-600">
                  Available International Shipping:
                </h2>
              </div>
              <div className="flex border-2 justify-between rounded-lg px-[1.5rem] py-[0.5rem] md:w-[35rem]">
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
                  <input type="checkbox" className="rounded-full" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center w-full xl:w-[100rem] bg-[#F9FAFB] space-y-12 p-11">
          <div className="flex justify-start items-start md:w-[35rem] w-full">
            <span>
              <h1 className="font-bold text-[1.5rem]">Information</h1>
              <p className="font-light">
                Complete your purchase item by providing your <br /> payment
                details order.
              </p>
            </span>
          </div>
          <div className="flex justify-start items-start flex-col w-[35rem] gap-12 ">
            <form action="" className="flex flex-col gap-7 w-full ">
              <span className="flex flex-col gap-5">
                <span className="flex justify-between w-full gap-[2rem]">
                  <span>
                    <h1 className="font-bold">First Name</h1>
                    <input
                      type="text"
                      placeholder="Albert"
                      className=" bg-transparent w-[15rem]  rounded-lg p-[0.7rem] border-2 border-gray-300"
                    />
                  </span>
                  <span>
                    <h1 className="font-bold">Last Name</h1>
                    <input
                      type="text"
                      placeholder="Fletcher"
                      className=" bg-transparent w-[15rem]  rounded-lg p-[0.7rem] border-2 border-gray-300"
                    />
                  </span>
                </span>{" "}
                <span className="">
                  <h1 className="font-bold">Email Address</h1>
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    className=" bg-transparent w-full rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                </span>
                <span>
                  <h1 className="font-bold">Telephone</h1>
                  <input
                    type="number"
                    placeholder="+233"
                    className=" bg-transparent w-full rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                </span>
              </span>

              <span>
                <h1 className="font-bold text-[1.2rem]">Billing Address</h1>
                <span className="flex flex-col gap-y-4">
                  <span>
                    <h1 className="font-bold">Country</h1>
                    <input
                      type="text"
                      className=" w-full bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
                      placeholder=""
                    />
                  </span>
                  <span className="flex justify-between">
                    <span>
                      <h1 className="font-bold">City</h1>
                      <input
                        type="text"
                        className="bg-transparent rounded-lg  w-[14rem] p-[0.7rem] border-2 border-gray-300"
                        placeholder=""
                      />
                    </span>
                    <span>
                      <h1 className="font-bold">Zip Code</h1>
                      <input
                        type="text"
                        className="bg-transparent rounded-lg w-[14rem] p-[0.7rem] border-2 border-gray-300"
                        placeholder=""
                      />
                    </span>
                  </span>
                  <span>
                    <h1 className="font-bold">Street/Region</h1>
                    <input
                      type="text"
                      className="w-full bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
                      placeholder=""
                    />
                  </span>
                </span>
              </span>
            </form>
            <button className=" bg-black text-white w-full rounded-lg flex justify-center items-center">
              <p className="p-5 font-bold "> Next</p>
              <GrLinkNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
