import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../images/work.jpg";
import { useInView } from "react-intersection-observer";

export default function BannerTwo() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const backgroundVariants = {
    hidden: { scale: 1.1 },
    visible: {
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      ref={ref}
      className="relative w-full h-[600px] md:h-[700px] bg-gray-900 text-white flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        variants={backgroundVariants}
        initial="hidden"
        animate={controls}
      >
        <img
          src={Image1}
          alt="Printers"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.4) contrast(1.2)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90" />
      </motion.div>

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 5 + 2 + "px",
              height: Math.random() * 5 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%"
            }}
            animate={{
              y: [0, -100],
              opacity: [0.5, 0],
              x: [0, (Math.random() - 0.5) * 50]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Revolutionize
          </span> Your Printing Workflow
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}
        >
          Experience the pinnacle of printing technology with our enterprise-grade HP LaserJet solutions. Unmatched speed, precision, and reliability.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-4 px-8 rounded-xl shadow-2xl"
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <Link to="/products">Explore Printers</Link>
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="relative overflow-hidden border-2 border-blue-400 text-blue-400 font-semibold py-4 px-8 rounded-xl shadow-2xl"
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <Link to="/support">Expert Support</Link>
            </span>
            <motion.span
              className="absolute inset-0 bg-blue-400 opacity-0"
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Floating animated arrow */}
        <motion.div
          className="mt-16"
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg className="w-8 h-8 mx-auto text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Glow effects */}
      <div className="absolute -bottom-1/2 -left-1/2 w-[200%] h-[200%] bg-radial-gradient from-blue-500/20 to-transparent opacity-30" />
      <div className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] bg-radial-gradient from-blue-400/20 to-transparent opacity-30" />
    </div>
  );
}