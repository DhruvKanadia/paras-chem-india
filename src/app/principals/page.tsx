import { Metadata } from 'next'
import Image from 'next/image'
import { principals } from '@/data/principals'

export const metadata: Metadata = {
  title: 'Principals & Partners',
}

export default function PrincipalsPage() {
  const topPrincipals = principals.slice(0, 5)
  const bottomPrincipals = principals.slice(5, 9)

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-40vw);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(40vw);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-left {
          animation: slideInFromLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
        }
        .animate-slide-right {
          animation: slideInFromRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }
      `}} />

      {/* Hero Section - Compact */}
      <section className="relative bg-slate-dark text-white py-12 md:py-16 border-b border-slate-900 overflow-hidden">
        {/* Subtle ambient gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-900/80 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 md:px-12 text-center">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-slate-300 font-semibold mb-3.5 sm:mb-4">
            Authorised Distribution Network
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 leading-tight">
            Strategic Alliances <span className="text-slate-400">Built on Trust.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Connecting premier domestic and global chemical manufacturers with over 500+ industrial plants across India.
          </p>
        </div>
      </section>

      {/* Principals Showcase - Blended White Background & Entrance Slide */}
      <section className="py-12 md:py-20 bg-white overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Top Row: 5 Principals - swipeable from start on mobile */}
          <div className="overflow-x-auto no-scrollbar md:overflow-visible py-3 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="animate-slide-left flex justify-start md:justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 min-w-max md:min-w-0 w-full mx-auto">
              {topPrincipals.map((principal) => (
                <div
                  key={principal.name}
                  title={`${principal.name} · ${principal.specialty}`}
                  className="w-44 sm:w-52 md:w-60 lg:w-64 flex items-center justify-center text-center group cursor-default transition-all duration-300 py-3"
                >
                  <div className="h-24 sm:h-28 md:h-32 lg:h-36 w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={principal.logo}
                      alt={`${principal.name} Logo`}
                      width={240}
                      height={120}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: 4 Principals - swipeable from start on mobile */}
          <div className="overflow-x-auto no-scrollbar md:overflow-visible py-3 mt-6 md:mt-10 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="animate-slide-right flex justify-start md:justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 min-w-max md:min-w-0 w-full mx-auto">
              {bottomPrincipals.map((principal) => (
                <div
                  key={principal.name}
                  title={`${principal.name} · ${principal.specialty}`}
                  className="w-44 sm:w-52 md:w-60 lg:w-64 flex items-center justify-center text-center group cursor-default transition-all duration-300 py-3"
                >
                  <div className="h-24 sm:h-28 md:h-32 lg:h-36 w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={principal.logo}
                      alt={`${principal.name} Logo`}
                      width={240}
                      height={120}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
