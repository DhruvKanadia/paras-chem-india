'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Principals', href: '/principals' },
  ];

  return (
    <>
      <header className="bg-surface-container-lowest border-b border-border-subtle sticky top-0 z-50">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page h-20 flex justify-between items-center">
          {/* LEFT side */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-industrial-blue" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
              <span className="font-headline-md font-bold">Paras Chem</span>
            </Link>
            
            <nav className="hidden md:flex gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-label-md text-label-md transition-colors ${
                      isActive 
                        ? 'text-industrial-blue border-b-2 border-industrial-blue pb-1' 
                        : 'text-on-surface-variant hover:text-industrial-blue'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* RIGHT side */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex relative items-center">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant pointer-events-none">search</span>
              <input
                type="text"
                placeholder="Search CAS, Chemical..."
                className="pl-10 pr-4 py-2 border border-border-subtle rounded bg-surface-gray w-64 text-body-sm focus:outline-none focus:border-industrial-blue"
              />
            </div>
            
            <Link
              href="/contact"
              className="hidden md:block border border-border-subtle rounded px-4 py-2 font-label-md text-label-md text-on-surface hover:bg-surface-gray transition-colors"
            >
              Contact
            </Link>
            
            <Link
              href="/contact"
              className="bg-industrial-blue text-on-primary px-4 py-2 rounded font-label-md text-label-md hover:bg-blue-700 transition-colors hidden sm:block"
            >
              Request a Quote
            </Link>
            
            <button
              className="md:hidden text-on-surface"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
