import React from 'react';
import { Play, Instagram, Youtube, Globe } from 'lucide-react';

const SocialProofGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-600">Creative Work</span>
          </h2>
          <p className="text-xl text-gray-600">
            Explore our portfolio and see the magic we create every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gradient-to-br from-gray-800 to-purple-900 rounded-2xl aspect-square flex items-center justify-center group hover:scale-105 transition-transform duration-300">
              <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
          ))}
        </div>

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