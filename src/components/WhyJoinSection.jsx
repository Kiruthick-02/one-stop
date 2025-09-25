import React from 'react';
import { Star, Users, Award, Zap } from 'lucide-react';

const WhyJoinSection = () => {
  const benefits = [
    {
      icon: Star,
      title: "Creative Freedom",
      description: "Express your unique vision with full creative autonomy on exciting projects."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work alongside passionate creatives who inspire and challenge each other daily."
    },
    {
      icon: Award,
      title: "Growth Opportunities",
      description: "Advance your skills with mentorship, workshops, and cutting-edge technology."
    },
    {
      icon: Zap,
      title: "Innovative Projects",
      description: "Work on groundbreaking campaigns for leading brands and emerging startups."
    }
  ];

  return (
    <section className="why-join-section py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-teal-400">Choose Us</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're not just a studio; we're a creative family that believes in pushing boundaries and creating magic together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="why-join-item text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-teal-500 rounded-2xl mb-6 mx-auto">
                  <IconComponent className="w-10 h-10 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;