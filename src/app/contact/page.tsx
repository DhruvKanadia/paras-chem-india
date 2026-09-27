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
    message: ''
  });
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
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
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
      <section className="text-center py-12 md:py-16 px-margin-page max-w-container-max mx-auto border-b border-border-subtle mb-12">
        <h1 className="font-display text-display mb-4">Get in Touch</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Whether you need a bulk quote, technical support, or have a general enquiry, our team is ready to assist you.
        </p>
      </section>

      <div className="px-margin-page max-w-container-max mx-auto">
        <div className="grid grid-cols-12 gap-gutter">
          
          {/* LEFT COLUMN */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            {/* Bulk Quote Banner */}
            <div className="bg-industrial-blue text-on-primary rounded-lg p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-3xl">request_quote</span>
                  <h2 className="font-headline-lg">Request a Bulk Quote</h2>
                </div>
                <p className="text-blue-100">Looking for industrial-scale quantities? Get specialized pricing for large volume orders.</p>
              </div>
              <button 
                onClick={() => {
                  const formElement = document.getElementById('enquiry-form-section');
                  if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-industrial-blue px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors shrink-0 whitespace-nowrap"
              >
                Start Quote Request
              </button>
            </div>

            {/* General Enquiry Form */}
            <div id="enquiry-form-section" className="bg-white border border-border-subtle rounded p-8">
              <h3 className="font-headline-lg mb-6 border-b border-border-subtle pb-4">General Enquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
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

                <button 
                  type="submit"
                  disabled={submitting}
                  className="bg-primary text-on-primary px-8 py-3 rounded font-medium hover:bg-industrial-blue transition-colors disabled:opacity-70 flex items-center justify-center gap-2 w-full md:w-auto"
                >
                  {submitting ? 'Sending...' : (
                    <>
                      Send Message
                      <span className="material-symbols-outlined text-sm">send</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            {/* HQ Card */}
            <div className="bg-surface-gray border border-border-subtle rounded p-8">
              <h3 className="font-headline-lg mb-6 pb-4 border-b border-border-subtle">Headquarters</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-white border border-border-subtle flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-industrial-blue">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-label-md mb-1">Address</h4>
                    <p className="text-body-md text-on-surface-variant">
                      313, Ind.Est, Gala Industrial Complex,<br />
                      Dindayal Upadhyay Marg,<br />
                      Siddharth Nagar, Mulund West,<br />
                      Mumbai, Maharashtra 400080
                    </p>
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
                      <a href="mailto:kanadiadhruv3883@gmail.com" className="hover:text-industrial-blue">kanadiadhruv3883@gmail.com</a>
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

            {/* Map */}
            <div className="h-64 bg-surface-gray border border-border-subtle rounded overflow-hidden relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz_SAljOgJs3yyqblhzx8Cd6em-AWCzxOauMDchaY6Cac6OplxMo7sdn3wGgf-gJMwvTSRRfrHJ0QX2J8-_S-4ZnaZEJhoNag5PW9pIpqpEhyNP0GSljShOobZmgCOWgp7obT78XkAVbNVm-vQJ0F953jTk0dEJ2IvvfIoEBeVtTt9oRLkNAdLTHtmqb2ozC4qmMB0ucQu9S1ixUMvCeGBxTNOuBY-H_7NhVnTRyYU5s2xeLko-JMi" 
                alt="Map location" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
