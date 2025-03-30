import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#4DA768] to-[#3d8953] text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CA A & Associates
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Trusted Partner in Financial Excellence
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="bg-white text-[#4DA768] px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={`/services/${service.id}`}
                  className="text-[#4DA768] font-medium flex items-center hover:text-[#3d8953] transition-colors duration-300"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-[#4DA768] text-white px-6 py-3 rounded-full hover:bg-[#3d8953] transition-colors duration-300"
            >
              View All Services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">About CA Anwarsha Ali C</h2>
              <p className="text-gray-600 mb-6">
                With years of experience in providing comprehensive financial services,
                we are committed to delivering excellence in chartered accountancy.
                Our expertise spans across various domains of finance, taxation, and
                business advisory.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-[#4DA768] font-medium hover:text-[#3d8953] transition-colors duration-300"
              >
                Learn More About Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                alt="Professional at work"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#4DA768] text-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today for a consultation and let us help you achieve your financial goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-[#4DA768] px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300"
          >
            Contact Us <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}