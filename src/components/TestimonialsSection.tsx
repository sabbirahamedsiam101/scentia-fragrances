import { Star, ShieldCheck, Truck, Banknote } from "lucide-react";

const testimonials = [
  { name: "Fatima Rahman", text: "Rose Élégance is my everyday signature. Compliments everywhere I go!", rating: 5 },
  { name: "Nusrat Jahan", text: "Midnight Noir lasted through my entire wedding reception. Absolutely stunning!", rating: 5 },
  { name: "Taslima Akter", text: "The packaging is gorgeous and the scent is even better. My husband loves it.", rating: 5 },
  { name: "Sabrina Islam", text: "Golden Aura makes me feel like royalty. Worth every taka!", rating: 5 },
  { name: "Maliha Chowdhury", text: "Fast delivery and authentic quality. I've ordered twice already!", rating: 5 },
];

const trustBadges = [
  { icon: ShieldCheck, text: "100% Authentic" },
  { icon: Banknote, text: "Cash on Delivery" },
  { icon: Truck, text: "Fast 2–5 Day Delivery" },
];

const TestimonialsSection = () => (
  <section className="py-14 md:py-20 bg-pink-light">
    <div className="container mx-auto space-y-10">
      <h2 className="text-3xl md:text-4xl font-display font-semibold text-center text-foreground">
        Loved by Women Across Bangladesh
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible md:mx-0 md:px-0">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="min-w-[260px] md:min-w-0 snap-start bg-card rounded-xl p-5 border border-border space-y-3 flex-shrink-0"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed">"{t.text}"</p>
            <p className="text-xs font-medium text-muted-foreground">— {t.name}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {trustBadges.map((b) => (
          <div key={b.text} className="flex items-center gap-2 text-sm text-foreground font-medium">
            <b.icon className="w-5 h-5 text-gold" />
            {b.text}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
