import { bundles } from "@/data/products";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
  selectedBundle: number;
  onSelectBundle: (qty: number) => void;
  onOrder: () => void;
}

const BundleSection = ({ product, selectedBundle, onSelectBundle, onOrder }: Props) => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container mx-auto space-y-8 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
          Save More, Smell Amazing
        </h2>
        <p className="text-sm text-muted-foreground">Choose a bundle for {product.name}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {bundles.map((b) => {
          const active = b.quantity === selectedBundle;
          const total = product.price * b.quantity;
          const discounted = Math.round(total * (1 - b.discount / 100));
          return (
            <button
              key={b.quantity}
              onClick={() => onSelectBundle(b.quantity)}
              className={`relative rounded-xl border-2 p-5 transition-all ${
                active ? "border-primary bg-primary/5 shadow-md" : "border-border bg-card hover:border-primary/40"
              }`}
            >
              {b.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                  {b.tag}
                </span>
              )}
              <p className="font-display text-lg font-semibold text-foreground">{b.label}</p>
              {b.discount > 0 && (
                <p className="text-xs text-muted-foreground line-through">৳{total}</p>
              )}
              <p className="text-xl font-semibold text-primary">৳{discounted}</p>
            </button>
          );
        })}
      </div>

      <p className="text-sm text-primary font-medium animate-pulse-soft">
        ⏳ Limited stock — order before it's gone!
      </p>

      <button
        onClick={onOrder}
        className="bg-primary text-primary-foreground px-10 py-3.5 rounded-lg font-medium text-base hover:opacity-90 transition-opacity"
      >
        Order Now – Cash on Delivery
      </button>
    </div>
  </section>
);

export default BundleSection;
