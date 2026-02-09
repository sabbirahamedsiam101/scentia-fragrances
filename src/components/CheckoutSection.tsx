import { useState, useMemo } from "react";
import type { Product } from "@/data/products";
import { bundles } from "@/data/products";
import { Minus, Plus, ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  product: Product;
  bundleQty: number;
}

const DELIVERY_CHARGE = 80;
const AREAS = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal", "Rangpur", "Mymensingh"];

const CheckoutSection = ({ product, bundleQty }: Props) => {
  const [quantity, setQuantity] = useState(bundleQty);
  const [showSummary, setShowSummary] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", area: "" });
  const [submitted, setSubmitted] = useState(false);

  const bundle = bundles.find((b) => b.quantity === bundleQty) || bundles[0];
  const unitPrice = Math.round(product.price * (1 - bundle.discount / 100));
  const subtotal = unitPrice * quantity;
  const total = subtotal + DELIVERY_CHARGE;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim() || !form.area) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="checkout" className="py-14 md:py-20 bg-pink-light">
        <div className="container mx-auto text-center space-y-4 max-w-md animate-fade-in">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
            <span className="text-3xl">✓</span>
          </div>
          <h2 className="text-2xl font-display font-semibold text-foreground">Order Placed Successfully!</h2>
          <p className="text-muted-foreground text-sm">
            Thank you, {form.name}! We'll contact you at {form.phone} to confirm your order. Expected delivery in 2–5 business days.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="checkout" className="py-14 md:py-20 bg-pink-light">
      <div className="container mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-center text-foreground">
          Complete Your Order
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Order Summary */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <button
              onClick={() => setShowSummary(!showSummary)}
              className="w-full p-5 flex items-center justify-between md:pointer-events-none"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">Order Summary</h3>
              <span className="md:hidden text-muted-foreground">
                {showSummary ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </span>
            </button>
            <div className={`px-5 pb-5 space-y-4 ${showSummary ? "block" : "hidden md:block"}`}>
              <div className="flex items-center gap-3">
                <img src={product.image} alt={product.name} className="w-14 h-14 object-contain" />
                <div className="flex-1">
                  <p className="font-medium text-foreground text-sm">{product.name}</p>
                  <p className="text-xs text-muted-foreground">{product.label}</p>
                </div>
                <p className="text-sm font-medium text-foreground">৳{unitPrice}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Quantity</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center font-medium text-foreground text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="border-t border-border pt-3 space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span><span>৳{subtotal}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery</span><span>৳{DELIVERY_CHARGE}</span>
                </div>
                <div className="flex justify-between font-semibold text-foreground text-base pt-1 border-t border-border">
                  <span>Total</span><span className="text-primary">৳{total}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-5 space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Delivery Details</h3>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="tel"
                placeholder="Phone Number (e.g., 01XXXXXXXXX)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                maxLength={15}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <textarea
                placeholder="Full Address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                required
                maxLength={300}
                rows={2}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              <select
                value={form.area}
                onChange={(e) => setForm({ ...form, area: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select Area</option>
                {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>

            <div className="bg-secondary rounded-lg p-3 text-xs text-muted-foreground text-center">
              💵 Cash on Delivery — Pay when you receive your order
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-medium text-base hover:opacity-90 transition-opacity"
            >
              Place Order – ৳{total}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
