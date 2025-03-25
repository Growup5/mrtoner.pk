import { motion } from "framer-motion";
import React from "react";

const images = [
  "https://r.mobirisesite.com/1332881/assets/images/photo-1518472803163-8d3a9e90792c.jpeg",
  "https://r.mobirisesite.com/1332881/assets/images/photo-1557426272-fc759fdf7a8d.jpeg",
  "https://r.mobirisesite.com/1332881/assets/images/photo-1612814266697-e5814f3063cf.jpeg",
  "https://r.mobirisesite.com/1332881/assets/images/photo-1618005182384-a83a8bd57fbe.jpeg",
];

export default function GridGallery() {
  return (
    <div className="relative w-full bg-gray-900 py-12 px-6">
      <h2 className="text-center text-3xl font-bold text-white mb-6">
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-64 overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={src}
              alt="Gallery"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-xl font-semibold">
              View
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
