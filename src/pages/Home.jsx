// src/pages/Home.jsx

import React from 'react';
import HeroSection from '../components/HeroSection';
import RolesGrid from '../components/RolesGrid';
import ApplyNowSection from '../components/ApplyNowSection'; // <-- IMPORT THE NEW COMPONENT
import WhyJoinSection from '../components/WhyJoinSection';
import ApplicationForm from '../components/ApplicationForm';
import SocialProofGrid from '../components/SocialProofGrid';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-charcoal-black min-h-screen text-pure-white">
      <HeroSection />
      <RolesGrid />
      <ApplyNowSection /> {/* <-- ADD IT HERE */}
      <WhyJoinSection />
      <ApplicationForm />
      <SocialProofGrid />
      <Footer />
    </div>
  );
};

export default Home;