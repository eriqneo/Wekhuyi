/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  size?: number;
  textColorClass?: string;
  logoColorClass?: string;
  showText?: boolean;
}

export default function Logo({
  size = 48,
  textColorClass = 'text-primary',
  logoColorClass = 'text-gold',
  showText = true,
}: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      {/* High-quality vector SVG of Scales of Justice merged with Column */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${logoColorClass} transition-transform duration-300 hover:rotate-3`}
        id="logo-vector-graphic"
      >
        {/* Outer subtle glowing ring */}
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
        
        {/* The Classical Column (Pillar) */}
        {/* Pedestal & Steps */}
        <path d="M 32 82 L 68 82" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <rect x="36" y="75" width="28" height="5" rx="0.5" fill="currentColor" />
        <rect x="40" y="70" width="20" height="5" rx="0.5" fill="currentColor" />
        
        {/* Shaft */}
        <rect x="46" y="28" width="8" height="42" fill="currentColor" />
        {/* Fluting details */}
        <line x1="48" y1="30" x2="48" y2="68" stroke="var(--color-bg-off, #F9F7F4)" strokeWidth="1" />
        <line x1="50" y1="29" x2="50" y2="69" stroke="var(--color-bg-off, #F9F7F4)" strokeWidth="1" />
        <line x1="52" y1="30" x2="52" y2="68" stroke="var(--color-bg-off, #F9F7F4)" strokeWidth="1" />
        
        {/* Capital */}
        <path d="M 43 25 H 57 V 28 H 43 Z" fill="currentColor" />
        <path d="M 41 24 Q 45 20 46 25 Q 47 20 50 25 Q 53 20 54 25 Q 55 20 59 24" stroke="currentColor" strokeWidth="1" fill="none" />
        
        {/* The Scale Beam (Balanced) */}
        {/* Center pivot point */}
        <circle cx="50" cy="20" r="3" fill="currentColor" />
        <path d="M 50 17 L 50 20" stroke="currentColor" strokeWidth="1.5" />
        
        {/* Pivot structure */}
        <polygon points="47,20 53,20 50,28" fill="currentColor" />
        
        {/* Beam (slightly detailed) */}
        <path d="M 22 25 L 50 21 L 78 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="22" cy="25" r="1.5" fill="currentColor" />
        <circle cx="78" cy="25" r="1.5" fill="currentColor" />
        
        {/* Left Scale Pans & Chains */}
        <line x1="22" y1="25" x2="14" y2="48" stroke="currentColor" strokeWidth="1.2" />
        <line x1="22" y1="25" x2="30" y2="48" stroke="currentColor" strokeWidth="1.2" />
        {/* Left Pan */}
        <path d="M 12 48 C 12 56 32 56 32 48 H 12 Z" fill="currentColor" />
        
        {/* Right Scale Pans & Chains */}
        <line x1="78" y1="25" x2="70" y2="48" stroke="currentColor" strokeWidth="1.2" />
        <line x1="78" y1="25" x2="86" y2="48" stroke="currentColor" strokeWidth="1.2" />
        {/* Right Pan */}
        <path d="M 68 48 C 68 56 88 56 88 48 H 68 Z" fill="currentColor" />
      </svg>

      {showText && (
        <div id="company-name-container" className="flex flex-col">
          <span className={`font-serif leading-tight font-bold tracking-tight text-lg ${textColorClass}`}>
            D.W. Wekhuyi &amp; Associates
          </span>
          <span className="font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-accent">
            Advocates &amp; Legal Consultants
          </span>
        </div>
      )}
    </div>
  );
}
