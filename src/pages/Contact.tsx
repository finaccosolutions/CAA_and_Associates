import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16 bg-green-50">
      {/* Hero Section */}
      <section className="bg-[#4DA768] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with our team of experts
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4DA768] focus:ring focus:ring-[#4DA768] focus:ring-opacity-50 transition-all duration-300 transform group-hover:scale-[1.01]"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4DA768] focus:ring focus:ring-[#4DA768] focus:ring-opacity-50 transition-all duration-300 transform group-hover:scale-[1.01]"
                  />
                </div>
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4DA768] focus:ring focus:ring-[#4DA768] focus:ring-opacity-50 transition-all duration-300 transform group-hover:scale-[1.01]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4DA768] text-white px-6 py-3 rounded-md hover:bg-[#3d8953] transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="bg-[#4DA768]/10 p-3 rounded-full">
                      <MapPin className="text-[#4DA768] h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        IInd FLOOR, MALABAR ARCADE<br />
                        NH 66, PANTHEERANKAVU<br />
                        CALICUT
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="bg-[#4DA768]/10 p-3 rounded-full">
                      <Phone className="text-[#4DA768] h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 9495143671</p>
                    </div>
                  </div>
                  <div className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="bg-[#4DA768]/10 p-3 rounded-full">
                      <Mail className="text-[#4DA768] h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">caaassociatesca@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="bg-[#4DA768]/10 p-3 rounded-full">
                      <Clock className="text-[#4DA768] h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Monday - Saturday</p>
                      <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className="bg-[#4DA768]/10 p-3 rounded-full">
                      <Clock className="text-[#4DA768] h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Sunday</p>
                      <p className="text-gray-600">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}