export interface ProductSpecification {
  property: string;
  value: string;
  unit: string;
}

export interface ProductApplication {
  icon: string;
  title: string;
  description: string;
  industrySlug?: string;
}

export interface Product {
  slug: string;
  name: string;
  casNumber: string;
  formula?: string;
  category: string;
  categorySlug: string;
  purity: string;
  grades: string[];
  form?: string;
  packaging?: string;
  origin?: string;
  status: "Available" | "Out of Stock";
  description: string;
  specifications: ProductSpecification[];
  applications: ProductApplication[];
  image?: string;
  icon: string;
}

export const products: Product[] = [
  {
    slug: "caustic-soda-flakes",
    name: "Caustic Soda Flakes",
    casNumber: "1310-73-2",
    formula: "NaOH",
    category: "Industrial Chemicals",
    categorySlug: "industrial-chemicals",
    purity: "99% Min",
    grades: ["Industrial", "Technical"],
    form: "White Flakes",
    packaging: "25kg / 50kg Bags",
    origin: "India / Imported",
    status: "Available",
    description:
      "Sodium hydroxide, commonly known as Caustic Soda, is a highly versatile inorganic compound used widely in industrial applications. In its flake form, it is highly soluble in water and readily absorbs moisture and carbon dioxide from the air. It is a strong base and an essential ingredient in various chemical manufacturing processes.",
    specifications: [
      { property: "Sodium Hydroxide (NaOH)", value: "99.00", unit: "% Min" },
      { property: "Sodium Carbonate (Na2CO3)", value: "0.80", unit: "% Max" },
      { property: "Sodium Chloride (NaCl)", value: "0.10", unit: "% Max" },
      { property: "Iron (Fe)", value: "0.005", unit: "% Max" },
    ],
    applications: [
      { icon: "water_drop", title: "Water Treatment", description: "Used for pH adjustment and neutralization of acidic waste streams.", industrySlug: "water-treatment" },
      { icon: "styler", title: "Textile Industry", description: "Essential for scouring, mercerizing, and dyeing processes." },
      { icon: "cleaning_services", title: "Soaps & Detergents", description: "Saponification agent in the manufacturing of industrial and household soaps." },
      { icon: "factory", title: "Alumina Production", description: "Extraction of alumina from bauxite ore via the Bayer process." },
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7o1qL42iZ24Y0UXifGwftkuNLYfEA_JKPdtEHAa8rWQjLd6lf8eSV5cmZQhp67XWU05rXvRgTAiVHJbDNayfne2IwbWfP56zBDaUuiVa0eqvMH6K-oH0z6uzPCtqorr868TyxXsmDz1hZiCfVEc_eJLg-kq8wIK1jmwR2hxcNM3C5fwMinT3eCwuvLUMvjIbA8RDtfWBg8VCgiLeLFA90YHsman-oqD9MhSSk4pAjmGRuqZF29dSc",
    icon: "science",
  },
  {
    slug: "sodium-hypochlorite",
    name: "Sodium Hypochlorite",
    casNumber: "7681-52-9",
    formula: "NaOCl",
    category: "Water Treatment",
    categorySlug: "water-treatment",
    purity: "12.5% - 15%",
    grades: ["Industrial", "NSF"],
    form: "Clear Liquid",
    packaging: "50L / 200L Drums",
    origin: "India",
    status: "Available",
    description:
      "Sodium hypochlorite is a chemical compound with the formula NaOCl. It is commonly used as a disinfecting and bleaching agent. In water treatment, it is widely used for disinfection of drinking water and treatment of wastewater effluent.",
    specifications: [
      { property: "Available Chlorine", value: "12.5 - 15.0", unit: "%" },
      { property: "Sodium Hydroxide (NaOH)", value: "0.5 - 1.5", unit: "%" },
      { property: "Iron (Fe)", value: "0.002", unit: "% Max" },
      { property: "Specific Gravity", value: "1.20 - 1.25", unit: "g/mL" },
    ],
    applications: [
      { icon: "water_drop", title: "Municipal Water Disinfection", description: "Primary disinfectant for potable water treatment plants.", industrySlug: "water-treatment" },
      { icon: "local_hospital", title: "Healthcare", description: "Surface and instrument disinfection in hospitals." },
      { icon: "pool", title: "Pool Treatment", description: "Swimming pool water sanitization and algae control." },
      { icon: "cleaning_services", title: "Industrial Bleaching", description: "Bleaching agent in textile and paper manufacturing." },
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7o1qL42iZ24Y0UXifGwftkuNLYfEA_JKPdtEHAa8rWQjLd6lf8eSV5cmZQhp67XWU05rXvRgTAiVHJbDNayfne2IwbWfP56zBDaUuiVa0eqvMH6K-oH0z6uzPCtqorr868TyxXsmDz1hZiCfVEc_eJLg-kq8wIK1jmwR2hxcNM3C5fwMinT3eCwuvLUMvjIbA8RDtfWBg8VCgiLeLFA90YHsman-oqD9MhSSk4pAjmGRuqZF29dSc",
    icon: "science",
  },
  {
    slug: "polyaluminium-chloride",
    name: "Polyaluminium Chloride (PAC)",
    casNumber: "1327-41-9",
    formula: "Al₂Cl(OH)₅",
    category: "Water Treatment",
    categorySlug: "water-treatment",
    purity: "30% Al2O3 min",
    grades: ["Industrial", "Potable"],
    form: "Yellow Powder / Liquid",
    packaging: "25kg Bags / 1000L IBC",
    origin: "India / China",
    status: "Available",
    description:
      "Polyaluminium Chloride (PAC) is a highly efficient coagulant used extensively in water treatment and wastewater management. It provides superior turbidity removal, faster floc formation, and lower sludge generation compared to traditional aluminum sulfate.",
    specifications: [
      { property: "Al2O3 Content", value: "30.0", unit: "% Min" },
      { property: "Basicity", value: "40 - 90", unit: "%" },
      { property: "pH (1% solution)", value: "3.5 - 5.0", unit: "-" },
      { property: "Insoluble Matter", value: "1.5", unit: "% Max" },
    ],
    applications: [
      { icon: "water_drop", title: "Coagulation & Flocculation", description: "Primary coagulant in municipal and industrial water treatment.", industrySlug: "water-treatment" },
      { icon: "factory", title: "Paper Manufacturing", description: "Retention and drainage aid in papermaking." },
      { icon: "oil_barrel", title: "Oil & Gas", description: "Produced water treatment in refining operations." },
      { icon: "eco", title: "Wastewater Treatment", description: "Effluent clarification for industrial discharge compliance." },
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUXCmmVfacH_DkmMW94UCiJXrtWL_ro4_itYTkPIq3lTIt7aCgxaI-byMDVkXWsUinboMPcbewnoD_PwtGIK49Er4K7IV73lcg7BHxKq6lm_GpCzX7NQiialdFATQLUPgyX59jaj0zW6smJZE9N_YknxcPlWamTfGict1qVl-GWbA6t8d5LmqPLGpT_m2DWpcsElm66_ER2QY5gLbqWx88mu-50fNTMembfyjTr4tQw7KZRUmdoGAn",
    icon: "water_drop",
  },
  {
    slug: "citric-acid-anhydrous",
    name: "Citric Acid Anhydrous",
    casNumber: "77-92-9",
    formula: "C₆H₈O₇",
    category: "Specialty Chemicals",
    categorySlug: "specialty-chemicals",
    purity: "99.5% - 100.5%",
    grades: ["Food", "Pharma USP"],
    form: "White Crystalline Powder",
    packaging: "25kg Bags",
    origin: "China / India",
    status: "Out of Stock",
    description:
      "Citric acid anhydrous is a tricarboxylic acid found naturally in citrus fruits. It is widely used as an acidulant, flavoring agent, and preservative in food and beverages. In pharmaceuticals, it serves as a buffering agent and active ingredient in effervescent formulations.",
    specifications: [
      { property: "Assay (as C6H8O7)", value: "99.5 - 100.5", unit: "%" },
      { property: "Water Content", value: "0.5", unit: "% Max" },
      { property: "Sulfate Ash", value: "0.05", unit: "% Max" },
      { property: "Heavy Metals (Pb)", value: "10", unit: "ppm Max" },
    ],
    applications: [
      { icon: "restaurant", title: "Food & Beverage", description: "Acidulant and preservative in carbonated drinks, confectionery, and canned foods." },
      { icon: "medication", title: "Pharmaceuticals", description: "Buffering agent in effervescent tablets and oral solutions." },
      { icon: "cleaning_services", title: "Detergents", description: "Builder and chelating agent in household and industrial cleaners." },
      { icon: "spa", title: "Personal Care", description: "pH adjuster in cosmetics and skincare formulations." },
    ],
    icon: "experiment",
  },
  {
    slug: "sulfuric-acid",
    name: "Sulfuric Acid",
    casNumber: "7664-93-9",
    formula: "H₂SO₄",
    category: "Industrial Chemicals",
    categorySlug: "industrial-chemicals",
    purity: "98% Min",
    grades: ["Industrial", "CP"],
    form: "Clear Oily Liquid",
    packaging: "35kg Carboys / Tanker",
    origin: "India",
    status: "Available",
    description:
      "Sulfuric acid is a highly corrosive strong mineral acid with the molecular formula H₂SO₄. It is a key industrial chemical used in manufacturing fertilizers, refining petroleum, and processing metals.",
    specifications: [
      { property: "H2SO4 Content", value: "98.0", unit: "% Min" },
      { property: "Iron (Fe)", value: "0.005", unit: "% Max" },
      { property: "Residue on Ignition", value: "0.02", unit: "% Max" },
      { property: "Specific Gravity", value: "1.84", unit: "g/mL" },
    ],
    applications: [
      { icon: "agriculture", title: "Fertilizer Production", description: "Key reagent in manufacturing phosphoric acid and ammonium sulfate." },
      { icon: "oil_barrel", title: "Petroleum Refining", description: "Alkylation catalyst in gasoline production." },
      { icon: "precision_manufacturing", title: "Metal Processing", description: "Pickling agent for steel and copper surfaces." },
      { icon: "science", title: "Chemical Synthesis", description: "Catalyst and dehydrating agent in organic reactions." },
    ],
    icon: "science",
  },
  {
    slug: "ferric-chloride",
    name: "Ferric Chloride",
    casNumber: "7705-08-0",
    formula: "FeCl₃",
    category: "Water Treatment",
    categorySlug: "water-treatment",
    purity: "40% Min (Liquid)",
    grades: ["Industrial", "Technical"],
    form: "Dark Brown Liquid",
    packaging: "250kg Drums / IBC",
    origin: "India",
    status: "Available",
    description:
      "Ferric chloride is an effective coagulant and flocculant used in water and wastewater treatment. It is also widely used in electronics for PCB etching and in industrial applications.",
    specifications: [
      { property: "FeCl3 Content", value: "40.0", unit: "% Min" },
      { property: "Free HCl", value: "1.0", unit: "% Max" },
      { property: "Specific Gravity", value: "1.42", unit: "g/mL" },
      { property: "Insoluble Matter", value: "0.5", unit: "% Max" },
    ],
    applications: [
      { icon: "water_drop", title: "Water Treatment", description: "Coagulant for removal of suspended solids, phosphorus, and heavy metals.", industrySlug: "water-treatment" },
      { icon: "memory", title: "Electronics", description: "PCB etching and copper recovery processes." },
      { icon: "recycling", title: "Sludge Conditioning", description: "Dewatering aid for municipal and industrial sludge." },
      { icon: "factory", title: "Industrial", description: "Catalyst in organic synthesis and pigment manufacturing." },
    ],
    icon: "water_drop",
  },
  {
    slug: "hydrochloric-acid",
    name: "Hydrochloric Acid",
    casNumber: "7647-01-0",
    formula: "HCl",
    category: "Industrial Chemicals",
    categorySlug: "industrial-chemicals",
    purity: "35% Min",
    grades: ["Industrial", "CP", "LR"],
    form: "Clear to Slightly Yellow Liquid",
    packaging: "35kg Carboys / Tanker",
    origin: "India",
    status: "Available",
    description:
      "Hydrochloric acid is a strong, highly corrosive acid commonly used in industrial processes such as metal cleaning, pH regulation, and chemical synthesis.",
    specifications: [
      { property: "HCl Content", value: "35.0", unit: "% Min" },
      { property: "Iron (Fe)", value: "0.002", unit: "% Max" },
      { property: "Sulfate (SO4)", value: "0.005", unit: "% Max" },
      { property: "Specific Gravity", value: "1.18", unit: "g/mL" },
    ],
    applications: [
      { icon: "precision_manufacturing", title: "Steel Pickling", description: "Cleaning and descaling of steel surfaces before processing." },
      { icon: "science", title: "Chemical Synthesis", description: "Reagent for producing chlorides, dyes, and pharmaceuticals." },
      { icon: "water_drop", title: "pH Control", description: "Neutralization and pH adjustment in water treatment.", industrySlug: "water-treatment" },
      { icon: "construction", title: "Construction", description: "Cleaning of concrete and masonry surfaces." },
    ],
    icon: "science",
  },
  {
    slug: "soda-ash",
    name: "Soda Ash (Sodium Carbonate)",
    casNumber: "497-19-8",
    formula: "Na₂CO₃",
    category: "Industrial Chemicals",
    categorySlug: "industrial-chemicals",
    purity: "99.2% Min",
    grades: ["Dense", "Light"],
    form: "White Powder",
    packaging: "50kg Bags / 1MT Jumbo",
    origin: "India / Turkey",
    status: "Available",
    description:
      "Soda ash (sodium carbonate) is a versatile industrial chemical used in glass manufacturing, detergent production, and water treatment. It serves as a pH adjuster and water softener.",
    specifications: [
      { property: "Na2CO3 Content", value: "99.2", unit: "% Min" },
      { property: "NaCl Content", value: "0.5", unit: "% Max" },
      { property: "Iron (Fe)", value: "0.004", unit: "% Max" },
      { property: "Moisture", value: "1.0", unit: "% Max" },
    ],
    applications: [
      { icon: "window", title: "Glass Manufacturing", description: "Essential flux in flat glass, container glass, and fiberglass production." },
      { icon: "cleaning_services", title: "Detergent Production", description: "Builder and water softener in laundry and dishwasher detergents." },
      { icon: "water_drop", title: "Water Treatment", description: "pH adjustment and water softening agent.", industrySlug: "water-treatment" },
      { icon: "science", title: "Chemical Industry", description: "Raw material for sodium bicarbonate and sodium silicate." },
    ],
    icon: "science",
  },
  {
    slug: "calcium-hypochlorite",
    name: "Calcium Hypochlorite",
    casNumber: "7778-54-3",
    formula: "Ca(OCl)₂",
    category: "Water Treatment",
    categorySlug: "water-treatment",
    purity: "65% - 70%",
    grades: ["Industrial", "NSF"],
    form: "White Granular / Tablet",
    packaging: "45kg Drums",
    origin: "China / Japan",
    status: "Available",
    description:
      "Calcium hypochlorite is a powerful disinfectant used for water purification and sanitation. Available in granular and tablet forms, it provides a stable source of available chlorine for long-term water treatment applications.",
    specifications: [
      { property: "Available Chlorine", value: "65 - 70", unit: "%" },
      { property: "Moisture", value: "5.5", unit: "% Max" },
      { property: "Insoluble Matter", value: "5.0", unit: "% Max" },
      { property: "Granularity (14-50 mesh)", value: "90", unit: "% Min" },
    ],
    applications: [
      { icon: "water_drop", title: "Water Disinfection", description: "Chlorination of drinking water and swimming pools.", industrySlug: "water-treatment" },
      { icon: "agriculture", title: "Agriculture", description: "Sanitization of irrigation systems and post-harvest treatment." },
      { icon: "local_hospital", title: "Sanitation", description: "Surface disinfection for food processing and healthcare." },
      { icon: "emergency", title: "Emergency Water Treatment", description: "Portable water purification for disaster relief operations." },
    ],
    icon: "water_drop",
  },
  {
    slug: "acetic-acid",
    name: "Acetic Acid (Glacial)",
    casNumber: "64-19-7",
    formula: "CH₃COOH",
    category: "Industrial Chemicals",
    categorySlug: "industrial-chemicals",
    purity: "99.8% Min",
    grades: ["Industrial", "Food", "Pharma"],
    form: "Clear Liquid",
    packaging: "30kg Carboys / 200L Drums",
    origin: "India / SE Asia",
    status: "Available",
    description:
      "Glacial acetic acid is a versatile organic acid used across multiple industries including food processing, pharmaceutical manufacturing, textiles, and chemical synthesis.",
    specifications: [
      { property: "Acetic Acid Content", value: "99.8", unit: "% Min" },
      { property: "Water Content", value: "0.15", unit: "% Max" },
      { property: "Formic Acid", value: "0.05", unit: "% Max" },
      { property: "Color (Pt-Co)", value: "10", unit: "Max" },
    ],
    applications: [
      { icon: "restaurant", title: "Food Industry", description: "Vinegar production, food preservative, and acidity regulator." },
      { icon: "styler", title: "Textile Industry", description: "Dyeing auxiliary and pH regulator in fiber processing." },
      { icon: "medication", title: "Pharmaceuticals", description: "Solvent and reagent for drug synthesis." },
      { icon: "science", title: "Chemical Synthesis", description: "Production of vinyl acetate monomer (VAM) and acetic anhydride." },
    ],
    icon: "science",
  },
  {
    slug: "aluminum-sulfate",
    name: "Aluminum Sulfate",
    casNumber: "10043-01-3",
    formula: "Al₂(SO₄)₃",
    category: "Water Treatment",
    categorySlug: "water-treatment",
    purity: "17% Al2O3 Min",
    grades: ["Industrial", "Potable"],
    form: "White Granular / Liquid",
    packaging: "25kg / 50kg Bags",
    origin: "India",
    status: "Available",
    description:
      "Aluminum sulfate is an effective and widely used coagulant for water treatment. It is used for clarification of drinking water, industrial process water, and wastewater treatment.",
    specifications: [
      { property: "Al2O3 Content", value: "17.0", unit: "% Min" },
      { property: "Iron (Fe2O3)", value: "0.5", unit: "% Max" },
      { property: "Free Acidity (H2SO4)", value: "0.1", unit: "% Max" },
      { property: "pH (5% solution)", value: "3.0 - 3.5", unit: "-" },
    ],
    applications: [
      { icon: "water_drop", title: "Water Clarification", description: "Primary coagulant in municipal drinking water treatment plants.", industrySlug: "water-treatment" },
      { icon: "factory", title: "Paper Manufacturing", description: "Sizing agent and rosin precipitant in papermaking." },
      { icon: "eco", title: "Wastewater Treatment", description: "Phosphorus removal and suspended solids reduction." },
      { icon: "styler", title: "Textile Industry", description: "Mordant for fixing dyes on fabrics." },
    ],
    icon: "water_drop",
  },
  {
    slug: "isopropyl-alcohol",
    name: "Isopropyl Alcohol (IPA)",
    casNumber: "67-63-0",
    formula: "(CH₃)₂CHOH",
    category: "Specialty Chemicals",
    categorySlug: "specialty-chemicals",
    purity: "99% Min",
    grades: ["Industrial", "Pharma", "Electronic"],
    form: "Clear Liquid",
    packaging: "200L Drums / Tanker",
    origin: "India / Korea",
    status: "Available",
    description:
      "Isopropyl alcohol is a versatile solvent used in pharmaceutical formulations, electronics cleaning, personal care products, and as a general-purpose industrial solvent.",
    specifications: [
      { property: "IPA Content", value: "99.0", unit: "% Min" },
      { property: "Water Content", value: "0.5", unit: "% Max" },
      { property: "Acidity (as CH3COOH)", value: "0.002", unit: "% Max" },
      { property: "Specific Gravity", value: "0.785", unit: "g/mL" },
    ],
    applications: [
      { icon: "medication", title: "Pharmaceuticals", description: "Solvent for drug formulations and hand sanitizer production." },
      { icon: "memory", title: "Electronics", description: "High-purity cleaning of semiconductor wafers and PCBs." },
      { icon: "spa", title: "Personal Care", description: "Ingredient in lotions, aftershaves, and cosmetic formulations." },
      { icon: "cleaning_services", title: "Industrial Cleaning", description: "Degreasing agent for precision equipment and optical components." },
    ],
    icon: "experiment",
  },
];

export const categories = [
  { slug: "industrial-chemicals", name: "Industrial Chemicals", icon: "science", count: 5 },
  { slug: "water-treatment", name: "Water Treatment", icon: "water_drop", count: 5 },
  { slug: "specialty-chemicals", name: "Specialty Chemicals", icon: "experiment", count: 2 },
  { slug: "textile-chemicals", name: "Textile Chemicals", icon: "styler", count: 0 },
  { slug: "pharma-intermediates", name: "Pharma Intermediates", icon: "medication", count: 0 },
];

export const industryFilters = [
  "Agriculture",
  "Automotive",
  "Construction",
  "Electronics",
  "Food & Beverage",
  "Healthcare",
  "Oil & Gas",
  "Paper & Pulp",
  "Paints & Coatings",
  "Personal Care",
  "Pharmaceuticals",
  "Textiles",
];
