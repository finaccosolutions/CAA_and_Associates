import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowRight, ChevronDown, Users, CheckCircle, Award, Building, Briefcase, BarChart3, PieChart, Calculator, BookOpen } from 'lucide-react';

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

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
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
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-block"
            >
              Explore Services
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
                viewport={{ once: true }}
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
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
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
              viewport={{ once: true }}
            >
              Comprehensive Business Solutions
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Tailored financial services to drive your business forward
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
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#4DA768] transition-colors duration-300 relative">
                    {service.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4DA768] transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-[#4DA768] group-hover:text-[#3d8953] transition-colors duration-300"
                  >
                    Learn More <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
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
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4DA768]/10 to-[#3d8953]/10 transform -skew-y-3 rounded-3xl"></div>
            <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-lg border-2 border-[#4DA768]/20">
              <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#4DA768] to-[#3d8953]">
                About CA Anwarsha Ali C
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  CA Anwarsha Ali C is a distinguished Chartered Accountant with over 15 years of experience
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
    </div>
  );
}