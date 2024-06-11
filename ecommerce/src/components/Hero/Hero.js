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

        <div></div>
        {/*hero section*/}
      </div>
    </>
  );
}
