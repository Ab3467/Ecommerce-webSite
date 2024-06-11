import React from "react";
import sale from "../../assets/hero/sale.png";
import shopping from "../../assets/hero/shopping.png";
import women from "../../assets/hero/women.png";
import Slider from "react-slick";

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

 var setting = {
  dots: false,
  arrow: false,
  infinite: true,
  speed : 800,
  slidesToScroll: 1,
  autoPlay : true,
  autoPlaySpeed : 4000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true
 }

export default function Hero() {
  return (
    <>
      <div className=" relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* Background pattern*/}
        <div className=" h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
        {/*hero section*/}
        <div className=" container pb-8 sm:pb-0 ">

          <Slider>
          <div className="">
            <div className=" grid grid-cols-1 sm:grid-cols-2">
              <div className=" flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1 className=" text-5xl sm:text-6xl lg:text-7xl font-bold">
                  Upto 50% off for all Men's wear
                </h1>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus quidem ullam dolorem, velit est quis, dicta sint iure
                  nobis enim corporis!

                </p>
                <div className="">
                  <button className=" bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    Order now
                  </button>
                </div>
              </div>
              <div className=" order-2 sm:order-1">
                <div className=" relative z-10">
                  <img
                    src={women}
                    alt=""
                    className=" w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          </Slider>
          
        </div>
      </div>
    </>
  );
}
