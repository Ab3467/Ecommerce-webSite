import React from "react";
import sale from "../../assets/hero/sale.png";
import shopping from "../../assets/hero/shopping.png";
import women from "../../assets/hero/women.png";
import Slider from "react-slick";
import Button from "../Button";

const Imagelist = [
  {
    id: 1,
    img: women,
    title: "30% off on all Women's Wear",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus quidem ullam dolorem, velit est quis, dicta sintiure nobis enim corporis",
  },
  {
    id: 2,
    img: shopping,
    title: "Upto 50% off for all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus quidem ullam dolorem, velit est quis, dicta sintiure nobis enim corporis",
  },
  {
    id: 3,
    img: sale,
    title: "70% off on all Products Sale",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus quidem ullam dolorem, velit est quis, dicta sintiure nobis enim corporis",
  },
];

var setting = {
  dots: true,
  arrows: true,
  infinite: true, // again start the slider when it reaches the last one
  speed: 800, // speed of slider
  slidesToScroll: 1, // how many slides needs to scroll at a time
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,
};

export default function Hero() {
  function handleButton() {
    alert("App in maintenance");
  }

  return (
    <>
      <div className=" relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* Background pattern*/}
        <div className=" h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
        {/*hero section*/}
        <div className=" container pb-8 sm:pb-0 ">
          <Slider {...setting}>
            {Imagelist.map((data) => (
              <div className=" p-7">
                <div className=" grid grid-cols-1 sm:grid-cols-2 p-6">
                  <div className=" flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      className=" text-5xl sm:text-6xl lg:text-7xl font-bold"
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once=" true "
                    >
                      {data.title}
                    </h1>

                    <div
                      className=" text-sm"
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                    >
                      {data.description}
                    </div>

                    <div
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        handleButton={handleButton}
                        btnName="Order Now"
                      ></Button>
                    </div>
                  </div>
                  <div className=" order-2 sm:order-1">
                    <div
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-delay="300"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className=" w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-125 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
