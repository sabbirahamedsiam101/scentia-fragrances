import heroImage from "@/assets/hero-perfume.png";

const HeroSection = ({ onCTAClick }: { onCTAClick: () => void }) => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center bg-pink-light overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 py-12 md:py-0">
        <div className="flex-1 text-center md:text-left order-2 md:order-1 space-y-5">
          <p className="text-sm tracking-[0.25em] uppercase text-gold font-medium">
            Premium Fragrance Collection
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold leading-tight text-foreground">
            Your Signature Scent <br className="hidden md:block" />
            <span className="text-primary">of Confidence</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
            Discover fragrances crafted for the bold, elegant woman who leaves an unforgettable impression wherever she goes.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
            <button
              onClick={onCTAClick}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-base font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Choose Your Fragrance
            </button>
            <span className="text-sm text-muted-foreground flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-gold" />
              Cash on Delivery Available
            </span>
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2 flex justify-center">
          <img
            src={heroImage}
            alt="Premium perfume bottle"
            className="w-56 sm:w-64 md:w-80 lg:w-96 drop-shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
