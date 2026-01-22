import ScrollReveal from "./ScrollReveal";

interface ProductSectionProps {
  title: string;
  origin: string;
  description: string;
  specifications: string[];
  image: string;
  reverse?: boolean;
}

const ProductSection = ({
  title,
  origin,
  description,
  specifications,
  image,
  reverse = false,
}: ProductSectionProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <ScrollReveal direction={reverse ? "right" : "left"} className={reverse ? "lg:order-2" : ""}>
        <div className="relative overflow-hidden rounded-xl group">
          <img
            src={image}
            alt={title}
            className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction={reverse ? "left" : "right"} delay={100} className={reverse ? "lg:order-1" : ""}>
        <div>
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
            {origin}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>
          <ul className="space-y-2">
            {specifications.map((spec, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ProductSection;
