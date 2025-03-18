import React from "react";
import { Printer, Info, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image1 from "../../images/18464.jpg"


const images = [
  "src/images/18464.jpg",
  "https://example.com/banner-image2.jpg",
  "https://example.com/banner-image3.jpg"
];

const AnimatedBanner = () => {
  return (
    <motion.div 
      className="relative w-full h-[500px] flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-5xl font-bold drop-shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Advanced Printing Solutions
      </motion.h1>
      <motion.p 
        className="text-lg mt-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        High-quality, fast, and reliable printers for your business.
      </motion.p>
      <div className="absolute right-10 bottom-0 flex gap-4">
        {images.map((img, index) => (
          <motion.img 
            key={index}
            src={img} 
            alt={`Advanced Printer ${index + 1}`}
            className="w-[200px] h-auto rounded-lg shadow-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 + index * 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  );
};


const FeaturesSection = () => (
  <>
  <AnimatedBanner/>
  <div className="py-12 text-center">
    <h2 className="text-3xl font-bold mb-6">Why Choose Our Photocopiers?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {["High Performance", "Affordable Pricing", "Energy Efficient"].map((feature, index) => (
        <div key={index} className="p-6 shadow-lg rounded-lg bg-white">
          <Star className="w-10 h-10 mx-auto text-yellow-500" />
          <h3 className="text-lg font-bold mt-4">{feature}</h3>
          <p className="text-gray-600 text-sm">
            {feature === "High Performance" && "Fast and reliable photocopying solutions."}
            {feature === "Affordable Pricing" && "Best value for high-end photocopiers."}
            {feature === "Energy Efficient" && "Save power while maintaining quality."}
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
        <p className="mt-2">HP | CANON | XEROX</p>
      </motion.div>
      <FeaturesSection />
    </div>
  );
};

export default PhotocopierList;
