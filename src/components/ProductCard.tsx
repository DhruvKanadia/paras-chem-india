import Link from 'next/link';
import { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  const isOut = product.status === 'Out of Stock';

  return (
    <div
      className={`group bg-white border border-border-subtle rounded overflow-hidden hover:border-industrial-blue transition-all duration-300 flex flex-col h-full relative ${
        isOut ? 'opacity-75' : ''
      }`}
    >
      {/* Status badge */}
      <div
        className={`absolute top-3 right-3 px-2 py-1 flex items-center gap-1 rounded text-label-sm font-label-sm font-bold z-10 ${
          isOut
            ? 'bg-surface-container text-on-surface-variant border border-border-subtle'
            : 'bg-chemical-green/10 text-chemical-green border border-chemical-green/20'
        }`}
      >
        {isOut ? (
          <>
            <span className="material-symbols-outlined text-[16px]">inventory_2</span>
            Out of Stock
          </>
        ) : (
          <>
            <span className="w-2 h-2 rounded-full bg-chemical-green"></span>
            Available
          </>
        )}
      </div>

      {/* Image area */}
      <div className="h-32 bg-surface-gray border-b border-border-subtle flex items-center justify-center p-4 relative overflow-hidden">
        {product.image && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply filter grayscale"
            style={{ backgroundImage: `url(${product.image})` }}
          />
        )}
        <span className="material-symbols-outlined text-4xl text-on-surface-variant/30 relative z-10">
          {product.icon || 'science'}
        </span>
      </div>

      {/* Content area */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-label-sm font-label-sm text-industrial-blue font-bold uppercase tracking-wide mb-1">
          {product.category}
        </div>
        <h3 className="font-headline-md text-lg font-bold text-on-surface mb-2 group-hover:text-industrial-blue">
          {product.name}
        </h3>

        <div className="space-y-2 mb-4 flex-1">
          <div className="flex items-baseline justify-between border-b border-border-subtle/50 pb-1">
            <span className="text-label-sm font-label-sm text-on-surface-variant">CAS</span>
            <span className="font-label-md text-label-md text-on-surface">{product.casNumber || 'N/A'}</span>
          </div>
          <div className="flex items-baseline justify-between border-b border-border-subtle/50 pb-1">
            <span className="text-label-sm font-label-sm text-on-surface-variant">Purity</span>
            <span className="font-label-md text-label-md text-on-surface">{product.purity || 'N/A'}</span>
          </div>
          <div className="flex items-baseline justify-between border-b border-border-subtle/50 pb-1">
            <span className="text-label-sm font-label-sm text-on-surface-variant">Grades</span>
            <span className="font-label-md text-label-md text-on-surface text-right">
              {Array.isArray(product.grades) ? product.grades.join(', ') : product.grades || 'Standard'}
            </span>
          </div>
        </div>

        <Link
          href={`/products/${product.slug}`}
          className={`w-full flex items-center justify-center gap-2 font-label-md text-label-md py-2 rounded transition-all mt-auto ${
            isOut
              ? 'border border-border-subtle text-on-surface-variant hover:bg-surface-gray'
              : 'border border-industrial-blue text-industrial-blue hover:bg-industrial-blue hover:text-on-primary'
          }`}
        >
          View Details
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
