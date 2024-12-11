import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
      <div 
        className="h-[600px] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Building the Future
            <br />
            <span className="text-primary">Together</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[600px] text-lg text-muted-foreground">
            We're a team of innovators dedicated to creating cutting-edge solutions that transform industries and improve lives.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/about">
              <Button size="lg">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get in Touch <Zap className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}