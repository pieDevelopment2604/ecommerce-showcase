"use client";

import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full flex-1 flex flex-col items-center justify-center text-center">
        <Heart className="w-20 h-20 sm:w-24 sm:h-24 text-muted-foreground opacity-20 mb-6" />
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Your wishlist is empty</h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-8 px-4 sm:px-0">
          You haven't saved any items yet. Find something you love and save it for later.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-md text-sm sm:text-base"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full flex-1">
      <Link href="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8 font-medium text-sm sm:text-base">
        <ArrowLeft className="w-4 h-4" /> Continue Shopping
      </Link>

      <div className="mb-8 sm:mb-10 flex items-center justify-between">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground flex items-center gap-3">
          Saved Items <span className="text-xl sm:text-2xl text-muted-foreground font-normal">({wishlist.length})</span>
        </h1>
      </div>

      <ProductGrid products={wishlist} />
    </div>
  );
}
