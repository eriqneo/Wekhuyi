/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calculator, Info, Scale, ShieldAlert, CheckCircle, RefreshCw } from 'lucide-react';
import { FeeItem } from '../types.ts';

export default function FeeCalculator() {
  const [selectedCategory, setSelectedCategory] = useState<'Oaths' | 'Consultancy' | 'All'>('All');
  
  // Quantities for interactive calculation items
  const [oathSignatures, setOathSignatures] = useState<number>(1);
  const [certifiedPages, setCertifiedPages] = useState<number>(2);
  const [consultationHours, setConsultationHours] = useState<number>(1);
  const [customContractPages, setCustomContractPages] = useState<number>(1);
  
  // Standard fees list representing common local legal rates under general tariffs
  const statutoryFees: FeeItem[] = [
    {
      id: 'oath_affidavit',
      category: 'Oaths',
      name: 'Witnessing of Affidavits / Declarations',
      description: 'Per document signature attestation under the Oaths Act.',
      estimatedCost: 'KES 1,500',
      note: 'Per signature. Exhibits signed separately if any (at KES 500 per exhibit).'
    },
    {
      id: 'cert_copies',
      category: 'Oaths',
      name: 'Certifying True Copies of Original',
      description: 'Verifying and stamping degree certificates, IDs, passports, title documents.',
      estimatedCost: 'KES 500',
      note: 'Per page certified. Full set minimum KES 1,000.'
    },
    {
      id: 'power_atty',
      category: 'Oaths',
      name: 'Witnessing Power of Attorney',
      description: 'Executing and attesting general or specific Power of Attorney deeds.',
      estimatedCost: 'KES 5,000',
      note: 'Drafting not included; attestation only.'
    },
    {
      id: 'consult_hour',
      category: 'Consultancy',
      name: 'Standard Legal Consultation',
      description: 'Comprehensive 1-on-1 strategic advisory with Mr. Wekhuyi regarding your case matters.',
      estimatedCost: 'KES 5,000',
      note: 'Hourly rate. Credited towards active cases if firm holds active engagement.'
    },
    {
      id: 'contract_draft',
      category: 'Consultancy',
      name: 'Basic Corporate Agreement Draft / Review',
      description: 'Joint ventures, partnership agreements, property leases, or employment standards reviews.',
      estimatedCost: 'KES 15,000',
      note: 'Standard scale. Complex multiphase agreements quoted on specific criteria.'
    },
    {
      id: 'company_inc',
      category: 'Consultancy',
      name: 'Company Incorporation Package',
      description: 'Comprehensive registration on BRS Kenya, KRA PIN generation, and articles of association.',
      estimatedCost: 'KES 20,000',
      note: 'Includes official BRS government processing fees under standard limits.'
    }
  ];

  // Dynamic interactive calculation of total estimation
  const totalOathsEstimate = (oathSignatures * 1500) + (certifiedPages * 500);
  const totalConsultancyEstimate = (consultationHours * 5000) + (customContractPages * 15000);
  const aggregateEstimate = totalOathsEstimate + totalConsultancyEstimate;

  const resetCalculator = () => {
    setOathSignatures(1);
    setCertifiedPages(2);
    setConsultationHours(1);
    setCustomContractPages(1);
  };

  const filteredFees = selectedCategory === 'All' 
    ? statutoryFees 
    : statutoryFees.filter(f => f.category === selectedCategory);

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gold/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent font-bold">
            Cost Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-primary font-bold tracking-tight mt-3 mb-4">
            Interactive Service Fee Estimator
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto my-4 rounded-none" />
          <p className="text-charcoal/70 font-sans font-light">
            We adhere heavily to the Law of Kenya regarding the Advocates Remuneration Order while prioritizing absolute cost sanity. Use our calculator below to get a transparent and honest upfront estimate.
          </p>
        </div>

        {/* Dynamic Interactive Splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Calculation Controls - Left */}
          <div className="lg:col-span-7 bg-white rounded-none border border-primary/10 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex justify-between items-center pb-4 border-b border-slate-200">
              <h3 className="font-serif text-xl font-bold text-primary flex items-center gap-2">
                <Calculator size={20} className="text-accent" />
                Select &amp; Estimate Matter Costs
              </h3>
              <button 
                onClick={resetCalculator}
                className="text-xs font-sans text-accent hover:text-accent/85 flex items-center gap-1 cursor-pointer transition-colors font-bold"
                title="Reset selections"
              >
                <RefreshCw size={13} />
                Reset
              </button>
            </div>

            {/* Slider 1: Affidavits */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-serif font-bold text-primary flex flex-col text-left">
                  <span>Witnessing Oaths / Affidavits</span>
                  <span className="text-[11px] text-charcoal/50 font-sans font-normal italic">KES 1,500 per document</span>
                </label>
                <span className="font-mono bg-[#F9F7F4] border border-[#1A2A4A]/10 px-3 py-1 rounded-none text-primary font-bold shadow-sm">{oathSignatures} Signatures</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="10" 
                value={oathSignatures} 
                onChange={(e) => setOathSignatures(parseInt(e.target.value) || 0)}
                className="w-full accent-accent cursor-pointer"
              />
            </div>

            {/* Slider 2: Certify Copies */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-serif font-bold text-primary flex flex-col text-left">
                  <span>Certified Copy Pages</span>
                  <span className="text-[11px] text-charcoal/50 font-sans font-normal italic">KES 500 per page certified</span>
                </label>
                <span className="font-mono bg-[#F9F7F4] border border-[#1A2A4A]/10 px-3 py-1 rounded-none text-primary font-bold shadow-sm">{certifiedPages} Pages</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="30" 
                value={certifiedPages} 
                onChange={(e) => setCertifiedPages(parseInt(e.target.value) || 0)}
                className="w-full accent-accent cursor-pointer"
              />
            </div>

            {/* Slider 3: Consultation hours */}
            <div className="space-y-2 pt-2 border-t border-slate-200/50">
              <div className="flex justify-between items-center text-sm">
                <label className="font-serif font-bold text-primary flex flex-col text-left">
                  <span>Consultation Time</span>
                  <span className="text-[11px] text-charcoal/50 font-sans font-normal italic">KES 5,000 per hour</span>
                </label>
                <span className="font-mono bg-[#F9F7F4] border border-[#1A2A4A]/10 px-3 py-1 rounded-none text-primary font-bold shadow-sm">{consultationHours} Hour(s)</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="8" 
                value={consultationHours} 
                onChange={(e) => setConsultationHours(parseInt(e.target.value) || 0)}
                className="w-full accent-accent cursor-pointer"
              />
            </div>

            {/* Slider 4: Custom Contract Drafting */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-serif font-bold text-primary flex flex-col text-left">
                  <span>Legal Document drafting</span>
                  <span className="text-[11px] text-charcoal/50 font-sans font-normal italic">KES 15,000 per base draft package</span>
                </label>
                <span className="font-mono bg-[#F9F7F4] border border-[#1A2A4A]/10 px-3 py-1 rounded-none text-primary font-bold shadow-sm">{customContractPages} Draft(s)</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="5" 
                value={customContractPages} 
                onChange={(e) => setCustomContractPages(parseInt(e.target.value) || 0)}
                className="w-full accent-accent cursor-pointer"
              />
            </div>

            {/* Disclaimer alerting message */}
            <div className="bg-[#C0392B]/5 rounded-none p-4 border border-[#C0392B]/15 flex gap-3 text-xs text-charcoal leading-relaxed font-sans font-light">
              <ShieldAlert size={18} className="text-[#C0392B] shrink-0 mt-0.5" />
              <div className="text-left">
                <strong className="font-bold text-[#C0392B] font-serif">Statutory Notice on Legal Fees:</strong> The fees generated above are estimates based on standard billing grids and the Kenyan Advocates Remuneration Order. Complex disputes, corporate sizes, multiple court registries, and contested litigation are charged on an customized scale. A written fee agreement will always be executed prior to commencing legal tasks.
              </div>
            </div>
          </div>

          {/* Interactive Calculation Result Card - Right */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Total Display Billing Box */}
            <div className="bg-[#1A2A4A] text-[#F9F7F4] rounded-none p-8 border border-gold/30 shadow-xl text-left relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-6 opacity-5 font-serif font-bold text-8xl pointer-events-none">
                KES
              </div>
              <div>
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-gold">
                  Composite Tentative Estimation
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-4xl sm:text-5xl font-mono font-bold text-white">
                    KES {aggregateEstimate.toLocaleString()}
                  </span>
                </div>
                <p className="text-[11px] text-white/55 font-sans mt-1">
                  Approx. USD ${(aggregateEstimate / 130).toFixed(0)} EAT Conversion Rate
                </p>
                <div className="w-12 h-[2px] bg-gold my-5" />
              </div>

              <div className="space-y-3.5 mb-6 text-xs text-white/90">
                <div className="flex justify-between items-center">
                  <span className="font-sans opacity-70">Oaths &amp; Declarations:</span>
                  <span className="font-mono font-semibold">KES {totalOathsEstimate.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans opacity-70">Advisory &amp; Drafting:</span>
                  <span className="font-mono font-semibold">KES {totalConsultancyEstimate.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pt-2.5 border-t border-white/10 font-bold text-white">
                  <span>Guaranteed Quote limit:</span>
                  <span className="text-gold">No Hidden Cost</span>
                </div>
              </div>

              {/* Direct Booking Link with computed services state info passed */}
              <a
                href="#appointment"
                className="bg-[#C0392B] hover:bg-[#C0392B]/95 text-white uppercase font-sans text-xs font-bold tracking-widest py-4 rounded-none text-center block transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/15 cursor-pointer border border-[#C0392B]/35"
              >
                Schedule Consultation with this estimate
              </a>
            </div>

            {/* Standard Tariffs breakdown lookup list */}
            <div className="bg-white rounded-none border border-primary/10 p-6 flex flex-col gap-4 text-left shadow-sm">
              <h4 className="font-serif text-sm font-bold text-primary flex items-center gap-1.5 pb-2.5 border-b border-slate-100">
                <Scale size={14} className="text-[#D4A853]" />
                Statutory Scale Reference
              </h4>
              <div className="text-xs space-y-3.5 max-h-52 overflow-y-auto pr-1">
                {statutoryFees.map((v, idx) => (
                  <div key={idx} className="flex flex-col gap-1 border-b border-dashed border-[#1A2A4A]/10 pb-2.5 bg-[#F9F7F4]/50 p-3 rounded-none text-left">
                    <div className="flex justify-between items-center font-bold text-primary">
                      <span className="font-serif">{v.name}</span>
                      <span className="text-[#C0392B] font-mono text-right">{v.estimatedCost}</span>
                    </div>
                    <p className="text-[#2C2C2C]/80 font-sans font-light leading-relaxed">{v.description}</p>
                    <p className="text-[10px] text-charcoal/50 italic">{v.note}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
