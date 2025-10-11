import { Heart, Leaf, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Born from a passion for clean beauty and self-care, Blossom Beauty brings you thoughtfully curated cosmetics that celebrate your natural radiance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural First</h3>
              <p className="text-muted-foreground">
                We believe in harnessing nature's power with gentle, effective ingredients.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-secondary/5 to-accent/5">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 text-secondary-foreground mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Promise</h3>
              <p className="text-muted-foreground">
                Every product is carefully selected for its quality and effectiveness.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent-foreground mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Made with Love</h3>
              <p className="text-muted-foreground">
                Each item is chosen with care to support your beauty journey.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              Founded in 2024, Blossom Beauty emerged from a simple belief: beauty should be effortless, natural, and accessible to everyone. We understand that your skincare and makeup routine is more than just a daily ritual—it's an act of self-love and care.
            </p>

            <p>
              Our carefully curated collection features products that are:
            </p>

            <ul className="space-y-2 list-disc list-inside">
              <li>Formulated with natural, skin-loving ingredients</li>
              <li>Never tested on animals</li>
              <li>Free from harsh chemicals and toxins</li>
              <li>Designed to enhance your natural beauty</li>
              <li>Packaged sustainably whenever possible</li>
            </ul>

            <p>
              We're more than just a beauty store—we're a community of beauty enthusiasts who believe in celebrating individuality and embracing what makes you uniquely beautiful. Our mission is to help you discover products that not only make you look good but also feel good about what you're putting on your skin.
            </p>

            <p>
              Thank you for choosing Blossom Beauty. We're honored to be part of your beauty journey and can't wait to help you bloom into your most confident self.
            </p>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg font-display italic text-primary">
              "Beauty begins the moment you decide to be yourself."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
