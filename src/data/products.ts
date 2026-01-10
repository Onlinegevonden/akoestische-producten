export interface ProductVariant {
  size: string;
  price: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: 'wandpanelen' | 'plafondpanelen';
  colors: string[];
  sizes: string[];
  material: string;
  variants: ProductVariant[];
  features: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  sku: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "akoestisch-wandpaneel-zwart",
    name: "Akoestisch Wandpaneel Zwart",
    shortDescription: "Stijlvol zwart wandpaneel voor optimale geluidsabsorptie",
    longDescription: "Dit hoogwaardige akoestische wandpaneel in elegant zwart is ontworpen voor maximale geluidsabsorptie. Perfect geschikt voor kantoren, thuiswerkplekken, woonkamers en professionele studio's. Het paneel vermindert echo en nagalm effectief, waardoor een aangename akoestische omgeving ontstaat. De moderne uitstraling past bij elk interieur en het paneel is eenvoudig te monteren met de meegeleverde montagekit.",
    price: 89.95,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800"
    ],
    category: "wandpanelen",
    colors: ["Zwart", "Grijs", "Wit"],
    sizes: ["60x60cm", "60x120cm", "100x100cm"],
    material: "Akoestische stof",
    variants: [
      { size: "60x60cm", price: 89.95 },
      { size: "60x120cm", price: 149.95 },
      { size: "100x100cm", price: 179.95 }
    ],
    features: [
      "NRC waarde: 0.85",
      "Brandklasse B1",
      "Eenvoudige montage",
      "Licht van gewicht"
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 124,
    sku: "WP-ZW-001",
    tags: ["bestseller", "kantoor", "thuiswerken"]
  },
  {
    id: "2",
    slug: "houten-wandpaneel-naturel",
    name: "Houten Wandpaneel Naturel",
    shortDescription: "Luxe houten wandpaneel combineert design met functionaliteit",
    longDescription: "Dit prachtige houten wandpaneel combineert de warmte van natuurlijk hout met uitstekende akoestische eigenschappen. De voorzijde is gemaakt van hoogwaardig eikenhout met een matte afwerking, terwijl de achterzijde voorzien is van akoestisch absorbeermateriaal. Ideaal voor wie een natuurlijke uitstraling zoekt zonder concessies te doen aan geluidscomfort. Elk paneel is uniek door de natuurlijke houtnerven.",
    price: 129.95,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
    ],
    category: "wandpanelen",
    colors: ["Naturel Eiken", "Walnoot"],
    sizes: ["60x120cm", "90x90cm"],
    material: "Hout met akoestische achterzijde",
    variants: [
      { size: "60x120cm", price: 129.95 },
      { size: "90x90cm", price: 149.95 }
    ],
    features: [
      "Echt hout fineer",
      "NRC waarde: 0.75",
      "FSC gecertificeerd",
      "Inclusief montagekit"
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
    sku: "WP-HN-002",
    tags: ["premium", "natuurlijk", "design"]
  },
  {
    id: "3",
    slug: "akoestisch-plafondpaneel-wit",
    name: "Akoestisch Plafondpaneel Wit",
    shortDescription: "Discreet wit plafondpaneel met uitstekende geluidsabsorptie",
    longDescription: "Dit professionele plafondpaneel in strak wit is de perfecte oplossing voor kantoren, vergaderruimtes en openbare ruimtes. Het paneel past in standaard plafondgrids en biedt excellente geluidsabsorptie. De gladde witte afwerking reflecteert licht optimaal, wat bijdraagt aan een heldere en prettige werksfeer. Eenvoudig te installeren en te onderhouden.",
    price: 79.95,
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800"
    ],
    category: "plafondpanelen",
    colors: ["Wit", "Lichtgrijs"],
    sizes: ["60x60cm"],
    material: "Minerale wol",
    variants: [
      { size: "60x60cm", price: 79.95 }
    ],
    features: [
      "NRC waarde: 0.90",
      "Standaard plafondgrid formaat",
      "Vocht- en schimmelbestendig",
      "LED verlichting geschikt"
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 203,
    sku: "PP-WT-001",
    tags: ["kantoor", "professioneel"]
  },
  {
    id: "4",
    slug: "vilten-wandpaneel-design",
    name: "Vilten Wandpaneel Design",
    shortDescription: "Designer wandpaneel in verschillende vormen voor creatieve composities",
    longDescription: "Creëer uw eigen unieke wandcompositie met deze designer vilten wandpanelen. Verkrijgbaar in diverse kleuren en vormen - van klassiek vierkant tot moderne hexagons. Het hoogwaardige vilt biedt uitstekende geluidsabsorptie en voegt textuur en warmte toe aan elke ruimte. Perfect voor creatieve kantoorruimtes, wachtkamers of als statement piece in uw woonkamer.",
    price: 149.95,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
    ],
    category: "wandpanelen",
    colors: ["Antraciet", "Salie Groen", "Terracotta", "Mosterd", "Bordeaux", "Lichtblauw"],
    sizes: ["Vierkant 40x40cm", "Hexagon 40cm", "Rond 50cm"],
    material: "Premium vilt",
    variants: [
      { size: "Vierkant 40x40cm", price: 49.95 },
      { size: "Hexagon 40cm", price: 59.95 },
      { size: "Rond 50cm", price: 69.95 }
    ],
    features: [
      "100% recycled materiaal",
      "Zelfklevende achterzijde",
      "NRC waarde: 0.70",
      "Combineer kleuren en vormen"
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 156,
    sku: "WP-VD-004",
    tags: ["design", "kleurrijk", "duurzaam"]
  },
  {
    id: "5",
    slug: "akoestisch-wandpaneel-grijs",
    name: "Akoestisch Wandpaneel Grijs",
    shortDescription: "Tijdloos grijs wandpaneel voor elke ruimte",
    longDescription: "Dit veelzijdige grijze wandpaneel past in vrijwel elk interieur. De neutrale grijstint maakt het geschikt voor zowel moderne als klassieke ruimtes. Het paneel biedt dezelfde hoogwaardige geluidsabsorptie als onze andere wandpanelen, met een subtiele textuur die diepte toevoegt aan uw muur. Ideaal voor vergaderruimtes, slaapkamers en woonkamers.",
    price: 84.95,
    images: [
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"
    ],
    category: "wandpanelen",
    colors: ["Lichtgrijs", "Middengrijs", "Donkergrijs"],
    sizes: ["60x60cm", "60x120cm", "120x120cm"],
    material: "Akoestische stof",
    variants: [
      { size: "60x60cm", price: 84.95 },
      { size: "60x120cm", price: 139.95 },
      { size: "120x120cm", price: 229.95 }
    ],
    features: [
      "NRC waarde: 0.85",
      "Brandklasse B1",
      "UV-bestendig",
      "Eenvoudig schoon te maken"
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 98,
    sku: "WP-GR-005",
    tags: ["neutraal", "veelzijdig"]
  },
  {
    id: "6",
    slug: "plafondeiland-rond",
    name: "Plafondeiland Rond",
    shortDescription: "Vrijhangend rond plafondpaneel voor open ruimtes",
    longDescription: "Dit indrukwekkende ronde plafondeiland is de perfecte oplossing voor grote open ruimtes waar traditionele plafondpanelen niet mogelijk zijn. Het paneel hangt vrij aan stalen kabels en absorbeert geluid van alle kanten. Ideaal voor recepties, restaurants, kantoortuinen en industriële ruimtes. Het moderne design maakt het zowel functioneel als decoratief.",
    price: 249.95,
    images: [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
    ],
    category: "plafondpanelen",
    colors: ["Wit", "Grijs", "Zwart"],
    sizes: ["Ø100cm", "Ø150cm", "Ø200cm"],
    material: "Akoestisch schuim met stoffen bekleding",
    variants: [
      { size: "Ø100cm", price: 249.95 },
      { size: "Ø150cm", price: 349.95 },
      { size: "Ø200cm", price: 449.95 }
    ],
    features: [
      "360° geluidsabsorptie",
      "Inclusief ophangset",
      "Verstelbare hoogte",
      "LED verlichting optie"
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 45,
    sku: "PP-RD-006",
    tags: ["premium", "design", "grote-ruimtes"]
  },
  {
    id: "7",
    slug: "akoestisch-wandpaneel-wit",
    name: "Akoestisch Wandpaneel Wit",
    shortDescription: "Klassiek wit wandpaneel voor een lichte uitstraling",
    longDescription: "Dit elegante witte wandpaneel brengt helderheid en rust in uw ruimte. Het neutrale wit past bij elk interieur en weerspiegelt het licht voor een ruimtelijk effect. De hoogwaardige stoffering is vlekbestendig en eenvoudig te onderhouden. Uitermate geschikt voor medische praktijken, kantoren en woonruimtes waar een frisse, schone uitstraling gewenst is.",
    price: 89.95,
    images: [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
    ],
    category: "wandpanelen",
    colors: ["Zuiver Wit", "Gebroken Wit"],
    sizes: ["60x60cm", "60x120cm", "100x100cm"],
    material: "Akoestische stof",
    variants: [
      { size: "60x60cm", price: 89.95 },
      { size: "60x120cm", price: 149.95 },
      { size: "100x100cm", price: 179.95 }
    ],
    features: [
      "NRC waarde: 0.85",
      "Vlekbestendig",
      "Lichtreflecterend",
      "Antibacteriële afwerking"
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 167,
    sku: "WP-WT-007",
    tags: ["medisch", "clean", "kantoor"]
  },
  {
    id: "8",
    slug: "plafondpaneel-hout-look",
    name: "Plafondpaneel Hout-Look",
    shortDescription: "Akoestisch plafondpaneel met authentieke houtuitstraling",
    longDescription: "Geniet van de warmte van hout aan uw plafond zonder het gewicht. Dit innovatieve plafondpaneel heeft een realistische houtprint gecombineerd met hoogwaardige akoestische eigenschappen. Perfect voor restaurants, hotels en woonruimtes waar sfeer en comfort samenkomen. Past in standaard plafondgrids en is onderhoudsvriendelijk.",
    price: 99.95,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
    ],
    category: "plafondpanelen",
    colors: ["Eiken", "Walnoot", "Whitewash"],
    sizes: ["60x60cm", "30x120cm"],
    material: "MDF kern met laminaat",
    variants: [
      { size: "60x60cm", price: 99.95 },
      { size: "30x120cm", price: 109.95 }
    ],
    features: [
      "NRC waarde: 0.80",
      "Realistische houtnerf",
      "Krasvast oppervlak",
      "Vochtwerende kern"
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 72,
    sku: "PP-HL-008",
    tags: ["hout", "sfeer", "horeca"]
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: 'wandpanelen' | 'plafondpanelen'): Product[] => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (count: number = 6): Product[] => {
  return products.slice(0, count);
};
