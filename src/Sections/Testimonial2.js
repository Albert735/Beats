import React from "react";
import Profile1 from "../assets/images/Mari Juliano.jpeg";
import Profile2 from "../assets/images/Free Photo _ Black boy posing.jpeg";
import Profile3 from "../assets/images/smiley-african-woman-with-golden-earrings.jpg";
import Profile4 from "../assets/images/portrait-african-american-man.jpg";

const Testimonial2 = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex gap-7">
        <div className="flex flex-col justify-center items-center p-5 w-[20rem]  rounded-xl shadow-lg  backdrop-blur-xl  bg-black/5  gap-y-5">
          <span className="flex justify-start items-center gap-3 w-full">
            <img
              src={Profile3}
              alt=""
              className="h-[3rem] w-[3rem] rounded-full object-cover"
            />
            <h2>Mari Juliano</h2>
          </span>

          <p className=" leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            explicabo tenetur consequuntur porro, vel laboriosam a ipsum
            corporis excepturi.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-5 w-[20rem]  shadow-lg backdrop-blur-xl  bg-black/5 rounded-xl gap-y-5 ">
          <span className="flex justify-start items-center gap-3 w-full">
            <img
              src={Profile1}
              alt=""
              className="h-[3rem] w-[3rem] rounded-full object-cover"
            />
            <h2>Mari Juliano</h2>
          </span>

          <p className=" leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            explicabo tenetur consequuntur porro, vel laboriosam a ipsum
            corporis excepturi.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-5 w-[20rem]  shadow-lg backdrop-blur-xl  bg-black/5 rounded-xl gap-y-5  leading-loose">
          <span className="flex justify-start items-center gap-3 w-full">
            <img
              src={Profile2}
              alt=""
              className="h-[3rem] w-[3rem] object-cover rounded-full"
            />
            <h2>Mari Juliano</h2>
          </span>

          <p className=" leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            explicabo tenetur consequuntur porro, vel laboriosam a ipsum
            corporis excepturi.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-5 w-[20rem]   shadow-lg backdrop-blur-xl  bg-black/5 gap-y-5 rounded-xl leading-loose">
          <span className="flex justify-start items-center gap-3 w-full">
            <img
              src={Profile4}
              alt=""
              className="h-[3rem] w-[3rem] object-cover rounded-full"
            />
            <h2>Mari Juliano</h2>
          </span>

          <p className=" leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            explicabo tenetur consequuntur porro, vel laboriosam a ipsum
            corporis excepturi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial2;
