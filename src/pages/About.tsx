import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { TreePine, Users, Factory, Truck, Handshake, Shield, Heart } from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";
import processImage from "@/assets/process.jpg";
import forestImage from "@/assets/forest.jpg";

const About = () => {
  useEffect(() => {
    document.title = "Saify Commercial Establishment";
  }, []);

  const stats = [
    { value: "1931", label: "Family Origins" },
    { value: "1981", label: "Formally Established" },
    { value: "1998", label: "Imports Began" },
    { value: "90+", label: "Years in Trade" },
  ];

  const timeline = [
    {
      year: "1931",
      title: "The Beginning",
      description: "The founding family entered the wood and timber trade, establishing roots in what would become a multi-generational business. This marked the beginning of a legacy built on honest dealings and quality products.",
    },
    {
      year: "1981",
      title: "Formal Establishment",
      description: "Saify Commercial Establishment was formally registered, transitioning from a family operation to a structured commercial entity. The company focused on supplying locally sourced timber within Pakistan.",
    },
    {
      year: "1998",
      title: "Entering the Import Business",
      description: "As demand for consistent quality increased, Saify Commercial took a major step forward by entering the timber import business with a clear focus on softwood. This opened access to premium international sources.",
    },
    {
      year: "2000s",
      title: "Regional Expansion",
      description: "The company expanded its supplier network across multiple continents, establishing relationships with mills in Scandinavia, North America, and Europe. This diversification ensured stable supply chains.",
    },
    {
      year: "Today",
      title: "Industry Leadership",
      description: "Saify Commercial has grown into one of Pakistan's largest and most established softwood timber importers, serving clients across the country while maintaining the values and reputation built over generations.",
    },
  ];

  const processSteps = [
    {
      icon: TreePine,
      title: "International Sourcing",
      description: "We work with trusted suppliers across Scandinavia, North America, and Europe to source premium softwood that meets our strict quality standards.",
    },
    {
      icon: Factory,
      title: "Quality Processing",
      description: "All timber is processed according to specifications—Kiln Dried, Air Dried, or Heat Treated—and finished as Rough or S4S based on requirements.",
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Our experienced team helps clients select the appropriate species, grade, and finish for their specific application, whether construction, packaging, or manufacturing.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Efficient logistics ensure your timber reaches its destination safely and on schedule, with deliveries across Pakistan.",
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
            alt="Sustainable softwood forests"
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
              Over Nine Decades of
              <span className="text-green-light"> Excellence in Timber</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed animate-fade-up delay-200">
              From a family timber business in 1931 to one of Pakistan's leading softwood importers today, 
              Saify Commercial Establishment has built its reputation on quality, integrity, and lasting relationships.
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
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Legacy Built on Trust
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Saify Commercial traces its origins to 1931, when the founding family entered the wood and timber trade. 
                  What began as a family-run operation evolved steadily over generations, eventually leading to the formal 
                  establishment of Saify Commercial Establishment in 1981.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In its early years, the company focused on supplying locally sourced timber within Pakistan. As the industry 
                  evolved and demand for consistent quality increased, Saify Commercial took a major step forward in 1998 
                  by entering the timber import business, with a clear focus on softwood.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Over the past three decades, Saify Commercial has grown into one of Pakistan's largest and most established 
                  softwood timber importers. The company serves clients across Pakistan and maintains long-standing relationships 
                  with trusted international suppliers. Today, its imports span multiple regions across the globe, ensuring 
                  consistency in quality and supply.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src={warehouseImage}
                  alt="Saify Commercial warehouse with softwood timber inventory"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold text-foreground">
                  Our Journey
                </h2>
              </div>
            </ScrollReveal>

            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

              {timeline.map((item, index) => (
                <ScrollReveal key={item.year} delay={index * 100}>
                  <div
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative order-2 lg:order-1">
                {/* 
                  VIDEO FILE INSTRUCTIONS:
                  ========================
                  Place your video file at: public/media/storage-facility.mp4
                  
                  Supported formats: .mp4 (recommended), .webm, .ogg
                  Recommended resolution: 1280x720 or 1920x1080
                  
                  To replace the video:
                  1. Delete the existing file at public/media/storage-facility.mp4
                  2. Add your new video file with the same name
                  3. Refresh the page to see changes
                  
                  The video will NOT autoplay. Users must click to play.
                */}
                <video
                  controls
                  muted
                  playsInline
                  className="w-full rounded-lg shadow-lg"
                  poster="/media/storage-facility-poster.jpg"
                >
                  <source src="/media/storage-facility.mp4" type="video/mp4" />
                  <source src="/media/storage-facility.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="order-1 lg:order-2">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Storage & Facilities
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our facilities are designed for efficient storage and handling of imported softwood. 
                  With organized inventory management and proper environmental controls, we ensure every 
                  piece of timber maintains its quality from arrival to delivery.
                </p>
                <ul className="space-y-4">
                  {[
                    "Large capacity for bulk import storage",
                    "Organized by species, grade, and condition",
                    "Protected storage to maintain timber quality",
                    "Efficient dispatch and loading facilities",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                How We Work
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From sourcing to delivery, our process ensures you receive quality timber with reliable service
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 100}>
                <div
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">
              Our Core Values
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Integrity",
                description: "Honesty and transparency are the foundation of everything we do. We believe in fair dealings and maintaining trust with every stakeholder.",
              },
              {
                icon: Handshake,
                title: "Partnership",
                description: "Every supplier, customer, and employee is treated as a stakeholder. We believe mutual growth and trust are essential for sustained success.",
              },
              {
                icon: Heart,
                title: "Commitment",
                description: "We are committed to quality, reliability, and long-term relationships. Our reputation has been built over generations, and we protect it with every transaction.",
              },
            ].map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="p-8">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;