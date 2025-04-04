import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPrint, 
  FaLeaf, 
  FaTruck, 
  FaEnvelope, 
  FaWhatsapp, 
  FaArrowRight,
  FaPhone,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaRegStar
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../images/15381.jpg";
import PhotocopierList from "../Components/product/product";
import FAQSection from "../Components/Comparison/FAQSection";
import Blog from "../Components/Blog/Blog";
import BannerTwo from "../Components/Comparison/BannerTwo";
import Image1 from "../images/hp.webp";
import Image6 from "../images/c03207877.webp";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Enhanced HP LaserJet Printer data with ratings
const printerProducts = [
  {
    id: 5,
    name: "HP LaserJet Pro 400 M401",
    description: "Professional-grade monochrome laser printer with enterprise-level performance.",
    features: [
      "Print speed: Up to 35 ppm",
      "Duplex printing standard",
      "350-sheet input capacity",
      "Ethernet and USB 2.0 connectivity",
      "128MB memory standard"
    ],
    price: "PKR 19,200",
    rating: 4.8,
    reviews: 124,
    image: [Image1],
    whatsapp: "https://wa.me/923330489839?text=I'm%20interested%20in%20HP%20LaserJet%20Pro%20400%20M401",
    email: "mailto:sales@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20400%20M401",
    bestSeller: true,
    ecoFriendly: true
  },
  {
    id: 10,
    name: "HP LaserJet P2015",
    description: "High-speed laser printer with reliable performance for small businesses.",
    features: [
      "Print speed: Up to 27 ppm",
      "32MB memory standard",
      "250-sheet input tray",
      "First page out in 8.5 seconds",
      "USB 2.0 and Ethernet connectivity"
    ],
    price: "PKR 15,200",
    rating: 4.5,
    reviews: 89,
    image: [Image6],
    whatsapp: "https://wa.me/923330489839?text=I'm%20interested%20in%20HP%20LaserJet%20P2015",
    email: "mailto:sales@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P2015",
    bestSeller: false,
    ecoFriendly: true
  }
];

const Home = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

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
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    },
  };

  const productCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  const handleEmailClick = (productName) => {
    window.location.href = `mailto:sales@mrtoner.pk?subject=Inquiry about ${productName}&body=I'm interested in the ${productName}. Please provide more details.`;
  };

  const handleWhatsAppClick = (productName) => {
    window.open(`https://wa.me/923330489839?text=I'm interested in the ${productName}. Please provide more details.`, '_blank');
  };

  const handleSeeAllClick = () => {
    navigate("/products");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+923330489839";
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      i < rating ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-yellow-400" />
    ));
  };

  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center h-full px-4 py-16 md:p-25 text-center bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
          minHeight: isMobile ? 'calc(100vh - 60px)' : '80vh'
        }}
      >
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Premium HP LaserJet Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Enterprise-grade printing performance for your business
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/products")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
          >
            Explore Printers
          </motion.button>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-4"
        >
          <div className="container mx-auto grid grid-cols-3 divide-x">
            <div className="px-4 py-2 text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-700">Businesses Served</div>
            </div>
            <div className="px-4 py-2 text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-700">Support Available</div>
            </div>
            <div className="px-4 py-2 text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">99%</div>
              <div className="text-gray-700">Customer Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Value Propositions */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Why Choose Our HP LaserJet Solutions?
          </motion.h2>
          
          {isMobile ? (
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
            >
              {[
                { 
                  icon: <FaPrint size={50} className="text-blue-600 mx-auto mb-4" />, 
                  title: "Genuine HP Products", 
                  desc: "100% authentic HP LaserJet printers and supplies with full manufacturer warranty",
                  bg: "bg-blue-50"
                },
                { 
                  icon: <FaLeaf size={50} className="text-green-600 mx-auto mb-4" />, 
                  title: "Eco-Friendly", 
                  desc: "Energy-efficient printers with HP's latest sustainable technologies",
                  bg: "bg-green-50"
                },
                { 
                  icon: <FaTruck size={50} className="text-orange-600 mx-auto mb-4" />, 
                  title: "Fast Delivery", 
                  desc: "Same-day delivery available for all in-stock HP LaserJet models",
                  bg: "bg-orange-50"
                }
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    variants={cardVariants}
                    className={`${item.bg} p-8 rounded-xl shadow-md h-full flex flex-col items-center text-center`}
                  >
                    {item.icon}
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <FaPrint size={50} className="text-blue-600 mb-4" />, 
                  title: "Genuine HP Products", 
                  desc: "100% authentic HP LaserJet printers and supplies with full manufacturer warranty",
                  bg: "bg-blue-50"
                },
                { 
                  icon: <FaLeaf size={50} className="text-green-600 mb-4" />, 
                  title: "Eco-Friendly", 
                  desc: "Energy-efficient printers with HP's latest sustainable technologies",
                  bg: "bg-green-50"
                },
                { 
                  icon: <FaTruck size={50} className="text-orange-600 mb-4" />, 
                  title: "Fast Delivery", 
                  desc: "Same-day delivery available for all in-stock HP LaserJet models",
                  bg: "bg-orange-50"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`${item.bg} p-8 rounded-xl shadow-md flex flex-col items-center text-center`}
                >
                  {item.icon}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Featured HP Printers Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        
        <PhotocopierList />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
              Premium HP LaserJet Printers
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSeeAllClick}
              className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition"
            >
              View Full Catalog <FaArrowRight className="ml-2" />
            </motion.button>
          </div>

          {isMobile ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
            >
              {printerProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <motion.div
                    variants={productCardVariants}
                    className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-contain p-4 bg-gray-50"
                      />
                      {product.bestSeller && (
                        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                          BEST SELLER
                        </div>
                      )}
                      {product.ecoFriendly && (
                        <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                          ECO-FRIENDLY
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                        <div className="flex items-center">
                          {renderStars(product.rating)}
                          <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-1">{product.description}</p>
                      <ul className="mt-3 space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start">
                            <span className="text-blue-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex justify-between items-center">
                        <p className="text-2xl font-bold text-blue-600">{product.price}</p>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEmailClick(product.name)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm"
                          >
                            <FaEnvelope />
                          </button>
                          <button
                            onClick={() => handleWhatsAppClick(product.name)}
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm"
                          >
                            <FaWhatsapp />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
              <button className="swiper-button-prev">
                <FaChevronLeft className="text-gray-800" />
              </button>
              <button className="swiper-button-next">
                <FaChevronRight className="text-gray-800" />
              </button>
            </Swiper>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {printerProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={productCardVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-contain p-4 bg-gray-50"
                    />
                    {product.bestSeller && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
                        BEST SELLER
                      </div>
                    )}
                    {product.ecoFriendly && (
                      <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded">
                        ECO-FRIENDLY
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                        <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <ul className="mt-3 space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex justify-between items-center">
                      <p className="text-2xl font-bold text-blue-600">{product.price}</p>
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleEmailClick(product.name)}
                          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                        >
                          <FaEnvelope className="mr-2" />
                          Email
                        </button>
                        <button
                          onClick={() => handleWhatsAppClick(product.name)}
                          className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                        >
                          <FaWhatsapp className="mr-2" />
                          WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <FAQSection />
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
      </motion.div>

      {/* Blog Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <Blog />
      </motion.div>

      {/* Final CTA Banner */}
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