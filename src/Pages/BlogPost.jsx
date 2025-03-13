import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogPost = () => {
  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // State for expanded printer cards
  const [expandedCard, setExpandedCard] = useState(null);

  // State for FAQ toggles
  const [openFAQ, setOpenFAQ] = useState(null);

  // Dark mode toggle handler
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Printer data
  const printers = [
    {
      id: 1,
      title: 'HP LaserJet Pro MFP M428fdw',
      description:
        'The HP LaserJet Pro MFP M428fdw is a versatile all-in-one printer perfect for small offices. It offers fast printing speeds, high-quality output, and robust security features.',
      link: '/products/hp-laserjet-pro-mfp-m428fdw',
      image: 'https://via.placeholder.com/400x300', // Replace with actual image URL
      icon: '🖨️', // Printer icon
    },
    {
      id: 2,
      title: 'Epson EcoTank ET-4760',
      description:
        'The Epson EcoTank ET-4760 is a cost-effective choice for home users. With its refillable ink tanks, you can save money on ink while enjoying high-quality prints.',
      link: '/products/epson-ecotank-et-4760',
      image: 'https://via.placeholder.com/400x300', // Replace with actual image URL
      icon: '🖨️', // Printer icon
    },
    {
      id: 3,
      title: 'Canon PIXMA TR8620',
      description:
        'The Canon PIXMA TR8620 is a compact and efficient printer ideal for home offices. It offers wireless connectivity, mobile printing, and excellent photo printing capabilities.',
      link: '/products/canon-pixma-tr8620',
      image: 'https://via.placeholder.com/400x300', // Replace with actual image URL
      icon: '🖨️', // Printer icon
    },
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: 'What’s the difference between inkjet and laser printers?',
      answer:
        'Inkjet printers are better for photo printing and occasional use, while laser printers are ideal for high-volume text printing and offer faster speeds.',
      icon: '❓', // Question icon
    },
    {
      id: 2,
      question: 'Can I use third-party ink or toner?',
      answer:
        'While third-party ink or toner is cheaper, it may void your warranty or affect print quality. Always check the manufacturer’s recommendations.',
      icon: '❓', // Question icon
    },
  ];

  return (
    <div
      className={`min-h-screen p-8 ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 bg-gray-500 text-white px-4 py-2 rounded-2xl shadow-lg hover:bg-gray-600 transition-colors"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Blog Content */}
      <div
        className={`max-w-4xl mx-auto p-8 rounded-lg shadow-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Top 5 Printers for Home and Office Use in 2023
        </motion.h1>

        {/* Introduction */}
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Are you looking for the best printers for your home or office? In this blog, we’ve curated a
          list of the top 5 printers in 2023 that offer excellent performance, reliability, and value
          for money. Whether you need a printer for everyday use, high-volume printing, or photo
          printing, we’ve got you covered.
        </motion.p>

        {/* Printer Cards */}
        {printers.map((printer) => (
          <motion.div
            key={printer.id}
            className={`mb-6 p-6 rounded-lg shadow-md cursor-pointer ${
              isDarkMode ? 'bg-gray-700' : 'bg-white'
            }`}
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              setExpandedCard(expandedCard === printer.id ? null : printer.id)
            }
          >
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-4">{printer.icon}</span>
              <h3 className="text-xl font-semibold">{printer.title}</h3>
            </div>
            <motion.div
              className="overflow-hidden"
              initial={{ height: 200 }}
              animate={{
                height: expandedCard === printer.id ? 'auto' : 200,
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={printer.image}
                alt={printer.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600">{printer.description}</p>
            </motion.div>
            <a
              href={printer.link}
              className="text-blue-500 hover:underline mt-4 block"
            >
              Learn More
            </a>
          </motion.div>
        ))}

        {/* FAQs */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`border-b ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              } py-4`}
            >
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() =>
                  setOpenFAQ(openFAQ === faq.id ? null : faq.id)
                }
              >
                <div className="flex items-center">
                  <span className="text-xl mr-4">{faq.icon}</span>
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>
              <motion.div
                className="overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: openFAQ === faq.id ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Ready to Buy Your Perfect Printer?</h2>
          <p className="text-gray-600 mb-6">
            Explore our wide range of printers and find the one that suits your needs. Shop now and
            enjoy exclusive discounts!
          </p>
          <a
            href="/shop"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Shop Printers
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;