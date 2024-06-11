import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Product from './components/Products/Product'
import AOS from "aos"

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Product/>
    </div>
  )
}
