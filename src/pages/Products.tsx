import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import ScrollReveal from "@/components/ScrollReveal";
import { Globe, Award, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/*
  ============================================================
  PRODUCT IMAGES - HOW TO REPLACE
  ============================================================
  
  All product images are stored in: /public/products/
  
  Expected filenames:
  - nordic-pine.jpg
  - nordic-spruce.jpg
  - german-pine.jpg
  - eastern-white-pine.jpg
  - syp.jpg (Southern Yellow Pine)
  - spf.jpg (Spruce, Pine & Fir)
  
  TO REPLACE AN IMAGE:
  1. Go to the /public/products/ folder
  2. Delete or overwrite the existing file
  3. Add your new image with the EXACT same filename
  4. Refresh the page to see changes
  
  Recommended image specifications:
  - Format: .jpg or .png
  - Dimensions: 800x600 or larger (will be responsive)
  - Aspect ratio: 4:3 recommended for consistency
  
  You do NOT need to modify any code to change images.
  ============================================================
*/

// Product image paths - all from /public/products/ folder
const PRODUCT_IMAGES = {
  nordicPine: "/products/nordic-pine.jpg",
  nordicSpruce: "/products/nordic-spruce.jpg",
  germanPine: "/products/german-pine.jpg",
  easternWhitePine: "/products/eastern-white-pine.jpg",
  syp: "/products/syp.jpg",
  spf: "/products/spf.jpg",
};

const Products = () => {
  useEffect(() => {
    document.title = "Saify Commercial Establishment";
  }, []);

  const products = [
    {
      title: "Nordic Pine",
      origin: "Finland & Sweden",
      description:
        "Nordic Pine is renowned for its straight grain, light color, and excellent workability. Sourced from the managed forests of Scandinavia, it offers a superior strength-to-weight ratio and consistent quality that makes it ideal for both structural and finishing applications.",
      specifications: [
        "Grades: A, B, C, D (European grading standards)",
        "Conditions: KD (Kiln Dried), AD (Air Dried), KDHT (Heat Treated)",
        "Finishes: Rough Sawn, S4S (Surfaced Four Sides)",
        "Moisture Content: 12-18% (KD)",
        "Applications: Construction framing, joinery, furniture components",
      ],
      image: PRODUCT_IMAGES.nordicPine,
    },
    {
      title: "Nordic Spruce",
      origin: "Finland & Sweden",
      description:
        "Nordic Spruce is valued for its light weight, excellent workability, and consistent quality throughout. It's widely used in construction and industrial applications where strength, stability, and ease of processing are priorities.",
      specifications: [
        "Grades: I, II, III, IV (Nordic grading system)",
        "Conditions: KD, KDHT (Heat Treated for export compliance)",
        "Finishes: Rough Sawn, Planed, S4S",
        "Density: 400-500 kg/m³",
        "Applications: Structural timber, cladding, packaging, pallets",
      ],
      image: PRODUCT_IMAGES.nordicSpruce,
    },
    {
      title: "German Pine & Spruce",
      origin: "Germany",
      description:
        "German softwoods are produced under strict quality control and sustainable forestry practices. These timbers meet rigorous European standards and are suitable for applications requiring precision and reliability.",
      specifications: [
        "Grades: S7, S10, S13 (Strength classes)",
        "Certification: PEFC & FSC certified available",
        "Conditions: KD, Fresh Sawn",
        "Finishes: Sawn, Planed, Profiled",
        "Applications: Engineering, construction, outdoor structures",
      ],
      image: PRODUCT_IMAGES.germanPine,
    },
    {
      title: "Eastern White Pine",
      origin: "North America",
      description:
        "Eastern White Pine is prized for its fine, even texture and excellent workability. Its low resin content makes it ideal for painting and finishing, while its dimensional stability makes it suitable for detailed millwork and interior applications.",
      specifications: [
        "Grades: Select, #1 Common, #2 Common",
        "Conditions: KD (8-12% moisture content)",
        "Finishes: S4S, Pattern Stock",
        "Features: Low shrinkage, minimal warping",
        "Applications: Interior trim, paneling, furniture, millwork",
      ],
      image: PRODUCT_IMAGES.easternWhitePine,
    },
    {
      title: "Southern Yellow Pine (SYP)",
      origin: "Southern United States",
      description:
        "Southern Yellow Pine is one of the strongest softwoods available, known for its exceptional strength and excellent treatment acceptance. It's the preferred choice for structural applications and treated lumber where durability is essential.",
      specifications: [
        "Grades: Select Structural, #1, #2, #3",
        "Conditions: KD, Treated (CCA, ACQ options)",
        "Finishes: Rough, S4S, Surfaced Dry",
        "Density: 570-660 kg/m³",
        "Applications: Decking, framing, industrial construction",
      ],
      image: PRODUCT_IMAGES.syp,
    },
    {
      title: "SPF (Spruce, Pine & Fir)",
      origin: "Canada",
      description:
        "Canadian SPF is a versatile softwood combination offering excellent strength, workability, and value. It's one of the most widely used softwood products globally, known for its consistent quality and reliable availability.",
      specifications: [
        "Grades: MSR (Machine Stress Rated), #2 & Better, Stud Grade",
        "Conditions: KD (19% MC or less)",
        "Finishes: S4S, Rough",
        "Standards: NLGA graded",
        "Applications: Framing, studs, industrial packaging, manufacturing",
      ],
      image: PRODUCT_IMAGES.spf,
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
                Premium <span className="text-primary">Softwood</span> Selection
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Saify Commercial Establishment specializes exclusively in softwood products sourced from 
                trusted suppliers across the globe. Our focus on softwood ensures deep expertise and 
                consistent quality in every shipment.
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
                    Quality Standards
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    KD, AD, KDHT conditions with Rough and S4S finishes
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Responsible Sourcing
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Timber from managed forests with certification options available
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Timber Conditions & Finishes
                </h2>
                <p className="text-muted-foreground mb-6">
                  All our softwood products are available in the following conditions and finishes to meet 
                  the specific requirements of construction, packaging, and manufacturing industries.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Drying Conditions</h4>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      <li>
                        <strong className="text-foreground">KD (Kiln Dried):</strong> 
                        <span className="block mt-1">Moisture reduced to 12-18% in controlled kilns for dimensional stability and reduced weight.</span>
                      </li>
                      <li>
                        <strong className="text-foreground">AD (Air Dried):</strong> 
                        <span className="block mt-1">Natural drying process, typically 18-25% moisture content. Cost-effective for certain applications.</span>
                      </li>
                      <li>
                        <strong className="text-foreground">KDHT (Kiln Dried Heat Treated):</strong> 
                        <span className="block mt-1">Meets ISPM-15 international standards for export packaging and phytosanitary compliance.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Surface Finishes</h4>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      <li>
                        <strong className="text-foreground">Rough (Sawn):</strong> 
                        <span className="block mt-1">Natural cut surface directly from the sawmill. Suitable for structural use and applications where finishing isn't required.</span>
                      </li>
                      <li>
                        <strong className="text-foreground">S4S (Surfaced Four Sides):</strong> 
                        <span className="block mt-1">Precision milled on all four sides for smooth finish and exact dimensions. Ideal for furniture and visible applications.</span>
                      </li>
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
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Softwood Range
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our selection of premium softwood species sourced from leading timber-producing regions worldwide
              </p>
            </div>
          </ScrollReveal>
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
              Need Specific Requirements?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              We can source specific grades, dimensions, and species to meet your exact requirements. 
              Contact us for custom orders, bulk pricing, and availability information.
            </p>
            <Button variant="heroOutline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">
                Request a Quote
                <ArrowRight size={18} />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;