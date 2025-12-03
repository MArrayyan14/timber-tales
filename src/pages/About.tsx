import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TreePine, Users, Factory, Truck } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";
import processImage from "@/assets/process.jpg";
import forestImage from "@/assets/forest.jpg";

const About = () => {
  const stats = [
    { value: "1985", label: "Year Founded" },
    { value: "35+", label: "Years Experience" },
    { value: "500+", label: "Clients Served" },
    { value: "50+", label: "Wood Species" },
  ];

  const timeline = [
    {
      year: "1985",
      title: "The Beginning",
      description: "Saify Commercial Establishment was founded in Karachi's timber market, starting as a small trading business with a vision to provide quality wood products to local builders.",
    },
    {
      year: "1995",
      title: "Expansion Phase",
      description: "After a decade of building trust, we expanded our warehouse capacity and began serving furniture manufacturers and large construction companies.",
    },
    {
      year: "2005",
      title: "Industry Leadership",
      description: "Established ourselves as one of Karachi's leading timber suppliers, with a diverse inventory covering over 30 wood species from local and imported sources.",
    },
    {
      year: "2015",
      title: "Modern Operations",
      description: "Invested in modern storage facilities and logistics to ensure consistent quality and timely delivery across Pakistan.",
    },
    {
      year: "Today",
      title: "Looking Forward",
      description: "We continue to grow while maintaining our commitment to quality, fair pricing, and personalized service that has defined us for nearly four decades.",
    },
  ];

  const processSteps = [
    {
      icon: TreePine,
      title: "Quality Sourcing",
      description: "We carefully select timber from trusted suppliers, ensuring each batch meets our strict quality standards.",
    },
    {
      icon: Factory,
      title: "Proper Storage",
      description: "Our warehouse facilities maintain optimal conditions for wood preservation, preventing warping and damage.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our experienced team helps customers select the right wood type and grade for their specific requirements.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Efficient logistics ensure your timber reaches the destination safely and on schedule.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={forestImage}
            alt="Quality timber sourcing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest/90" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-6 animate-fade-up">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6 animate-fade-up delay-100">
              Nearly Four Decades of
              <span className="text-green-light"> Excellence in Timber</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed animate-fade-up delay-200">
              Since 1985, Saify Commercial Establishment has been a trusted name in Pakistan's 
              timber industry, serving builders, manufacturers, and businesses with quality and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Family Business Built on Trust
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Saify Commercial Establishment was founded in 1985 with a simple mission: 
                provide quality timber products at fair prices while treating every customer 
                like family. What started as a small trading business in Karachi's timber 
                market has grown into one of the city's most respected wood suppliers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our success comes from understanding our customers' needs. Whether you're 
                a contractor building homes, a furniture manufacturer creating fine pieces, 
                or an industrial company needing bulk lumber, we have the expertise and 
                inventory to serve you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, the second generation continues the family tradition, combining 
                decades of industry knowledge with modern business practices to better 
                serve our growing customer base across Pakistan.
              </p>
            </div>
            <div className="relative">
              <img
                src={warehouseImage}
                alt="Saify Commercial warehouse with timber inventory"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Our Journey
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} pl-20 md:pl-0`}>
                    <span className="text-primary font-display text-2xl font-bold">{item.year}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={processImage}
                alt="Timber processing and quality inspection"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Warehouse & Facility
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our warehouse in Karachi's timber market is designed for optimal wood storage 
                and handling. With organized sections for different wood types and grades, 
                we ensure every piece maintains its quality until delivery.
              </p>
              <ul className="space-y-4">
                {[
                  "Large storage capacity for diverse inventory",
                  "Organized by species, grade, and dimension",
                  "Protected from weather and moisture",
                  "Easy access for customer visits and selection",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our process ensures you receive quality timber with reliable service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-sm text-primary font-semibold mb-3">Step {index + 1}</div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Quality",
                description: "We never compromise on the quality of our products. Every piece is inspected to meet our standards.",
              },
              {
                title: "Integrity",
                description: "Honest dealings and transparent pricing have been our foundation for nearly four decades.",
              },
              {
                title: "Service",
                description: "From expert guidance to reliable delivery, we prioritize customer satisfaction in everything we do.",
              },
            ].map((value) => (
              <div key={value.title} className="p-8">
                <h3 className="font-display text-2xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
