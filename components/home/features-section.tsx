import { Zap } from "lucide-react";
import { FeatureCard } from "./feature-card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Our solutions are optimized for maximum performance and efficiency."
  },
  {
    icon: Zap,
    title: "Highly Secure",
    description: "Enterprise-grade security to protect your valuable data."
  },
  {
    icon: Zap,
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your success."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}