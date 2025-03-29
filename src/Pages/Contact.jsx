import React, { useState, useRef, useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp,FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { FiInstagram } from "react-icons/fi";

const ContactPage = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "",
    phone: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [activeTab, setActiveTab] = useState('form');
  const formRef = useRef();
  const recaptchaRef = useRef();

  // Form validation state
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  // Auto-dismiss success message after 5 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
      phone: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
      valid = false;
    }

    if (formData.phone && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!validateForm()) return;
    if (!recaptchaToken) {
      setError('Please complete the reCAPTCHA');
      return;
    }

    setIsLoading(true);

    try {
      // Using EmailJS to send the form data
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        formRef.current, 
        'YOUR_PUBLIC_KEY'
      );
      
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "", phone: "" });
      recaptchaRef.current.reset();
      setRecaptchaToken(null);
    } catch (err) {
      console.error('Failed to send message:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl text-red-500" />,
      title: "Email Us",
      detail: "info@mrtoner.pk",
      action: "mailto: info@mrtoner.pk"
    },
    {
      icon: <FaPhone className="text-2xl text-green-600" />,
      title: "Call Us",
      detail: "+92 300-460-1659",
      action: "tel:+923004601659"
    },
    {
      icon: <FaWhatsapp className="text-2xl text-green-500" />,
      title: "WhatsApp Us",
      detail: "+92 33-048-9839",
      action: "https://wa.me/92330489839"
    },
    
  ];

  return (
    <div className="bg-gray-50">
      {/* Contact Us Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-gray-800 to-blue-600 py-20 text-center text-white"
      >
        <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-xl max-w-2xl mx-auto">We're here to help and answer any questions you might have.</p>
      </motion.div>

      <div className="min-h-screen container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Methods */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions or need assistance? Reach out to us through any of these methods.
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition"
                  >
                    <div className="mt-1">{method.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{method.title}</h3>
                      <p className="text-gray-600">{method.detail}</p>
                      <a 
                        href={method.action} 
                        className="text-blue-600 hover:underline mt-2 inline-block"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Contact via {method.title.split(' ')[0]}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex space-x-6 justify-center">
                <motion.a 
                  href="#" 
                  whileHover={{ y: -3 }}
                  className="text-blue-600 hover:text-blue-800 text-2xl"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/mrtoner.pk/" 
                  whileHover={{ y: -3 }}
                  className="text-pink-400 hover:text-pink-600 text-2xl"
                >
                  <FiInstagram />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ y: -3 }}
                  className="text-blue-700 hover:text-blue-900 text-2xl"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="https://wa.me/92330489839" 
                  whileHover={{ y: -3 }}
                  className="text-green-500 hover:text-green-700 text-2xl"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form or Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex border-b">
                <button
                  onClick={() => setActiveTab('form')}
                  className={`flex-1 py-4 font-medium ${activeTab === 'form' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                >
                  Send a Message
                </button>
                <button
                  onClick={() => setActiveTab('map')}
                  className={`flex-1 py-4 font-medium ${activeTab === 'map' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                >
                  Our Location
                </button>
              </div>

              <div className="p-8">
                <AnimatePresence mode="wait">
                  {activeTab === 'form' ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        {submitted && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-green-100 text-green-700 p-4 rounded-md text-center"
                          >
                            Thank you! Your message has been sent. We'll get back to you soon.
                          </motion.div>
                        )}

                        {error && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-100 text-red-700 p-4 rounded-md text-center"
                          >
                            {error}
                          </motion.div>
                        )}

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                          />
                          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Optional"
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                          />
                          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Message *</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
                            rows="5"
                          ></textarea>
                          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        <div className="flex justify-center">
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="YOUR_RECAPTCHA_SITE_KEY"
                            onChange={handleRecaptchaChange}
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isLoading}
                          className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isLoading ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </span>
                          ) : 'Send Message'}
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="map"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h3>
                      <p className="text-gray-600 mb-6">Visit us at our office in Lahore, Pakistan</p>
                      <div className="h-96 rounded-lg overflow-hidden">
                        <iframe
                          className="w-full h-full"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10857.130877846545!2d74.35874809999999!3d31.520369999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191a3dd4c8e70b%3A0x18ab3e2b8f212575!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1644807614765!5m2!1sen!2s"
                          allowFullScreen=""
                          loading="lazy"
                        ></iframe>
                      </div>
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Business Hours</h4>
                        <ul className="text-gray-600 space-y-1">
                          <li className="flex justify-between">
                            <span>Monday - Friday</span>
                            <span>9:00 AM - 9:00 PM</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Saturday</span>
                            <span>10:00 AM - 4:00 PM</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Sunday</span>
                            <span>Closed</span>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* FAQ Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {[
                  {
                    question: "How long does it take to get a response?",
                    answer: "We typically respond within 24-48 hours during business days."
                  },
                  {
                    question: "Do you offer phone support?",
                    answer: "Yes, our phone support is available Monday-Friday from 9AM to 5PM."
                  },
                  {
                    question: "Where is your office located?",
                    answer: "Our main office is located at 123 Main St, Lahore, Pakistan."
                  },
                  {
                    question: "Can I contact via WhatsApp?",
                    answer: "Absolutely! Use our WhatsApp number for quick responses during business hours."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4">
                    <h4 className="font-medium text-gray-800">{faq.question}</h4>
                    <p className="text-gray-600 mt-1">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;