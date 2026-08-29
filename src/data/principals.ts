export interface Principal {
  name: string;
  country: string;
  flag: string;
  specialty: string;
  description: string;
  yearPartner?: number;
}

export const principals: Principal[] = [
  {
    name: "EuroChem Synthetics",
    country: "Germany",
    flag: "🇩🇪",
    specialty: "Inorganic Acids & Alkalis",
    description: "Leading European producer of high-purity inorganic chemicals for industrial applications.",
    yearPartner: 2003,
  },
  {
    name: "Apex Resins Corp.",
    country: "USA",
    flag: "🇺🇸",
    specialty: "Polymer Resins & Coatings",
    description: "Specialized manufacturer of epoxy, polyester, and acrylic resins for coatings and composites.",
    yearPartner: 2008,
  },
  {
    name: "Nippon Solvents Ltd.",
    country: "Japan",
    flag: "🇯🇵",
    specialty: "High-Purity Solvents",
    description: "Japanese precision solvent manufacturer supplying electronic and pharmaceutical grade solvents.",
    yearPartner: 2005,
  },
  {
    name: "AquaAdditives Co.",
    country: "Netherlands",
    flag: "🇳🇱",
    specialty: "Water Treatment Chemicals",
    description: "Dutch innovator in advanced water treatment polymers and specialty biocides.",
    yearPartner: 2012,
  },
  {
    name: "BioChem Solutions",
    country: "Canada",
    flag: "🇨🇦",
    specialty: "Bio-based Chemicals",
    description: "Sustainable chemistry pioneer producing bio-based surfactants and green solvents.",
    yearPartner: 2015,
  },
  {
    name: "PolymerWorks Inc.",
    country: "South Korea",
    flag: "🇰🇷",
    specialty: "Engineering Polymers",
    description: "Advanced polymer compound manufacturer for automotive and electronics sectors.",
    yearPartner: 2010,
  },
  {
    name: "Structura Materials",
    country: "Italy",
    flag: "🇮🇹",
    specialty: "Construction Chemicals",
    description: "Italian specialist in admixtures, waterproofing compounds, and construction additives.",
    yearPartner: 2018,
  },
];

export const bridgeSteps = [
  { label: "Global Manufacturers", icon: "factory", description: "50+ certified producers worldwide" },
  { label: "Paras Chem", icon: "hub", description: "Quality assurance, logistics & compliance" },
  { label: "Industrial End-Users", icon: "precision_manufacturing", description: "Pan-India delivery network" },
];

export const qualityPillars = [
  { icon: "verified", label: "ISO 9001:2015 Certified" },
  { icon: "qr_code_scanner", label: "Batch Tracking" },
  { icon: "gavel", label: "Regulatory Compliance" },
];
