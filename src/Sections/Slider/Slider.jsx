import React from 'react'
import Lottie from "lottie-react";
import footballTeam from "../../assets/lotties/football-team.json";
import slide3 from '../../assets/slides/slide_3.jpg'
import slide2 from '../../assets/slides/slide_2.jpg'
import slide1 from '../../assets/slides/slide_1.jpg'
import { Link } from 'react-router-dom';

const Slider = () => {

    return (
        <div className="carousel w-full  h-[700px] md:h-[900px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={slide1}
                    className="w-full h-full object-cover" />

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.7]"></div>

                <div className="slider-content absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center'>We Have Various Kind of <br /> Cricket Equipments</h1>
                    <p className='mt-5 text-lg text-white font-bold text-center w-full md:w-8/12 lg:w-6/12 mx-auto'>Browse our cricket equipments</p>
                    <Link to='sports-equipment'>
                        <button className='btn md:btn-lg mt-5 block mx-auto bg-[transparent] text-white border-3 border-yellow-500 font-bold hover:bg-yellow-500'>Browse Now</button>
                    </Link>
                </div>

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>


            <div id="slide2" className="carousel-item relative w-full">

                <img
                    src={slide2}
                    className="w-full h-full object-cover" />

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.4]"></div>

                <div className="slider-content absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center'>We Have Various Kind of <br /> Sports Equipments</h1>
                    <p className='mt-5 text-lg text-white font-bold text-center w-full md:w-8/12 lg:w-6/12 mx-auto'>Browse our sports equipments</p>
                    <Link to='sports-equipment'>
                        <button className='btn btn-lg mt-5 block mx-auto bg-[transparent] text-white border-3 border-yellow-500 font-bold hover:bg-yellow-500'>Browse Now</button>
                    </Link>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>


            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={slide3}
                    className="w-full h-full object-cover" />

                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.4]"></div>

                <div className="slider-content absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center'>We Have Various Kind of <br /> sports Equipments</h1>
                    <p className='mt-5 text-lg text-white font-bold text-center w-full md:w-8/12 lg:w-6/12 mx-auto'>Browse our sports equipments</p>
                    <Link to='sports-equipment'>
                        <button className='btn btn-lg mt-5 block mx-auto bg-[transparent] text-white border-3 border-yellow-500 font-bold hover:bg-yellow-500'>Browse Now</button>
                    </Link>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Slider
