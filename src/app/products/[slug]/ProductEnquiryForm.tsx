'use client';

import React, { useState } from 'react';

interface ProductEnquiryFormProps {
  productName: string;
  productSlug: string;
}

export default function ProductEnquiryForm({ productName, productSlug }: ProductEnquiryFormProps) {
  const [formData, setFormData] = useState({
    quantity: '',
    company: '',
    email: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, productName, productSlug }),
      });
      
      if (res.ok) {
        setSubmitted(true);
        setFormData({ quantity: '', company: '', email: '' });
      } else {
        alert('Failed to submit enquiry. Please try again later.');
      }
    } catch (error) {
      console.error('Enquiry error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-chemical-green/10 text-chemical-green p-4 rounded border border-chemical-green/20 flex flex-col items-center text-center">
        <span className="material-symbols-outlined text-4xl mb-2">check_circle</span>
        <h4 className="font-headline-md mb-2">Enquiry Sent!</h4>
        <p className="text-body-sm">We&apos;ve received your request for {productName}. Our team will contact you shortly.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm underline hover:no-underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="quantity" className="block font-label-md text-on-surface mb-1">Required Quantity</label>
        <input 
          type="text" 
          id="quantity"
          required
          placeholder="e.g. 500 KG"
          value={formData.quantity}
          onChange={(e) => setFormData({...formData, quantity: e.target.value})}
          className="w-full border border-border-subtle rounded px-3 py-2 text-body-md focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none"
        />
      </div>
      <div>
        <label htmlFor="company" className="block font-label-md text-on-surface mb-1">Company Name</label>
        <input 
          type="text" 
          id="company"
          required
          placeholder="Your Company"
          value={formData.company}
          onChange={(e) => setFormData({...formData, company: e.target.value})}
          className="w-full border border-border-subtle rounded px-3 py-2 text-body-md focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-label-md text-on-surface mb-1">Work Email</label>
        <input 
          type="email" 
          id="email"
          required
          placeholder="email@company.com"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full border border-border-subtle rounded px-3 py-2 text-body-md focus:border-industrial-blue focus:ring-1 focus:ring-industrial-blue outline-none"
        />
      </div>
      <button 
        type="submit" 
        disabled={submitting}
        className="w-full bg-industrial-blue text-on-primary py-2 rounded font-medium hover:bg-blue-700 transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
      >
        {submitting ? 'Sending...' : (
          <>
            Send Enquiry
            <span className="material-symbols-outlined text-sm">send</span>
          </>
        )}
      </button>
      <p className="text-label-sm text-on-surface-variant text-center mt-2">
        By submitting, you agree to our privacy policy.
      </p>
    </form>
  );
}
