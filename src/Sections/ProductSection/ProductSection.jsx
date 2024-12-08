import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../../Context/ShopContext/ShopContext'
import ProductCard from './../../Components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import Heading from '../../Components/Heading/Heading';

const ProductSection = () => {

  const { allEquipment, limitNumberOfData, limitNumberOfEquipment} = useContext(shopContext)

  useEffect(() => {
    limitNumberOfData(6);
  }, [limitNumberOfData]);

  return (
    <div id='product_section' className='my-20'>
      <div className="container">
        <Heading title = {'Our Products'}/>
        <div className="display_products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {limitNumberOfEquipment.length > 0 && limitNumberOfEquipment.map((equipment) => {
            return <ProductCard key={equipment._id} equipment={equipment} />
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <Link to='/sports-equipment' className='btn btn-lg bg-yellow-500 font-bold'>View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductSection
