import { motion } from "framer-motion";
import { Phone, AlertCircle } from "lucide-react";

const EmergencyBanner = () => {
  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="section-padding max-w-[1400px] mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 mt-1 shrink-0" />
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-2">
                Experiencing tooth pain?
              </h3>
              <p className="text-primary-foreground/80 text-lg max-w-lg">
                Don't wait. If you're in pain, contact us for an urgent appointment. 
                We're here to help you feel better — today.
              </p>
            </div>
          </div>
          <a
            href="tel:2898916333"
            className="inline-flex items-center gap-2.5 bg-primary-foreground text-accent px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity shrink-0"
          >
            <Phone className="w-4 h-4" />
            Call Now — (289) 891-6333
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
