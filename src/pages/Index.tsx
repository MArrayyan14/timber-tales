import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, TreePine, Warehouse, Award, Truck } from "lucide-react";
import heroImage from "@/assets/forest.jpg";

const Index = () => {
  useEffect(() => {
    document.title = "Saify Commercial Establishment";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Saify Commercial Establishment is one of Pakistan's leading softwood timber importers, serving construction, packaging, and manufacturing industries nationwide.");
    }
  }, []);

  const features = [
    {
      icon: TreePine,
      title: "Premium Softwood",
      description: "Carefully selected softwood timber from trusted international suppliers, meeting the highest standards for strength and consistency.",
    },
    {
      icon: Warehouse,
      title: "Extensive Inventory",
      description: "Large-scale storage facilities stocked with diverse softwood species in KD, AD, and KDHT conditions, ready for immediate dispatch.",
    },
    {
      icon: Award,
      title: "Decades of Experience",
      description: "A legacy spanning over 90 years in the timber trade, with formal operations established in 1981.",
    },
    {
      icon: Truck,
      title: "Nationwide Supply",
      description: "Reliable logistics network ensuring timely delivery to clients across Pakistan, from major cities to industrial zones.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium timber forest - Saify Commercial Establishment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-6 animate-fade-up">
              Established 1981 - Karachi, Pakistan
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up delay-100">
              Your Trusted Partner in
              <span className="text-green-light"> Quality Timber</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 animate-fade-up delay-200">
              Sourcing the right softwood, at the right standard.
              For projects that demand consistency and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button variant="hero" asChild>
                <Link to="/products">
                  Explore Products
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Saify Commercial
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trusted by leading businesses across Pakistan for consistent quality and reliable service
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div
                  className="p-6 rounded-lg bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white">1931</div>
              <div className="text-white/80 text-sm mt-1">Family Legacy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white">1981</div>
              <div className="text-white/80 text-sm mt-1">Est. Formally</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white">1998</div>
              <div className="text-white/80 text-sm mt-1">Importing Since</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white">25+</div>
              <div className="text-white/80 text-sm mt-1">Years of Imports</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Built on Trust and Integrity
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-center leading-relaxed mb-6">
                  What began as a family-run timber trading operation in 1931 has evolved steadily over generations. 
                  Saify Commercial Establishment was formally established in 1981 and entered the import business in 1998, 
                  with a clear focus on softwood. Today, our imports span multiple regions across the globe, 
                  ensuring consistency in quality and supply.
                </p>
                <p className="text-center leading-relaxed">
                  Honesty, transparency, and integrity are our core values. Every supplier, customer, and employee 
                  is treated as a stakeholder, with the belief that mutual growth and trust are essential for sustained success.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Discuss Your Requirements?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Whether you need bulk softwood for construction, packaging materials, or manufacturing, 
              our team is ready to assist you with competitive quotes and reliable service.
            </p>
            <Button variant="hero" asChild>
              <Link to="/contact">
                Contact Us Today
                <ArrowRight size={20} />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;