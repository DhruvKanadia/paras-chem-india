import React from 'react';
import { industries } from '@/data/industries';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return industries.map(ind => ({ slug: ind.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = industries.find(ind => ind.slug === params.slug);
  return {
    title: industry ? `${industry.name} Industry Solutions | Paras Chem` : 'Industry Not Found'
  };
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = industries.find(ind => ind.slug === params.slug);

  if (!industry) {
    notFound();
  }

  return (
    <div>
      {/* Cinematic Hero */}
      <section className="relative bg-slate-950 text-on-primary py-24 md:py-32 px-4 md:px-margin-page overflow-hidden">
        {industry.image && (
          <Image
            src={industry.image}
            alt={industry.name}
            fill
            priority
            className="object-cover opacity-35"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/50"></div>

        <div className="max-w-container-max mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="material-symbols-outlined text-sm">{industry.icon}</span>
            <span>Sector Specialization</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">{industry.name} Solutions</h1>
          <p className="text-body-lg text-slate-300 max-w-3xl leading-relaxed font-light">
            {industry.heroDescription || industry.description}
          </p>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 px-4 md:px-margin-page max-w-container-max mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            {industry.description}
          </p>
        </div>
      </section>

      {/* Core Applications */}
      {industry.applications && industry.applications.length > 0 && (
        <section className="py-16 bg-surface-gray px-4 md:px-margin-page">
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-center mb-12">Core Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {industry.applications.map((app, i) => (
                <div key={i} className="bg-white border border-border-subtle rounded-lg p-8 hover:shadow-sm transition-shadow flex flex-col items-center text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-industrial-blue text-3xl">{app.icon || 'science'}</span>
                    <h3 className="font-headline-md text-center">{app.title}</h3>
                  </div>
                  <p className="text-body-md text-on-surface-variant mb-6 text-center">{app.description}</p>
                  
                  {app.chemicals && app.chemicals.length > 0 && (
                    <div className="w-full">
                      <span className="text-label-sm uppercase text-on-surface-variant block mb-3 font-medium text-center">Key Chemicals</span>
                      <div className="flex flex-wrap justify-center gap-2">
                        {app.chemicals.map((chem, j) => (
                          <span key={j} className="bg-surface px-3 py-1 rounded text-body-sm border border-border-subtle">
                            {chem}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Chemicals Table */}
      {industry.chemicals && industry.chemicals.length > 0 && (
        <section className="py-16 px-4 md:px-margin-page">
          <div className="max-w-container-max mx-auto text-center">
            <h2 className="font-headline-lg mb-8 text-center">Featured Chemical Products</h2>
            <div className="overflow-x-auto rounded border border-border-subtle">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-dark text-white">
                    <th className="py-4 px-6 font-medium text-body-md border-b border-slate-dark">Chemical</th>
                    <th className="py-4 px-6 font-medium text-body-md border-b border-slate-dark">CAS Number</th>
                    <th className="py-4 px-6 font-medium text-body-md border-b border-slate-dark hidden md:table-cell">Application</th>
                    <th className="py-4 px-6 font-medium text-body-md border-b border-slate-dark text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {industry.chemicals.map((chem, i) => (
                    <tr key={i} className="border-b border-border-subtle hover:bg-surface-gray transition-colors">
                      <td className="py-4 px-6 text-body-md font-medium text-on-surface">{chem.name}</td>
                      <td className="py-4 px-6 text-body-md text-on-surface-variant font-mono">{chem.casNumber || '-'}</td>
                      <td className="py-4 px-6 text-body-md text-on-surface-variant hidden md:table-cell">{chem.application || '-'}</td>
                      <td className="py-4 px-6 text-right">
                        {chem.productSlug ? (
                          <Link href={`/products/${chem.productSlug}`} className="text-industrial-blue hover:underline text-body-sm font-medium">
                            View Product
                          </Link>
                        ) : (
                          <Link href="/contact" className="text-on-surface-variant hover:text-industrial-blue hover:underline text-body-sm">
                            Enquire
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Consultation CTA */}
      <section className="bg-industrial-blue text-on-primary py-16 px-4 md:px-margin-page text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <span className="material-symbols-outlined text-5xl mb-4 opacity-80">support_agent</span>
          <h2 className="font-headline-lg mb-4">Need Technical Consultation?</h2>
          <p className="text-body-lg mb-8 text-blue-100">
            Our industry experts can help you select the optimal chemical formulations for your specific manufacturing process.
          </p>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@paraschemindia.com&su=Technical%20Consultation%20-%20Paras%20Chem%20India" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-industrial-blue px-8 py-3 rounded font-medium hover:bg-surface-gray transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined">mail</span>
            Email Our Experts
          </a>
        </div>
      </section>
    </div>
  );
}
