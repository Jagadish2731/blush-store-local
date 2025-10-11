import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Instagram, Youtube, Facebook, Mail, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8 border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    required
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 shadow-medium"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-8 border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                    <p className="text-muted-foreground">hello@blossombeauty.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
                    <p className="text-muted-foreground">Available Mon-Fri, 9am-6pm EST</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Get instant answers to your questions
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border bg-gradient-to-br from-primary/5 to-secondary/5">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <p className="text-muted-foreground mb-6">
                  Stay connected for beauty tips, new arrivals, and exclusive offers!
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
