import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

const EquipmentDetailsPage = () => {

    const loadedEquipment = useLoaderData()

    const {
        equipmentName,
        equipmentImageUrl,
        equipmentCategory,
        equipmentDescription,
        equipmentPrice,
        equipmentRating,
        equipmentProcessingTime,
        equipmentQuantity
    } = loadedEquipment

    return (
        <div id='equipment_details_page'>
            <div className="container py-10">
                <div className="card bg-base-100 dark:bg-darklight shadow-md">
                    <figure className='h-[600px] relative'>
                        <img className='w-full h-full object-cover'
                            src={equipmentImageUrl}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h2 className="card-title text-3xl">
                                {equipmentName}
                                <div className="badge badge-lg badge-secondary">{equipmentCategory}</div>
                            </h2>

                            <div className="flex items-center gap-5">
                                <h2 className='font-bold text-xl'>BDT {equipmentPrice}</h2>
                                <button className='btn btn-warning font-bold'>Stock: {equipmentQuantity}
                                </button>
                            </div>
                        </div>
                        <div className="rating mb-8 flex items-center gap-2 font-bold text-lg">
                            <span className='mt-1'>{equipmentRating} Star</span>
                            <span>
                                <StarRatings
                                    rating={parseInt(equipmentRating)}
                                    starDimension="20"
                                    starSpacing="5px"
                                    starRatedColor='#FF9529'
                                    starEmptyColor='rgb(203, 211, 227)'
                                />
                            </span>
                        </div>
                        <p className='text-lg'>{equipmentDescription}</p>

                        <div className="card-actions mt-8">
                            <div className="badge badge-outline">Proccessing Time: {equipmentProcessingTime} Days</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EquipmentDetailsPage
