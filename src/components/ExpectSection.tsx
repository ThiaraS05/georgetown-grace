import { motion } from "framer-motion";
import { Coffee, ShieldPlus, HeartPulse, Stethoscope } from "lucide-react";

const steps = [
  {
    icon: Coffee,
    num: "01",
    title: "Preparation & Medications",
    desc: "Please eat a full breakfast or lunch prior to your procedure. Taking 400mg of Ibuprofen 1 hour before can help reduce inflammation. Continue all regular medications unless advised otherwise.",
  },
  {
    icon: ShieldPlus,
    num: "02",
    title: "The Procedure",
    desc: "Root canals are performed using local anesthesia. Because you'll be comfortable and awake, there are typically no restrictions after the procedure concerning driving or returning to work.",
  },
  {
    icon: HeartPulse,
    num: "03",
    title: "Immediately After",
    desc: "While anaesthetized ('frozen'), avoid drinking hot liquids or chewing to prevent biting yourself. You may experience some discomfort or mild swelling for 1-2 weeks as your tooth heals.",
  },
  {
    icon: Stethoscope,
    num: "04",
    title: "Post-Operative Care",
    desc: "A temporary restoration will be placed in your tooth. You must return to your regular dentist to have a permanent filling or crown placed. Avoid heavy chewing on the tooth until then.",
  },
];

const ExpectSection = () => {
  return (
    <section id="expect" className="py-24 md:py-32">
      <div className="section-padding max-w-[1400px] mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
            What to Expect
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground leading-tight">
            Clear guidelines for a <span className="italic">smooth recovery.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6">
            We want you to feel fully prepared for your appointment. Here is what your treatment and recovery timeline will look like.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  className={`md:grid md:grid-cols-2 md:gap-16 items-center ${
                    i > 0 ? "md:mt-16" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className={`${isEven ? "" : "md:order-2"}`}>
                    <div className={`${isEven ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                      <span className="font-serif text-5xl text-accent/20">{step.num}</span>
                      <div className={`flex items-center gap-3 mt-2 mb-3 ${isEven ? 'md:justify-end' : ''}`}>
                        <div className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="font-serif text-2xl text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed max-w-md ml-auto mr-0">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Dot on timeline */}
                  <div className={`hidden md:block ${isEven ? "md:order-2" : ""}`}>
                    <div className={`relative ${isEven ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background ${
                          isEven ? "-left-2" : "-right-2"
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectSection;
