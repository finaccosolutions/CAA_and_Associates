import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <a
        href="https://wa.me/+919495143671"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat with us
        </span>
      </a>
      <button
        onClick={scrollToTop}
        className="group relative bg-[#4DA768] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <ArrowUp className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#4DA768] text-white px-4 py-2 rounded-full text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Back to top
        </span>
      </button>
    </div>
  );
}