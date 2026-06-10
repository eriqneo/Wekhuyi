/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Scale, ChevronRight, Award, ShieldAlert } from 'lucide-react';
import Logo from './Logo.tsx';

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    onScrollToSection(id);
  };

  return (
    <footer className="bg-[#1A2A4A] text-bg-off border-t-2 border-gold/40" id="main-landing-footer">
      
      {/* 1. Main Footer Columns Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        
        {/* Column 1: Brand & Logo Statement */}
        <div className="md:col-span-4 space-y-5">
          <div className="bg-white/5 p-3 rounded-none border border-white/10 inline-block">
            <Logo textColorClass="text-white" logoColorClass="text-gold" showText={true} size={44} />
          </div>
          <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
            D.W. Wekhuyi &amp; Associates Advocates are premium <strong>Reliable Legal Consultants</strong> based in Nairobi, Kenya. Committed to absolute integrity, prompt legal execution, and sound courtroom defense.
          </p>
          <div className="flex gap-3 text-xs text-[#D4A853] font-sans font-semibold">
            <span className="flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-none">
              <Award size={13} />
              LSK Member
            </span>
            <span className="flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-none">
              <Scale size={13} />
              Estd. Nairobi
            </span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-serif text-sm font-bold text-white tracking-wider border-b border-white/15 pb-2 uppercase">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs font-sans text-white/80">
            {[
              { label: 'Home Chambers', id: 'home' },
              { label: 'Core Credentials', id: 'about' },
              { label: 'Practice Areas', id: 'services' },
              { label: 'Fee Estimator', id: 'calculator' },
              { label: 'Location Map', id: 'location' },
              { label: 'Book Consult', id: 'appointment' },
            ].map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className="flex items-center gap-1 hover:text-gold transition-colors text-left cursor-pointer focus:outline-none"
                >
                  <ChevronRight size={10} className="text-[#D4A853]" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Practice Areas Brief */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-serif text-sm font-bold text-white tracking-wider border-b border-white/15 pb-2 uppercase">
            Legal Focus
          </h4>
          <ul className="space-y-2 text-xs font-sans text-white/70">
            {[
              'Civil &amp; Commercial Disputes',
              'Employment &amp; Labor Relations',
              'Property Conveyancing &amp; Due Diligence',
              'Commissioner for Oaths Certifications',
              'Affidavits &amp; Statutory Declarations',
              'Corporate Formation &amp; Auditing',
            ].map((srv, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-none bg-gold/50" />
                <span dangerouslySetInnerHTML={{ __html: srv }} />
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Particulars */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-serif text-sm font-bold text-white tracking-wider border-b border-white/15 pb-2 uppercase">
            Nairobi Chambers
          </h4>
          <ul className="space-y-3.5 text-xs font-sans text-white/85">
            <li className="flex gap-2.5 items-start">
              <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
              <span>Amani Plaza, 4th Floor, Suite 412, Along Kenyatta Avenue, Nairobi, Kenya</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone size={16} className="text-gold shrink-0" />
              <a href="tel:+254798375427" className="hover:text-gold font-mono transition-colors">
                +254 798 375 427
              </a>
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail size={16} className="text-gold shrink-0" />
              <span className="hover:text-gold cursor-pointer select-all font-mono">
                registry@wekhuyiadvocates.co.ke
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* 2. Legal Disclaimer Statement & Remuneration Notice */}
      <div className="border-t border-white/10 bg-black/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-4 text-left justify-between">
          <div className="flex gap-3 text-white/50 text-[10px] leading-relaxed max-w-4xl font-sans font-light">
            <ShieldAlert size={28} className="text-gold shrink-0 mt-0.5 opacity-65" />
            <div>
              <strong className="font-bold text-white/70 font-serif">Official Legal Disclaimer:</strong> The legal information, cost estimators, and checklist content rendered on this web portal are provided for general educational guidance, transparency, and reference purposes only under Kenyan civil guidelines. This does not represent official legal representation, formal advice, or constitute an active Advocate-Client contract. No client relationship or bind is created under the Kenyan Advocates Act until a physical retainer letter is officially executed with D.W. Wekhuyi &amp; Associates Advocates.
            </div>
          </div>
          
          <div className="text-[10px] font-sans font-bold text-white/50 border border-white/10 rounded-none px-2 py-1 select-none">
            EAT ZONE UTC+3
          </div>
        </div>
      </div>

      {/* 3. Credits & Rights Row */}
      <div className="border-t border-white/5 py-6 text-center text-[10.5px] font-sans text-white/45 tracking-wide px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {currentYear} D.W. Wekhuyi &amp; Associates Advocates. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Reliable Legal Consultants</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Approved LSK Chambers</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
