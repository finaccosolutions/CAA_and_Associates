import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function Services() {
  const openWhatsApp = (service: string) => {
    const message = `Hi, I'm interested in your ${service} service. Can you provide more information?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+919495143671?text=${encodedMessage}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-16 bg-green-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive financial and business solutions tailored to your needs
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#4DA768] transition-colors duration-300 relative inline-block">
                    {service.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4DA768] transition-all duration-300 group-hover:w-full"></span>
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-[#4DA768] mr-2">✓</span>
                        Expert consultation and guidance
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#4DA768] mr-2">✓</span>
                        Customized solutions for your business
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#4DA768] mr-2">✓</span>
                        Regular updates and support
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => openWhatsApp(service.title)}
                    className="mt-8 inline-flex items-center bg-[#4DA768] text-white px-6 py-3 rounded-full hover:bg-[#3d8953] transition-colors duration-300 transform group-hover:translate-x-2"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Go to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-[#4DA768] text-white p-3 rounded-full shadow-lg hover:bg-[#3d8953] transition-colors duration-300"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}