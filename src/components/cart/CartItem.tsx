"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { CartItem as CartItemType } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";
import { QuantitySelector } from "../product/QuantitySelector";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b border-border">
      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <Link href={`/products/${item.id}`} className="font-medium text-foreground hover:text-primary truncate transition-colors">
            {item.name}
          </Link>
          <button
            onClick={() => removeFromCart(item.id)}
            className="p-1 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Remove item"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="text-sm text-muted-foreground mb-2">{item.category}</div>
        
        <div className="flex items-center justify-between mt-auto">
          <QuantitySelector
            quantity={item.quantity}
            onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
            onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
          />
          <div className="font-semibold text-foreground">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
