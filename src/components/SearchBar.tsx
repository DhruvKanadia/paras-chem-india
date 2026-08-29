'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ onSearch, placeholder = 'Search by chemical name or CAS...', className = '' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const filteredProducts = query.trim() === '' 
    ? [] 
    : products.filter(p => {
        const q = query.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCas = (p.casNumber || '').toLowerCase().includes(q);
        return matchesName || matchesCas;
      }).slice(0, 5);

  const handleBlur = () => {
    // Timeout allows click event on dropdown items to fire before hiding
    setTimeout(() => setShowDropdown(false), 200);
  };

  return (
    <div className={`relative flex ${className}`} ref={containerRef}>
      <div className="relative flex-1 group">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
          manage_search
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          onBlur={handleBlur}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
              setShowDropdown(false);
            }
          }}
          placeholder={placeholder}
          className="block w-full pl-12 pr-4 py-3 border-2 border-border-subtle rounded-l focus:border-industrial-blue focus:ring-0 outline-none text-body-md transition-colors"
        />
        
        {showDropdown && filteredProducts.length > 0 && query.trim() !== '' && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border-subtle rounded shadow-lg z-50 overflow-hidden">
            <div className="px-4 py-2 bg-surface-gray border-b text-label-sm uppercase tracking-wider text-on-surface-variant">
              Suggestions
            </div>
            <ul>
              {filteredProducts.map(product => (
                <li key={product.slug} className="border-b last:border-0 hover:bg-surface-gray transition-colors">
                  <Link href={`/products/${product.slug}`} className="px-4 py-3 flex justify-between items-center w-full">
                    <div className="flex flex-col">
                      <span className="text-body-sm font-medium text-on-surface">{product.name}</span>
                    </div>
                    <span className="bg-surface-container px-2 py-1 rounded text-label-sm text-industrial-blue font-bold whitespace-nowrap ml-4">
                      CAS: {product.casNumber || 'N/A'}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <button
        onClick={handleSearch}
        className="bg-industrial-blue text-on-primary px-6 py-3 rounded-r font-label-md border-2 border-industrial-blue border-l-0 flex items-center gap-2 hover:bg-industrial-blue/90 transition-colors"
      >
        Search
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );
}
