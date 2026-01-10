import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick action */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <Button className="w-full" size="sm">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Bekijk product
            </Button>
          </div>
          
          {/* Tags */}
          {product.tags.includes('bestseller') && (
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
              Bestseller
            </span>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'text-primary fill-primary'
                      : 'text-muted'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>
          
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-1">
            {product.shortDescription}
          </p>
          
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-foreground">
              €{product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                €{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Color swatches */}
          {product.colors.length > 1 && (
            <div className="flex gap-1.5 pt-1">
              {product.colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-border"
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
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-muted-foreground">+{product.colors.length - 4}</span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
