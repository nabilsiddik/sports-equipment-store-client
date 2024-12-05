import React, { createContext, useEffect, useState } from 'react'

export const shopContext = createContext(null)

const ShopContext = ({children}) => {

  const [allEquipment, setAllEquipment] = useState([])


  // Short Description
  const shortDescription = (desc, charLength) => {
    return desc.length < charLength ? desc :  desc.substring(0, charLength) + ' ...'
  }


  // Fetch all equipment
  useEffect(()=>{
    fetch('http://localhost:5000/equipment')
    .then(res => res.json())
    .then(data => {
      setAllEquipment(data)
    })
    .catch(error => {
      console.log(error.message)
    })
  }, [])
  
  const shopContextValue = {
    allEquipment,
    shortDescription
  }

  return (
    <shopContext.Provider value={shopContextValue}>
      {children}
    </shopContext.Provider>
  )
}

export default ShopContext
