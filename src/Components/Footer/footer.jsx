import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">About Us</h3>
            <p className="text-gray-400">
              PrinterStore offers a wide stock of high-quality printers and photocopiers, ensuring the best products at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {["Products", "Why Choose Us?", "Contact", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li>Lahore, Pakistan</li>
              <li>✉ mrtoner@gmail.com </li>
              <li>📞 +92 33-048-9839</li>
              <li>📞 +92 300-460-1659</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get the latest news and offers.</p>
            <div className="flex items-center bg-gray-800 p-2 rounded-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-gray-300 w-full px-3 py-2 focus:outline-none"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition duration-300">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <div className="flex justify-center space-x-6">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-white transition duration-300"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-gray-400 mt-4">&copy; {new Date().getFullYear()} PrinterStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
