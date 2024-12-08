import React from 'react'
import Heading from '../../Components/Heading/Heading'
import Lottie from "lottie-react";
import ask from "../../assets/lotties/ask.json"
import { Fade } from "react-awesome-reveal";

const Faq = () => {
    return (
        <section id='faq_section' className='py-10'>
            <div className="container">
                <Heading title={'FAQ'} />

                <div className="div flex items-center gap-10 flex-col md:flex-row">
                    <div className='w-full md:w-6/12'>
                        <Fade>
                            <div className="collapse collapse-arrow mb-2 bg-yellow-500">
                                <input type="radio" name="my-accordion-2" defaultChecked />
                                <div className="collapse-title text-xl font-medium">Do you offer customization for sports equipment?</div>
                                <div className="collapse-content">
                                    <p>Yes, we provide customization options for selected sports equipment. You can add your logo, name, or team design to certain products. Please check the product description or contact us for more details.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="collapse collapse-arrow  mb-2 bg-yellow-500">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">What is your return policy?</div>
                                <div className="collapse-content">
                                    <p>We accept returns within 30 days of purchase if the item is unused and in its original packaging. Please keep the receipt for proof of purchase. Customized items are non-returnable.</p>
                                </div>
                            </div>
                        </Fade>

                        <Fade>
                            <div className="collapse collapse-arrow mb-2 bg-yellow-500">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">How long does it take to deliver an order?</div>
                                <div className="collapse-content">
                                    <p> Standard delivery takes 3-7 business days. If you need faster delivery, we also offer express shipping options. You can also see the deliver time with the equipments.</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade>
                            <div className="collapse collapse-arrow mb-2 bg-yellow-500">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">Are your products suitable for professional athletes?</div>
                                <div className="collapse-content">
                                    <p>Yes, we stock equipment for both beginners and professionals. Check the product details for specifications to find the best fit for your needs.</p>
                                </div>
                            </div>
                        </Fade>

                        <Fade>
                            <div className="collapse collapse-arrow mb-2 bg-yellow-500">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">Do you have a physical store?</div>
                                <div className="collapse-content">
                                    <p>Currently, we operate online only, but we ensure the best service and product quality for all our customers.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className='w-full md:w-6/12'>
                        <Fade>
                            <Lottie animationData={ask} />
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq
