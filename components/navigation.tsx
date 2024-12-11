"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-6 w-6" />
          <span className="font-bold">Company</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/about" ? "text-primary" : "text-muted-foreground"
            )}
          >
            About
          </Link>
          <Link
            href="/about/us"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/about/us" ? "text-primary" : "text-muted-foreground"
            )}
          >
            Team
          </Link>
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}