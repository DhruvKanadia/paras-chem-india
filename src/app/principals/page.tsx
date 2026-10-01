import { Metadata } from 'next'
import Link from 'next/link'
import { principals, bridgeSteps, qualityPillars } from '@/data/principals'

export const metadata: Metadata = {
  title: 'Principals & Partners',
}

export default function PrincipalsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-scroll {
          display: flex;
          width: max-content;
          animation: marqueeScroll 60s linear infinite;
        }
        .animate-marquee-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <section className="bg-slate-dark text-on-primary py-20 md:py-28">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page text-center">
          <h1 className="font-display text-display md:text-5xl lg:text-6xl mb-6">
            Strategic Alliances Built on Trust
          </h1>
          <p className="text-body-lg text-surface-variant max-w-2xl mx-auto">
            We serve as the bridge between global chemical manufacturers and industrial end-users across India.
          </p>
        </div>
      </section>

      <section className="pt-24 pb-10 overflow-hidden">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-center">Our Principals & Manufacturing Partners</h2>
            <p className="text-body-md text-on-surface-variant mt-2 text-center">Authorized distributors for India&apos;s leading chemical manufacturers with combined monthly off-take exceeding 2,400 MT.</p>
          </div>
        </div>

        {/* Moving Horizontally in One Line - No Boxes, No Product Descriptions */}
        <div className="relative w-full overflow-hidden py-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 md:before:w-36 before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 md:after:w-36 after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
          <div className="animate-marquee-scroll items-center">
            {[...principals, ...principals].map((principal, idx) => (
              <div
                key={idx}
                className="mx-8 md:mx-14 flex-shrink-0 flex flex-col items-center justify-center text-center group cursor-default"
              >
                <div className="h-24 w-48 md:w-56 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={principal.logo}
                    alt={`${principal.name} Logo`}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                  />
                </div>
                <h3 className="font-headline-md text-base md:text-lg font-bold text-slate-900 text-center whitespace-normal max-w-[240px] leading-snug">
                  {principal.name}
                </h3>
                <div className="text-xs font-mono text-industrial-blue uppercase tracking-wider mt-1.5 text-center">
                  {principal.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner Callout */}
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page mt-10">
          <div className="bg-surface-gray border-dashed border-2 border-border-subtle rounded-lg p-10 flex flex-col items-center justify-center text-center gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="material-symbols-outlined text-5xl text-industrial-blue">handshake</span>
              <div>
                <h3 className="font-headline-md text-2xl font-bold mb-2 text-center">Become a Partner</h3>
                <p className="text-body-sm text-on-surface-variant max-w-lg mx-auto text-center">
                  Expand your reach in the Indian chemical market with our robust distribution network.
                </p>
              </div>
            </div>
            <Link href="/contact" className="bg-industrial-blue text-on-primary px-8 py-4 rounded font-label-md hover:bg-opacity-90 transition-colors whitespace-nowrap shadow-sm mx-auto">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-24 bg-surface-gray">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page">
          <h2 className="font-headline-lg text-headline-lg text-center mb-12">The Paras Chem India Bridge</h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 flex-wrap">
            {bridgeSteps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 md:gap-8">
                <div className="bg-white border border-border-subtle rounded-lg p-6 text-center w-64">
                  <span className={`material-symbols-outlined text-3xl text-industrial-blue mb-4`}>{step.icon}</span>
                  <h3 className="font-headline-md text-lg mb-2">{step.label}</h3>
                  <p className="text-body-sm text-on-surface-variant">{step.description}</p>
                </div>
                {idx < bridgeSteps.length - 1 && (
                  <span className="hidden md:block material-symbols-outlined text-industrial-blue text-2xl">arrow_forward</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
            {qualityPillars.map((pillar, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white border border-border-subtle rounded px-4 py-2 text-label-md text-on-surface">
                <span className="material-symbols-outlined text-chemical-green text-sm">{pillar.icon}</span>
                {pillar.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
