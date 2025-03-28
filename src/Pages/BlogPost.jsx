import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMoon, 
  FiSun, 
  FiPrinter, 
  FiSearch, 
  FiX, 
  FiChevronDown, 
  FiChevronUp, 
  FiStar,
  FiShoppingCart,
  FiHeart,
  FiShare2,
  FiClock,
  FiCheckCircle
} from 'react-icons/fi';
import { FaFire, FaBolt, FaLeaf } from 'react-icons/fa';

const BlogPost = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPrinters, setFilteredPrinters] = useState([]);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [wishlist, setWishlist] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Check for user's preferred color scheme
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Filter printers based on search query
  useEffect(() => {
    const results = printers.filter(printer =>
      printer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      printer.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      printer.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredPrinters(results);
  }, [searchQuery]);

  // Show scroll-to-top button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
      showNotificationMessage('Removed from wishlist');
    } else {
      setWishlist([...wishlist, id]);
      showNotificationMessage('Added to wishlist');
    }
  };

  const showNotificationMessage = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const printers = [
    {
      id: 1,
      title: 'HP LaserJet Pro MFP M428fdw',
      description: 'The HP LaserJet Pro MFP M428fdw is a versatile all-in-one printer perfect for small offices. It offers fast printing speeds, high-quality output, and robust security features. Ideal for businesses that need efficiency and reliability.',
      features: ['Print speed: 35 ppm', 'Duplex printing', 'Wireless connectivity', 'Mobile printing', 'Scan to email'],
      price: 499,
      rating: 4.5,
      reviews: 128,
      type: 'laser',
      bestFor: 'office',
      tags: ['fast', 'wireless', 'all-in-one'],
      link: '/products/hp-laserjet-pro-mfp-m428fdw',
      icon: <FiPrinter className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialBadge: 'BEST SELLER'
    },
    {
      id: 2,
      title: 'Epson EcoTank ET-4760',
      description: 'The Epson EcoTank ET-4760 is a cost-effective choice for home users. With its refillable ink tanks, you can save money on ink while enjoying high-quality prints. A great option for families and students who need frequent printing.',
      features: ['Refillable ink tanks', 'Low cost per page', 'Wireless printing', 'Auto document feeder', 'High-capacity ink'],
      price: 299,
      rating: 4.7,
      reviews: 95,
      type: 'inkjet',
      bestFor: 'home',
      tags: ['eco-friendly', 'low-cost', 'color'],
      link: '/products/epson-ecotank-et-4760',
      icon: <FiPrinter className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1575909812264-6902b55846ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialBadge: 'ECO FRIENDLY'
    },
    {
      id: 3,
      title: 'Canon PIXMA TR8620',
      description: 'The Canon PIXMA TR8620 is a compact and efficient printer ideal for home offices. It offers wireless connectivity, mobile printing, and excellent photo printing capabilities. Perfect for users who need high-quality images and text output.',
      features: ['5-color individual ink system', 'Auto duplex printing', '4.3" touchscreen', 'Cloud printing', 'Photo printing'],
      price: 249,
      rating: 4.3,
      reviews: 76,
      type: 'inkjet',
      bestFor: 'home office',
      tags: ['photo', 'compact', 'touchscreen'],
      link: '/products/canon-pixma-tr8620',
      icon: <FiPrinter className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialBadge: 'EDITOR\'S CHOICE'
    },
    {
      id: 4,
      title: 'Brother HL-L2390DW',
      description: 'The Brother HL-L2390DW is a reliable monochrome laser printer with fast print speeds and a built-in scanner. It supports duplex printing and wireless connectivity, making it an excellent choice for small businesses and remote workers.',
      features: ['Print speed: 36 ppm', 'Automatic duplex', '250-sheet paper capacity', 'NFC touch-to-print', 'Compact design'],
      price: 199,
      rating: 4.6,
      reviews: 112,
      type: 'laser',
      bestFor: 'small business',
      tags: ['monochrome', 'fast', 'compact'],
      link: '/products/brother-hl-l2390dw',
      icon: <FiPrinter className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialBadge: 'BUDGET PICK'
    },
    {
      id: 5,
      title: 'Lexmark MB3442adw',
      description: 'The Lexmark MB3442adw is a feature-packed monochrome laser printer with advanced security and mobile printing support. It is designed for businesses that require high-volume printing with efficiency and durability.',
      features: ['Print speed: 42 ppm', 'Enterprise security features', 'Large paper capacity', 'Cloud and mobile ready', 'Energy Star certified'],
      price: 599,
      rating: 4.4,
      reviews: 64,
      type: 'laser',
      bestFor: 'enterprise',
      tags: ['high-volume', 'secure', 'business'],
      link: '/products/lexmark-mb3442adw',
      icon: <FiPrinter className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialBadge: 'PREMIUM PICK'
    },
    {
      id: 6,
      title: 'HP OfficeJet Pro 9015e',
      description: 'The HP OfficeJet Pro 9015e is a smart all-in-one printer with exceptional speed and quality. It features self-healing Wi-Fi and smart tasks to automate repetitive workflows, perfect for busy offices.',
      features: ['Print speed: 22 ppm', 'Auto document feeder', 'Smart tasks automation', 'Self-healing Wi-Fi', 'Instant Ink ready'],
      price: 349,
      rating: 4.6,
      reviews: 187,
      type: 'inkjet',
      bestFor: 'office',
      tags: ['smart', 'all-in-one', 'automation'],
      link: '/products/hp-officejet-pro-9015e',
      icon: <FiPrinter className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1563212034-a5a0d1e0c229?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialBadge: 'SMART PICK'
    },
    {
      id: 7,
      title: 'Canon imageCLASS LBP623Cdw',
      description: 'The Canon imageCLASS LBP623Cdw is a compact color laser printer with impressive print quality and fast speeds. Its space-saving design makes it ideal for small offices with limited space.',
      features: ['Print speed: 28 ppm', 'Compact design', 'Wireless & duplex printing', 'Mobile printing support', '250-sheet capacity'],
      price: 449,
      rating: 4.5,
      reviews: 92,
      type: 'laser',
      bestFor: 'small business',
      tags: ['color', 'compact', 'wireless'],
      link: '/products/canon-imageclass-lbp623cdw',
      icon: <FiPrinter className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialBadge: 'SPACE SAVER'
    },
    {
      id: 8,
      title: 'Epson WorkForce Pro WF-4740',
      description: 'The Epson WorkForce Pro WF-4740 is a high-capacity inkjet printer designed for heavy-duty office use. It offers exceptional speed and low running costs with its high-yield ink cartridges.',
      features: ['Print speed: 25 ppm', 'High-capacity ink cartridges', 'Auto duplex printing', '50-sheet ADF', 'Ethernet & Wi-Fi'],
      price: 399,
      rating: 4.4,
      reviews: 78,
      type: 'inkjet',
      bestFor: 'office',
      tags: ['high-capacity', 'fast', 'office'],
      link: '/products/epson-workforce-pro-wf-4740',
      icon: <FiPrinter className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1575909812264-6902b55846ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialBadge: 'HIGH CAPACITY'
    },
    {
      id: 9,
      title: 'Brother MFC-J995DW',
      description: 'The Brother MFC-J995DW is a versatile all-in-one inkjet printer with wide-format printing capabilities. It can handle paper sizes up to 11x17 inches, making it great for creative professionals.',
      features: ['11x17-inch printing', 'Auto duplex printing', '250-sheet paper capacity', 'Wireless connectivity', '1-year warranty'],
      price: 299,
      rating: 4.3,
      reviews: 65,
      type: 'inkjet',
      bestFor: 'creative',
      tags: ['wide-format', 'all-in-one', 'creative'],
      link: '/products/brother-mfc-j995dw',
      icon: <FiPrinter className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialBadge: 'WIDE FORMAT'
    },
    {
      id: 10,
      title: 'HP Neverstop Laser 1001nw',
      description: 'The HP Neverstop Laser 1001nw is an innovative laser printer with a refillable toner system. It offers the lowest cost per page in its class, making it perfect for budget-conscious users.',
      features: ['Refillable toner system', 'Print speed: 21 ppm', 'Wireless connectivity', 'Mobile printing', '5000-page starter toner'],
      price: 349,
      rating: 4.7,
      reviews: 143,
      type: 'laser',
      bestFor: 'home office',
      tags: ['low-cost', 'refillable', 'wireless'],
      link: '/products/hp-neverstop-laser-1001nw',
      icon: <FiPrinter className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialBadge: 'LOW COST'
    },
    {
      id: 11,
      title: 'Canon SELPHY CP1300',
      description: 'The Canon SELPHY CP1300 is a dedicated photo printer that produces lab-quality prints. Its compact size and battery option make it perfect for printing photos on the go.',
      features: ['300x300dpi resolution', 'Battery operation option', 'Wireless printing', '3.2" LCD screen', 'Pocket-sized prints'],
      price: 149,
      rating: 4.8,
      reviews: 231,
      type: 'photo',
      bestFor: 'photography',
      tags: ['photo', 'portable', 'wireless'],
      link: '/products/canon-selphy-cp1300',
      icon: <FiPrinter className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialBadge: 'PHOTO SPECIALIST'
    },
    {
      id: 12,
      title: 'Xerox VersaLink C405',
      description: 'The Xerox VersaLink C405 is a powerful color multifunction printer with advanced security features. It offers professional-grade color output with enterprise-level management capabilities.',
      features: ['Print speed: 35 ppm', 'Advanced security suite', '5-inch color touchscreen', 'Cloud connectivity', 'Mobile printing'],
      price: 899,
      rating: 4.6,
      reviews: 87,
      type: 'laser',
      bestFor: 'enterprise',
      tags: ['enterprise', 'secure', 'color'],
      link: '/products/xerox-versalink-c405',
      icon: <FiPrinter className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      specialBadge: 'ENTERPRISE'
    }
  ];

  const faqs = [
    { 
      question: 'What is the best printer for home use?', 
      answer: 'The Epson EcoTank ET-4760 is our top pick for home users due to its extremely low cost per page and high-quality color prints. Its refillable ink system means you\'ll save significantly on ink costs compared to traditional cartridge-based printers.' 
    },
    { 
      question: 'Which printer is best for a small business?', 
      answer: 'For small businesses, we recommend the HP LaserJet Pro MFP M428fdw. It combines fast printing speeds (up to 35 pages per minute), robust security features, and all-in-one functionality including printing, scanning, copying, and faxing in a compact package.' 
    },
    { 
      question: 'Are laser printers better than inkjet?', 
      answer: 'Each has advantages: Laser printers excel at high-volume text printing with lower cost per page and faster speeds. Inkjets produce superior photo quality and color prints, with generally lower upfront costs. Choose laser for mostly text documents, inkjet for photos and occasional color printing.' 
    },
    { 
      question: 'How often should printer maintenance be performed?', 
      answer: 'Basic maintenance should be done monthly: Clean dust from vents, check for paper debris, and run printer head cleaning cycles if quality declines. Laser printers need toner replacement and occasional drum unit changes. Always follow your manufacturer\'s maintenance schedule.' 
    },
    { 
      question: 'Can I use generic ink or toner?', 
      answer: 'While generic options are cheaper, they may void warranties and sometimes cause quality issues. For best results, we recommend manufacturer supplies. However, some third-party options (like bulk ink systems for EcoTank models) work well when from reputable brands.' 
    },
    { 
      question: 'What connectivity options should I look for?', 
      answer: 'Modern printers should offer at least Wi-Fi and USB. For offices, Ethernet is useful. Mobile printing (AirPrint, Google Cloud Print) is essential for smartphone users. NFC tap-to-print is convenient but not necessary for most users.' 
    }
  ];

  const categories = [
    { name: 'All Printers', filter: 'all', icon: <FiPrinter /> },
    { name: 'Laser', filter: 'laser', icon: <FaBolt /> },
    { name: 'Inkjet', filter: 'inkjet', icon: <FaLeaf /> },
    { name: 'Home Use', filter: 'home', icon: <FiHeart /> },
    { name: 'Business', filter: 'business', icon: <FiCheckCircle /> },
    { name: 'Top Rated', filter: 'rated', icon: <FiStar /> },
    { name: 'On Sale', filter: 'sale', icon: <FaFire /> }
  ];

  const filteredProducts = (searchQuery ? filteredPrinters : printers).filter(printer => {
    if (activeTab === 'all') return true;
    if (activeTab === 'laser') return printer.type === 'laser';
    if (activeTab === 'inkjet') return printer.type === 'inkjet';
    if (activeTab === 'home') return printer.bestFor === 'home';
    if (activeTab === 'business') return ['small business', 'enterprise', 'office'].includes(printer.bestFor);
    if (activeTab === 'rated') return printer.rating >= 4.5;
    if (activeTab === 'sale') return printer.price < 300;
    return true;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className={`min-h-screen p-4 md:p-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg flex items-center ${isDarkMode ? 'bg-purple-700' : 'bg-blue-500'} text-white z-50`}
          >
            <FiCheckCircle className="mr-2" />
            {notificationMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating action buttons */}
      <div className="fixed right-4 bottom-20 flex flex-col space-y-3 z-40">
        <button 
          onClick={toggleDarkMode} 
          className={`p-3 rounded-full shadow-lg flex items-center justify-center ${isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'}`}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
        </button>
        
        {showScrollToTop && (
          <motion.button 
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full shadow-lg flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            aria-label="Scroll to top"
          >
            <FiChevronUp className="text-xl" />
          </motion.button>
        )}
      </div>

      <div className={`max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-xl transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        {/* Hero Section */}
        <div className={`relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
          <div className="absolute inset-0 opacity-10">
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}></div>
          </div>
          <div className="relative z-10 px-6 py-12 md:py-20 md:px-12 lg:px-16">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
              >
                Discover the Perfect Printer for Your Needs
              </motion.h1>
              <p className={`text-xl md:text-2xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Expert reviews and comparisons to help you find your ideal home or office printer
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiSearch className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                </div>
                <input
                  type="text"
                  placeholder="Search printers by name, features, or type..."
                  className={`w-full pl-12 pr-6 py-4 rounded-xl border-2 focus:outline-none focus:ring-4 text-lg ${isDarkMode ? 'bg-gray-700 border-gray-600 focus:border-purple-500 focus:ring-purple-900 text-white' : 'bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  >
                    <FiX className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 py-8 md:px-12 lg:px-16">
          {/* Category Tabs */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              {categories.map((category) => (
                <button
                  key={category.filter}
                  onClick={() => setActiveTab(category.filter)}
                  className={`flex items-center px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeTab === category.filter 
                    ? (isDarkMode ? 'bg-purple-600 text-white shadow-lg' : 'bg-blue-500 text-white shadow-lg') 
                    : (isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className={`mb-8 px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
            <p className="font-medium">
              Showing <span className="font-bold text-blue-500">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'printer' : 'printers'}
              {searchQuery && <span> for "<span className="font-bold">{searchQuery}</span>"</span>}
              {activeTab !== 'all' && <span> in <span className="font-bold">{categories.find(c => c.filter === activeTab)?.name}</span></span>}
            </p>
          </div>

          {/* Printer cards */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <AnimatePresence>
                {filteredProducts.map((printer) => (
                  <motion.div 
                    key={printer.id}
                    className={`rounded-2xl overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
                    whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image with badge */}
                    <div className="relative h-56 bg-gray-200 dark:bg-gray-600">
                      <img 
                        src={printer.image} 
                        alt={printer.title} 
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      {printer.specialBadge && (
                        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${isDarkMode ? 'bg-purple-600 text-white' : 'bg-blue-500 text-white'}`}>
                          {printer.specialBadge}
                        </div>
                      )}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(printer.id);
                        }}
                        className={`absolute top-4 left-4 p-2 rounded-full ${wishlist.includes(printer.id) 
                          ? 'text-red-500 bg-white/90' 
                          : (isDarkMode ? 'text-gray-300 bg-gray-700/80' : 'text-gray-600 bg-white/80')}`}
                      >
                        <FiHeart className={`text-xl ${wishlist.includes(printer.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold">{printer.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'}`}>
                          {formatPrice(printer.price)}
                        </span>
                      </div>
                      
                      {/* Rating and Reviews */}
                      <div className="flex items-center mb-4">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={i}
                              className={`w-5 h-5 ${i < Math.floor(printer.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-500'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {printer.rating} ({printer.reviews} reviews)
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {printer.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className={`px-2 py-1 text-xs rounded-full ${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {printer.description.length > 120 && expandedCard !== printer.id 
                          ? `${printer.description.substring(0, 120)}...` 
                          : printer.description}
                      </p>

                      {/* Expanded Features */}
                      {expandedCard === printer.id && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="mb-4"
                        >
                          <h4 className="font-semibold mb-2 text-lg">Key Features:</h4>
                          <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {printer.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <FiCheckCircle className={`mt-1 mr-2 flex-shrink-0 ${isDarkMode ? 'text-purple-400' : 'text-blue-500'}`} />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      {/* Card Footer */}
                      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                        <button
                          onClick={() => setExpandedCard(expandedCard === printer.id ? null : printer.id)}
                          className={`flex items-center font-medium ${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-blue-600 hover:text-blue-500'}`}
                        >
                          {expandedCard === printer.id ? (
                            <>
                              Show less <FiChevronUp className="ml-1" />
                            </>
                          ) : (
                            <>
                              More details <FiChevronDown className="ml-1" />
                            </>
                          )}
                        </button>
                        <div className="flex space-x-3">
                          <button className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-600 hover:bg-gray-500 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
                            <FiShare2 />
                          </button>
                          <a 
                            href={printer.link} 
                            className={`px-4 py-2 rounded-lg font-medium flex items-center ${isDarkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
                          >
                            <FiShoppingCart className="mr-2" />
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className={`py-16 text-center rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">No printers found</h3>
              <p className={`max-w-md mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                We couldn't find any printers matching your search. Try adjusting your filters or search terms.
              </p>
            </div>
          )}

          {/* FAQ Section */}
          <div className="mt-16 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  className={`rounded-xl overflow-hidden transition-all ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} ${openFAQ === index ? 'shadow-lg' : 'shadow-md'}`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <button
                    className={`w-full p-5 text-left flex justify-between items-center transition-colors ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    aria-expanded={openFAQ === index}
                    aria-controls={`faq-${index}`}
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    {openFAQ === index ? <FiChevronUp className="text-xl" /> : <FiChevronDown className="text-xl" />}
                  </button>
                  
                  <motion.div
                    id={`faq-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: openFAQ === index ? 'auto' : 0,
                      opacity: openFAQ === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className={`overflow-hidden ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    <div className="px-5 pb-5 -mt-2">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className={`mt-16 p-8 md:p-12 rounded-2xl overflow-hidden relative ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
            <div className="absolute inset-0 opacity-10">
              <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated on Printer Deals</h2>
              <p className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Subscribe to our newsletter to get the latest reviews, deals, and printer tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`flex-grow px-5 py-3 rounded-xl border-2 focus:outline-none focus:ring-4 text-lg ${isDarkMode ? 'bg-gray-700 border-gray-600 focus:border-purple-500 focus:ring-purple-900 text-white' : 'bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-200'}`}
                />
                <button className={`px-6 py-3 rounded-xl font-bold text-lg ${isDarkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors whitespace-nowrap`}>
                  Subscribe Now
                </button>
              </div>
              <p className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;