import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RepairServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-full">
        <Slider {...settings}>
          <div>
            <img
              src="https://via.placeholder.com/1200x400?text=Slide+1"
              alt="Slide 1"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1200x400?text=Slide+2"
              alt="Slide 2"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1200x400?text=Slide+3"
              alt="Slide 3"
              className="w-full h-96 object-cover"
            />
          </div>
        </Slider>
      </div>


    <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Repair Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Printer Repair</h2>
            <p className="text-gray-700">
              We specialize in fixing all types of printers, including laser, inkjet, and dot matrix printers. Our expert technicians can diagnose and repair issues such as paper jams, connectivity problems, and print quality issues.
            </p>
            <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              Learn More
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Toner-Related Issues</h2>
            <p className="text-gray-700">
              Toner problems can cause poor print quality or even damage your printer. We offer services to replace toner cartridges, fix toner leaks, and resolve any other toner-related issues you may be experiencing.
            </p>
            <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Your Printer?</h2>
          <p className="text-lg mb-6">
            Contact us today for professional repair services and get your printer back in working order.
          </p>
          <button className="bg-white text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepairServices;