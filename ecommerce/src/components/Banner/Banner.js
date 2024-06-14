import React from "react";
import img from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io";
import { GiFoodTruck } from "react-icons/gi";

export default function Banner() {
  return (
    <div className=" min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className=" container">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div data-aos="zoom-in">
            <img
              src={img}
              alt=""
              className=" max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          <div className=" flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className=" text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% Off
            </h1>
            <p className=" text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div>
              <div>
                <GrSecure />
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
