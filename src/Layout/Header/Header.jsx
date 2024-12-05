import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { authContext } from '../../Context/AuthContex/AuthContext';
import './header.css'
import Swal from 'sweetalert2';
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {

    const { user, userSignOut } = useContext(authContext)

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
        <header id='header' className='border-b'>
            <div className="container flex flex-col gap-5 lg:flex-row items-center justify-between py-5">
                <div className="logo_and_serach flex items-center gap-5">
                    <h2 className='font-bold text-4xl'>EquiSports</h2>
                </div>

                <nav className="menu">
                    <ul className='flex items-center gap-5 text-lg'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/sports-equipment'>Sports Equipment</NavLink>
                        {user?.email && 
                            <>
                                <NavLink to='/add-equipment'>Add Equipment</NavLink>
                                <NavLink to='/my-equipment'>My Equipment</NavLink>
                            </>
                        }
                        {user?.email && <NavLink to={'/profile'}>Profile</NavLink>}
                    </ul>
                </nav>
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

                    <Link to='/cart'>
                        <div className='relative'>
                            <FiShoppingCart className='text-2xl' />
                            <div className="cart_count absolute w-[26px] h-[26px] bg-yellow-500 font-bold rounded-full flex items-center justify-center top-[-23px] right-[-20px] text-sm">{}</div>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
