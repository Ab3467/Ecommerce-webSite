// TopProducts.js
import React from 'react';

export default function TopProducts() {
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
