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

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-surface-container-low border-t border-border-subtle mt-auto">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-industrial-blue" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
              <span className="font-headline-md font-bold">Paras Chem</span>
            </Link>
            <p className="text-body-sm text-on-surface-variant">
              Professional B2B chemical distribution, ensuring quality and reliability across the industrial supply chain.
            </p>
            <p className="text-label-sm text-on-surface-variant mt-2">
              © 2025 Paras Chem. All rights reserved.
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="font-headline-md text-body-md font-bold mb-4 text-on-surface">Company</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/about" className="text-body-sm text-on-surface-variant hover:text-industrial-blue underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/principals" className="text-body-sm text-on-surface-variant hover:text-industrial-blue underline transition-colors">
                  Principals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body-sm text-on-surface-variant hover:text-industrial-blue underline transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-headline-md text-body-md font-bold mb-4 text-on-surface">Legal</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="text-body-sm text-on-surface-variant hover:text-industrial-blue underline transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body-sm text-on-surface-variant hover:text-industrial-blue underline transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-body-sm text-on-surface-variant hover:text-industrial-blue underline transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-headline-md text-body-md font-bold mb-4 text-on-surface">Stay Updated</h3>
            <p className="text-body-sm text-on-surface-variant mb-4">
              Subscribe for industry insights and product updates.
            </p>
            
            {status === 'success' ? (
              <div className="bg-chemical-green/10 text-chemical-green p-3 rounded border border-chemical-green/20 text-body-sm">
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full px-3 py-2 border border-border-subtle rounded bg-surface-container-lowest text-body-sm focus:outline-none focus:border-industrial-blue"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-slate-dark text-on-primary font-label-sm text-label-sm px-4 py-2 rounded uppercase tracking-wider hover:bg-industrial-blue transition-colors disabled:opacity-70 text-left w-fit"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
                {status === 'error' && (
                  <p className="text-error text-label-sm mt-1">Failed to subscribe. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
