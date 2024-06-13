import React from 'react'
import img from "../../assets/women/women2.jpg"

export default function Banner() {
  return (
    <div>
      <div className=" min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className=" container">
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <img src={img} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
