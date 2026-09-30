import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Paras Chem',
}

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes drawLine {
          from { stroke-dashoffset: 1200; }
          to { stroke-dashoffset: 0; }
        }
        .animate-drawLine {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: drawLine 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInArea {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeInArea {
          animation: fadeInArea 1.8s ease-out forwards;
        }
      `}} />

      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4 md:px-12 border-b border-slate-200 relative text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <p className="text-slate-500 font-mono text-sm uppercase tracking-widest mb-6">Paras Chem India</p>
          <h1 className="text-slate-900 text-6xl md:text-8xl font-medium tracking-tighter leading-none mb-8">
            The Architecture<br />of Distribution.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
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
              <div key={i} className="p-8 md:p-12 text-center flex flex-col items-center justify-center">
                <div className="text-5xl md:text-6xl font-light text-slate-900 mb-2 tracking-tight text-center">{stat.value}</div>
                <div className="text-slate-500 font-mono text-xs uppercase tracking-widest text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 md:px-12 border-b border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-slate-900 text-2xl font-medium tracking-tight mb-4">Mission</h3>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto">
              Empowering Indian manufacturing with compliant access to premium chemicals through transparent partnerships and a robust, data-driven distribution network.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-slate-900 text-2xl font-medium tracking-tight mb-4">Vision</h3>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto">
              Establishing architectural benchmarks for operational excellence, transparency, and quality assurance in chemical distribution across the subcontinent.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Growth Chart */}
      <section className="py-24 px-4 md:px-12 border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-slate-900 mb-3">Growth Trajectory</h2>
            <p className="text-slate-500 font-mono text-sm">Figures in INR Crores</p>
          </div>

          {/* SVG Line Graph */}
          <div className="w-full overflow-x-auto pb-4">
            <div className="min-w-[680px] max-w-4xl mx-auto">
              <svg viewBox="0 0 900 350" className="w-full h-auto overflow-visible" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="growthAreaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0f172a" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#0f172a" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal Guide Lines */}
                {[
                  { val: '₹100 Cr', y: 40 },
                  { val: '₹75 Cr', y: 102.5 },
                  { val: '₹50 Cr', y: 165 },
                  { val: '₹25 Cr', y: 227.5 },
                  { val: '₹0', y: 290 },
                ].map((grid, idx) => (
                  <g key={idx}>
                    <line
                      x1="110"
                      y1={grid.y}
                      x2="800"
                      y2={grid.y}
                      stroke={grid.y === 290 ? '#94a3b8' : '#e2e8f0'}
                      strokeWidth={grid.y === 290 ? '1.5' : '1'}
                      strokeDasharray={grid.y === 290 ? 'none' : '4 4'}
                    />
                    <text
                      x="95"
                      y={grid.y + 4}
                      textAnchor="end"
                      fill="#94a3b8"
                      fontSize="12"
                      fontFamily="monospace"
                    >
                      {grid.val}
                    </text>
                  </g>
                ))}

                {/* Shaded Area Below Line */}
                <path
                  d="M 110,195 L 330,170 L 550,145 L 790,47.5 L 790,290 L 110,290 Z"
                  fill="url(#growthAreaGradient)"
                  className="animate-fadeInArea"
                />

                {/* Straight Growth Line */}
                <path
                  d="M 110,195 L 330,170 L 550,145 L 790,47.5"
                  fill="none"
                  stroke="#0f172a"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-drawLine"
                />

                {/* Data Points and Annotations */}
                {[
                  { year: 'FY 23', rev: 38, x: 110, y: 195, pillY: 148, isCurrent: false },
                  { year: 'FY 24', rev: 48, x: 330, y: 170, pillY: 123, isCurrent: false },
                  { year: 'FY 25', rev: 58, x: 550, y: 145, pillY: 98, isCurrent: false },
                  { year: 'FY 26', rev: 97, x: 790, y: 47.5, pillY: 6, isCurrent: true },
                ].map((pt, idx) => (
                  <g key={idx}>
                    {/* Vertical dashed guideline to baseline */}
                    <line
                      x1={pt.x}
                      y1={pt.y}
                      x2={pt.x}
                      y2="290"
                      stroke="#cbd5e1"
                      strokeDasharray="3 3"
                      strokeWidth="1"
                    />

                    {/* Outer node glow/ring for current FY */}
                    {pt.isCurrent && (
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="14"
                        fill="none"
                        stroke="#0f172a"
                        strokeWidth="1.5"
                        opacity="0.25"
                      />
                    )}

                    {/* Data Node Circle */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="6.5"
                      fill="#ffffff"
                      stroke="#0f172a"
                      strokeWidth="3"
                    />
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="2.5"
                      fill="#0f172a"
                    />

                    {/* Value Pill Badge */}
                    <rect
                      x={pt.isCurrent ? pt.x - 56 : pt.x - 40}
                      y={pt.pillY}
                      width={pt.isCurrent ? 112 : 80}
                      height="28"
                      rx="14"
                      fill="#0f172a"
                    />
                    <text
                      x={pt.x}
                      y={pt.pillY + 18}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize={pt.isCurrent ? "13" : "12"}
                      fontWeight="600"
                      fontFamily="sans-serif"
                    >
                      {`₹${pt.rev} Cr`}{pt.isCurrent ? ' ★' : ''}
                    </text>

                    {/* X-Axis Year Label */}
                    <text
                      x={pt.x}
                      y="318"
                      textAnchor="middle"
                      fill={pt.isCurrent ? "#0f172a" : "#64748b"}
                      fontSize="13"
                      fontWeight={pt.isCurrent ? "700" : "500"}
                      fontFamily="monospace"
                    >
                      {pt.year}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Key Growth Metrics Callout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-100 max-w-4xl mx-auto text-center">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-bold text-slate-900 tracking-tight">2.55×</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">4-Year Expansion</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-bold text-slate-900 tracking-tight">+67.2%</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">FY 25–26 Surge</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-bold text-slate-900 tracking-tight">₹97 Cr</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">Annual Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pan-India Presence Map */}
      <section className="py-24 px-4 md:px-12 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-slate-900 mb-4">Network Topology</h2>
            <div className="flex justify-center items-center gap-8 font-mono text-xs uppercase tracking-widest text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-900"></span> Active Nodes
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-400"></span> Planned Nodes
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
            <div className="flex-1 w-full max-w-xl">
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

                <div className="text-center">
                  <h3 className="text-slate-900 text-3xl font-medium tracking-tight mb-2">Distribution Nodes</h3>
                  <p className="text-slate-500 font-light">Real-time hub architecture</p>
                </div>

                <div className="space-y-6 relative z-10 mt-8">
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
