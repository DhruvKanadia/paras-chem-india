import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-dark text-on-primary py-20 md:py-28">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page">
          <div className="md:col-span-8">
            <h1 className="font-display text-display md:text-5xl lg:text-6xl mb-6">
              Comprehensive B2B Chemical Solutions.
            </h1>
            <p className="text-body-lg text-surface-variant max-w-2xl">
              End-to-end supply chain management, from global sourcing and customs clearance to specialized warehousing and pan-India distribution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page">
          <h2 className="font-headline-lg text-headline-lg mb-12">Core Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="border border-border-subtle bg-white rounded-lg p-8 hover:border-industrial-blue transition-colors group">
              <div className="w-14 h-14 bg-surface flex items-center justify-center rounded-lg mb-6 text-industrial-blue group-hover:bg-industrial-blue group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">local_shipping</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">Chemical Distribution</h3>
              <p className="text-body-md text-on-surface-variant mb-6">
                Safe handling and transport of hazardous and non-hazardous materials with pan-India logistics.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-chemical-green text-sm mt-1">check_circle</span>
                  <span className="text-body-sm text-on-surface-variant">Temperature-controlled transport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-chemical-green text-sm mt-1">check_circle</span>
                  <span className="text-body-sm text-on-surface-variant">Hazmat-certified fleet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-chemical-green text-sm mt-1">check_circle</span>
                  <span className="text-body-sm text-on-surface-variant">Real-time tracking</span>
                </li>
              </ul>
            </div>

            <div className="border border-border-subtle bg-white rounded-lg p-8 hover:border-industrial-blue transition-colors group">
              <div className="w-14 h-14 bg-surface flex items-center justify-center rounded-lg mb-6 text-industrial-blue group-hover:bg-industrial-blue group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">travel_explore</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">Sourcing & Procurement</h3>
              <p className="text-body-md text-on-surface-variant mb-6">
                Global manufacturer vetting, competitive pricing, and supply security for your raw material needs.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-chemical-green text-sm mt-1">check_circle</span>
                  <span className="text-body-sm text-on-surface-variant">Multi-source qualification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-chemical-green text-sm mt-1">check_circle</span>
                  <span className="text-body-sm text-on-surface-variant">Cost optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-chemical-green text-sm mt-1">check_circle</span>
                  <span className="text-body-sm text-on-surface-variant">Supply risk management</span>
                </li>
              </ul>
            </div>

            <div className="border border-border-subtle bg-white rounded-lg p-8 hover:border-industrial-blue transition-colors group">
              <div className="w-14 h-14 bg-surface flex items-center justify-center rounded-lg mb-6 text-industrial-blue group-hover:bg-industrial-blue group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">public</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">Import & Export</h3>
              <p className="text-body-md text-on-surface-variant mb-6">
                International chemical trade with full customs clearance, documentation, and cross-border compliance.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-chemical-green text-sm mt-1">check_circle</span>
                  <span className="text-body-sm text-on-surface-variant">DGFT licensing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-chemical-green text-sm mt-1">check_circle</span>
                  <span className="text-body-sm text-on-surface-variant">HS code classification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-chemical-green text-sm mt-1">check_circle</span>
                  <span className="text-body-sm text-on-surface-variant">Port-to-door logistics</span>
                </li>
              </ul>
            </div>

            <div className="border border-border-subtle bg-white rounded-lg p-8 hover:border-industrial-blue transition-colors group">
              <div className="w-14 h-14 bg-surface flex items-center justify-center rounded-lg mb-6 text-industrial-blue group-hover:bg-industrial-blue group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">inventory</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">Supply Chain Management</h3>
              <p className="text-body-md text-on-surface-variant mb-6">
                Integrated inventory management, demand forecasting, and Just-In-Time delivery programs.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-chemical-green text-sm mt-1">check_circle</span>
                  <span className="text-body-sm text-on-surface-variant">VMI partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-chemical-green text-sm mt-1">check_circle</span>
                  <span className="text-body-sm text-on-surface-variant">Demand planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-chemical-green text-sm mt-1">check_circle</span>
                  <span className="text-body-sm text-on-surface-variant">Safety stock optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-industrial-blue text-on-primary py-16 text-center">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page">
          <h2 className="font-headline-lg text-headline-lg mb-4">Need a Custom Solution?</h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact our technical sales team for rare compounds, custom synthesis, or specialized procurement.
          </p>
          <Link href="/contact" className="inline-block bg-white text-industrial-blue px-8 py-3 rounded font-label-md hover:bg-surface transition-colors">
            Contact Sales
          </Link>
        </div>
      </section>
    </>
  )
}
