import { motion } from "framer-motion";
import React from "react";
import Image1 from "../../images/work.jpg"
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

export default function BannerTwo() {
  return (
    <div className="relative w-full h-[500px] bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={Image1}
          alt="Printers"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl px-6 bg-black bg-opacity-50 p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          Elevate Your Printing Experience
        </h1>
        <p className="text-lg mb-6 text-gray-300 drop-shadow-md">
          Discover high-speed, eco-friendly, and professional-grade printers. Designed for efficiency and quality.
        </p>
        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gray-500 to-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform"
          >
            <Link to="/products">Explore Now</Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-blue-400 hover:bg-blue-400 hover:text-white text-blue-400 font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform"
          >
            <Link to="/support">Get Support</Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
