import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Send, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovering, setIsHovering] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: Facebook, url: "#", color: "hover:text-blue-400" },
    { icon: Twitter, url: "#", color: "hover:text-sky-400" },
    { icon: Instagram, url: "#", color: "hover:text-pink-500" },
    { icon: Linkedin, url: "#", color: "hover:text-blue-600" }
  ];

  const quickLinks = [
    { name: "Products", url: "/products" },
    { name: "Why Choose Us?", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Blog", url: "/blog" }
  ];

  const contactInfo = [
    { icon: MapPin, text: "Lahore, Pakistan" },
    { icon: Mail, text: "info@mrtoner.pk" },
    { icon: Mail, text: "support@mrtoner.pk" },
    { icon: Phone, text: "+92 333-048-9839" },
    { icon: Phone, text: "+92 300-460-1659" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Us */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              About Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Mr. Toner offers a wide stock of high-quality printers and photocopiers, 
              ensuring the best products at affordable prices with exceptional customer service.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.url} 
                    className="flex items-center hover:text-white transition duration-300 group"
                    onMouseEnter={() => setIsHovering(index)}
                    onMouseLeave={() => setIsHovering(null)}
                  >
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${isHovering === index ? 'bg-blue-500' : 'bg-gray-600'} transition-all duration-300`}></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="flex-shrink-0 mt-1 mr-3 text-blue-400" size={18} />
                  <span className="text-gray-400 hover:text-white transition duration-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to get the latest news, offers, and printer maintenance tips.
            </p>
            
            {isSubscribed ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 text-green-400 p-3 rounded-lg text-center"
              >
                Thank you for subscribing!
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="flex items-center bg-gray-800 p-1 rounded-lg border border-gray-700 focus-within:border-blue-500 transition duration-300">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-transparent text-gray-300 w-full px-4 py-2 focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <motion.button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send size={18} />
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div 
          className="border-t border-gray-800 mt-16 pt-8 text-center"
          variants={itemVariants}
        >
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className={`text-gray-400 ${social.color} transition duration-300`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
          
          <div className="text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Mr. Toner. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="hover:text-gray-300 transition duration-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300 transition duration-300">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300 transition duration-300">Shipping Policy</a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;