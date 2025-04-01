import React from "react";
import { motion } from "framer-motion";
import { 
  FaPrint, 
  FaLeaf, 
  FaTruck, 
  FaEnvelope, 
  FaWhatsapp, 
  FaArrowRight,
  FaPhone,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../images/15381.jpg";
import PhotocopierList from "../Components/product/product";
import FAQSection from "../Components/Comparison/FAQSection";
import Blog from "../Components/Blog/Blog";
import BannerTwo from "../Components/Comparison/BannerTwo";
import Image1 from "../images/hp.webp";
import Image6 from "../images/c03207877.webp";
import AdvancedGallery from "../Components/product/scroll";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// HP LaserJet Printer data
const printerProducts = [
  {
    id: 5,
    name: "HP LaserJet Pro 400 M401",
    description: "Professional-grade monochrome laser printer.",
    features: [
      "Print speed: Up to 35 ppm",
      "Duplex printing standard",
      "350-sheet input capacity",
      "Ethernet and USB 2.0 connectivity",
      "128MB memory standard"
    ],
    price: "PKR 19,200",
    image: [Image1],
    whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20400%20M401",
  },
  {
    id: 10,
    name: "HP LaserJet P2015",
    description: "High-speed laser printer with reliable performance.",
    features: [
      "Print speed: Up to 27 ppm",
      "32MB memory standard",
      "250-sheet input tray",
      "First page out in 8.5 seconds",
      "USB 2.0 and Ethernet connectivity"
    ],
    price: "PKR 15,200",
    image: [Image6],
    whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P2015"
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
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
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
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
    }
  };

  const handleEmailClick = (productName) => {
    window.location.href = `mailto:sales@mrtoner.com?subject=Inquiry about ${productName}&body=I'm interested in the ${productName}. Please provide more details.`;
  };

  const handleWhatsAppClick = (productName) => {
    window.open(`https://wa.me/1234567890?text=I'm interested in the ${productName}. Please provide more details.`, '_blank');
  };

  const handleSeeAllClick = () => {
    navigate("/products");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+923004601659";
  };

  return (
    <>
      {/* Floating Action Button (FAB) for Mobile */}
      {isMobile && (
        <div className="fixed bottom-6 right-6 z-40">
          <div className="flex flex-col items-end space-y-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCallClick}
              className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
            >
              <FaPhone className="text-xl" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleWhatsAppClick("Product Inquiry")}
              className="bg-green-600 text-white p-4 rounded-full shadow-lg"
            >
              <FaWhatsapp className="text-xl" />
            </motion.button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center h-full px-4 py-16 md:p-25 text-center bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          minHeight: isMobile ? 'calc(100vh - 60px)' : '80vh'
        }}
      >
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.8, delay: 0.2 }}
          className="relative text-3xl md:text-5xl lg:text-6xl font-extrabold text-white"
        >
          Welcome to Mr. Toner
        </motion.h1>

        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.8, delay: 0.4 }}
          className="relative text-base md:text-xl text-white mt-4 px-4"
        >
          Your trusted HP LaserJet printer specialist
        </motion.p>

        {isMobile ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full mt-8 px-4"
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="w-full"
            >
              {[
                { icon: <FaPrint size={40} className="text-gray-900 mx-auto" />, title: "Original HP Toners", desc: "Genuine HP toner cartridges for best performance" },
                { icon: <FaLeaf size={40} className="text-green-600 mx-auto" />, title: "Cost-Effective", desc: "Affordable printing solutions for your business" },
                { icon: <FaTruck size={40} className="text-blue-600 mx-auto" />, title: "Same Day Delivery", desc: "Get your printers delivered within 24 hours" }
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    variants={cardVariants}
                    className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center cursor-pointer w-full h-full"
                  >
                    {item.icon}
                    <h3 className="text-xl font-bold text-gray-900 mt-3">{item.title}</h3>
                    <p className="text-gray-700 mt-2 text-center">{item.desc}</p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10 w-full px-4 md:max-w-7xl mx-auto"
          >
            {[
              { icon: <FaPrint size={40} className="text-gray-900" />, title: "Original HP Toners", desc: "Genuine HP toner cartridges for best performance" },
              { icon: <FaLeaf size={40} className="text-green-600" />, title: "Cost-Effective", desc: "Affordable printing solutions for your business" },
              { icon: <FaTruck size={40} className="text-blue-600" />, title: "Same Day Delivery", desc: "Get your printers delivered within 24 hours" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center cursor-pointer w-full"
              >
                {item.icon}
                <h3 className="text-xl font-bold text-gray-900 mt-3">{item.title}</h3>
                <p className="text-gray-700 mt-2 text-center">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Featured HP Printers Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <PhotocopierList />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-8 md:py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
              HP LaserJet Printers
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSeeAllClick}
              className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition"
            >
              See All Printers <FaArrowRight className="ml-2" />
            </motion.button>
          </div>

          {isMobile ? (
            <div className="relative">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
                className="w-full"
              >
                {printerProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <motion.div
                      variants={productCardVariants}
                      className="bg-white rounded-lg overflow-hidden shadow-md"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-contain p-4 bg-gray-100"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                        <p className="text-gray-600 mt-1">{product.description}</p>
                        <ul className="mt-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-700">• {feature}</li>
                          ))}
                        </ul>
                        <p className="text-2xl font-bold text-blue-600 mt-3">{product.price}</p>

                        <div className="mt-6 flex flex-col space-y-3">
                          <button
                            onClick={() => handleEmailClick(product.name)}
                            className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                          >
                            <FaEnvelope className="mr-2" />
                            Email Inquiry
                          </button>
                          <button
                            onClick={() => handleWhatsAppClick(product.name)}
                            className="flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                          >
                            <FaWhatsapp className="mr-2" />
                            WhatsApp
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="swiper-button-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                <FaChevronLeft className="text-gray-800" />
              </button>
              <button className="swiper-button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                <FaChevronRight className="text-gray-800" />
              </button>
            </div>
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
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-contain p-4 bg-gray-100"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 mt-1">{product.description}</p>
                    <ul className="mt-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-700">• {feature}</li>
                      ))}
                    </ul>
                    <p className="text-2xl font-bold text-blue-600 mt-3">{product.price}</p>

                    <div className="mt-6 flex space-x-3">
                      <button
                        onClick={() => handleEmailClick(product.name)}
                        className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                      >
                        <FaEnvelope className="mr-2" />
                        Email Inquiry
                      </button>
                      <button
                        onClick={() => handleWhatsAppClick(product.name)}
                        className="flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                      >
                        <FaWhatsapp className="mr-2" />
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="px-4"
      >
        <FAQSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="px-4"
      >
        <AdvancedGallery />
        <Blog />
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