import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+92 21 1234 5678",
      subtext: "Mon-Sat 9am-6pm",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@saifycommercial.pk",
      subtext: "We reply within 24 hours",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Timber Market",
      subtext: "Karachi, Pakistan",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sat: 9am-6pm",
      subtext: "Sunday: Closed",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-green-pale">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6 animate-fade-up">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
              Have questions about our products or need a quote? Our team is ready to 
              assist you with your timber requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-foreground font-medium">{item.content}</p>
                <p className="text-muted-foreground text-sm">{item.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
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
                      className="bg-card border-border focus:border-primary"
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
                      className="bg-card border-border focus:border-primary"
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
                    className="bg-card border-border focus:border-primary"
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
                    className="bg-card border-border focus:border-primary"
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
                    className="bg-card border-border focus:border-primary resize-none"
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

            {/* Map / Additional Info */}
            <div>
              <div className="bg-card rounded-lg border border-border overflow-hidden h-full min-h-[400px] flex flex-col">
                <div className="flex-1 bg-primary/5 flex items-center justify-center p-8">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                      Visit Our Office
                    </h3>
                    <p className="text-muted-foreground">
                      Timber Market<br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
                <div className="p-8 bg-card">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Why Choose Us
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "35+ years of industry experience",
                      "Wide range of wood species available",
                      "Competitive wholesale pricing",
                      "Reliable delivery across Pakistan",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
