import Link from 'next/link';

interface CategoryCardProps {
  slug: string;
  name: string;
  icon: string;
  description: string;
  count: number;
}

export default function CategoryCard({ slug, name, icon, description, count }: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${slug}`}
      className="group border border-border-subtle bg-surface-container-lowest rounded p-6 hover:border-industrial-blue transition-colors cursor-pointer flex flex-col items-center text-center h-full"
    >
      <div className="w-12 h-12 bg-surface-gray rounded flex items-center justify-center mb-6 text-industrial-blue group-hover:bg-industrial-blue group-hover:text-on-primary transition-colors mx-auto">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      
      <h3 className="font-headline-md text-lg text-on-background mb-2 text-center">{name}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow text-center">{description}</p>
      
      <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between w-full">
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          {count} {count === 1 ? 'Product' : 'Products'}
        </span>
        <span className="material-symbols-outlined text-industrial-blue">arrow_forward</span>
      </div>
    </Link>
  );
}
