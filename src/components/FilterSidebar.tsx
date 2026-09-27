'use client';

import { categories, products } from '@/data/products';

interface FilterSidebarProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  resultCount: number;
}

const categoryDotColors: Record<string, string> = {
  'soaps-and-detergent': 'bg-blue-500',
  'textile-industry': 'bg-purple-500',
  'food-industry': 'bg-orange-500',
  'oil-field': 'bg-amber-600',
  'plastic-industry': 'bg-teal-500',
  'pharma-industry': 'bg-emerald-500',
  'other-items': 'bg-slate-500',
};

export default function FilterSidebar({ selectedCategories, onCategoryChange, resultCount }: FilterSidebarProps) {
  
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const categoryCounts = products.reduce((acc, product) => {
    acc[product.categorySlug] = (acc[product.categorySlug] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="w-full space-y-6">
      <div className="bg-white border border-border-subtle rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-2 font-bold border-b border-border-subtle pb-3 mb-5 text-on-surface">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>filter_alt</span>
          Filters
          <span className="ml-auto font-normal text-label-sm text-on-surface-variant bg-surface-gray px-2 py-1 rounded-full border border-border-subtle">
            {resultCount} {resultCount === 1 ? 'result' : 'results'}
          </span>
        </div>
        
        <div className="mb-2">
          <h3 className="text-label-md uppercase tracking-wider text-on-surface-variant mb-4 font-semibold">Category</h3>
          <div className="space-y-3">
            {categories.map((cat: { slug: string; name: string }) => {
              const categorySlug = cat.slug;
              const categoryName = cat.name;
              const isChecked = selectedCategories.includes(categorySlug);
              const count = categoryCounts[categorySlug] || 0;
              const dotColor = categoryDotColors[categorySlug] || 'bg-slate-500';

              return (
                <label key={categorySlug} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCategoryToggle(categorySlug)}
                    className="w-4 h-4 rounded border-border-subtle text-industrial-blue focus:ring-industrial-blue cursor-pointer"
                  />
                  <div className="flex items-center gap-2 flex-1">
                    <span className={`w-2.5 h-2.5 rounded-full ${dotColor}`}></span>
                    <span className={`text-body-sm transition-colors group-hover:text-industrial-blue flex-1 ${isChecked ? 'text-industrial-blue font-medium' : 'text-on-surface'}`}>
                      {categoryName} <span className="text-on-surface-variant text-sm opacity-80 font-normal">({count})</span>
                    </span>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
