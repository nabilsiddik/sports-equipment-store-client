import React from 'react'
import ProductSection from '../../Sections/ProductSection/ProductSection'
import Slider from '../../Sections/Slider/Slider'
import Faq from '../../Sections/FaqSection/Faq'
import NewsletterSection from '../../Sections/NewsletterSection/NewsletterSection'
import SportsCategorySection from '../../Sections/SportsCategorySection/SportsCategorySection'

const Home = () => {

  return (
    <div id='home_page' className=''>
      <Slider/>
      <ProductSection/>
      <SportsCategorySection/>
      <Faq/>
      <NewsletterSection/>
    </div>
  )
}

export default Home
