import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ReferringSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="section-padding max-w-[1400px] mx-auto">
        <motion.div
          className="bg-background rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border border-border/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-xl">
            <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
              For Referring Dentists
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              A trusted partner in your patients' care.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We make the referral process seamless. Your patients receive compassionate,
              expert endodontic treatment, and you receive timely updates on their care.
              Together, we ensure the best outcomes.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity shrink-0"
          >
            Refer a Patient
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferringSection;
