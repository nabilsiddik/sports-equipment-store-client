import React, { useContext, useState } from 'react'
import MyEquipmentPage from './../MyEquipmentPage/MyEquipmentPage';
import { authContext } from '../../Context/AuthContex/AuthContext';
import Swal from 'sweetalert2';
import { shopContext } from '../../Context/ShopContext/ShopContext';


const AddEquipmentPage = () => {

  const { user } = useContext(authContext)

  const handleAddEquipment = (e) => {
    e.preventDefault()

    // Get the values from form
    const form = e.target
    const equipmentName = form.equipmentName.value
    const equipmentImageUrl = form.equipmentImageUrl.value
    const equipmentCategory = form.equipmentCategory.value
    const equipmentDescription = form.equipmentDescription.value
    const equipmentPrice = form.equipmentPrice.value
    const equipmentRating = form.equipmentRating.value
    const customization = form.customization.value
    const equipmentProcessingTime = form.equipmentProcessingTime.value
    const equipmentQuantity = form.equipmentQuantity.value
    const userEmail = user?.email
    const userName = user?.displayName

    const newEquipment = {
      equipmentName,
      equipmentImageUrl,
      equipmentCategory,
      equipmentDescription,
      equipmentPrice,
      equipmentRating,
      customization,
      equipmentProcessingTime,
      equipmentQuantity,
      userEmail,
      userName
    }

    if (equipmentName === '' || equipmentImageUrl === '' || equipmentCategory === '' || equipmentDescription === '' || equipmentPrice === '' || equipmentRating === '' || customization === '' || equipmentProcessingTime === '' || equipmentQuantity === '') {
      Swal.fire({
        position: "center",
        icon: "error",
        title: 'Please fill out the required fields',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (!userEmail || !userName) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: 'User Credential is missing. You should login first',
        showConfirmButton: false,
        timer: 1500
      })
    } else {

      // Send equipment data to database
      fetch('http://localhost:5000/equipment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEquipment)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Equipment Added Successfully",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        .catch(error => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500
          })
        })

    }

  }

  return (
    <div id='add_equipment_page'>
      <div className="container py-10">
        <h1 className='font-bold text-3xl text-center mb-5'>Add Equipment</h1>

        <div className="add_equipment_form w-11/12 md:w-10/12 lg:w-6/12 mx-auto relative">
          <form onSubmit={handleAddEquipment} className='z-10'>
            <div className="input-group mb-4">
              <input name='equipmentName' type="text" placeholder='Equipment Name *' className='input input-bordered w-full dark:bg-darklight' />
            </div>

            <div className="input-group mb-4">
              <input name='equipmentImageUrl' type="text" placeholder='Equipment Image URL *' className='input input-bordered w-full dark:bg-darklight' />
            </div>

            <div className="input-group mb-4">
              <input name='equipmentCategory' type="text" placeholder='Equipment Category Name *' className='input input-bordered w-full dark:bg-darklight' />
            </div>

            <div className="input-group mb-4">
              <textarea name='equipmentDescription' placeholder='Equipment Description *' className='textarea input-bordered textarea-lg w-full dark:bg-darklight'></textarea>
            </div>

            <div className="input-group mb-4">
              <input name='equipmentPrice' type="number" placeholder='Equipment Price *' className='input input-bordered w-full dark:bg-darklight' />
            </div>

            <div className="input-group mb-4">
              <input name='equipmentRating' type="number" placeholder='Equipment Rating *' className='input input-bordered w-full dark:bg-darklight' />
            </div>

            <div className="input-group mb-4">
              <input name='customization' type="text" placeholder='Customization *' className='input input-bordered w-full dark:bg-darklight' />
            </div>

            <div className="input-group mb-4">
              <input name='equipmentProcessingTime' type="number" placeholder='Processing Time (In Days) *' className='input input-bordered w-full dark:bg-darklight' />
            </div>

            <div className="input-group mb-4">
              <input name='equipmentQuantity' type="number" placeholder='Equipment Quantity *' className='input input-bordered w-full dark:bg-darklight' />
            </div>

            <input type="submit" className='btn btn-lg bg-yellow-500 font-bold text-xl w-full' value={'Add Equipment'} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEquipmentPage
