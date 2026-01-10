import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/wandpanelen" className="text-background/70 hover:text-primary transition-colors">
                  Wandpanelen
                </Link>
              </li>
              <li>
                <Link to="/plafondpanelen" className="text-background/70 hover:text-primary transition-colors">
                  Plafondpanelen
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-background/70 hover:text-primary transition-colors">
                  Alle Producten
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/over-ons" className="text-background/70 hover:text-primary transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/verzending" className="text-background/70 hover:text-primary transition-colors">
                  Verzending & Retour
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-background/70 hover:text-primary transition-colors">
                  Veelgestelde Vragen
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-background/70">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@akoestiekshop.nl</span>
              </li>
              <li className="flex items-center space-x-3 text-background/70">
                <Phone className="h-4 w-4 text-primary" />
                <span>+31 (0)20 123 4567</span>
              </li>
              <li className="flex items-start space-x-3 text-background/70">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>Herengracht 100<br />1015 BS Amsterdam</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nieuwsbrief</h3>
            <p className="text-background/70 text-sm mb-4">
              Ontvang exclusieve aanbiedingen en tips over akoestiek.
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Uw e-mailadres"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="default" className="w-full">
                Schrijf je in
              </Button>
            </form>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/50 text-sm">
              © 2026 AkoestiekShop. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/algemene-voorwaarden" className="text-background/50 hover:text-primary transition-colors">
                Algemene Voorwaarden
              </Link>
              <Link to="/privacy" className="text-background/50 hover:text-primary transition-colors">
                Privacybeleid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
