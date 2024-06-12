// TopProducts.js
import React from 'react';
import img1 from "../../assets/shirts/shirt.png"
import img2 from "../../assets/shirts/shirt2.png"
import img3 from "../../assets/shirts/shirt3.png"

export default function TopProducts() {

    const ProductDetails = [
        {
          id: 1,
          img: img1,
          title: "Casual Wear",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus quidem ullam dolorem, velit est quis, dicta sintiure nobis enim corporis",
        },
        {
          id: 2,
          img: img2,
          title: "Printed shirt",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus quidem ullam dolorem, velit est quis, dicta sintiure nobis enim corporis",
        },
        {
          id: 3,
          img: img3,
          title: "Women shirt",
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
            <div className='' key={data.id}>
                <div>
                    <img src={data.img} alt="" />
                </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}
