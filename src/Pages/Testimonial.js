import React from "react";
import man from "../assets/images/man.jpeg";

const Testimonial = () => {
  return (
    <div className="flex  relative  flex-col justify-center  items-center max-w-screen-xl mx-auto my-[4rem]">
      <div>
        <h1 className="text-[2rem] ml-[3rem] md:ml-0 md:text-[4rem]  font-mono font-extralight leading-tight xl:leading-snug md:leading-tight ">
          Our members' <br /> insight and takeaways
        </h1>
      </div>
      <div className="flexflex-row-reverse xl:pb-[35rem]  ">
        <div className="absolute right-[15rem] xl:top-[13rem]">
          <img src={man} alt="" className="xl:h-[30rem]  rounded-[1rem]   " />
        </div>

        <div className="space-y-5 absolute xl:right-[30rem] xl:top-[23rem]  ">
          <div className=" p-4 bg-transparent backdrop-blur-xl rounded-[1rem] space-y-3">
            <div>
              <span className="text-[2.5rem] font-serif italic">"</span>
            </div>

            <div>
              <p className="font-sans text-[1.3rem] ">
                I've learned a positively Immeasurable amount of things from{" "}
                <br />
                Timbaland and Natalie Portman. It gave me sense of possibility.{" "}
                <br />
                Like I can actually do it. can cera billboard hit single, and{" "}
                <br />
                it's not far away."
              </p>
            </div>

            <div>
              <p className="font-sans text-[1.3rem] text-slate-700 dark:text-slate-500">
                Christian Hamilton
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
