import React from 'react';
import Orb from './../gsap/Orb';
import TextType from './../gsap/TextType';
import ElectricBorder from './../gsap/ElectricBorder';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      
      {/* Orb Background */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={60} // Yellowish hue
          forceHoverState={false}
        />
      </div>

     {/* TextType Component in the Top Left Corner */}
<div className="absolute top-0 left-0 p-4 z-10">
  <TextType 
    text={["Welcome To", "One-Stop Creative Studio", "Let's Build Some Amazing Experiences!"]}
    typingSpeed={60}
    pauseDuration={500}
    showCursor={true}
    cursorCharacter="|"
    className="text-4xl md:text-5xl font-bold text-white" // Added classes to increase text size
  />
</div>


      {/* Content */}
      <div className="relative z-10 text-center px-40 max-w-4xl mx-auto">
        <h1 className="hero-title text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Join Our 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-teal-400"> Creative Movement</span>
          !
        </h1>
        
        <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Where passion meets innovation. We're building the future of creative storytelling, one frame at a time.
        </p>

        <ElectricBorder 
        color="#FACC15" // Tailwind's yellow-400 in hex
        speed={3}
        chaos={0.1}
        thickness={3}
        className="inline-block rounded-full"
      >
        <button
          className="px-8 py-4 rounded-full text-lg font-semibold text-white bg-transparent transition-all duration-300 hover:scale-105"
          onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Start Your Journey
        </button>
      </ElectricBorder>
      </div>
    </section>
  );
};

export default HeroSection;
