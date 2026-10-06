'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

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
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page h-28 flex justify-between items-center">
          {/* LEFT side */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="Paras Chem India Logo" width={200} height={96} className="h-24 w-auto object-contain mix-blend-multiply" />
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
            <form onSubmit={handleSearchSubmit} className="hidden lg:flex relative items-center">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant pointer-events-none">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search CAS, Chemical..."
                className="pl-10 pr-4 py-2 border border-border-subtle rounded bg-surface-gray w-64 text-body-sm focus:outline-none focus:border-industrial-blue"
              />
            </form>
            
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
