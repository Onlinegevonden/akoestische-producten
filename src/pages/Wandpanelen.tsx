import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
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

const Wandpanelen = () => {
  const allProducts = getProductsByCategory('wandpanelen');
  
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popularity');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const colors = ['Zwart', 'Wit', 'Grijs', 'Naturel', 'Gekleurd'];
  const materials = ['Akoestische stof', 'Hout', 'Vilt'];

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(p => 
        p.colors.some(c => 
          selectedColors.some(sc => c.toLowerCase().includes(sc.toLowerCase()))
        )
      );
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      filtered = filtered.filter(p => 
        selectedMaterials.some(m => p.material.toLowerCase().includes(m.toLowerCase()))
      );
    }

    // Sorting
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
    setPriceRange([0, 300]);
    setSelectedColors([]);
    setSelectedMaterials([]);
  };

  const hasActiveFilters = selectedColors.length > 0 || selectedMaterials.length > 0 || priceRange[0] > 0 || priceRange[1] < 300;

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
                max={300}
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
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600"
          alt="Akoestische wandpanelen"
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
              Akoestische Wandpanelen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-background/90 text-lg max-w-2xl"
            >
              Verbeter de akoestiek en sfeer in uw ruimte met onze premium wandpanelen
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs items={[{ label: 'Shop', href: '/shop' }, { label: 'Wandpanelen' }]} />

        {/* SEO Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <p className="text-muted-foreground leading-relaxed">
            Onze akoestische wandpanelen zijn de perfecte oplossing voor het verbeteren van de 
            geluidskwaliteit in uw ruimte. Of u nu last heeft van echo in uw woonkamer, 
            storende geluiden in uw thuiswerkplek, of een professionele uitstraling zoekt voor 
            uw kantoor – onze wandpanelen combineren functionaliteit met esthetiek.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Alle panelen zijn vervaardigd van hoogwaardige materialen en beschikken over 
            uitstekende geluidsabsorberende eigenschappen. Kies uit verschillende kleuren, 
            afmetingen en materialen om de perfecte match te vinden voor uw interieur. 
            Met eenvoudige montage kunt u zelf uw ruimte transformeren.
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
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 'en' : ''}
              </p>
              
              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
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

                {/* Sort */}
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

            {/* Products */}
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
            Veelgestelde Vragen over Wandpanelen
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="1">
              <AccordionTrigger>Wat zijn akoestische wandpanelen?</AccordionTrigger>
              <AccordionContent>
                Akoestische wandpanelen zijn speciale panelen die aan de muur worden bevestigd 
                om geluid te absorberen. Ze verminderen echo, nagalm en achtergrondgeluid, 
                waardoor de ruimte aangenamer wordt om in te verblijven of te werken. 
                Onze panelen zijn verkrijgbaar in diverse materialen zoals stof, hout en vilt.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>Hoe monteer je wandpanelen?</AccordionTrigger>
              <AccordionContent>
                Onze wandpanelen zijn ontworpen voor eenvoudige zelfmontage. De meeste panelen 
                kunnen worden opgehangen met de meegeleverde bevestigingsmaterialen. Vilten 
                panelen hebben vaak een zelfklevende achterzijde. Bij elk product vindt u 
                gedetailleerde montage-instructies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger>Welke kleur past bij mijn interieur?</AccordionTrigger>
              <AccordionContent>
                Dit hangt af van uw persoonlijke smaak en bestaande interieur. Neutrale kleuren 
                zoals zwart, wit en grijs passen bij vrijwel elk interieur. Wilt u een statement 
                maken? Kies dan voor onze gekleurde vilten panelen. Twijfelt u? Neem contact 
                met ons op voor gratis advies!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Wandpanelen;
