import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { products, CATEGORIES } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 sm:py-20 lg:py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-56 h-56 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Discover Creative Gifts</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
            Curated <span className="text-primary">Jay art work</span> <br className="hidden sm:block" /> for everyone.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0">
            Brighten up your day with our modern, minimal, and premium collection of t-shirts, mugs, and creative accessories.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base w-full sm:w-auto"
            >
              Shop Collection <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Shop by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.slice(1).map((category) => (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className="px-6 py-3 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors font-medium bg-background"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Our most popular creative pieces.</p>
            </div>
            <Link href="/products" className="hidden sm:inline-flex items-center gap-1 text-primary font-medium hover:underline">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <ProductGrid products={featuredProducts} />
          
          <div className="mt-10 text-center sm:hidden">
            <Link href="/products" className="inline-flex items-center gap-1 text-primary font-medium hover:underline">
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
