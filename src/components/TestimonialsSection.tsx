import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "The staff is friendly and overall great atmosphere.",
    author: "Patient Review",
    stars: 5,
  },
  {
    text: "Dr. Karam Ashoo has a wonderful bedside manner and quickly made me comfortable.",
    author: "Patient Review",
    stars: 5,
  },
  {
    text: "Had an excellent experience at this office.",
    author: "Patient Review",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-accent" />
      </div>

      <div className="section-padding max-w-[1400px] mx-auto relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
            Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight">
            Words that mean the <span className="italic">world to us.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Quote className="w-8 h-8 text-accent mb-6 opacity-60" />
              <p className="text-lg md:text-xl leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary-foreground/60">{t.author}</span>
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google rating */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 bg-primary-foreground/10 px-6 py-3 rounded-full">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm">4.7 out of 5 · 23 Google Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
