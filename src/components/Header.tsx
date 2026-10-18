'use client';

import Link from 'next/link';
import Image from 'next/image';
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
          <div className="flex items-center gap-6 lg:gap-8">
            <Link href="/" className="flex items-center">
              <Image src="/logo.jpg" alt="Paras Chem India Logo" width={200} height={96} className="h-14 lg:h-16 w-auto object-contain mix-blend-multiply" />
            </Link>
            
            <div className="hidden md:block h-8 w-px bg-slate-200"></div>

            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[15px] lg:text-[16px] font-semibold px-3.5 py-2 rounded-full transition-all duration-200 ${
                      isActive 
                        ? 'text-industrial-blue bg-blue-50/90 font-bold' 
                        : 'text-slate-600 hover:text-industrial-blue hover:bg-blue-50/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* RIGHT side */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center border border-slate-200 rounded-full px-5 py-2 text-sm font-semibold text-slate-700 hover:text-industrial-blue hover:bg-slate-50 transition-all shadow-xs"
            >
              Contact
            </Link>
            
            <Link
              href="/contact"
              className="bg-industrial-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 hidden sm:inline-flex items-center justify-center"
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
