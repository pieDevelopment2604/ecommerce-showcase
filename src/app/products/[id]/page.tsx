"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Heart, ShoppingCart, Copy, Check } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { QuantitySelector } from "@/components/product/QuantitySelector";

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) {
    notFound();
  }

  const isSaved = isInWishlist(product.id);

  const toggleWishlist = () => {
    if (isSaved) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">
      <Link href="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8 font-medium text-sm sm:text-base">
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        {/* Product Image */}
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted border border-border shadow-sm">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="text-xs sm:text-sm font-bold text-primary uppercase tracking-widest mb-2 sm:mb-3">
            {product.category}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3 sm:mb-4 leading-tight">
            {product.name}
          </h1>
          <div className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            ${product.price.toFixed(2)}
          </div>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-10">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Quantity</h3>
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => setQuantity(q => q + 1)}
              onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
              max={10}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-6 sm:py-4 sm:px-8 bg-primary text-primary-foreground rounded-full font-bold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
            <button
              onClick={toggleWishlist}
              className={`flex items-center justify-center gap-2 py-3 px-6 sm:py-4 sm:px-8 border-2 rounded-full font-bold text-base sm:text-lg transition-colors w-full sm:w-auto ${
                isSaved 
                  ? "border-primary text-primary bg-primary/5" 
                  : "border-border text-foreground hover:border-foreground"
              }`}
            >
              <Heart className={`w-5 h-5 ${isSaved ? "fill-primary" : ""}`} /> 
              {isSaved ? "Saved" : "Save"}
            </button>
          </div>

          <div className="pt-8 border-t border-border flex items-center justify-between">
            <span className="text-sm text-muted-foreground font-medium">Share this product</span>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors bg-primary/10 px-4 py-2 rounded-full relative"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy Link"}
              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs py-1 px-2 rounded font-bold whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
                  Link copied to clipboard!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
