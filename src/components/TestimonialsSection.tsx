import { Star, ShieldCheck, Truck, Banknote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll carousel
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  // Scroll to active testimonial on mobile
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollElement = scrollContainerRef.current.querySelector(`[data-index="${activeIndex}"]`);
      if (scrollElement) {
        scrollElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      }
    }
  }, [activeIndex]);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoplay(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoplay(false);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoplay(false);
  };

  return (
    <section className="py-14 md:py-20 bg-pink-light">
      <div className="container mx-auto space-y-10">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center text-foreground">
            Loved by Women Across Bangladesh
          </h2>
          <p className="text-center text-sm text-muted-foreground">Join thousands of satisfied customers</p>
        </div>

        {/* Mobile & Tablet Carousel */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible md:mx-0 md:px-0 scroll-smooth [scrollbar-width:none] [-webkit-scrollbar:none] [-ms-overflow-style:none]"
          >
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                data-index={idx}
                className={`min-w-[calc(100%-2rem)] md:min-w-0 snap-start bg-card rounded-xl p-5 border border-border space-y-3  transition-all duration-300 hover:shadow-lg hover:border-gold/30 ${
                  idx === activeIndex ? "md:ring-2 md:ring-gold/50 md:shadow-lg" : "md:opacity-70"
                }`}
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

          {/* Navigation Buttons - Hidden on Mobile, Visible on Desktop */}
          <div className="hidden md:flex absolute -left-16 -right-16 top-1/2 -translate-y-1/2 justify-between pointer-events-none">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-gold text-white hover:bg-gold/90 transition-all duration-200 hover:scale-110 pointer-events-auto shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gold text-white hover:bg-gold/90 transition-all duration-200 hover:scale-110 pointer-events-auto shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === activeIndex
                  ? "bg-gold w-3 h-3"
                  : "bg-gold/30 w-2 h-2 hover:bg-gold/50"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
              aria-current={idx === activeIndex ? "true" : "false"}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-4">
          {trustBadges.map((b) => (
            <div
              key={b.text}
              className="flex items-center gap-2 text-sm text-foreground font-medium transition-transform duration-200 hover:scale-105"
            >
              <div className="p-2 bg-gold/10 rounded-lg">
                <b.icon className="w-5 h-5 text-gold" />
              </div>
              {b.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
