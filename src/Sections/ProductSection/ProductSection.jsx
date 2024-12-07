import React, { useContext } from 'react'
import { shopContext } from '../../Context/ShopContext/ShopContext'
import ProductCard from './../../Components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';

const ProductSection = () => {

  const { allEquipment } = useContext(shopContext)

  return (
    <div id='product_section' className='my-20'>
      <div className="container">
        <div className="display_products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allEquipment.length > 0 && allEquipment.map((equipment) => {
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
