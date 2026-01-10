import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Kwaliteit',
      description: 'Wij selecteren alleen de beste materialen voor onze akoestische oplossingen.'
    },
    {
      icon: Users,
      title: 'Klantgericht',
      description: 'Uw tevredenheid staat bij ons centraal. Wij denken graag met u mee.'
    },
    {
      icon: Heart,
      title: 'Passie',
      description: 'Akoestiek is onze passie. Wij geloven in het creëren van betere ruimtes.'
    },
    {
      icon: CheckCircle,
      title: 'Expertise',
      description: 'Met jarenlange ervaring adviseren wij u over de beste oplossing.'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs items={[{ label: 'Over Ons' }]} />
        
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Over AkoestiekShop
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wij zijn gepassioneerd over het verbeteren van de akoestiek in uw leef- en werkomgeving. 
            Met onze premium panelen helpen wij u een comfortabelere en productievere ruimte te creëren.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative h-[400px] rounded-3xl overflow-hidden mb-16"
        >
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600"
            alt="Modern kantoor met akoestische panelen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
        </motion.div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ons Verhaal
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                AkoestiekShop is ontstaan uit de overtuiging dat iedereen recht heeft op een 
                comfortabele akoestische omgeving. Of u nu thuis werkt, een kantoor inricht, 
                of een professionele studio bouwt – goede akoestiek maakt het verschil.
              </p>
              <p>
                Wij begonnen als klein team met een grote passie voor geluidskwaliteit. 
                Door de jaren heen hebben wij onze expertise uitgebreid en een zorgvuldig 
                geselecteerde collectie opgebouwd van de beste akoestische oplossingen op de markt.
              </p>
              <p>
                Vandaag de dag helpen wij honderden klanten door heel Nederland met het 
                verbeteren van hun ruimtes. Van individuele huiskamers tot grote kantoorpanden – 
                wij vinden voor elke situatie de juiste oplossing.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600"
                alt="Kantoor ruimte"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden mt-8">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
                alt="Modern interieur"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Onze Waarden
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Us */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary/50 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Waarom AkoestiekShop?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Gratis Advies</h3>
              <p className="text-sm text-muted-foreground">
                Twijfelt u over de juiste keuze? Onze akoestiek-experts staan klaar om 
                u te helpen met persoonlijk advies, geheel vrijblijvend.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Snelle Levering</h3>
              <p className="text-sm text-muted-foreground">
                De meeste producten zijn op voorraad en worden binnen 2-5 werkdagen 
                bezorgd. Gratis verzending vanaf €150.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Tevredenheidsgarantie</h3>
              <p className="text-sm text-muted-foreground">
                Niet tevreden? Binnen 30 dagen kunt u uw aankoop retourneren. 
                Wij streven naar 100% klanttevredenheid.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default About;
