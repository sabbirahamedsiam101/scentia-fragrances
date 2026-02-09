const StickyCTA = ({ onClick }: { onClick: () => void }) => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur border-t border-border px-4 py-3 safe-area-pb">
    <button
      onClick={onClick}
      className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
    >
      Order Now – Cash on Delivery
    </button>
  </div>
);

export default StickyCTA;
