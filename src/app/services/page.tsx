import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Paras Chem India',
}

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto text-center flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-8 text-center">
            End-to-End <br /> Distribution.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed tracking-tight text-center">
            We don't just move chemicals. We engineer the entire supply chain—from global procurement and strict quality assurance to seamless pan-India logistics. 
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Service 1: Large Card */}
          <div className="lg:col-span-2 bg-slate-50 rounded-[2rem] p-12 lg:p-16 border border-slate-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-shadow duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10 font-bold text-[12rem] leading-none tracking-tighter -mt-12 -mr-8 group-hover:scale-105 transition-transform duration-700">01</div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-4xl lg:text-6xl font-medium tracking-tight mb-6 text-center">Logistics & Warehousing</h2>
              <p className="text-slate-500 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-12 text-center">
                Our infrastructure is built for scale and safety. With a dedicated hazardous materials fleet and specialized storage facilities, we ensure your materials arrive securely and on time.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 border-t border-slate-200 pt-8 w-full">
                <div className="text-center">
                  <div className="text-3xl font-medium tracking-tight text-slate-900 mb-1 text-center">5</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-widest text-center">Dedicated HAZ-Category<br/>Warehouses in Bhiwandi</div>
                </div>
                <div className="hidden sm:block w-px bg-slate-200 h-12"></div>
                <div className="text-center">
                  <div className="text-3xl font-medium tracking-tight text-slate-900 mb-1 text-center">100%</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-widest text-center">Pan-India Logistics<br/>Coverage</div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-slate-50 rounded-[2rem] p-12 border border-slate-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-shadow duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 font-bold text-[8rem] leading-none tracking-tighter -mt-8 -mr-4 group-hover:scale-105 transition-transform duration-700">02</div>
            <div className="relative z-10 h-full flex flex-col items-center text-center">
              <h2 className="text-3xl lg:text-5xl font-medium tracking-tight mb-6 text-center">Import & Export</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-auto text-center">
                Navigating global chemical trade with precision. We handle complex cross-border compliance, DGFT licensing, and port-to-door logistics without friction.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-slate-50 rounded-[2rem] p-12 border border-slate-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-shadow duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 font-bold text-[8rem] leading-none tracking-tighter -mt-8 -mr-4 group-hover:scale-105 transition-transform duration-700">03</div>
            <div className="relative z-10 h-full flex flex-col items-center text-center">
              <h2 className="text-3xl lg:text-5xl font-medium tracking-tight mb-6 text-center">Quality Assurance</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-auto text-center">
                Every batch is rigorously tested. Our state-of-the-art QA labs ensure zero compromises on purity, consistency, and international standards.
              </p>
            </div>
          </div>

          {/* Service 4: Large Card */}
          <div className="lg:col-span-2 bg-slate-dark text-white rounded-[2rem] p-12 lg:p-16 border border-slate-800 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-shadow duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 font-bold text-[12rem] leading-none tracking-tighter -mt-12 -mr-8 group-hover:scale-105 transition-transform duration-700 text-white">04</div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-4xl lg:text-6xl font-medium tracking-tight mb-6 text-center">Custom Formulations</h2>
              <p className="text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-12 text-center">
                Beyond distribution, we offer highly tailored chemical formulations. Partner with our technical experts to develop bespoke solutions engineered specifically for your manufacturing processes.
              </p>
              
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-colors mx-auto">
                Consult with our Experts
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
