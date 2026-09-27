import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <style dangerouslySetInnerHTML={{__html: `
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
      <section className="relative bg-slate-dark text-white pt-32 pb-32 md:pt-40 md:pb-40 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-dark to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-slate-800 rounded-full text-xs font-mono tracking-widest text-slate-400 mb-12 animate-fade-in-up bg-slate-900/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse"></span>
            EST. 1999 • MUMBAI, INDIA
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            The Engine<br/>
            <span className="text-slate-500">of Indian</span><br/>
            Industry.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed animate-fade-in-up mb-12" style={{ animationDelay: '0.2s' }}>
            Precision chemical distribution. Over 27 years of operational excellence delivering molecular consistency to pharmaceuticals, plastics, and textiles.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/products" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-200 hover:-translate-y-1 transition-all duration-300">
              Explore Portfolio
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center bg-transparent border border-slate-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all duration-300">
              Consult Experts
            </Link>
          </div>
        </div>
      </section>

      {/* Industrial Image Section */}
      <section className="relative -mt-16 z-20 px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <img 
              src="/industrial-plant.jpg" 
              alt="Industrial Chemical Plant" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Elegant gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/90 via-slate-dark/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">Global Import & Distribution.</h2>
              <p className="text-slate-300 max-w-2xl text-lg font-light mb-8">
                Delivering uncompromised chemical solutions, HAZ-category warehousing, and complete supply chain integrity across the subcontinent.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-slate-200 transition-colors">
                Partner With Us <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Portfolios */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6">Strategic Portfolios.</h2>
              <p className="text-xl text-slate-500 max-w-2xl font-light">Comprehensive chemical solutions tailored for specialized industrial applications.</p>
            </div>
            <Link href="/products" className="inline-flex items-center gap-3 font-semibold text-slate-900 hover:text-slate-500 transition-colors border-b-2 border-slate-900 pb-1 hover:border-slate-500">
              View All Products <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '01', title: 'Soaps & Detergent', count: '10', slug: 'soaps-and-detergent' },
              { id: '02', title: 'Textile Industry', count: '09', slug: 'textile-industry' },
              { id: '03', title: 'Pharma Industry', count: '14', slug: 'pharma-industry' },
              { id: '04', title: 'Food & Beverage', count: '05', slug: 'food-industry' },
              { id: '05', title: 'Oil Field', count: '06', slug: 'oil-field' },
              { id: '06', title: 'Plastic Additives', count: '04', slug: 'plastic-industry' },
            ].map((cat) => (
              <Link key={cat.id} href={`/products?category=${cat.slug}`} className="group block h-full">
                <div className="relative bg-slate-100 rounded-3xl p-8 flex flex-col h-[280px] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2 border border-slate-200">
                  {/* Subtle Architectural Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 opacity-100 transition-all duration-700 group-hover:scale-105"></div>
                  
                  {/* Abstract Geometric Overlay for texture */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(15, 23, 42, 0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full text-slate-900 justify-between">
                    <div className="font-mono text-xs text-slate-400 tracking-widest">PORTFOLIO {cat.id}</div>
                    
                    <div className="mt-auto">
                      <h3 className="text-3xl font-bold text-slate-800 mb-4 tracking-tight group-hover:text-slate-900 transition-colors">{cat.title}</h3>
                      <div className="flex items-center justify-between border-t border-slate-300 pt-4">
                        <span className="text-slate-500 font-medium text-sm">{cat.count} Products</span>
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
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
          <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-slate-500 mb-16 flex items-center gap-4">
            <span className="w-8 h-px bg-slate-700"></span> Core Architecture
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Uncompromising Quality.</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light">Sourcing strictly from ISO-certified global leaders to ensure complete molecular consistency across every batch we distribute. We maintain strict audit trails for all pharmaceutical intermediates.</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Integrated Model.</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light">A perfect amalgamation of superior quality products combined with a world-class distribution channel, designed to adapt to rapidly evolving global supply chain challenges.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
