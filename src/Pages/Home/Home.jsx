import React from 'react'
import ProductSection from '../../Sections/ProductSection/ProductSection'
import Slider from '../../Sections/Slider/Slider'
import Faq from '../../Sections/FaqSection/Faq'

const Home = () => {

  return (
    <div id='home_page' className=''>
      <Slider/>
      <ProductSection/>
      <Faq/>
    </div>
  )
}

export default Home
