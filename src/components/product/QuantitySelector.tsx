import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({ quantity, onIncrease, onDecrease, min = 1, max = 99 }: QuantitySelectorProps) {
  return (
    <div className="flex items-center border border-border rounded-full bg-background overflow-hidden w-fit">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="p-2 text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="w-8 text-center font-medium text-sm">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        disabled={quantity >= max}
        className="p-2 text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
