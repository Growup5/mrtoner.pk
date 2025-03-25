import React from "react";
import { motion } from "framer-motion";
import { FaPrint, FaLeaf, FaTruck } from "react-icons/fa";
import backgroundImage from "../images/15381.jpg";
import PhotocopierList from "../Components/product/product";
import FAQSection from "../Components/Comparison/FAQSection";
import Blog from "../Components/Blog/Blog";
import BannerTwo from "../Components/Comparison/BannerTwo";
import AdvancedGallery from "../Components/product/scroll";
const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", ease: "easeOut", duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center h-full p-25 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.8, delay: 0.2 }}
          className="relative text-6xl font-extrabold text-white"
        >
          Welcome to Mr. Toner
        </motion.h1>

        {/* Animated Subtext with Slide-In */}
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.8, delay: 0.4 }}
          className="relative text-xl text-white mt-4"
        >
          Your one-stop shop for all printer needs.
        </motion.p>

        {/* Grid Cards with Slide-Up and Hover Effects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl"
        >
          {[
            { icon: <FaPrint size={40} className="text-gray-900" />, title: "High-Quality Printing", desc: "Experience premium printing with our advanced toner solutions." },
            { icon: <FaLeaf size={40} className="text-green-600" />, title: "Eco-Friendly Toners", desc: "Sustainable and cost-effective toner options available." },
            { icon: <FaTruck size={40} className="text-blue-600" />, title: "Fast & Reliable Delivery", desc: "Get your toner supplies delivered quickly and efficiently." }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center cursor-pointer"
            >
              {item.icon}
              <h3 className="text-2xl font-bold text-gray-900 mt-3">{item.title}</h3>
              <p className="text-gray-700 mt-2 text-center">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <PhotocopierList />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <FAQSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
      <AdvancedGallery />
        <Blog />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        >
        {/* <FAQSection /> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
      >
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
        >
        <BannerTwo />
      </motion.div>

    </>
  )
};

export default Home;