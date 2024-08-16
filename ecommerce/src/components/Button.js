import React from 'react'

export default function Button(props) {
  return (
    <div className=' text-center mt-10 bg-primary hover:scale-105 duration-300 text-white py-1 px-5 rounded-md' onClick={props.handleButton}>
      <button>{props.btnName}</button>
    </div>
  )
}
