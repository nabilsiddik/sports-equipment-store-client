import React, { useContext } from 'react'
import { shopContext } from '../../Context/ShopContext/ShopContext'
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthContex/AuthContext';

const ProductCard = ({ equipment }) => {

    const {user} = useContext(authContext)

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

    return (
        <div id='product_card'>
            <div className="card card-compact bg-base-100 dark:bg-darklight shadow-xl">
                <figure>
                    <img src={equipmentImageUrl ? equipmentImageUrl : 'https://placehold.co/600x400'} />
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

                    <div className="card-actions justify-end mt-2">
                        <Link to={user?.email ? `equipment-details/${_id}` : '/login'} className="btn bg-yellow-500 font-bold text-lg w-full">View Equipment</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
