import React, { lazy, Suspense } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowRight, ChevronDown, Users, CheckCircle, Award, Building, Briefcase, MessageCircle, CheckCircle2 } from 'lucide-react';

// Lazy load service features
const ServiceFeaturesComponent = lazy(() => import('../utils/serviceFeatures'));

export default function Home() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
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
    const message = `Hello! I'm interested in your ${service} service. I would like to know more about your professional services and how you can help my business grow. Could you please provide more details about your expertise and pricing?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+919495143671?text=${encodedMessage}`, '_blank');
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920"
              alt="Hero background"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4DA768]/95 to-[#3d8953]/95"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Your Path to Financial Excellence
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Expert Financial Solutions Tailored to Your Business Success
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
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
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={32} className="animate-bounce" />
          </motion.button>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} transform group-hover:scale-105 transition-transform duration-300`}></div>
                  <div className="relative bg-white rounded-xl p-8 text-center shadow-lg transform group-hover:-translate-y-2 transition-all duration-300">
                    <div className="text-[#4DA768] mb-4 flex justify-center">
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
        <section id="services" className="py-20 bg-gray-50 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="inline-flex items-center bg-[#4DA768]/10 px-4 py-2 rounded-full text-[#4DA768] font-medium mb-4"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Our Expertise
              </motion.div>
              <motion.h2 
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Comprehensive Business Solutions
              </motion.h2>
              <motion.p 
                className="text-gray-600 max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Tailored financial services to drive your business forward
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-2/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                      <img
                        src={`${service.image}?w=400`}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                        <span className="text-3xl">{service.icon}</span>
                      </div>
                    </div>

                    <div className="md:w-3/5 p-6 flex flex-col">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#4DA768] transition-colors duration-300">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>

                      <Suspense fallback={<div>Loading...</div>}>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-gray-900 mb-3">Key Offerings:</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <ServiceFeaturesComponent serviceId={service.id} />
                          </div>
                        </div>
                      </Suspense>

                      <div className="flex gap-4 mt-6">
                        <Link
                          to={`/services/${service.id}`}
                          className="flex-1 bg-[#4DA768] text-white px-4 py-3 rounded-lg hover:bg-[#3d8953] transition-all duration-300 flex items-center justify-center group/btn"
                        >
                          Learn More
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                        <button
                          onClick={() => openWhatsApp(service.title)}
                          className="flex-1 border-2 border-[#25D366] text-[#25D366] px-4 py-3 rounded-lg hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center group/btn"
                        >
                          Enquire
                          <MessageCircle size={16} className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 pointer-events-none">
                <svg className="absolute right-0 top-0 w-64 h-64 text-[#4DA768]/5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z" />
                </svg>
                <svg className="absolute left-0 bottom-0 w-64 h-64 text-[#4DA768]/5 transform rotate-180" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z" />
                </svg>
              </div>
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
              transition={{ duration: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8">
                Contact us today for a consultation and let us help you achieve your financial goals.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-[#4DA768] px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 hover:shadow-lg"
              >
                Contact Us <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
}