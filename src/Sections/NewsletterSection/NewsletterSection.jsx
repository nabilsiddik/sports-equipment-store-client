import React from 'react'
import Lottie from "lottie-react";
import newsletter from "../../assets/lotties/newsletter.json";
import Swal from 'sweetalert2';
import { Fade } from "react-awesome-reveal";

const NewsletterSection = () => {

    const handleSubscribe = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value

        if (email === '') {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Email is required",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Thank you for Subscribing us",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div id='newsletter_section' className='my-20'>
            <div className="container">
                <div className="flex items-center bg-green-700 rounded-lg shadow-lg p-5 md:p-0 text-center md:text-left justify-center md:justify-start">
                    <div className="div w-4/12 hidden md:block">
                        <Fade>
                            <Lottie animationData={newsletter} />
                        </Fade>
                    </div>
                    <div className="div w-8/12">
                        <h3 className='font-bold text-4xl mb-2 text-white'>Subscribe Our Newsletter</h3>
                        <p className='text-white mb-5 text-lg w-full md:w-10/12 lg:w-8/12'>Subscribe out newsletter to get update and discount offers about our amazing amazing sports products.</p>
                        <Fade>
                            <form onSubmit={handleSubscribe}>
                                <div className="form-group">
                                    <input name='email' type="email" placeholder='Your Email' className='input input-bordered input-lg w-full sm:w-10/12 md:w-8/12 mb-2 md:mb-0' />
                                    <input type="submit" value={'Subscribe'} className='btn btn-lg bg-yellow-500 text-black font-bold' />
                                </div>
                            </form>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsletterSection
