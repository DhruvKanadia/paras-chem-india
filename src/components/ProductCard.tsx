import Link from 'next/link';
import { Product } from '@/data/products';

const borderColors: Record<string, string> = {
  'soaps-and-detergent': 'border-l-blue-500',
  'textile-industry': 'border-l-purple-500',
  'food-industry': 'border-l-orange-500',
  'oil-field': 'border-l-amber-600',
  'plastic-industry': 'border-l-teal-500',
  'pharma-industry': 'border-l-emerald-500',
  'other-items': 'border-l-slate-500',
};

export default function ProductCard({ product }: { product: Product }) {
  const borderColorClass = borderColors[product.categorySlug] || 'border-l-slate-500';

  return (
    <div
      className={`group bg-white rounded-xl border border-border-subtle border-l-4 ${borderColorClass} shadow-sm hover:shadow-md hover:border-r-border-subtle hover:border-y-border-subtle transition-all duration-300 flex flex-col h-full`}
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-surface-gray text-on-surface-variant text-label-sm font-label-sm font-medium rounded-full border border-border-subtle">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-headline-md text-lg font-bold text-on-surface mb-3 group-hover:text-industrial-blue transition-colors">
          {product.name}
        </h3>

        <div className="flex-1 mb-6">
          <p className="text-body-sm text-on-surface-variant line-clamp-2">
            {product.description}
          </p>
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-1 font-label-md text-industrial-blue hover:text-blue-800 transition-colors mt-auto font-medium"
        >
          View Details
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
