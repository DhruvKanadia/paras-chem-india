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
      <section className="relative bg-slate-dark text-white pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center text-center" style={{ textAlign: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-dark to-transparent"></div>

        <div className="w-full max-w-7xl mx-auto relative z-5 flex flex-col items-center justify-center text-center" style={{ textAlign: 'center' }}>
          <div className="inline-flex items-center gap-3 px-4 py-1 border border-slate-800 rounded-full text-xs font-mono tracking-widest text-slate-400 mb-6 md:mb-8 animate-fade-in-up bg-slate-900/50 backdrop-blur-md mx-auto">
            <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse"></span>
            EST. 1999 • MUMBAI, INDIA
          </div>

          <h1 className="w-full text-center text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s', textAlign: 'center' }}>
            <span className="block">The Engine</span>
            <span className="block"><span className="text-slate-400">of Indian</span> Industry.</span>
          </h1>

          <p className="w-full max-w-2xl mx-auto text-center text-xl md:text-2xl text-slate-300 font-light leading-relaxed animate-fade-in-up mb-10" style={{ animationDelay: '0.2s', textAlign: 'center' }}>
            Precision chemical distribution. Over 27 years of operational excellence delivering molecular consistency to pharmaceuticals, plastics, and textiles.
          </p>

          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up mx-auto" style={{ animationDelay: '0.3s' }}>
            <Link href="/products" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-3.5 rounded-full font-semibold text-base hover:bg-slate-200 hover:-translate-y-0.5 transition-all duration-300 shadow-lg">
              Explore Portfolio
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center bg-transparent border border-slate-700 text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-slate-800 transition-all duration-300">
              Consult Experts
            </Link>
          </div>

          {/* Quick Chemical & CAS Search Bar */}
          <form action="/products" method="GET" className="w-full max-w-xl mx-auto mt-8 relative animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-slate-400 text-xl pointer-events-none">search</span>
              <input
                type="text"
                name="search"
                placeholder="Search CAS, Chemical (e.g. Caustic Soda, 1310-73-2)..."
                className="w-full pl-12 pr-28 py-3 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 rounded-full text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-xl"
              />
              <button
                type="submit"
                className="absolute right-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Industrial Image Section */}
      <section className="relative -mt-16 z-20 px-6 md:px-12 mb-12 md:mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Image
              src="/industrial-plant.jpg"
              alt="Industrial Chemical Plant"
              fill
              className="object-cover"
              priority
            />
            {/* Elegant gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/90 via-slate-dark/40 to-transparent"></div>

            <div className="absolute bottom-0 inset-x-0 p-8 md:p-16 w-full flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter text-center">Global Import & Distribution.</h2>
              <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light mb-8 text-center">
                Delivering uncompromised chemical solutions, HAZ-category warehousing, and complete supply chain integrity across the subcontinent.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-slate-200 transition-colors">
                Partner With Us <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Trust & Operational Metrics */}
      <section className="bg-white border-y border-slate-200 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">27+</span>
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-500 mt-1">Years Established (1999)</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">100+</span>
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-500 mt-1">Chemical Formulations</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Port Direct</span>
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-500 mt-1">JNPT & Kandla Clearance</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">100% Traceable</span>
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-500 mt-1">Batch COA & ISO Quality</span>
          </div>
        </div>
      </section>

      {/* Strategic Portfolios */}
      <section className="pt-16 pb-24 md:pt-20 md:pb-28 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-industrial-blue text-xs font-semibold tracking-wider uppercase mb-4">
              <span>Core Application Sectors</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6 text-center">Strategic Portfolios.</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light mb-8 text-center">Comprehensive chemical solutions engineered for specialized industrial manufacturing.</p>
            <Link href="/products" className="inline-flex items-center gap-3 font-semibold text-slate-900 hover:text-industrial-blue transition-colors border-b-2 border-slate-900 pb-1 hover:border-industrial-blue">
              View Complete Catalog <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                id: '01', 
                title: 'Soaps & Detergent', 
                count: '10', 
                slug: 'soaps-and-detergent',
                image: '/industries/bg_soaps.jpg',
                tagline: 'Surfactants, Neutralizers & Foam Boosters'
              },
              { 
                id: '02', 
                title: 'Textile Industry', 
                count: '09', 
                slug: 'textile-industry',
                image: '/industries/bg_textile.jpg',
                tagline: 'Dyeing, Bleaching & Finishing Auxiliaries'
              },
              { 
                id: '03', 
                title: 'Pharma Industry', 
                count: '14', 
                slug: 'pharma-industry',
                image: '/industries/bg_pharma.jpg',
                tagline: 'High-Purity Solvents, APIs & Excipients'
              },
              { 
                id: '04', 
                title: 'Food & Beverage', 
                count: '05', 
                slug: 'food-industry',
                image: '/industries/bg_food.jpg',
                tagline: 'Food-Grade Additives & Preservatives'
              },
              { 
                id: '05', 
                title: 'Oil Field', 
                count: '06', 
                slug: 'oil-field',
                image: '/industries/bg_oil.jpg',
                tagline: 'Drilling Fluids, Stimulation & Completion'
              },
              { 
                id: '06', 
                title: 'Plastic Additives', 
                count: '04', 
                slug: 'plastic-industry',
                image: '/industries/bg_plastic.jpg',
                tagline: 'Polymer Compounding, Fillers & Stabilizers'
              },
            ].map((cat) => (
              <Link key={cat.id} href={`/products?category=${cat.slug}`} className="group block h-full">
                <div className="relative rounded-3xl h-[340px] shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2 border border-slate-300/60 bg-slate-900">
                  {/* Background Photography */}
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Cinematic Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/65 to-slate-900/25 group-hover:from-slate-950 group-hover:via-slate-900/50 transition-all duration-500"></div>

                  {/* Card Content Layer */}
                  <div className="relative z-10 flex flex-col h-full p-8 text-white justify-between">
                    {/* Top Pill Header */}
                    <div className="flex items-center justify-between w-full">
                      <span className="backdrop-blur-md bg-white/15 text-white/90 text-[11px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 shadow-sm">
                        PORTFOLIO {cat.id}
                      </span>
                      <span className="text-xs font-semibold text-blue-200 bg-blue-900/70 backdrop-blur-md px-3 py-1 rounded-full border border-blue-400/30">
                        {cat.count} Products
                      </span>
                    </div>

                    {/* Bottom Title & Action */}
                    <div className="mt-auto w-full">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-slate-300 text-sm font-light mb-4 line-clamp-1">
                        {cat.tagline}
                      </p>
                      
                      <div className="flex items-center justify-between border-t border-white/15 pt-4 w-full">
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/90 group-hover:text-white transition-colors">
                          Explore Portfolio
                        </span>
                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-md">
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Architecture */}
      <section className="bg-slate-dark py-32 px-6 md:px-12 text-white border-y border-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-slate-500 mb-16 flex items-center justify-center gap-4 text-center">
            <span className="w-8 h-px bg-slate-700"></span> Core Architecture<span className="w-8 h-px bg-slate-700"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 text-center">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-center">Uncompromising Quality.</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light max-w-lg mx-auto text-center">Sourcing strictly from ISO-certified global leaders to ensure complete molecular consistency across every batch we distribute. We maintain strict audit trails for all pharmaceutical intermediates.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-center">Integrated Model.</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light max-w-lg mx-auto text-center">A perfect amalgamation of superior quality products combined with a world-class distribution channel, designed to adapt to rapidly evolving global supply chain challenges.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
