import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Join Our 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500"> Creative Movement</span>
          !
        </h1>
        
        <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Where passion meets innovation. We're building the future of creative storytelling, one frame at a time.
        </p>

        <button 
          className="hero-cta bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default HeroSection;