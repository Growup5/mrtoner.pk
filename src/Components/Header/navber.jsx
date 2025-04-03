import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <Link 
                    to="/" 
                    className="text-2xl font-bold hover:text-gray-400 transition duration-300 flex items-center"
                >
                    <span className="mr-1">🖨️</span>
                    <span>Mr. Toner</span>
                </Link>

                <div className="hidden lg:flex lg:items-center space-x-8">
                    <ul className="flex flex-row space-x-8">
                        <li>
                            <NavLink 
                                to="/" 
                                className="block py-2 hover:text-gray-400 transition duration-200 relative"
                                activeClassName="text-blue-400"
                            >
                                Home
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/products" 
                                className="block py-2 hover:text-gray-400 transition duration-200"
                                activeClassName="text-blue-400"
                            >
                                Products
                            </NavLink>
                        </li>

                        <li
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button className="flex items-center py-2 hover:text-gray-400 transition duration-200">
                                Services
                                <svg 
                                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 bg-gray-800 mt-2 py-2 w-64 rounded-lg shadow-xl z-50 border border-gray-700"
                                    >
                                        <li className="px-4 py-3 hover:bg-gray-700 transition duration-200">
                                            <Link to="/services/printing" className="flex items-center space-x-3">
                                                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9V3H4v18h16V3h-2v6m-8 3h4m-2-2V9h-4v3h2v-2z" />
                                                </svg>
                                                <div>
                                                    <p className="text-white">Print</p>
                                                    <p className="text-xs text-gray-400 mt-1">Professional printers and equipment</p>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="px-4 py-3 hover:bg-gray-700 transition duration-200">
                                            <Link to="/service/custom-orders" className="flex items-center space-x-3">
                                                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v12m0 0v8m0-8H6m6 0h6M3 9l9 9L21 9" />
                                                </svg>
                                                <div>
                                                    <p className="text-white">Custom Orders </p>
                                                    <p className="text-xs text-gray-400 mt-1">High-quality toner Bulk and Corporate Printing</p>
                                                </div>
                                            </Link>
                                        </li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>

                        <li>
                            <NavLink 
                                to="/contact" 
                                className="block py-2 hover:text-gray-400 transition duration-200"
                                activeClassName="text-blue-400"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                className="block py-2 hover:text-gray-400 transition duration-200"
                                activeClassName="text-blue-400"
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/blog" 
                                className="block py-2 hover:text-gray-400 transition duration-200"
                                activeClassName="text-blue-400"
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <button 
                    onClick={toggleMenu} 
                    className="lg:hidden focus:outline-none p-1 rounded-md hover:bg-gray-800 transition duration-200"
                    aria-label="Toggle menu"
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden bg-gray-800 overflow-hidden"
                    >
                        <ul className="flex flex-col space-y-1 px-4 py-3">
                            <li>
                                <NavLink 
                                    to="/" 
                                    className="block py-3 px-2 hover:bg-gray-700 rounded-md transition duration-200"
                                    activeClassName="text-blue-400"
                                    onClick={toggleMenu}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/products" 
                                    className="block py-3 px-2 hover:bg-gray-700 rounded-md transition duration-200"
                                    activeClassName="text-blue-400"
                                    onClick={toggleMenu}
                                >
                                    Products
                                </NavLink>
                            </li>

                            <li>
                                <button
                                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                                    className="flex items-center justify-between w-full py-3 px-2 hover:bg-gray-700 rounded-md transition duration-200 text-left"
                                >
                                    Services
                                    <svg 
                                        className={`w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <AnimatePresence>
                                    {isMobileDropdownOpen && (
                                        <motion.ul
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="bg-gray-700 rounded-md ml-4 overflow-hidden"
                                        >
                                            <li>
                                                <Link 
                                                    to="/services/printing" 
                                                    className="block py-3 px-4 hover:bg-gray-600 transition duration-200"
                                                    onClick={toggleMenu}
                                                >
                                                    Printing
                                                </Link>
                                            </li>
                                            <li>
                                                <Link 
                                                    to="/service/custom-orders" 
                                                    className="block py-3 px-4 hover:bg-gray-600 transition duration-200"
                                                    onClick={toggleMenu}
                                                >
                                                    Custom Orders
                                                </Link>
                                            </li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>

                            <li>
                                <NavLink 
                                    to="/contact" 
                                    className="block py-3 px-2 hover:bg-gray-700 rounded-md transition duration-200"
                                    activeClassName="text-blue-400"
                                    onClick={toggleMenu}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/about" 
                                    className="block py-3 px-2 hover:bg-gray-700 rounded-md transition duration-200"
                                    activeClassName="text-blue-400"
                                    onClick={toggleMenu}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/blog" 
                                    className="block py-3 px-2 hover:bg-gray-700 rounded-md transition duration-200"
                                    activeClassName="text-blue-400"
                                    onClick={toggleMenu}
                                >
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;