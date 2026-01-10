import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductGrid from '@/components/product/ProductGrid';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { getProductsByCategory } from '@/data/products';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Plafondpanelen = () => {
  const allProducts = getProductsByCategory('plafondpanelen');
  
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popularity');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const colors = ['Wit', 'Grijs', 'Zwart', 'Hout'];
  const materials = ['Minerale wol', 'Akoestisch schuim', 'MDF'];

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (selectedColors.length > 0) {
      filtered = filtered.filter(p => 
        p.colors.some(c => 
          selectedColors.some(sc => c.toLowerCase().includes(sc.toLowerCase()))
        )
      );
    }

    if (selectedMaterials.length > 0) {
      filtered = filtered.filter(p => 
        selectedMaterials.some(m => p.material.toLowerCase().includes(m.toLowerCase()))
      );
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.reverse();
        break;
      default:
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return filtered;
  }, [allProducts, priceRange, selectedColors, selectedMaterials, sortBy]);

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev => 
      prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 500]);
    setSelectedColors([]);
    setSelectedMaterials([]);
  };

  const hasActiveFilters = selectedColors.length > 0 || selectedMaterials.length > 0 || priceRange[0] > 0 || priceRange[1] < 500;

  const FilterContent = () => (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={['price', 'color', 'material']} className="w-full">
        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-medium">Prijs</AccordionTrigger>
          <AccordionContent>
            <div className="pt-2 pb-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={0}
                max={500}
                step={10}
                className="mb-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>€{priceRange[0]}</span>
                <span>€{priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="color">
          <AccordionTrigger className="text-sm font-medium">Kleur</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {colors.map((color) => (
                <label key={color} className="flex items-center space-x-3 cursor-pointer">
                  <Checkbox
                    checked={selectedColors.includes(color)}
                    onCheckedChange={() => toggleColor(color)}
                  />
                  <span className="text-sm">{color}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="material">
          <AccordionTrigger className="text-sm font-medium">Materiaal</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {materials.map((material) => (
                <label key={material} className="flex items-center space-x-3 cursor-pointer">
                  <Checkbox
                    checked={selectedMaterials.includes(material)}
                    onCheckedChange={() => toggleMaterial(material)}
                  />
                  <span className="text-sm">{material}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {hasActiveFilters && (
        <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
          <X className="h-4 w-4 mr-2" />
          Filters wissen
        </Button>
      )}
    </div>
  );

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600"
          alt="Akoestische plafondpanelen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-background mb-2"
            >
              Akoestische Plafondpanelen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-background/90 text-lg max-w-2xl"
            >
              Professionele plafondoplossingen voor optimale geluidsabsorptie
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs items={[{ label: 'Shop', href: '/shop' }, { label: 'Plafondpanelen' }]} />

        {/* SEO Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <p className="text-muted-foreground leading-relaxed">
            Akoestische plafondpanelen zijn essentieel voor het creëren van een comfortabele 
            werkomgeving. Of het nu gaat om een druk kantoor, een vergaderruimte of een 
            openbare ruimte – onze plafondpanelen bieden uitstekende geluidsabsorptie en 
            dragen bij aan een prettig binnenklimaat.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Onze collectie omvat zowel traditionele plafondtegels als moderne plafondeilanden. 
            De panelen zijn verkrijgbaar in verschillende materialen en afwerkingen, van klassiek 
            wit tot warme houtlook. Alle producten voldoen aan de hoogste kwaliteitsnormen en 
            zijn eenvoudig te installeren.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-semibold text-foreground mb-4">Filters</h2>
              <FilterContent />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 'en' : ''}
              </p>
              
              <div className="flex items-center gap-4">
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                      {hasActiveFilters && (
                        <span className="ml-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                          {selectedColors.length + selectedMaterials.length}
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sorteren" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Populariteit</SelectItem>
                    <SelectItem value="price-asc">Prijs (laag-hoog)</SelectItem>
                    <SelectItem value="price-desc">Prijs (hoog-laag)</SelectItem>
                    <SelectItem value="newest">Nieuwste</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} columns={3} />
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">Geen producten gevonden met deze filters</p>
                <Button variant="outline" onClick={clearFilters}>
                  Filters wissen
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Veelgestelde Vragen over Plafondpanelen
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="1">
              <AccordionTrigger>Wat zijn de voordelen van plafondpanelen?</AccordionTrigger>
              <AccordionContent>
                Akoestische plafondpanelen verbeteren de geluidskwaliteit door echo en nagalm 
                te verminderen. Ze dragen bij aan een comfortabeler werkklimaat, betere 
                concentratie en minder vermoeidheid. Daarnaast kunnen ze bijdragen aan de 
                thermische isolatie en esthetiek van uw ruimte.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>Hoe installeer ik plafondpanelen?</AccordionTrigger>
              <AccordionContent>
                De installatie hangt af van het type paneel. Standaard plafondtegels passen 
                in een systeemplafond. Vrijhangende panelen worden opgehangen met stalen kabels. 
                Bij elk product leveren wij gedetailleerde instructies en bevestigingsmaterialen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>Kan ik plafondpanelen combineren met verlichting?</AccordionTrigger>
              <AccordionContent>
                Ja, veel van onze plafondpanelen zijn compatibel met LED-verlichting. 
                Onze plafondeilanden kunnen zelfs worden uitgerust met geïntegreerde 
                verlichting. Neem contact met ons op voor advies over de mogelijkheden.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Plafondpanelen;
