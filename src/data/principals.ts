export interface Principal {
  name: string;
  country: string;
  flag: string;
  logo: string;
  specialty: string;
  description: string;
  monthlyOfftake?: string;
  yearPartner?: number;
}

export const principals: Principal[] = [
  {
    name: "National Peroxide Limited (NPL)",
    country: "India",
    flag: "🇮🇳",
    logo: "/principals_crop2/national-peroxide-limited-npl-.png",
    specialty: "Hydrogen Peroxide & Peracetic Acid",
    description: "Hydrogen Peroxide (technical and food grade), Peracetic Acid. Approx. 850 MT monthly off-take.",
    monthlyOfftake: "~850 MT/month",
  },
  {
    name: "Grasim Industries Limited (Aditya Birla)",
    country: "India",
    flag: "🇮🇳",
    logo: "/principals/grasim.jpg",
    specialty: "Caustic Soda & Chlor-Alkali",
    description: "Caustic Soda, Bleaching Powder, PAC, MDC. Approx. 400 MT monthly off-take.",
    monthlyOfftake: "~400 MT/month",
  },
  {
    name: "GACL Ltd",
    country: "India",
    flag: "🇮🇳",
    logo: "/principals/gacl-ltd.png",
    specialty: "Phosphoric Acid & Caustic Potash",
    description: "Phosphoric Acid, MDC, Caustic Potash, PAC. Approx. 200 MT monthly off-take.",
    monthlyOfftake: "~200 MT/month",
  },
  {
    name: "GFL Ltd (Gujarat Fluorochemicals)",
    country: "India",
    flag: "🇮🇳",
    logo: "/principals/gfl-ltd-gujarat-fluorochemicals.png",
    specialty: "Caustic Soda Flakes & MDC",
    description: "Caustic Soda Flakes, MDC. Approx. 300 MT monthly off-take.",
    monthlyOfftake: "~300 MT/month",
  },
  {
    name: "RSPL Ltd",
    country: "India",
    flag: "🇮🇳",
    logo: "/principals/rspl.jpg",
    specialty: "Soda Ash Light & Dense",
    description: "Soda Ash Light and Dense. Authorized distributor. Approx. 150 MT monthly off-take.",
    monthlyOfftake: "~150 MT/month",
  },
  {
    name: "Atul Ltd",
    country: "India",
    flag: "🇮🇳",
    logo: "/principals/atul.jpg",
    specialty: "Caustic Soda Flakes & Sodium Thiosulphate",
    description: "Caustic Soda Flakes, Sodium Thiosulphate. Approx. 200 MT monthly off-take.",
    monthlyOfftake: "~200 MT/month",
  },
  {
    name: "Fogla",
    country: "India",
    flag: "🇮🇳",
    logo: "/principals/fogla.jpg",
    specialty: "Acid Slurry & Specialty Products",
    description: "Acid Slurry and all specialty products. Approx. 100 MT monthly off-take.",
    monthlyOfftake: "~100 MT/month",
  },
  {
    name: "Organic Industries",
    country: "India",
    flag: "🇮🇳",
    logo: "/principals/organic.jpg",
    specialty: "Potassium Permanganate",
    description: "Potassium Permanganate for water treatment and industrial applications.",
  },
  {
    name: "Meghmani Dyes & Intermediates",
    country: "India",
    flag: "🇮🇳",
    logo: "/principals/meghmani.jpg",
    specialty: "Dyes & Intermediates",
    description: "Dyes and chemical intermediates for various industrial applications.",
  },
];

export const bridgeSteps = [
  { label: "Principal Manufacturers", icon: "factory", description: "NPL, Grasim, GACL, GFL, RSPL, Atul & more" },
  { label: "Paras Chem India", icon: "hub", description: "Quality assurance, warehousing & logistics" },
  { label: "Industrial End-Users", icon: "precision_manufacturing", description: "Pan-India distribution via Bhiwandi & port hubs" },
];

export const qualityPillars = [
  { icon: "verified", label: "ISO 9001:2015 Certified" },
  { icon: "qr_code_scanner", label: "Batch Tracking" },
  { icon: "gavel", label: "Regulatory Compliance" },
  { icon: "warehouse", label: "5 HAZ-Category Warehouses" },
];
