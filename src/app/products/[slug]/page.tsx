import React from 'react';
import { products, categories } from '@/data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductEnquiryForm from './ProductEnquiryForm';

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  return {
    title: product ? `${product.name} | Paras Chem` : 'Product Not Found'
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }

  const category = categories.find(c => c.slug === product.categorySlug);

  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-surface-gray border-b border-border-subtle py-12 px-margin-page">
        <div className="max-w-container-max mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link href={`/products?category=${product.categorySlug}`} className="text-body-sm text-industrial-blue hover:underline font-medium">
              {category?.name || product.categorySlug}
            </Link>
            <span className="bg-chemical-green/10 text-chemical-green px-2 py-1 rounded text-label-sm font-bold uppercase tracking-wider">
              {product.status || 'In Stock'}
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-display mb-4 text-on-surface">{product.name}</h1>
              <div className="flex gap-6 font-label-md text-on-surface-variant">
                <span>CAS: {product.casNumber}</span>
                <span>Formula: {product.formula}</span>
              </div>
            </div>
            <Link href="/contact" className="bg-industrial-blue text-on-primary px-6 py-3 rounded hover:bg-blue-700 transition-colors inline-block text-center font-medium">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-container-max mx-auto px-margin-page mt-12">
        <div className="grid lg:grid-cols-12 gap-gutter">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Product Overview */}
            <section>
              <h2 className="font-headline-lg mb-4">Product Overview</h2>
              <p className="text-body-lg text-on-surface-variant mb-8">{product.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-surface p-4 rounded border border-border-subtle">
                  <span className="block text-label-sm text-on-surface-variant mb-1 uppercase">Purity</span>
                  <span className="font-medium text-on-surface">{product.purity || 'Standard'}</span>
                </div>
                <div className="bg-surface p-4 rounded border border-border-subtle">
                  <span className="block text-label-sm text-on-surface-variant mb-1 uppercase">Form</span>
                  <span className="font-medium text-on-surface">{product.form || 'Solid/Liquid'}</span>
                </div>
                <div className="bg-surface p-4 rounded border border-border-subtle">
                  <span className="block text-label-sm text-on-surface-variant mb-1 uppercase">Packaging</span>
                  <span className="font-medium text-on-surface">{product.packaging || 'Multiple'}</span>
                </div>
                <div className="bg-surface p-4 rounded border border-border-subtle">
                  <span className="block text-label-sm text-on-surface-variant mb-1 uppercase">Origin</span>
                  <span className="font-medium text-on-surface">{product.origin || 'India'}</span>
                </div>
              </div>
            </section>

            {/* Technical Specifications */}
            {product.specifications && product.specifications.length > 0 && (
              <section>
                <h2 className="font-headline-lg mb-6">Technical Specifications</h2>
                <div className="overflow-x-auto rounded border border-border-subtle">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-dark text-white">
                        <th className="py-3 px-4 font-medium text-body-md border-b border-slate-dark">Property</th>
                        <th className="py-3 px-4 font-medium text-body-md border-b border-slate-dark">Value</th>
                        <th className="py-3 px-4 font-medium text-body-md border-b border-slate-dark">Unit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specifications.map((spec, i) => (
                        <tr key={i} className="border-b border-border-subtle last:border-0 hover:bg-surface-gray">
                          <td className="py-3 px-4 text-body-md text-on-surface font-medium">{spec.property}</td>
                          <td className="py-3 px-4 text-body-md text-on-surface-variant">{spec.value}</td>
                          <td className="py-3 px-4 text-body-md text-on-surface-variant">{spec.unit || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Applications & Industries */}
            {product.applications && product.applications.length > 0 && (
              <section>
                <h2 className="font-headline-lg mb-6">Applications & Industries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.applications.map((app, i) => {
                    const cardContent = (
                      <div className="p-6 rounded border border-border-subtle bg-white h-full hover:border-industrial-blue transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="material-symbols-outlined text-industrial-blue">{app.icon || 'science'}</span>
                          <h3 className="font-headline-md">{app.title}</h3>
                        </div>
                        <p className="text-body-md text-on-surface-variant">{app.description}</p>
                      </div>
                    );

                    if (app.industrySlug) {
                      return (
                        <Link key={i} href={`/industries/${app.industrySlug}`} className="block">
                          {cardContent}
                        </Link>
                      );
                    }
                    return <div key={i}>{cardContent}</div>;
                  })}
                </div>
              </section>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-surface-gray p-6 rounded border border-border-subtle sticky top-24">
              <h3 className="font-headline-md mb-4 border-b border-border-subtle pb-4">Quick Enquiry</h3>
              <ProductEnquiryForm productSlug={product.slug} productName={product.name} />
            </div>

            <div className="p-6 rounded border border-border-subtle bg-white">
              <h3 className="font-headline-md mb-4">Documents</h3>
              <ul className="space-y-3">
                <li>
                  <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/919326772266?text=${encodeURIComponent(`Hi, I would like to request the Safety Data Sheet (SDS) for ${product.name}. Please share it.`)}`} className="flex items-center gap-3 p-3 rounded border border-border-subtle hover:bg-surface-gray transition-colors group">
                    <span className="material-symbols-outlined text-industrial-blue">picture_as_pdf</span>
                    <span className="text-body-md flex-1 group-hover:text-industrial-blue">Request via WhatsApp</span>
                    <span className="material-symbols-outlined text-border-subtle group-hover:text-industrial-blue">chat</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/919326772266?text=${encodeURIComponent(`Hi, I would like to request the Technical Data Sheet (TDS) for ${product.name}. Please share it.`)}`} className="flex items-center gap-3 p-3 rounded border border-border-subtle hover:bg-surface-gray transition-colors group">
                    <span className="material-symbols-outlined text-industrial-blue">description</span>
                    <span className="text-body-md flex-1 group-hover:text-industrial-blue">Request via WhatsApp</span>
                    <span className="material-symbols-outlined text-border-subtle group-hover:text-industrial-blue">chat</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/919326772266?text=${encodeURIComponent(`Hi, I would like to request the Certificate of Analysis for ${product.name}. Please share it.`)}`} className="flex items-center gap-3 p-3 rounded border border-border-subtle hover:bg-surface-gray transition-colors group">
                    <span className="material-symbols-outlined text-chemical-green">verified</span>
                    <span className="text-body-md flex-1 group-hover:text-chemical-green">Request via WhatsApp</span>
                    <span className="material-symbols-outlined text-border-subtle group-hover:text-chemical-green">chat</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
