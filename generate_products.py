import json
import re

pdf_data = {
    "Soaps and Detergent": [
        "Acid Slurry", "Caustic Soda Flakes", "Caustic Lye", "Soda Ash", 
        "Sodium Tri Poly Phosphate (STPP)", "Alpha Olefin Sulfonate (A.O.S.)", 
        "Sodium Lauryl Ether Sulphates (S.L.E.S.)", "Refined Glyceriene", 
        "Cocamidopropyl Betaine (CAPB)", "Coconut Diethanolamide (CDEA)"
    ],
    "Textile Industry": [
        "Acrylic Acid", "Borax", "Boric Acid", "Citric Acid", 
        "Emulsifier (9.5/4.5/1.5 MOL)", "Phosphoric Acid", 
        "Sodium Formate", "Sodium Glucomate", "Stearic Acid"
    ],
    "Food Industry": [
        "Acetic Acid", "Citric Acid", "Sodium Benzoate", "Sorbitol", 
        "Sodium Monofluorophosphate"
    ],
    "Oil Field": [
        "Di Ethanol Amine", "Mono Ethanol Amine", "Butyl Glycol", 
        "Mono Ethylene Glycol", "Di Ethylene Glycol", "Proplene Glycol"
    ],
    "Plastic Industry": [
        "Iso Propyl Alcohol", "Titanium Dioxide", "Zinc Oxide", "Pigments"
    ],
    "Pharma Industry": [
        "Dimethyl Sulfoxide (DMSO)", "Refined Glycerine", "Proplene Glycol", 
        "Iso Propyl Alcohol", "Chloroform", "Iodine", "Di Methyl Formamide (DMF)", 
        "Tetra Hydrofuren (THF)", "Paraformaldehde 96%", "Benzyl Alcohol", 
        "Benzyl Chloride", "Poly Ethylene Glycol (PEG)", "Acetone", 
        "Tri Ethyl Ortho Formate"
    ],
    "Other Items": [
        "Calcium Carbonate", "Caustic Soda Potash", "Citric Acid Monohydrate", 
        "Citric Acid Anhydrous", "Di Butyl Phthalate", "Di Ethylene Triamine", 
        "Hydrazine Hydride", "Sodium Thiosulphate", "Sodium Nitrate", 
        "Sodium Nitrite", "Sodium Bicromate", "Sodium Hydrosulphide", 
        "Sodium Hypo Chloride", "Sulphur Black", "Turkey Red Oil", "TCCA 90%", 
        "Tri Sodium Phosphate", "Dicalcium Phosphate", "Oxalic Acid", 
        "Bleaching Powder", "Formic Acid", "Ferric Chloride", "Copper Sulphate", 
        "Sodium Acetate", "Sodium Bi Carbonate", "Sodium Meta Bisulphite", 
        "Sodium Sulphate", "Sodium Sulphite", "Caustic Soda Prills", 
        "Hydrated Lime", "Dolomite Powder", "Megawhite 2B / Tinopol", 
        "Hydrogen Peroxide", "Formaldehyde", "Ammonium Chloride", "HCL", 
        "Ammonia Alum Lumps", "Potassium Permanganate", "Eco-Acid", "D.C.D.A.", 
        "Calcium Chloride", "Magnesium Chloride", "Magnesium Sulphate", 
        "Sodium Chloride", "China Clay"
    ]
}

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

products = []
categories = []
seen_slugs = set()

icon_map = {
    "Soaps and Detergent": "cleaning_services",
    "Textile Industry": "styler",
    "Food Industry": "restaurant",
    "Oil Field": "oil_barrel",
    "Plastic Industry": "category",
    "Pharma Industry": "medication",
    "Other Items": "science"
}

for cat_name, items in pdf_data.items():
    cat_slug = slugify(cat_name)
    categories.append({
        "slug": cat_slug,
        "name": cat_name,
        "icon": icon_map.get(cat_name, "science"),
        "count": len(items)
    })
    
    for item in items:
        p_slug = slugify(item)
        if p_slug in seen_slugs:
            continue
        seen_slugs.add(p_slug)
        
        products.append({
            "slug": p_slug,
            "name": item,
            "casNumber": "TBA",
            "formula": "TBA",
            "category": cat_name,
            "categorySlug": cat_slug,
            "purity": "Standard",
            "grades": ["Industrial"],
            "status": "Available",
            "description": f"{item} is a premium chemical product supplied by Paras Chem India for the {cat_name}.",
            "specifications": [],
            "applications": [],
            "icon": icon_map.get(cat_name, "science")
        })

ts_content = f'''export interface ProductSpecification {{
  property: string;
  value: string;
  unit: string;
}}

export interface ProductApplication {{
  icon: string;
  title: string;
  description: string;
  industrySlug?: string;
}}

export interface Product {{
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
}}

export const products: Product[] = {json.dumps(products, indent=2)};

export const categories = {json.dumps(categories, indent=2)};

export const industryFilters = [
  "Soaps and Detergent",
  "Textile Industry",
  "Food Industry",
  "Oil Field",
  "Plastic Industry",
  "Pharma Industry",
  "Other Items"
];
'''

with open('src/data/products.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Generated src/data/products.ts")
