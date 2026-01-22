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
    document.title = "Softwood Timber Imports | Saify Commercial Establishment";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "High-quality softwood timber imported from trusted suppliers across North America and Europe, available in KD, AD, and KDHT finishes for various applications.");
    }
  }, []);

  const products = [
    {
      title: "Nordic Pine",
      origin: "Sweden, Finland, Norway",
      description:
        "Nordic Pine is known for its straight grain, strength, and excellent durability. Slow growth in cold climates results in higher density, superior dimensional stability, and consistent quality, making it ideal for structural and precision applications.",
      specifications: [
        "Grades: US, SF & 6th Grade",
        "Conditions: KD, AD, KDHT",
        "Finishes: Sawn & Planed (S4S)",
        "Controlled moisture content and uniform grading",
      ],
      image: PRODUCT_IMAGES.nordicPine,
    },
    {
      title: "Nordic Spruce",
      origin: "Sweden, Finland, Austria",
      description:
        "Nordic Spruce is lightweight yet strong, with a fine texture and excellent workability. It offers a smooth surface finish and is widely used where consistency and appearance are important.",
      specifications: [
        "Grades: US, SF & 6th Grade",
        "Conditions: KD / KDHT",
        "Finishes: Sawn & S4S",
        "Light color with uniform grain",
      ],
      image: PRODUCT_IMAGES.nordicSpruce,
    },
    {
      title: "German Pine & Spruce",
      origin: "Germany",
      description:
        "German Pine & Spruce is a high-quality European softwood known for its strength, uniformity, and excellent machining properties. Produced under strict European manufacturing and grading standards, it is widely used in structural, packaging, and industrial applications.",
      specifications: [
        "Grades: SW1, SW2 & SW3",
        "Conditions: KD / KDHT",
        "Finishes: Sawn & Planed (S4S)",
        "Consistent dimensions and reliable performance",
      ],
      image: PRODUCT_IMAGES.germanPine,
    },
    {
      title: "Eastern White Pine",
      origin: "USA, Canada",
      description:
        "Eastern White Pine is a soft, straight-grained timber valued for its smooth finish and ease of processing. It is commonly used in interior applications and general-purpose manufacturing.",
      specifications: [
        "Grades: Mould Grade, Premium, Standard & Industrial",
        "Conditions: KD / AD",
        "Finishes: Sawn & Planed",
        "Light color and minimal knot structure",
      ],
      image: PRODUCT_IMAGES.easternWhitePine,
    },
    {
      title: "Southern Yellow Pine (SYP)",
      origin: "Southern USA",
      description:
        "Southern Yellow Pine is a dense and high-strength softwood known for its load-bearing capacity and durability. It is widely used in structural and heavy-duty applications.",
      specifications: [
        "Grades: No.1, No.2 & Better",
        "Strength-rated lumber",
        "Conditions: KD / KDHT",
        "Excellent fastening and load performance",
      ],
      image: PRODUCT_IMAGES.syp,
    },
    {
      title: "SPF (Spruce, Pine & Fir)",
      origin: "Canada & Europe",
      description:
        "SPF is a versatile and cost-effective softwood grouping offering consistent strength and reliable performance. It is widely used in construction, packaging, and industrial applications.",
      specifications: [
        "Grades: No.2, No.3, Stud Grade",
        "Conditions: KD / KDHT",
        "Finishes: Sawn & S4S",
        "Uniform sizing and grading standards",
      ],
      image: PRODUCT_IMAGES.spf,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-green-pale">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 sm:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Our Products
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
                Premium <span className="text-primary">Softwood</span> Selection
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Saify Commercial Establishment specializes exclusively in softwood products sourced from 
                trusted suppliers across the globe. Our focus on softwood ensures deep expertise and 
                consistent quality in every shipment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Global Sourcing Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                <div className="text-center p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Globe className="w-6 sm:w-7 h-6 sm:h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2">
                    Global Sourcing
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Direct imports from Finland, Sweden, Germany, USA, and Canada
                  </p>
                </div>
                <div className="text-center p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Award className="w-6 sm:w-7 h-6 sm:h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2">
                    Quality Standards
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    KD, AD, KDHT conditions with Rough and S4S finishes
                  </p>
                </div>
                <div className="text-center p-4 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Leaf className="w-6 sm:w-7 h-6 sm:h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2">
                    Responsible Sourcing
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Timber from managed forests with certification options available
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-5 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                  Timber Conditions & Finishes
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                  All our softwood products are available in the following conditions and finishes to meet 
                  the specific requirements of construction, packaging, and manufacturing industries.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2 sm:mb-3">Drying Conditions</h4>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-xs sm:text-sm">
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
                    <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2 sm:mb-3">Surface Finishes</h4>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-xs sm:text-sm">
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
      <section className="py-12 sm:py-16 bg-green-pale/50">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                Our Softwood Range
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
                Explore our selection of premium softwood species sourced from leading timber-producing regions worldwide
              </p>
            </div>
          </ScrollReveal>
          <div className="space-y-12 sm:space-y-20">
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
      <section className="py-12 sm:py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Need Specific Requirements?
            </h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
              We can source specific grades, dimensions, and species to meet your exact requirements. 
              Contact us for custom orders, bulk pricing, and availability information.
            </p>
            <Button variant="heroOutline" asChild className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto justify-center">
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