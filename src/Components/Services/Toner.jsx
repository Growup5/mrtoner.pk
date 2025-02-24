import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import image1 from "../../images/laptop.jpg";
import { FaLeaf, FaMoneyBillAlt, FaPlug, FaShoppingCart, FaTruck, FaPrint } from 'react-icons/fa';

const TonerRefillPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Slider Banner */}
            <div className="w-full h-96">
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img
                            src={image1}
                            alt="Slide 1"
                            className="w-full h-[400px] object-cover"
                        />

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h1 className="text-white text-4xl font-bold">Toner Refill
                            </h1>
                            <p className="text-white text-xl mt-4">High-quality toner refills for your printer.</p>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">High-Quality Toner Refills</h1>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex justify-center mb-4">
                            <FaLeaf className="text-4xl text-green-500" />
                        </div>
                        <h2 className="text-xl font-semibold mb-4 text-center">Eco-Friendly</h2>
                        <p className="text-gray-600 text-center">
                            Our toner refills are designed to be environmentally friendly, reducing waste and promoting sustainability.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex justify-center mb-4">
                            <FaMoneyBillAlt className="text-4xl text-blue-500" />
                        </div>
                        <h2 className="text-xl font-semibold mb-4 text-center">Cost-Effective</h2>
                        <p className="text-gray-600 text-center">
                            Save up to 50% compared to buying new toner cartridges. High-quality refills at a fraction of the cost.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex justify-center mb-4">
                            <FaPlug className="text-4xl text-purple-500" />
                        </div>
                        <h2 className="text-xl font-semibold mb-4 text-center">Compatible</h2>
                        <p className="text-gray-600 text-center">
                            Compatible with a wide range of printer models. Check our compatibility list to find the right refill for your printer.
                        </p>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
                    <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaShoppingCart className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Order Online</h3>
                            <p className="text-gray-600">Select your toner refill and place your order online.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaTruck className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Receive Your Refill</h3>
                            <p className="text-gray-600">We ship your toner refill directly to your doorstep.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaPrint className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Refill & Print</h3>
                            <p className="text-gray-600">Refill your cartridge and enjoy high-quality prints.</p>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="bg-gray-200 p-8 rounded-lg shadow-lg mb-12">
                    <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 mb-4">
                                "I was skeptical at first, but the toner refill worked perfectly! Saved me a lot of money."
                            </p>
                            <p className="text-gray-800 font-semibold">- John D.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 mb-4">
                                "Great service and high-quality refills. Will definitely order again!"
                            </p>
                            <p className="text-gray-800 font-semibold">- Sarah L.</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="bg-gray-500 p-8 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Ready to Save on Toner?</h2>
                    <p className="text-white mb-6">Order your high-quality toner refill today and start saving!</p>
                    <button className="bg-white text-gray-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TonerRefillPage;