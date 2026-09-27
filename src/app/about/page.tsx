import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Paras Chem',
}

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes growUp {
          from { height: 0; opacity: 0; }
          to { opacity: 1; }
        }
        .animate-growUp {
          animation: growUp 1s ease-out forwards;
        }
      `}} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-12 border-b border-slate-200 relative">
        <div className="absolute left-4 md:left-12 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>
        <div className="max-w-7xl mx-auto md:pl-16 relative">
          <p className="text-slate-500 font-mono text-sm uppercase tracking-widest mb-6">Paras Chem India</p>
          <h1 className="text-slate-900 text-6xl md:text-8xl font-medium tracking-tighter leading-none mb-8">
            The Architecture<br />of Distribution.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
            Structuring the flow of premium chemicals across the subcontinent with precision, scale, and uncompromising quality since 1999.
          </p>
        </div>
      </section>

      {/* Key Stats Grid */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 border-x border-slate-200">
            {[
              { value: '27+', label: 'Years of Excellence' },
              { value: '₹97 Cr', label: 'FY 25-26 Revenue' },
              { value: '100+', label: 'Chemical Products' },
              { value: '9', label: 'Principal Partners' }
            ].map((stat, i) => (
              <div key={i} className="p-8 md:p-12 text-center md:text-left flex flex-col justify-center">
                <div className="text-5xl md:text-6xl font-light text-slate-900 mb-2 tracking-tight">{stat.value}</div>
                <div className="text-slate-500 font-mono text-xs uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 md:px-12 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div className="relative">
             <div className="absolute -left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>
             <h3 className="text-slate-900 text-2xl font-medium tracking-tight mb-6">Mission</h3>
             <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
               Empowering Indian manufacturing with compliant access to premium chemicals through transparent partnerships and a robust, data-driven distribution network.
             </p>
          </div>
          <div className="relative">
             <div className="absolute -left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>
             <h3 className="text-slate-900 text-2xl font-medium tracking-tight mb-6">Vision</h3>
             <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
               Establishing architectural benchmarks for operational excellence, transparency, and quality assurance in chemical distribution across the subcontinent.
             </p>
          </div>
        </div>
      </section>

      {/* Revenue Growth Chart */}
      <section className="py-24 px-4 md:px-12 border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-16">
             <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-slate-900">Growth Trajectory</h2>
             <p className="text-slate-500 font-mono text-sm hidden md:block">Figures in INR Crores</p>
          </div>
          <div className="flex justify-between items-end h-[400px] gap-4 md:gap-16 px-4 md:px-12 border-b border-slate-200 pb-0">
            {[
              { year: 'FY 23', rev: 38, h: '39%' },
              { year: 'FY 24', rev: 48, h: '49%' },
              { year: 'FY 25', rev: 58, h: '60%' },
              { year: 'FY 26', rev: 97, h: '100%' },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-slate-900 text-sm">
                  ₹{bar.rev} Cr
                </div>
                <div className="text-slate-900 font-light text-2xl md:text-3xl mb-4 tracking-tight">₹{bar.rev}</div>
                <div 
                  className="w-full max-w-[120px] bg-slate-900 animate-growUp origin-bottom"
                  style={{ height: bar.h, animationDelay: `${i * 150}ms`, animationFillMode: 'both' }}
                ></div>
                <div className="mt-6 mb-2 font-mono text-xs md:text-sm text-slate-500">{bar.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pan-India Presence Map */}
      <section className="py-24 px-4 md:px-12 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 w-full relative">
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-slate-900 mb-12">Network Topology</h2>
            
            <div className="flex gap-8 mb-12 border-b border-slate-200 pb-8">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-slate-500">
                <span className="w-2 h-2 bg-slate-900"></span> Active Nodes
              </div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-slate-500">
                <span className="w-2 h-2 bg-slate-400"></span> Planned Nodes
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline">
                <div className="font-mono text-sm text-slate-900">Mumbai (HQ)</div>
                <div className="text-slate-500 text-sm md:text-base font-light border-b border-slate-200 border-dashed pb-2">Corporate operations and centralized routing</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline">
                <div className="font-mono text-sm text-slate-900">Bhiwandi</div>
                <div className="text-slate-500 text-sm md:text-base font-light border-b border-slate-200 border-dashed pb-2">Primary warehousing hub (5 dedicated structural facilities)</div>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4 items-baseline">
                <div className="font-mono text-sm text-slate-400">Expansion</div>
                <div className="text-slate-500 text-sm md:text-base font-light border-b border-slate-200 border-dashed pb-2">Vapi, Bangalore, Hyderabad, Kolkata</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-[500px] flex items-center justify-center">
            <div className="w-full aspect-square bg-slate-50 rounded-[2rem] p-12 border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>
              
              <div>
                <h3 className="text-slate-900 text-3xl font-medium tracking-tight mb-2">Network Topology</h3>
                <p className="text-slate-500 font-light">Real-time distribution nodes</p>
              </div>

              <div className="space-y-6 relative z-10 mt-12">
                <div className="flex items-center gap-6 group">
                  <div className="w-3 h-3 bg-slate-900 shadow-[0_0_15px_rgba(15,23,42,0.5)] rounded-full"></div>
                  <div>
                    <div className="font-mono text-sm tracking-widest text-slate-900 group-hover:pl-2 transition-all duration-300">MUMBAI HQ</div>
                    <div className="text-slate-500 text-xs mt-1">LAT 19.0760 / LON 72.8777</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
                  <div>
                    <div className="font-mono text-sm tracking-widest text-slate-900 group-hover:pl-2 transition-all duration-300">BHIWANDI HUB</div>
                    <div className="text-slate-500 text-xs mt-1">LAT 19.2813 / LON 73.0483</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group opacity-50">
                  <div className="w-3 h-3 bg-transparent border-2 border-slate-400 rounded-full"></div>
                  <div>
                    <div className="font-mono text-sm tracking-widest text-slate-500 group-hover:pl-2 transition-all duration-300">PLANNED EXPANSION</div>
                    <div className="text-slate-400 text-xs mt-1">VAPI / BLR / HYD / CCU</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Clients */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-slate-900 mb-12 text-center">Institutional Trust</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['ONGC', 'NTPC', 'BPCL', 'IOCL', 'GAIL', 'BARC', 'Aarti Industries', 'Clean Science', 'Lupin Ltd', 'Godrej', 'Galaxy Surfactants', 'Vedanta Ltd'].map(client => (
              <span 
                key={client} 
                className="px-6 py-3 rounded-full text-sm font-mono tracking-wide border border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
