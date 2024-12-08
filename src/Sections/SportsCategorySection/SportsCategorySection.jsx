import React, { useContext } from 'react'
import Heading from '../../Components/Heading/Heading'
import Lottie from "lottie-react"
import newsletter from '../../assets/lotties/football-team.json'
import { Link } from 'react-router-dom'
import { shopContext } from '../../Context/ShopContext/ShopContext'

const SportsCategorySection = () => {

    const { allEquipment, setAllEquipment } = useContext(shopContext)

    return (
        <div id='sports_category' className='my-20 '>
            <Heading title="All Sports Categories"></Heading>
            <div className="container rounded-lg">
                <div className='bg-yellow-500 p-10 rounded-lg h-[600px] overflow-auto'>
                    <ul>
                        {allEquipment.length > 0 && allEquipment.map((item) => {
                            return <li className="category_box bg-yellow-600 py-5 px-10 mb-3 rounded-lg">
                                <h3 className='font-bold text-3xl'>{item.equipmentCategory}</h3>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SportsCategorySection
