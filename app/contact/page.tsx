import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export default function ContactPage() {
  return (
    <div className="container px-4 py-24">
      <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
      <p className="mt-6 text-xl text-muted-foreground">
        Get in touch with our team. We'd love to hear from you.
      </p>
      
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}