import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ProductFAQ from "../Components/product/ProductFAQ";
import ProductReviews from "../Components/product/ProductReviews";
import ProductAccessories from "../Components/product/ProductAccessories";
import ProductGallery from "../Components/product/ProductGallery";
import backgroundImage from "../images/15381.jpg";
import image1 from "../images/W1A53A.png";
import Image2 from "../images/HP LaserJet MFP M141w Printer.png"
import Image3 from "../images/HP LaserJet M111w Printer.png"
import Image4 from "../images/HP LaserJet Pro 4003dn Printer (2Z609A).png"
import Image5 from "../images/HP DeskJet 2320.png"
import Image6 from "../images/HP Neverstop Laser MFP 1200a printer.png"
import Image7 from "../images/Pantum P2200 Laser Printer (Grey).jpg"
import Image8 from "../images/Pantum M6550nw Mono Laser Multifunction Printer.jpg"
import Image9 from "../images/HP LaserJet Pro MFP M28w.png"
import Image10 from "../images/HP LaserJet Pro M227fdn MFP Printer.png"
import Image11 from "../images/HP Laser MFP 137fnw ww-en.png"
import Image12 from "../images/HP Laser MFP 135a ww-en.png"
import Image13 from "../images/HP LaserJet M404dn printe.png"
import Image14 from "../images/HP LaserJet M111a monochrome Printer.png"
import Image15 from "../images/HP LaserJet Enterprise Color M5525n Printer.webp" 
import Image16 from "../images/HP Color LaserJet Pro M454dw Printer.jpg"
import Image17 from "../images/HP 107w Wireless LaserJet Printer.png"



const printers = [
  {
    id: 1,
    name: "HP LaserJet MFP M135a Printer",
    description: "A compact multifunction laser printer offering printing, scanning, and copying capabilities.",
    image: [image1],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 2,
    name: "HP LaserJet MFP M141w Printer",
    description: "Wireless multifunction laser printer with efficient performance and mobile printing support.",
    image: [Image2],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 4,
    name: "HP LaserJet M111w Printer",
    description: "Compact monochrome laser printer with wireless connectivity, suitable for small spaces.",
    image: [Image3],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 6,
    name: "HP DeskJet 2320",
    description: "Affordable all-in-one inkjet printer ideal for everyday home printing, scanning, and copying.",
    image: {Image5},
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 13,
    name: "HP 107w Wireless LaserJet Printer",
    description: "Affordable wireless monochrome laser printer with easy mobile printing options.",
    image: [Image17],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 5,
    name: "HP LaserJet Pro 4003dn Printer (2Z609A)",
    description: "Professional-grade monochrome laser printer with duplex printing and network capabilities.",
    image: {Image4},
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 14,
    name: "HP Color LaserJet Pro M454dw Printer",
    description: "High-quality color laser printer with duplex printing and wireless connectivity.",
    image: [Image16],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 15,
    name: "HP LaserJet Enterprise Color M5525n Printer",
    description: "Enterprise-level color laser printer designed for high-volume printing with advanced features.",
    image: [Image15],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 16,
    name: "HP LaserJet M111a monochrome Printer",
    description: "Entry-level monochrome laser printer offering reliable performance for everyday printing needs.",
    image: [Image14],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 17,
    name: "HP LaserJet M404dn printer",
    description: "Reliable monochrome laser printer with duplex printing and strong security features.",
    image: [Image13],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 18,
    name: "HP Laser MFP 135a ww-en",
    description: "Compact multifunction laser printer offering printing, scanning, and copying capabilities.",
    image: [Image12],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 19,
    name: "HP Laser MFP 137fnw ww-en",
    description: "Multifunction laser printer with fax, network, and wireless capabilities for versatile use.",
    image: [Image11],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 20,
    name: "HP LaserJet Pro M227fdn MFP Printer",
    description: "Multifunction monochrome laser printer with duplex printing, scanning, copying, and faxing.",
    image: [Image10],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 21,
    name: "HP LaserJet Pro MFP M28w",
    description: "Compact multifunction laser printer with wireless connectivity for home and small office use.",
    image: [Image9],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 22,
    name: "Pantum M6550nw Mono Laser Multifunction Printer",
    description: "Monochrome laser printer with wireless connectivity, offering printing, scanning, copying, and faxing.",
    image: [Image8],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 23,
    name: "Pantum P2200 Laser Printer (Grey)",
    description: "Affordable monochrome laser printer with fast printing speeds and compact design.",
    image: [Image7],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
  },
  {
    id: 24,
    name: "HP Neverstop Laser MFP 1200a printer",
    description: "Innovative laser printer with refillable toner system, offering cost-effective printing.",
    image: [Image6],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20MFP%20M135a%20Printer",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20MFP%20M135a%20Printer",
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center h-80 p-25 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="relative text-6xl font-extrabold text-white">Printer Catalog</h1>
      </motion.div>

      <motion.div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <motion.input
            type="text"
            placeholder="Search printers..."
            className="w-1/2 p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrinters.length > 0 ? (
            filteredPrinters.map((printer) => (
              <motion.div 
                key={printer.id} 
                className="border p-5 rounded-lg shadow-lg bg-white flex flex-col items-center text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={printer.image} alt={printer.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                <h2 className="text-xl font-semibold mb-2">{printer.name}</h2>
                <p className="text-gray-700 mb-3">{printer.description}</p>
                <div className="flex space-x-4 mt-3">
                  <motion.a
                    href={printer.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaWhatsapp size={24} />
                  </motion.a>
                  <motion.a
                    href={printer.email}
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaEnvelope size={24} />
                  </motion.a>
                </div>
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
