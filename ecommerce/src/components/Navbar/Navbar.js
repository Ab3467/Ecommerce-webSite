import React from "react";
import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

export default function Navbar() {
  return (
    <div>
      {/*Upper Navbar*/}
      <div className=" shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="bg-primary/40 py-2">
          <div className=" container flex justify-between items-center">
            <div>
              <a href="" className=" font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={logo} alt="logo" className=" w-10" />
                Shop here
              </a>
            </div>
            <div className=" flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className=" w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </div>

            {/* Order button */}
            <button
              onClick={() => alert("Ordering yet not available")}
              className=" bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full items-center flex gap-3 group"
            >
              <span className=" group-hover:block hidden translate-all duration-300">
                Order
              </span>
              <FaCartShopping className=" text-xl text-white drop-shadow-sm cursor-pointer " />
            </button>
            {/* DarkMode Button*/}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
 
      {/*Lower Navbar*/}
      <div className=""></div>
    </div>
  );
}
