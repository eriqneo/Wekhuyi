/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Scale, FileText, ArrowRight } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="relative overflow-hidden py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg-off to-white border-b border-gold/10">
      {/* Decorative architectural grid overlay for classic institutional feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e1da_1px,transparent_1px),linear-gradient(to_bottom,#e5e1da_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

      {/* Decorative Gold and Deep Blue Orbs far in background */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Impact Copy & Call to Actions */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          id="hero-copy-container"
        >
          <motion.div 
            variants={itemVariants}
            className="w-12 h-1 bg-gold mb-6 rounded-none animate-fadeIn"
          />

          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/5 border border-gold/25 rounded-none text-[11px] font-semibold uppercase tracking-widest text-[#1A2A4A]"
          >
            <Scale size={14} className="text-gold" />
            Nairobi &amp; Surrounds Legal Advisory
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1A2A4A] tracking-tight leading-[1.1] mb-6 font-bold"
          >
            Reliable Legal <br />
            Consultants in <br />
            <span className="text-[#C0392B] italic font-normal">the heart of Nairobi.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-charcoal/80 text-base sm:text-lg font-sans font-light leading-relaxed mb-8 max-w-2xl"
          >
            We offer sophisticated, strategic and robust legal representation for corporate and individual clients. Guided by absolute professional integrity, D.W. Wekhuyi &amp; Associates are your trusted partners in Litigation, Advocacy, Legal consultancy, and Commissioning Oaths.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
          >
            {/* Primary Action Button */}
            <button
              onClick={() => onScrollToSection('appointment')}
              className="bg-[#C0392B] hover:bg-[#C0392B]/90 text-white px-8 py-4 rounded-none font-sans font-bold uppercase text-xs tracking-widest border border-gold/15 shadow-lg shadow-[#C0392B]/10 hover:shadow-[#C0392B]/20 hover:border-gold hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
            >
              Book Consultation
              <ArrowRight size={14} className="text-gold" />
            </button>

            {/* Secondary Action Link */}
            <button
              onClick={() => onScrollToSection('services')}
              className="bg-transparent hover:bg-primary/5 text-[#1A2A4A] border border-[#1A2A4A] px-8 py-4 rounded-none font-sans font-bold uppercase text-xs tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Our Services
            </button>
          </motion.div>

          {/* Quick Stats Grid / Trusted Indicators */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-slate-200/80 pt-8 w-full max-w-lg"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-primary">100%</p>
              <p className="text-[11px] font-sans text-charcoal/60 uppercase font-semibold tracking-wider mt-1">Client Confidentiality</p>
            </div>
            <div className="border-l border-slate-200 pl-6 sm:pl-10">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-primary">Reliable</p>
              <p className="text-[11px] font-sans text-charcoal/60 uppercase font-semibold tracking-wider mt-1">Legal Guidance</p>
            </div>
            <div className="border-l border-slate-200 pl-6 sm:pl-10">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-primary">Nairobi</p>
              <p className="text-[11px] font-sans text-charcoal/60 uppercase font-semibold tracking-wider mt-1">Based Operations</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: High End Classical-Modern Graphic */}
        <motion.div 
          className="lg:col-span-12 xl:col-span-5 h-full flex items-center justify-center relative mt-6 lg:mt-0"
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Framed Graphic Border representing precision & prestige */}
          <div className="relative w-full max-w-md aspect-[4/5] bg-[#1A2A4A] rounded-tr-[120px] rounded-bl-[120px] overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col justify-between border-2 border-gold/40 z-10">
            {/* Top architectural frame details */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold/30 via-gold to-gold/30" />
            
            {/* Behind Graphics Overlay / Grid from Sleek Interface theme */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#D4A853 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white/5 font-serif text-[120px] select-none uppercase font-bold tracking-widest">LAW</div>
            
            <div className="relative z-10 flex justify-between items-start">
              <span className="font-mono text-gold/45 text-[10px] tracking-[0.25em] uppercase">Estd. Nairobi</span>
              <Scale size={28} className="text-gold/80" />
            </div>

            {/* Central Elegant Graphic: Pillar + scales with a beautiful abstract styling */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
              <svg viewBox="0 0 100 120" className="w-40 h-40 text-gold drop-shadow-[0_10px_15px_rgba(212,168,83,0.15)]" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Stylized Balance Stand */}
                <path d="M 50 15 L 50 105" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M 50 15 H 46 L 50 9 L 54 15 H 50" fill="currentColor" />
                
                {/* Horizontal Beam */}
                <path d="M 15 32 Q 50 25 85 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                
                {/* Left Pan elements */}
                <line x1="15" y1="32" x2="6" y2="60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
                <line x1="15" y1="32" x2="24" y2="60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
                <path d="M 2 60 C 2 70 28 70 28 60 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
                
                {/* Right Pan elements */}
                <line x1="85" y1="32" x2="76" y2="60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
                <line x1="85" y1="32" x2="94" y2="60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7" />
                <path d="M 72 60 C 72 70 98 70 98 60 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
                
                {/* Column Base platform */}
                <path d="M 30 105 H 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <path d="M 25 111 H 75" stroke="currentColor" strokeWidth="2.5" />
              </svg>

              <h3 className="font-serif text-white text-lg tracking-wide mt-2 italic font-medium leading-relaxed max-w-xs">
                "Trust • Integrity • Result"
              </h3>
            </div>

            {/* Bottom details block */}
            <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-4 mt-2">
              <div className="flex flex-col text-left">
                <span className="font-serif text-white font-semibold text-sm">D.W. Wekhuyi</span>
                <span className="font-sans text-[10px] text-slate-300 tracking-wider">Managing Advocate</span>
              </div>
              <span className="text-[10px] font-mono text-gold/70 border border-gold/30 px-2 py-0.5 rounded-none font-bold uppercase">
                Approved
              </span>
            </div>
            
            {/* Subtle glow edge */}
            <div className="absolute inset-0 border border-white/5 rounded-tr-[120px] rounded-bl-[120px] pointer-events-none" />
          </div>

          {/* Elegant Est Badge Accent Element right on the side */}
          <div className="absolute -right-4 top-1/4 w-20 h-20 border-2 border-gold rounded-full flex flex-col items-center justify-center bg-[#F9F7F4] shadow-lg z-20">
            <span className="text-[10px] text-center font-bold text-[#1A2A4A] uppercase tracking-tighter leading-none mt-0.5">Est.<br/>2024</span>
          </div>
        </motion.div>

      </div>

      {/* Primary Services Mini Highlights Layer */}
      <div className="max-w-7xl mx-auto mt-16 relative z-20 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
        
        {/* Advocacy Card */}
        <div 
          onClick={() => onScrollToSection('services')}
          className="group bg-white p-8 rounded-none border border-primary/10 hover:border-gold/50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex gap-4 text-left"
        >
          <div className="p-3 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-gold transition-all duration-300 h-fit rounded-none">
            <Scale size={22} />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-lg font-bold text-primary mb-1.5 group-hover:text-accent transition-colors">Advocacy &amp; Representation</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed font-sans font-light">
                Professional representation in high-stakes litigation and dispute resolution across all Kenyan courts.
              </p>
            </div>
            <span className="text-[10px] font-bold uppercase text-primary tracking-widest flex items-center gap-2 mt-4 group-hover:text-[#C0392B] transition-colors">
              Learn More <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </span>
          </div>
        </div>

        {/* Legal Consultancy Card */}
        <div 
          onClick={() => onScrollToSection('services')}
          className="group bg-[#1A2A4A]/5 p-8 rounded-none border border-primary/10 hover:border-gold/50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex gap-4 text-left"
        >
          <div className="p-3 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-gold transition-all duration-300 h-fit rounded-none">
            <ShieldCheck size={22} />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-lg font-bold text-primary mb-1.5 group-hover:text-accent transition-colors">Legal Consultancy</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed font-sans font-light">
                Strategic legal advice for corporate structuring, commercial transactions, and regulatory compliance.
              </p>
            </div>
            <span className="text-[10px] font-bold uppercase text-primary tracking-widest flex items-center gap-2 mt-4 group-hover:text-[#C0392B] transition-colors">
              Learn More <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </span>
          </div>
        </div>

        {/* Commissioners for Oaths Card */}
        <div 
          onClick={() => onScrollToSection('services')}
          className="group bg-white p-8 rounded-none border border-primary/10 hover:border-gold/50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex gap-4 text-left"
        >
          <div className="p-3 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-gold transition-all duration-300 h-fit rounded-none">
            <FileText size={22} />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-lg font-bold text-primary mb-1.5 group-hover:text-accent transition-colors">Oaths &amp; Notary</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed font-sans font-light">
                Qualified Commissioners for Oaths providing authentication and swearing services for all legal documents.
              </p>
            </div>
            <span className="text-[10px] font-bold uppercase text-primary tracking-widest flex items-center gap-2 mt-4 group-hover:text-[#C0392B] transition-colors">
              Learn More <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
