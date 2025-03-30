import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { MessageCircle } from 'lucide-react';

export default function Services() {
  const openWhatsApp = (service: string) => {
    const message = `Hi, I'm interested in your ${service} service. Can you provide more information?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+919495143671?text=${encodedMessage}`, '_blank');
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
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center bg-white rounded-2xl shadow-lg overflow-hidden`}
              >
                <div className="w-full md:w-1/2 h-[400px] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4 font-serif text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold font-serif text-gray-900">Key Features:</h3>
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
                    className="mt-8 inline-flex items-center bg-[#4DA768] text-white px-6 py-3 rounded-full hover:bg-[#3d8953] transition-colors duration-300"
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
    </div>
  );
}