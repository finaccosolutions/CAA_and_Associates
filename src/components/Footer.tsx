import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CA A & Associates</h3>
            <p className="text-gray-400">
              Professional chartered accountancy services led by CA Anwarsha Ali C.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#4DA768]">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#4DA768]">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#4DA768]">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#4DA768]">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.id}`}
                    className="text-gray-400 hover:text-[#4DA768] text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CA A & Associates. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="bg-[#4DA768] p-2 rounded-full hover:bg-[#3d8953] transition-colors duration-300"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}