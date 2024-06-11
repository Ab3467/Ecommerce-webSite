import React from "react";
import img1 from "../../assets/women/women.png"
import img2 from "../../assets/women/women2.png"
import img3 from "../../assets/women/women3.png"
import img4 from "../../assets/women/women4.png"

export default function Product() {

const Productsdata = [
    {
        id: 1,
        img: img1,
        title: "Women Ethnic",
        Rating: 5,
        color: "white",
        aosDelay: "0",
    },
    {
        id: 2,
        img: img2,
        title: "Women western",
        Rating: 4.5,
        color: "red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: img3,
        title: "Goggles",
        Rating: 4.7,
        color: "brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: img4,
        title: "Printed T-Shirt",
        Rating: 4.4,
        color: "yellow",
        aosDelay: "600",
    },
    {
        id: 5,
        img: img2,
        title: "Fashion T-Shirt",
        Rating: 4.5,
        color: "pink",
        aosDelay: "800",
    }
]
  return (
    <div className=" mt-14 mb-12">
      <div className=" container">
        <div className=" text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top selling Products For You</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className=" text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            magnam eos dicta ullam
          </p>
        </div>

        <div className="">
            <div className="">
                <img src="" alt="" 
                className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5"/>

                {
                    Productsdata.map((data)=>(
                        <div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
}
