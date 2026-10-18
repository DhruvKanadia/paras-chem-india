'use client';

import React, { useState, useMemo, Suspense, useEffect } from 'react';
import { products, categories } from '@/data/products';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);

  // Sync category filter from URL and ensure page starts at top
  useEffect(() => {
    setSelectedCategory(categoryParam);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [categoryParam]);

  // Process data based on search query
  const processedData = useMemo(() => {
    let result = products;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.casNumber && p.casNumber.toLowerCase().includes(q)) ||
        (p.formula && p.formula.toLowerCase().includes(q))
      );
    }
    return result;
  }, [searchQuery]);

  // Categories for the "All Products" 6-column directory overview
  const allCats = categories.filter(c => c.slug !== 'other-items');
  const topCategories = allCats.map(cat => ({
    ...cat,
    products: processedData.filter(p => p.categorySlug === cat.slug)
  }));

  // Sort descending by product count
  const sortedCategories = useMemo(() => {
    return [...topCategories].sort((a, b) => b.products.length - a.products.length);
  }, [topCategories]);

  const bottomCategory = categories.find(c => c.slug === 'other-items');
  const bottomCategoryProducts = bottomCategory ? processedData.filter(p => p.categorySlug === bottomCategory.slug) : [];

  // When a specific category is filtered
  const activeCategory = selectedCategory ? categories.find(c => c.slug === selectedCategory) : null;
  const filteredProducts = selectedCategory ? processedData.filter(p => p.categorySlug === selectedCategory) : [];

  return (
    <div className="bg-white min-h-screen font-sans">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}} />

      {/* Hero Section - Compact Height */}
      <section className="relative bg-slate-dark text-white pt-8 pb-8 md:pt-10 md:pb-10 px-4 overflow-hidden text-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-dark to-transparent"></div>

        <div className="w-full max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 animate-fade-in-up tracking-tight text-center">
            The Product <span className="text-slate-500">Index.</span>
          </h1>

          {/* Search Bar */}
          <div className="w-full max-w-xl mx-auto relative animate-fade-in-up group" style={{ animationDelay: '0.1s' }}>
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-white transition-colors">search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across all categories, chemicals..."
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-2.5 rounded-full shadow-md focus:outline-none focus:bg-white/10 focus:border-white/30 backdrop-blur-md transition-all pl-11 text-sm placeholder:text-slate-400"
            />
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <div className="sticky top-[64px] md:top-[80px] z-30 bg-white border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !selectedCategory
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Products
            </button>
            {categories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug === selectedCategory ? null : cat.slug)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-industrial-blue text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Catalog Section */}
      <section className="relative pb-32 px-4 sm:px-6 md:px-8 max-w-[1600px] mx-auto w-full pt-8">
        
        {/* VIEW 1: DEDICATED FULL-WIDTH GRID WHEN A CATEGORY IS FILTERED */}
        {selectedCategory ? (
          <div className="animate-fade-in-up">
            {/* Filtered Category Header */}
            <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                {activeCategory?.name || selectedCategory}
              </h2>

              <button
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-industrial-blue transition-colors px-4 py-2 rounded-full border border-slate-200 hover:border-slate-300 bg-white shadow-xs"
              >
                <span className="material-symbols-outlined text-base">apps</span>
                <span>View All Categories</span>
              </button>
            </div>

            {/* Filtered Products Grid - Clean Card Theme without CAS/Formula */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Product Name */}
                      <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-industrial-blue transition-colors mb-2">
                        {product.name}
                      </h3>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-industrial-blue mt-4">
                      <span>View Specifications</span>
                      <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-industrial-blue group-hover:text-white flex items-center justify-center transition-colors">
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-slate-300 mb-3">search_off</span>
                <h3 className="text-lg font-bold text-slate-800 mb-1">No matching chemicals found</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto mb-5 font-light">
                  No products in &quot;{activeCategory?.name}&quot; match your search &quot;{searchQuery}&quot;.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-semibold text-industrial-blue bg-blue-50 hover:bg-blue-100 px-5 py-2.5 rounded-full transition-colors"
                >
                  Clear Search Filter
                </button>
              </div>
            )}
          </div>
        ) : (
          /* VIEW 2: 6-COLUMN DIRECTORY OVERVIEW WHEN ALL PRODUCTS ARE SELECTED */
          <div>
            {/* TOP ROW: 6-Column Descending Overview */}
            {sortedCategories.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-12 items-start">
                {sortedCategories.map((cat, i) => (
                  <div
                    key={cat.slug}
                    className="bg-white border border-slate-200 rounded-2xl shadow-xs flex flex-col animate-fade-in-up hover:border-slate-300 hover:shadow-md transition-all duration-300 overflow-hidden"
                    style={{ animationDelay: `${0.05 * i}s` }}
                  >
                    {/* Header (clickable to filter) */}
                    <button
                      onClick={() => setSelectedCategory(cat.slug)}
                      className="w-full bg-slate-50/70 p-4 border-b border-slate-100 flex items-center justify-between text-left hover:bg-blue-50/40 transition-colors group cursor-pointer"
                    >
                      <h2 className="text-sm font-bold text-slate-900 group-hover:text-industrial-blue transition-colors">
                        {cat.name}
                      </h2>
                      <span className="text-[11px] font-mono text-slate-400">
                        {cat.products.length}
                      </span>
                    </button>

                    {/* Product List without CAS/Formula */}
                    <div className="p-3 space-y-1">
                      {cat.products.length > 0 ? (
                        cat.products.map(product => (
                          <Link
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <h3 className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-industrial-blue transition-colors">
                              {product.name}
                            </h3>
                          </Link>
                        ))
                      ) : (
                        <div className="text-slate-400 py-6 text-center text-xs font-light">
                          No matches.
                        </div>
                      )}
                    </div>

                    {/* Card Footer Button */}
                    <button
                      onClick={() => setSelectedCategory(cat.slug)}
                      className="w-full py-2.5 px-3 border-t border-slate-100 text-xs font-semibold text-industrial-blue hover:bg-slate-50 transition-colors flex items-center justify-center gap-1 mt-auto"
                    >
                      <span>Explore All {cat.products.length}</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* BOTTOM ROW: General Chemicals / Other Items without CAS/Formula */}
            {bottomCategory && (
              <div
                className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden flex flex-col md:flex-row mt-6 hover:border-slate-300 hover:shadow-md transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="bg-slate-50/70 p-6 md:w-60 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col items-center justify-center text-center">
                  <h2 className="text-lg font-bold text-slate-900 mb-1">
                    {bottomCategory.name}
                  </h2>
                  <div className="text-xs font-mono text-slate-400 mb-4">
                    {bottomCategoryProducts.length} Products
                  </div>
                  <button
                    onClick={() => setSelectedCategory(bottomCategory.slug)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-industrial-blue hover:underline"
                  >
                    <span>View Dedicated Grid</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>

                <div className="flex-1 p-5 md:p-6">
                  {bottomCategoryProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                      {bottomCategoryProducts.map(product => (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <h3 className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-industrial-blue transition-colors truncate" title={product.name}>
                            {product.name}
                          </h3>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-slate-400 py-6 text-sm font-light text-center">
                      No matches found in this category.
                    </div>
                  )}
                </div>
              </div>
            )}
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
