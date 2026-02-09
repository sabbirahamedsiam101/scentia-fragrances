import { products, type Product } from "@/data/products";

interface Props {
  selectedId: string;
  onSelect: (p: Product) => void;
  onOrder: () => void;
}

const ProductGrid = ({ selectedId, onSelect, onOrder }: Props) => (
  <section id="products" className="py-14 md:py-20 bg-pink-light">
    <div className="container mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
          Find Your Perfect Scent
        </h2>
        <p className="text-muted-foreground">Tap a fragrance to explore its story</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((p) => {
          const active = p.id === selectedId;
          return (
            <div
              key={p.id}
              onClick={() => onSelect(p)}
              className={`relative bg-card rounded-xl border-2 transition-all cursor-pointer overflow-hidden ${
                active ? "border-primary shadow-lg" : "border-transparent shadow-sm hover:shadow-md"
              }`}
            >
              {p.popular && (
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full z-10">
                  Most Popular
                </span>
              )}
              <div className="p-4 flex flex-col items-center space-y-3">
                <img src={p.image} alt={p.name} className="w-28 h-28 object-contain" loading="lazy" />
                <div className="text-center space-y-1">
                  <h3 className="font-display text-base font-semibold text-foreground leading-tight">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">{p.label}</p>
                  <div className="flex items-center gap-2 justify-center">
                    <span className="text-primary font-semibold text-sm">৳{p.price}</span>
                    <span className="text-muted-foreground line-through text-xs">৳{p.originalPrice}</span>
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); onOrder(); }}
                  className="w-full bg-primary text-primary-foreground text-xs font-medium py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Order Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProductGrid;
