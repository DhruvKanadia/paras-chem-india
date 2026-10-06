'use client';

import Image from 'next/image';

export default function ClientCarousel() {
  const clients = [
    { name: "Aarti Industries", domain: "aarti-industries.com" },
    { name: "Aarti Drugs", domain: "aartidrugs.com" },
    { name: "Aarti Surfactants", domain: "aarti-surfactants.com" },
    { name: "Aquapharm", domain: "aquapharm.net" },
    { name: "Clean Science", domain: "cleanscience.co.in" },
    { name: "Evonik", domain: "evonik.com" },
    { name: "Fineotex", domain: "fineotex.com" },
    { name: "Gharda Chemicals", domain: "gharda.com" },
    { name: "Lupin Ltd", domain: "lupin.com" },
    { name: "Godrej Inds", domain: "godrejindustries.com" },
    { name: "Galaxy Surfactants", domain: "galaxysurfactants.com" },
    { name: "Vedanta Ltd", domain: "vedantalimited.com" },
    { name: "Fine Organics", domain: "fineorganics.com" },
    { name: "ONGC", domain: "ongcindia.com" },
    { name: "NTPC", domain: "ntpc.co.in" },
    { name: "NHPC", domain: "nhpcindia.com" },
    { name: "BPCL", domain: "bharatpetroleum.in" },
    { name: "IOCL", domain: "iocl.com" },
    { name: "GAIL INDIA", domain: "gailonline.com" },
    { name: "BARC", domain: "barc.gov.in" }
  ];

  const slugify = (text: string) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  return (
    <div className="w-full overflow-hidden bg-surface-gray py-12 border-y border-border-subtle">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-page mb-8 text-center">
        <h3 className="font-headline-md text-slate-dark">Trusted by Prestigious Clients & PSUs</h3>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {clients.map((client, index) => (
            <div key={index} className="mx-8 w-32 flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 h-16">
              <Image 
                src={`/clients/${slugify(client.name)}.png`} 
                alt={client.name} 
                width={128}
                height={48}
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {clients.map((client, index) => (
            <div key={`clone-${index}`} className="mx-8 w-32 flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 h-16">
              <Image 
                src={`/clients/${slugify(client.name)}.png`} 
                alt={client.name} 
                width={128}
                height={48}
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
