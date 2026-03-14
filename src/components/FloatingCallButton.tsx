import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:2898916333"
      className="fixed bottom-6 right-6 z-50 lg:hidden w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-xl shadow-foreground/20 hover:scale-105 active:scale-95 transition-transform"
      aria-label="Call Georgetown Endodontics"
    >
      <Phone className="w-5 h-5" />
    </a>
  );
};

export default FloatingCallButton;
