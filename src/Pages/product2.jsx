import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaRegStar, FaStar, FaPrint, FaWifi, FaCopy, FaFax } from "react-icons/fa";
import { CheckCircle, PackageCheck, Truck, ChevronDown, ChevronUp, X } from "lucide-react";
import Image1 from "../images/201.webp";

const hpLaserMfpPrinters = [
    {
      id: 4,
      name: "HP LaserJet 15 36",
      description: "Compact all-in-one laser printer for small offices with basic scanning and copying functions.",
      features: [
        "Print/Scan/Copy",
        "Compact design",
        "Fast first page out",
        "Energy efficient",
        "Easy setup"
      ],
      specs: {
        "Print Speed": "Up to 19 ppm",
        "First Page Out": "As fast as 8.5 seconds",
        "Display": "Simple LED control panel",
        "Connectivity": "USB",
        "Monthly Duty Cycle": "Up to 15,000 pages"
      },
      price: "PKR 35,000",
      rating: 4.3,
      image: [Image],
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%2015%2036",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%2015%2036",
    },
    {
      id: 5,
      name: "HP LaserJet 127",
      description: "Reliable monochrome all-in-one laser printer with scanning and copying capabilities.",
      features: [
        "Print/Scan/Copy",
        "Compact footprint",
        "150-sheet input tray",
        "Energy Star certified",
        "Easy wireless setup"
      ],
      specs: {
        "Print Speed": "Up to 20 ppm",
        "First Page Out": "As fast as 7.8 seconds",
        "Display": "Simple LCD panel",
        "Connectivity": "USB, Wi-Fi",
        "Monthly Duty Cycle": "Up to 20,000 pages"
      },
      price: "PKR 30,000",
      rating: 4.2,
      image: "https://www.hp.com/content/dam/sites/worldwide/printers/laserjet/images/product/m127fn/print-scan-copy-fax/HP-LaserJet-Pro-M127fn-front-view.png",
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%20127",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20127",
    },
    {
      id: 6,
      name: "HP LaserJet 1212",
      description: "Basic monochrome all-in-one laser printer for home and small office use.",
      features: [
        "Print/Scan/Copy",
        "Compact size",
        "Easy to use",
        "Energy efficient",
        "Reliable performance"
      ],
      specs: {
        "Print Speed": "Up to 18 ppm",
        "First Page Out": "As fast as 8.2 seconds",
        "Display": "Basic control panel",
        "Connectivity": "USB",
        "Monthly Duty Cycle": "Up to 15,000 pages"
      },
      price: "PKR 26,000",
      rating: 4.1,
      image: "https://www.hp.com/content/dam/sites/worldwide/printers/laserjet/images/product/m1212nf/print-scan-copy-fax/HP-LaserJet-Pro-M1212nf-front-view.png",
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201212",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%201212",
    },
    {
      id: 7,
      name: "HP LaserJet 1132",
      description: "Compact monochrome all-in-one laser printer with basic scanning and copying functions.",
      features: [
        "Print/Scan/Copy",
        "Small footprint",
        "Fast printing",
        "Easy to maintain",
        "Reliable performance"
      ],
      specs: {
        "Print Speed": "Up to 19 ppm",
        "First Page Out": "As fast as 8.5 seconds",
        "Display": "Basic control panel",
        "Connectivity": "USB",
        "Monthly Duty Cycle": "Up to 15,000 pages"
      },
      price: "PKR 26,000",
      rating: 4.0,
      image: "https://www.hp.com/content/dam/sites/worldwide/printers/laserjet/images/product/m1136/print-scan-copy/HP-LaserJet-Pro-M1136-front-view.png",
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201132",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%201132",
    },
    {
      id: 8,
      name: "HP LaserJet 2727",
      description: "Monochrome all-in-one laser printer with wireless connectivity and automatic document feeder.",
      features: [
        "Print/Scan/Copy",
        "Wireless connectivity",
        "35-page ADF",
        "Mobile printing",
        "Energy Star certified"
      ],
      specs: {
        "Print Speed": "Up to 22 ppm",
        "First Page Out": "As fast as 7.5 seconds",
        "Display": "2-line LCD",
        "Connectivity": "USB, Wi-Fi",
        "Monthly Duty Cycle": "Up to 25,000 pages"
      },
      price: "PKR 32,000",
      rating: 4.4,
      image: "https://www.hp.com/content/dam/sites/worldwide/printers/laserjet/images/product/m227fdw/print-scan-copy-fax/HP-LaserJet-Pro-M227fdw-front-view.png",
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%202727",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%202727",
    },
    {
      id: 9,
      name: "HP LaserJet 3390",
      description: "Monochrome all-in-one laser printer with fax capability and automatic document feeder.",
      features: [
        "Print/Scan/Copy/Fax",
        "35-page ADF",
        "Built-in fax",
        "Network ready",
        "Energy efficient"
      ],
      specs: {
        "Print Speed": "Up to 24 ppm",
        "First Page Out": "As fast as 7.2 seconds",
        "Display": "2.4-inch color touchscreen",
        "Connectivity": "USB, Ethernet",
        "Monthly Duty Cycle": "Up to 30,000 pages"
      },
      price: "PKR 32,000",
      rating: 4.3,
      image: "https://www.hp.com/content/dam/sites/worldwide/printers/laserjet/images/product/m329dw/print-scan-copy-fax/HP-LaserJet-Pro-M329dw-front-view.png",
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%203390",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%203390",
    },
    {
      id: 10,
      name: "HP LaserJet 425",
      description: "High-performance monochrome all-in-one laser printer for medium-sized offices.",
      features: [
        "Print/Scan/Copy/Fax",
        "Fast printing speed",
        "Large paper capacity",
        "Advanced security",
        "Network ready"
      ],
      specs: {
        "Print Speed": "Up to 40 ppm",
        "First Page Out": "As fast as 6.5 seconds",
        "Display": "4.3-inch color touchscreen",
        "Connectivity": "USB, Ethernet, Wi-Fi",
        "Monthly Duty Cycle": "Up to 75,000 pages"
      },
      price: "PKR 45,000",
      rating: 4.6,
      image: "https://www.hp.com/content/dam/sites/worldwide/printers/laserjet/images/product/m425dn/print-scan-copy-fax/HP-LaserJet-Pro-M425dn-front-view.png",
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%20425",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20425",
    },
    {
      id: 11,
      name: "HP LaserJet 3052",
      description: "Compact all-in-one laser printer with basic scanning and copying functions.",
      features: [
        "Print/Scan/Copy",
        "Compact design",
        "Easy to use",
        "Reliable performance",
        "Energy efficient"
      ],
      specs: {
        "Print Speed": "Up to 19 ppm",
        "First Page Out": "As fast as 8.5 seconds",
        "Display": "Basic control panel",
        "Connectivity": "USB",
        "Monthly Duty Cycle": "Up to 15,000 pages"
      },
      price: "PKR 25,000",
      rating: 4.0,
      image: "https://www.hp.com/content/dam/sites/worldwide/printers/laserjet/images/product/m3055/print-scan-copy/HP-LaserJet-Pro-M3055-front-view.png",
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%203052",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%203052",
    },
    {
      id: 12,
      name: "HP LaserJet 1522",
      description: "Monochrome all-in-one laser printer with basic scanning and copying functions.",
      features: [
        "Print/Scan/Copy",
        "Compact size",
        "Fast printing",
        "Easy maintenance",
        "Reliable performance"
      ],
      specs: {
        "Print Speed": "Up to 23 ppm",
        "First Page Out": "As fast as 8 seconds",
        "Display": "Basic LCD panel",
        "Connectivity": "USB",
        "Monthly Duty Cycle": "Up to 20,000 pages"
      },
      price: "PKR 25,000",
      rating: 4.1,
      image: "https://www.hp.com/content/dam/sites/worldwide/printers/laserjet/images/product/m1522nf/print-scan-copy-fax/HP-LaserJet-Pro-M1522nf-front-view.png",
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%201522",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%201522",
    },
    {
      id: 13,
      name: "HP LaserJet 225",
      description: "Monochrome all-in-one laser printer with network connectivity and automatic document feeder.",
      features: [
        "Print/Scan/Copy",
        "Network ready",
        "35-page ADF",
        "Fast printing",
        "Energy efficient"
      ],
      specs: {
        "Print Speed": "Up to 30 ppm",
        "First Page Out": "As fast as 7 seconds",
        "Display": "2-line LCD",
        "Connectivity": "USB, Ethernet",
        "Monthly Duty Cycle": "Up to 40,000 pages"
      },
      price: "PKR 38,000",
      rating: 4.5,
      image: "https://www.hp.com/content/dam/sites/worldwide/printers/laserjet/images/product/m225dn/print-scan-copy/HP-LaserJet-Pro-M225dn-front-view.png",
      whatsapp: "https://wa.me/923004601659?text=I'm%20interested%20in%20HP%20LaserJet%20225",
      email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20225",
    },
  ];


