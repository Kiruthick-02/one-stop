import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const TestimonialCarousel = () => {
  return (
    <section className="testimonials-section py-20 bg-gradient-to-r from-purple-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600">Team Says</span>
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our creative professionals about their experience at One-Stop Creative Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;