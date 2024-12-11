"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export function ContactForm() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold">Send us a message</h2>
      <form className="mt-6 space-y-4">
        <div>
          <Input placeholder="Your Name" />
        </div>
        <div>
          <Input type="email" placeholder="Email Address" />
        </div>
        <div>
          <Textarea placeholder="Your Message" className="min-h-[150px]" />
        </div>
        <Button className="w-full">Send Message</Button>
      </form>
    </Card>
  );
}