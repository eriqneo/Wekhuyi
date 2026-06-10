/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import FeeCalculator from './components/FeeCalculator.tsx';
import AppointmentForm from './components/AppointmentForm.tsx';
import LocationMap from './components/LocationMap.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Track page scroll to dynamically update active navigation dots or highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // offset for sticky navigation header
      const sections = ['home', 'about', 'services', 'calculator', 'location', 'appointment'];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="font-sans antialiased text-charcoal bg-bg-off selection:bg-gold/30 selection:text-primary min-h-screen flex flex-col justify-between">
      
      {/* Dynamic Header & Sticky Navbar controls */}
      <Navbar onScrollToSection={handleScrollToSection} activeSection={activeSection} />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero Splendid Banner */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* 2. Core History, Commitments & Credentials */}
        <About />

        {/* 3. Service Accords (Advocacy, Consultancy, Commissioners for Oaths) */}
        <Services />

        {/* 4. Interactive Cost Estimator tariff tool */}
        <FeeCalculator />

        {/* 5. Custom case assessment briefing scheduling */}
        <AppointmentForm />

        {/* 6. Physical chambers locations Map reference */}
        <LocationMap />

      </main>

      {/* 7. Institutional Footer Column sets */}
      <Footer onScrollToSection={handleScrollToSection} />

    </div>
  );
}
