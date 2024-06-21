import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Product from './components/Products/Product'
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from './components/topProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonial from './components/Testimonials/Testimonial'
import Footer from './components/Footer/Footer'

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
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Product/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
