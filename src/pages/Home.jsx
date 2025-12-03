import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhoWeServe from '../components/WhoWeServe';
import WhatWeDeliver from '../components/WhatWeDeliver';
import ExecutionSystem from '../components/ExecutionSystem';
import TechStack from '../components/TechStack';
import WhyChooseUs from '../components/WhyChooseUs';
import Pricing from '../components/Pricing';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="dark-container">
      <Header />
      <HeroSection scrollY={scrollY} />
      <WhoWeServe />
      <WhatWeDeliver />
      <ExecutionSystem />
      <TechStack />
      <WhyChooseUs />
      <Pricing />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;