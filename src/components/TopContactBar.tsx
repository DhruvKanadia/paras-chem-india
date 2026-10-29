'use client';

import Link from 'next/link';

export default function TopContactBar() {
  return (
    <div className="bg-slate-900 border-b border-slate-800 text-white text-sm font-medium py-3 hidden md:block">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-page flex justify-between items-center">
        {/* Left Info Group */}
        <div className="flex items-center gap-6">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@paraschemindia.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[16px] text-blue-400">mail</span>
            <span>info@paraschemindia.com</span>
          </a>
          <div className="w-px h-3.5 bg-slate-700"></div>
          <span className="flex items-center gap-2 text-slate-200">
            <span className="material-symbols-outlined text-[16px] text-blue-400">location_on</span>
            <span>Mumbai, Maharashtra</span>
          </span>
          <div className="w-px h-3.5 bg-slate-700"></div>
          <span className="flex items-center gap-2 text-slate-200">
            <span className="material-symbols-outlined text-[16px] text-blue-400">schedule</span>
            <span>Mon - Sat: 9am - 6pm IST</span>
          </span>
        </div>

        {/* Right Info Group */}
        <div className="flex items-center gap-6">
          <a 
            href="tel:+919323667667" 
            className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[16px] text-green-400">call</span>
            <span className="font-semibold text-white">+91-9323667667</span>
          </a>
          <div className="w-px h-3.5 bg-slate-700"></div>
          <a 
            href="https://wa.me/919323667667" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
