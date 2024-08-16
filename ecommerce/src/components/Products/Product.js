import React from "react";
import img1 from "../../assets/women/women.png";
import img2 from "../../assets/women/women2.jpg";
import img3 from "../../assets/women/women3.jpg";
import img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";
import Button from "../Button";

export default function Product() {
  function handleButton() {
    alert("App in maintenance");
  }

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
    },
  ];
  return (
    <div className=" mt-14 mb-20">
      <div className=" container">
        <div className=" text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rating Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className=" text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            magnam eos dicta ullam
          </p>
        </div>

        <div>
          <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {Productsdata.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className=" space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className=" h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className=" font-semibold">{data.title}</h3>
                  <p className=" text-sm text-gray-600 font-serif">
                    {data.color}
                  </p>
                  <div className=" flex ````` items-center gap-1">
                    <FaStar className=" text-yellow-400" />
                    <span>{data.Rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex justify-center" data-aos="fade-up">
            <Button
              handleButton={handleButton}
              btnName="View All Buttons"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
