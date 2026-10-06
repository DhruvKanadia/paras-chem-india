import Link from 'next/link';

interface IndustryCardProps {
  slug: string;
  name: string;
  icon: string;
  description: string;
  chemicalCount?: number;
}

export default function IndustryCard({ slug, name, icon, description, chemicalCount }: IndustryCardProps) {
  return (
    <Link
      href={`/industries/${slug}`}
      className="group block bg-white border border-slate-200 rounded-3xl p-10 h-full hover:shadow-2xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
    >
      <div className="mb-8 flex items-center justify-center">
        <span className="material-symbols-outlined text-5xl text-slate-900">{icon}</span>
      </div>
      
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4 text-center">{name}</h3>
      <p className="text-slate-500 leading-relaxed flex-grow text-center">{description}</p>
      
      <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-6 w-full">
        <span className="text-sm font-medium text-slate-400">{chemicalCount} Chemicals</span>
        <span className="flex items-center gap-2 text-sm font-semibold text-slate-900 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </span>
      </div>
    </Link>
  );
}
