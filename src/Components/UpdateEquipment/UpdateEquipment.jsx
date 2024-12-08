import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

const UpdateEquipment = () => {

    const loadedEquipment = useLoaderData()

    const {
        _id,
        equipmentName,
        equipmentImageUrl,
        equipmentCategory,
        equipmentDescription,
        equipmentPrice,
        equipmentRating,
        customization,
        equipmentProcessingTime,
        equipmentQuantity
    } = loadedEquipment


    const handleUpdateEquipment = (e) => {
        e.preventDefault()

        // Get the values from form
        const form = e.target
        const equipmentName = form.equipmentName.value
        const equipmentImageUrl = form.equipmentImageUrl.value
        const equipmentCategory = form.equipmentCategory.value
        const equipmentDescription = form.equipmentDescription.value
        const equipmentPrice = form.equipmentPrice.value
        const equipmentRating = form.equipmentRating.value
        const equipmentCustomization = form.customization.value
        const equipmentProcessingTime = form.equipmentProcessingTime.value
        const equipmentQuantity = form.equipmentQuantity.value

        const updatedEquipment = {
            equipmentName,
            equipmentImageUrl,
            equipmentCategory,
            equipmentDescription,
            equipmentPrice,
            equipmentRating,
            equipmentCustomization,
            equipmentProcessingTime,
            equipmentQuantity
        }

        // Update to database
        fetch(`https://sports-equipment-store-server-sigma.vercel.app/equipment/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedEquipment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Equipment Updated",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

                console.log(data)
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

        console.log(updatedEquipment)
    }

    return (
        <div id='update_equipment' className='py-10'>
            <div className="container">
                <h1 className='font-bold text-3xl text-center mb-5'>Update Equipment</h1>

                <div className="add_equipment_form w-11/12 md:w-10/12 lg:w-6/12 mx-auto">
                    <form onSubmit={handleUpdateEquipment}>
                        <div className="input-group mb-4">
                            <input name='equipmentName' type="text" placeholder='Equipment Name *' className='input input-bordered w-full' defaultValue={equipmentName} />
                        </div>

                        <div className="input-group mb-4">
                            <input name='equipmentImageUrl' type="text" placeholder='Equipment Image URL *' className='input input-bordered w-full' defaultValue={equipmentImageUrl} />
                        </div>

                        <div className="input-group mb-4">
                            <input name='equipmentCategory' type="text" placeholder='Equipment Category Name *' className='input input-bordered w-full' defaultValue={equipmentCategory} />
                        </div>

                        <div className="input-group mb-4">
                            <textarea name='equipmentDescription' placeholder='Equipment Description *' className='textarea input-bordered textarea-lg w-full' defaultValue={equipmentDescription}></textarea>
                        </div>

                        <div className="input-group mb-4">
                            <input name='equipmentPrice' type="number" placeholder='Equipment Price *' className='input input-bordered w-full' defaultValue={equipmentPrice} />
                        </div>

                        <div className="input-group mb-4">
                            <input name='equipmentRating' type="number" placeholder='Equipment Rating *' className='input input-bordered w-full' defaultValue={equipmentRating} />
                        </div>


                        <div className="input-group mb-4">
                            <input name='customization' type="text" placeholder='Customization *' className='input input-bordered w-full dark:bg-darklight' defaultValue={customization} />
                        </div>

                        <div className="input-group mb-4">
                            <input name='equipmentProcessingTime' type="number" placeholder='Processing Time (In Days) *' className='input input-bordered w-full' defaultValue={equipmentProcessingTime} />
                        </div>

                        <div className="input-group mb-4">
                            <input name='equipmentQuantity' type="number" placeholder='Equipment Quantity *' className='input input-bordered w-full' defaultValue={equipmentQuantity} />
                        </div>

                        <input type="submit" className='btn btn-lg bg-yellow-500 font-bold text-xl w-full' value={'Update Equipment'} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateEquipment
