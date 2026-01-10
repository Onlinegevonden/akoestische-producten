import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Truck, Shield, RotateCcw, Plus, Minus, ShoppingBag, Heart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductGrid from '@/components/product/ProductGrid';
import { useCartStore } from '@/store/cartStore';
import { getProductBySlug, products } from '@/data/products';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const addItem = useCartStore((state) => state.addItem);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product niet gevonden</h1>
          <Button asChild>
            <Link to="/shop">Terug naar shop</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const currentPrice = product.variants.find(v => v.size === selectedSize)?.price || product.price;
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Selecteer een maat');
      return;
    }
    if (!selectedColor) {
      toast.error('Selecteer een kleur');
      return;
    }

    addItem({
      productId: product.id,
      name: product.name,
      image: product.images[0],
      price: currentPrice,
      size: selectedSize,
      color: selectedColor,
      quantity
    });

    toast.success('Toegevoegd aan winkelwagen', {
      description: `${product.name} - ${selectedSize} - ${selectedColor}`
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Shop', href: '/shop' },
            { label: product.category === 'wandpanelen' ? 'Wandpanelen' : 'Plafondpanelen', href: `/${product.category}` },
            { label: product.name }
          ]} 
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
          {/* Product Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-primary fill-primary'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <p className="text-lg text-muted-foreground">
                {product.shortDescription}
              </p>
            </div>

            <div className="text-3xl font-bold text-foreground">
              €{currentPrice.toFixed(2)}
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Afmeting
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Kleur: {selectedColor}
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColor === color
                        ? 'border-primary scale-110'
                        : 'border-border hover:border-primary'
                    }`}
                    style={{
                      backgroundColor: 
                        color.toLowerCase().includes('zwart') ? '#1a1a1a' :
                        color.toLowerCase().includes('wit') ? '#ffffff' :
                        color.toLowerCase().includes('grijs') ? '#9ca3af' :
                        color.toLowerCase().includes('naturel') || color.toLowerCase().includes('eiken') ? '#d4a574' :
                        color.toLowerCase().includes('walnoot') ? '#5c4033' :
                        color.toLowerCase().includes('antraciet') ? '#383838' :
                        color.toLowerCase().includes('salie') || color.toLowerCase().includes('groen') ? '#9CAF88' :
                        color.toLowerCase().includes('terracotta') ? '#c67b5c' :
                        color.toLowerCase().includes('mosterd') ? '#d4a017' :
                        color.toLowerCase().includes('bordeaux') ? '#722f37' :
                        color.toLowerCase().includes('blauw') ? '#89CFF0' :
                        '#e5e5e5'
                    }}
                    title={color}
                  >
                    {selectedColor === color && (
                      <Check className={`h-5 w-5 ${
                        color.toLowerCase().includes('wit') || color.toLowerCase().includes('licht') 
                          ? 'text-foreground' 
                          : 'text-white'
                      }`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-secondary transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              
              <Button 
                size="lg" 
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                In winkelwagen
              </Button>
              
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="space-y-2 py-4 border-t border-b border-border">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-accent" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-1 text-primary" />
                <p className="text-xs text-muted-foreground">Gratis verzending vanaf €150</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-1 text-primary" />
                <p className="text-xs text-muted-foreground">30 dagen retourrecht</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-1 text-primary" />
                <p className="text-xs text-muted-foreground">2 jaar garantie</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
              <TabsTrigger 
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Beschrijving
              </TabsTrigger>
              <TabsTrigger 
                value="specs"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Specificaties
              </TabsTrigger>
              <TabsTrigger 
                value="mounting"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Montage
              </TabsTrigger>
              <TabsTrigger 
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
              >
                Reviews ({product.reviewCount})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="pt-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {product.longDescription}
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="specs" className="pt-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Materiaal</span>
                  <span className="font-medium">{product.material}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">SKU</span>
                  <span className="font-medium">{product.sku}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Beschikbare maten</span>
                  <span className="font-medium">{product.sizes.join(', ')}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Beschikbare kleuren</span>
                  <span className="font-medium">{product.colors.join(', ')}</span>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="mounting" className="pt-8">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold mb-4">Montage-instructies</h3>
                <ol className="space-y-4 text-muted-foreground">
                  <li>1. Bepaal de gewenste positie op de muur en markeer de bevestigingspunten.</li>
                  <li>2. Boor de gaten en plaats de meegeleverde pluggen.</li>
                  <li>3. Bevestig de ophangbeugels met de meegeleverde schroeven.</li>
                  <li>4. Hang het paneel aan de beugels en controleer of het waterpas hangt.</li>
                  <li>5. Klaar! Geniet van uw verbeterde akoestiek.</li>
                </ol>
                <p className="mt-6 text-sm">
                  Tip: Bij twijfel, schakel een professional in voor de montage.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="pt-8">
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground">{product.rating}</div>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-primary fill-primary'
                              : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {product.reviewCount} reviews
                    </div>
                  </div>
                </div>
                
                {/* Sample reviews */}
                <div className="space-y-6 border-t border-border pt-6">
                  {[
                    { name: 'Jan de Vries', rating: 5, date: '2 weken geleden', text: 'Uitstekende kwaliteit panelen! De akoestiek in mijn thuiskantoor is enorm verbeterd. Snelle levering ook.' },
                    { name: 'Maria Bakker', rating: 4, date: '1 maand geleden', text: 'Mooie afwerking en merkbare verbetering van het geluid. Montage was eenvoudig met de meegeleverde instructies.' },
                    { name: 'Peter Jansen', rating: 5, date: '2 maanden geleden', text: 'Perfect voor onze vergaderruimte. Geen echo meer tijdens meetings. Zeer tevreden!' }
                  ].map((review, index) => (
                    <div key={index} className="pb-6 border-b border-border last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-medium">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium">{review.name}</p>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? 'text-primary fill-primary' : 'text-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Klanten kochten ook
            </h2>
            <ProductGrid products={relatedProducts} columns={4} />
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
