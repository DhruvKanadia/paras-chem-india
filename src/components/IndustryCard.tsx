import Image from 'next/image';

interface IndustryCardProps {
  slug?: string;
  name: string;
  icon?: string;
  description: string;
  chemicalCount?: number;
  image?: string;
}

export default function IndustryCard({ name, description, image }: IndustryCardProps) {
  return (
    <div className="group flex flex-col h-full">
      {/* Visual Header with Image */}
      {image && (
        <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-2xl bg-slate-100 mb-5">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 mb-2.5">
          {name}
        </h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
