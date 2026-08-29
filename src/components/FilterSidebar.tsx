'use client';

import { categories } from '@/data/products';

interface FilterSidebarProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  resultCount: number;
}

export default function FilterSidebar({ selectedCategories, onCategoryChange, resultCount }: FilterSidebarProps) {
  
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="bg-white border border-border-subtle rounded p-4">
        <div className="flex items-center gap-2 font-bold border-b border-border-subtle pb-2 mb-4 text-on-surface">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>filter_alt</span>
          Filters
          <span className="ml-auto font-normal text-label-sm text-on-surface-variant bg-surface-gray px-2 py-1 rounded-full">
            {resultCount} {resultCount === 1 ? 'result' : 'results'}
          </span>
        </div>
        
        <div className="mb-6">
          <h3 className="text-label-md uppercase tracking-wider text-on-surface-variant mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((cat: any) => {
              const categoryName = typeof cat === 'string' ? cat : (cat.name || cat.id);
              const isChecked = selectedCategories.includes(categoryName);
              return (
                <label key={categoryName} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCategoryToggle(categoryName)}
                    className="w-4 h-4 rounded border-border-subtle text-industrial-blue focus:ring-industrial-blue cursor-pointer"
                  />
                  <span className={`text-body-sm transition-colors group-hover:text-industrial-blue ${isChecked ? 'text-industrial-blue font-medium' : 'text-on-surface'}`}>
                    {categoryName}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-label-md uppercase tracking-wider text-on-surface-variant mb-3">Industry</h3>
          <div className="relative mb-3">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
              search
            </span>
            <input
              type="text"
              placeholder="Find industry..."
              className="w-full pl-9 pr-3 py-2 border border-border-subtle rounded text-body-sm focus:border-industrial-blue focus:ring-0 outline-none"
            />
          </div>
          <div className="space-y-2">
            {['Agriculture', 'Automotive', 'Construction'].map((industry) => (
              <label key={industry} className="flex items-center gap-3 cursor-pointer group opacity-70">
                <input
                  type="checkbox"
                  disabled
                  className="w-4 h-4 rounded border-border-subtle text-industrial-blue focus:ring-industrial-blue cursor-pointer"
                />
                <span className="text-body-sm text-on-surface">
                  {industry}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
