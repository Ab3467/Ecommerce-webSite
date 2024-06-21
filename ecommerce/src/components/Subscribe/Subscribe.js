import React from "react";
import Banner from "../../assets/Website/orange-pattern.jpg";

export default function Subscribe() {
  const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div
      data-aos="zoom-in"
      className=" bg-gray-100 dark:bg-gray-800 text-white mb-20"
      style={BannerImg}
    >
      <div className="backdrop-blur-sm py-10">
        <div className=" space-y-6 max-w-xl mx-auto">
          <h1 className=" text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified about new Products{" "}
          </h1>
          <input type="text" placeholder="Enter your Email" data-aos="fade-up" className=" w-full p-3"/>
        </div>
      </div>
    </div>
  );
}
