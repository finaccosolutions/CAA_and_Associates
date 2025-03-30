import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">CA A & Associates</h3>
            <p className="text-gray-400 mb-6">
              Professional chartered accountancy services led by CA Anwarsha Ali C.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-[#4DA768] mr-3 h-5 w-5 mt-1" />
                <p className="text-gray-400">
                  IInd FLOOR, MALABAR ARCADE<br />
                  NH 66, PANTHEERANKAVU<br />
                  CALICUT
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="text-[#4DA768] mr-3 h-5 w-5" />
                <p className="text-gray-400">+91 9495143671</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-[#4DA768] mr-3 h-5 w-5" />
                <p className="text-gray-400">caaassociatesca@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#4DA768] transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#4DA768] transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#4DA768] transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#4DA768] transition-colors duration-300 flex items-center">
                  <ArrowRight size={16} className="mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="grid grid-cols-1 gap-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.id}`}
                    className="text-gray-400 hover:text-[#4DA768] transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight size={16} className="mr-2" />
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/services"
                  className="text-[#4DA768] hover:text-[#3d8953] transition-colors duration-300 flex items-center font-semibold"
                >
                  <ArrowRight size={16} className="mr-2" />
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6">Business Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Clock className="text-[#4DA768] mr-3 h-5 w-5" />
                <div>
                  <p className="font-semibold">Monday - Saturday</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-center text-gray-400">
                <Clock className="text-[#4DA768] mr-3 h-5 w-5" />
                <div>
                  <p className="font-semibold">Sunday</p>
                  <p>Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CA A & Associates. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}