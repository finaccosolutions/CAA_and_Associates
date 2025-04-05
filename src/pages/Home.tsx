import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowRight, ChevronDown, Users, CheckCircle, Award, Building, Briefcase, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { 
      icon: <Users className="w-8 h-8" />, 
      number: "100K+", 
      label: "Successful Registrations",
      color: "from-blue-500/20 to-blue-600/20" 
    },
    { 
      icon: <CheckCircle className="w-8 h-8" />, 
      number: "50K+", 
      label: "Satisfied Clients",
      color: "from-green-500/20 to-green-600/20"
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      number: "15+", 
      label: "Years Experience",
      color: "from-purple-500/20 to-purple-600/20"
    },
    { 
      icon: <Building className="w-8 h-8" />, 
      number: "5K+", 
      label: "Business Setups",
      color: "from-orange-500/20 to-orange-600/20"
    },
  ];

  const openWhatsApp = (service: string) => {
    const message = `Hi, I'm interested in your ${service} service. Can you provide more information?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+919495143671?text=${encodedMessage}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4DA768]/95 to-[#3d8953]/95"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
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
            <button
              onClick={scrollToServices}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-block"
            >
              Our Services
            </button>
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

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptMC0xMmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiM0REE3NjgiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} transform group-hover:scale-105 transition-transform duration-300`}></div>
                <div className="relative bg-white rounded-xl p-8 text-center shadow-lg transform group-hover:-translate-y-2 transition-all duration-300">
                  <div className="text-[#4DA768] mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center bg-[#4DA768]/10 px-4 py-2 rounded-full text-[#4DA768] font-medium mb-4"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Our Expertise
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Comprehensive Business Solutions
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Tailored financial services to drive your business forward
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={serviceVariants}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Section */}
                  <div className="md:w-2/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full transform group-hover:rotate-12 transition-transform duration-300">
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
                          <div 
                            key={idx} 
                            className="flex items-center text-gray-700 transform hover:translate-x-2 transition-transform duration-300"
                          >
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
                        className="flex-1 bg-[#4DA768] text-white px-4 py-3 rounded-lg hover:bg-[#3d8953] transition-all duration-300 flex items-center justify-center group/btn transform hover:scale-105"
                      >
                        Learn More
                        <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <button
                        onClick={() => openWhatsApp(service.title)}
                        className="flex-1 border-2 border-[#25D366] text-[#25D366] px-4 py-3 rounded-lg hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center group/btn transform hover:scale-105"
                      >
                        Enquire
                        <MessageCircle size={16} className="ml-2 transform group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 opacity-5">
            <Award className="w-96 h-96" />
          </div>
          <div className="absolute bottom-0 left-0 opacity-5">
            <Briefcase className="w-96 h-96" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4DA768]/10 to-[#3d8953]/10 transform -skew-y-3 rounded-3xl"></div>
            <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-lg border-2 border-[#4DA768]/20">
              <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#4DA768] to-[#3d8953]">
                About CA Anwarsha Ali C
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  CA Anwarsha Ali C is a distinguished Chartered Accountant with over 10 years of experience
                  in providing comprehensive financial services. His expertise spans across taxation,
                  auditing, financial planning, and business advisory services.
                </p>
                <p className="text-lg leading-relaxed">
                  Throughout his career, he has helped numerous businesses and individuals navigate complex
                  financial landscapes, ensuring compliance while optimizing their financial positions.
                  His commitment to excellence and client satisfaction has earned him a reputation as a
                  trusted financial advisor in the industry.
                </p>
                <p className="text-lg leading-relaxed">
                  With a deep understanding of both traditional and modern financial practices, CA Anwarsha
                  Ali C continues to provide innovative solutions that help clients achieve their financial
                  goals while maintaining the highest standards of professional integrity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#4DA768] text-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Contact us today for a consultation and let us help you achieve your financial goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-[#4DA768] px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Contact Us <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
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