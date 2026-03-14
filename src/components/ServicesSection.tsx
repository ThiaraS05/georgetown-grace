import { motion } from "framer-motion";
import officeImg from "@/assets/office-interior.jpg";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div className="section-padding max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
              Root Canal Therapy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground leading-tight mb-8">
              Understanding the procedure,{" "}
              <span className="italic">eliminating the fear.</span>
            </h2>

            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Endodontics, or root canal therapy, is often the most feared and misunderstood of all dental procedures. In order to understand treatment, it helps to understand the anatomy of a tooth. 
              </p>
              <p>
                Your tooth consists of the crown (the part you can see) and the root (beneath the gum, surrounded by bone). Inside each root is a canal containing pulp—nerves, blood vessels, and soft tissue. 
              </p>
              <p>
                Root canal treatment is necessary when the pulp becomes inflamed or infected due to decay, deep restorations, fractures, or trauma. If left untreated, it can cause pain or lead to an abscess. To preserve the tooth, we completely or partially remove the diseased pulpal tissue.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                { title: "Sensitivity", desc: "Prolonged sensitivity to heat and cold." },
                { title: "Swelling & Pain", desc: "Swelling, pain, or tenderness of the tooth, gums, or jaw." },
                { title: "Hidden Symptoms", desc: "Sometimes there are no symptoms, but signs appear on an X-ray." },
                { title: "Re-treatment & Surgery", desc: "We also handle re-treatment and root end surgeries (apicoectomy)." },
              ].map((p) => (
                <div key={p.title} className="bg-background rounded-xl p-5 border border-border/50">
                  <h4 className="font-serif text-lg text-foreground mb-1">{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-foreground/5">
              <img
                src={officeImg}
                alt="Georgetown Endodontics treatment room with modern equipment"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
