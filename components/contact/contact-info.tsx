import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <ContactCard
        icon={MapPin}
        title="Our Location"
        content={
          <>
            123 Innovation Street
            <br />
            Tech City, TC 12345
          </>
        }
      />
      <ContactCard
        icon={Phone}
        title="Phone"
        content="+1 (555) 123-4567"
      />
      <ContactCard
        icon={Mail}
        title="Email"
        content="contact@company.com"
      />
    </div>
  );
}

interface ContactCardProps {
  icon: any;
  title: string;
  content: React.ReactNode;
}

function ContactCard({ icon: Icon, title, content }: ContactCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start space-x-4">
        <Icon className="h-6 w-6 text-primary" />
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="mt-2 text-muted-foreground">{content}</p>
        </div>
      </div>
    </Card>
  );
}