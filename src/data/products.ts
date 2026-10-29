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
    "casNumber": "27176-87-0",
    "formula": "C18H30O3S",
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
    "casNumber": "1310-73-2",
    "formula": "NaOH",
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
    "casNumber": "1310-73-2",
    "formula": "NaOH (aq)",
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
    "casNumber": "497-19-8",
    "formula": "Na2CO3",
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
    "casNumber": "7758-29-4",
    "formula": "Na5P3O10",
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
    "casNumber": "68439-57-6",
    "formula": "R-CH=CH-(CH2)n-SO3Na",
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
    "casNumber": "68585-34-2",
    "formula": "CH3(CH2)11(OCH2CH2)nOSO3Na",
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
    "casNumber": "56-81-5",
    "formula": "C3H8O3",
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
    "casNumber": "61789-40-0",
    "formula": "C19H38N2O3",
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
    "casNumber": "68603-42-9",
    "formula": "CH3(CH2)nC(=O)N(CH2CH2OH)2",
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
    "casNumber": "79-10-7",
    "formula": "C3H4O2",
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
    "casNumber": "1303-96-4",
    "formula": "Na2B4O7·10H2O",
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
    "casNumber": "10043-35-3",
    "formula": "H3BO3",
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
    "casNumber": "77-92-9",
    "formula": "C6H8O7",
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
    "casNumber": "9016-45-9",
    "formula": "C9H19C6H4(OCH2CH2)nOH",
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
    "casNumber": "7664-38-2",
    "formula": "H3PO4",
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
    "casNumber": "141-53-7",
    "formula": "HCOONa",
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
    "casNumber": "527-07-1",
    "formula": "C6H11NaO7",
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
    "casNumber": "57-11-4",
    "formula": "C18H36O2",
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
    "casNumber": "64-19-7",
    "formula": "CH3COOH",
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
    "casNumber": "532-32-1",
    "formula": "C7H5NaO2",
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
    "casNumber": "50-70-4",
    "formula": "C6H14O6",
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
    "casNumber": "10163-15-2",
    "formula": "Na2PO3F",
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
    "casNumber": "111-42-2",
    "formula": "C4H11NO2",
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
    "casNumber": "141-43-5",
    "formula": "C2H7NO",
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
    "casNumber": "111-76-2",
    "formula": "C6H14O2",
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
    "casNumber": "107-21-1",
    "formula": "C2H6O2",
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
    "casNumber": "111-46-6",
    "formula": "C4H10O3",
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
    "casNumber": "57-55-6",
    "formula": "C3H8O2",
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
    "casNumber": "67-63-0",
    "formula": "C3H8O",
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
    "casNumber": "13463-67-7",
    "formula": "TiO2",
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
    "casNumber": "1314-13-2",
    "formula": "ZnO",
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
    "casNumber": "147-14-8",
    "formula": "C32H16CuN8",
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
    "casNumber": "67-68-5",
    "formula": "C2H6OS",
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
    "casNumber": "56-81-5",
    "formula": "C3H8O3",
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
    "casNumber": "67-66-3",
    "formula": "CHCl3",
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
    "casNumber": "7553-56-2",
    "formula": "I2",
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
    "casNumber": "68-12-2",
    "formula": "C3H7NO",
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
    "casNumber": "109-99-9",
    "formula": "C4H8O",
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
    "casNumber": "30525-89-4",
    "formula": "(CH2O)n",
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
    "casNumber": "100-51-6",
    "formula": "C7H8O",
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
    "casNumber": "100-44-7",
    "formula": "C7H7Cl",
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
    "casNumber": "25322-68-3",
    "formula": "H(OCH2CH2)nOH",
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
    "casNumber": "67-64-1",
    "formula": "C3H6O",
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
    "casNumber": "122-51-0",
    "formula": "C7H16O3",
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
    "casNumber": "471-34-1",
    "formula": "CaCO3",
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
    "casNumber": "1310-58-3",
    "formula": "KOH",
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
    "casNumber": "5949-29-1",
    "formula": "C6H8O7·H2O",
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
    "casNumber": "77-92-9",
    "formula": "C6H8O7",
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
    "casNumber": "84-74-2",
    "formula": "C16H22O4",
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
    "casNumber": "111-40-0",
    "formula": "C4H13N3",
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
    "casNumber": "10217-52-4",
    "formula": "N2H4·H2O",
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
    "casNumber": "7772-98-7",
    "formula": "Na2S2O3·5H2O",
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
    "casNumber": "7631-99-4",
    "formula": "NaNO3",
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
    "casNumber": "7632-00-0",
    "formula": "NaNO2",
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
    "casNumber": "10588-01-9",
    "formula": "Na2Cr2O7·2H2O",
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
    "casNumber": "16721-80-5",
    "formula": "NaHS",
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
    "casNumber": "7681-52-9",
    "formula": "NaClO",
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
    "casNumber": "1326-82-5",
    "formula": "C6H4N2O5",
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
    "casNumber": "8002-33-3",
    "formula": "C18H34O6SNa",
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
    "casNumber": "87-90-1",
    "formula": "C3Cl3N3O3",
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
    "casNumber": "7601-54-9",
    "formula": "Na3PO4·12H2O",
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
    "casNumber": "7757-93-9",
    "formula": "CaHPO4·2H2O",
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
    "casNumber": "144-62-7",
    "formula": "C2H2O4·2H2O",
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
    "casNumber": "7778-54-3",
    "formula": "Ca(OCl)2",
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
    "casNumber": "64-18-6",
    "formula": "HCOOH",
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
    "casNumber": "7705-08-0",
    "formula": "FeCl3·6H2O",
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
    "casNumber": "7758-99-8",
    "formula": "CuSO4·5H2O",
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
    "casNumber": "127-09-3",
    "formula": "CH3COONa",
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
    "casNumber": "144-55-8",
    "formula": "NaHCO3",
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
    "casNumber": "7681-57-4",
    "formula": "Na2S2O5",
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
    "casNumber": "7757-82-6",
    "formula": "Na2SO4",
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
    "casNumber": "7757-83-7",
    "formula": "Na2SO3",
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
    "casNumber": "1310-73-2",
    "formula": "NaOH",
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
    "casNumber": "1305-62-0",
    "formula": "Ca(OH)2",
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
    "casNumber": "16389-88-1",
    "formula": "CaMg(CO3)2",
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
    "casNumber": "4193-55-9",
    "formula": "C40H44N12Na4O14S4",
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
    "casNumber": "7722-84-1",
    "formula": "H2O2",
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
    "casNumber": "50-00-0",
    "formula": "CH2O",
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
    "casNumber": "12125-02-9",
    "formula": "NH4Cl",
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
    "casNumber": "7647-01-0",
    "formula": "HCl",
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
    "casNumber": "7784-26-1",
    "formula": "NH4Al(SO4)2·12H2O",
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
    "casNumber": "7722-64-7",
    "formula": "KMnO4",
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
    "casNumber": "5949-29-1",
    "formula": "C6H8O7 / Organic",
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
    "casNumber": "461-58-5",
    "formula": "C2H4N4",
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
    "casNumber": "10043-52-4",
    "formula": "CaCl2",
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
    "casNumber": "7786-30-3",
    "formula": "MgCl2·6H2O",
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
    "casNumber": "7487-88-9",
    "formula": "MgSO4·7H2O",
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
    "casNumber": "7647-14-5",
    "formula": "NaCl",
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
    "casNumber": "1332-58-7",
    "formula": "Al2Si2O5(OH)4",
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
