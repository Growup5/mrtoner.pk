import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductFAQ from "../Components/product/ProductFAQ";
import ProductReviews from "../Components/product/ProductReviews";
import ProductAccessories from "../Components/product/ProductAccessories";
import ProductGallery from "../Components/product/ProductGallery";


const printers = [
  {
    id: 1,
    name: "HP LaserJet MFP M135a Printer",
    description: "A compact multifunction laser printer offering printing, scanning, and copying capabilities.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "HP LaserJet MFP M141w Printer",
    description: "Wireless multifunction laser printer with efficient performance and mobile printing support.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Epson EcoTank L3250 / L3251",
    description: "EcoTank printer with refillable ink tanks for cost-effective and high-quality color printing.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "HP LaserJet M111w Printer",
    description: "Compact monochrome laser printer with wireless connectivity, suitable for small spaces.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "HP LaserJet Pro 4003dn Printer (2Z609A)",
    description: "Professional-grade monochrome laser printer with duplex printing and network capabilities.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "HP DeskJet 2320",
    description: "Affordable all-in-one inkjet printer ideal for everyday home printing, scanning, and copying.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "HP LaserJet MFP M141a Printer",
    description: "Efficient multifunction laser printer with print, scan, and copy functions in a compact design.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "HP LaserJet MFP M236dw Printer",
    description: "Duplex wireless monochrome laser printer offering fast printing and robust security features.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "HP LaserJet MFP M236sdn Printer",
    description: "Multifunction laser printer with duplex printing, scanning, copying, and network connectivity.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Pantum M6500nw Mono Laser Multifunction Printer",
    description: "Monochrome laser printer with wireless connectivity, offering printing, scanning, and copying.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    name: "Pantum P2500W Wireless Printer",
    description: "Compact wireless monochrome laser printer suitable for home and small office use.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "Canon Lbp6030 Laser Jet Imageclass Printer",
    description: "Compact and efficient monochrome laser printer designed for personal and small office use.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    name: "HP 107w Wireless LaserJet Printer",
    description: "Affordable wireless monochrome laser printer with easy mobile printing options.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    name: "HP Color LaserJet Pro M454dw Printer",
    description: "High-quality color laser printer with duplex printing and wireless connectivity.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    name: "HP LaserJet Enterprise Color M5525n Printer",
    description: "Enterprise-level color laser printer designed for high-volume printing with advanced features.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 16,
    name: "HP LaserJet M111a monochrome Printer",
    description: "Entry-level monochrome laser printer offering reliable performance for everyday printing needs.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    name: "HP LaserJet M404dn printer",
    description: "Reliable monochrome laser printer with duplex printing and strong security features.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    name: "HP Laser MFP 135a ww-en",
    description: "Compact multifunction laser printer offering printing, scanning, and copying capabilities.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 19,
    name: "HP Laser MFP 137fnw ww-en",
    description: "Multifunction laser printer with fax, network, and wireless capabilities for versatile use.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 20,
    name: "HP LaserJet Pro M227fdn MFP Printer",
    description: "Multifunction monochrome laser printer with duplex printing, scanning, copying, and faxing.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 21,
    name: "HP LaserJet Pro MFP M28w",
    description: "Compact multifunction laser printer with wireless connectivity for home and small office use.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 22,
    name: "Pantum M6550nw Mono Laser Multifunction Printer",
    description: "Monochrome laser printer with wireless connectivity, offering printing, scanning, copying, and faxing.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 23,
    name: "Pantum P2200 Laser Printer (Grey)",
    description: "Affordable monochrome laser printer with fast printing speeds and compact design.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 24,
    name: "HP Neverstop Laser MFP 1200a printer",
    description: "Innovative laser printer with refillable toner system, offering cost-effective printing.",
    image: "https://via.placeholder.com/150",
  },
];

export default function PrinterList() {
  const [search, setSearch] = useState("");

  const filteredPrinters = printers.filter((printer) =>
    printer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 max-w-6xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Printer Catalog</h1>
        <div className="flex justify-center mb-6">
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            type="text"
            placeholder="Search printers..."
            className="w-1/2 p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {filteredPrinters.length > 0 ? (
            filteredPrinters.map((printer) => (
              <motion.div 
                key={printer.id} 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="border p-5 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <img
                  src={printer.image}
                  alt={printer.name}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h2 className="text-xl font-semibold mb-2">{printer.name}</h2>
                <p className="text-gray-700 mb-3">{printer.description}</p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Contact Now
                </motion.button>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">No printers found.</p>
          )}
        </motion.div>
      </motion.div>
      <ProductFAQ />
      <ProductReviews />
      <ProductAccessories />
      <ProductGallery />
    </>
  );
}
