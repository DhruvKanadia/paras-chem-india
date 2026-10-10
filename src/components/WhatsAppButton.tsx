'use client';

export default function WhatsAppButton() {
  const phoneNumber = '919326772266';
  const message = encodeURIComponent(
    'Hello, I am interested in your chemical products. Please share details.'
  );

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.13 6.746 3.048 9.382L1.054 31.316l6.156-1.97A15.917 15.917 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.31 22.602c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.97-7.826-6.804-8.064-7.118-.23-.314-1.932-2.574-1.932-4.908s1.218-3.48 1.652-3.958c.434-.478.948-.598 1.264-.598.314 0 .632.002.908.016.292.014.684-.11 1.07.816.39.948 1.326 3.238 1.444 3.472.118.234.196.508.04.816-.158.314-.236.508-.47.786-.234.274-.492.612-.702.822-.234.234-.478.488-.206.958s1.218 2.01 2.614 3.258c1.796 1.604 3.31 2.1 3.784 2.334.468.234.746.196 1.02-.118.274-.314 1.178-1.374 1.492-1.848.314-.468.632-.39 1.066-.234.434.158 2.762 1.302 3.236 1.54.468.234.786.352.904.548.118.196.118 1.138-.272 2.238z" />
        </svg>
        
        {/* Tooltip */}
        <span className="absolute right-16 bg-white text-slate-dark text-sm font-medium px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>

      {/* Email Floating Button */}
      <a
        href="mailto:info@paraschemindia.com?subject=Product%20Enquiry%20-%20Paras%20Chem%20India&body=Hello%2C%0A%0AI%20am%20interested%20in%20your%20chemical%20products.%20Please%20share%20details.%0A%0ARegards"
        className="fixed bottom-24 right-6 z-50 bg-industrial-blue hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Send Email"
      >
        <span className="material-symbols-outlined text-2xl">mail</span>

        {/* Tooltip */}
        <span className="absolute right-16 bg-white text-slate-dark text-sm font-medium px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Email us
        </span>
      </a>

      {/* Call Floating Button */}
      <a
        href="tel:+919323667667"
        className="fixed bottom-[168px] right-6 z-50 bg-chemical-green hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group md:hidden"
        aria-label="Call us"
      >
        <span className="material-symbols-outlined text-2xl">call</span>
        
        <span className="absolute right-16 bg-white text-slate-dark text-sm font-medium px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call now
        </span>
      </a>
    </>
  );
}
