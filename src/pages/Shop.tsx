import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const Shop = () => {
  const categories = [
    {
      title: 'Wandpanelen',
      description: 'Ontdek onze collectie stijlvolle akoestische wandpanelen. Perfect voor kantoren, thuiswerkplekken en woonruimtes. Verkrijgbaar in diverse kleuren, materialen en afmetingen.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      href: '/wandpanelen',
      productCount: 5
    },
    {
      title: 'Plafondpanelen',
      description: 'Professionele akoestische plafondpanelen voor optimale geluidsabsorptie. Ideaal voor kantoren, vergaderruimtes, horeca en openbare gebouwen.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800',
      href: '/plafondpanelen',
      productCount: 3
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs items={[{ label: 'Shop' }]} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Ons Assortiment
          </h1>
          <p className="text-lg text-muted-foreground">
            Ontdek onze complete collectie akoestische oplossingen. Van stijlvolle wandpanelen 
            tot professionele plafondpanelen – wij bieden kwaliteitsproducten voor elke ruimte 
            en elk budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                to={category.href}
                className="group block bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h2>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {category.productCount} producten
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Bekijk producten
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
