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

        <div className=" h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">

        </div>
        {/*hero section*/}
        <div className=" container pb-8 sm:pb-0">
           <div className="">
            <div className=" grid grid-cols-1 sm:grid-cols-2">
              <div className="">
                <h1></h1>
                <p></p>
                <div className="">
                  <button>Order now</button>
                </div>
              </div>
            </div>
           </div>
        </div>
      </div>
    </>
  );
}
