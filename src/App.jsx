import React from 'react';
import useGsapAnimation from './hooks/useGsapAnimation';
import HeroSection from './components/HeroSection';
import RolesGrid from './components/RolesGrid';
import WhyJoinSection from './components/WhyJoinSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import SocialProofGrid from './components/SocialProofGrid';
import ApplicationSection from './components/ApplyNowSection';
import Footer from './components/Footer';
import ApplicationForm from './components/ApplicationForm';


const App = () => {
  // ✅ Run GSAP animations

  return (
    <div className="min-h-screen">
      <HeroSection />
      <RolesGrid />
      <WhyJoinSection />
      <TestimonialCarousel />
      <ApplicationSection />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default App;
