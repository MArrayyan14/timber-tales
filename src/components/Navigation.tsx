import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const links = [{
    href: "/",
    label: "Home"
  }, {
    href: "/about",
    label: "About"
  }, {
    href: "/contact",
    label: "Contact"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">S</span>
            </div>
            <span className="font-display text-xl font-semibold text-foreground">Saify Commercial Establishment</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => <Link key={link.href} to={link.href} className={cn("text-sm font-medium transition-colors duration-300 relative", location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground")}>
                {link.label}
                {location.pathname === link.href && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />}
              </Link>)}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden pt-4 pb-2 animate-fade-in">
            {links.map(link => <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className={cn("block py-3 text-base font-medium transition-colors duration-300", location.pathname === link.href ? "text-primary" : "text-muted-foreground")}>
                {link.label}
              </Link>)}
          </div>}
      </div>
    </nav>;
};
export default Navigation;