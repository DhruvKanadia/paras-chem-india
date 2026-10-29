import React from 'react';
import { industries } from '@/data/industries';
import IndustryCard from '@/components/IndustryCard';
import Link from 'next/link';

export const metadata = {
  title: 'Sectors We Engineer For | Paras Chem',
};

export default function IndustriesPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}} />
      
      {/* Hero Section */}
      <section className="relative bg-slate-dark text-white pt-8 pb-8 md:pt-12 md:pb-10 px-6 md:px-margin-page overflow-hidden text-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-dark to-transparent"></div>
        
        <div className="max-w-3xl mx-auto relative z-10 text-center flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2.5 animate-fade-in-up tracking-tight text-center">
            Sectors We <span className="text-slate-400">Engineer For.</span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto animate-fade-in-up font-light leading-relaxed text-center" style={{ animationDelay: '0.1s' }}>
            Delivering specialized chemical architectures and raw materials designed for high-performance industrial applications.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="pt-10 pb-20 md:pt-14 md:pb-28 px-6 md:px-margin-page bg-white relative z-20">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {industries
              .filter((industry) => industry.slug !== 'other-items')
              .map((industry, i) => (
                <div key={industry.slug} className="animate-fade-in-up" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
                  <IndustryCard
                    name={industry.name}
                    description={industry.description}
                    image={industry.image}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-dark py-20 md:py-28 px-4 md:px-margin-page border-y border-slate-900">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="text-center flex flex-col items-center justify-center">
              <div className="text-6xl md:text-7xl font-bold text-white mb-3 tracking-tighter">27+</div>
              <div className="text-slate-400 text-sm md:text-base uppercase tracking-widest font-semibold">Years of Excellence</div>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div className="text-6xl md:text-7xl font-bold text-white mb-3 tracking-tighter">100+</div>
              <div className="text-slate-400 text-sm md:text-base uppercase tracking-widest font-semibold">Engineered Products</div>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div className="text-6xl md:text-7xl font-bold text-white mb-3 tracking-tighter">6</div>
              <div className="text-slate-400 text-sm md:text-base uppercase tracking-widest font-semibold">Core Industries</div>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div className="text-6xl md:text-7xl font-bold text-white mb-3 tracking-tighter">100%</div>
              <div className="text-slate-400 text-sm md:text-base uppercase tracking-widest font-semibold">Pan-India Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 border-t border-slate-100 py-24 md:py-28 px-4 md:px-margin-page text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tighter">Require Custom Formulation?</h2>
          <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Our R&D division engineers bespoke chemical solutions precisely tuned to your manufacturing parameters.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-slate-900 text-white px-9 py-4 rounded-full font-semibold text-base hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300 shadow-md">
            Consult Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
