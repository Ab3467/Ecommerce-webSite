// TopProducts.js
import React from 'react';
import img1 from "../../assets/shirts/shirt.png"
import img1 from "../../assets/shirts/shirt2.png"
import img1 from "../../assets/shirts/shirt3.png"

export default function TopProducts() {

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
  return (
    <div>

      <div className="container">
        <div className="text-left mb-10">
          <p data-aos="fade-up" className="text-sm text-primary">Top Rated Products For You</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            magnam eos dicta ullam
          </p>
        </div>

        <div className="">
        {ProductDetails.map((data)=>(
            <div></div>
        ))}
        </div>
      </div>
    </div>
  );
}
