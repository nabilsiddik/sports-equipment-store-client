import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { authContext } from '../../Context/AuthContex/AuthContext';
import './header.css'
import Swal from 'sweetalert2';
import { FiShoppingCart } from "react-icons/fi";
import { shopContext } from '../../Context/ShopContext/ShopContext';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaBars } from "react-icons/fa";


const Header = () => {

    const { user, userSignOut } = useContext(authContext)
    const { darkMode, setDarkMode } = useContext(shopContext)
    const [isActiveMenu, setIsActiveMenu] = useState(false)

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                Swal.fire({
                    position: "center center",
                    icon: "success",
                    title: "You are loged Out",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error While sign out!",
                    footer: `${error.code}. ${error.message}`
                })
            })
    }

    return (
        <header id='header' className='border-b dark:bg-dark dark:text-white  py-5'>
            <div className="container flex flex-col gap-5 lg:flex-row items-center justify-between">
                <div className="logo_and_serach flex items-center gap-5  md:w-3/12">
                    <h2 className='font-bold text-4xl'>EquiSports</h2>
                </div>

                <div className='flex items-center justify-between w-full md:w-9/12'>
                    <nav className="menu hidden lg:block">
                        <ul className='flex items-center gap-5 text-lg'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/sports-equipment'>Sports Equipment</NavLink>
                            {user?.email &&
                                <>
                                    <NavLink to='/add-equipment'>Add Equipment</NavLink>
                                    <NavLink to='/my-equipment'>My Equipment</NavLink>
                                </>
                            }
                        </ul>
                    </nav>


                    <div className="mobile_menu relative">
                        <FaBars onClick={()=> setIsActiveMenu(!isActiveMenu)} className='text-4xl lg:hidden cursor-pointer' />
                        <nav className="menu lg:hidden">
                            <ul className={`flex flex-col bg-yellow-500 w-[200px] font-bold py-5 rounded-lg items-center gap-5 text-lg absolute z-10 top-full ${!isActiveMenu && 'hidden' }`}>
                                <NavLink to='/'>Home</NavLink>
                                <NavLink to='/sports-equipment'>Sports Equipment</NavLink>
                                {user?.email &&
                                    <>
                                        <NavLink to='/add-equipment'>Add Equipment</NavLink>
                                        <NavLink to='/my-equipment'>My Equipment</NavLink>
                                    </>
                                }
                            </ul>
                        </nav>
                    </div>

                    <div className="icons flex items-center gap-3">
                        {user?.email && <button onClick={handleSignOut} className='btn bg-yellow-500 font-bold text-lg'>Log Out</button>}
                        {!user?.email && <NavLink className='btn bg-yellow-500 font-bold text-lg' to={'/login'}>Login / Register</NavLink>}

                        {user?.email &&
                            <div className="tooltip tooltip-bottom" data-tip={user?.email && user.displayName}>
                                <div className="avatar">
                                    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                        <img src={user?.photoURL} alt="profile" />
                                    </div>
                                </div>
                            </div>
                        }

                        <div className="dark_light_mode flex items-center gap-3 text-3xl ml-5">
                            <MdDarkMode onClick={() => setDarkMode(true)} className='cursor-pointer' />
                            <MdLightMode onClick={() => setDarkMode(false)} className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
