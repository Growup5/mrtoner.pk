import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { CheckCircle, PackageCheck, Truck } from "lucide-react";
import HpLaserMfpPrinters from "../Pages/product2"
import FAQSection from "../Components/Comparison/FAQSection";
import ProductReviews from "../Components/product/ProductReviews";
import backgroundImage from "../images/15381.jpg";
import Image1 from "../images/HP LaserJet 1005 Printer.png"
import Image2 from "../images/hpaserjet1320.webp"
import Image3 from "../images/c06196739.png"
import Image4 from "../images/HP-1606.jpg"
import Image5 from "../images/c02920299.webp"
import Image6 from "../images/c03207877.webp"
import Image7 from "../images/laser.webp"
import Image8 from "../images/HP LaserJet Pro 400.webp"
import Image9 from "../images/HP LaserJet Pro 401.jpeg"
import Image10 from "../images/HP LaserJet Pro 402.jpg"
import Image11 from "../images/HP LaserJet Pro 404.jpg"
import Image12 from "../images/HP LaserJet P3015.avif"
import Image13 from "../images/c04592795.webp"
import Image14 from "../images/HP LaserJet P1012.jpg"
import Image15 from "../images/HP LaserJet 1022.webp"
import Image16 from "../images/1505.jpg"
import Image17 from "../images/201.webp"


