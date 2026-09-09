export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const CATEGORIES = ["All", "T-Shirts", "Mugs", "Accessories", "Gifts"];

export const products: Product[] = [
  {
    id: "p1",
    name: "Classic Minimalist T-Shirt",
    description: "A clean, bright white t-shirt made from 100% organic cotton. Perfect for any casual outfit.",
    price: 29.99,
    category: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p2",
    name: "Artisan Ceramic Mug",
    description: "Handcrafted ceramic mug with a beautiful speckled glaze. Holds 12oz of your favorite beverage.",
    price: 18.50,
    category: "Mugs",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p3",
    name: "Canvas Tote Bag",
    description: "Durable canvas tote bag featuring an exclusive 'Jay art work' design. Spacious and eco-friendly.",
    price: 22.00,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1597559132517-5755106e5792?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p4",
    name: "Abstract Art Print",
    description: "A vibrant abstract print to brighten up any room. Printed on high-quality archival paper.",
    price: 45.00,
    category: "Gifts",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p5",
    name: "Geometric Enamel Pin",
    description: "A small geometric enamel pin to add a touch of art to your jacket or backpack.",
    price: 12.00,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1611078716755-6b541334c9c1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p6",
    name: "Vintage Graphic Tee",
    description: "Soft, worn-in feel graphic t-shirt with a retro art print.",
    price: 34.00,
    category: "T-Shirts",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p7",
    name: "Matte Black Coffee Mug",
    description: "Sleek matte black mug for the modern minimalist.",
    price: 16.00,
    category: "Mugs",
    image: "https://images.unsplash.com/photo-1481833758786-928e4695b169?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "p8",
    name: "Scented Soy Candle",
    description: "Hand-poured soy candle with a calming lavender and bergamot scent.",
    price: 24.00,
    category: "Gifts",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
  }
];
