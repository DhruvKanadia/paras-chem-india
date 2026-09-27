'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { products, categories } from '@/data/products';
import Link from 'next/link';

function ProductsContent() {
  const [searchQuery, setSearchQuery] = useState('');

  // Process data based on search
  const processedData = useMemo(() => {
    let result = products;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        (p.casNumber && p.casNumber.toLowerCase().includes(q))
      );
    }
    return result;
  }, [searchQuery]);

  // Split categories: the first 6 are vertical columns, the 7th is the horizontal bottom one.
  const topCategories = categories.filter(c => c.slug !== 'other-items').map(cat => ({
    ...cat,
    products: processedData.filter(p => p.categorySlug === cat.slug)
  }));
  
  const bottomCategory = categories.find(c => c.slug === 'other-items');
  const bottomCategoryProducts = bottomCategory ? processedData.filter(p => p.categorySlug === bottomCategory.slug) : [];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}} />

      {/* Shorter Hero Section */}
      <section className="relative bg-slate-dark text-white pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-dark to-transparent"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up tracking-tighter">
            The Product <span className="text-slate-500">Index.</span>
          </h1>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative animate-fade-in-up group" style={{ animationDelay: '0.1s' }}>
            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 text-xl group-focus-within:text-white transition-colors">search</span>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all categories..."
              className="w-full bg-white/5 border border-white/10 text-white px-5 py-3 rounded-full shadow-lg focus:outline-none focus:bg-white/10 focus:border-white/30 backdrop-blur-md transition-all pl-12 placeholder:text-slate-500"
            />
          </div>
        </div>
      </section>

      {/* Grid Layout Section */}
      <section className="relative -mt-12 z-20 pb-32 px-4 max-w-[1600px] mx-auto w-full">
        
        {/* TOP ROW: Vertical Cards (Grid of 6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-4 items-start">
          {topCategories.map((cat, i) => (
            <div 
              key={cat.slug} 
              className="bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col animate-fade-in-up hover:border-slate-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${0.1 + (i * 0.05)}s` }}
            >
              {/* Card Header */}
              <div className="bg-slate-50 p-5 border-b border-slate-100 flex flex-col">
                <h2 className="text-lg font-bold text-slate-900 leading-tight mb-1">{cat.name}</h2>
                <div className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
                  {cat.products.length} Products
                </div>
              </div>

              {/* Card Product List (No Internal Scrolling) */}
              <div className="flex-1 p-3 space-y-1">
                {cat.products.length > 0 ? (
                  cat.products.map(product => (
                    <Link 
                      key={product.slug} 
                      href={`/products/${product.slug}`}
                      className="group flex flex-col p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                    >
                      <h3 className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-slate-600 transition-colors">{product.name}</h3>
                    </Link>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center text-slate-400 p-4 text-center py-10">
                    <span className="material-symbols-outlined text-2xl mb-2 opacity-30">search_off</span>
                    <p className="text-xs">No matches.</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW: Horizontal Card for General Chemicals */}
        {bottomCategory && (
          <div 
            className="bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col md:flex-row animate-fade-in-up hover:border-slate-300 hover:shadow-lg transition-all duration-300 overflow-hidden mt-6"
            style={{ animationDelay: '0.5s' }}
          >
            {/* Header / Sidebar for Bottom Card */}
            <div className="bg-slate-50 p-6 md:w-64 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-slate-900 leading-tight mb-2">{bottomCategory.name}</h2>
              <div className="inline-flex px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-mono text-slate-400 tracking-wider uppercase self-start">
                {bottomCategoryProducts.length} Products
              </div>
            </div>

            {/* List for Bottom Card (No Internal Scrolling) */}
            <div className="flex-1 p-4 md:p-6">
              {bottomCategoryProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                  {bottomCategoryProducts.map(product => (
                    <Link 
                      key={product.slug} 
                      href={`/products/${product.slug}`}
                      className="group flex flex-col p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                    >
                      <h3 className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-slate-600 transition-colors truncate" title={product.name}>{product.name}</h3>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                  <span className="material-symbols-outlined text-3xl mb-2 opacity-30">search_off</span>
                  <p className="text-sm">No matches found in this category.</p>
                </div>
              )}
            </div>
          </div>
        )}

      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <title>The Product Index | Paras Chem</title>
      <Suspense fallback={<div className="min-h-screen bg-slate-dark flex items-center justify-center text-white/50 font-mono text-sm tracking-widest uppercase">Initializing Catalog...</div>}>
        <ProductsContent />
      </Suspense>
    </>
  );
}
