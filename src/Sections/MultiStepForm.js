import React, { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { useForm } from "react-hook-form";
import visa from "../assets/Svg/visa-2.svg";
import paypal from "../assets/Svg/paypal.svg";
import mastercard from "../assets/Svg/mastercard.svg";

const StepForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex justify-center items-start flex-col w-full  md:w-full  ">
      <form
        action=""
        className="flex justify-center items-center flex-col md:w-full w-full  gap-7"
        onSubmit={handleSubmit(async (data) => {
          await new Promise((resolve) => setTimeout(resolve, 4000));
          console.log(data);
        })}
      >
        {step === 1 && (
          <div className=" flex justify-center items-center flex-col md:w-full w-full gap-7">
            <div className="flex justify-center items-center w-full ">
              <span className="w-full  md:w-[35rem]  ">
                <h1 className="font-bold text-[1.5rem]">Information</h1>
                <p className="font-light">
                  Complete your purchase item by providing your <br /> payment
                  details order.
                </p>
              </span>
            </div>
            <span className="flex flex-col justify-center items-center md:w-full w-full  gap-5 ">
              <span className="flex justify-between w-full  md:w-[35rem] gap-[2rem]">
                <span>
                  <h1 className="font-bold">First Name</h1>
                  <input
                    type="text"
                    placeholder="Albert"
                    {...register("firstName", {
                      required: "First Name is required ",
                    })}
                    className=" bg-transparent w-full rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                  {errors.firstName && (
                    <div className="text-red-500 text-[12px]">
                      {errors.firstName.message}
                    </div>
                  )}
                </span>
                <span>
                  <h1 className="font-bold">Last Name</h1>
                  <input
                    type="text"
                    placeholder="Fletcher"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                    className=" bg-transparent w-full rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                  {errors.lastName && (
                    <div className="text-red-500 text-[12px]">
                      {errors.lastName.message}
                    </div>
                  )}
                </span>
              </span>{" "}
              <span className=" w-full md:w-[35rem]">
                <h1 className="font-bold">Email Address</h1>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  {...register("email", {
                    required: "Email is required",
                    validate: (value) => {
                      if (!value.includes("@")) {
                        return "Please enter a valid email address that includes @";
                      }
                      return true;
                    },
                  })}
                  className=" bg-transparent md:w-[35rem] w-full rounded-lg p-[0.7rem] border-2 border-gray-300"
                />
                {errors.email && (
                  <div className="text-red-500 text-[12px]">
                    {errors.email.message}{" "}
                  </div>
                )}
              </span>
              <span className="w-full md:w-[35rem]">
                <h1 className="font-bold">Telephone</h1>
                <input
                  type="number"
                  placeholder="+233"
                  {...register("telephone", {
                    required: "Telephone is required",
                    minLength: {
                      value: 10,
                      message: "Telephone must be 10 digits",
                    },
                  })}
                  className=" bg-transparent md:w-[35rem] w-full  rounded-lg p-[0.7rem] border-2 border-gray-300"
                />
                {errors.telephone && (
                  <div className="text-red-500 text-[12px]">
                    {errors.telephone.message}{" "}
                  </div>
                )}
              </span>
            </span>
            <span className="flex flex-col justify-center items-center md:w-full w-full  gap-5 ">
              <div className="flex justify-center items-center w-full ">
                <span className="w-full  md:w-[35rem]  ">
                  <h1 className="font-bold text-[1.5rem]">Billing Address</h1>
                </span>
              </div>
              <span className="flex flex-col justify-center items-center gap-y-4 w-full md:w-[35rem] ">
                <span className="w-full">
                  <h1 className="font-bold">Country</h1>
                  <input
                    type="text"
                    className=" w-full bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
                    placeholder=""
                    {...register("country", {
                      required: "Country is required",
                    })}
                  />
                  {errors.country && (
                    <div className="text-red-500 text-[12px]">
                      {errors.country.message}
                    </div>
                  )}
                </span>
                <span className="flex justify-between w-full gap-[2rem]">
                  <span>
                    <h1 className="font-bold">City</h1>
                    <input
                      type="text"
                      className="bg-transparent w-full rounded-lg  p-[0.7rem] border-2 border-gray-300"
                      placeholder=""
                      {...register("city", { required: "City is required" })}
                    />
                    {errors.city && (
                      <div className="text-red-500 text-[12px]">
                        {errors.city.message}
                      </div>
                    )}
                  </span>
                  <span>
                    <h1 className="font-bold">Zip Code</h1>
                    <input
                      type="text"
                      className="bg-transparent w-full rounded-lg  p-[0.7rem] border-2 border-gray-300"
                      placeholder=""
                      {...register("zipCode", {
                        required: "Zip Code is required",
                        minLength: {
                          value: 4,
                          message: "Zip Code must be 4 digits",
                        },
                      })}
                    />
                    {errors.zipCode && (
                      <div className="text-red-500 text-[12px]">
                        {errors.zipCode.message}
                      </div>
                    )}
                  </span>
                </span>
                <span className="w-full">
                  <h1 className="font-bold">Street/Region</h1>
                  <input
                    type="text"
                    className=" bg-transparent w-full rounded-lg p-[0.7rem] md:w-[35rem] border-2 border-gray-300"
                    placeholder=""
                    {...register("street", {
                      required: "Street is required",
                    })}
                  />
                  {errors.street && (
                    <div className="text-red-500 text-[12px]">
                      {errors.street.message}
                    </div>
                  )}
                </span>
              </span>
            </span>
            <button
              onClick={nextStep}
              disabled={isSubmitting}
              type="submit"
              className=" bg-black text-white md:w-[35rem] w-full rounded-lg flex justify-center items-center "
            >
              <p className="p-5 font-bold ">
                {isSubmitting ? "Loading..." : "Next"}
              </p>
              <GrLinkNext />
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col justify-center items-center  w-full gap-11 md:px-[5rem]">
            <div className="flex justify-between items-center w-full md:w-[35rem]">
              <div className=" ">
                <h1 className="font-bold text-[1.5rem]"> Payment Details</h1>
              </div>
              <div className="">
                <p className="font-bold cursor-pointer">+ Add new</p>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start w-full md:w-[35rem] gap-4 ">
              <div>
                <p>
                  In order to use your Apple Acount Balance,Sign In with your
                  Apple ID
                </p>
              </div>
              <div className="gap-1 border-2 border-gray-300 p-3 w-full rounded-xl active:border-blue-600 cursor-pointer">
                <h1 className="font-bold">Credit Card or Debit card</h1>
                <p className="text-[14px]">Apple Card, Visa, Mastercard, Amex <br /> Discover, Unionpay</p>
              </div>
            </div>

            <div className="flex  justify-center items-center w-full md:w-[35rem] md:gap-[2.3rem] gap-3">
              <span className="flex border-2 rounded-xl">
                <span className="p-3 flex justify-between items-start w-[10rem]">
                  <input type="checkbox" className="rounded-full mt-2" />
                  <span className="leading-loose text-[12px]">
                    <p>**** 1234</p>
                    <p>Visa Card</p>
                  </span>
                  <img src={visa} alt="" className="h-[2rem]" />
                </span>
              </span>
              <span className="hidden md:flex border-2 rounded-xl">
                <span className="p-3 flex justify-between items-start w-[10rem]">
                  <input type="checkbox" className="rounded-full mt-2" />
                  <span className="leading-loose text-[12px]">
                    <p>**** 1234</p>
                    <p>Mastercard</p>
                  </span>
                  <img src={mastercard} alt="" className="h-[2rem]" />
                </span>
              </span>
              <span className="flex border-2 rounded-xl">
                <span className="p-3 flex justify-between items-start w-[10rem]">
                  <input type="checkbox" className="rounded-full mt-2" />
                  <span className="leading-loose text-[12px]">
                    <p>**** 1234</p>
                    <p>Paypal</p>
                  </span>
                  <img src={paypal} alt="" className="h-[2rem]" />
                </span>
              </span>
              <span className="hidden flex border-2 rounded-xl">
                <span className="p-3 flex justify-between items-start w-[10rem]">
                  <input type="checkbox" className="rounded-full mt-2" />
                  <span className="leading-loose text-[12px]">
                    <p>**** 1234</p>
                    <p>Paypal</p>
                  </span>
                  <img src={paypal} alt="" className="h-[2rem]" />
                </span>
              </span>
            </div>

            <div className="flex flex-col  justify-center items-center w-full md:w-[35rem] gap-8">
              <span className="flex flex-col md:flex-row justify-center items-center w-full gap-3 ">
                <span className="w-full md:w-[35rem]">
                  <p className="font-bold">First Name</p>
                  <input
                    {...register("firstName", {
                      required: "First Name is required",
                      message: "First Name is required",
                    })}
                    type="text"
                    className=" bg-transparent w-full rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                  {errors.firstName && (
                    <div className="text-red-500 text-[12px]">
                      {errors.firstName.message}
                    </div>
                  )}
                </span>

                <span className="w-full md:w-[35rem]">
                  <p className="font-bold">Last Name</p>
                  <input
                    {...register("lastName", {
                      required: "Last Name is required",
                      message: "Last Name is required",
                    })}
                    type="text"
                    className=" w-full  bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                  {errors.lastName && (
                    <div className="text-red-500 text-[12px]">
                      {errors.lastName.message}
                    </div>
                  )}
                </span>
              </span>

              <span className="flex flex-col  justify-center items-center w-full md:w-[35rem] gap-8">
                <span className="w-full">
                  <p className="font-bold">Card number</p>
                  <input
                    {...register("cardNumber", {
                      required: "Card number is required",
                      message: "Card number is required",
                    })}
                    type="text"
                    className=" w-full bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                  {errors.cardNumber && (
                    <div className="text-red-500 text-[12px]">
                      {errors.cardNumber.message}
                    </div>
                  )}
                </span>
                <span className="flex justify-between items-center gap-3 w-full ">
                  <span className="w-full md:w-[35rem]">
                    <p className="font-bold">Expiration date</p>
                    <input
                      {...register("expirationDate", {
                        required: "Expiration date is required",
                        message: "Expiration date is required",
                      })}
                      type="text"
                      className="bg-transparent w-full rounded-lg p-[0.7rem] border-2 border-gray-300"
                    />
                    {errors.expirationDate && (
                      <div className="text-red-500 text-[12px]">
                        {errors.expirationDate.message}
                      </div>
                    )}
                  </span>
                  <span className="w-full md:w-[35rem]">
                    <p className="font-bold">CVV</p>
                    <input
                      {...register("cvv", {
                        required: "CVV is required",
                        message: "CVV is required",
                      })}
                      type="text"
                      className="bg-transparent w-full rounded-lg p-[0.7rem] border-2 border-gray-300"
                    />
                    {errors.cvv && (
                      <div className="text-red-500 text-[12px]">
                        {errors.cvv.message}
                      </div>
                    )}
                  </span>
                </span>
              </span>
            </div>
            <div className="flex justify-start items-center w-full md:w-[35rem] gap-3">
              {" "}
              <input type="checkbox" name="" id="" className="rounded-full" />
              <span>
                <p className="font-bold">Save my info for 1-click checkout </p>
                <p className="font-light text-gray-500">
                  Pay faster and everywhere link is accepted
                </p>
              </span>
            </div>
            <div className="flex justify-between items-center w-full md:w-[35rem]">
              <button
                type="submit"
                onClick={prevStep}
                className="bg-transparent w-[10rem]  border-2 rounded-lg "
              >
                <p className="p-3 font-bold">Back</p>
              </button>
              <button
                type="submit"
                className="bg-black text-white rounded-lg  w-[10rem]"
              >
                <p className="p-3 font-bold "> Next</p>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default StepForm;
