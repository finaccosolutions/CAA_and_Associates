import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowRight, ArrowUp, ChevronDown } from 'lucide-react';

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4DA768]/95 to-[#3d8953]/95"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Professional Financial Services
            </span>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Path to Financial Excellence
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Financial Solutions Tailored to Your Business Success
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-x-4"
          >
            <Link
              to="/contact"
              className="bg-white text-[#4DA768] px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 inline-block hover:shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-block"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
        <motion.button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-green-200 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ChevronDown size={32} className="animate-bounce" />
        </motion.button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive financial solutions tailored to meet your business needs
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <img
                  src={`https://source.unsplash.com/featured/?${service.title.toLowerCase().replace(/&/g, 'and').split(' ').join(',')}`}
                  alt={service.title}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-20">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-3xl mb-3 opacity-90">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {service.description}
                    </p>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center text-white hover:text-green-200 transition-colors duration-300"
                    >
                      Learn More <ArrowRight size={16} className="ml-2 group-hover:ml-3 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 px-4">
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
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Professional at work"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#4DA768] text-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Contact us today for a consultation and let us help you achieve your financial goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-[#4DA768] px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 hover:shadow-lg"
            >
              Contact Us <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-40 bg-[#4DA768] text-white p-3 rounded-full shadow-lg hover:bg-[#3d8953] transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}