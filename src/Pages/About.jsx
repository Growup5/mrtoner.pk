import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from "../images/15381.jpg";
import { Link } from "react-router-dom";
import ceoImage from "../images/sharjeel.jpeg";
import { FaLinkedin, FaTwitter, FaGlobe, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Enhanced Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      when: "beforeChildren"
    },
  },
};

const itemVariants = {
  hidden: {
    y: 30,
    opacity: 0,
    scale: 0.95
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100
    }
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const AboutPage = () => {
  // Team data with avatar placeholders and LinkedIn links
  const teamMembers = [
    {
      name: 'Shahid Hameed',
      role: 'CEO & Founder',
      image: '',
      description: 'Visionary leader with 20+ years in printing industry. Spearheaded our global expansion and technological innovations.',
      social: {
      }
    },
    {
      name: 'Sharjeel Shahid',
      role: 'Head of Operations & CO-Founder',
      image: ceoImage,
      description: 'Operations maestro ensuring seamless workflow across our 15 international branches.',
      social: {
        linkedin: 'https://www.linkedin.com/in/sharjeel-shahid-660124278/',
      }



    }
  ];

  // Core values with icons
  const coreValues = [
    {
      title: 'Innovation',
      description: 'We invest 15% of revenue in R&D to stay at technology forefront with 50+ patents filed.',
      icon: '💡'
    },
    {
      title: 'Sustainability',
      description: 'Carbon-neutral since 2020 using 100% renewable energy in all facilities.',
      icon: '🌱'
    },
    {
      title: 'Excellence',
      description: 'ISO 9001 certified with 99.97% quality assurance pass rate across all products.',
      icon: '🏆'
    },
    {
      title: 'Integrity',
      description: 'Ethical sourcing with full supply chain transparency and fair trade partnerships.',
      icon: '🤝'
    },
    {
      title: 'Customer Focus',
      description: '24/7 global support with 30-minute response guarantee for premium clients.',
      icon: '❤️'
    },
    {
      title: 'Collaboration',
      description: 'Strategic partnerships with 20+ industry leaders and academic institutions.',
      icon: '👥'
    }
  ];

  // Company milestones timeline
  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Started as small print shop in Lahore with 5 employees'
    },
    {
      year: '2012',
      title: 'First Patent Filed',
      description: 'Developed proprietary color matching technology'
    },
    {
      year: '2015',
      title: 'International Expansion',
      description: 'Opened first overseas office in Dubai'
    },
    {
      year: '2018',
      title: 'Sustainability Initiative',
      description: 'Achieved carbon-neutral certification'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Launched smart printing automation system'
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Ranked #1 printing tech company by Gartner'
    }
  ];

  // Stats data
  const companyStats = [
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Clients Worldwide' },
    { value: '10K+', label: 'Projects Completed' },
    { value: '100%', label: 'Customer Satisfaction' }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "PrinterPro transformed our marketing materials with their innovative printing solutions. The quality is unmatched.",
      author: "Michael Brown",
      position: "CMO, TechGlobal Inc.",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      quote: "Their sustainable approach to printing aligns perfectly with our corporate values. Exceptional service every time.",
      author: "Jennifer Lee",
      position: "Sustainability Director, GreenEarth Corp.",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      quote: "The speed and precision of PrinterPro's services helped us meet impossible deadlines. True partners in our success.",
      author: "David Wilson",
      position: "Creative Director, BrandMasters",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];

  // Technology stack
  const technologies = [
    { name: "AI Color Matching", icon: "🤖" },
    { name: "3D Printing", icon: "🖨️" },
    { name: "Nano-Inks", icon: "🔬" },
    { name: "IoT Integration", icon: "🌐" },
    { name: "Biodegradable Materials", icon: "🍃" },
    { name: "Augmented Reality", icon: "👓" }
  ];

  return (
    <>
      {/* Hero Section with Enhanced Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center h-screen p-4 text-center bg-cover bg-fixed bg-center overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${backgroundImage})` }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6">
            About <span className="text-blue-400">PrinterPro</span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Redefining printing technology through innovation, sustainability, and unparalleled quality since 2008
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
              Our Services
            </button>
            <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Contact Team
            </button>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-white rounded-full mt-1"
              animate={{ y: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Overview */}
          <motion.section
            className="mb-20 text-center"
            variants={itemVariants}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
              variants={fadeIn}
            >
              Our Journey
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-10"
              variants={fadeIn}
            >
              From humble beginnings in a small workshop to becoming a global leader in printing technology,
              PrinterPro has consistently pushed boundaries while maintaining our commitment to quality and
              environmental responsibility.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
              variants={staggerContainer}
            >
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    borderBottom: "4px solid #3b82f6"
                  }}
                >
                  <motion.p
                    className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Mission & Vision */}
          <motion.section
            className="grid md:grid-cols-2 gap-10 mb-20"
            variants={containerVariants}
          >
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300"></div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <span className="text-blue-600 text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize the printing industry through technological innovation while maintaining
                uncompromising environmental standards. We empower businesses worldwide with sustainable,
                high-quality printing solutions that drive results without compromising our planet's future.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-300"></div>
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <span className="text-purple-600 text-2xl">🔭</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To create a world where every printed material serves its purpose beautifully while contributing
                positively to environmental sustainability. We envision leading the industry's transformation
                towards zero-waste, energy-efficient production methods without sacrificing quality or creativity.
              </p>
            </motion.div>
          </motion.section>

          {/* Timeline Section */}
          <motion.section
            className="mb-20"
            variants={itemVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
              variants={fadeIn}
            >
              Our Milestones
            </motion.h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600 transform -translate-x-1/2"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative mb-10 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8'}`}>
                    <motion.div
                      className="inline-block bg-blue-600 text-white text-xl font-bold py-2 px-4 rounded-lg shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      {milestone.year}
                    </motion.div>
                  </div>

                  <div className="hidden md:block w-8 h-8 rounded-full bg-white border-4 border-blue-500 absolute left-1/2 transform -translate-x-1/2"></div>

                  <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 text-right'}`}>
                    <motion.div
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      whileHover={{ y: -5 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            className="mb-20"
            variants={itemVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
              variants={fadeIn}
            >
              Leadership Team
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group transform transition-all duration-300 hover:-translate-y-2"
                  variants={itemVariants}
                  whileHover={{
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="relative overflow-hidden h-64">
                    <motion.img
                      src={member.image}
                      // alt={member.name}
                      className="w-full h-4xl object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex space-x-4">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="text-white hover:text-blue-400 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin className="w-6 h-6" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            className="text-white hover:text-blue-400 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaTwitter className="w-6 h-6" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.description}</p>
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="mr-2" /> Connect on LinkedIn
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            className="mb-20"
            variants={itemVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
              variants={fadeIn}
            >
              Our Core Values
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    borderLeft: "4px solid #3b82f6",
                    backgroundColor: "rgba(59, 130, 246, 0.05)"
                  }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technology Section */}
          <motion.section
            className="mb-20"
            variants={itemVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center"
              variants={fadeIn}
            >
              Our Technology Stack
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto"
              variants={fadeIn}
            >
              Leveraging cutting-edge technologies to deliver exceptional printing solutions
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  }}
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <h3 className="font-medium text-gray-800">{tech.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section
            className="mb-20"
            variants={itemVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
              variants={fadeIn}
            >
              What Our Clients Say
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg"
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  <div className="flex mt-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>







          {/* CTA Section */}
          <motion.section
            className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 overflow-hidden mb-20"
            variants={itemVariants}
          >
            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />

            <div className="relative z-10 text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Revolutionize Your Printing?
              </motion.h2>
              <motion.p
                className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Discover how our innovative solutions can transform your business. Get in touch today for a consultation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4"
              >
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  <Link to="/contact">Contact Us</Link>
                </button>

                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                  <Link to="/products">View Products</Link>
                </button>

              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </>
  );
};

export default AboutPage;