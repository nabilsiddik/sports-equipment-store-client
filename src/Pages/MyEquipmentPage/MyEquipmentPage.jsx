import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../Context/AuthContex/AuthContext'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Heading from '../../Components/Heading/Heading'
import MyEquipmentCard from '../../Components/MyEquipmentCard/MyEquipmentCard'

const MyEquipmentPage = () => {

  const [currentUserEquipment, setCurrentUserEquipment] = useState([])
  const { user } = useContext(authContext)

  // Get current user equipment
  useEffect(() => {
    fetch('http://localhost:5000/equipment-by-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: user?.email })
    })
      .then(res => res.json())
      .then(data => {
        setCurrentUserEquipment(data)
      })
      .catch(error => {
        console.log(error.message)
      })
  }, [])

  return (
    <div id='my_equipment_page'>
      <div className="container py-10">
        <Heading title = 'My Euipment'/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentUserEquipment.length > 0 && currentUserEquipment.map((equipment) => {
            return <MyEquipmentCard key={equipment._id} equipment={equipment} />
          })}
        </div>
      </div>
    </div>
  )
}

export default MyEquipmentPage
