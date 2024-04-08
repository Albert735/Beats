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
    <div className="flex justify-center items-center flex-col md:w-full gap-0 ">
      <form
        action=""
        className="flex justify-center items-center flex-col md:w-full  gap-7"
        onSubmit={handleSubmit(async (data) => {
          await new Promise((resolve) => setTimeout(resolve, 4000));
          console.log(data);
        })}
      >
        {step === 1 && (
          <div className=" flex justify-center items-center flex-col md:w-full gap-7">
            <div className="flex justify-center items-center md:w-full ">
              <span className="w-[30rem]  md:w-[35rem]  ">
                <h1 className="font-bold text-[1.5rem]">Information</h1>
                <p className="font-light">
                  Complete your purchase item by providing your <br /> payment
                  details order.
                </p>
              </span>
            </div>
            <span className="flex flex-col justify-center items-center md:w-full w-[30rem]  gap-5  p-5">
              <span className="flex justify-between w-[30rem]   md:w-[35rem] gap-[2rem]">
                <span>
                  <h1 className="font-bold">First Name</h1>
                  <input
                    type="text"
                    placeholder="Albert"
                    {...register("firstName", {
                      required: "First Name is required ",
                    })}
                    className=" bg-transparent   rounded-lg p-[0.7rem] border-2 border-gray-300"
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
                    className=" bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                  {errors.lastName && (
                    <div className="text-red-500 text-[12px]">
                      {errors.lastName.message}
                    </div>
                  )}
                </span>
              </span>{" "}
              <span className="">
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
                  className=" bg-transparent md:w-[35rem] w-[30rem] rounded-lg p-[0.7rem] border-2 border-gray-300"
                />
                {errors.email && (
                  <div className="text-red-500 text-[12px]">
                    {errors.email.message}{" "}
                  </div>
                )}
              </span>
              <span>
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
                  className=" bg-transparent md:w-[35rem] w-[30rem]  rounded-lg p-[0.7rem] border-2 border-gray-300"
                />
                {errors.telephone && (
                  <div className="text-red-500 text-[12px]">
                    {errors.telephone.message}{" "}
                  </div>
                )}
              </span>
            </span>
            <span className="flex flex-col justify-center items-center md:w-full w-[30rem]  gap-5 p-5">
              <div className="flex justify-center items-center md:w-full ">
                <span className="w-[30rem]  md:w-[35rem]  ">
                  <h1 className="font-bold text-[1.5rem]">Billing Address</h1>
                </span>
              </div>
              <span className="flex flex-col gap-y-4 w-[30rem]  md:w-[35rem] ">
                <span>
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
                <span className="flex justify-between">
                  <span>
                    <h1 className="font-bold">City</h1>
                    <input
                      type="text"
                      className="bg-transparent rounded-lg  w-[14rem] p-[0.7rem] border-2 border-gray-300"
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
                      className="bg-transparent rounded-lg w-[14rem] p-[0.7rem] border-2 border-gray-300"
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
                <span>
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
              className=" bg-black text-white md:w-[35rem] w-[30rem] rounded-lg flex justify-center items-center "
            >
              <p className="p-5 font-bold ">
                {isSubmitting ? "Loading..." : "Next"}
              </p>
              <GrLinkNext />
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col justify-center items-center  w-full gap-11 px-[5rem]">
            <div className="flex justify-between items-center w-[30rem] md:w-[35rem]">
              <div className=" ">
                <h1 className="font-bold text-[1.5rem]"> Payment Details</h1>
              </div>
              <div className="">
                <p className="font-bold">+ Add new</p>
              </div>
            </div>

            <div className="flex justify-center items-center w-[30rem] md:w-[35rem] md:gap-[2.3rem] gap-3">
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
              <span className="flex border-2 rounded-xl">
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
            </div>

            <div className="flex flex-col  justify-center items-center w-[30rem] md:w-[35rem] gap-8">
              <span className="flex flex-col md:flex-row items-center w-[30rem] gap-3 ">
                <span className=" w-full">
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

                <span className="w-full">
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

              <span className="flex flex-col md:flex-row justify-between w-full gap-8">
                <span>
                  <p className="font-bold">Card number</p>
                  <input
                    {...register("cardNumber", {
                      required: "Card number is required",
                      message: "Card number is required",
                    })}
                    type="text"
                    className="md:w-[15rem] w-full bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                  {errors.cardNumber && (
                    <div className="text-red-500 text-[12px]">
                      {errors.cardNumber.message}
                    </div>
                  )}
                </span>
                <span className="flex justify-center items-center gap-[4rem]">
                  <span>
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
                  <span>
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
            <div className="flex justify-between items-center w-[30rem] md:w-[35rem]">
              <button
                type="submit"
                onClick={prevStep}
                className="bg-transparent border-2 rounded-lg w-[10rem]"
              >
                <p className="p-3 font-bold">Back</p>
              </button>
              <button
                type="submit"
                className="bg-black text-white rounded-lg w-[10rem]"
              >
                <p className="p-3 font-bold"> Next</p>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default StepForm;
