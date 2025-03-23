import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const printers = [
    {
      id: 1,
      title: 'HP LaserJet Pro MFP M428fdw',
      description:
        'The HP LaserJet Pro MFP M428fdw is a versatile all-in-one printer perfect for small offices. It offers fast printing speeds, high-quality output, and robust security features. Ideal for businesses that need efficiency and reliability.',
      link: '/products/hp-laserjet-pro-mfp-m428fdw',
      icon: '🖨️',
    },
    {
      id: 2,
      title: 'Epson EcoTank ET-4760',
      description:
        'The Epson EcoTank ET-4760 is a cost-effective choice for home users. With its refillable ink tanks, you can save money on ink while enjoying high-quality prints. A great option for families and students who need frequent printing.',
      link: '/products/epson-ecotank-et-4760',
      icon: '🖨️',
    },
    {
      id: 3,
      title: 'Canon PIXMA TR8620',
      description:
        'The Canon PIXMA TR8620 is a compact and efficient printer ideal for home offices. It offers wireless connectivity, mobile printing, and excellent photo printing capabilities. Perfect for users who need high-quality images and text output.',
      link: '/products/canon-pixma-tr8620',
      icon: '🖨️',
    },
    {
      id: 4,
      title: 'Brother HL-L2390DW',
      description:
        'The Brother HL-L2390DW is a reliable monochrome laser printer with fast print speeds and a built-in scanner. It supports duplex printing and wireless connectivity, making it an excellent choice for small businesses and remote workers.',
      link: '/products/brother-hl-l2390dw',
      icon: '🖨️',
    },
    {
      id: 5,
      title: 'Lexmark MB3442adw',
      description:
        'The Lexmark MB3442adw is a feature-packed monochrome laser printer with advanced security and mobile printing support. It is designed for businesses that require high-volume printing with efficiency and durability.',
      link: '/products/lexmark-mb3442adw',
      icon: '🖨️',
    },
  ];

  const faqs = [
    { question: 'What is the best printer for home use?', answer: 'The Epson EcoTank ET-4760 is great for home users due to its cost-effective ink system and high-quality prints.' },
    { question: 'Which printer is best for small businesses?', answer: 'The HP LaserJet Pro MFP M428fdw is ideal for small businesses with its fast printing speeds and security features.' },
    { question: 'Are laser printers better than inkjet?', answer: 'Laser printers are better for high-volume text printing, while inkjet printers are better for high-quality color and photo prints.' }
  ];

  return (
    <div className={`min-h-screen p-8 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'}`}> 
      <button onClick={toggleDarkMode} className="fixed bottom-4 right-4 bg-gray-500 text-white px-4 py-2 rounded-2xl shadow-lg hover:bg-gray-600 transition-colors">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className={`max-w-4xl mx-auto p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <motion.h1 className="text-4xl font-bold mb-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Top 5 Printers for Home and Office Use in 2023
        </motion.h1>
        {printers.map((printer) => (
          <motion.div key={printer.id} className={`mb-6 p-6 rounded-lg shadow-md cursor-pointer ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`} whileHover={{ scale: 1.02 }} onClick={() => setExpandedCard(expandedCard === printer.id ? null : printer.id)}>
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-4">{printer.icon}</span>
              <h3 className="text-xl font-semibold">{printer.title}</h3>
            </div>
            <motion.div className="overflow-hidden" initial={{ height: 0 }} animate={{ height: expandedCard === printer.id ? 'auto' : 0 }} transition={{ duration: 0.3 }}>
              <p className="text-gray-600">{printer.description}</p>
            </motion.div>
            <a href={printer.link} className="text-blue-500 hover:underline mt-4 block">Learn More</a>
          </motion.div>
        ))}
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <motion.div key={index} className="mb-4 p-4 rounded-lg shadow-md cursor-pointer bg-gray-200 dark:bg-gray-700" whileHover={{ scale: 1.02 }} onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <motion.div className="overflow-hidden" initial={{ height: 0 }} animate={{ height: openFAQ === index ? 'auto' : 0 }} transition={{ duration: 0.3 }}>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
