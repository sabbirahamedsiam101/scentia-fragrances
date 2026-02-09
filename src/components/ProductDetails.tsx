import type { Product } from "@/data/products";

const ProductDetails = ({ product, onOrder }: { product: Product; onOrder: () => void }) => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-center">
        <div className="flex-1 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-52 md:w-72 drop-shadow-xl animate-fade-in"
            key={product.id}
          />
        </div>
        <div className="flex-1 space-y-5 text-center md:text-left animate-fade-in" key={product.id + "-info"}>
          <div>
            <p className="text-sm text-gold font-medium tracking-wide uppercase">{product.label}</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mt-1">{product.name}</h2>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm max-w-sm mx-auto md:mx-0">
            <Detail label="Longevity" value={product.longevity} />
            <Detail label="Size" value={product.size} />
            <Detail label="Best For" value={product.occasion} />
            <Detail label="Stock" value={`Only ${product.stock} left`} highlight />
          </div>

          <div className="space-y-2">
            <h4 className="font-display text-lg font-semibold text-foreground">Fragrance Notes</h4>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <NoteTag label="Top" value={product.notes.top} />
              <NoteTag label="Middle" value={product.notes.middle} />
              <NoteTag label="Base" value={product.notes.base} />
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <span className="text-2xl font-semibold text-primary">৳{product.price}</span>
            <span className="text-muted-foreground line-through">৳{product.originalPrice}</span>
            <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">
              Save ৳{product.originalPrice - product.price}
            </span>
          </div>

          <button
            onClick={onOrder}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Order Now – Cash on Delivery
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Detail = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
  <div className="bg-secondary rounded-lg p-3">
    <p className="text-xs text-muted-foreground">{label}</p>
    <p className={`text-sm font-medium ${highlight ? "text-primary" : "text-foreground"}`}>{value}</p>
  </div>
);

const NoteTag = ({ label, value }: { label: string; value: string }) => (
  <span className="bg-pink-light text-foreground text-xs px-3 py-1.5 rounded-full border border-border">
    <strong>{label}:</strong> {value}
  </span>
);

export default ProductDetails;
