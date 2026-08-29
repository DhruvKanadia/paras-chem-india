export interface IndustryChemical {
  name: string;
  casNumber: string;
  application: string;
  productSlug?: string;
}

export interface IndustryApplication {
  icon: string;
  title: string;
  description: string;
  chemicals?: string[];
}

export interface Industry {
  slug: string;
  name: string;
  icon: string;
  description: string;
  heroDescription: string;
  applications: IndustryApplication[];
  chemicals: IndustryChemical[];
  image?: string;
}

export const industries: Industry[] = [
  {
    slug: "water-treatment",
    name: "Water Treatment",
    icon: "water_drop",
    description: "Advanced coagulants, flocculants, and biocides for municipal and industrial effluent management.",
    heroDescription: "Comprehensive chemical solutions for municipal water purification, industrial effluent treatment, cooling tower management, and boiler water chemistry. We provide end-to-end support from product selection to technical formulation.",
    applications: [
      {
        icon: "blur_on",
        title: "Coagulation & Flocculation",
        description: "High-performance coagulants for turbidity removal and suspended solids clarification.",
        chemicals: ["Polyaluminium Chloride (PAC)", "Aluminum Sulfate", "Ferric Chloride"],
      },
      {
        icon: "straighten",
        title: "pH Adjustment",
        description: "Precise alkalinity and acidity control for optimal treatment chemistry.",
        chemicals: ["Caustic Soda Flakes", "Hydrochloric Acid", "Soda Ash"],
      },
      {
        icon: "sanitizer",
        title: "Disinfection",
        description: "Effective disinfectants for pathogen elimination in potable and process water.",
        chemicals: ["Sodium Hypochlorite", "Calcium Hypochlorite"],
      },
      {
        icon: "thermostat",
        title: "Scale & Corrosion Control",
        description: "Phosphonates and corrosion inhibitors for cooling towers and boiler systems.",
        chemicals: ["HEDP", "ATMP", "Zinc Sulfate"],
      },
    ],
    chemicals: [
      { name: "Polyaluminium Chloride (PAC)", casNumber: "1327-41-9", application: "Coagulation", productSlug: "polyaluminium-chloride" },
      { name: "Sodium Hypochlorite", casNumber: "7681-52-9", application: "Disinfection", productSlug: "sodium-hypochlorite" },
      { name: "Ferric Chloride", casNumber: "7705-08-0", application: "Coagulation", productSlug: "ferric-chloride" },
      { name: "Citric Acid", casNumber: "77-92-9", application: "Descaling", productSlug: "citric-acid-anhydrous" },
      { name: "Aluminum Sulfate", casNumber: "10043-01-3", application: "Flocculation", productSlug: "aluminum-sulfate" },
      { name: "Calcium Hypochlorite", casNumber: "7778-54-3", application: "Disinfection", productSlug: "calcium-hypochlorite" },
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASUxkBI62iNnRtccKR-T9nETxEc0jFOhx4JTn15RX6pKUkBJNkoh5NsIc2fFc7znHJngXQPO9okFcxbYvqFXNMPM6Fknu5ROtFQIMrP5UpUNuKPYZhPSIqsL-x8ZHqS9MMrFe6Pkfk0ywMWZCEnulKrKGJoKyhKvULaZ_pChNyDF51pm2ewO_wdaxtulmTURZVfj7wuRHuDpot3KkTJAu1H5V7ZKufnrO0ABmwCiHR4jXXkZAWHtl2",
  },
  {
    slug: "pharmaceuticals",
    name: "Pharmaceutical Intermediates",
    icon: "medication",
    description: "High-purity APIs, solvents, excipients, and reagents for pharmaceutical manufacturing.",
    heroDescription: "Supporting pharmaceutical manufacturers with USP/BP/IP grade chemicals, intermediates for API synthesis, and high-purity solvents meeting stringent pharmacopeial standards.",
    applications: [
      { icon: "medication", title: "API Synthesis", description: "High-purity reagents and intermediates for active pharmaceutical ingredient manufacturing." },
      { icon: "science", title: "Solvents & Reagents", description: "Pharmaceutical-grade solvents for extraction, crystallization, and formulation." },
      { icon: "vaccines", title: "Excipients", description: "Binders, fillers, and coating materials for tablet and capsule formulation." },
      { icon: "biotech", title: "Quality Control", description: "Analytical reagents and reference standards for QC laboratories." },
    ],
    chemicals: [
      { name: "Isopropyl Alcohol (IPA)", casNumber: "67-63-0", application: "Solvent", productSlug: "isopropyl-alcohol" },
      { name: "Acetic Acid (Glacial)", casNumber: "64-19-7", application: "Reagent", productSlug: "acetic-acid" },
      { name: "Citric Acid Anhydrous", casNumber: "77-92-9", application: "Excipient", productSlug: "citric-acid-anhydrous" },
    ],
  },
  {
    slug: "textiles",
    name: "Textile Chemicals",
    icon: "styler",
    description: "Dyes, auxiliaries, sizing agents, and finishing chemicals ensuring quality and compliance in textile production.",
    heroDescription: "Complete range of textile processing chemicals from pre-treatment through finishing. Our products meet OEKO-TEX and ZDHC compliance requirements for sustainable textile manufacturing.",
    applications: [
      { icon: "palette", title: "Dyeing & Printing", description: "Reactive, disperse, and acid dyes with auxiliary chemicals for consistent colorfastness." },
      { icon: "cleaning_services", title: "Scouring & Bleaching", description: "Pre-treatment chemicals for fiber preparation and whitening." },
      { icon: "texture", title: "Sizing & Finishing", description: "Sizing agents, softeners, and finishing chemicals for fabric enhancement." },
      { icon: "water_drop", title: "Effluent Treatment", description: "Specialized coagulants and decolorants for textile wastewater." },
    ],
    chemicals: [
      { name: "Caustic Soda Flakes", casNumber: "1310-73-2", application: "Mercerizing", productSlug: "caustic-soda-flakes" },
      { name: "Acetic Acid", casNumber: "64-19-7", application: "pH Regulation", productSlug: "acetic-acid" },
      { name: "Sodium Hypochlorite", casNumber: "7681-52-9", application: "Bleaching", productSlug: "sodium-hypochlorite" },
    ],
  },
  {
    slug: "agrochemicals",
    name: "Agrochemicals",
    icon: "agriculture",
    description: "Fertilizers, pesticide intermediates, crop protection surfactants, and soil conditioning chemicals.",
    heroDescription: "Supporting India's agricultural sector with quality-controlled chemical inputs for crop nutrition, protection, and soil management programs.",
    applications: [
      { icon: "grass", title: "Fertilizers", description: "Raw materials for NPK blending and specialty nutrient formulations." },
      { icon: "bug_report", title: "Crop Protection", description: "Pesticide intermediates and adjuvants for effective pest management." },
      { icon: "landscape", title: "Soil Conditioning", description: "Gypsum, sulfur, and pH correction agents for soil health improvement." },
      { icon: "water_drop", title: "Irrigation Treatment", description: "Chemicals for drip irrigation maintenance and water quality management." },
    ],
    chemicals: [
      { name: "Sulfuric Acid", casNumber: "7664-93-9", application: "Fertilizer Production", productSlug: "sulfuric-acid" },
      { name: "Calcium Hypochlorite", casNumber: "7778-54-3", application: "Irrigation Sanitization", productSlug: "calcium-hypochlorite" },
    ],
  },
];

export const secondarySectors = [
  { name: "Paints & Coatings", icon: "format_paint" },
  { name: "Personal Care", icon: "spa" },
  { name: "Plastics & Polymers", icon: "category" },
  { name: "Food & Beverage", icon: "restaurant" },
  { name: "Oil & Gas", icon: "oil_barrel" },
  { name: "Construction", icon: "construction" },
];
