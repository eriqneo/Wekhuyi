/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Mail, User, Briefcase, Clock, FileText, CheckCircle, Trash2, ShieldAlert } from 'lucide-react';
import { Appointment } from '../types.ts';

export default function AppointmentForm() {
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+254 ');
  const [serviceId, setServiceId] = useState('oaths');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00');
  const [briefDescription, setBriefDescription] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successBooking, setSuccessBooking] = useState<Appointment | null>(null);
  const [savedBookings, setSavedBookings] = useState<Appointment[]>([]);

  // Load existing client bookings from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('dww_advocates_bookings');
      if (stored) {
        setSavedBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading bookings', e);
    }
  }, []);

  // Set tentative default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayString = tomorrow.toISOString().split('T')[0];
    setDate(dayString);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !phone.trim() || !date) return;

    setIsSubmitting(true);

    // Simulate database record creation
    setTimeout(() => {
      const randNum = Math.floor(1000 + Math.random() * 9000);
      const refCode = `DWW-2026-${randNum}`;
      const newBooking: Appointment = {
        id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()),
        clientName,
        email,
        phone,
        serviceId,
        date,
        time,
        briefDescription,
        referenceId: refCode,
        createdAt: new Date().toISOString(),
      };

      const updatedBookings = [newBooking, ...savedBookings];
      setSavedBookings(updatedBookings);
      localStorage.setItem('dww_advocates_bookings', JSON.stringify(updatedBookings));

      setSuccessBooking(newBooking);
      setIsSubmitting(false);

      // Reset form controls
      setClientName('');
      setEmail('');
      setPhone('+254 ');
      setBriefDescription('');
    }, 1200);
  };

  const deleteBooking = (id: string) => {
    const updated = savedBookings.filter(b => b.id !== id);
    setSavedBookings(updated);
    localStorage.setItem('dww_advocates_bookings', JSON.stringify(updated));
  };

  const getServiceLabel = (srv: string) => {
    switch (srv) {
      case 'advocacy': return 'Advocacy & Court Representation';
      case 'consultancy': return 'Legal Consultancy';
      case 'oaths': return 'Commissioner for Oaths Certification';
      default: return 'Legal Advisory';
    }
  };

  return (
    <section id="appointment" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9F7F4]/50 border-b border-gold/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent font-bold">
            Secure Consultations
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-primary font-bold tracking-tight mt-3 mb-4">
            Request an Appointment &amp; Case Assessment
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto my-4 rounded-none" />
          <p className="text-charcoal/70 font-sans font-light">
            Ready to secure reliable counsel? Complete our digital case request form below. Our Nairobi registry clerk will execute a callback to confirm your date and assign specialized counsel.
          </p>
        </div>

        {/* Layout split: Form Left and Bookings Display Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="appointment-form-split">
          
          {/* Appointment Form Container - Left */}
          <div className="lg:col-span-7 bg-white rounded-none border border-primary/10 shadow-lg p-6 sm:p-10 relative">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6 text-left">
              Case Briefing Request Form
            </h3>

            {successBooking ? (
              /* Success States Receipt */
              <div className="space-y-6 text-left animate-fadeIn">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-none flex gap-3 text-emerald-950">
                  <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-serif font-bold text-base">Booking Request Logged Successfully</h4>
                    <p className="text-xs text-emerald-800 font-sans mt-1">
                      Your legal inquiry has been registered in the D.W. Wekhuyi &amp; Associates digital queue system.
                    </p>
                  </div>
                </div>

                <div className="bg-[#F9F7F4] border border-gold/30 rounded-none p-6 font-sans space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 bg-gold/10 text-[9px] font-mono uppercase text-[#D4A853] font-bold tracking-wider border-l border-b border-gold/20">
                    Pending Verification
                  </div>
                  <h5 className="font-serif font-bold text-primary pb-3 border-b border-gold/15">
                    Official Appointment Receipt
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-semibold text-charcoal/50 block">Reference ID:</span>
                      <strong className="font-mono font-bold text-sm text-[#C0392B] select-all">{successBooking.referenceId}</strong>
                    </div>
                    <div>
                      <span className="font-semibold text-charcoal/50 block">Matter Category:</span>
                      <strong className="font-bold text-primary">{getServiceLabel(successBooking.serviceId)}</strong>
                    </div>
                    <div>
                      <span className="font-semibold text-charcoal/50 block">Proposed Schedule:</span>
                      <strong className="font-medium text-primary">
                        {successBooking.date} at {successBooking.time} EAT
                      </strong>
                    </div>
                    <div>
                      <span className="font-semibold text-charcoal/50 block">Submitted Phone:</span>
                      <strong className="font-medium text-primary">{successBooking.phone}</strong>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#1A2A4A] text-white rounded-none text-xs leading-relaxed space-y-1.5 font-sans border border-gold/20 shadow-md">
                  <div className="flex gap-2 items-center text-gold font-bold font-serif mb-1">
                    <Clock size={14} />
                    Next Verification Procedures:
                  </div>
                  <p>1. Our regulatory registrar clerk in Nairobi will call your number <strong>{successBooking.phone}</strong> within 1–2 working hours.</p>
                  <p>2. A tentative legal invoice and counsel matching profile will be dispatched to your email <strong>{successBooking.email || '(None provided)'}</strong>.</p>
                  <p>3. If urgent advice is required, dial <strong>+254 798 375 427</strong> directly referencing Code <strong>{successBooking.referenceId}</strong>.</p>
                </div>

                <button
                  onClick={() => setSuccessBooking(null)}
                  className="w-full py-3.5 bg-white hover:bg-slate-50 text-primary font-sans font-bold text-xs tracking-widest rounded-none border border-primary/20 uppercase cursor-pointer transition-colors"
                >
                  Create another appointment brief
                </button>
              </div>
            ) : (
              /* Real Interactive Form HTML */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-xs font-sans tracking-wide font-bold text-charcoal/80 flex items-center gap-1.5">
                      <User size={13} className="text-[#D4A853]" />
                      Client Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Erick Juma Atura"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-none border border-[#1A2A4A]/25 focus:outline-none focus:border-gold focus:ring-0 bg-[#F9F7F4]/50 text-sm font-sans"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1">
                    <label className="text-xs font-sans tracking-wide font-bold text-charcoal/80 flex items-center gap-1.5">
                      <Phone size={13} className="text-[#D4A853]" />
                      Phone Number <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 7XX XXX XXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-none border border-[#1A2A4A]/25 focus:outline-none focus:border-gold focus:ring-0 bg-[#F9F7F4]/50 text-sm font-medium font-mono"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="text-xs font-sans tracking-wide font-bold text-charcoal/80 flex items-center gap-1.5">
                      <Mail size={13} className="text-[#D4A853]" />
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="client@mail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-none border border-[#1A2A4A]/25 focus:outline-none focus:border-gold focus:ring-0 bg-[#F9F7F4]/50 text-sm font-sans"
                    />
                  </div>

                  {/* Service ID Selection */}
                  <div className="space-y-1">
                    <label className="text-xs font-sans tracking-wide font-bold text-charcoal/80 flex items-center gap-1.5">
                      <Briefcase size={13} className="text-[#D4A853]" />
                      Service Focus <span className="text-accent">*</span>
                    </label>
                    <select
                      value={serviceId}
                      onChange={(e) => setServiceId(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-none border border-[#1A2A4A]/25 focus:outline-none focus:border-gold focus:ring-0 bg-white text-sm font-sans cursor-pointer h-[46px]"
                    >
                      <option value="oaths">Commissioners for Oaths (Affidavits/Oaths)</option>
                      <option value="consultancy">Legal Consultancy &amp; Corporate Advisory</option>
                      <option value="advocacy">Advocacy &amp; Litigations (Court Representation)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Date picker */}
                  <div className="space-y-1">
                    <label className="text-xs font-sans tracking-wide font-bold text-charcoal/80 flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#D4A853]" />
                      Proposed Date <span className="text-accent">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-none border border-[#1A2A4A]/25 focus:outline-none focus:border-gold focus:ring-0 bg-white text-sm font-sans cursor-pointer h-[46px]"
                    />
                  </div>

                  {/* Preferred Time selection */}
                  <div className="space-y-1">
                    <label className="text-xs font-sans tracking-wide font-bold text-charcoal/80 flex items-center gap-1.5">
                      <Clock size={13} className="text-[#D4A853]" />
                      Preferred Time Block <span className="text-accent">*</span>
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-none border border-[#1A2A4A]/25 focus:outline-none focus:border-gold focus:ring-0 bg-white text-sm font-sans cursor-pointer h-[46px]"
                    >
                      <option value="09:00">09:00 AM - 10:00 AM (Morning Consult)</option>
                      <option value="10:00">10:00 AM - 11:00 AM</option>
                      <option value="11:00">11:00 AM - 12:00 PM</option>
                      <option value="12:00">12:00 PM - 01:00 PM (Midday)</option>
                      <option value="14:00">02:00 PM - 03:00 PM (Afternoon)</option>
                      <option value="15:00">03:00 PM - 04:00 PM</option>
                      <option value="16:00">04:00 PM - 05:00 PM (Late Session)</option>
                    </select>
                  </div>
                </div>

                {/* Brief Matter Details */}
                <div className="space-y-1">
                  <label className="text-xs font-sans tracking-wide font-bold text-[#2C2C2C] flex items-center gap-1.5">
                    <FileText size={13} className="text-[#D4A853]" />
                    Brief Summary of Matter / Query
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide a summary of document certification details or court briefs so our advocates prepare appropriately..."
                    value={briefDescription}
                    onChange={(e) => setBriefDescription(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-none border border-[#1A2A4A]/25 focus:outline-none focus:border-gold focus:ring-0 bg-[#F9F7F4]/50 text-sm font-sans"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C0392B] hover:bg-[#C0392B]/95 text-white py-4 rounded-none font-sans font-bold text-xs tracking-widest uppercase border border-[#C0392B]/35 shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 h-12"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Logging Request Briefing...
                      </>
                    ) : (
                      <>
                        Schedule Legal Consult
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Interactive User booking tracker - Right */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Standard contact panel callback */}
            <div className="bg-[#1A2A4A] text-[#F9F7F4] rounded-none p-8 border border-gold/30 text-left shadow-lg">
              <h4 className="font-serif text-lg font-bold text-white mb-2">
                Need Instant Counsel?
              </h4>
              <p className="text-xs text-white/80 font-sans leading-relaxed mb-6 font-light">
                Do you have an urgent bail application, statutory deadline, or document that must be attested immediately today? Call our principal office registry directly.
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:+254798375427"
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 px-4 py-3 rounded-none border border-white/15 transition-all text-xs font-mono"
                >
                  <Phone size={16} className="text-[#D4A853] animate-pulse" />
                  <div className="flex-1">
                    <p className="text-white font-bold font-sans">+254 798 375 427</p>
                    <p className="text-white/50 text-[10px] font-sans">Erick (Registry Lead Dispatch)</p>
                  </div>
                </a>
                
                <div className="bg-white/5 p-4 rounded-none border border-white/10 text-[11px] leading-relaxed font-sans font-light text-white/70">
                  <span className="font-serif text-white font-bold block mb-1">Nairobi Office Location:</span>
                  Nairobi County Central District, Capital Center, Kenya
                </div>
              </div>
            </div>

            {/* Local Client Bookings Display Tracker - lists client's booking requests stored in localStorage */}
            <div className="bg-white rounded-none border border-primary/10 p-6 text-left shadow-sm">
              <div className="flex justify-between items-center pb-3 border-b border-slate-100 mb-4">
                <h4 className="font-serif text-sm font-bold text-primary flex items-center gap-2">
                  <CheckCircle size={15} className="text-accent" />
                  Your Active Case Briefings
                </h4>
                <span className="font-mono text-[10px] bg-primary/5 px-2 py-0.5 rounded-none text-[#1A2A4A] border border-primary/10 font-bold">
                  {savedBookings.length} Logged
                </span>
              </div>

              {savedBookings.length > 0 ? (
                <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-1">
                  {savedBookings.map((b) => (
                    <div key={b.id} className="p-3 bg-[#F9F7F4]/50 rounded-none border border-primary/10 relative group flex justify-between items-start gap-4 text-left hover:bg-white hover:border-gold/30 transition-colors">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] bg-primary/5 text-[#1A2A4A] border border-primary/15 font-bold px-1.5 py-0.5 rounded-none">
                            {b.referenceId}
                          </span>
                          <span className="text-[10px] text-charcoal/50 font-sans">
                            {b.date} • {b.time}
                          </span>
                        </div>
                        <h5 className="font-serif text-xs font-bold text-primary truncate">{b.clientName}</h5>
                        <p className="text-[10px] text-charcoal/60 truncate max-w-[200px]">
                          {getServiceLabel(b.serviceId)}
                        </p>
                      </div>

                      <button
                        onClick={() => deleteBooking(b.id)}
                        className="text-slate-400 hover:text-accent p-1 cursor-pointer rounded transition-colors duration-200 shrink-0"
                        title="Remove booking reference from this device"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  ))}
                  
                  <div className="bg-[#C0392B]/5 border border-[#C0392B]/10 p-2.5 rounded-none text-[10px] font-sans font-light text-[#2C2C2C]/85 leading-relaxed flex gap-2">
                    <ShieldAlert size={14} className="text-[#C0392B] shrink-0 mt-0.5" />
                    <span>Booking briefs are saved locally in your current browser cache so you can check reference IDs easily.</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 px-4 text-charcoal/50 font-sans text-xs font-light">
                  <Calendar size={28} className="mx-auto text-slate-300 mb-2" />
                  No Case Briefings requested yet from this browser session.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
