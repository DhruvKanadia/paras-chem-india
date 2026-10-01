'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) { setStatus('success'); setEmail(''); }
      else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  return (
    <footer className="bg-slate-900 text-white mt-auto">
      {/* Top CTA Band */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page py-10 flex flex-col items-center justify-center text-center gap-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white text-center">Ready to source chemicals?</h3>
            <p className="text-blue-100 mt-1 text-center">Get competitive quotes from India's trusted distributor.</p>
          </div>
          <div className="flex justify-center gap-3">
            <Link href="/contact" className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Request a Quote
            </Link>
            <a href="tel:+919323667667" className="border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-container-max mx-auto px-4 md:px-margin-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <img src="/logo.jpg" alt="Paras Chem India" className="h-20 w-auto object-contain brightness-0 invert mb-4" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              One of India's leading chemical distributors, supplying high-quality chemicals across 7+ industries for over 27 years.
            </p>
            <div className="flex gap-3">
              <a href="mailto:kanadiadhruv3883@gmail.com" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors" title="Email">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <a href="https://wa.me/919326772266" target="_blank" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors" title="WhatsApp">
                <span className="material-symbols-outlined text-lg">chat</span>
              </a>
              <a href="tel:+919323667667" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors" title="Call">
                <span className="material-symbols-outlined text-lg">call</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Products', href: '/products' },
                { name: 'Industries', href: '/industries' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Principals', href: '/principals' },
                { name: 'Contact', href: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-400 mt-0.5">location_on</span>
                <p className="text-slate-400 text-sm leading-relaxed">
                  313, Ind.Est, Gala Industrial Complex,<br />
                  Dindayal Upadhyay Marg, Siddharth Nagar,<br />
                  Mulund West, Mumbai - 400080
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-400">call</span>
                <div className="text-sm">
                  <a href="tel:+919323667667" className="text-slate-400 hover:text-white transition-colors">+91-9323667667</a>
                  <span className="text-slate-600 mx-1">|</span>
                  <a href="tel:+919136003604" className="text-slate-400 hover:text-white transition-colors">+91-9136003604</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-400">mail</span>
                <a href="mailto:kanadiadhruv3883@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm">kanadiadhruv3883@gmail.com</a>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800">
                <p className="text-xs text-slate-500">GSTIN: 27ACVPK1617L1Z4</p>
                <p className="text-xs text-slate-500">UDYAM: UDYAM-MH-18-0084113</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe for the latest product updates and industry news.
            </p>
            {status === 'success' ? (
              <div className="bg-green-500/10 text-green-400 p-4 rounded-xl border border-green-500/20 text-sm">
                ✓ Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors disabled:opacity-50 text-sm"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe →'}
                </button>
                {status === 'error' && (
                  <p className="text-red-400 text-xs">Failed to subscribe. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page py-6 flex flex-col justify-center items-center text-center gap-2">
          <p className="text-slate-500 text-sm text-center">© {new Date().getFullYear()} Paras Chem India. All rights reserved.</p>
          <p className="text-slate-600 text-xs text-center">Est. 1999 · 27+ Years of Excellence · ISO 9001:2015 Certified</p>
        </div>
      </div>
    </footer>
  );
}
