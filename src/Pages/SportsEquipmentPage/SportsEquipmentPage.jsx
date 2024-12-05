import React, { useContext } from 'react'
import Heading from '../../Components/Heading/Heading'
import { shopContext } from '../../Context/ShopContext/ShopContext'
import { Link } from 'react-router-dom'

const SportsEquipmentPage = () => {

  const { allEquipment } = useContext(shopContext)

  return (
    <div id='sports_equipment_page'>
      <div className="container py-10">
        <Heading title="All Sports Equipment" />

        <div className="display_all_equipment">
          <table class="table table-lg">
            <thead>
              <tr className='text-black text-lg bg-green-600'>
                <th>Name/Price</th>
                <th>Stock/Rating</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allEquipment.length > 0 && allEquipment.map((item, index) => {
                const { equipmentName,
                  equipmentImageUrl,
                  equipmentCategory,
                  equipmentDescription,
                  equipmentPrice,
                  equipmentRating,
                  equipmentProcessingTime,
                  equipmentQuantity } = item
                return <tr className='bg-yellow-500 text-black'>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="mask mask-squircle h-12 w-12">
                          <img
                            src={equipmentImageUrl}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold text-lg">{equipmentName}</div>
                        <div class="text-sm opacity-50 font-bold">BDT {equipmentPrice}</div>
                      </div>
                    </div>
                  </td>
                  <td className='text-lg'>
                    {equipmentQuantity} available in stock
                    <br />
                    <span class="badge badge-ghost badge-lg">Have a {equipmentRating} Star Rating</span>
                  </td>
                  <td className='text-lg'>{equipmentCategory}</td>
                  <th>
                    <Link to='/equipment-details' class="btn bg-error text-white btn-lg">details</Link>
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
