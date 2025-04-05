import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openWhatsApp = (service: string) => {
    const message = `Hello! I'm interested in your ${service} service. I would like to know more about your professional services and how you can help my business grow. Could you please provide more details about your expertise and pricing?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+919495143671?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-16 bg-green-50 scroll-mt-16">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Section */}
                  <div className="md:w-2/5 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 p-6 flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#4DA768] transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {/* Service-specific features */}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-900 mb-3">Key Offerings:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {getServiceFeatures(service.id).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-[#4DA768] mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-6">
                      <Link
                        to={`/services/${service.id}`}
                        className="flex-1 bg-[#4DA768] text-white px-4 py-3 rounded-lg hover:bg-[#3d8953] transition-all duration-300 flex items-center justify-center group/btn"
                      >
                        Learn More
                        <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <button
                        onClick={() => openWhatsApp(service.title)}
                        className="flex-1 border-2 border-[#25D366] text-[#25D366] px-4 py-3 rounded-lg hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center group/btn"
                      >
                        Enquire
                        <MessageCircle size={16} className="ml-2 transform group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Service-specific features
function getServiceFeatures(serviceId: string): string[] {
  const features: Record<string, string[]> = {
    'gst-services': [
      'GST Registration',
      'Monthly Returns Filing',
      'GST Audit Support',
      'Input Tax Credit',
    ],
    'income-tax-services': [
      'Tax Planning',
      'Return Filing',
      'Tax Audit',
      'Assessment Support',
    ],
    'business-setup': [
      'Company Registration',
      'License Applications',
      'Compliance Setup',
      'Business Planning',
    ],
    'corporate-compliance': [
      'Annual Compliance',
      'Regulatory Filings',
      'Legal Documentation',
      'Advisory Services',
    ],
    'cost-management': [
      'Cost Analysis',
      'Budget Planning',
      'Efficiency Optimization',
      'Financial Strategy',
    ],
    'audit-certification': [
      'Statutory Audit',
      'Internal Audit',
      'Compliance Audit',
      'Special Purpose Audit',
    ],
    'registration-compliances': [
      'Business Registration',
      'License Management',
      'Renewal Services',
      'Compliance Tracking',
    ],
    'accounting-bookkeeping': [
      'Financial Statements',
      'Account Reconciliation',
      'Payroll Processing',
      'MIS Reports',
    ],
    'drafting-documentation': [
      'Legal Documents',
      'Agreements',
      'Contracts',
      'Policy Documents',
    ],
    'management-consultancy': [
      'Business Strategy',
      'Process Improvement',
      'Risk Management',
      'Growth Planning',
    ],
    'hr-services': [
      'Recruitment',
      'HR Policy Development',
      'Performance Management',
      'Training Programs',
    ],
    'statutory-compliances': [
      'Regulatory Compliance',
      'Statutory Filings',
      'Due Diligence',
      'Compliance Audit',
    ],
    'fema-rbi': [
      'FEMA Compliance',
      'RBI Reporting',
      'Foreign Investment',
      'Exchange Control',
    ],
    'virtual-accounting': [
      'Cloud Accounting',
      'Remote Bookkeeping',
      'Digital Documentation',
      'Real-time Reporting',
    ],
  };

  return features[serviceId] || [
    'Professional Guidance',
    'Customized Solutions',
    'Regular Updates',
    'Dedicated Support',
  ];
}