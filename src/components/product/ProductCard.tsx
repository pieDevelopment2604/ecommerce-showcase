"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const isSaved = isInWishlist(product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isSaved) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <Link href={`/products/${product.id}`} className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-foreground hover:text-primary hover:bg-white transition-colors"
          aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-5 h-5 ${isSaved ? "fill-primary text-primary" : ""}`} />
        </button>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
          {product.category}
        </div>
        <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-extrabold text-foreground">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center p-2.5 bg-foreground text-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}
