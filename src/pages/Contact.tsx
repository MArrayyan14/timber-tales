import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCard from "@/components/ContactCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const teamMembers = [
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      name: "Ahmed Khan",
      position: "Sales Director",
      phone: "+92 321 1234567",
      email: "ahmed@saifycommercial.pk",
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      name: "Hassan Ali",
      position: "Operations Manager",
      phone: "+92 333 9876543",
      email: "hassan@saifycommercial.pk",
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      name: "Bilal Ahmed",
      position: "Customer Relations",
      phone: "+92 300 5551234",
      email: "bilal@saifycommercial.pk",
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
                Get in Touch
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions about our products or need a quote? Our team is ready to 
                assist you with your timber requirements.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Contact Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Team
              </h2>
              <p className="text-muted-foreground">
                Get in touch with our dedicated professionals
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                  Fill out the form below and our team will get back to you 
                  within 24 hours with pricing and availability.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
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
                    <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                      Requirement Type
                    </label>
                    <Input
                      id="project"
                      name="project"
                      type="text"
                      placeholder="e.g., Construction, Furniture, Industrial"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements, quantities needed, and any specific wood types..."
                      rows={5}
                      required
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal direction="right" delay={100}>
              <div className="h-full min-h-[500px] rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.4853898831757!2d67.02825931500285!3d24.81440738407838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d9c4b0f7c8f%3A0x1b3c32c5b3f5d4b0!2sDolmen%20Mall%20Clifton!5e0!3m2!1sen!2s!4v1703849200000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Saify Commercial Establishment Location - Dolmen Mall Clifton"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
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
