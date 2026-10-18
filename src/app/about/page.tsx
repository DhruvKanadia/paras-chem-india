import { Metadata } from 'next'
import IndiaMap from '@/components/IndiaMap'

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

      {/* Key Stats Grid - Borderless Typography */}
      <section className="py-12 md:py-16 px-4 md:px-12 border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '27+', label: 'Years of Excellence' },
              { value: '₹97 Cr', label: 'FY 25-26 Revenue' },
              { value: '100+', label: 'Chemical Products' },
              { value: '9', label: 'Principal Partners' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-2">
                <div className="text-4xl md:text-6xl font-light text-slate-900 mb-2 tracking-tight text-center">{stat.value}</div>
                <div className="text-slate-500 font-mono text-xs uppercase tracking-widest text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Blended Background */}
      <section className="py-20 md:py-24 px-4 md:px-12 border-b border-slate-100 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-center">
          <div className="flex flex-col items-center">
            <span className="text-xs font-mono uppercase tracking-widest text-industrial-blue font-semibold mb-3">Core Purpose</span>
            <h3 className="text-slate-900 text-2xl md:text-3xl font-medium tracking-tight mb-4">Mission</h3>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-md mx-auto">
              Empowering Indian manufacturing with compliant access to premium chemicals through transparent partnerships and a robust, data-driven distribution network.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-mono uppercase tracking-widest text-industrial-blue font-semibold mb-3">Future Outlook</span>
            <h3 className="text-slate-900 text-2xl md:text-3xl font-medium tracking-tight mb-4">Vision</h3>
            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed max-w-md mx-auto">
              Establishing architectural benchmarks for operational excellence, transparency, and quality assurance in chemical distribution across the subcontinent.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Growth Chart */}
      <section className="py-20 md:py-24 px-4 md:px-12 border-b border-slate-100 bg-white">
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

          {/* Key Growth Metrics Callout - Borderless & Blended */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-10 border-t border-slate-100 max-w-4xl mx-auto text-center">
            <div className="py-2">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">2.55×</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1.5">4-Year Expansion</div>
            </div>
            <div className="py-2">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">+67.2%</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1.5">FY 25–26 Surge</div>
            </div>
            <div className="py-2">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">₹97 Cr</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1.5">Annual Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pan-India Presence & Network Topology - Blended Background (No Cards) */}
      <section className="py-20 md:py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-industrial-blue font-semibold mb-2 block">
              Pan-India Distribution Hubs
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">Network Topology</h2>
            <p className="text-slate-500 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Strategic warehousing and centralized routing infrastructure connecting India&apos;s key industrial manufacturing corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Clean India Vector Map - Borderless & Blended */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center p-2 md:p-4">
              <IndiaMap className="w-full" />
            </div>

            {/* Distribution Nodes Details - Clean Editorial Style (No Cards/Borders) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Mumbai HQ */}
              <div className="py-5 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-industrial-blue flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">apartment</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-slate-900">Mumbai HQ</h3>
                      <span className="text-industrial-blue text-xs font-mono font-semibold uppercase tracking-wider">
                        Headquarters
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-1.5">Mulund West, Maharashtra 400080</p>
                    <p className="text-xs text-slate-500 leading-relaxed mb-2.5">
                      Corporate headquarters, centralized trading desk, finance and key account logistics coordination.
                    </p>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                      <span>LAT 19.0760</span>
                      <span className="text-slate-300">/</span>
                      <span>LON 72.8777</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bhiwandi Hub */}
              <div className="py-5 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 text-chemical-green flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">warehouse</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-slate-900">Bhiwandi Hub</h3>
                      <span className="text-chemical-green text-xs font-mono font-semibold uppercase tracking-wider">
                        Primary Warehouse
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-1.5">HAZ-Category Chemical Facility</p>
                    <p className="text-xs text-slate-500 leading-relaxed mb-2.5">
                      40,000+ sq.ft. certified chemical warehousing, bulk storage tanks, repacking units, and batch testing lab.
                    </p>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                      <span>LAT 19.2813</span>
                      <span className="text-slate-300">/</span>
                      <span>LON 73.0483</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Planned Expansion */}
              <div className="py-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">explore</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-slate-700">Planned Expansion</h3>
                      <span className="text-slate-500 text-xs font-mono font-semibold uppercase tracking-wider">
                        Coming Soon
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700 mb-1">Vapi · Bangalore · Hyderabad · Kolkata</p>
                    <p className="text-xs text-slate-500 leading-relaxed mb-2.5">
                      Active expansion into dedicated regional inventory hubs covering western, southern, and eastern industrial belts.
                    </p>
                    <div className="text-xs font-mono text-slate-400">
                      VAPI / BLR / HYD / CCU
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
