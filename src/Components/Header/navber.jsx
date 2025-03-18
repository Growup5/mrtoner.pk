import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SearchComponent from "../Search/Search";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-lg relative">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold hover:text-gray-400 transition duration-300">
                    Mr. Toner
                </Link>

                <div className="hidden lg:flex lg:items-center space-x-6">
                    <ul className="flex flex-row lg:space-x-6">
                        <li><NavLink to="/" className="block py-2 hover:text-gray-400">Home</NavLink></li>
                        <li><NavLink to="/products" className="block py-2 hover:text-gray-400">Products</NavLink></li>

                        <li
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button className="flex items-center py-2 hover:text-gray-400">
                                Services
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                                        className="absolute top-full left-0 bg-gray-900 mt-2 py-3 w-80 rounded-lg shadow-lg z-50"
                                    >
                                        <li className="px-4 py-3 hover:bg-gray-700 transition duration-300">
                                            <Link to="/services/printing" className="flex items-center space-x-3">
                                                <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9V3H4v18h16V3h-2v6m-8 3h4m-2-2V9h-4v3h2v-2z" />
                                                </svg>
                                                <div>
                                                    <p className="text-lg">Print</p>
                                                    <p className="text-sm text-gray-400">We specialize in selling professional printers, not providing printing services</p>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="px-4 py-3 hover:bg-gray-700 transition duration-300">
                                            <Link to="/services/toner-refill" className="flex items-center space-x-3">
                                                <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v12m0 0v8m0-8H6m6 0h6M3 9l9 9L21 9" />
                                                </svg>
                                                <div>
                                                    <p className="text-lg">Toner Refill</p>
                                                    <p className="text-sm text-gray-400">High-quality toner refills for your printers</p>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="px-4 py-3 hover:bg-gray-700 transition duration-300">
                                       
                                        </li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>

                        <li><NavLink to="/contact" className="block py-2 hover:text-gray-400">Contact</NavLink></li>
                        <li><NavLink to="/about" className="block py-2 hover:text-gray-400">About Us</NavLink></li>
                        <li><NavLink to="/blog" className="block py-2 hover:text-gray-400">Blog</NavLink></li>


                    </ul>

                    <div className="ml-6"><SearchComponent /></div>
                </div>

                <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden bg-gray-900 mt-2 py-3 w-full rounded-lg shadow-lg"
                    >
                        <ul className="flex flex-col space-y-4 px-4">
                            <li><NavLink to="/" className="block py-2 hover:text-gray-400">Home</NavLink></li>
                            <li><NavLink to="/products" className="block py-2 hover:text-gray-400">Products</NavLink></li>

                            <li>
                                <button
                                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                                    className="flex items-center py-2 hover:text-gray-400 w-full text-left"
                                >
                                    Services
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <AnimatePresence>
                                    {isMobileDropdownOpen && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            transition={{ duration: 0.2 }}
                                            className="bg-gray-800 rounded-lg py-2 mt-2"
                                        >
                                            <li><Link to="/services/printing" className="block px-4 py-3 hover:bg-gray-700">Printing</Link></li>
                                            <li><Link to="/services/toner-refill" className="block px-4 py-3 hover:bg-gray-700">Toner Refill</Link></li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>

                            <li><NavLink to="/contact" className="block py-2 hover:text-gray-400">Contact</NavLink></li>
                            <li><NavLink to="/about" className="block py-2 hover:text-gray-400">About Us</NavLink></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
