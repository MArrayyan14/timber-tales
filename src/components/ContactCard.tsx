import { Phone, Mail, User } from "lucide-react";

interface ContactCardProps {
  name: string;
  position: string;
  phone: string;
  email: string;
}

const ContactCard = ({ name, position, phone, email }: ContactCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-5 sm:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full">
      <div className="flex flex-col items-center text-center">
        {/* Icon placeholder instead of image */}
        <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 transition-all duration-300">
          <User className="w-7 sm:w-8 h-7 sm:h-8 text-primary" />
        </div>
        
        <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-1">
          {name}
        </h3>
        <p className="text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-5">{position}</p>
        
        <div className="space-y-2 sm:space-y-3 w-full">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-colors py-1 sm:py-2"
          >
            <Phone size={14} className="flex-shrink-0 sm:w-4 sm:h-4" />
            <span className="text-sm sm:text-base">{phone}</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-colors py-1 sm:py-2"
          >
            <Mail size={14} className="flex-shrink-0 sm:w-4 sm:h-4" />
            <span className="text-sm sm:text-base break-all">{email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
