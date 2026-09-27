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
    "slug": "acid-slurry",
    "name": "Acid Slurry",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Soaps and Detergent",
    "categorySlug": "soaps-and-detergent",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Acid Slurry is a premium chemical product supplied by Paras Chem India for the Soaps and Detergent.",
    "specifications": [],
    "applications": [],
    "icon": "cleaning_services"
  },
  {
    "slug": "caustic-soda-flakes",
    "name": "Caustic Soda Flakes",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Soaps and Detergent",
    "categorySlug": "soaps-and-detergent",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Caustic Soda Flakes is a premium chemical product supplied by Paras Chem India for the Soaps and Detergent.",
    "specifications": [],
    "applications": [],
    "icon": "cleaning_services"
  },
  {
    "slug": "caustic-lye",
    "name": "Caustic Lye",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Soaps and Detergent",
    "categorySlug": "soaps-and-detergent",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Caustic Lye is a premium chemical product supplied by Paras Chem India for the Soaps and Detergent.",
    "specifications": [],
    "applications": [],
    "icon": "cleaning_services"
  },
  {
    "slug": "soda-ash",
    "name": "Soda Ash",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Soaps and Detergent",
    "categorySlug": "soaps-and-detergent",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Soda Ash is a premium chemical product supplied by Paras Chem India for the Soaps and Detergent.",
    "specifications": [],
    "applications": [],
    "icon": "cleaning_services"
  },
  {
    "slug": "sodium-tri-poly-phosphate-stpp",
    "name": "Sodium Tri Poly Phosphate (STPP)",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Soaps and Detergent",
    "categorySlug": "soaps-and-detergent",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Tri Poly Phosphate (STPP) is a premium chemical product supplied by Paras Chem India for the Soaps and Detergent.",
    "specifications": [],
    "applications": [],
    "icon": "cleaning_services"
  },
  {
    "slug": "alpha-olefin-sulfonate-a-o-s",
    "name": "Alpha Olefin Sulfonate (A.O.S.)",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Soaps and Detergent",
    "categorySlug": "soaps-and-detergent",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Alpha Olefin Sulfonate (A.O.S.) is a premium chemical product supplied by Paras Chem India for the Soaps and Detergent.",
    "specifications": [],
    "applications": [],
    "icon": "cleaning_services"
  },
  {
    "slug": "sodium-lauryl-ether-sulphates-s-l-e-s",
    "name": "Sodium Lauryl Ether Sulphates (S.L.E.S.)",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Soaps and Detergent",
    "categorySlug": "soaps-and-detergent",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Lauryl Ether Sulphates (S.L.E.S.) is a premium chemical product supplied by Paras Chem India for the Soaps and Detergent.",
    "specifications": [],
    "applications": [],
    "icon": "cleaning_services"
  },
  {
    "slug": "refined-glyceriene",
    "name": "Refined Glyceriene",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Soaps and Detergent",
    "categorySlug": "soaps-and-detergent",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Refined Glyceriene is a premium chemical product supplied by Paras Chem India for the Soaps and Detergent.",
    "specifications": [],
    "applications": [],
    "icon": "cleaning_services"
  },
  {
    "slug": "cocamidopropyl-betaine-capb",
    "name": "Cocamidopropyl Betaine (CAPB)",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Soaps and Detergent",
    "categorySlug": "soaps-and-detergent",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Cocamidopropyl Betaine (CAPB) is a premium chemical product supplied by Paras Chem India for the Soaps and Detergent.",
    "specifications": [],
    "applications": [],
    "icon": "cleaning_services"
  },
  {
    "slug": "coconut-diethanolamide-cdea",
    "name": "Coconut Diethanolamide (CDEA)",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Soaps and Detergent",
    "categorySlug": "soaps-and-detergent",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Coconut Diethanolamide (CDEA) is a premium chemical product supplied by Paras Chem India for the Soaps and Detergent.",
    "specifications": [],
    "applications": [],
    "icon": "cleaning_services"
  },
  {
    "slug": "acrylic-acid",
    "name": "Acrylic Acid",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Textile Industry",
    "categorySlug": "textile-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Acrylic Acid is a premium chemical product supplied by Paras Chem India for the Textile Industry.",
    "specifications": [],
    "applications": [],
    "icon": "styler"
  },
  {
    "slug": "borax",
    "name": "Borax",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Textile Industry",
    "categorySlug": "textile-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Borax is a premium chemical product supplied by Paras Chem India for the Textile Industry.",
    "specifications": [],
    "applications": [],
    "icon": "styler"
  },
  {
    "slug": "boric-acid",
    "name": "Boric Acid",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Textile Industry",
    "categorySlug": "textile-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Boric Acid is a premium chemical product supplied by Paras Chem India for the Textile Industry.",
    "specifications": [],
    "applications": [],
    "icon": "styler"
  },
  {
    "slug": "citric-acid",
    "name": "Citric Acid",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Textile Industry",
    "categorySlug": "textile-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Citric Acid is a premium chemical product supplied by Paras Chem India for the Textile Industry.",
    "specifications": [],
    "applications": [],
    "icon": "styler"
  },
  {
    "slug": "emulsifier-9-5-4-5-1-5-mol",
    "name": "Emulsifier (9.5/4.5/1.5 MOL)",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Textile Industry",
    "categorySlug": "textile-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Emulsifier (9.5/4.5/1.5 MOL) is a premium chemical product supplied by Paras Chem India for the Textile Industry.",
    "specifications": [],
    "applications": [],
    "icon": "styler"
  },
  {
    "slug": "phosphoric-acid",
    "name": "Phosphoric Acid",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Textile Industry",
    "categorySlug": "textile-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Phosphoric Acid is a premium chemical product supplied by Paras Chem India for the Textile Industry.",
    "specifications": [],
    "applications": [],
    "icon": "styler"
  },
  {
    "slug": "sodium-formate",
    "name": "Sodium Formate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Textile Industry",
    "categorySlug": "textile-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Formate is a premium chemical product supplied by Paras Chem India for the Textile Industry.",
    "specifications": [],
    "applications": [],
    "icon": "styler"
  },
  {
    "slug": "sodium-glucomate",
    "name": "Sodium Glucomate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Textile Industry",
    "categorySlug": "textile-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Glucomate is a premium chemical product supplied by Paras Chem India for the Textile Industry.",
    "specifications": [],
    "applications": [],
    "icon": "styler"
  },
  {
    "slug": "stearic-acid",
    "name": "Stearic Acid",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Textile Industry",
    "categorySlug": "textile-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Stearic Acid is a premium chemical product supplied by Paras Chem India for the Textile Industry.",
    "specifications": [],
    "applications": [],
    "icon": "styler"
  },
  {
    "slug": "acetic-acid",
    "name": "Acetic Acid",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Food Industry",
    "categorySlug": "food-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Acetic Acid is a premium chemical product supplied by Paras Chem India for the Food Industry.",
    "specifications": [],
    "applications": [],
    "icon": "restaurant"
  },
  {
    "slug": "sodium-benzoate",
    "name": "Sodium Benzoate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Food Industry",
    "categorySlug": "food-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Benzoate is a premium chemical product supplied by Paras Chem India for the Food Industry.",
    "specifications": [],
    "applications": [],
    "icon": "restaurant"
  },
  {
    "slug": "sorbitol",
    "name": "Sorbitol",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Food Industry",
    "categorySlug": "food-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sorbitol is a premium chemical product supplied by Paras Chem India for the Food Industry.",
    "specifications": [],
    "applications": [],
    "icon": "restaurant"
  },
  {
    "slug": "sodium-monofluorophosphate",
    "name": "Sodium Monofluorophosphate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Food Industry",
    "categorySlug": "food-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Monofluorophosphate is a premium chemical product supplied by Paras Chem India for the Food Industry.",
    "specifications": [],
    "applications": [],
    "icon": "restaurant"
  },
  {
    "slug": "di-ethanol-amine",
    "name": "Di Ethanol Amine",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Oil Field",
    "categorySlug": "oil-field",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Di Ethanol Amine is a premium chemical product supplied by Paras Chem India for the Oil Field.",
    "specifications": [],
    "applications": [],
    "icon": "oil_barrel"
  },
  {
    "slug": "mono-ethanol-amine",
    "name": "Mono Ethanol Amine",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Oil Field",
    "categorySlug": "oil-field",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Mono Ethanol Amine is a premium chemical product supplied by Paras Chem India for the Oil Field.",
    "specifications": [],
    "applications": [],
    "icon": "oil_barrel"
  },
  {
    "slug": "butyl-glycol",
    "name": "Butyl Glycol",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Oil Field",
    "categorySlug": "oil-field",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Butyl Glycol is a premium chemical product supplied by Paras Chem India for the Oil Field.",
    "specifications": [],
    "applications": [],
    "icon": "oil_barrel"
  },
  {
    "slug": "mono-ethylene-glycol",
    "name": "Mono Ethylene Glycol",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Oil Field",
    "categorySlug": "oil-field",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Mono Ethylene Glycol is a premium chemical product supplied by Paras Chem India for the Oil Field.",
    "specifications": [],
    "applications": [],
    "icon": "oil_barrel"
  },
  {
    "slug": "di-ethylene-glycol",
    "name": "Di Ethylene Glycol",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Oil Field",
    "categorySlug": "oil-field",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Di Ethylene Glycol is a premium chemical product supplied by Paras Chem India for the Oil Field.",
    "specifications": [],
    "applications": [],
    "icon": "oil_barrel"
  },
  {
    "slug": "proplene-glycol",
    "name": "Proplene Glycol",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Oil Field",
    "categorySlug": "oil-field",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Proplene Glycol is a premium chemical product supplied by Paras Chem India for the Oil Field.",
    "specifications": [],
    "applications": [],
    "icon": "oil_barrel"
  },
  {
    "slug": "iso-propyl-alcohol",
    "name": "Iso Propyl Alcohol",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Plastic Industry",
    "categorySlug": "plastic-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Iso Propyl Alcohol is a premium chemical product supplied by Paras Chem India for the Plastic Industry.",
    "specifications": [],
    "applications": [],
    "icon": "category"
  },
  {
    "slug": "titanium-dioxide",
    "name": "Titanium Dioxide",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Plastic Industry",
    "categorySlug": "plastic-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Titanium Dioxide is a premium chemical product supplied by Paras Chem India for the Plastic Industry.",
    "specifications": [],
    "applications": [],
    "icon": "category"
  },
  {
    "slug": "zinc-oxide",
    "name": "Zinc Oxide",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Plastic Industry",
    "categorySlug": "plastic-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Zinc Oxide is a premium chemical product supplied by Paras Chem India for the Plastic Industry.",
    "specifications": [],
    "applications": [],
    "icon": "category"
  },
  {
    "slug": "pigments",
    "name": "Pigments",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Plastic Industry",
    "categorySlug": "plastic-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Pigments is a premium chemical product supplied by Paras Chem India for the Plastic Industry.",
    "specifications": [],
    "applications": [],
    "icon": "category"
  },
  {
    "slug": "dimethyl-sulfoxide-dmso",
    "name": "Dimethyl Sulfoxide (DMSO)",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Pharma Industry",
    "categorySlug": "pharma-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Dimethyl Sulfoxide (DMSO) is a premium chemical product supplied by Paras Chem India for the Pharma Industry.",
    "specifications": [],
    "applications": [],
    "icon": "medication"
  },
  {
    "slug": "refined-glycerine",
    "name": "Refined Glycerine",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Pharma Industry",
    "categorySlug": "pharma-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Refined Glycerine is a premium chemical product supplied by Paras Chem India for the Pharma Industry.",
    "specifications": [],
    "applications": [],
    "icon": "medication"
  },
  {
    "slug": "chloroform",
    "name": "Chloroform",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Pharma Industry",
    "categorySlug": "pharma-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Chloroform is a premium chemical product supplied by Paras Chem India for the Pharma Industry.",
    "specifications": [],
    "applications": [],
    "icon": "medication"
  },
  {
    "slug": "iodine",
    "name": "Iodine",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Pharma Industry",
    "categorySlug": "pharma-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Iodine is a premium chemical product supplied by Paras Chem India for the Pharma Industry.",
    "specifications": [],
    "applications": [],
    "icon": "medication"
  },
  {
    "slug": "di-methyl-formamide-dmf",
    "name": "Di Methyl Formamide (DMF)",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Pharma Industry",
    "categorySlug": "pharma-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Di Methyl Formamide (DMF) is a premium chemical product supplied by Paras Chem India for the Pharma Industry.",
    "specifications": [],
    "applications": [],
    "icon": "medication"
  },
  {
    "slug": "tetra-hydrofuren-thf",
    "name": "Tetra Hydrofuren (THF)",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Pharma Industry",
    "categorySlug": "pharma-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Tetra Hydrofuren (THF) is a premium chemical product supplied by Paras Chem India for the Pharma Industry.",
    "specifications": [],
    "applications": [],
    "icon": "medication"
  },
  {
    "slug": "paraformaldehde-96",
    "name": "Paraformaldehde 96%",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Pharma Industry",
    "categorySlug": "pharma-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Paraformaldehde 96% is a premium chemical product supplied by Paras Chem India for the Pharma Industry.",
    "specifications": [],
    "applications": [],
    "icon": "medication"
  },
  {
    "slug": "benzyl-alcohol",
    "name": "Benzyl Alcohol",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Pharma Industry",
    "categorySlug": "pharma-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Benzyl Alcohol is a premium chemical product supplied by Paras Chem India for the Pharma Industry.",
    "specifications": [],
    "applications": [],
    "icon": "medication"
  },
  {
    "slug": "benzyl-chloride",
    "name": "Benzyl Chloride",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Pharma Industry",
    "categorySlug": "pharma-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Benzyl Chloride is a premium chemical product supplied by Paras Chem India for the Pharma Industry.",
    "specifications": [],
    "applications": [],
    "icon": "medication"
  },
  {
    "slug": "poly-ethylene-glycol-peg",
    "name": "Poly Ethylene Glycol (PEG)",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Pharma Industry",
    "categorySlug": "pharma-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Poly Ethylene Glycol (PEG) is a premium chemical product supplied by Paras Chem India for the Pharma Industry.",
    "specifications": [],
    "applications": [],
    "icon": "medication"
  },
  {
    "slug": "acetone",
    "name": "Acetone",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Pharma Industry",
    "categorySlug": "pharma-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Acetone is a premium chemical product supplied by Paras Chem India for the Pharma Industry.",
    "specifications": [],
    "applications": [],
    "icon": "medication"
  },
  {
    "slug": "tri-ethyl-ortho-formate",
    "name": "Tri Ethyl Ortho Formate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Pharma Industry",
    "categorySlug": "pharma-industry",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Tri Ethyl Ortho Formate is a premium chemical product supplied by Paras Chem India for the Pharma Industry.",
    "specifications": [],
    "applications": [],
    "icon": "medication"
  },
  {
    "slug": "calcium-carbonate",
    "name": "Calcium Carbonate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Calcium Carbonate is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "caustic-soda-potash",
    "name": "Caustic Soda Potash",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Caustic Soda Potash is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "citric-acid-monohydrate",
    "name": "Citric Acid Monohydrate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Citric Acid Monohydrate is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "citric-acid-anhydrous",
    "name": "Citric Acid Anhydrous",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Citric Acid Anhydrous is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "di-butyl-phthalate",
    "name": "Di Butyl Phthalate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Di Butyl Phthalate is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "di-ethylene-triamine",
    "name": "Di Ethylene Triamine",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Di Ethylene Triamine is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "hydrazine-hydride",
    "name": "Hydrazine Hydride",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Hydrazine Hydride is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "sodium-thiosulphate",
    "name": "Sodium Thiosulphate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Thiosulphate is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "sodium-nitrate",
    "name": "Sodium Nitrate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Nitrate is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "sodium-nitrite",
    "name": "Sodium Nitrite",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Nitrite is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "sodium-bicromate",
    "name": "Sodium Bicromate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Bicromate is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "sodium-hydrosulphide",
    "name": "Sodium Hydrosulphide",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Hydrosulphide is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "sodium-hypo-chloride",
    "name": "Sodium Hypo Chloride",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Hypo Chloride is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "sulphur-black",
    "name": "Sulphur Black",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sulphur Black is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "turkey-red-oil",
    "name": "Turkey Red Oil",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Turkey Red Oil is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "tcca-90",
    "name": "TCCA 90%",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "TCCA 90% is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "tri-sodium-phosphate",
    "name": "Tri Sodium Phosphate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Tri Sodium Phosphate is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "dicalcium-phosphate",
    "name": "Dicalcium Phosphate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Dicalcium Phosphate is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "oxalic-acid",
    "name": "Oxalic Acid",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Oxalic Acid is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "bleaching-powder",
    "name": "Bleaching Powder",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Bleaching Powder is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "formic-acid",
    "name": "Formic Acid",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Formic Acid is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "ferric-chloride",
    "name": "Ferric Chloride",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Ferric Chloride is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "copper-sulphate",
    "name": "Copper Sulphate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Copper Sulphate is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "sodium-acetate",
    "name": "Sodium Acetate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Acetate is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "sodium-bi-carbonate",
    "name": "Sodium Bi Carbonate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Bi Carbonate is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "sodium-meta-bisulphite",
    "name": "Sodium Meta Bisulphite",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Meta Bisulphite is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "sodium-sulphate",
    "name": "Sodium Sulphate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Sulphate is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "sodium-sulphite",
    "name": "Sodium Sulphite",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Sulphite is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "caustic-soda-prills",
    "name": "Caustic Soda Prills",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Caustic Soda Prills is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "hydrated-lime",
    "name": "Hydrated Lime",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Hydrated Lime is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "dolomite-powder",
    "name": "Dolomite Powder",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Dolomite Powder is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "megawhite-2b-tinopol",
    "name": "Megawhite 2B / Tinopol",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Megawhite 2B / Tinopol is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "hydrogen-peroxide",
    "name": "Hydrogen Peroxide",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Hydrogen Peroxide is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "formaldehyde",
    "name": "Formaldehyde",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Formaldehyde is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "ammonium-chloride",
    "name": "Ammonium Chloride",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Ammonium Chloride is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "hcl",
    "name": "HCL",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "HCL is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "ammonia-alum-lumps",
    "name": "Ammonia Alum Lumps",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Ammonia Alum Lumps is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "potassium-permanganate",
    "name": "Potassium Permanganate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Potassium Permanganate is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "eco-acid",
    "name": "Eco-Acid",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Eco-Acid is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "d-c-d-a",
    "name": "D.C.D.A.",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "D.C.D.A. is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "calcium-chloride",
    "name": "Calcium Chloride",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Calcium Chloride is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "magnesium-chloride",
    "name": "Magnesium Chloride",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Magnesium Chloride is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "magnesium-sulphate",
    "name": "Magnesium Sulphate",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Magnesium Sulphate is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "sodium-chloride",
    "name": "Sodium Chloride",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "Sodium Chloride is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  },
  {
    "slug": "china-clay",
    "name": "China Clay",
    "casNumber": "TBA",
    "formula": "TBA",
    "category": "Other Items",
    "categorySlug": "other-items",
    "purity": "Standard",
    "grades": [
      "Industrial"
    ],
    "status": "Available",
    "description": "China Clay is a premium chemical product supplied by Paras Chem India for the Other Items.",
    "specifications": [],
    "applications": [],
    "icon": "science"
  }
];

export const categories = [
  {
    "slug": "soaps-and-detergent",
    "name": "Soaps and Detergent",
    "icon": "cleaning_services",
    "count": 10
  },
  {
    "slug": "textile-industry",
    "name": "Textile Industry",
    "icon": "styler",
    "count": 9
  },
  {
    "slug": "food-industry",
    "name": "Food Industry",
    "icon": "restaurant",
    "count": 5
  },
  {
    "slug": "oil-field",
    "name": "Oil Field",
    "icon": "oil_barrel",
    "count": 6
  },
  {
    "slug": "plastic-industry",
    "name": "Plastic Industry",
    "icon": "category",
    "count": 4
  },
  {
    "slug": "pharma-industry",
    "name": "Pharma Industry",
    "icon": "medication",
    "count": 14
  },
  {
    "slug": "other-items",
    "name": "Other Items",
    "icon": "science",
    "count": 45
  }
];

export const industryFilters = [
  "Soaps and Detergent",
  "Textile Industry",
  "Food Industry",
  "Oil Field",
  "Plastic Industry",
  "Pharma Industry",
  "Other Items"
];
