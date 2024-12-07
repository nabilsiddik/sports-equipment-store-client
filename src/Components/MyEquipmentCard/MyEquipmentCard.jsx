import React, { useContext } from 'react'
import { authContext } from '../../Context/AuthContex/AuthContext'
import { shopContext } from '../../Context/ShopContext/ShopContext'
import StarRatings from 'react-star-ratings'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const MyEquipmentCard = ({ equipment }) => {

    const { user } = useContext(authContext)
    const { allEquipment, setAllEquipment } = useContext(shopContext)

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
    } = equipment

    const { shortDescription } = useContext(shopContext)

    const handleDeleteEquipment = (id) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                // Delete from database if confirmed
                fetch(`http://localhost:5000/equipment/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data, data.deletedCount)
                        if (data.deletedCount > 0) {
                            // Display the remaining eqipmen to frontend
                            const remainingEquipment = allEquipment.filter((equipment) => equipment._id !== id)

                            setAllEquipment(remainingEquipment)
                            
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Equipment Deleted Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: `Error while deleting. ${error.message}`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your Equipment is alive",
                    icon: "error"
                });
            }
        });

    }

    return (
        <div id='my_equipment_card'>
            <div className="card card-compact bg-base-100 dark:bg-darklight shadow-lg">
                <figure className='h-full w-full relative'>
                    <img className='w-full h-full object-cover' src={equipmentImageUrl ? equipmentImageUrl : 'https://placehold.co/600x400'} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{equipmentName}</h2>
                    <p className='my-2 text-lg'>{shortDescription(equipmentDescription, 140)}</p>

                    <div className="flex items-center gap-5">
                        <p className='my-2 text-lg font-bold'>BDT {equipmentPrice}</p>

                        <div className="rating">
                            <StarRatings
                                rating={parseInt(equipmentRating)}
                                starDimension="20"
                                starSpacing="5px"
                                starRatedColor='#FF9529'
                                starEmptyColor='rgb(203, 211, 227)'
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <Link to={`/update-equipment/${_id}`} className="btn bg-yellow-500 font-bold text-lg">Update</Link>

                        <button onClick={() => handleDeleteEquipment(_id)} className="btn btn-error font-bold text-lg">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyEquipmentCard
