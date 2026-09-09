import Link from "next/link";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
            <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
              Jay art work
            </Link>
            <p className="text-muted-foreground mt-2 text-sm text-center sm:text-left">
              Curated creative gifts for everyone.
            </p>
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for creatives.
          </div>
        </div>
      </div>
    </footer>
  );
}
