import React, { useState, useEffect } from 'react';
import TradeInProgram from '../Inventory/TradeInProgram';
const PrinterSalesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://via.placeholder.com/1200x400',
      title: 'High-Quality Professional Printers',
      description: 'Discover our range of professional printers designed for businesses.',
    },
    {
      image: 'https://via.placeholder.com/1200x400',
      title: 'Fast and Reliable Printing',
      description: 'Experience fast and reliable printing with our advanced technology.',
    },
    {
      image: 'https://via.placeholder.com/1200x400',
      title: 'Eco-Friendly Solutions',
      description: 'Our printers are designed with eco-friendly features to reduce environmental impact.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      {/* Slider Banner */}
      <div className="relative w-full h-96 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="text-xl mt-4">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Categories */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Laser Printers</h3>
            <p className="text-gray-600">High-speed laser printers for office use.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Inkjet Printers</h3>
            <p className="text-gray-600">Perfect for high-quality photo printing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">3D Printers</h3>
            <p className="text-gray-600">Innovative 3D printing solutions.</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/300x200" alt="Printer 1" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">Printer Model X1</h3>
            <p className="text-gray-600 mb-4">High-speed laser printer with advanced features.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Learn More</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/300x200" alt="Printer 2" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">Printer Model X2</h3>
            <p className="text-gray-600 mb-4">Inkjet printer for high-quality photo printing.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Learn More</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/300x200" alt="Printer 3" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">Printer Model X3</h3>
            <p className="text-gray-600 mb-4">3D printer for innovative printing solutions.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Learn More</button>
          </div>
        </div>
      </div>

    </div> 
    <TradeInProgram/>
    </>
  );
};

export default PrinterSalesPage;