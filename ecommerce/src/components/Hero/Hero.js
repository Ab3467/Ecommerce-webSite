import React from "react";
import sale from "../../assets/hero/sale.png";
import shopping from "../../assets/hero/shopping.png";
import women from "../../assets/hero/women.png";

const Imagelist = [
  {
    id: 1,
    img: women,
    title: "",
    description: "",
  },
  {
    id: 2,
    img: shopping,
    title: "",
    description: "",
  },
  {
    id: 3,
    img: sale,
    title: "",
    description: "",
  },
];

export default function Hero() {
  return (
    <>
      <div className=" relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* Background pattern*/}
        <div className=" h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
        {/*hero section*/}
        <div className=" container pb-8 sm:pb-0 ">
          <div className="">
            <div className=" grid grid-cols-1 sm:grid-cols-2">
              <div className=" flex flex-col justify-center">
                <h1 className=" text-5xl sm:text-6xl lg:text-7xl font-bold"></h1>
                <p className=" text-sm"></p>
                <div className="">
                  <button className=" bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    Order now
                  </button>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
