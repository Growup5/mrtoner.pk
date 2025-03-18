import React, { useState, useEffect } from 'react';
import TradeInProgram from '../Inventory/TradeInProgram';
import { useNavigate } from 'react-router-dom';

const PrinterSalesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();


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
      {/* Blur background when popup is visible */}
      <div className="bg-gray-100 min-h-screen filter blur-lg">
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
      </div>

      {/* Coming Soon Popup */}
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-6">This service is not available yet. Stay tuned for updates!</p>
          <button 
            onClick={() => navigate('/')} 
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Go Back to Home Page
          </button>
        </div>
      </div>

      <TradeInProgram />
    </>
  );
};

export default PrinterSalesPage;
