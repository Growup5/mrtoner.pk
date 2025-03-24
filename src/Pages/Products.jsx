import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { CheckCircle, PackageCheck, Truck } from "lucide-react";
import FAQSection from "../Components/Comparison/FAQSection";
import ProductReviews from "../Components/product/ProductReviews";
// import ProductAccessories from "../Components/product/ProductAccessories";
// import ProductGallery from "../Components/product/ProductGallery";
import backgroundImage from "../images/15381.jpg";
import Image1 from "../images/hp.webp"
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
    name: "HP LaserJet 1005",
    description: "Compact laser printer suitable for small offices.",
    price: "PKR 12,200",
    image: "https://tse4.mm.bing.net/th?id=OIP.2oVciBQSdbbBDFFoCJbWCgHaGI&pid=Api",
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%201005",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%201005",
  },
  {
    id: 2,
    name: "HP LaserJet 1006",
    description: "Energy-efficient laser printer with fast first-page-out.",
    image: "https://tse3.mm.bing.net/th?id=OIP.za7rRBrn33xlH4KVHKsDkQHaFj&pid=Api",
    price: "PKR 14,700",
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%201006",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%201006",
  },
  {
    id: 3,
    name: "HP LaserJet 1020",
    description: "Reliable and affordable monochrome laser printer.",
    price: "PKR 12,200",
    image: "https://tse3.mm.bing.net/th?id=OIP.t_uUUI6zdsz5X-1IH1NJzQHaHa&pid=Api",
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%201020",
    
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%201020",
  },
  {
    id: 4,
    name: "HP LaserJet P1102w",
    description: "Wireless laser printer with compact design.",
    price: "PKR 18,200",
    image: "https://tse3.mm.bing.net/th?id=OIP.JnI_LkD_zIU-e6zdcbuDUwHaFj&pid=Api",
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20P1102w",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P1102w",
  },
  {
    id: 5,
    name: "HP LaserJet Pro 400 M401",
    description: "Professional-grade monochrome laser printer.",
    price: "PKR 19,200",
    image: [Image1],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20Pro%20400%20M401",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20400%20M401",
  },
  {
    id: 6,
    name: "HP LaserJet 1320",
    description: "Compact duplex laser printer for small businesses.",
    price: "PKR 15,200",
    image: [Image2],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%201320",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%201320",
  },
  {
    id: 8,
    name: "HP LaserJet Pro MFP 1606",
    description: "Multifunction printer with network connectivity.",
    price: "PKR 18,200",
    image: [Image4],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20Pro%20MFP%201606dn",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20MFP%201606dn",
  },
  {
    id: 8,
    name: "HP LaserJet Pro MFP 1606dn",
    description: "Multifunction printer with network connectivity.",
    price: "PKR 19,000",
    image: [Image4],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20Pro%20MFP%201606dn",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20MFP%201606dn",
  },
  {
    id: 9,
    name: "HP LaserJet 1320",
    description: "Compact monochrome laser printer for office use.",
    price: "PKR 15,200",
    image: [Image5],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%201320",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%201320"
  },
  {
    id: 10,
    name: "HP LaserJet P2015",
    description: "High-speed laser printer with reliable performance.",
    price: "PKR 15,200",
    image: [Image6],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20P2015",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P2015"
  },
  {
    id: 11,
    name: "HP LaserJet P2035",
    description: "Fast monochrome printer for business needs.",
    price: "PKR 17,200",
    image: [Image3],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20P2035",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P2035"
  },
  {
    id: 12,
    name: "HP LaserJet P2055",
    description: "Efficient laser printer for high-volume printing.",
    price: "PKR 19,200",
    image: [Image7],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20P2055",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P2055"
  },
  {
    id: 13,
    name: "HP LaserJet Pro 400",
    description: "Reliable monochrome laser printer for small offices.",
    image: [Image8],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20Pro%20400",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20400"
  },
  {
    id: 14,
    name: "HP LaserJet Pro 401",
    description: "Compact and fast laser printer with network support.",
    price: "PKR 23,200",
    image: [Image9],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20Pro%20401",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20401"
  },
  {
    id: 15,
    name: "HP LaserJet Pro 402",
    description: "High-performance printer with fast output speed.",
    price: "PKR 26,200",
    image: [Image10],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20Pro%20402",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20402"
  },
  {
    id: 16,
    name: "HP LaserJet Pro 404",
    description: "Reliable and efficient printing for business needs.",
    price: "PKR 26,200",
    image: [Image11],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20Pro%20404",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20Pro%20404"
  },
  {
    id: 17,
    name: "HP LaserJet P3015",
    description: "Fast and secure printing for high-demand environments.",
    price: "PKR 20,200",
    image: [Image12],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20P3015",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P3015"
  },
  {
    id: 18,
    name: "HP LaserJet 605",
    description: "Enterprise-grade printer with superior speed and quality.",
    price: "PKR 36,200",
    image: [Image13],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20605",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20605"
  },
  {
    id: 18,
    name: "HP LaserJet P1012",
    description: "The HP LaserJet P1012 is a compact monochrome laser printer designed for personal and small office use.",
    price: "PKR 12,200",
    image: [Image14],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20605",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20605"
  },
  {
    id: 18,
    name: "HP LaserJet P1022",
    description: "The HP LaserJet P1012 is a compact monochrome laser printer designed for personal and small office use.",
    price: "PKR 14,700",
    image: [Image15],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20605",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20605"
  },
  {
    id: 19,
    name: "HP LaserJet P1102we",
    description: "Wireless and ethernet laser printer with compact design.",
    price: "PKR 19,200",
    image: "https://tse3.mm.bing.net/th?id=OIP.JnI_LkD_zIU-e6zdcbuDUwHaFj&pid=Api",
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20P1102w",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P1102w",
  },
  {
    id: 20,
    name: "HP LaserJet P1505",
    description: "HP 1505 Printer—the compact powerhouse designed to elevate your printing experience.",
    price: "PKR 14,700",
    image: [Image16],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20P1102w",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P1102w",
  },
  {
    id: 20,
    name: "HP LaserJet P1505",
    description: "The HP LaserJet 201dn is a fast, reliable monochrome laser printer with automatic duplex printing and network connectivity",
    price: "PKR 20,200",
    image: [Image17],
    whatsapp: "https://wa.me/923000461659?text=I'm%20interested%20in%20HP%20LaserJet%20P1102w",
    email: "mailto:info@mrtoner.pk?subject=Inquiry%20about%20HP%20LaserJet%20P1102w",
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
        <h1 className="relative text-6xl font-extrabold text-white">
          Printer Catalog
        </h1>
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
                <img
                  src={printer.image}
                  alt={printer.name}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h2 className="text-xl font-semibold mb-2">{printer.name}</h2>
                <p className="text-gray-700 mb-3">{printer.description}</p>
                <p className="text-lg font-bold text-green-600">
                  Price: {printer.price}
                </p>
                <div className="flex space-x-4 mt-3">
                  <motion.a
                    href={printer.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaWhatsapp size={24} />
                  </motion.a>
                  <motion.a
                    href={printer.email}
                    className="bg-gray-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaEnvelope size={24} />
                  </motion.a>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={20} />
                    15-Day Money-Back Guarantee
                  </p>
                  <p className="flex items-center gap-2">
                    <PackageCheck className="text-green-500" size={20} />
                    In Stock: Available
                  </p>
                  <p className="flex items-center gap-2">
                    <Truck className="text-blue-500" size={20} />
                    Delivery Charges: PKR 200
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No printers found.
            </p>
          )}
        </motion.div>
      </motion.div>

      <FAQSection />
      <ProductReviews />

      {/* Coming Soon Sections */}
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold text-gray-700">Product Accessories</h2>
        <p className="text-gray-500 italic">Coming Soon...</p>
      </div>

      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold text-gray-700">Product Gallery</h2>
        <p className="text-gray-500 italic">Coming Soon...</p>
      </div>
    </>
  );
}