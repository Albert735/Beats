import React from "react";
import man from "../assets/images/man.jpeg";

const Testimonial = () => {
  const germanFlag = "🇩🇪";
  const unitedStates = "🇺🇸";
  return (
    <div className="flex relative flex-col md:flex-col justify-center  items-center max-w-screen-xl mx-auto md:my-[4rem] my-20">
      <div className="flex justify-center items-start ">
        <h1 className="text-[2.5rem] ml-[3rem] md:ml-0 md:text-[4rem]  font-mono font-extralight leading-tight xl:leading-normal md:leading-tight ">
          Our members' <br />{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] ">
            insight{" "}
          </span>{" "}
          and{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] ">
            takeaways
          </span>
        </h1>
      </div>
      <div className="xl:flex-row-reverse  xl:mb-[35rem] flex justify-center items-center flex-col    ">
        <div className="xl:absolute right-[15rem] xl:top-[13rem] items-center justify-center flex">
          <img
            src={man}
            alt=""
            className="xl:h-[30rem] md:h-[10rem] w-[23rem] rounded-[1rem] md:rounded-[1rem] brightness-125"
          />
        </div>

        <div className="xl:space-y-5  absolute xl:right-[30rem]  xl:top-[23rem]   top-[27rem] flex justify-center items-center ">
          <div className="px-7 py-5  bg-black/10 hover:text-gray-200 dark:bg-white/5 hover:bg-black/30 dark:hover:bg-gradient-to-r from-white/20 to-white/10 hover:delay-150  backdrop-blur-xl transition-all hover:ease-in-out hover:duration-200 rounded-[1rem] md:rounded-[1rem] space-y-3">
            <div>
              <span className="text-[2rem] font-serif italic">"</span>
            </div>

            <div>
              <div className="font-sans md:text-[1.3rem] md:w-[37rem] xl:w-[35rem] w-[20rem]">
                I've learned a positively Immeasurable amount of things from{" "}
                Timbaland and Natalie Portman. It gave me sense of possibility.{" "}
                Like I can actually do it.I can get a billboard hit single, and{" "}
                it's not far away."
              </div>
            </div>

            <div className="gap-2">
              <p className="font-sans text-[1rem] text-slate-700 dark:text-slate-400">
                Music Producer
              </p>
              <p className="font-sans text-[1.3rem] text-slate-700 dark:text-slate-400 ">
                Christian Hamilton{" "}
                <span>
                  {germanFlag}/{unitedStates}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
