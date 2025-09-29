import React from 'react';
import { Play, Instagram, Youtube, Globe } from 'lucide-react';

const SocialProofGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center space-x-6">
            <a href="#" className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-700 font-medium">Instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Youtube className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-700 font-medium">YouTube</span>
            </a>
            <a href="#" className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Globe className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-700 font-medium">Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofGrid;