import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, TreePine, Warehouse, Award, Truck } from "lucide-react";
import heroImage from "@/assets/hero-wood.jpg";
import forestImage from "@/assets/forest.jpg";

const Index = () => {
  const features = [
    {
      icon: TreePine,
      title: "Sustainable Sourcing",
      description: "All our timber comes from certified sustainable forests, ensuring responsible forestry for future generations.",
    },
    {
      icon: Warehouse,
      title: "Massive Inventory",
      description: "Over 50,000 sq ft of warehouse space stocked with premium hardwoods, softwoods, and specialty lumber.",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Every piece is inspected and graded to meet the highest industry standards for strength and appearance.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Fast, careful delivery to your job site or workshop with our dedicated fleet of trucks.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium lumber stacks in warehouse with warm lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6 animate-fade-up">
              Est. 1952 · Three Generations of Excellence
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
              Premium Timber for 
              <span className="text-gradient"> Every Project</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-up delay-200">
              From towering beams to fine-grain hardwoods, we supply builders, craftsmen, and 
              homeowners with the finest sustainable lumber in the Pacific Northwest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button variant="hero" asChild>
                <Link to="/about">
                  Discover Our Story
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Why Choose Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
              Built on Trust & Quality
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_hsl(36_72%_52%/0.1)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={forestImage}
                alt="Sustainable forest at golden hour"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-xl">
                <div className="text-4xl font-display font-bold text-primary">70+</div>
                <div className="text-muted-foreground text-sm">Years of Excellence</div>
              </div>
            </div>
            
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Heritage</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                A Legacy Rooted in Wood
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What started as a small sawmill in 1952 has grown into one of the Pacific Northwest&apos;s 
                most trusted timber suppliers. Three generations of our family have dedicated themselves 
                to providing exceptional wood products while caring for the forests we depend on.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Today, we operate a state-of-the-art facility with over 50,000 square feet of covered 
                storage, ensuring our lumber stays protected and ready for your next project.
              </p>
              <Button variant="outline" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_70%)]" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Whether you need a single board or a full truckload, our team is here to help 
            you find the perfect wood for your needs.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">
              Contact Us Today
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
