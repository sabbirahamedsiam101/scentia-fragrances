import { Clock, Heart, Sparkles } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Long-Lasting", desc: "8–10 hours of captivating fragrance" },
  { icon: Heart, title: "Skin-Friendly", desc: "Gentle, dermatologically tested formula" },
  { icon: Sparkles, title: "Perfect Occasions", desc: "Office mornings to starlit evenings" },
];

const BenefitsSection = () => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container mx-auto text-center space-y-10">
      <div className="max-w-xl mx-auto space-y-3">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
          Wear Your Confidence
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          A fragrance isn't just a scent — it's a statement. Our perfumes are designed to make you feel powerful, elegant, and irresistibly attractive from dawn to dusk.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {benefits.map((b) => (
          <div key={b.title} className="bg-card rounded-xl p-6 border border-border space-y-3">
            <div className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center mx-auto">
              <b.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
