import React from "react";

export default function Product() {
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
                className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4"/>
            </div>
        </div>
      </div>
    </div>
  );
}
