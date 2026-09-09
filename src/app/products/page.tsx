"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { products, CATEGORIES } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">
      <div className="mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">All Products</h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
          Explore our complete collection of modern and creative gifts.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:w-1/2 lg:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-2 -mb-2 w-full md:w-auto hide-scrollbar gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
