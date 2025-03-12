import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const backgroundImage = "src/images/15381.jpg"; 

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center h-80 p-6 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="relative text-6xl font-extrabold text-white">Contact Us</h1>
      </motion.div>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
          <p className="text-center text-gray-600 mt-2">We'd love to hear from you!</p>

          {submitted && (
            <div className="bg-green-100 text-green-700 p-4 rounded-md text-center mt-4">
              Thank you! Your message has been sent.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Location Section */}
        <div className="max-w-4xl w-full bg-white p-8 mt-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800">Our Location</h3>
          <p className="text-gray-600">Lahore, Pakistan</p>
          <div className="mt-4">
            <iframe
              className="w-full h-64 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10857.130877846545!2d74.35874809999999!3d31.520369999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191a3dd4c8e70b%3A0x18ab3e2b8f212575!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1644807614765!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex space-x-4">
          <a href="#" className="text-blue-600 hover:underline flex items-center space-x-2">
            <FaFacebook /> <span>Facebook</span>
          </a>
          <a href="#" className="text-blue-600 hover:underline flex items-center space-x-2">
            <FaTwitter /> <span>Twitter</span>
          </a>
          <a href="#" className="text-blue-600 hover:underline flex items-center space-x-2">
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