const printers = [
    {
      id: 1,
      name: "HP LaserJet 1005 Printer",
      description: "Compact laser printer suitable for small offices.",
      features: [
        "Print speed: Up to 15 ppm (A4)",
        "First page out in as fast as 10 seconds",
        "Monthly duty cycle: Up to 5,000 pages",
        "150-sheet input tray",
        "USB 2.0 connectivity"
      ],
      price: "PKR 12,200",
      image: "https://tse4.mm.bing.net/th?id=OIP.2oVciBQSdbbBDFFoCJbWCgHaGI&pid=Api",
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%201005",
    },
    {
      id: 2,
      name: "HP LaserJet 1006 Printer",
      description: "Energy-efficient laser printer with fast first-page-out.",
      features: [
        "Print speed: Up to 16 ppm (A4)",
        "First page out in 8.5 seconds",
        "Energy Star certified",
        "128MB memory",
        "Up to 5,000-page monthly duty cycle"
      ],
      image: "https://tse3.mm.bing.net/th?id=OIP.za7rRBrn33xlH4KVHKsDkQHaFj&pid=Api",
      price: "PKR 14,700",
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%201006",
    },
    {
      id: 3,
      name: "HP LaserJet 1020 Printer",
      description: "Reliable and affordable monochrome laser printer.",
      features: [
        "Print speed: Up to 14 ppm (A4)",
        "First page out in 10 seconds",
        "150-sheet input capacity",
        "USB 2.0 connectivity",
        "Compact design (370 x 242 x 209 mm)"
      ],
      price: "PKR 12,200",
      image: "https://tse3.mm.bing.net/th?id=OIP.t_uUUI6zdsz5X-1IH1NJzQHaHa&pid=Api",
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",    
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%201020",
    },
    {
      id: 4,
      name: "HP LaserJet P1102w Printer",
      description: "Wireless laser printer with compact design.",
      features: [
        "Wireless 802.11b/g/n connectivity",
        "Print speed: Up to 19 ppm",
        "150-sheet input tray",
        "Mobile printing support",
        "Energy Star certified"
      ],
      price: "PKR 18,200",
      image: "https://tse3.mm.bing.net/th?id=OIP.JnI_LkD_zIU-e6zdcbuDUwHaFj&pid=Api",
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P1102w",
    },
    {
      id: 5,
      name: "HP LaserJet Pro 400 M401 Printer",
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
      id: 6,
      name: "HP LaserJet 1320 Printer",
      description: "Compact duplex laser printer for small businesses.",
      features: [
        "Print speed: Up to 22 ppm",
        "Automatic duplex printing",
        "250-sheet input tray",
        "First page out in 10 seconds",
        "Parallel and USB connectivity"
      ],
      price: "PKR 15,200",
      image: [Image2],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%201320",
    },
    {
      id: 7,
      name: "HP LaserJet Pro MFP 1606 Printer",
      description: "Multifunction printer with network connectivity.",
      features: [
        "Print/scan/copy functions",
        "Print speed: Up to 26 ppm",
        "35-page automatic document feeder",
        "250-sheet input tray",
        "Ethernet networking"
      ],
      price: "PKR 18,200",
      image: [Image4],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20MFP%201606dn",
    },
    {
      id: 8,
      name: "HP LaserJet Pro MFP 1606dn Printer",
      description: "Multifunction printer with network connectivity.",
      features: [
        "Print/scan/copy functions",
        "Duplex printing standard",
        "Ethernet networking",
        "Print speed: Up to 26 ppm",
        "50-page automatic document feeder"
      ],
      price: "PKR 19,000",
      image: [Image4],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20MFP%201606dn",
    },
    {
      id: 9,
      name: "HP LaserJet 1320 Printer",
      description: "Compact monochrome laser printer for office use.",
      features: [
        "Print speed: Up to 22 ppm",
        "1200 x 1200 dpi resolution",
        "8MB memory standard",
        "250-sheet input capacity",
        "First page out in 10 seconds"
      ],
      price: "PKR 15,200",
      image: [Image5],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%201320"
    },
    {
      id: 10,
      name: "HP LaserJet P2015 Printer",
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
    },
    {
      id: 11,
      name: "HP LaserJet P2035 Printer",
      description: "Fast monochrome printer for business needs.",
      features: [
        "Print speed: Up to 30 ppm",
        "48MB memory standard",
        "250-sheet input capacity",
        "1200 x 1200 dpi resolution",
        "USB 2.0 and Ethernet connectivity"
      ],
      price: "PKR 17,200",
      image: [Image3],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P2035"
    },
    {
      id: 12,
      name: "HP LaserJet P2055 Printer",
      description: "Efficient laser printer for high-volume printing.",
      features: [
        "Print speed: Up to 33 ppm",
        "64MB memory standard",
        "250-sheet input tray",
        "1200 x 1200 dpi resolution",
        "Monthly duty cycle: Up to 75,000 pages"
      ],
      price: "PKR 19,200",
      image: [Image7],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P2055"
    },
    {
      id: 13,
      name: "HP LaserJet Pro 400 Printer",
      description: "Reliable monochrome laser printer for small offices.",
      features: [
        "Print speed: Up to 35 ppm",
        "Automatic duplex printing",
        "350-sheet input capacity",
        "Ethernet networking",
        "128MB memory standard"
      ],
      image: [Image8],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20400"
    },
    {
      id: 14,
      name: "HP LaserJet Pro 401 Printer",
      description: "Compact and fast laser printer with network support.",
      features: [
        "Print speed: Up to 40 ppm",
        "256MB memory standard",
        "50-sheet multipurpose tray",
        "Ethernet and USB 2.0 connectivity",
        "First page out in 8 seconds"
      ],
      price: "PKR 23,200",
      image: [Image9],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20401"
    },
    {
      id: 15,
      name: "HP LaserJet Pro 402 Printer",
      description: "High-performance printer with fast output speed.",
      features: [
        "Print speed: Up to 45 ppm",
        "512MB memory standard",
        "550-sheet input capacity",
        "Ethernet and USB 2.0 connectivity",
        "Monthly duty cycle: Up to 150,000 pages"
      ],
      price: "PKR 26,200",
      image: [Image10],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20402"
    },
    {
      id: 16,
      name: "HP LaserJet Pro 404 Printer",
      description: "Reliable and efficient printing for business needs.",
      features: [
        "Print speed: Up to 50 ppm",
        "512MB memory standard",
        "650-sheet input capacity",
        "Duplex printing standard",
        "1200 x 1200 dpi resolution"
      ],
      price: "PKR 26,200",
      image: [Image11],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20404"
    },
    {
      id: 17,
      name: "HP LaserJet P3015 Printer",
      description: "Fast and secure printing for high-demand environments.",
      features: [
        "Print speed: Up to 47 ppm",
        "64MB memory (expandable to 576MB)",
        "500-sheet input capacity",
        "Ethernet networking",
        "First page out in 6 seconds"
      ],
      price: "PKR 20,200",
      image: [Image12],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P3015"
    },
    {
      id: 18,
      name: "HP LaserJet 605 Printer",
      description: "Enterprise-grade printer with superior speed and quality.",
      features: [
        "Print speed: Up to 55 ppm",
        "512MB memory standard",
        "1200 x 1200 dpi resolution",
        "800-sheet input capacity",
        "Monthly duty cycle: Up to 300,000 pages"
      ],
      price: "PKR 36,200",
      image: [Image13],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20605"
    },
    {
      id: 19,
      name: "HP LaserJet P1012 Printer",
      description: "Compact monochrome laser printer for personal and small office use.",
      features: [
        "Print speed: Up to 15 ppm",
        "First page out in 8.5 seconds",
        "150-sheet input tray",
        "USB 2.0 connectivity",
        "Compact design (370 x 242 x 209 mm)"
      ],
      price: "PKR 12,200",
      image: [Image14],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P1012"
    },
    {
      id: 20,
      name: "HP LaserJet P1022 Printer",
      description: "Compact monochrome laser printer for personal and small office use.",
      features: [
        "Print speed: Up to 19 ppm",
        "First page out in 8 seconds",
        "150-sheet input tray",
        "USB 2.0 connectivity",
        "8MB memory standard"
      ],
      price: "PKR 14,700",
      image: [Image15],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P1022"
    },
    {
      id: 21,
      name: "HP LaserJet P1102we Printer",
      description: "Wireless and ethernet laser printer with compact design.",
      features: [
        "Wireless and Ethernet networking",
        "Print speed: Up to 19 ppm",
        "150-sheet input tray",
        "Mobile printing support",
        "Energy Star certified"
      ],
      price: "PKR 19,200",
      image: "https://tse3.mm.bing.net/th?id=OIP.JnI_LkD_zIU-e6zdcbuDUwHaFj&pid=Api",
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P1102w",
    },
    {
      id: 22,
      name: "HP LaserJet P1505 Printer",
      description: "HP 1505 Printer—the compact powerhouse designed to elevate your printing experience.",
      features: [
        "Print speed: Up to 23 ppm",
        "First page out in 8.5 seconds",
        "150-sheet input tray",
        "USB 2.0 connectivity",
        "Compact design (370 x 242 x 209 mm)"
      ],
      price: "PKR 14,700",
      image: [Image16],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P1505",
    },
    {
      id: 23,
      name: "HP LaserJet 201dn Printer",
      description: "Fast, reliable monochrome laser printer with automatic duplex printing and network connectivity",
      features: [
        "Print speed: Up to 30 ppm",
        "Automatic duplex printing",
        "Ethernet networking",
        "250-sheet input tray",
        "First page out in 8.5 seconds"
      ],
      price: "PKR 20,200",
      image: [Image17],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20201dn",
    }
  ];
