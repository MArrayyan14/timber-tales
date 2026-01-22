import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCard from "@/components/ContactCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact Saify Commercial Establishment | Timber Importers Pakistan";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get in touch with Saify Commercial Establishment for inquiries and softwood timber supply across Pakistan.");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      requirement: formData.get("requirement"),
      message: formData.get("message"),
      timestamp: new Date().toISOString(),
    };

    // Store submission in localStorage as a simple persistence solution
    const existingSubmissions = JSON.parse(localStorage.getItem("quote_submissions") || "[]");
    existingSubmissions.push(data);
    localStorage.setItem("quote_submissions", JSON.stringify(existingSubmissions));

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    toast({
      title: "Quote Request Received",
      description: "Thank you for your inquiry. Our team will review your requirements and respond within 24-48 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const teamMembers = [
    {
      name: "Shabbir Saifddin",
      position: "Director",
      phone: "+92 300 1179854",
      email: "shabbir@scewood.com",
    },
    {
      name: "Saifuddin Jodiyawala",
      position: "Director",
      phone: "+92 300 2179854",
      email: "saify.jodiya@scewood.com",
    },
    {
      name: "Ali Asghar",
      position: "Director",
      phone: "+92 300 2316050",
      email: "info@scewood.com",
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
                Get in Touch
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Have questions about our softwood products or need a quote? Our team is ready to 
                assist you with your timber requirements.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Contact Cards */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                Our Team
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Get in touch with our dedicated professionals
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 100}>
                <ContactCard {...member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-green-pale/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <ScrollReveal direction="left">
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Request a Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below with your requirements. Our team will review your inquiry 
                  and respond within 24-48 hours with pricing and availability information.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Full name"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+92 XXX XXXXXXX"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="requirement" className="block text-sm font-medium text-foreground mb-2">
                      Requirement Type
                    </label>
                    <Input
                      id="requirement"
                      name="requirement"
                      type="text"
                      placeholder="e.g., Construction, Packaging, Manufacturing"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Requirements <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your requirements including species, quantity, dimensions, and any specific conditions (KD/AD/KDHT) or finishes (Rough/S4S) needed..."
                      rows={5}
                      required
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Quote Request
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Map and Info */}
            <ScrollReveal direction="right" delay={100}>
              <div className="space-y-6">
                {/* Business Info */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Saify Commercial Establishment
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-muted-foreground text-sm">
                        <p className="font-medium text-foreground">Location</p>
                        <p>Karachi, Pakistan</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-muted-foreground text-sm">
                        <p className="font-medium text-foreground">Business Hours</p>
                        <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="h-[400px] rounded-xl overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.618786805416!2d66.87138971089706!3d24.876866344508958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb313336822cf57%3A0xb551d2d98ce9e5ba!2sSaify%20Commercial%20Establishment!5e0!3m2!1sen!2s!4v1767188342456!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Saify Commercial Establishment Location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
