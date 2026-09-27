'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Principals', href: '/principals' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <div 
        className="fixed inset-0 z-[100] bg-black/50 menu-overlay" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-surface-container-lowest z-[101] menu-panel flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-border-subtle">
          <Link href="/" className="flex items-center gap-2" onClick={onClose}>
            <img src="/logo.jpg" alt="Paras Chem India Logo" className="h-10 object-contain mix-blend-multiply" />
          </Link>
          <button onClick={onClose} aria-label="Close menu" className="text-on-surface">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <nav className="flex flex-col p-6 gap-1 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`block py-3 px-4 rounded text-body-md transition-colors ${
                  isActive
                    ? 'bg-surface-container-low text-industrial-blue font-medium'
                    : 'text-on-surface hover:bg-surface-gray'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="mt-auto p-6 border-t border-border-subtle">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full bg-industrial-blue text-on-primary text-center py-3 rounded font-label-md hover:bg-blue-700 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
