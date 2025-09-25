import React from 'react';

const ApplyNowSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">Apply Now</span>?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Take the next step towards joining our creative team and start your journey today!
        </p>
        <button 
          className="bg-gradient-to-r from-teal-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-400 hover:to-purple-500 transition-all duration-300"
          onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default ApplyNowSection;