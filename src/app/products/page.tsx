'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import FilterSidebar from '@/components/FilterSidebar';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name_asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [categoryParam]);



  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery('');
    setCurrentPage(1);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = products;

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.categorySlug));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        p => p.name.toLowerCase().includes(query) || p.casNumber.toLowerCase().includes(query)
      );
    }

    result = [...result].sort((a, b) => {
      if (sortBy === 'name_asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name_desc') return b.name.localeCompare(a.name);
      if (sortBy === 'category') return a.categorySlug.localeCompare(b.categorySlug);
      return 0;
    });

    return result;
  }, [selectedCategories, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="px-margin-page py-12 max-w-container-max mx-auto">
      <nav className="text-body-sm text-on-surface-variant mb-8">
        <Link href="/" className="hover:text-industrial-blue">Home</Link>
        <span className="mx-2">&gt;</span>
        <span className="text-on-surface">Products</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-gutter">
        <aside className="w-full md:w-64 shrink-0">
          <FilterSidebar
            selectedCategories={selectedCategories}
            onCategoryChange={setSelectedCategories}
            resultCount={filteredAndSortedProducts.length}
          />
        </aside>

        <main className="flex-1">
          <header className="mb-8">
            <h1 className="font-display text-display mb-4">Chemical Product Catalog</h1>
            <p className="text-body-lg text-on-surface-variant">Browse our comprehensive range of high-quality industrial chemicals.</p>
          </header>

          <div className="mb-6">
            <SearchBar onSearch={(query) => { setSearchQuery(query); setCurrentPage(1); }} />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-border-subtle">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-body-sm text-on-surface-variant">{filteredAndSortedProducts.length} Results</span>
              {selectedCategories.length > 0 && (
                <>
                  <span className="mx-2 text-border-subtle">|</span>
                  {selectedCategories.map(cat => (
                    <span key={cat} className="flex items-center gap-1 bg-surface-gray px-3 py-1 rounded-full text-body-sm border border-border-subtle">
                      {categories.find(c => c.slug === cat)?.name || cat}
                      <button onClick={() => setSelectedCategories(prev => prev.filter(c => c !== cat))} className="material-symbols-outlined text-sm hover:text-industrial-blue">close</button>
                    </span>
                  ))}
                  <button onClick={clearFilters} className="text-body-sm text-industrial-blue hover:underline ml-2">Clear All</button>
                </>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-body-sm text-on-surface-variant">Sort by:</label>
              <select 
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-border-subtle rounded px-3 py-1 text-body-sm bg-white"
              >
                <option value="name_asc">Name A-Z</option>
                <option value="name_desc">Name Z-A</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>

          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {paginatedProducts.map(product => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-surface-gray rounded border border-border-subtle mb-12">
              <p className="text-body-lg text-on-surface-variant">No products found matching your criteria.</p>
              <button onClick={clearFilters} className="mt-4 text-industrial-blue hover:underline">Clear all filters</button>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded flex items-center justify-center text-body-sm transition-colors ${
                    currentPage === i + 1 
                      ? 'bg-industrial-blue text-on-primary' 
                      : 'border border-border-subtle hover:border-industrial-blue text-on-surface'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <title>Products | Paras Chem</title>
      <Suspense fallback={<div className="p-20 text-center">Loading products...</div>}>
        <ProductsContent />
      </Suspense>
    </>
  );
}
