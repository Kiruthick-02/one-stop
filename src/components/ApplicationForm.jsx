import React from 'react';
import { Globe } from 'lucide-react';
import LightRays from './../gsap/LightRays';

const ApplicationSection = () => {
  return (
    <section id="application" className="relative application-section py-20 bg-black overflow-hidden">
      {/* LightRays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={10}
          rayLength={7}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-teal-400">
              Create Magic
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Take the first step towards joining our creative family. We can't wait to see what you'll bring to the table.
          </p>
        </div>

        <div className="application-form bg-white rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Application Form</h3>
            <p className="text-gray-600">Fill out the form below to start your journey with us</p>
          </div>

          {/* Google Form Embed */}
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">


            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeoLDL6evAW7xsjMnUaC83G-Qem7AXxtW5shtTeoJDQm3-Hsg/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Application Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