export default function PrinterList() {
  const [search, setSearch] = useState("");
  const [selectedPrinter, setSelectedPrinter] = useState(null);

  const filteredPrinters = printers.filter((printer) =>
    printer.name.toLowerCase().includes(search.toLowerCase())
  );

  const openDetails = (printer) => {
    setSelectedPrinter(printer);
  };

  const closeDetails = () => {
    setSelectedPrinter(null);
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section - Changed from blue to gray gradient */}
      <div className="bg-gradient-to-r from-gray-800 to-blue-600 py-20 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-medium mb-4">HP LaserJet Printers</h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto">
          High-quality monochrome laser printers for home and office use
        </p>
      </div>

      {/* Search and Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search Bar - Lighter version */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search HP LaserJet printers..."
              className="w-full p-3 pl-10 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white bg-opacity-70"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              className="absolute left-3 top-3 h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Printer Grid - Lighter cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrinters.length > 0 ? (
            filteredPrinters.map((printer) => (
              <motion.div
                key={printer.id}
                className="bg-white bg-opacity-70 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -3 }}
              >
                <div className="relative h-56 bg-gray-50 bg-opacity-50">
                  <img
                    src={printer.image}
                    alt={printer.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {printer.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{printer.description}</p>
                  <div className="flex items-center mb-3">
                    <span className="text-xl font-medium text-gray-700">
                      {printer.price}
                    </span>
                  </div>
                  <div className="flex space-x-2 mb-3">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-1.5 px-3 rounded-lg font-medium transition-colors text-sm"
                      onClick={() => openDetails(printer)}
                    >
                      View Details
                    </motion.button>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <motion.a
                      href={printer.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white p-1.5 rounded-full hover:bg-green-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaWhatsapp size={18} />
                    </motion.a>
                    <motion.a
                      href={printer.email}
                      className="bg-gray-500 text-white p-1.5 rounded-full hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaEnvelope size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">
                No printers found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Product Details Modal - Lighter version */}
      {selectedPrinter && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <motion.div
            className="bg-white bg-opacity-90 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="relative">
              <button
                onClick={closeDetails}
                className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="bg-gray-100 bg-opacity-50 rounded-lg p-4 flex items-center justify-center">
                  <img
                    src={selectedPrinter.image}
                    alt={selectedPrinter.name}
                    className="max-h-72 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedPrinter.name}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {selectedPrinter.description}
                  </p>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Key Features
                    </h3>
                    <ul className="space-y-1.5">
                      {selectedPrinter.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="h-4 w-4 text-green-500 mr-2 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm">Price</p>
                        <p className="text-xl font-bold text-gray-700">
                          {selectedPrinter.price}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <motion.a
                          href={selectedPrinter.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 text-white px-3 py-1.5 rounded-md flex items-center hover:bg-green-600 transition-colors text-sm"
                          whileHover={{ scale: 1.03 }}
                        >
                          <FaWhatsapp className="mr-1.5" size={14} />
                          WhatsApp
                        </motion.a>
                        <motion.a
                          href={selectedPrinter.email}
                          className="bg-gray-500 text-white px-3 py-1.5 rounded-md flex items-center hover:bg-gray-600 transition-colors text-sm"
                          whileHover={{ scale: 1.03 }}
                        >
                          <FaEnvelope className="mr-1.5" size={14} />
                          Email
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-xs text-gray-600">
                      <CheckCircle className="text-green-500 mr-1.5" size={16} />
                      <span>15-Day Money-Back Guarantee</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <PackageCheck className="text-green-500 mr-1.5" size={16} />
                      <span>In Stock: Available</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Truck className="text-gray-500 mr-1.5" size={16} />
                      <span>Delivery Charges: PKR 200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      <HpLaserMfpPrinters />
    </div>
  );
}