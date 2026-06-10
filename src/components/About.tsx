/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, CheckCircle2, Gavel } from 'lucide-react';
import Logo from './Logo.tsx';

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="text-gold" size={24} />,
      title: 'Highest Ethical Standards',
      desc: 'We operate with strict confidentiality, absolute transparency and an uncompromised commitment to legal integrity in Kenya.',
    },
    {
      icon: <Award className="text-gold" size={24} />,
      title: 'Proven Analytical Depth',
      desc: 'Every counsel we provide is backed by exhaustive statutory research, precedent analytics, and deep local jurisprudence.',
    },
    {
      icon: <Users className="text-gold" size={24} />,
      title: 'Reliable Client Partnerships',
      desc: 'We align close, personal attention with top-flight institutional advisory. Your legal stability is our absolute priority.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gold/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent font-bold">
            Establishment &amp; Ethos
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-primary font-bold tracking-tight mt-3 mb-4">
            Reliable Legal Consultants Who Champion Your Interests
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto my-4 rounded-none" />
          <p className="text-charcoal/70 font-sans font-light">
            D.W. Wekhuyi &amp; Associates Advocates is a premier boutique law firm based in Nairobi, Kenya. We provide high-caliber, practical solutions with the agility and personalized care of a modern trusted consultant.
          </p>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Column 1: Core History & Qualifications */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-primary">
              Advocates of the High Court of Kenya
            </h3>
            <p className="text-charcoal/85 font-sans font-light leading-relaxed">
              Serving corporate entities, growing businesses, and individuals, we understand that navigating the regulatory, civil, and criminal frameworks of Kenya requires more than just standard legal advice. It demands <strong>Reliable Legal Consultants</strong>.
            </p>
            <p className="text-charcoal/85 font-sans font-light leading-relaxed">
              We focus on active dispute prevention, optimal mediation, and robust representation in all courts—from the Magistrates Courts to the Court of Appeal. Our versatile expertise scales from local land dispute arbitrations to complex commercial licensing and commissioner assignments.
            </p>

            {/* List of direct commitments */}
            <ul className="space-y-3.5 pt-2">
              {[
                'Prompt responses and transparent milestone reporting.',
                'Clear, simple breakdowns of complex legal requirements.',
                'Cost-managed legal billing and predictable project metrics.',
                'Active compliance with the Advocates Act and LSK rules.',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm font-sans font-medium text-charcoal/90">
                  <CheckCircle2 size={17} className="text-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Elegant Profile card of D.W. Wekhuyi */}
          <div className="lg:col-span-6">
            <div className="bg-[#1A2A4A] border border-gold/30 rounded-none p-8 relative overflow-hidden text-white shadow-xl" id="managing-partner-card">
              {/* Subtle background graphics */}
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none text-gold">
                <Gavel size={150} />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10">
                {/* Photo Placeholder/Avatar Box */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-none bg-primary-light flex flex-col items-center justify-center text-gold border border-gold/30 shrink-0 relative shadow-inner">
                  <Logo size={42} showText={false} logoColorClass="text-gold" />
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#D4A853] absolute bottom-2 font-bold">DWW</span>
                </div>

                <div className="flex-1 space-y-2 text-left">
                  <span className="font-sans text-xs uppercase font-bold tracking-widest text-[#C0392B]">Managing Partner</span>
                  <h4 className="text-xl font-serif text-white font-bold leading-tight">Mr. D.W. Wekhuyi, Advocate</h4>
                  <p className="text-xs font-mono text-[#D4A853] font-bold">
                    Advocate of the High Court of Kenya • Commissioner for Oaths
                  </p>
                  <p className="text-white/80 text-xs font-sans leading-relaxed font-light mt-2 pt-2 border-t border-gold/15">
                    "With years of practice based in Nairobi, I founded this practice on a simple, enduring standard: that every client deserves direct access to precise, honest, and reliable advocacy. We believe in clear strategies that prevent disputes before they occur, yet stand ready to defend your rights vigorously."
                  </p>
                </div>
              </div>

              {/* Badges / Memberships */}
              <div className="mt-6 pt-4 border-t border-gold/15 flex flex-wrap gap-2.5 justify-start sm:justify-end text-[10px] font-sans font-bold uppercase tracking-wider relative z-10">
                <span className="bg-white/5 text-white/95 px-3 py-1.5 rounded-none border border-white/10">
                  Law Society of Kenya (LSK)
                </span>
                <span className="bg-white/5 text-white/95 px-3 py-1.5 rounded-none border border-white/10">
                  Commissioner for Oaths
                </span>
                <span className="bg-white/5 text-[#D4A853] px-3 py-1.5 rounded-none border border-[#D4A853]/25">
                  Admitted advocate
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Value Prop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, idx) => (
            <div key={idx} className="bg-white p-8 rounded-none border border-primary/10 hover:border-gold/50 shadow-sm hover:translate-y-[-2px] hover:shadow-md transition-all duration-350 text-left">
              <div className="mb-4 bg-primary/5 w-12 h-12 rounded-none flex items-center justify-center border border-gold/25">
                {v.icon}
              </div>
              <h4 className="font-serif text-lg font-bold text-primary mb-2">{v.title}</h4>
              <p className="text-charcoal/70 text-sm font-sans font-light leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
