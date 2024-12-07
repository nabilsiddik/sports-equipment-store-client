import React, { useContext, useState } from 'react'
import Heading from '../../Components/Heading/Heading'
import { shopContext } from '../../Context/ShopContext/ShopContext'
import { Link } from 'react-router-dom'

const SportsEquipmentPage = () => {

  const { allEquipment, setAllEquipment } = useContext(shopContext)

  const handleSortByPrice = () => {
    const sorted = [...allEquipment].sort((a,b) => a.equipmentPrice - b.equipmentPrice)
    setAllEquipment(sorted)
  }

  return (
    <div id='sports_equipment_page'>
      <div className="container py-10">
        <div className="flex items-center justify-between mb-5">
          <Heading title="All Sports Equipment" />
          <button onClick={handleSortByPrice} className='btn bg-green-600 font-bold text-lg'>Sort By Price</button>
        </div>

        <div className="display_all_equipment">
          <table className="table table-lg">
            <thead>
              <tr className='text-black text-lg bg-green-600 dark:bg-darklight dark:text-white'>
                <th>Name/Price</th>
                <th>Stock/Rating</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allEquipment.length > 0 && allEquipment.map((item, index) => {
                const {
                  _id,
                  equipmentName,
                  equipmentImageUrl,
                  equipmentCategory,
                  equipmentDescription,
                  equipmentPrice,
                  equipmentRating,
                  equipmentProcessingTime,
                  equipmentQuantity
                } = item
                return <tr key={item._id} className='bg-yellow-500 text-black dark:bg-darklight dark:text-white'>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={equipmentImageUrl}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-lg">{equipmentName}</div>
                        <div className="text-sm opacity-50 font-bold">BDT {equipmentPrice}</div>
                      </div>
                    </div>
                  </td>
                  <td className='text-lg'>
                    {equipmentQuantity} available in stock
                    <br />
                    <span className="badge badge-ghost badge-lg">Have a {equipmentRating} Star Rating</span>
                  </td>
                  <td className='text-lg'>{equipmentCategory}</td>
                  <th>
                    <Link to={`/equipment-details/${_id}`} className="btn bg-error text-white btn-lg">details</Link>
                  </th>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SportsEquipmentPage
