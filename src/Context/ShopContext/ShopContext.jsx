import React, { createContext, useEffect, useState } from 'react'

export const shopContext = createContext(null)

const ShopContext = ({children}) => {

  const [allEquipment, setAllEquipment] = useState([])
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  })

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);


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
    setAllEquipment,
    shortDescription,
    darkMode,
    setDarkMode
  }

  return (
    <shopContext.Provider value={shopContextValue}>
      {children}
    </shopContext.Provider>
  )
}

export default ShopContext
