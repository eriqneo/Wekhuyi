/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, Calendar } from 'lucide-react';
import Logo from './Logo.tsx';

interface NavbarProps {
  onScrollToSection: (id: string) => void;
  activeSection: string;
}

export default function Navbar({ onScrollToSection, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [officeStatus, setOfficeStatus] = useState({
    isOpen: false,
    text: 'Checking hours...',
    colorClass: 'text-amber-500',
    indicatorClass: 'bg-amber-500',
  });

  // Calculate standard Kenya office hours dynamically in EAT (UTC+3)
  useEffect(() => {
    function calculateStatus() {
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      // Kenya is EAT (UTC+3)
      const kenyaTime = new Date(utcTime + (3 * 3600000));
      const day = kenyaTime.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
      const hour = kenyaTime.getHours();
      const mins = kenyaTime.getMinutes();
      const minutesOfDay = hour * 60 + mins;

      // Mon - Fri: 8:00am - 5:00pm (480 to 1020 mins)
      // Sat: 9:00am - 2:00pm (540 to 840 mins)
      // Sun: Closed

      if (day >= 1 && day <= 5) {
        if (minutesOfDay >= 480 && minutesOfDay < 1020) {
          setOfficeStatus({
            isOpen: true,
            text: 'Open Now • Mon-Fri 8:00 AM - 5:00 PM',
            colorClass: 'text-emerald-600 font-semibold',
            indicatorClass: 'bg-emerald-500 animate-pulse',
          });
        } else {
          setOfficeStatus({
            isOpen: false,
            text: 'Closed • Reopens tomorrow at 8:00 AM',
            colorClass: 'text-slate-400 font-medium',
            indicatorClass: 'bg-slate-400',
          });
        }
      } else if (day === 6) {
        if (minutesOfDay >= 540 && minutesOfDay < 840) {
          setOfficeStatus({
            isOpen: true,
            text: 'Open Now • Sat 9:00 AM - 2:00 PM',
            colorClass: 'text-emerald-600 font-semibold',
            indicatorClass: 'bg-emerald-500 animate-pulse',
          });
        } else {
          setOfficeStatus({
            isOpen: false,
            text: 'Closed • Reopens Monday at 8:00 AM',
            colorClass: 'text-slate-400 font-medium',
            indicatorClass: 'bg-slate-400',
          });
        }
      } else {
        setOfficeStatus({
          isOpen: false,
          text: 'Closed • Reopens Monday at 8:00 AM',
          colorClass: 'text-slate-400 font-medium',
          indicatorClass: 'bg-slate-400',
        });
      }
    }

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services & Practice Areas', id: 'services' },
    { label: 'Fee Estimator', id: 'calculator' },
    { label: 'Location', id: 'location' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onScrollToSection(id);
  };

  return (
    <header className="w-full relative z-50 shadow-sm" id="main-navigation-header">
      {/* 1. Top Infobar */}
      <div className="bg-primary text-bg-off border-b border-white/10 py-2.5 text-xs font-sans px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Working Details */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-white/85">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-gold" />
              Nairobi, Kenya
            </span>
            <span className="flex items-center gap-1.5 focus:outline-none">
              <Clock size={13} className="text-gold" strokeWidth={2} />
              <span className="opacity-90">Mon–Fri: 8am–5pm | Sat: 9am–2pm</span>
            </span>
            <a
              href="tel:+254798375427"
              className="flex items-center gap-1.5 hover:text-gold transition-colors duration-200 cursor-pointer"
            >
              <Phone size={13} className="text-gold" />
              +254 798 375 427
            </a>
          </div>

          {/* Dynamic Kenya Office Hours indicator */}
          <div className="flex items-center gap-2 bg-white/5 px-2.5 py-0.5 rounded-none border border-white/10 text-[11px]">
            <span className={`w-2 h-2 rounded-full ${officeStatus.indicatorClass}`} />
            <span className="text-white/90">{officeStatus.text}</span>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Toolbar */}
      <div className="bg-[#F9F7F4]/95 backdrop-blur-md sticky top-0 border-b border-gold/10 px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo element */}
          <button
            onClick={() => handleLinkClick('home')}
            className="text-left cursor-pointer focus:outline-none rounded-none p-1"
            aria-label="D.W. Wekhuyi & Associates Advocates Home"
          >
            <Logo />
          </button>

          {/* Large screens navigation item */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop Nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm tracking-wide font-medium cursor-pointer transition-colors duration-200 relative pb-1 focus:outline-none
                  ${activeSection === link.id 
                    ? 'text-primary font-bold' 
                    : 'text-charcoal/70 hover:text-primary'
                  }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C0392B] rounded-none" />
                )}
              </button>
            ))}

            {/* Book Client Consultation CTA */}
            <button
              onClick={() => handleLinkClick('appointment')}
              className="ml-2 bg-[#C0392B] hover:bg-[#C0392B]/95 text-white px-4 py-2 rounded-none font-sans font-bold text-xs tracking-widest uppercase border border-[#C0392B]/20 flex items-center gap-2 transition-all duration-300 cursor-pointer h-10"
            >
              <Calendar size={14} className="text-gold animate-bounce" />
              Book Consult
            </button>
          </nav>

          {/* Mobile responsive triggers */}
          <div className="flex items-center lg:hidden gap-3">
            <button
              onClick={() => handleLinkClick('appointment')}
              className="bg-[#1A2A4A] hover:bg-[#C0392B] p-2 rounded-none text-[#F9F7F4] border border-gold/25 transition-all duration-200 cursor-pointer"
              aria-label="Book appointment quick link"
            >
              <Calendar size={16} className="text-gold" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent p-1.5 hover:bg-primary/5 rounded-none transition-all duration-200 cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Responsive Menu Dropdown */}
      {isOpen && (
        <div id="mobile-navigation-drawer" className="lg:hidden absolute top-full left-0 right-0 bg-[#F9F7F4] border-b border-gold/25 shadow-xl transition-all duration-300 z-40 animate-fadeIn text-left">
          <nav className="flex flex-col px-4 pt-2 pb-6 gap-3" aria-label="Mobile Navigation Drawer">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left py-2.5 px-3 rounded-none text-sm font-medium tracking-wide transition-colors cursor-pointer
                  ${activeSection === link.id 
                    ? 'bg-[#1A2A4A]/5 text-[#1A2A4A] border-l-4 border-[#C0392B] font-bold' 
                    : 'text-charcoal/70 hover:bg-white hover:text-[#1A2A4A]'
                  }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('appointment')}
              className="mt-2 w-full bg-[#C0392B] hover:bg-[#C0392B]/90 text-white font-sans text-xs uppercase tracking-widest font-bold py-3 rounded-none shadow flex items-center justify-center gap-2 cursor-pointer h-12"
            >
              <Calendar size={15} />
              Schedule Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
