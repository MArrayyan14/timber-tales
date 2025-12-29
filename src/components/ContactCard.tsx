import { Phone, Mail } from "lucide-react";

interface ContactCardProps {
  image: string;
  name: string;
  position: string;
  phone: string;
  email: string;
}

const ContactCard = ({ image, name, position, phone, email }: ContactCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
          {name}
        </h3>
        <p className="text-primary text-sm font-medium mb-4">{position}</p>
        
        <div className="space-y-2 w-full">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
          >
            <Phone size={14} className="flex-shrink-0" />
            <span>{phone}</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
          >
            <Mail size={14} className="flex-shrink-0" />
            <span>{email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
