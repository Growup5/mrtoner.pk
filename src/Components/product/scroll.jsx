import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import React from "react";
import Image from "../../images/1505.jpg"

const images = [
  "https://r.mobirisesite.com/1332881/assets/images/photo-1518472803163-8d3a9e90792c.jpeg",
  "https://r.mobirisesite.com/1332881/assets/images/photo-1557426272-fc759fdf7a8d.jpeg",
  "https://r.mobirisesite.com/1332881/assets/images/photo-1612814266697-e5814f3063cf.jpeg",
  "https://r.mobirisesite.com/1332881/assets/images/photo-1618005182384-a83a8bd57fbe.jpeg",
  [Image]
];

export default function AdvancedGallery() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;

    const scroll = () => {
      if (slider) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gray-900 py-12">
      <h2 className="text-center text-3xl font-bold text-white mb-6">
      </h2>
      <div ref={sliderRef} className="flex space-x-6 overflow-x-hidden w-full">
        {[...images, ...images].map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative w-72 h-48 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={src}
              alt="Gallery"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-xl font-semibold">
              View
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
