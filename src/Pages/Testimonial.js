import React from "react";
import man from "../assets/images/man.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Testimonial = () => {
  const germanFlag = "🇩🇪";
  const unitedStates = "🇺🇸";

  return (
    <div className="flex relative flex-col md:flex-col justify-center  items-center max-w-screen-xl mx-auto">
      <div className="flex justify-center items-start ">
        <h1 className="text-[1.5rem]  md:text-[3rem] xl:text-[4.5rem] font-mono font-extralight leading-tight xl:leading-normal md:leading-tight ">
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
      <div className="flex justify-center items-center flex-col-reverse md:flex-row-reverse xl:mb-[40rem] md:mb-[30rem] mb-[30rem] my-[3rem]  ">
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          data-aos-delay="ease-in-out"
          className="flex justify-cneter items-center absolute md:right-[7rem] right-[1rem] top-[4.5rem] md:top-[9rem] lg:right-[14rem] lg:top-[9rem] xl:right-[15rem] xl:top-[13rem] z-10 md:z-0"
        >
          <img
            src={man}
            alt=""
            className="xl:h-[30rem] md:h-[25rem] md:w-[16.5rem] xl:w-[20rem] h-[15rem] rounded-[1rem] md:rounded-[1rem] brightness-125"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-delay="ease-in-out"
          className="flex justify-center items-center lg:right-[27rem] right-[6rem]  md:right-[20rem] xl:right-[40rem] md:bottom-[8rem] xl:bottom-[15rem] bottom-[3rem] absolute xl:w-[20rem] xl:space-y-5"
        >
          <div className="md:px-6 md:py-4 xl:px-7 xl:py-5 p-4 bg-black/10 hover:text-gray-200 dark:bg-white/5 hover:bg-black/30 dark:hover:bg-gradient-to-r from-white/20 to-white/10 hover:delay-150  backdrop-blur-xl transition-all hover:ease-in-out hover:duration-200 rounded-[1rem] md:rounded-[1rem] space-y-3 ">
            <div>
              <span className="text-[2rem] font-serif italic">"</span>
            </div>
            <div>
              <p className="font-sans md:text-[1rem] xl:text-[1.3rem] md:w-[20rem] lg:w-[23rem]  leading-shrug  xl:w-[33rem] w-[15rem]">
                I've learned a positively Immeasurable amount of things from
                Timbaland and Natalie Portman. It gave me sense of possibility.
                Like I can actually do it.I can get a billboard hit single, and
                it's not far away."
              </p>
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
