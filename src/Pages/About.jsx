import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600">
            Innovating the Future of Printing Technology
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At <span className="font-semibold">PrinterPro</span>, we are dedicated to revolutionizing the printing industry with cutting-edge technology and sustainable practices. Our mission is to provide high-quality, eco-friendly printing solutions that meet the needs of businesses and individuals alike.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Shahid Hameed',
                role: 'CEO & Founder',
                image: 'https://via.placeholder.com/150',
                description: 'Sharjeel has over 20 years of experience in the printing industry and is passionate about innovation.',
              },
              {
                name: 'Jane Smith',
                role: 'Chief Technology Officer',
                image: 'https://via.placeholder.com/150',
                description: 'Jane leads our R&D team, driving the development of next-gen printing technologies.',
              },
              {
                name: 'Sharjeel shahid',
                role: 'Head of Operations & CO-Founder',
                image: 'https://via.placeholder.com/150',
                description: 'Shahid ensures our operations run smoothly and efficiently.',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly push the boundaries of printing technology to deliver groundbreaking solutions.',
              },
              {
                title: 'Sustainability',
                description: 'We are committed to reducing our environmental footprint through eco-friendly practices.',
              },
              {
                title: 'Customer Focus',
                description: 'Our customers are at the heart of everything we do. We strive to exceed their expectations.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Printing Experience?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact us today to learn more about our products and services.
          </p>
          <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300">
            Get in Touch
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;