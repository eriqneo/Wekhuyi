/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Scale, Search, FileText, CheckCircle2, ChevronDown, CheckSquare, Info } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'advocacy' | 'consultancy' | 'oaths'>('advocacy');
  const [expandedDocIdx, setExpandedDocIdx] = useState<number | null>(null);

  const tabContent = {
    advocacy: {
      title: 'Advocacy & Court Representation',
      tagline: 'Fierce, ethical representation across all Kenyan courts and tribunals.',
      description: 'Our advocacy solutions are client-focused, rigorous, and result-oriented. We formulate customized strategies and secure defense lines for both complex regulatory standoffs and civil matters.',
      icon: <Scale size={24} className="text-gold" />,
      subservices: [
        {
          name: 'Civil & Commercial Litigation',
          desc: 'Breach of contract, recovery of commercial debts, partnership disputes, and general civil claims.',
        },
        {
          name: 'Employment & Labor Relations',
          desc: 'Representation before the ELRC, resolving wrongful dismissal disputes, and negotiating trade unions agreements.',
        },
        {
          name: 'Land & Property Disputes',
          desc: 'Court battles surrounding title boundaries, illegal acquisition, rent disputes, and eviction defenses.',
        },
        {
          name: 'Criminal Defense & Appeals',
          desc: 'Securing fair bonds and bail terms, robust representation in trials, and filing higher court appeals.',
        },
        {
          name: 'Family Law & Probate Cases',
          desc: 'Representing cases on divorce, child maintenance, guardianship, and succession/estate allocations.',
        },
      ],
      process: ['Case evaluation & intake', 'Pre-litigation research & mediation options', 'Drafting of court pleadings', 'Representation in hearings & trials'],
    },
    consultancy: {
      title: 'Legal Consultancy & Advisory',
      tagline: 'Preventative counsel and regulatory alignment for lasting security.',
      description: 'We believe robust contract drafting and routine legal reviews save business operators millions in litigation. Our consultancy keeps you fully compliant with modern Kenyan commercial laws.',
      icon: <Search size={24} className="text-gold" />,
      subservices: [
        {
          name: 'Contract Drafting & Negotiation',
          desc: 'Custom Service Level Agreements (SLAs), Non-Disclosures, leases, and joint venture documentation.',
        },
        {
          name: 'Corporate Formations & Regulatory Compliance',
          desc: 'Company registration (KRA PIN, NSSF, NHIF setups), licensing assistance, and legal auditing.',
        },
        {
          name: 'Property Transactions & Conveyancing',
          desc: 'Comprehensive title deed searches, transfer of ownership drafting, and professional escrow agreements.',
        },
        {
          name: 'Intellectual Property Protection',
          desc: 'Filing trademarks, copyrights, patents, and license agreements with KIPI.',
        },
        {
          name: 'Wills, Trusts & Probate Planning',
          desc: 'Drafting clear wills, establishing secure family trusts, and navigating corporate succession structures.',
        },
      ],
      process: ['Briefing & fact-finding', 'Statutory research & due diligence', 'Drafting of legal opinion / contract', 'Iterative review & execution'],
    },
    oaths: {
      title: 'Commissioners for Oaths',
      tagline: 'Instant documentation verification, statutory witness, and certifications.',
      description: 'Authorized under the Oaths and Statutory Declarations Act of Kenya, we administer oaths, verify affidavits, and witness legal certifications directly with maximum legal compliance.',
      icon: <FileText size={24} className="text-gold" />,
      subservices: [
        {
          name: 'Affidavit Verification',
          desc: 'Oaths administration and signatures for court pleadings, dynamic name change documents, and general claims.',
        },
        {
          name: 'Statutory Declarations',
          desc: 'Drafting or witnessing formal declarations for national registries, statutory boards, or visa applications.',
        },
        {
          name: 'Certified True Copies',
          desc: 'Certifying original academic degrees, passport books, state licenses, or entity titles for global verification.',
        },
        {
          name: 'Power of Attorney Filings',
          desc: 'Attestation of complete special or general Power of Attorney deeds to delegate secure representation.',
        },
        {
          name: 'Witnessing Agreements',
          desc: 'Witnessing critical civil contracts, lease agreements, transfer structures, and mutual consent deeds.',
        },
      ],
      process: ['Inspection of original client passports / National ID', 'Verify clarity of custom documents', 'Witnessing of client signature in real time', 'Affixing Commissioner Seal & Seal Register entries'],
    },
  };

  const current = tabContent[activeTab];

  // Useful guidance rules for Commissioner for Oaths
  const oathRules = [
    {
      title: 'Bring Valid original Identification documents',
      details: 'Must be an original National ID Card, a valid Passport, or an official Alien Identity card. Drivers licenses or custom company IDs are typically not acceptable for strict statutory declarations.'
    },
    {
      title: 'Do NOT sign physical documents beforehand',
      details: 'A Commissioner for Oaths MUST physically witness you sign the page. If the document already bears a signature, you will be requested to sign again next to it or re-print a fresh copy for official witnessing.'
    },
    {
      title: 'Fully printed copies in complete sets',
      details: 'If certifying copies, ensure the original document is present alongside the copies you want certified. Photocopies must be perfectly clear, unaltered, and legible.'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-off/40 border-b border-gold/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent font-bold">
            Scope of Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-primary font-bold tracking-tight mt-3 mb-4">
            Practice Expertise Tailored to Kenyan Frameworks
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded" />
          <p className="text-charcoal/70 font-sans font-light">
            Whether you require critical courtroom defense, long-term regulatory asset protection, or simple document certification, our structured legal expertise is at your disposal.
          </p>
        </div>

        {/* Practice Selection Navigation Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-10" id="services-tabs-container">
          <button
            onClick={() => setActiveTab('advocacy')}
            className={`py-4 px-6 rounded-none text-sm font-semibold tracking-wider uppercase font-sans border transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer
              ${activeTab === 'advocacy'
                ? 'bg-[#1A2A4A] text-[#F9F7F4] border-[#D4A853] shadow shadow-primary/25'
                : 'bg-white text-charcoal/70 border-slate-200 hover:border-primary/30 hover:text-primary'
              }`}
          >
            <Scale size={18} />
            Advocacy &amp; Litigation
          </button>
          <button
            onClick={() => setActiveTab('consultancy')}
            className={`py-4 px-6 rounded-none text-sm font-semibold tracking-wider uppercase font-sans border transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer
              ${activeTab === 'consultancy'
                ? 'bg-[#1A2A4A] text-[#F9F7F4] border-[#D4A853] shadow shadow-primary/25'
                : 'bg-white text-charcoal/70 border-slate-200 hover:border-primary/30 hover:text-primary'
              }`}
          >
            <Search size={18} />
            Legal Consultancy
          </button>
          <button
            onClick={() => setActiveTab('oaths')}
            className={`py-4 px-6 rounded-none text-sm font-semibold tracking-wider uppercase font-sans border transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer
              ${activeTab === 'oaths'
                ? 'bg-[#1A2A4A] text-[#F9F7F4] border-[#D4A853] shadow shadow-primary/25'
                : 'bg-white text-charcoal/70 border-slate-200 hover:border-primary/30 hover:text-primary'
              }`}
          >
            <FileText size={18} />
            Commissioners for Oaths
          </button>
        </div>

        {/* Interactive Deep-Dive View Block */}
        <div className="bg-white rounded-none border border-primary/10 shadow-sm p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info Left: Subservices lists */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/5 rounded-none text-primary">
                {current.icon}
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-serif font-bold text-primary">{current.title}</h3>
                <p className="text-xs font-sans tracking-wide text-accent font-medium mt-0.5">{current.tagline}</p>
              </div>
            </div>

            <p className="text-charcoal/80 text-sm font-sans font-light leading-relaxed text-left">
              {current.description}
            </p>

            <div className="border-t border-slate-100 pt-6">
              <h4 className="text-xs font-sans tracking-widest font-bold uppercase text-charcoal/65 mb-4 text-left">
                Core Focus Competencies
              </h4>
              
              {/* Detailed Subservices list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {current.subservices.map((sub, idx) => (
                  <div key={idx} className="p-4 rounded-none bg-[#F9F7F4]/50 border border-slate-200 hover:bg-white hover:border-gold/40 transition-all duration-200 text-left">
                    <h5 className="font-serif font-bold text-sm text-primary mb-1">{sub.name}</h5>
                    <p className="text-xs text-charcoal/70 font-sans font-light leading-relaxed">{sub.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Info Right: Process flow & guidelines */}
          <div className="lg:col-span-4 bg-[#1A2A4A] text-[#F9F7F4] rounded-none p-6 border border-gold/30 text-left shadow-lg">
            <h4 className="font-serif text-lg font-bold text-white mb-4 border-b border-white/15 pb-2">
              Our Adherence Process
            </h4>
            <div className="space-y-4">
              {current.process.map((step, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="font-mono text-xs w-5 h-5 flex items-center justify-center rounded-none bg-gold text-primary font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-white/95 font-sans leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            {/* Quick Consultation Trigger */}
            <div className="mt-8 pt-4 border-t border-white/10 text-center">
              <p className="text-[11px] text-white/70 italic font-sans mb-3 font-light">
                Have a matter touching on {current.title}?
              </p>
              <a
                href="#appointment"
                className="inline-block w-full bg-[#C0392B] hover:bg-[#C0392B]/90 text-white text-xs uppercase font-sans tracking-wider font-bold py-3 rounded-none transition-all shadow-md border border-[#C0392B]/35"
              >
                Book This Representative
              </a>
            </div>
          </div>

        </div>

        {/* Commissioner for Oaths: Specialized Client Onboarding block */}
        {activeTab === 'oaths' && (
          <div className="mt-10 bg-[#C0392B]/5 rounded-none border border-[#C0392B]/20 p-6 md:p-8 animate-fadeIn text-left" id="oaths-guidelines-accordion">
            <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center gap-2 text-[#C0392B]">
                  <Info size={18} />
                  <span className="font-sans text-xs uppercase font-bold tracking-widest">Crucial Client Advisory</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary">Commissioner for Oaths Client Checklist</h3>
                <p className="text-xs text-charcoal/85 font-sans leading-relaxed">
                  Under the Law of Kenya, commissioner protocols are strictly validated to prevent fraudulent representation. Before requesting document certification or affidavit witness, kindly confirm below:
                </p>
              </div>
              <div className="bg-[#C0392B] text-white px-3.5 py-1.5 text-[11px] font-mono tracking-widest rounded-none font-bold uppercase shrink-0">
                Statutory Guidelines
              </div>
            </div>

            {/* Client instructions list (accordion structure) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {oathRules.map((rule, idx) => {
                const isExpanded = expandedDocIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setExpandedDocIdx(isExpanded ? null : idx)}
                    className="bg-white p-4 rounded-none border border-[#1A2A4A]/10 hover:border-accent/40 shadow-sm cursor-pointer transition-all duration-300 text-left"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <CheckSquare size={15} className="text-accent" />
                        <h4 className="font-serif font-bold text-xs text-primary">{idx + 1}. {rule.title}</h4>
                      </div>
                      <ChevronDown size={14} className={`text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-accent' : ''}`} />
                    </div>
                    {isExpanded ? (
                      <p className="text-xs text-charcoal/70 font-sans leading-relaxed mt-2 pt-2 border-t border-slate-100 animate-slideDown">
                        {rule.details}
                      </p>
                    ) : (
                      <p className="text-xs text-charcoal/50 font-sans line-clamp-1 italic">
                        Click to read requirement details...
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
