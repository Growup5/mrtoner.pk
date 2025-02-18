import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchComponent from "../Search/Search"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-lg">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                {/* Brand Logo */}
                <Link to="/" className="text-2xl font-bold hover:text-gray-400 transition duration-300">
                    Mr. Toner
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex lg:items-center space-x-6">
                    <ul className="flex flex-row lg:space-x-6">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 hover:text-gray-400 transition duration-300 ${isActive ? "text-gray-400" : ""
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    `block py-2 hover:text-gray-400 transition duration-300 ${isActive ? "text-gray-400" : ""
                                    }`
                                }
                            >
                                Products
                            </NavLink>
                        </li>

                        <li className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center py-2 hover:text-gray-400 transition duration-300 focus:outline-none"
                            >
                                Services
                                <svg
                                    className="w-4 h-4 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute bg-gray-800 lg:bg-gray-900 mt-2 py-2 w-90 rounded-lg shadow-lg space-y-4">
                                    <li>
                                        <Link
                                            to="/services/printing"
                                            className="block px-4 py-2 hover:bg-gray-700 transition duration-300"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9V3H4v18h16V3h-2v6m-8 3h4m-2-2V9h-4v3h2v-2z" />
                                                </svg>
                                                <div>
                                                    <p className="text-lg">Printing</p>
                                                    <p className="text-sm text-gray-400">Professional printing services for your needs</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/services/toner-refill"
                                            className="block px-4 py-2 hover:bg-gray-700 transition duration-300"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v12m0 0v8m0-8H6m6 0h6M3 9l9 9L21 9" />
                                                </svg>
                                                <div>
                                                    <p className="text-lg">Toner Refill</p>
                                                    <p className="text-sm text-gray-400">High-quality toner refills for your printers</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    {/* New Service Options */}
                                    <li>
                                        <Link
                                            to="/services/repair"
                                            className="block px-4 py-2 hover:bg-gray-700 transition duration-300"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l2-2m0 0l4-4m-4 4h-3l1 5h1l5 1h-7l1 1l4-6z" />
                                                </svg>
                                                <div>
                                                    <p className="text-lg">Repair Services</p>
                                                    <p className="text-sm text-gray-400">Fixing printers and toner-related issues</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block py-2 hover:text-gray-400 transition duration-300 ${isActive ? "text-gray-400" : ""
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block py-2 hover:text-gray-400 transition duration-300 ${isActive ? "text-gray-400" : ""
                                    }`
                                }
                            >
                                About Us
                            </NavLink>
                        </li>
                    </ul>

                    <div className="flex-1 ml-6">
                        <SearchComponent />
                    </div>
                    <div className="flex items-center space-x-4">

                        <button className="p-2 rounded-md hover:bg-gray-200 transition duration-300">EN/UR</button>
                    </div>



                </div>

                {/* Mobile Menu */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
                    <ul className="flex flex-col space-y-4 mt-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 hover:text-gray-400 transition duration-300 ${isActive ? "text-gray-400" : ""
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    `block py-2 hover:text-gray-400 transition duration-300 ${isActive ? "text-gray-400" : ""
                                    }`
                                }
                            >
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block py-2 hover:text-gray-400 transition duration-300 ${isActive ? "text-gray-400" : ""
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block py-2 hover:text-gray-400 transition duration-300 ${isActive ? "text-gray-400" : ""
                                    }`
                                }
                            >
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
