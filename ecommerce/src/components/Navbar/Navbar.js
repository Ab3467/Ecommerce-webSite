import React from 'react'
import logo from "../../assets/logo.png"

export default function Navbar() {
  return (
    <div>

        {/*Upper Navbar*/}
      <div className="">
        <div className="">
            <div className="">
               <a href="">
                <img src={logo} alt="logo" 
                className=' w-10 uppercase'/>
               </a>
               <div className="">
                <div className=" group">
                   <input type="text" placeholder='search' 
                   className=' w-[200px] sm:w-[200px] group-hover:w-[300px] transition duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none
                   focus:border-1 focus:border-primary'
                   />
                </div>
               </div>
            </div>
        </div>
      </div>


      {/*Lower Navbar*/}
       <div className="
       "></div>
    </div>
  )
}
