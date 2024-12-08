import React from 'react'
import Heading from '../../Components/Heading/Heading'

const Faq = () => {
    return (
        <section id='faq_section'>
            <div className="container">
                <Heading title={'FAQ'} />

                <div className="div flex gap-10">
                    <div className='w-6/12'>
                        <div className="collapse collapse-arrow mb-2 bg-yellow-500">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">Do you offer customization for sports equipment?</div>
                            <div className="collapse-content">
                                <p>Yes, we provide customization options for selected sports equipment. You can add your logo, name, or team design to certain products. Please check the product description or contact us for more details.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow  mb-2 bg-yellow-500">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">What is your return policy?</div>
                            <div className="collapse-content">
                                <p>We accept returns within 30 days of purchase if the item is unused and in its original packaging. Please keep the receipt for proof of purchase. Customized items are non-returnable.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow mb-2 bg-yellow-500">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">How long does it take to deliver an order?</div>
                            <div className="collapse-content">
                                <p> Standard delivery takes 3-7 business days. If you need faster delivery, we also offer express shipping options. You can also see the deliver time with the equipments.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow mb-2 bg-yellow-500">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Are your products suitable for professional athletes?</div>
                            <div className="collapse-content">
                                <p>Yes, we stock equipment for both beginners and professionals. Check the product details for specifications to find the best fit for your needs.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow mb-2 bg-yellow-500">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Do you have a physical store?</div>
                            <div className="collapse-content">
                                <p>Currently, we operate online only, but we ensure the best service and product quality for all our customers.</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-6/12'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29201.8288698603!2d90.3416811029061!3d23.810468482265406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1733654897438!5m2!1sen!2sbd" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq
