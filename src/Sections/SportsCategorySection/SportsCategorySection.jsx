import React from 'react'
import Heading from '../../Components/Heading/Heading'
import Lottie from "lottie-react"
import newsletter from '../../assets/lotties/football-team.json'
import { Link } from 'react-router-dom'

const SportsCategorySection = () => {
    return (
        <div id='sports_category' className='my-20'>
            <div className="container">
                <div className="category_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-lg gap-20 p-10 rounded-lg bg-yellow-500">
                    <Link to='category'>
                        <div className="category_box">
                            <Lottie animationData={newsletter} />
                            <h3 className='font-bold text-center text-3xl'>Football</h3>
                        </div>
                    </Link>
                    <div className="category_box">
                        <Lottie animationData={newsletter} />
                        <h3 className='font-bold text-center text-3xl'>Cricket</h3>
                    </div>
                    <div className="category_box">
                        <Lottie animationData={newsletter} />
                        <h3 className='font-bold text-center text-3xl'>Hokey</h3>
                    </div>
                    <div className="category_box">
                        <Lottie animationData={newsletter} />
                        <h3 className='font-bold text-center text-3xl'>Carrom</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SportsCategorySection
