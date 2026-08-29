import React from 'react';
import { industries, secondarySectors } from '@/data/industries';
import IndustryCard from '@/components/IndustryCard';
import Link from 'next/link';

export const metadata = {
  title: 'Industries We Serve | Paras Chem',
};

export default function IndustriesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-dark text-on-primary py-20 md:py-28 px-margin-page">
        <div className="max-w-container-max mx-auto text-center">
          <h1 className="font-display text-display mb-6">Chemical Solutions for Global Industrial Success.</h1>
          <p className="text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            From textiles to pharmaceuticals, we provide specialized chemical formulations and raw materials tailored to meet the exacting standards of diverse industries.
          </p>
        </div>
      </section>

      {/* Primary Industries Grid */}
      <section className="py-24 px-margin-page">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-on-surface mb-4">Core Industries</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Discover our comprehensive range of specialized chemicals for key industrial sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.slug}
                slug={industry.slug}
                name={industry.name}
                icon={industry.icon}
                description={industry.description}
                chemicalCount={industry.chemicals.length}
              />
            ))}
          </div>

          {/* Secondary Sectors */}
          <div className="mt-24 pt-16 border-t border-border-subtle">
            <h3 className="font-headline-md text-on-surface mb-6 text-center">Additional Sectors We Support</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {secondarySectors.map((sector, index) => (
                <div 
                  key={index} 
                  className="bg-surface-gray border border-border-subtle rounded px-4 py-2 flex items-center gap-2 text-body-sm text-on-surface-variant hover:border-industrial-blue transition-colors cursor-default"
                >
                  <span className="material-symbols-outlined text-sm text-industrial-blue">{sector.icon || 'category'}</span>
                  <span>{sector.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-gray border-t border-border-subtle py-16 px-margin-page text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline-lg mb-4">Custom Formulation Required?</h2>
          <p className="text-body-lg text-on-surface-variant mb-8">
            Don&apos;t see your specific industry listed? Our R&D team can develop custom chemical solutions tailored to your unique manufacturing requirements.
          </p>
          <Link href="/contact" className="inline-block bg-industrial-blue text-on-primary px-8 py-3 rounded font-medium hover:bg-blue-700 transition-colors">
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
