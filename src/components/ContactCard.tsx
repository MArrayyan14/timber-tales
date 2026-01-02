import { Phone, Mail, User } from "lucide-react";

interface ContactCardProps {
  name: string;
  position: string;
  phone: string;
  email: string;
}

const ContactCard = ({ name, position, phone, email }: ContactCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
      <div className="flex flex-col items-center text-center">
        {/* Icon placeholder instead of image */}
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300">
          <User className="w-8 h-8 text-primary" />
        </div>
        
        <h3 className="font-display text-xl font-semibold text-foreground mb-1">
          {name}
        </h3>
        <p className="text-primary text-sm font-medium mb-5">{position}</p>
        
        <div className="space-y-3 w-full">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors py-2"
          >
            <Phone size={16} className="flex-shrink-0" />
            <span className="text-base">{phone}</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors py-2"
          >
            <Mail size={16} className="flex-shrink-0" />
            <span className="text-base">{email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
