import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
const faqs = [
  { question: "What is the warranty period for the printers?", answer: "All our printers come with a standard 1-year warranty, with an option to extend up to 3 years." },
  { question: "Do your printers support wireless printing?", answer: "Yes! Our printers support Wi-Fi, Bluetooth, and cloud printing for seamless connectivity." },
  { question: "Is there a return policy?", answer: "Yes, we offer a 15-day money-back guarantee if you are not satisfied with your purchase." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 py-12 px-6 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gray-800 mb-4 p-4 rounded-lg shadow-lg cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? <FaMinus className="text-blue-400" /> : <FaPlus className="text-blue-400" />}
            </div>
            {openIndex === index && (
              <motion.p 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: "auto" }} 
                transition={{ duration: 0.3 }}
                className="text-gray-400 mt-2"
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
