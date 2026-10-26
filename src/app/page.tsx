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
        .stat-line::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #2563EB;
          border-radius: 2px;
        }
      `}} />

      {/* ── 1. FULL-WIDTH HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative w-full h-[55vh] sm:h-[65vh] md:h-[80vh] max-h-[750px] overflow-hidden animate-fade-in" style={{ animationDelay: '0s' }}>
        <Image
          src="/industrial-plant.jpg?v=8"
          alt="Industrial Chemical Manufacturing & Distribution Infrastructure"
          fill
          className="object-cover object-bottom"
          priority
          quality={100}
          unoptimized
        />
        {/* Localized bottom scrim only – sky & towers stay pristine */}
        <div className="absolute bottom-0 inset-x-0 h-[55%] bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 inset-x-0 px-6 sm:px-10 md:px-16 pb-10 sm:pb-14 md:pb-20 w-full flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-3 md:mb-5 tracking-tight leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Global Import &amp; Distribution.
          </h2>
          <p className="text-slate-200 max-w-xl mx-auto text-base sm:text-lg md:text-xl font-light leading-relaxed mb-7 md:mb-9 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
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

      {/* ── 2. THE ENGINE OF INDIAN INDUSTRY – REDESIGNED ────────────────────── */}
      <section className="relative bg-[#080F20] text-white overflow-hidden">
        {/* Subtle radial glow behind headline */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(37,99,235,0.12) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-0">
          {/* Top eyebrow */}
          <div className="flex justify-center mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-600/10 text-blue-300 text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Since 1997 · Mumbai, India
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-center text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="block text-white">The Engine</span>
            <span className="block" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.35)', color: 'transparent' }}>of Indian Industry.</span>
          </h1>

          {/* Sub-copy */}
          <p className="text-center text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Precision chemical distribution — over 27 years of operational excellence delivering molecular consistency to pharmaceuticals, plastics, and textiles across India.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/products" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-3.5 rounded-full font-semibold text-base hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-300 shadow-lg">
              Explore Portfolio
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border border-slate-700 text-slate-300 px-8 py-3.5 rounded-full font-semibold text-base hover:border-slate-500 hover:text-white transition-all duration-300">
              Consult Experts
            </Link>
          </div>

          {/* Stats bar – flush to bottom */}
          <div className="border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 animate-fade-in-up" style={{ animationDelay: '0.55s' }}>
            {[
              { value: '27+', label: 'Years of Excellence' },
              { value: '200+', label: 'Products Distributed' },
              { value: '6', label: 'Industry Verticals' },
              { value: 'Pan-India', label: 'Distribution Network' },
            ].map((stat) => (
              <div key={stat.label} className="py-8 px-6 md:px-10 flex flex-col items-center text-center">
                <span className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-1">{stat.value}</span>
                <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. STRATEGIC PORTFOLIOS – FULL WIDTH FLUSH GRID ─────────────────── */}
      <section className="bg-white">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 md:pt-28 md:pb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest uppercase text-blue-600 font-semibold block mb-3">
              Core Application Sectors
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4">
              Strategic Portfolios.
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              Specialized raw materials and chemical architectures engineered for high-performance industrial manufacturing.
            </p>
          </div>
          <Link
            href="/products"
            className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 hover:border-blue-600 bg-white text-slate-900 text-sm font-semibold hover:text-blue-600 transition-all shrink-0 group"
          >
            <span>View Complete Catalog</span>
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        {/* Full-width flush 6-column grid — no outer padding, no card radius */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-slate-200">
          {[
            { id: '01', title: 'Soaps & Detergent', slug: 'soaps-and-detergent', image: '/industries/bg_soaps.jpg', tagline: 'Surfactants & Neutralizers' },
            { id: '02', title: 'Textile Industry', slug: 'textile-industry', image: '/industries/bg_textile.jpg', tagline: 'Dyeing & Finishing Auxiliaries' },
            { id: '03', title: 'Pharma Industry', slug: 'pharma-industry', image: '/industries/bg_pharma.jpg', tagline: 'High-Purity Solvents & APIs' },
            { id: '04', title: 'Food & Beverage', slug: 'food-industry', image: '/industries/bg_food.jpg', tagline: 'Food-Grade Additives' },
            { id: '05', title: 'Oil Field', slug: 'oil-field', image: '/industries/bg_oil.jpg', tagline: 'Drilling & Stimulation Fluids' },
            { id: '06', title: 'Plastic Additives', slug: 'plastic-industry', image: '/industries/bg_plastic.jpg', tagline: 'Polymer Fillers & Stabilizers' },
          ].map((cat, i) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.slug}`}
              className={`group relative flex flex-col overflow-hidden border-slate-200 hover:z-10 transition-all duration-300 ${i % 2 === 0 ? 'border-r' : ''} ${i < 4 ? 'border-b md:border-b-0' : ''} ${i < 5 ? 'lg:border-r' : ''} md:border-r last:border-r-0`}
            >
              {/* Image – taller so content can breathe */}
              <div className="relative h-52 sm:h-60 md:h-72 w-full overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* subtle dark-to-transparent bottom fade so text area contrasts */}
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* Text content */}
              <div className="px-5 pt-4 pb-6 flex flex-col flex-1 bg-white group-hover:bg-slate-50 transition-colors">
                <h3 className="text-sm md:text-base font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-1">
                  {cat.title}
                </h3>
                <p className="text-[11px] md:text-xs text-slate-400 font-light leading-relaxed mb-4 flex-1">
                  {cat.tagline}
                </p>
                <span className="inline-flex items-center text-[11px] font-semibold text-blue-600 gap-1 group-hover:gap-2 transition-all">
                  Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 4. QUALITY & INTEGRATED MODEL ────────────────────────────────────── */}
      <section className="bg-slate-950 py-16 md:py-20 px-6 md:px-12 text-white border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Uncompromising Quality.</h3>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">Sourcing strictly from ISO-certified global leaders to ensure complete molecular consistency across every batch we distribute. We maintain strict audit trails for all pharmaceutical intermediates.</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Integrated Model.</h3>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">A perfect amalgamation of superior quality products combined with a world-class distribution channel, designed to adapt to rapidly evolving global supply chain challenges.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
