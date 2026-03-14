import { motion } from "framer-motion";
import { Heart, Shield, Smile, MapPin, Stethoscope, Users } from "lucide-react";

const reasons = [
  { icon: Stethoscope, title: "Specialized Expertise", desc: "Focused exclusively on endodontic treatment — root canals are all we do." },
  { icon: Heart, title: "Gentle Approach", desc: "Every procedure is designed around your comfort, from start to finish." },
  { icon: Smile, title: "Warm Atmosphere", desc: "Our office feels more like a retreat than a clinic — calm, clean, and welcoming." },
  { icon: Shield, title: "Experienced Doctors", desc: "Advanced training and years of experience in saving teeth and relieving pain." },
  { icon: Users, title: "Patient-First Care", desc: "We listen, we explain, and we never rush. Your well-being comes first." },
  { icon: MapPin, title: "Convenient Location", desc: "Easily accessible on Guelph Street in the heart of Georgetown, Ontario." },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="section-padding max-w-[1400px] mx-auto">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground leading-tight">
            A different kind of <span className="italic">dental experience.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="group bg-background rounded-2xl p-7 md:p-8 border border-border/50 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-primary-foreground transition-colors duration-300">
                <r.icon className="w-5 h-5 text-accent group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
