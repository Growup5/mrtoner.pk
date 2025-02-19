import React from "react";
import { motion } from "framer-motion";
import { FaPrint, FaLeaf, FaTruck } from "react-icons/fa";
import backgroundImage from "../images/15381.jpg";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-full p-25 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative text-6xl font-extrabold text-white"
      >
        Welcome to Mr. Toner
      </motion.h1>

      {/* Animated Subtext */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative text-xl text-white mt-4"
      >
        Your one-stop shop for all printer needs.
      </motion.p>

      {/* Grid Cards with Hover Animation */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl">
        {[
          { icon: <FaPrint size={40} className="text-gray-900" />, title: "High-Quality Printing", desc: "Experience premium printing with our advanced toner solutions." },
          { icon: <FaLeaf size={40} className="text-green-600" />, title: "Eco-Friendly Toners", desc: "Sustainable and cost-effective toner options available." },
          { icon: <FaTruck size={40} className="text-blue-600" />, title: "Fast & Reliable Delivery", desc: "Get your toner supplies delivered quickly and efficiently." }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            {item.icon}
            <h3 className="text-2xl font-bold text-gray-900 mt-3">{item.title}</h3>
            <p className="text-gray-700 mt-2 text-center">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
