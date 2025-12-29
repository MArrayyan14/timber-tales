import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import ScrollReveal from "@/components/ScrollReveal";
import { Globe, Award, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-wood.jpg";
import forestImage from "@/assets/forest.jpg";
import warehouseImage from "@/assets/warehouse.jpg";
import processImage from "@/assets/process.jpg";

const Products = () => {
  const products = [
    {
      title: "Nordic Pine",
      origin: "Finland & Sweden",
      description:
        "Nordic Pine is renowned for its straight grain, light color, and excellent workability. Sourced from the pristine forests of Scandinavia, it offers superior strength-to-weight ratio and natural resistance to decay.",
      specifications: [
        "Grades: A, B, C, D (European grading)",
        "Conditions: KD (Kiln Dried), AD (Air Dried), KDHT",
        "Finishes: Sawn, S4S (Surfaced Four Sides)",
        "Moisture Content: 12-18%",
        "Applications: Construction, joinery, furniture",
      ],
      image: forestImage,
    },
    {
      title: "Nordic Spruce",
      origin: "Finland & Sweden",
      description:
        "Nordic Spruce is valued for its light weight, excellent acoustic properties, and consistent quality. It's the preferred choice for structural applications and musical instruments due to its resonance characteristics.",
      specifications: [
        "Grades: I, II, III, IV (Nordic grading system)",
        "Conditions: KD, KDHT (Heat Treated)",
        "Finishes: Rough Sawn, Planed, S4S",
        "Density: 400-500 kg/m³",
        "Applications: Structural timber, cladding, packaging",
      ],
      image: heroImage,
    },
    {
      title: "German Pine & Spruce",
      origin: "Germany",
      description:
        "German softwoods are known for strict quality control and sustainable forestry practices. These timbers meet rigorous European standards and are ideal for high-precision applications.",
      specifications: [
        "Grades: S7, S10, S13 (Strength classes)",
        "Certification: PEFC & FSC certified",
        "Conditions: KD, Fresh Sawn",
        "Finishes: Sawn, Planed, Profiled",
        "Applications: Engineering, construction, outdoor use",
      ],
      image: warehouseImage,
    },
    {
      title: "Eastern White Pine",
      origin: "North America",
      description:
        "Eastern White Pine is prized for its fine, even texture and easy workability. Its low resin content makes it excellent for painting and finishing, while its stability makes it ideal for detailed millwork.",
      specifications: [
        "Grades: Select, #1 Common, #2 Common",
        "Conditions: KD (8-12% MC)",
        "Finishes: S4S, Pattern Stock",
        "Features: Low shrinkage, minimal warping",
        "Applications: Interior trim, paneling, furniture",
      ],
      image: processImage,
    },
    {
      title: "Southern Yellow Pine (SYP)",
      origin: "Southern United States",
      description:
        "Southern Yellow Pine is one of the strongest softwoods available, known for its exceptional strength and excellent treatment acceptance. It's the preferred choice for structural and treated applications.",
      specifications: [
        "Grades: Select Structural, #1, #2, #3",
        "Conditions: KD, Treated (CCA, ACQ)",
        "Finishes: Rough, S4S, Surfaced Dry",
        "Density: 570-660 kg/m³",
        "Applications: Decking, framing, marine construction",
      ],
      image: forestImage,
    },
    {
      title: "SPF (Spruce, Pine & Fir)",
      origin: "Canada",
      description:
        "Canadian SPF is a versatile softwood combination offering excellent strength, workability, and value. It's widely used in construction and is known for its consistent quality and availability.",
      specifications: [
        "Grades: MSR, #2 & Better, Stud Grade",
        "Conditions: KD (19% MC or less)",
        "Finishes: S4S, Rough",
        "Standards: NLGA graded",
        "Applications: Framing, studs, industrial packaging",
      ],
      image: warehouseImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-green-pale">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                Our Products
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Premium <span className="text-primary">Timber</span> Selection
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Saify Commercial Establishment sources the finest timber from around the globe, 
                ensuring every piece meets our rigorous quality standards.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Global Sourcing Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Global Sourcing
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Direct imports from Finland, Sweden, Germany, USA, and Canada
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Quality Certified
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    KD, AD, KDHT conditions with Sawn & S4S finishes
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Sustainably Sourced
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    FSC & PEFC certified timber from managed forests
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Timber Conditions & Finishes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Drying Conditions</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li><strong className="text-foreground">KD (Kiln Dried):</strong> Moisture reduced to 12-18% in controlled kilns</li>
                      <li><strong className="text-foreground">AD (Air Dried):</strong> Natural drying process, typically 18-25% MC</li>
                      <li><strong className="text-foreground">KDHT (Heat Treated):</strong> Meets ISPM-15 standards for export</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Surface Finishes</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li><strong className="text-foreground">Sawn:</strong> Rough cut surface, natural texture</li>
                      <li><strong className="text-foreground">S4S:</strong> Surfaced four sides, smooth finish</li>
                      <li><strong className="text-foreground">Planed:</strong> Precision milled to exact dimensions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16 bg-green-pale/50">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {products.map((product, index) => (
              <ProductSection
                key={product.title}
                {...product}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Order?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              We can source specific grades, dimensions, and species to meet your exact requirements. 
              Contact us for custom orders and bulk pricing.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300"
            >
              Request a Quote
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
