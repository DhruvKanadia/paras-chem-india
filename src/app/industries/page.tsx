import React from 'react';
import { industries } from '@/data/industries';
import IndustryCard from '@/components/IndustryCard';
import Link from 'next/link';

export const metadata = {
  title: 'Sectors We Engineer For | Paras Chem',
};

export default function IndustriesPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
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
      <section className="relative bg-slate-dark text-white pt-32 pb-24 md:pt-40 md:pb-32 px-margin-page overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-dark to-transparent"></div>
        
        <div className="max-w-container-max mx-auto relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in-up tracking-tighter">
            Sectors We<br/><span className="text-slate-400">Engineer For.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl animate-fade-in-up font-light leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Delivering specialized chemical architectures and raw materials designed for high-performance industrial applications.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 md:py-32 px-margin-page bg-slate-50 relative -mt-10 rounded-t-[3rem] z-20">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <div key={industry.slug} className="animate-fade-in-up" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                <IndustryCard
                  slug={industry.slug}
                  name={industry.name}
                  icon={industry.icon}
                  description={industry.description}
                  chemicalCount={industry.chemicals.length}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-dark py-32 px-margin-page border-y border-slate-900">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="text-center lg:text-left">
              <div className="text-7xl font-bold text-white mb-4 tracking-tighter">27+</div>
              <div className="text-slate-400 text-lg uppercase tracking-widest font-semibold">Years of Excellence</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-7xl font-bold text-white mb-4 tracking-tighter">100+</div>
              <div className="text-slate-400 text-lg uppercase tracking-widest font-semibold">Engineered Products</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-7xl font-bold text-white mb-4 tracking-tighter">7</div>
              <div className="text-slate-400 text-lg uppercase tracking-widest font-semibold">Core Industries</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-7xl font-bold text-white mb-4 tracking-tighter">100%</div>
              <div className="text-slate-400 text-lg uppercase tracking-widest font-semibold">Pan-India Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-100 py-32 px-margin-page text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-900 tracking-tighter">Require Custom Formulation?</h2>
          <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto">
            Our R&D division engineers bespoke chemical solutions precisely tuned to your manufacturing parameters.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-slate-900 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 shadow-xl">
            Consult Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
