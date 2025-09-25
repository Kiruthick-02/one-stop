import React from 'react';
import useGsapAnimation from './hooks/useGsapAnimation';
import HeroSection from './components/HeroSection';
import RolesGrid from './components/RolesGrid';
import WhyJoinSection from './components/WhyJoinSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import SocialProofGrid from './components/SocialProofGrid';
import ApplicationSection from './components/ApplicationForm';
import Footer from './components/Footer';

const App = () => {
  useGsapAnimation();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <RolesGrid />
      <WhyJoinSection />
      <TestimonialCarousel />
      <SocialProofGrid />
      <ApplicationSection />
      <Footer />
    </div>
  );
};

export default App;