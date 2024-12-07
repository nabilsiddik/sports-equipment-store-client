import React from 'react'
import Lottie from "lottie-react";
import footballTeam from "../../assets/lotties/football-team.json";

const Slider = () => {

    return (
        <div className="carousel w-full mb-20">
            <div id="slide1" className="bg-yellow-500 carousel-item relative w-full h-[500px] py-20">
                <div className='flex items-center'>
                    <div className='w-6/12'>
                        <Lottie animationData={footballTeam} loop={true} />
                    </div>
                    <div className='w-6/12'>
                        <h2 className='font-bold text-5xl'>Explore Jersey Collection</h2>
                        <p className='text-lg mt-5'>Explore our new jersey Collection</p>
                        <button className='btn btn-lg mt-5'>Explore</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Slider
