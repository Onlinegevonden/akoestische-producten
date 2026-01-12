import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shield, HeadphonesIcon, Sparkles, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/product/ProductGrid';
import { getFeaturedProducts } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts(8);

  const usps = [
    { icon: HeadphonesIcon, title: 'Gratis Advies', description: 'Onze experts helpen u graag bij de juiste keuze' },
    { icon: Truck, title: 'Snelle Levering', description: 'Binnen 2-5 werkdagen in huis' },
    { icon: Sparkles, title: 'Maatwerk Mogelijk', description: 'Panelen op maat voor uw specifieke wensen' },
    { icon: Shield, title: '100% Tevredenheid', description: '30 dagen niet-goed-geld-terug garantie' }
  ];

  const categories = [
    {
      title: 'Wandpanelen',
      description: 'Stijlvolle akoestische wandpanelen voor elke ruimte. Verminder echo en verbeter de sfeer.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      href: '/wandpanelen'
    },
    {
      title: 'Plafondpanelen',
      description: 'Professionele plafondoplossingen voor optimale geluidsabsorptie in kantoren en openbare ruimtes.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
      href: '/plafondpanelen'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-4 w-4" />
                Premium Kwaliteit
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Akoestische Panelen voor{' '}
                <span className="gradient-text">Optimale Geluidskwaliteit</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transformeer uw ruimte met onze premium akoestische oplossingen. 
                Van stijlvolle wandpanelen tot professionele plafondpanelen – 
                wij hebben de perfecte oplossing voor elke akoestische uitdaging.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/wandpanelen">
                    Bekijk Wandpanelen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/contact">Gratis Advies</Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 mt-10">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
                      <span className="text-xs font-medium">{i}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">500+ tevreden klanten</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-4 bg-primary/20 rounded-3xl transform rotate-6" />
                <div className="absolute inset-4 bg-accent/20 rounded-3xl transform -rotate-3" />
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                  alt="Modern kantoor met akoestische panelen"
                  className="relative rounded-3xl w-full h-full object-cover shadow-2xl"
                />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Gratis Verzending</p>
                      <p className="text-sm text-muted-foreground">Vanaf €150</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ontdek Onze Categorieën
            </h2>
            <p className="text-muted-foreground text-lg">
              Kies de perfecte akoestische oplossing voor uw ruimte
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Wandpanelen Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/wandpanelen"
                className="group block relative rounded-3xl overflow-hidden bg-card border border-border p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="3" y1="15" x2="21" y2="15" />
                      <line x1="9" y1="3" x2="9" y2="21" />
                      <line x1="15" y1="3" x2="15" y2="21" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Wandpanelen
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Stijlvolle akoestische wandpanelen voor elke ruimte. Verminder echo en verbeter de sfeer.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Montage op verticale oppervlakken
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Ideaal voor kantoren & woonkamers
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Decoratief én functioneel
                      </li>
                    </ul>
                    <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                      Bekijk wandpanelen
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Plafondpanelen Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                to="/plafondpanelen"
                className="group block relative rounded-3xl overflow-hidden bg-card border border-border p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 8h20" />
                      <path d="M4 8v2" />
                      <path d="M8 8v2" />
                      <path d="M12 8v2" />
                      <path d="M16 8v2" />
                      <path d="M20 8v2" />
                      <rect x="2" y="4" width="20" height="4" rx="1" />
                      <path d="M6 12h4v4H6z" />
                      <path d="M14 12h4v4h-4z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      Plafondpanelen
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Professionele plafondoplossingen voor optimale geluidsabsorptie in kantoren en openbare ruimtes.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Montage aan het plafond
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Geschikt voor systeemplafonds
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        Maximale geluidsabsorptie
                      </li>
                    </ul>
                    <span className="inline-flex items-center text-accent font-medium group-hover:underline">
                      Bekijk plafondpanelen
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, index) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <usp.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{usp.title}</h3>
                <p className="text-sm text-muted-foreground">{usp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Populaire Producten
              </h2>
              <p className="text-muted-foreground">
                Onze best verkochte akoestische oplossingen
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/shop">
                Bekijk alles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-semibold text-foreground">4.8/5 gemiddelde beoordeling</p>
              <p className="text-sm text-muted-foreground">Gebaseerd op 500+ reviews</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Gratis verzending vanaf €150</p>
              <p className="text-sm text-muted-foreground">Snelle levering door heel Nederland</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">30 dagen retourrecht</p>
              <p className="text-sm text-muted-foreground">Niet tevreden? Geld terug!</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl p-[2px] bg-gradient-to-r from-primary via-accent to-primary"
          >
            <div className="rounded-3xl bg-background py-16 px-8 md:py-20 md:px-16 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                <HeadphonesIcon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Hulp nodig bij het kiezen?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Onze akoestiek-experts staan voor u klaar. Vraag gratis en vrijblijvend advies 
                over de beste oplossing voor uw ruimte.
              </p>
              <Button asChild size="lg" className="text-base">
                <Link to="/contact">
                  Neem contact op
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
