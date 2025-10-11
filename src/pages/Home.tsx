import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProducts } from '@/lib/storage';
import { Product } from '@/lib/types';
import ProductCard from '@/components/ProductCard';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = getProducts();
    setFeaturedProducts(products.filter(p => p.featured).slice(0, 3));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">New Collection Available</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 animate-fade-in">
              Embrace Your
              <span className="text-primary block">Natural Glow</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
              Discover premium cosmetics and skincare crafted to enhance your beauty with gentle, effective ingredients.
            </p>
            
            <Link to="/shop">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-medium group animate-fade-in"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-pulse">🌸</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-pulse delay-300">✨</div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Featured Favorites
            </h2>
            <p className="text-lg text-muted-foreground">
              Handpicked essentials to elevate your beauty routine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop">
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🌿',
                title: 'Natural Ingredients',
                description: 'Formulated with gentle, skin-loving botanicals'
              },
              {
                emoji: '✨',
                title: 'Cruelty Free',
                description: 'Never tested on animals, always kind'
              },
              {
                emoji: '💕',
                title: 'Made with Love',
                description: 'Crafted with care for your beauty journey'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-soft transition-shadow"
              >
                <div className="text-5xl mb-4">{benefit.emoji}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
