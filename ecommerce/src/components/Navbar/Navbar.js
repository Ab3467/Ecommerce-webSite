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
                <img src={logo} alt="logo" />
               </a>
               <div className="">
                <div className=" group">
                   <input type="text" placeholder='search' 
                   className=' w-[200px] sm:w-[200px] group-hover:w-[300px]'
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
