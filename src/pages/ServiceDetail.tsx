import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/services';
import { ArrowLeft } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);
  const [showEnquiry, setShowEnquiry] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    navigate('/services');
    return null;
  }

  return (
    <div className="pt-16 scroll-mt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white">
          <div className="flex items-center mb-6">
            <Link
              to="/services"
              className="flex items-center text-white hover:text-gray-200 transition-colors duration-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Services
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-4xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">{service.title}</h1>
            <p className="text-xl max-w-2xl">{service.description}</p>
            <button
              onClick={() => setShowEnquiry(true)}
              className="mt-8 bg-[#4DA768] text-white px-8 py-3 rounded-full hover:bg-[#3d8953] transition-colors duration-300"
            >
              Enquire About This Service
            </button>
          </motion.div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6 font-serif">How We Can Help</h2>
                <p className="text-gray-600 mb-6">
                  Our team of experienced professionals provides comprehensive solutions
                  tailored to your specific needs. We understand that each client is unique,
                  and we work closely with you to ensure the best possible outcomes.
                </p>
                <p className="text-gray-600">
                  With years of experience in {service.title.toLowerCase()}, we have
                  developed robust methodologies and best practices that help our clients
                  achieve their objectives efficiently and effectively.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 font-serif">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#4DA768] mr-2">✓</span>
                  <span>Expert guidance and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4DA768] mr-2">✓</span>
                  <span>Customized solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4DA768] mr-2">✓</span>
                  <span>Timely delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4DA768] mr-2">✓</span>
                  <span>Ongoing support</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showEnquiry && (
          <EnquiryForm
            serviceName={service.title}
            onClose={() => setShowEnquiry(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}