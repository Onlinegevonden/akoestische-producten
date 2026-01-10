import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { toast } from 'sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Bericht verzonden!', {
      description: 'Wij nemen zo snel mogelijk contact met u op.'
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs items={[{ label: 'Contact' }]} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Neem Contact Op
          </h1>
          <p className="text-lg text-muted-foreground">
            Heeft u vragen over onze producten of wilt u advies? 
            Wij helpen u graag verder.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="text-lg font-semibold text-foreground mb-6">
                Contactgegevens
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">E-mail</p>
                    <a href="mailto:info@akoestiekshop.nl" className="text-muted-foreground hover:text-primary transition-colors">
                      info@akoestiekshop.nl
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefoon</p>
                    <a href="tel:+31201234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +31 (0)20 123 4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Adres</p>
                    <p className="text-muted-foreground">
                      Herengracht 100<br />
                      1015 BS Amsterdam
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Openingstijden</p>
                    <p className="text-muted-foreground text-sm">
                      Ma - Vr: 09:00 - 17:30<br />
                      Za - Zo: Gesloten
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <h2 className="text-lg font-semibold text-foreground mb-6">
                Stuur ons een bericht
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Naam *</Label>
                    <Input id="name" required placeholder="Uw naam" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mailadres *</Label>
                    <Input id="email" type="email" required placeholder="uw@email.nl" />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoonnummer</Label>
                    <Input id="phone" type="tel" placeholder="+31 6 12345678" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Onderwerp *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecteer onderwerp" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="advies">Advies aanvragen</SelectItem>
                        <SelectItem value="order">Vraag over bestelling</SelectItem>
                        <SelectItem value="product">Productvraag</SelectItem>
                        <SelectItem value="retour">Retour / Ruilen</SelectItem>
                        <SelectItem value="anders">Anders</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Bericht *</Label>
                  <Textarea 
                    id="message" 
                    required 
                    rows={6}
                    placeholder="Beschrijf uw vraag of verzoek..."
                  />
                </div>
                
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Verzenden...'
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Verstuur bericht
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
