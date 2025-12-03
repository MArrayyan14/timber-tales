import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TreePine, Users, Leaf, Clock } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";
import processImage from "@/assets/process.jpg";
import forestImage from "@/assets/forest.jpg";

const About = () => {
  const stats = [
    { value: "1952", label: "Year Founded" },
    { value: "70+", label: "Years Experience" },
    { value: "50K+", label: "Sq Ft Warehouse" },
    { value: "100+", label: "Wood Species" },
  ];

  const timeline = [
    {
      year: "1952",
      title: "The Beginning",
      description: "Harold Thompson opens a small sawmill outside Portland, Oregon, with just two employees and a dream of providing quality lumber to local builders.",
    },
    {
      year: "1978",
      title: "Second Generation",
      description: "Harold's son, Robert, takes over the business and expands operations, adding a retail yard and doubling warehouse capacity.",
    },
    {
      year: "1995",
      title: "Sustainability Focus",
      description: "TimberCraft becomes one of the first regional suppliers to commit to 100% sustainably sourced lumber, earning FSC certification.",
    },
    {
      year: "2010",
      title: "Third Generation",
      description: "Sarah Thompson, Robert's daughter, joins the leadership team, bringing modern technology and e-commerce capabilities to the business.",
    },
    {
      year: "Today",
      title: "Looking Forward",
      description: "We continue to grow while staying true to our values: quality products, sustainable practices, and personal service to every customer.",
    },
  ];

  const processSteps = [
    {
      icon: TreePine,
      title: "Sustainable Harvesting",
      description: "We partner with certified forests that practice responsible harvesting, ensuring new growth replaces every tree we use.",
    },
    {
      icon: Clock,
      title: "Proper Drying",
      description: "Our lumber is carefully dried to optimal moisture levels, preventing warping and ensuring stability in your finished projects.",
    },
    {
      icon: Users,
      title: "Expert Grading",
      description: "Every board is inspected by our experienced team, sorted by grade, and stored properly in our climate-controlled facility.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Delivery",
      description: "Our modern fleet minimizes emissions while ensuring your lumber arrives protected and ready to use.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6 animate-fade-up">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
              Three Generations of 
              <span className="text-gradient"> Timber Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
              Since 1952, the Thompson family has been providing premium lumber to builders, 
              craftsmen, and homeowners across the Pacific Northwest.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Heritage</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Rooted in Family Values
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In 1952, Harold Thompson had a simple vision: provide the finest lumber and treat every 
                customer like family. He started with a small sawmill, a secondhand truck, and an 
                unwavering commitment to quality.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                That vision has carried through three generations. Today, his granddaughter Sarah 
                leads TimberCraft, combining traditional craftsmanship values with modern sustainable 
                practices and technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                While much has changed over seven decades, our core promise remains the same: 
                exceptional wood products, fair prices, and service that treats you like part of 
                our extended family.
              </p>
            </div>
            <div className="relative">
              <img
                src={forestImage}
                alt="Sustainable forest at sunrise"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Journey</span>
              <h2 className="font-display text-4xl font-bold text-foreground mt-3">
                Milestones Through the Years
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
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={warehouseImage}
                alt="TimberCraft warehouse interior with organized lumber stacks"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-6 shadow-xl">
                <div className="text-4xl font-display font-bold text-primary">50K+</div>
                <div className="text-muted-foreground text-sm">Square Feet</div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Facility</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                State-of-the-Art Warehouse
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our 50,000+ square foot warehouse is designed specifically for lumber storage. 
                With controlled ventilation and organized sections for each wood type and grade, 
                we ensure every board maintains optimal condition until it reaches you.
              </p>
              <ul className="space-y-4">
                {[
                  "Climate-controlled storage areas",
                  "Organized by species, grade, and dimension",
                  "Covered loading docks for weather protection",
                  "Easy customer access for in-person selection",
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Process</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              From Forest to You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every piece of lumber goes through our careful process to ensure you receive 
              only the finest quality wood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="group flex gap-6 p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-primary font-medium mb-1">Step {index + 1}</div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={processImage}
              alt="Wood being processed in sawmill with beautiful grain patterns"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent flex items-center">
              <div className="p-12 max-w-xl">
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                  Craftsmanship in Every Cut
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our experienced team takes pride in every board we process. We understand that 
                  your project deserves the best, and we work hard to deliver lumber that exceeds 
                  your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Our Commitment</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-12">
            Values We Live By
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Quality",
                description: "We never compromise on the quality of our products. Every piece is inspected to meet our high standards.",
              },
              {
                title: "Sustainability",
                description: "Caring for forests today ensures we can provide quality lumber for generations to come.",
              },
              {
                title: "Service",
                description: "From expert advice to reliable delivery, we go the extra mile for every customer.",
              },
            ].map((value) => (
              <div key={value.title} className="p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
