/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Landmark, Clock, Share2, Compass, AlertCircle, Eye } from 'lucide-react';

export default function LocationMap() {
  const [mapType, setMapType] = useState<'blueprint' | 'transit' | 'satellite'>('blueprint');
  const [showDirections, setShowDirections] = useState(false);

  // Address and contacts details
  const addressDetails = {
    building: 'Amani Plaza, 4th Floor, Suite 412',
    street: 'Along Kenyatta Avenue',
    city: 'Nairobi, Kenya',
    landmark: 'Directly adjacent to the Nairobi Supreme Court grounds, opposite the City Hall registry.',
    phone: '+254 798 375 427',
  };

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gold/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14" id="location-header-split">
          <div className="lg:col-span-7 text-left space-y-3">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent font-bold">
              Nairobi Offices
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary font-bold tracking-tight">
              Our Central Chambers Location
            </h2>
            <div className="w-16 h-1 bg-gold rounded mt-2 mb-4" />
            <p className="text-charcoal/70 font-sans font-light leading-relaxed max-w-2xl">
              Situated in the heart of the Nairobi administrative law district, our chambers offer comfortable, private meeting suites, fully accessible transit parking, and immediate proximity to the High Court and Supreme Court of Kenya.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-start sm:justify-end gap-3 font-sans">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'D.W. Wekhuyi & Associates Advocates',
                    text: 'Reliable Legal Consultants in Nairobi, Kenya',
                    url: window.location.href,
                  });
                } else {
                  alert('Address Details: Amani Plaza, Kenyatta Avenue, Nairobi (+254 798 375 427)');
                }
              }}
              className="bg-bg-off hover:bg-slate-100 text-primary border border-slate-250 px-4 py-2.5 rounded font-sans font-medium text-xs tracking-wide transition-all cursor-pointer flex items-center gap-2"
            >
              <Share2 size={13} />
              Share Location
            </button>
            <button
              onClick={() => setShowDirections(!showDirections)}
              className="bg-accent hover:bg-accent/95 text-white px-4 py-2.5 rounded font-sans font-medium text-xs tracking-wide transition-all cursor-pointer flex items-center gap-2"
            >
              <Compass size={13} />
              {showDirections ? 'Hide Directions' : 'Transit Guide'}
            </button>
          </div>
        </div>

        {/* Location Split Layout: Address left, Stylized Vector Map right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Panel - Left */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between bg-bg-off/70 rounded-xl border border-gold/15 p-6 sm:p-8 text-left">
            
            {/* Top address particulars */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-primary flex items-center gap-2 border-b border-gold/10 pb-3">
                <Landmark size={20} className="text-accent" />
                Physical Address
              </h3>

              {/* Physical Location Details */}
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded h-fit shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="space-y-1">
                  <p className="font-serif font-bold text-primary text-sm">{addressDetails.building}</p>
                  <p className="font-sans text-xs text-charcoal/80">{addressDetails.street}</p>
                  <p className="font-sans text-xs text-charcoal/60">{addressDetails.city}</p>
                </div>
              </div>

              {/* Landmark Details */}
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded h-fit shrink-0">
                  <Landmark size={18} />
                </div>
                <div className="space-y-1">
                  <p className="font-serif font-bold text-primary text-sm">Key Landmark</p>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light">
                    {addressDetails.landmark}
                  </p>
                </div>
              </div>

              {/* Contact numbers */}
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded h-fit shrink-0">
                  <Phone size={18} />
                </div>
                <div className="space-y-1">
                  <p className="font-serif font-bold text-primary text-sm">Direct Desk Registry</p>
                  <a href="tel:+254798375427" className="font-mono text-xs font-bold text-accent hover:underline block">
                    {addressDetails.phone}
                  </a>
                  <p className="text-[10px] text-charcoal/40 font-sans">Pre-booking recommended for weekend tasks</p>
                </div>
              </div>
            </div>

            {/* Transit instruction or guidelines drawer */}
            {showDirections && (
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 text-xs text-amber-950 font-sans leading-relaxed animate-slideDown mt-4">
                <div className="flex gap-2 font-bold font-serif text-amber-950 mb-1.5 items-center">
                  <AlertCircle size={14} className="text-amber-700" />
                  Security Desk Instructions:
                </div>
                <p className="font-light">
                  Amani Plaza has designated parking validation for registered clients. Please declare your Booking Reference Code (e.g. DWW-XXXX) at the ground-level lobby reception desks for fast-tracked security elevators directly to the 4th floor legal chambers.
                </p>
              </div>
            )}

            {/* Bottom Hours indicator */}
            <div className="pt-4 border-t border-gold/15 flex items-center gap-2 text-xs text-charcoal/60 font-sans">
              <Clock size={14} className="text-gold" />
              <span>Saturday consultation open till 2:00 PM</span>
            </div>

          </div>

          {/* Elegant Stylized Mock Map Panel - Right */}
          <div className="lg:col-span-8 bg-slate-100 rounded-xl relative overflow-hidden shadow-inner border border-slate-200 flex flex-col justify-between aspect-video lg:aspect-auto">
            
            {/* Top Map Type Toggles layer */}
            <div className="absolute top-4 left-4 z-20 flex gap-2 bg-white/95 backdrop-blur-sm p-1 rounded-lg border border-slate-205/60 shadow-md">
              {(['blueprint', 'transit', 'satellite'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setMapType(type)}
                  className={`px-3 py-1.5 rounded text-[10px] font-sans font-bold uppercase tracking-wider transition-all cursor-pointer
                    ${mapType === type
                      ? 'bg-primary text-bg-off font-extrabold shadow-sm'
                      : 'text-charcoal/60 hover:text-primary hover:bg-slate-50'
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Compass overlay indicator */}
            <div className="absolute bottom-4 right-4 z-20 bg-white/90 p-2 rounded-full border shadow-md lg:block hidden">
              <Compass size={18} className="text-primary animate-spin" style={{ animationDuration: '24s' }} />
            </div>

            {/* Real SVG interactive Map graphic showing Central Nairobi blueprint */}
            <div className="w-full h-full relative" id="vector-map-frame">
              <svg viewBox="0 0 800 450" className="w-full h-full" id="vector-city-map-graphic">
                
                {/* 1. Map Canvas Background */}
                <rect 
                  width="800" 
                  height="450" 
                  fill={mapType === 'satellite' ? '#1A232A' : mapType === 'transit' ? '#FDFDFB' : '#FAF6F0'} 
                />

                {/* 2. Grid lines - representing central Nairobi streets */}
                <g stroke={mapType === 'satellite' ? '#2A353F' : '#E6E1DA'} strokeWidth="1" strokeDasharray={mapType === 'blueprint' ? '4 4' : 'none'}>
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="450" />
                  ))}
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={`h-${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} />
                  ))}
                </g>

                {/* 3. Nairobi Public Parks (Ushuru / Uhuru Park) represented visually */}
                <rect 
                  x="20" 
                  y="40" 
                  width="180" 
                  height="360" 
                  rx="10" 
                  fill={mapType === 'satellite' ? '#1c2e26' : '#E1ECD8'} 
                  stroke={mapType === 'satellite' ? '#274b34' : '#C7DEC2'} 
                  strokeWidth="2" 
                />
                <text 
                  x="110" 
                  y="220" 
                  fontFamily="Playfair Display" 
                  fontSize="12" 
                  fontWeight="bold" 
                  fill={mapType === 'satellite' ? '#4d705c' : '#7FA276'} 
                  textAnchor="middle" 
                  letterSpacing="1"
                >
                  UHURU PARK GROUNDS
                </text>

                {/* 4. Nairobi Main Streets / Avenues */}
                {/* Kenyatta Avenue */}
                <path 
                  d="M 0 160 H 800" 
                  stroke={mapType === 'satellite' ? '#3B4856' : mapType === 'transit' ? '#FADCB5' : '#D4CBBF'} 
                  strokeWidth="24" 
                  strokeLinecap="round" 
                />
                <text 
                  x="300" 
                  y="164" 
                  fontFamily="Inter" 
                  fontSize="10" 
                  fontWeight="bold" 
                  fill={mapType === 'satellite' ? '#99AAB8' : '#7C6E5A'} 
                  letterSpacing="3"
                >
                  KENYATTA AVENUE
                </text>

                {/* Moi Avenue */}
                <path 
                  d="M 520 0 V 450" 
                  stroke={mapType === 'satellite' ? '#3B4856' : mapType === 'transit' ? '#FADCB5' : '#D4CBBF'} 
                  strokeWidth="22" 
                  strokeLinecap="round" 
                />
                <text 
                  x="517" 
                  y="340" 
                  fontFamily="Inter" 
                  fontSize="10" 
                  fontWeight="bold" 
                  fill={mapType === 'satellite' ? '#99AAB8' : '#7C6E5A'} 
                  letterSpacing="3"
                  transform="rotate(-90 517 340)"
                >
                  MOI AVENUE
                </text>

                {/* University Way */}
                <path 
                  d="M 0 40 H 800" 
                  stroke={mapType === 'satellite' ? '#2E3844' : '#E8E2D7'} 
                  strokeWidth="12" 
                />

                {/* City Hall Way */}
                <path 
                  d="M 220 280 H 800" 
                  stroke={mapType === 'satellite' ? '#2E3844' : '#E8E2D7'} 
                  strokeWidth="14" 
                />

                {/* 5. Civic Buildings / Institutional Landmarks */}
                {/* Supreme Court block */}
                <rect 
                  x="340" 
                  y="220" 
                  width="130" 
                  height="45" 
                  rx="4" 
                  fill={mapType === 'satellite' ? '#222A30' : '#EDE8E0'} 
                  stroke="#CDAA6D" 
                  strokeWidth="1.5" 
                />
                <text x="405" y="247" fontFamily="Playfair Display" fontSize="9" fontWeight="bold" fill="#CDAA6D" textAnchor="middle">
                  NAIROBI SUPREME COURT
                </text>

                {/* High Court block */}
                <rect 
                  x="270" 
                  y="320" 
                  width="180" 
                  height="50" 
                  rx="4" 
                  fill={mapType === 'satellite' ? '#222A30' : '#EAE4D9'} 
                  stroke="#A89E8D" 
                  strokeWidth="1" 
                />
                <text x="360" y="350" fontFamily="Playfair Display" fontSize="9" fontWeight="medium" fill="#7C6F5C" textAnchor="middle">
                  Milimani Law Courts Area
                </text>

                {/* Parliament Buildings */}
                <rect 
                  x="560" 
                  y="230" 
                  width="110" 
                  height="60" 
                  rx="4" 
                  fill={mapType === 'satellite' ? '#1A2229' : '#EDE8D5'} 
                  stroke="#A2BAC2" 
                />
                <text x="615" y="265" fontFamily="Inter" fontSize="9" fontWeight="semibold" fill="#70878F" textAnchor="middle">
                  Parliament Buildings
                </text>

                {/* Amani Plaza - Firm Building Block */}
                {/* Our location is next to Kenyatta ave */}
                <rect 
                  x="320" 
                  y="80" 
                  width="140" 
                  height="55" 
                  rx="6" 
                  fill="#1A2A4A" 
                  stroke="#D4A853" 
                  strokeWidth="2.5" 
                  className="animate-pulse"
                />
                {/* Visual marker pin */}
                <circle cx="390" cy="110" r="14" fill="#C0392B" />
                <path d="M385 110 L395 110" stroke="white" strokeWidth="2"/>
                <path d="M390 105 L390 115" stroke="white" strokeWidth="2"/>

                {/* Firm Label on Map */}
                <text x="390" y="70" fontFamily="Playfair Display" fontSize="11" fontWeight="bold" fill="#1A2A4A" textAnchor="middle">
                  AMANI PLAZA
                </text>
                <text x="390" y="148" fontFamily="Inter" fontSize="9" fontWeight="bold" fill="#C0392B" textAnchor="middle" letterSpacing="0.5">
                  D.W. WEKHUYI &amp; ASSOCIATES (SUITE 412)
                </text>

              </svg>
            </div>
            
            {/* Map Info Bar */}
            <div className="bg-primary/95 text-bg-off px-4 py-3 text-[11px] font-sans flex items-center gap-2 border-t border-gold/20 justify-between">
              <span className="flex items-center gap-1">
                <Eye size={12} strokeWidth={2.5} className="text-gold" />
                <span>Map Type: <strong>{mapType.toUpperCase()}</strong></span>
              </span>
              <span className="text-white/60">GPS Ref: -1.286389, 36.817223 (Nairobi District)</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
