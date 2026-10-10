'use client';

import Link from 'next/link';

export default function TopContactBar() {
  return (
    <div className="bg-slate-dark text-on-primary text-label-sm py-2 hidden md:block">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-page flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="mailto:info@paraschemindia.com" className="flex items-center gap-1.5 hover:text-industrial-blue transition-colors">
            <span className="material-symbols-outlined text-sm">mail</span>
            info@paraschemindia.com
          </a>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">location_on</span>
            Mumbai, Maharashtra
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">schedule</span>
            Mon - Sat: 9am - 6pm IST
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+919323667667" className="flex items-center gap-1.5 hover:text-industrial-blue transition-colors">
            <span className="material-symbols-outlined text-sm">call</span>
            +91-9323667667
          </a>
          <a href="https://www.paraschemindia.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-industrial-blue transition-colors">
            <span className="material-symbols-outlined text-sm">language</span>
            www.paraschemindia.com
          </a>
        </div>
      </div>
    </div>
  );
}
