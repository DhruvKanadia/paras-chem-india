import Link from 'next/link';
import Image from 'next/image';

interface IndustryCardProps {
  slug: string;
  name: string;
  icon: string;
  description: string;
  chemicalCount?: number;
  image?: string;
}

export default function IndustryCard({ slug, name, icon, description, chemicalCount, image }: IndustryCardProps) {
  return (
    <Link
      href={`/industries/${slug}`}
      className="group block bg-white border border-slate-200 rounded-3xl overflow-hidden h-full shadow-sm hover:shadow-2xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-500 flex flex-col"
    >
      {/* Visual Header with Image */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden bg-slate-900">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent"></div>
          
          <div className="absolute top-4 left-4">
            <span className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-2xl">{icon}</span>
            </span>
          </div>

          <div className="absolute top-4 right-4">
            <span className="text-xs font-semibold text-white bg-slate-900/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              {chemicalCount} Chemicals
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          {!image && (
            <div className="mb-6 flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-slate-900">{icon}</span>
            </div>
          )}
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-3 group-hover:text-industrial-blue transition-colors">
            {name}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-industrial-blue">
            View Sector Specs
          </span>
          <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-industrial-blue group-hover:text-white flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
