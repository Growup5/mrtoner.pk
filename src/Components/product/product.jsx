import React from "react";
import { Printer, Star, Zap, Shield, Clock, TrendingUp, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image1 from "../../images/18464.jpg";

const featureIcons = {
  "High Performance": <TrendingUp className="w-10 h-10 mx-auto text-blue-500" />,
  "Affordable Pricing": <Heart className="w-10 h-10 mx-auto text-red-500" />,
  "Energy Efficient": <Zap className="w-10 h-10 mx-auto text-yellow-500" />,
  "User-Friendly": <Shield className="w-10 h-10 mx-auto text-green-500" />,
  "Compact Design": <Printer className="w-10 h-10 mx-auto text-purple-500" />,
  "Excellent Support": <Clock className="w-10 h-10 mx-auto text-orange-500" />
};

const featureDescriptions = {
  "High Performance": "Fast and reliable printing with professional quality output.",
  "Affordable Pricing": "Competitive pricing without compromising on quality.",
  "Energy Efficient": "Eco-friendly models that reduce power consumption.",
  "User-Friendly": "Intuitive interfaces for effortless operation.",
  "Compact Design": "Space-saving solutions for any office environment.",
  "Excellent Support": "Dedicated customer service with quick response times."
};

export function Banner() {
  return (
    <div className="relative w-full h-[500px] bg-gray-900 text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={Image1}
          alt="Printers"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Premium Printers for Every Need
        </motion.h1>
        <motion.p
          className="text-lg mb-8 drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Discover high-performance printers with cutting-edge technology. Perfect for home and office use.
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Contact Now
          </motion.a>

          <motion.a
            href="/products"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            View Products
          </motion.a>
        </div>

      </motion.div>
    </div>
  );
}

const FeaturesSection = () => (
  <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Why Choose Our Printers?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(featureIcons).map(([feature, icon], index) => (
          <motion.div
            key={feature}
            className="p-8 shadow-md rounded-xl bg-white hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="mb-4">
              {icon}
            </div>
            <h3 className="text-xl font-bold mt-4 mb-2">{feature}</h3>
            <p className="text-gray-600">
              {featureDescriptions[feature]}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const PhotocopierList = () => {
  return (
    <div>
      <Banner />
      <FeaturesSection />
      <br />
    </div>
  );
};

export default PhotocopierList;