import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';
import { Menu, X, Calculator, BookOpen, Building2 } from 'lucide-react';

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <Building2 className="h-8 w-8 text-[#4DA768]" />
                <Calculator className="h-4 w-4 text-white absolute -bottom-1 -right-1" />
              </div>
              <span className="text-2xl font-bold text-white font-serif">
                CA A & Associates
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-white relative group px-2 py-1 font-serif ${
                  location.pathname === item.href 
                    ? 'text-[#4DA768]' 
                    : 'hover:text-[#4DA768]'
                }`}
              >
                {item.title}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#4DA768] transform transition-transform duration-300 ${
                  location.pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#4DA768]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-b-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md font-serif ${
                    location.pathname === item.href
                      ? 'bg-[#4DA768] text-white'
                      : 'text-white hover:bg-gray-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}