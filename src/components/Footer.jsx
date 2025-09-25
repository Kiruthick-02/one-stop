import React from 'react';
import { Instagram, Youtube, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
              One-Stop Creative Studio
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Crafting exceptional creative experiences that inspire, engage, and transform brands across the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-400 transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-400 transition-colors duration-300">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">hello@onestopstudio.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">Creative District, New York</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Our Work</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 One-Stop Creative Studio. All rights reserved. Crafted with ❤️ by our creative team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;