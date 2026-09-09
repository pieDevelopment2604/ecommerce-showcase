"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/components/cart/CartItem";

export default function CartPage() {
  const { cart, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full flex-1 flex flex-col items-center justify-center text-center">
        <ShoppingBag className="w-20 h-20 sm:w-24 sm:h-24 text-muted-foreground opacity-20 mb-6" />
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Your cart is empty</h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-8 px-4 sm:px-0">
          Looks like you haven't added anything to your cart yet. Discover our creative collections.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-md text-sm sm:text-base"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full flex-1">
      <Link href="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 sm:mb-8 font-medium text-sm sm:text-base">
        <ArrowLeft className="w-4 h-4" /> Continue Shopping
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 sm:mb-10">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl border border-border p-4 sm:p-6 shadow-sm mb-6">
            <div className="flex justify-between items-center pb-4 border-b border-border mb-4">
              <span className="font-semibold text-foreground">Items ({cart.length})</span>
              <button 
                onClick={clearCart}
                className="text-sm font-medium text-red-500 hover:text-red-600 flex items-center gap-1"
              >
                <Trash2 className="w-4 h-4" /> Clear Cart
              </button>
            </div>
            <div className="space-y-2">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-muted/30 rounded-3xl border border-border p-6 sm:p-8 sticky top-24">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 pb-6 border-b border-border">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="font-medium text-foreground">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="flex justify-between text-xl font-bold text-foreground mb-8">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <button
              disabled
              className="w-full py-3 sm:py-4 rounded-full bg-foreground text-background font-bold text-base sm:text-lg opacity-50 cursor-not-allowed mb-4"
            >
              Checkout
            </button>
            
            <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-sm text-primary font-medium text-center">
                Checkout functionality is not available in this static showcase version.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
