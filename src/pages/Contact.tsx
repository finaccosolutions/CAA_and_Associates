import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="pt-16 bg-gradient-to-b from-green-50 to-white">
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
      <section className="py-20 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#4DA768]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4DA768]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4DA768]/5 rounded-bl-full"></div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#4DA768] focus:ring focus:ring-[#4DA768]/20 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#4DA768] focus:ring focus:ring-[#4DA768]/20 transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#4DA768] focus:ring focus:ring-[#4DA768]/20 transition-all duration-300"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#4DA768] focus:ring focus:ring-[#4DA768]/20 transition-all duration-300"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className={`w-full py-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${
                    formStatus === 'idle'
                      ? 'bg-[#4DA768] hover:bg-[#3d8953] text-white'
                      : formStatus === 'success'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-400 text-white'
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                  {formStatus === 'sending' && <span>Sending...</span>}
                  {formStatus === 'success' && (
                    <>
                      <span>Message Sent!</span>
                      <CheckCircle size={18} />
                    </>
                  )}
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
              <div className="bg-white p-8 rounded-xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#4DA768]/5 rounded-br-full"></div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                    <div className="bg-[#4DA768] bg-opacity-10 p-3 rounded-lg">
                      <MapPin className="text-[#4DA768] h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        IInd FLOOR, MALABAR ARCADE<br />
                        NH 66, PANTHEERANKAVU<br />
                        CALICUT
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                    <div className="bg-[#4DA768] bg-opacity-10 p-3 rounded-lg">
                      <Phone className="text-[#4DA768] h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 9495143671</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                    <div className="bg-[#4DA768] bg-opacity-10 p-3 rounded-lg">
                      <Mail className="text-[#4DA768] h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@caaassociates.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-8 rounded-xl shadow-xl relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#4DA768]/5 rounded-tl-full"></div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                    <div className="bg-[#4DA768] bg-opacity-10 p-3 rounded-lg">
                      <Clock className="text-[#4DA768] h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Monday - Saturday</p>
                      <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300">
                    <div className="bg-[#4DA768] bg-opacity-10 p-3 rounded-lg">
                      <Clock className="text-[#4DA768] h-6 w-6" />
                    </div>
                    <div>
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