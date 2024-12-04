import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-neutral">
            <footer className="footer text-neutral-content p-10 container py-20 text-lg">
                <div>
                    <h2 className='font-bold text-3xl'>EquiSports</h2>
                    <p>EquiSports is a sport equipments <br /> buying store where you will get <br /> all types of sports equipment.</p>
                </div>
                <nav>
                    <h6 className="footer-title">Contacts</h6>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center gap-3'>
                            <FaPhone />
                            +8801957282230
                        </li>
                        <li className='flex items-center gap-3'>
                            <MdEmail />
                            nabilsiddik90@gmail.com
                        </li>
                        <li className='flex items-center gap-3'>
                            <FaLocationDot />
                            Dhaka, Mirpur
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <ul className='flex items-center gap-3'>
                        <Link to='https://www.facebook.com/codewithnabil' className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-black'>
                            <FaFacebookF />
                        </Link>
                        <Link to='https://www.linkedin.com/in/nabilsiddik/' className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-black'>
                            <FaLinkedinIn />
                        </Link>
                        <Link to='https://www.instagram.com/nabil.siddik/' className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-black'>
                            <FaInstagram />
                        </Link>
                        <Link to='https://x.com/SiddikNabil' className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-black'>
                            <FaXTwitter />
                        </Link>
                    </ul>
                </nav>
            </footer>
            <footer className='bg-black'>
                <div className="contianer">
                    <div className='text-center text-white py-10'>
                        <p>Copyright &copy; 2024 All right reserved EquiSports.com</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
