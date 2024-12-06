import React from 'react'
import errorImage from '../../assets/error/page-error.jpg'

const ErrorPage = () => {
    return (
        <div id='error_page'>
            <div className="container py-16 flex items-center justify-center h-screen">
                <div>
                    <h1 className='font-bold text-center text-5xl mb-2'>OPPS! Page Not Found</h1>
                    <img className='max-w-[700px] mx-auto' src={errorImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
