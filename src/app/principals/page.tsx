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
            <h2 className="font-headline-lg text-headline-lg">Our Principals & Manufacturing Partners</h2>
            <p className="text-body-md text-on-surface-variant mt-2">Authorized distributors for India&apos;s leading chemical manufacturers with combined monthly off-take exceeding 2,400 MT.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-gutter mb-12">
            {principals.map((principal, idx) => (
              <div key={idx} className="border border-border-subtle bg-white rounded-lg p-6 hover:border-industrial-blue transition-colors flex flex-col">
                <div className="h-32 mb-6 flex items-center justify-center bg-white rounded">
                  <img src={principal.logo} alt={`${principal.name} Logo`} className="max-h-full max-w-[250px] object-contain mix-blend-multiply" />
                </div>
                <h3 className="font-headline-lg text-xl font-bold mb-2">{principal.name}</h3>
                <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-3 font-semibold">
                  {principal.country}
                </div>
                <div className="text-label-md text-industrial-blue mb-2">
                  {principal.specialty}
                </div>
                <p className="text-body-sm text-on-surface-variant mb-4">
                  {principal.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-surface-gray border-dashed border-2 border-border-subtle rounded-lg p-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
            <div className="flex items-center gap-6">
              <span className="material-symbols-outlined text-5xl text-industrial-blue">handshake</span>
              <div>
                <h3 className="font-headline-md text-2xl font-bold mb-2">Become a Partner</h3>
                <p className="text-body-sm text-on-surface-variant">
                  Expand your reach in the Indian chemical market with our robust distribution network.
                </p>
              </div>
            </div>
            <Link href="/contact" className="bg-industrial-blue text-on-primary px-8 py-4 rounded font-label-md hover:bg-opacity-90 transition-colors whitespace-nowrap shadow-sm">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-gray">
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
