import { motion } from "framer-motion";
import React from "react";
const products = [
  {
    id: 1,
    name: "LaserJet Pro 3000",
    image: "https://tse4.mm.bing.net/th?id=OIP.2oVciBQSdbbBDFFoCJbWCgHaGI&pid=Api",
    price: "PKR 15,000",
    description: "High-speed laser printer with wireless connectivity."
  },
  {
    id: 2,
    name: "InkJet Color Plus",
    image: "/printer2.jpg",
    price: "PKR 15,000",
    description: "Eco-friendly ink technology with vibrant color output."
  },
  {
    id: 3,
    name: "OfficeJet X500",
    image: "/printer3.jpg",
    price: "PKR 15,000",
    description: "Perfect for office use with AI-powered maintenance."
  }
];

export default function ProductShowcase() {
  return (
    <div className="bg-white-900 py-12 px-6 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Our Featured Printers</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div 
            key={product.id} 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: product.id * 0.2 }} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold">{product.name}</h3>
            <p className="text-gray-400 my-2">{product.description}</p>
            <span className="text-blue-400 font-bold text-lg">{product.price}</span>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }} 
              className="mt-4 block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-transform"
            >
              Buy Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
