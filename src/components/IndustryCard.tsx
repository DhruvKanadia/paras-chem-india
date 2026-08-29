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
      className="group border border-border-subtle bg-surface-container-lowest rounded-lg p-8 hover:border-industrial-blue transition-all cursor-pointer flex flex-col h-full"
    >
      <div className="w-14 h-14 bg-surface-container-low rounded-lg flex items-center justify-center mb-6 text-industrial-blue group-hover:bg-industrial-blue group-hover:text-on-primary transition-colors">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      
      <h3 className="font-headline-md text-headline-md text-on-background mb-3">{name}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">{description}</p>
      
      <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
        <span className="text-label-md font-label-md text-industrial-blue">Explore Solutions</span>
        <span className="material-symbols-outlined text-industrial-blue">arrow_forward</span>
      </div>
    </Link>
  );
}
