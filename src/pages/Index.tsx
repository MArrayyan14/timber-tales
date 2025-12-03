import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, TreePine, Warehouse, Award, Truck, Factory, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-wood.jpg";
import forestImage from "@/assets/forest.jpg";
import warehouseImage from "@/assets/warehouse.jpg";

const Index = () => {
  const features = [
    {
      icon: TreePine,
      title: "Premium Quality",
      description: "Carefully selected timber from the finest sources, meeting the highest standards for strength and durability.",
    },
    {
      icon: Warehouse,
      title: "Large Inventory",
      description: "Extensive warehouse facility stocked with diverse wood species for construction, furniture, and industrial use.",
    },
    {
      icon: Award,
      title: "Industry Experience",
      description: "Decades of expertise in the timber business, serving Pakistan's leading builders and manufacturers.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Efficient logistics network ensuring timely delivery across Karachi and nationwide.",
    },
  ];

  const products = [
    {
      title: "Construction Timber",
      description: "High-grade lumber for structural applications, roofing, and framework construction.",
      image: heroImage,
    },
    {
      title: "Furniture Grade Wood",
      description: "Premium hardwoods and specialty woods for furniture manufacturing and interior design.",
      image: forestImage,
    },
    {
      title: "Industrial Lumber",
      description: "Bulk timber solutions for pallets, packaging, and industrial manufacturing needs.",
      image: warehouseImage,
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
            alt="Premium timber stacks at Saify Commercial warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/80 to-forest/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-6 animate-fade-up">
              Established 1985 · Karachi, Pakistan
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up delay-100">
              Your Trusted Partner in
              <span className="text-green-light"> Quality Timber</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 animate-fade-up delay-200">
              Saify Commercial Establishment is a leading supplier of premium wood and lumber 
              products in Pakistan. We serve builders, manufacturers, and businesses with 
              reliable quality and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button variant="hero" asChild>
                <Link to="/about">
                  About Our Company
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-green-pale">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Family Business at Your Service
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Saify Commercial Establishment is a family-run business founded in 1985. Over nearly 
                four decades, we have grown into one of Karachi's most trusted timber suppliers, 
                serving the construction, furniture, and industrial sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality, fair pricing, and customer satisfaction has made us 
                the preferred choice for leading contractors, furniture manufacturers, and 
                businesses across Pakistan.
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Raw Material Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We source our timber from certified suppliers, ensuring every piece meets 
                rigorous quality standards. Our extensive network allows us to provide 
                diverse wood species for any application.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From softwoods for construction to premium hardwoods for fine furniture, 
                our inventory covers the complete spectrum of timber requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Product Range
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive timber solutions for every industry need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.title}
                className="group rounded-lg overflow-hidden bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
                    <h3 className="font-display text-2xl font-bold text-white text-center px-4">
                      {product.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Saify Commercial
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading businesses across Pakistan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg bg-background border border-border hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
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
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1985", label: "Established" },
              { value: "35+", label: "Years Experience" },
              { value: "500+", label: "Satisfied Clients" },
              { value: "50+", label: "Wood Species" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Discuss Your Requirements?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Whether you need bulk timber for construction or specialty wood for furniture, 
            our team is ready to assist you with competitive quotes and reliable service.
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