export default function HpLaserMfpPrinters() {
  const [search, setSearch] = useState("");
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [expandedSpecs, setExpandedSpecs] = useState(false);
  const [compareMode, setCompareMode] = useState(false);
  const [selectedForCompare, setSelectedForCompare] = useState([]);

  const filteredPrinters = hpLaserMfpPrinters.filter((printer) =>
    printer.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleCompare = (printerId) => {
    if (selectedForCompare.includes(printerId)) {
      setSelectedForCompare(selectedForCompare.filter(id => id !== printerId));
    } else {
      if (selectedForCompare.length < 3) {
        setSelectedForCompare([...selectedForCompare, printerId]);
      }
    }
  };

  const printersToCompare = hpLaserMfpPrinters.filter(printer => 
    selectedForCompare.includes(printer.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-900 py-24 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          HP Laser MFP Printers
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300"
        >
          Professional multifunction laser printers with cutting-edge technology
        </motion.p>
      </div>

      {/* Compare Bar */}
      {selectedForCompare.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-lg fixed bottom-0 left-0 right-0 z-40 py-3 px-6 border-t border-gray-200"
        >
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-700">
                {selectedForCompare.length} printer(s) selected
              </span>
              <button 
                onClick={() => setCompareMode(true)}
                className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Compare Now
              </button>
            </div>
            <button 
              onClick={() => setSelectedForCompare([])}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 pb-24">
        {/* Search and Compare Controls */}
        <div className="max-w-4xl mx-auto mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              placeholder="Search HP Laser MFP printers..."
              className="w-full p-4 pl-12 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              className="absolute left-4 top-4 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button
            onClick={() => setCompareMode(!compareMode)}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${compareMode ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {compareMode ? 'Exit Compare' : 'Compare Printers'}
          </button>
        </div>

        {/* Comparison Table */}
        {compareMode && selectedForCompare.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 border border-gray-200"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-medium text-gray-700">Feature</th>
                    {printersToCompare.map(printer => (
                      <th key={printer.id} className="px-6 py-4 text-center font-medium text-gray-900">
                        {printer.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">Price</td>
                    {printersToCompare.map(printer => (
                      <td key={printer.id} className="px-6 py-4 text-center">
                        <span className="font-bold text-gray-800">{printer.price}</span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">Rating</td>
                    {printersToCompare.map(printer => (
                      <td key={printer.id} className="px-6 py-4 text-center">
                        <div className="flex justify-center items-center">
                          {[...Array(5)].map((_, i) => (
                            i < Math.floor(printer.rating) ? 
                              <FaStar key={i} className="text-yellow-400" /> : 
                              <FaRegStar key={i} className="text-gray-300" />
                          ))}
                          <span className="ml-1 text-gray-600">({printer.rating})</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  {Object.keys(printersToCompare[0].specs).map(spec => (
                    <tr key={spec}>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">{spec}</td>
                      {printersToCompare.map(printer => (
                        <td key={`${printer.id}-${spec}`} className="px-6 py-4 text-center">
                          {printer.specs[spec]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Printer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrinters.length > 0 ? (
            filteredPrinters.map((printer) => (
              <motion.div
                key={printer.id}
                className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative border border-gray-200 ${selectedForCompare.includes(printer.id) ? 'ring-2 ring-gray-500' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                {/* Compare Checkbox */}
                {compareMode && (
                  <div className="absolute top-4 left-4 z-10">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedForCompare.includes(printer.id)}
                        onChange={() => toggleCompare(printer.id)}
                        className="h-5 w-5 text-gray-600 rounded focus:ring-gray-500"
                      />
                    </label>
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    New
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    In Stock
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative h-64 bg-gray-50">
                  <img
                    src={printer.image}
                    alt={printer.name}
                    className="w-full h-full object-contain p-6"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/30 to-transparent p-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        i < Math.floor(printer.rating) ? 
                          <FaStar key={i} className="text-yellow-400" /> : 
                          <FaRegStar key={i} className="text-gray-300" />
                      ))}
                      <span className="ml-1 text-white text-sm">({printer.rating})</span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{printer.name}</h3>
                  <p className="text-gray-600 mb-4">{printer.description}</p>
                  
                  {/* Key Icons */}
                  <div className="flex space-x-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaPrint className="text-gray-600 mr-1" />
                      <span>Print</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaCopy className="text-gray-600 mr-1" />
                      <span>Copy</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaWifi className="text-gray-600 mr-1" />
                      <span>Wi-Fi</span>
                    </div>
                    {printer.features.includes("Fax") && (
                      <div className="flex items-center text-sm text-gray-600">
                        <FaFax className="text-gray-600 mr-1" />
                        <span>Fax</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-800">{printer.price}</span>
                    <button 
                      onClick={() => setExpandedSpecs(!expandedSpecs)}
                      className="text-gray-600 hover:text-gray-800 flex items-center text-sm"
                    >
                      {expandedSpecs ? 'Hide Specs' : 'Quick Specs'} 
                      {expandedSpecs ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                    </button>
                  </div>

                  {/* Expanded Specs */}
                  {expandedSpecs && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4 overflow-hidden"
                    >
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-2">Key Specifications:</h4>
                        <ul className="space-y-2 text-sm">
                          {Object.entries(printer.specs).slice(0, 3).map(([key, value]) => (
                            <li key={key} className="flex justify-between">
                              <span className="text-gray-600">{key}:</span>
                              <span className="font-medium text-gray-800">{value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                      onClick={() => setSelectedPrinter(printer)}
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-xl">No printers found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedPrinter && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div 
              className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="relative">
                <button 
                  onClick={() => setSelectedPrinter(null)}
                  className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors z-10"
                >
                  <X size={24} />
                </button>
                
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Single Product Image */}
                  <div className="sticky top-0">
                    <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center h-96 border border-gray-200">
                      <img 
                        src={selectedPrinter.image} 
                        alt={selectedPrinter.name} 
                        className="max-h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedPrinter.name}</h2>
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        i < Math.floor(selectedPrinter.rating) ? 
                          <FaStar key={i} className="text-yellow-400" /> : 
                          <FaRegStar key={i} className="text-gray-300" />
                      ))}
                      <span className="ml-2 text-gray-600">({selectedPrinter.rating})</span>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-6">{selectedPrinter.description}</p>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800 border-b pb-2">Key Features</h3>
                      <ul className="space-y-3">
                        {selectedPrinter.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-gray-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Full Specifications */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800 border-b pb-2">Technical Specifications</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <tbody className="divide-y divide-gray-200">
                            {Object.entries(selectedPrinter.specs).map(([key, value]) => (
                              <tr key={key}>
                                <td className="py-3 px-4 font-medium text-gray-600">{key}</td>
                                <td className="py-3 px-4 text-gray-800">{value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    {/* Price and CTA */}
                    <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-4 md:mb-0">
                          <p className="text-gray-600">Our Price</p>
                          <p className="text-3xl font-bold text-gray-800">{selectedPrinter.price}</p>
                          <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>
                        </div>
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-3 md:flex-row">
                          <motion.a
                            href={selectedPrinter.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
                            whileHover={{ scale: 1.02 }}
                          >
                            <FaWhatsapp className="mr-2 text-xl" />
                            Chat on WhatsApp
                          </motion.a>
                          <motion.a
                            href={selectedPrinter.email}
                            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
                            whileHover={{ scale: 1.02 }}
                          >
                            <FaEnvelope className="mr-2 text-xl" />
                            Email Inquiry
                          </motion.a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center mb-2">
                          <CheckCircle className="text-gray-600 mr-2" size={20} />
                          <span className="font-medium">Warranty</span>
                        </div>
                        <p className="text-sm text-gray-600">1-year manufacturer warranty</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center mb-2">
                          <PackageCheck className="text-gray-600 mr-2" size={20} />
                          <span className="font-medium">Availability</span>
                        </div>
                        <p className="text-sm text-gray-600">In stock, ready to ship</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center mb-2">
                          <Truck className="text-gray-600 mr-2" size={20} />
                          <span className="font-medium">Delivery</span>
                        </div>
                        <p className="text-sm text-gray-600">Free shipping in major cities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}