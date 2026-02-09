import { useState, useRef } from "react";
import { products } from "@/data/products";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductGrid from "@/components/ProductGrid";
import ProductDetails from "@/components/ProductDetails";
import TestimonialsSection from "@/components/TestimonialsSection";
import BundleSection from "@/components/BundleSection";
import CheckoutSection from "@/components/CheckoutSection";
import DeliverySection from "@/components/DeliverySection";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [bundleQty, setBundleQty] = useState(1);
  const checkoutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const scrollToCheckout = () => {
    checkoutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProductSelect = (product: typeof products[0]) => {
    setSelectedProduct(product);
    detailsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <HeroSection onCTAClick={scrollToProducts} />
      <BenefitsSection />
      <div ref={productsRef}>
        <ProductGrid
          selectedId={selectedProduct.id}
          onSelect={handleProductSelect}
          onOrder={scrollToCheckout}
        />
      </div>
      <div ref={detailsRef}>
        <ProductDetails product={selectedProduct} onOrder={scrollToCheckout} />
      </div>
      <TestimonialsSection />
      <BundleSection
        product={selectedProduct}
        selectedBundle={bundleQty}
        onSelectBundle={setBundleQty}
        onOrder={scrollToCheckout}
      />
      <div ref={checkoutRef}>
        <CheckoutSection product={selectedProduct} bundleQty={bundleQty} />
      </div>
      <DeliverySection />

      {/* Footer */}
      <footer className="py-8 bg-foreground text-center">
        <p className="text-xs text-background/60">
          © 2026 Scentia Fragrances. All rights reserved. Dhaka, Bangladesh.
        </p>
      </footer>

      <StickyCTA onClick={scrollToCheckout} />
    </div>
  );
};

export default Index;
