import React from "react";
import { Printer, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image1 from "../../images/18464.jpg"

export function Banner() {
  return (
    <div className="relative w-full h-[500px] bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={Image1}
          alt="Printers" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Premium Printers for Every Need
        </h1>
        <p className="text-lg mb-6 drop-shadow-md">
          Discover high-performance printers with cutting-edge technology. Perfect for home and office use.
        </p>
        <div className="flex justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }} 
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform"
          >
            Contact Now
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }} 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

const FeaturesSection = () => (
  <>
    <Banner />
    <div className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose Our Printer?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["High Performance", "Affordable Pricing", "Energy Efficient", "User-Friendly", "Compact Design", "Excellent Support"].map((feature, index) => (
          <div key={index} className="p-6 shadow-lg rounded-lg bg-white">
            <Star className="w-10 h-10 mx-auto text-yellow-500" />
            <h3 className="text-lg font-bold mt-4">{feature}</h3>
            <p className="text-gray-600 text-sm">
              {feature === "High Performance" && "Fast and reliable photocopying solutions."}
              {feature === "Affordable Pricing" && "Best value for high-end photocopiers."}
              {feature === "Energy Efficient" && "Save power while maintaining quality."}
              {feature === "User-Friendly" && "Easy to operate with minimal training."}
              {feature === "Compact Design" && "Fits perfectly in small and large offices alike."}
              {feature === "Excellent Support" && "24/7 customer service and maintenance."}
            </p>
          </div>
        ))}
      </div>
    </div>
  </>
);

const PhotocopierList = () => {
  return (
    <div className="p-8">
      <motion.div 
        className="bg-gray-700 text-white text-center py-8 rounded-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold flex justify-center items-center gap-2">
          <Printer className="w-8 h-8" /> HP LaserJet Printer
        </h1>
      </motion.div>
      <FeaturesSection />
    </div>
  );
};

export default PhotocopierList;
