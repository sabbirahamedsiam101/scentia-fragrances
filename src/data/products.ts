import perfumeRose from "@/assets/perfume-rose.png";
import perfumeNoir from "@/assets/perfume-noir.png";
import perfumeDream from "@/assets/perfume-dream.png";
import perfumeGold from "@/assets/perfume-gold.png";

export interface Product {
  id: string;
  name: string;
  label: string;
  price: number;
  originalPrice: number;
  image: string;
  popular?: boolean;
  stock: number;
  size: string;
  longevity: string;
  occasion: string;
  notes: { top: string; middle: string; base: string };
}

export const products: Product[] = [
  {
    id: "rose-elegance",
    name: "Rose Élégance",
    label: "Soft Floral – Daily Elegance",
    price: 1450,
    originalPrice: 1950,
    image: perfumeRose,
    popular: true,
    stock: 17,
    size: "50ml",
    longevity: "8–10 hours",
    occasion: "Office, Brunches, Everyday Glam",
    notes: { top: "Pink Pepper, Bergamot", middle: "Bulgarian Rose, Peony", base: "White Musk, Sandalwood" },
  },
  {
    id: "midnight-noir",
    name: "Midnight Noir",
    label: "Bold & Romantic – Evening Allure",
    price: 1650,
    originalPrice: 2200,
    image: perfumeNoir,
    stock: 12,
    size: "50ml",
    longevity: "10–12 hours",
    occasion: "Date Night, Weddings, Special Events",
    notes: { top: "Black Currant, Saffron", middle: "Turkish Rose, Oud", base: "Amber, Vanilla, Musk" },
  },
  {
    id: "lavender-dream",
    name: "Lavender Dream",
    label: "Calm & Dreamy – Soft Sophistication",
    price: 1350,
    originalPrice: 1800,
    image: perfumeDream,
    stock: 23,
    size: "50ml",
    longevity: "8–9 hours",
    occasion: "Casual Outings, Office, Relaxation",
    notes: { top: "Lavender, Lemon Zest", middle: "Iris, Jasmine", base: "Cedarwood, Tonka Bean" },
  },
  {
    id: "golden-aura",
    name: "Golden Aura",
    label: "Warm & Luxurious – Signature Confidence",
    price: 1750,
    originalPrice: 2400,
    image: perfumeGold,
    stock: 9,
    size: "50ml",
    longevity: "10–12 hours",
    occasion: "Grand Events, Dinner Parties, Celebrations",
    notes: { top: "Mandarin, Cinnamon", middle: "Tuberose, Ylang-Ylang", base: "Amber, Patchouli, Gold Musk" },
  },
];

export const bundles = [
  { quantity: 1, label: "Buy 1", discount: 0 },
  { quantity: 2, label: "Buy 2", discount: 10, tag: "Save 10%" },
  { quantity: 3, label: "Buy 3", discount: 18, tag: "Best Value" },
];
