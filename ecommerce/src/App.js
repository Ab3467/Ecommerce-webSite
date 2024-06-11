import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Product from './components/Products/Product'
import AOS from "aos"
import "aos/dist/aos.css"

export default function App() {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh();
  },[])
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Product/>
    </div>
  )
}
