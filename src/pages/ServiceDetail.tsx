import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { ArrowLeft } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);

  if (!service) {
    navigate('/services');
    return null;
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#4DA768] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl">{service.description}</p>
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
                <h2 className="text-2xl font-bold mb-6">How We Can Help</h2>
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
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
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
    </div>
  );
}