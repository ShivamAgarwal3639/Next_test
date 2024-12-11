import { Zap } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-6 w-6" />
              <span className="font-bold">Company</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Building innovative solutions for a better tomorrow.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold">Company</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/about/us" className="text-sm text-muted-foreground hover:text-primary">
                Our Team
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-bold">Legal</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-bold">Follow Us</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Twitter
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                LinkedIn
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                GitHub
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}