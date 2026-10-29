'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Toast from '@/components/Toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    website: '', // Honeypot field for spam bots
    _time: 0,
  });

  // Set form load timestamp on mount
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, _time: Date.now() }));
  }, []);
  const [submitting, setSubmitting] = useState(false);
  const [toastConfig, setToastConfig] = useState<{ message: string; type: 'success' | 'error'; isVisible: boolean }>({
    message: '',
    type: 'success',
    isVisible: false
  });

  const showToast = (message: string, type: 'success' | 'error') => {
    setToastConfig({ message, type, isVisible: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        showToast(data.message || 'Enquiry submitted successfully. We will be in touch soon!', 'success');
        setFormData({ name: '', company: '', email: '', phone: '', message: '', website: '', _time: Date.now() });
      } else {
        showToast(data.error || 'Failed to submit enquiry. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Contact submit error:', error);
      showToast('An unexpected error occurred. Please try again later.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full pb-20">
      <Toast 
        message={toastConfig.message}
        type={toastConfig.type}
        isVisible={toastConfig.isVisible}
        onClose={() => setToastConfig(prev => ({ ...prev, isVisible: false }))}
      />

      {/* Header */}
      <section className="text-center py-12 md:py-16 px-4 md:px-margin-page max-w-container-max mx-auto border-b border-border-subtle mb-12">
        <h1 className="font-display text-display mb-4">Get in Touch</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Whether you need a bulk quote, technical support, or have a general enquiry, our team is ready to assist you.
        </p>
      </section>

      <div className="px-4 md:px-margin-page max-w-container-max mx-auto">
        <div className="grid grid-cols-12 gap-gutter">
          
          {/* LEFT COLUMN */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            {/* Bulk Quote Banner */}
            <div className="bg-industrial-blue text-on-primary rounded-lg p-8 flex flex-col items-center justify-center text-center gap-6">
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-3xl">request_quote</span>
                  <h2 className="font-headline-lg text-center">Request a Bulk Quote</h2>
                </div>
                <p className="text-blue-100 max-w-lg mx-auto text-center">Looking for industrial-scale quantities? Get specialized pricing for large volume orders.</p>
              </div>
              <button 
                onClick={() => {
                  const formElement = document.getElementById('enquiry-form-section');
                  if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-industrial-blue px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors shrink-0 whitespace-nowrap mx-auto"
              >
                Start Quote Request
              </button>
            </div>

            {/* General Enquiry Form */}
            <div id="enquiry-form-section" className="bg-white border border-border-subtle rounded p-8">
              <h3 className="font-headline-lg mb-6 border-b border-border-subtle pb-4 text-center">General Enquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Anti-spam honeypot field - invisible to real humans */}
                <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input 
                    type="text" 
                    id="website" 
                    name="website" 
                    tabIndex={-1} 
                    autoComplete="off" 
                    value={formData.website} 
                    onChange={(e) => setFormData({...formData, website: e.target.value})} 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-label-md text-on-surface mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full border border-border-subtle rounded px-4 py-2 text-body-md focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block font-label-md text-on-surface mb-1">Company Name</label>
                    <input 
                      type="text" 
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full border border-border-subtle rounded px-4 py-2 text-body-md focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block font-label-md text-on-surface mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full border border-border-subtle rounded px-4 py-2 text-body-md focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-label-md text-on-surface mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full border border-border-subtle rounded px-4 py-2 text-body-md focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-label-md text-on-surface mb-1">Your Message *</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full border border-border-subtle rounded px-4 py-2 text-body-md focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none resize-y"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button 
                    type="submit"
                    disabled={submitting}
                    className="bg-primary text-on-primary px-8 py-3 rounded font-medium hover:bg-industrial-blue transition-colors disabled:opacity-70 flex items-center justify-center gap-2 mx-auto"
                  >
                    {submitting ? 'Sending...' : (
                      <>
                        Send Message
                        <span className="material-symbols-outlined text-sm">send</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            {/* HQ Card */}
            <div className="bg-surface-gray border border-border-subtle rounded p-8">
              <h3 className="font-headline-lg mb-6 pb-4 border-b border-border-subtle text-center">Headquarters</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-white border border-border-subtle flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-industrial-blue">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-label-md mb-1">Address</h4>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Gala+Industrial+Complex,+Dindayal+Upadhyay+Marg,+Mulund+West,+Mumbai,+Maharashtra+400080" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-body-md text-on-surface-variant hover:text-industrial-blue transition-colors group block"
                    >
                      313, Ind.Est, Gala Industrial Complex,<br />
                      Dindayal Upadhyay Marg,<br />
                      Siddharth Nagar, Mulund West,<br />
                      Mumbai, Maharashtra 400080
                      <span className="inline-flex items-center gap-1 text-xs text-industrial-blue font-medium mt-1 group-hover:underline">
                        <span>Get directions</span>
                        <span className="material-symbols-outlined text-xs">open_in_new</span>
                      </span>
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-white border border-border-subtle flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-industrial-blue">call</span>
                  </div>
                  <div>
                    <h4 className="font-label-md mb-1">Phone</h4>
                    <p className="text-body-md text-on-surface-variant">
                      <span className="text-body-sm font-medium">PO Confirmation:</span> <a href="tel:+919323667667" className="hover:text-industrial-blue">+91-9323667667</a><br />
                      <span className="text-body-sm font-medium">Dispatch / Invoice / Accounts:</span> <a href="tel:+919136003604" className="hover:text-industrial-blue">+91-9136003604</a><br />
                      <span className="text-body-sm font-medium">Payment Related:</span> <a href="tel:+919833658942" className="hover:text-industrial-blue">+91-9833658942</a><br />
                      <span className="text-body-sm text-on-surface-variant/70">Mon-Sat, 9am - 6pm IST</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-white border border-border-subtle flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-industrial-blue">mail</span>
                  </div>
                  <div>
                    <h4 className="font-label-md mb-1">Email</h4>
                    <p className="text-body-md text-on-surface-variant">
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=info@paraschemindia.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-industrial-blue transition-colors"
                      >
                        info@paraschemindia.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-white border border-border-subtle flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-industrial-blue">language</span>
                  </div>
                  <div>
                    <h4 className="font-label-md mb-1">Website</h4>
                    <p className="text-body-md text-on-surface-variant">
                      <a href="https://www.paraschemindia.com" target="_blank" rel="noopener noreferrer" className="hover:text-industrial-blue">www.paraschemindia.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-white border border-border-subtle flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-industrial-blue">badge</span>
                  </div>
                  <div>
                    <h4 className="font-label-md mb-1">Registration</h4>
                    <p className="text-body-md text-on-surface-variant">
                      GSTIN: 27ACVPK1617L1Z4<br />
                      UDYAM: UDYAM-MH-18-0084113
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white border border-border-subtle rounded-lg overflow-hidden shadow-sm">
              <div className="p-4 bg-surface-gray border-b border-border-subtle flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-industrial-blue text-sm">pin_drop</span>
                  <span className="font-label-md text-xs font-semibold uppercase tracking-wider text-on-surface">Mulund West Facility</span>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Gala+Industrial+Complex,+Dindayal+Upadhyay+Marg,+Mulund+West,+Mumbai,+Maharashtra+400080" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-xs font-medium text-industrial-blue hover:text-blue-700 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <span className="material-symbols-outlined text-xs">open_in_new</span>
                </a>
              </div>
              <div className="h-64 w-full relative">
                <iframe
                  title="Paras Chem India Location Map"
                  src="https://maps.google.com/maps?q=Gala+Industrial+Complex,+Dindayal+Upadhyay+Marg,+Mulund+West,+Mumbai+400080&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
