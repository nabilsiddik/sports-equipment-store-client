import React from 'react'
import Slider from '../../Sections/Slider/Slider'
import ProductSection from '../../Sections/ProductSection/ProductSection'


const Home = () => {


  return (
    <div id='home_page' className=''>
      <div className="container py-10">
        <h1 className='font-bold text-4xl text-center mb-8'>Equipment</h1>
        <ProductSection/>
      </div>
    </div>
  )
}

export default Home
