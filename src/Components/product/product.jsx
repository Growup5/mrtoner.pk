import React from "react";
import { Printer, Info, Star } from "lucide-react";
import { motion } from "framer-motion";
// import image1 from "../../images/hero-810x475_229391675935519.webp";
// import image2 from "../../images/CanonIRc35203530.png";
// import image3 from "../../images/RicohAficioMPC65016502.png";
// import image4 from "../../images/hp_laserjet_pro_m15w_myshop_pk_05.jpg"
// import image5 from "../../images/hp_laserjet_pro_printer_m428fdw_myshop_pk_3.jpg";
// import image6 from "../../images/hp_myshop-pk-1_34.jpg";


const photocopiers = [
  { name: "Canon IR 2206n ", description: "Brand New, Canon Printer", image:""  },
  { name: "Canon IR c3520/3530 ", description: "Canon Printer", image:""  },
  { name: "Ricoh Aficio MPC 6501/6502 ", description: "Ricoh Aficio, Photocopier", image: "" },
  { name: "hp laser jet Pro M15w.", description: "Hp, Printer", image: "" },
  { name: "hp laser jet Pro printer m428fdw", description: "Hp, Printer", image: "" },
  { name: "HP LaserJet Enterprise M507dn", description: "Refurbished, Brands, Ricoh Aficio, Photocopier", image: "" },
];


const PhotocopierCard = ({ name, description, image }) => {
  return (
    <motion.div 
      className="bg-white shadow-lg p-6 rounded-xl text-center transition-all duration-300 relative overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-44 overflow-hidden rounded-lg">
        <motion.img 
          src={image} 
          alt={name} 
          className="w-[200px] h-[200px] object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
          />
      </div>
      <h3 className="text-lg font-bold mt-4">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <button className="mt-3 px-5 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2">
        <Info className="w-5 h-5" /> View Details
      </button>
    </motion.div>
  );
};


const FeaturesSection = () => (
  <div className="py-12 text-center">
    <h2 className="text-3xl font-bold mb-6">Why Choose Our Photocopiers?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 shadow-lg rounded-lg bg-white">
        <Star className="w-10 h-10 mx-auto text-yellow-500" />
        <h3 className="text-lg font-bold mt-4">High Performance</h3>
        <p className="text-gray-600 text-sm">Fast and reliable photocopying solutions.</p>
      </div>
      <div className="p-6 shadow-lg rounded-lg bg-white">
        <Star className="w-10 h-10 mx-auto text-yellow-500" />
        <h3 className="text-lg font-bold mt-4">Affordable Pricing</h3>
        <p className="text-gray-600 text-sm">Best value for high-end photocopiers.</p>
      </div>
      <div className="p-6 shadow-lg rounded-lg bg-white">
        <Star className="w-10 h-10 mx-auto text-yellow-500" />
        <h3 className="text-lg font-bold mt-4">Energy Efficient</h3>
        <p className="text-gray-600 text-sm">Save power while maintaining quality.</p>
      </div>
    </div>
  </div>
);



const PhotocopierList = () => {
  return (
    <div className="p-8">
      <motion.div 
        className="bg-gray-700 text-white text-center py-8 rounded-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold flex justify-center items-center gap-2">
          <Printer className="w-8 h-8" /> Photocopier
        </h1>
        <p className="mt-2">RICOH | CANON | TOSHIBA | XEROX</p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {photocopiers.map((item, index) => (
          <PhotocopierCard key={index} {...item} />
        ))}
      </motion.div>
      <FeaturesSection />
    </div>
  );
};

export default PhotocopierList;
