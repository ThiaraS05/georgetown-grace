import { motion } from "framer-motion";
import officeImg from "@/assets/office-interior.jpg";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div className="section-padding max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
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
              Saving your natural tooth,{" "}
              <span className="italic">relieving your pain.</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                A root canal isn't something to fear — it's a solution. When the soft tissue
                inside your tooth becomes infected or inflamed, root canal therapy removes the
                source of pain and preserves the tooth you might otherwise lose.
              </p>
              <p>
                You may need a root canal if you're experiencing persistent tooth pain, sensitivity
                to hot or cold, swelling, or tenderness. These symptoms often mean the nerve inside
                your tooth needs attention.
              </p>
              <p>
                At Georgetown Endodontics, we use advanced techniques and modern technology to
                make treatment as comfortable and efficient as possible. Most patients tell us
                it felt easier than they expected.
              </p>
            </div>

            {/* Key points */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {[
                { title: "Pain Relief", desc: "We eliminate the source of discomfort" },
                { title: "Save Your Tooth", desc: "Preserve your natural smile" },
                { title: "Modern Techniques", desc: "Advanced technology for precision" },
                { title: "Comfortable Care", desc: "Gentle approach from start to finish" },
              ].map((p) => (
                <div key={p.title} className="bg-background rounded-xl p-5 border border-border/50">
                  <h4 className="font-serif text-lg text-foreground mb-1">{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
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
