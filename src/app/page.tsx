import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}} />

      {/* Hero Section */}
      <section className="relative bg-[#0B132B] text-white pt-16 pb-28 md:pt-24 md:pb-36 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center text-center" style={{ textAlign: 'center' }}>
        <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center text-center" style={{ textAlign: 'center' }}>
          <h1 className="w-full text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-5 animate-fade-in-up text-white" style={{ animationDelay: '0.1s', textAlign: 'center' }}>
            <span className="block">The Engine</span>
            <span className="block">of Indian Industry.</span>
          </h1>

          <p className="w-full max-w-2xl mx-auto text-center text-lg md:text-xl text-slate-200 font-normal leading-relaxed animate-fade-in-up mb-10" style={{ animationDelay: '0.2s', textAlign: 'center' }}>
            Precision chemical distribution. Over 27 years of operational excellence delivering molecular consistency to pharmaceuticals, plastics, and textiles.
          </p>

          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up mx-auto" style={{ animationDelay: '0.3s' }}>
            <Link href="/products" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-3.5 rounded-full font-semibold text-base hover:bg-slate-200 hover:-translate-y-0.5 transition-all duration-300 shadow-lg">
              Explore Portfolio
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center bg-transparent border border-slate-600 text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-white/10 transition-all duration-300">
              Consult Experts
            </Link>
          </div>

        </div>
      </section>

      {/* Industrial Image Section */}
      <section className="relative -mt-16 md:-mt-20 z-20 px-6 md:px-12 mb-12 md:mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[420px] md:h-[620px] rounded-[2rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] border border-white/20 ring-1 ring-white/10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Image
              src="/industrial-plant.jpg?v=2"
              alt="Industrial Chemical Distribution Hub"
              fill
              className="object-cover"
              priority
            />
            {/* High-Contrast Gradient Scrim for Flawless Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 via-50% to-transparent pointer-events-none"></div>

            <div className="absolute bottom-0 inset-x-0 p-8 md:p-16 w-full flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight text-center drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]">
                Global Import &amp; Distribution.
              </h2>
              <p className="text-slate-100 max-w-2xl mx-auto text-lg md:text-xl font-normal leading-relaxed mb-8 text-center drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
                Delivering uncompromised chemical solutions, HAZ-category warehousing, and complete supply chain integrity across the subcontinent.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-3.5 rounded-full font-semibold text-base hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-300 shadow-xl">
                Partner With Us <span className="material-symbols-outlined text-base ml-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Strategic Portfolios */}
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

          {/* Seamless Rectangular Cards Grid - No gaps between cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-200 gap-px border border-slate-200 shadow-sm">
            {[
              { 
                id: '01', 
                title: 'Soaps & Detergent', 
                slug: 'soaps-and-detergent',
                image: '/industries/bg_soaps.jpg',
                tagline: 'Surfactants, Neutralizers & Foam Boosters',
              },
              { 
                id: '02', 
                title: 'Textile Industry', 
                slug: 'textile-industry',
                image: '/industries/bg_textile.jpg',
                tagline: 'Dyeing, Bleaching & Finishing Auxiliaries',
              },
              { 
                id: '03', 
                title: 'Pharma Industry', 
                slug: 'pharma-industry',
                image: '/industries/bg_pharma.jpg',
                tagline: 'High-Purity Solvents, APIs & Excipients',
              },
              { 
                id: '04', 
                title: 'Food & Beverage', 
                slug: 'food-industry',
                image: '/industries/bg_food.jpg',
                tagline: 'Food-Grade Additives & Preservatives',
              },
              { 
                id: '05', 
                title: 'Oil Field', 
                slug: 'oil-field',
                image: '/industries/bg_oil.jpg',
                tagline: 'Drilling Fluids, Stimulation & Completion',
              },
              { 
                id: '06', 
                title: 'Plastic Additives', 
                slug: 'plastic-industry',
                image: '/industries/bg_plastic.jpg',
                tagline: 'Polymer Compounding, Fillers & Stabilizers',
              },
            ].map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.slug}`}
                className="group bg-white hover:bg-slate-50 transition-colors duration-200 flex flex-col h-full"
              >
                {/* Photo Container - crisp rectangular, no badge */}
                <div className="relative h-60 md:h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Card Content Layer - crisp rectangular, no chemical pills */}
                <div className="p-7 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-industrial-blue transition-colors mb-2.5">
                      {cat.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      {cat.tagline}
                    </p>
                  </div>

                  {/* Card Action Row */}
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

      {/* Quality & Integrated Model */}
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
