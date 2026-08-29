import { Metadata } from 'next'
import Link from 'next/link'
import { principals, bridgeSteps, qualityPillars } from '@/data/principals'

export const metadata: Metadata = {
  title: 'Principals & Partners',
}

export default function PrincipalsPage() {
  return (
    <>
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

      <section className="py-24">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page">
          <div className="mb-12">
            <h2 className="font-headline-lg text-headline-lg">Our Global Principals</h2>
            <p className="text-body-md text-on-surface-variant mt-2">Trusted manufacturers and suppliers driving chemical innovation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {principals.map((principal, idx) => (
              <div key={idx} className="border border-border-subtle bg-white rounded-lg p-6 hover:border-industrial-blue transition-colors">
                <div className="text-4xl mb-4">{principal.flag}</div>
                <h3 className="font-headline-md text-lg font-bold mb-1">{principal.name}</h3>
                <div className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-3">
                  {principal.country}
                </div>
                <div className="text-label-md text-industrial-blue mb-2">
                  {principal.specialty}
                </div>
                <p className="text-body-sm text-on-surface-variant mb-4">
                  {principal.description}
                </p>
                <div className="mt-4 pt-3 border-t border-border-subtle text-label-sm text-on-surface-variant">
                  Partner since {principal.yearPartner}
                </div>
              </div>
            ))}
            
            <div className="bg-surface-gray border-dashed border-2 border-border-subtle rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-4xl text-industrial-blue mb-4">handshake</span>
              <h3 className="font-headline-md text-lg font-bold mb-2">Become a Partner</h3>
              <p className="text-body-sm text-on-surface-variant mb-6">
                Expand your reach in the Indian chemical market with our robust distribution network.
              </p>
              <Link href="/contact" className="bg-industrial-blue text-on-primary px-6 py-2 rounded font-label-md hover:bg-opacity-90 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-gray">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page">
          <h2 className="font-headline-lg text-headline-lg text-center mb-12">The Paras Chem Bridge</h2>
          
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
