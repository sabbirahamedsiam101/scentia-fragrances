import { Truck, Banknote, RefreshCw } from "lucide-react";

const guarantees = [
  { icon: Truck, title: "2–5 Day Delivery", desc: "Fast delivery anywhere inside Bangladesh" },
  { icon: Banknote, title: "Cash on Delivery", desc: "No online payment needed — pay when it arrives" },
  { icon: RefreshCw, title: "Easy Replacement", desc: "Hassle-free replacement if you're not satisfied" },
];

const DeliverySection = () => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container mx-auto text-center space-y-8">
      <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
        We've Got You Covered
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {guarantees.map((g) => (
          <div key={g.title} className="space-y-3">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
              <g.icon className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{g.title}</h3>
            <p className="text-sm text-muted-foreground">{g.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliverySection;
