import React from 'react'
import lightbtn from "../../assets/Website/light-mode-button.png"

export default function DarkMode() {
  return (
    <div>
      <img src={lightbtn} alt="" className=' w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)]'/>
    </div>
  )
}
