import TrustStrip from '@/components/TrustStrip'
import CategoryCard from '@/components/CategoryCard'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <section className="relative bg-slate-dark text-on-primary py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-30 mix-blend-luminosity" 
            style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuASUxkBI62iNnRtccKR-T9nETxEc0jFOhx4JTn15RX6pKUkBJNkoh5NsIc2fFc7znHJngXQPO9okFcxbYvqFXNMPM6Fknu5ROtFQIMrP5UpUNuKPYZhPSIqsL-x8ZHqS9MMrFe6Pkfk0ywMWZCEnulKrKGJoKyhKvULaZ_pChNyDF51pm2ewO_wdaxtulmTURZVfj7wuRHuDpot3KkTJAu1H5V7ZKufnrO0ABmwCiHR4jXXkZAWHtl2)' }} 
          />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-4 md:px-margin-page grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="col-span-1 md:col-span-8">
            <h1 className="font-display text-display md:text-5xl lg:text-6xl text-on-primary mb-6">
              Global Chemical Solutions, Engineered for Industrial Integrity.
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant mb-10 max-w-2xl">
              Leading distributor of industrial, water treatment, and specialty chemicals across India. Delivering precision, scale, and operational excellence to enterprise partners.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="bg-industrial-blue text-on-primary px-6 py-3 rounded font-label-md">
                Explore Catalog
              </Link>
              <Link href="/contact" className="border border-border-subtle text-on-primary px-6 py-3 rounded font-label-md">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-24 bg-background">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-page">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg">Strategic Categories</h2>
              <p className="text-body-md text-on-surface-variant mt-2">Comprehensive chemical portfolios tailored for specialized industrial applications.</p>
            </div>
            <Link href="/products" className="hidden md:inline-flex text-industrial-blue font-label-md items-center gap-1">
              View All Categories <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <CategoryCard
              slug="industrial-chemicals"
              name="Industrial Chemicals"
              icon="science"
              count={1200}
              description="Bulk commodities and foundational chemicals for large-scale manufacturing processes."
            />
            <CategoryCard
              slug="water-treatment"
              name="Water Treatment"
              icon="water_drop"
              count={450}
              description="Advanced coagulants, flocculants, and biocides for municipal and industrial effluent management."
            />
            <CategoryCard
              slug="textile-chemicals"
              name="Textile Chemicals"
              icon="styler"
              count={800}
              description="Dyes, auxiliaries, and finishing agents ensuring quality and compliance in textile production."
            />
            <CategoryCard
              slug="pharma-intermediates"
              name="Pharmaceutical Intermediates"
              icon="medication"
              count={300}
              description="High-purity building blocks and reagents for active pharmaceutical ingredient (API) synthesis."
            />
          </div>
        </div>
      </section>
    </>
  )
}
