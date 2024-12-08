import React from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Heading from '../../Components/Heading/Heading'
import { useLoaderData } from 'react-router-dom'

const CategoryPage = () => {

    const loadedEquipment = useLoaderData()
    console.log(loadedEquipment)

  return (
    <div id='category_page'>
      <div className="container py-10">
        <div className="mt-10">
          <Heading title='My Euipment' />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* {currentUserEquipment.length > 0 && currentUserEquipment.map((equipment) => {
            return <ProductCard key={equipment._id} equipment={equipment} currentUserEquipment = {currentUserEquipment} setCurrentUserEquipment = {setCurrentUserEquipment} />
          })} */}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
