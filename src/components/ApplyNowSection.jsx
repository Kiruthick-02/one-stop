import ElectricBorder from './../gsap/ElectricBorder';
import React from 'react';

const ApplyNowSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-teal-400">Apply Now</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Take the next step towards joining our creative team and start your journey today!
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
          Apply Now
        </button>
      </ElectricBorder>

      </div>
    </section>
  );
};

export default ApplyNowSection;