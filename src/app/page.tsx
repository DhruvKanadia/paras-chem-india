import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
          opacity: 0;
        }
      `}} />

      {/* ── 1. FULL-WIDTH HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative w-full h-[65vh] sm:h-[75vh] md:h-[90vh] max-h-[860px] overflow-hidden animate-fade-in" style={{ animationDelay: '0s' }}>
        <Image
          src="/industrial-plant.jpg?v=14"
          alt="Industrial Chemical Manufacturing & Distribution Infrastructure"
          fill
          className="object-cover object-bottom"
          priority
          quality={100}
          unoptimized
        />
        {/* Directional bottom-to-center dark scrim for effortless white text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 via-40% to-transparent pointer-events-none" />

        <div className="absolute bottom-0 inset-x-0 px-6 sm:px-10 md:px-16 pb-10 sm:pb-14 md:pb-20 w-full flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-3 md:mb-5 tracking-tight leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,1)] animate-fade-in-up" style={{ animationDelay: '0.2s', textShadow: '0 2px 16px rgba(0,0,0,0.85)' }}>
            Global Import &amp; Distribution.
          </h2>
          <p className="text-white max-w-xl mx-auto text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-7 md:mb-9 drop-shadow-[0_2px_12px_rgba(0,0,0,1)] animate-fade-in-up" style={{ animationDelay: '0.35s', textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
            Delivering uncompromised chemical solutions, HAZ-category warehousing, and complete supply chain integrity across the subcontinent.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-slate-900 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-300 shadow-2xl group">
              Partner With Us <span className="material-symbols-outlined text-base ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link href="/products" className="inline-flex items-center justify-center bg-white/15 backdrop-blur-sm border border-white/30 text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-white/25 transition-all duration-300">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. STRATEGIC PORTFOLIOS ───────────────────────────────────────────── */}
      <section className="pt-20 pb-28 md:pt-28 md:pb-36 px-6 md:px-12 bg-slate-50/70 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-mono tracking-widest uppercase text-industrial-blue font-semibold block mb-2">
                Core Application Sectors
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4">
                Strategic Portfolios.
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Specialized raw materials and chemical architectures engineered for high-performance industrial manufacturing across India.
              </p>
            </div>
            <Link
              href="/products"
              className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-900 text-sm font-semibold hover:text-industrial-blue shadow-xs transition-all shrink-0 group"
            >
              <span>View Complete Catalog</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Seamless Rectangular Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-200 gap-px border border-slate-200 shadow-sm">
            {[
              { id: '01', title: 'Soaps & Detergent', slug: 'soaps-and-detergent', image: '/industries/bg_soaps.jpg', tagline: 'Surfactants, Neutralizers & Foam Boosters' },
              { id: '02', title: 'Textile Industry', slug: 'textile-industry', image: '/industries/bg_textile.jpg', tagline: 'Dyeing, Bleaching & Finishing Auxiliaries' },
              { id: '03', title: 'Pharma Industry', slug: 'pharma-industry', image: '/industries/bg_pharma.jpg', tagline: 'High-Purity Solvents, APIs & Excipients' },
              { id: '04', title: 'Food & Beverage', slug: 'food-industry', image: '/industries/bg_food.jpg', tagline: 'Food-Grade Additives & Preservatives' },
              { id: '05', title: 'Oil Field', slug: 'oil-field', image: '/industries/bg_oil.jpg', tagline: 'Drilling Fluids, Stimulation & Completion' },
              { id: '06', title: 'Plastic Additives', slug: 'plastic-industry', image: '/industries/bg_plastic.jpg', tagline: 'Polymer Compounding, Fillers & Stabilizers' },
            ].map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.slug}`}
                className="group bg-white hover:bg-slate-50 transition-colors duration-200 flex flex-col h-full"
              >
                <div className="relative h-60 md:h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-7 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-industrial-blue transition-colors mb-2.5">
                      {cat.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      {cat.tagline}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-industrial-blue">
                    <span>Explore Portfolio</span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1.5 transition-transform duration-300">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. QUALITY & INTEGRATED MODEL ────────────────────────────────────── */}
      <section className="bg-slate-dark py-12 md:py-16 px-6 md:px-12 text-white border-y border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 text-center">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Uncompromising Quality.</h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light max-w-lg mx-auto text-center">Sourcing strictly from ISO-certified global leaders to ensure complete molecular consistency across every batch we distribute. We maintain strict audit trails for all pharmaceutical intermediates.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Integrated Model.</h3>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light max-w-lg mx-auto text-center">A perfect amalgamation of superior quality products combined with a world-class distribution channel, designed to adapt to rapidly evolving global supply chain challenges.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
