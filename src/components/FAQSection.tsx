import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is root canal therapy painful?",
    a: "Most patients are surprised by how comfortable the procedure is. We use advanced anesthesia techniques to ensure you feel little to no discomfort. Many patients compare it to getting a standard filling.",
  },
  {
    q: "How long does treatment take?",
    a: "Most root canal treatments are completed in a single visit lasting 60-90 minutes. Complex cases may require a follow-up appointment, but we'll always let you know what to expect beforehand.",
  },
  {
    q: "What should I expect after the procedure?",
    a: "Some mild tenderness is normal for a few days and can usually be managed with over-the-counter pain medication. We'll provide detailed aftercare instructions and are always available if you have concerns.",
  },
  {
    q: "When should I see an endodontist?",
    a: "If you're experiencing persistent tooth pain, sensitivity to hot or cold, swelling near a tooth, or have been referred by your dentist, it's time to see an endodontist. We specialize in diagnosing and treating tooth pain.",
  },
  {
    q: "Do I need a referral?",
    a: "While many patients come to us through their dentist's referral, a referral is not always necessary. You're welcome to contact our office directly to schedule a consultation.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="section-padding max-w-[900px] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground leading-tight">
            Questions we hear <span className="italic">most often.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-cream rounded-xl px-6 border border-border/50 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
