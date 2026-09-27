export interface IndustryChemical {
  name: string;
  casNumber?: string;
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
    slug: 'soaps-and-detergent',
    name: 'Soaps & Detergent',
    icon: 'cleaning_services',
    description: 'High-quality chemical supplies for the formulation of soaps, liquid detergents, and industrial cleaners.',
    heroDescription: 'Comprehensive cleaning chemical solutions for household, commercial, and industrial hygiene products. We supply key ingredients like surfactants, builders, and bleaches for optimum cleaning performance.',
    applications: [
      {
        icon: 'cleaning_services',
        title: 'Cleaning & Washing',
        description: 'Surfactants and base chemicals for powerful soil removal and foaming.',
      },
      {
        icon: 'science',
        title: 'Formulation & Blending',
        description: 'Builders, neutralizers, and thickeners for stable detergent formulas.',
      },
      {
        icon: 'flare',
        title: 'Bleaching & Brightening',
        description: 'Chemicals designed to remove stains and improve fabric whiteness.',
      }
    ],
    chemicals: [
      { name: 'Acid Slurry', application: 'Surfactant', productSlug: 'acid-slurry' },
      { name: 'Caustic Soda Flakes', application: 'Neutralizer', productSlug: 'caustic-soda-flakes' },
      { name: 'Soda Ash', application: 'Builder', productSlug: 'soda-ash' },
      { name: 'LABSA', application: 'Surfactant', productSlug: 'labsa' },
      { name: 'SLES', application: 'Foaming Agent', productSlug: 'sles' },
    ],
  },
  {
    slug: 'textile-industry',
    name: 'Textile Industry',
    icon: 'styler',
    description: 'Specialty textile processing chemicals for pre-treatment, dyeing, printing, and finishing.',
    heroDescription: 'End-to-end chemical solutions for textile manufacturing, ensuring brilliant colors, excellent fastness, and superior fabric feel through advanced dyeing, finishing, and bleaching agents.',
    applications: [
      {
        icon: 'palette',
        title: 'Dyeing & Printing',
        description: 'Auxiliaries and pH regulators to ensure even dyeing and color retention.',
      },
      {
        icon: 'cleaning_services',
        title: 'Pre-treatment',
        description: 'Scouring, bleaching, and desizing chemicals to prepare fabrics.',
      },
      {
        icon: 'texture',
        title: 'Finishing',
        description: 'Softeners and specific finishing agents for improved textile properties.',
      }
    ],
    chemicals: [
      { name: 'Caustic Soda Flakes', application: 'Mercerizing', productSlug: 'caustic-soda-flakes-textile' },
      { name: 'Acetic Acid', application: 'pH Adjustment', productSlug: 'acetic-acid' },
      { name: 'Hydrogen Peroxide', application: 'Bleaching', productSlug: 'hydrogen-peroxide-textile' },
      { name: 'Optical Brightening Agent', application: 'Whitening', productSlug: 'optical-brightening-agent' },
      { name: 'Sodium Hydrosulphite', application: 'Reducing Agent', productSlug: 'sodium-hydrosulphite' },
    ],
  },
  {
    slug: 'food-industry',
    name: 'Food Industry',
    icon: 'restaurant',
    description: 'Food-grade chemicals, additives, and preservatives ensuring safety and quality.',
    heroDescription: 'Supplying top-tier food-grade ingredients and additives that enhance preservation, flavor profiling, and nutritional stability, complying with stringent food safety standards.',
    applications: [
      {
        icon: 'shield',
        title: 'Preservatives',
        description: 'Chemicals that extend shelf-life by preventing microbial growth.',
      },
      {
        icon: 'restaurant_menu',
        title: 'Flavor & Acidity Regulation',
        description: 'Acidulants and buffers used to control taste and pH levels.',
      },
      {
        icon: 'science',
        title: 'Processing Aids',
        description: 'Substances used to improve efficiency during food processing operations.',
      }
    ],
    chemicals: [
      { name: 'Citric Acid', application: 'Acidulant', productSlug: 'citric-acid' },
      { name: 'Phosphoric Acid', application: 'pH Control', productSlug: 'phosphoric-acid' },
      { name: 'Sodium Bi Carbonate', application: 'Leavening Agent', productSlug: 'sodium-bi-carbonate' },
      { name: 'Potassium Sorbate', application: 'Preservative', productSlug: 'potassium-sorbate' },
      { name: 'Sodium Benzoate', application: 'Preservative', productSlug: 'sodium-benzoate' },
    ],
  },
  {
    slug: 'oil-field',
    name: 'Oil Field',
    icon: 'oil_barrel',
    description: 'Specialized oilfield chemicals for drilling, cementing, and production operations.',
    heroDescription: 'High-performance chemicals for upstream oil and gas operations, including advanced drilling fluid additives, well stimulation agents, and reliable exploration/production chemicals.',
    applications: [
      {
        icon: 'water_drop',
        title: 'Drilling Fluids',
        description: 'Additives that control viscosity, density, and fluid loss during drilling.',
      },
      {
        icon: 'oil_barrel',
        title: 'Well Stimulation',
        description: 'Chemicals used in fracturing and acidizing to enhance recovery.',
      },
      {
        icon: 'precision_manufacturing',
        title: 'Production Chemicals',
        description: 'Treatments for flow assurance, scale inhibition, and corrosion control.',
      }
    ],
    chemicals: [
      { name: 'Calcium Chloride', application: 'Completion Fluid', productSlug: 'calcium-chloride' },
      { name: 'Barite', application: 'Weighting Agent', productSlug: 'barite' },
      { name: 'Bentonite', application: 'Viscosifier', productSlug: 'bentonite' },
      { name: 'Xanthan Gum', application: 'Rheology Modifier', productSlug: 'xanthan-gum' },
    ],
  },
  {
    slug: 'plastic-industry',
    name: 'Plastic Industry',
    icon: 'category',
    description: 'Vital additives and processing aids for polymer compounding and plastic manufacturing.',
    heroDescription: 'Extensive portfolio of plasticizer chemicals, fillers, lubricants, and polymer stabilizers designed to improve the physical properties and processability of plastic products.',
    applications: [
      {
        icon: 'layers',
        title: 'Fillers & Reinforcements',
        description: 'Minerals and compounds used to enhance strength and reduce costs.',
      },
      {
        icon: 'shield',
        title: 'Lubricants & Stabilizers',
        description: 'Additives that prevent degradation and aid in mold release.',
      },
      {
        icon: 'format_paint',
        title: 'Pigments & Additives',
        description: 'Colorants and functional additives for aesthetic and performance enhancements.',
      }
    ],
    chemicals: [
      { name: 'Calcium Carbonate', application: 'Filler', productSlug: 'calcium-carbonate' },
      { name: 'Zinc Stearate', application: 'Lubricant', productSlug: 'zinc-stearate' },
      { name: 'Stearic Acid', application: 'Processing Aid', productSlug: 'stearic-acid' },
      { name: 'Titanium Dioxide', application: 'White Pigment', productSlug: 'titanium-dioxide' },
    ],
  },
  {
    slug: 'pharma-industry',
    name: 'Pharma Industry',
    icon: 'medication',
    description: 'High-purity pharmaceutical intermediates, solvents, and excipients for drug manufacturing.',
    heroDescription: 'Reliable supply of critical API building blocks, high-purity solvents, and essential excipients supporting the production of safe and effective pharmaceutical formulations.',
    applications: [
      {
        icon: 'medication',
        title: 'Active Pharmaceutical Ingredients',
        description: 'Intermediates and raw materials essential for API synthesis.',
      },
      {
        icon: 'vaccines',
        title: 'Excipients & Binders',
        description: 'Inactive substances used as carriers or performance enhancers in drugs.',
      },
      {
        icon: 'science',
        title: 'Solvents & Reagents',
        description: 'High-purity liquids used in extraction, synthesis, and purification.',
      }
    ],
    chemicals: [
      { name: 'Isopropyl Alcohol', application: 'Solvent', productSlug: 'isopropyl-alcohol' },
      { name: 'Citric Acid', application: 'Buffer', productSlug: 'citric-acid-pharma' },
      { name: 'Talc', application: 'Glidant', productSlug: 'talc' },
      { name: 'Magnesium Stearate', application: 'Lubricant', productSlug: 'magnesium-stearate' },
      { name: 'Povidone', application: 'Binder', productSlug: 'povidone' },
    ],
  },
  {
    slug: 'other-items',
    name: 'General Chemicals',
    icon: 'science',
    description: 'A diverse portfolio of general-purpose industrial chemicals for multiple manufacturing sectors.',
    heroDescription: 'Providing a broad spectrum of essential chemical commodities, water treatment solutions, and specialty compounds that cater to general industrial applications and diverse manufacturing needs.',
    applications: [
      {
        icon: 'precision_manufacturing',
        title: 'General Industrial Processes',
        description: 'Acids, bases, and salts utilized in everyday manufacturing routines.',
      },
      {
        icon: 'science',
        title: 'Specialty Chemicals',
        description: 'Custom chemicals designed for niche industrial functions.',
      },
      {
        icon: 'eco',
        title: 'Water & Environmental',
        description: 'Coagulants and disinfectants for environmental management and water treatment.',
      }
    ],
    chemicals: [
      { name: 'Potassium Permanganate', application: 'Oxidizing Agent', productSlug: 'potassium-permanganate' },
      { name: 'Ferric Chloride', application: 'Coagulant', productSlug: 'ferric-chloride' },
      { name: 'Alum', application: 'Flocculant', productSlug: 'alum' },
      { name: 'Poly Aluminium Chloride', application: 'Water Treatment', productSlug: 'poly-aluminium-chloride' },
      { name: 'Bleaching Powder', application: 'Disinfectant', productSlug: 'bleaching-powder' },
    ],
  }
];
