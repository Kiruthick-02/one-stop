import React from 'react';
import PixelTransition from './../gsap/PixelTransition';
import Threads from './../gsap/Threads';

const teamMembers = [
  {
    id: 1,
    name: 'Siddhartha NV',
    role: 'Founder & CEO',
    image: '/assets/images/siddu.png',
  },
  {
    id: 3,
    name: 'Kiruthick Ranganathan',
    role: 'Co-Founder & Senior Web Developer',
    image: '/assets/images/kiruthick.png',
  },
  {
    id: 2,
    name: 'Madhan G',
    role: 'Co-Founder',
    image: '/assets/images/madhan.png',
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-transparent">
      {/* Black background + Threads animation */}
      <div className="absolute inset-0 -z-10 bg-black">
        <Threads amplitude={3} distance={0} enableMouseInteraction={false} />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-teal-400">
              Team Members
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Meet our creative professionals and learn about their roles at One-Stop Creative Studio.
          </p>
        </div>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="testimonial-card bg-white rounded-2xl p-6 shadow-lg flex flex-col"
            >
              {/* PixelTransition for hover effect */}
              <div className="w-full aspect-square mb-6 rounded-lg overflow-hidden">
                <PixelTransition
                  firstContent={
                    <img
                      src={member.image}
                      alt={`${member.name}'s profile`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  }
                  secondContent={
                    <div className="w-full h-full flex items-center justify-center bg-black">
                      <p className="font-bold text-xl text-white text-center">{member.name}</p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor="#ffffff"
                  animationStepDuration={0.4}
                  className="custom-pixel-card w-full h-full"
                />
              </div>

              {/* Text info */}
              <div className="border-t pt-4 text-center">
                <h4 className="font-semibold text-gray-800">{member.name}</h4>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
