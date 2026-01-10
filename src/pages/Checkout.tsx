import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, CreditCard, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { useCartStore } from '@/store/cartStore';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const total = getTotalPrice();
  const shippingCost = total >= 150 ? 0 : 9.95;
  const finalTotal = total + shippingCost;

  const [sameAddress, setSameAddress] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('ideal');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    clearCart();
    toast.success('Bestelling geplaatst!', {
      description: 'U ontvangt een bevestiging per e-mail.'
    });
    navigate('/');
  };

  if (items.length === 0) {
    navigate('/winkelwagen');
    return null;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <Breadcrumbs items={[{ label: 'Winkelwagen', href: '/winkelwagen' }, { label: 'Checkout' }]} />
        
        <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Contactgegevens
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mailadres *</Label>
                    <Input id="email" type="email" required placeholder="uw@email.nl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoonnummer</Label>
                    <Input id="phone" type="tel" placeholder="+31 6 12345678" />
                  </div>
                </div>
              </motion.div>

              {/* Shipping Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Verzendadres
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Voornaam *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Achternaam *</Label>
                    <Input id="lastName" required />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <Label htmlFor="company">Bedrijfsnaam (optioneel)</Label>
                    <Input id="company" />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <Label htmlFor="address">Adres *</Label>
                    <Input id="address" required placeholder="Straatnaam + huisnummer" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postcode *</Label>
                    <Input id="postalCode" required placeholder="1234 AB" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Plaats *</Label>
                    <Input id="city" required />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mt-6">
                  <Checkbox 
                    id="sameAddress" 
                    checked={sameAddress}
                    onCheckedChange={(checked) => setSameAddress(checked as boolean)}
                  />
                  <Label htmlFor="sameAddress" className="text-sm font-normal">
                    Factuuradres is hetzelfde als verzendadres
                  </Label>
                </div>
              </motion.div>

              {/* Billing Address (if different) */}
              {!sameAddress && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-card rounded-2xl border border-border p-6"
                >
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Factuuradres
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="billingFirstName">Voornaam *</Label>
                      <Input id="billingFirstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billingLastName">Achternaam *</Label>
                      <Input id="billingLastName" required />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <Label htmlFor="billingAddress">Adres *</Label>
                      <Input id="billingAddress" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billingPostalCode">Postcode *</Label>
                      <Input id="billingPostalCode" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billingCity">Plaats *</Label>
                      <Input id="billingCity" required />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Betaalmethode
                </h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <RadioGroupItem value="ideal" id="ideal" />
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                          <Building2 className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium">iDEAL</span>
                      </div>
                    </label>
                    
                    <label className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <RadioGroupItem value="creditcard" id="creditcard" />
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium">Creditcard</span>
                      </div>
                    </label>
                    
                    <label className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center font-bold text-primary">
                          P
                        </div>
                        <span className="font-medium">PayPal</span>
                      </div>
                    </label>
                  </div>
                </RadioGroup>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-24 bg-card rounded-2xl border border-border p-6"
              >
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Uw bestelling
                </h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={`${item.productId}-${item.size}-${item.color}`} className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.size} • {item.color}</p>
                        <p className="text-xs text-muted-foreground">Aantal: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-medium">
                        €{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3 border-t border-border pt-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotaal</span>
                    <span className="font-medium">€{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Verzendkosten</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? (
                        <span className="text-accent">Gratis</span>
                      ) : (
                        `€${shippingCost.toFixed(2)}`
                      )}
                    </span>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Totaal</span>
                    <span className="text-xl font-bold text-foreground">
                      €{finalTotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Inclusief BTW</p>
                </div>
                
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Verwerken...'
                  ) : (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      Bestelling plaatsen
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Door uw bestelling te plaatsen gaat u akkoord met onze{' '}
                  <a href="/algemene-voorwaarden" className="text-primary hover:underline">
                    algemene voorwaarden
                  </a>.
                </p>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Checkout;
