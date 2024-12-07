import React from 'react'
import ProductSection from '../../Sections/ProductSection/ProductSection'
import Slider from '../../Sections/Slider/Slider'

const Home = () => {

  return (
    <div id='home_page' className=''>
      <div className="container py-10">
        {/* <Slider/> */}
        <ProductSection/>
      </div>
    </div>
  )
}

export default Home
