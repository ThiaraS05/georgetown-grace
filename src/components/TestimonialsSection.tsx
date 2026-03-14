import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "The staff is friendly and overall great atmosphere.",
    author: "Sarah M.",
    date: "2 months ago",
    stars: 5,
  },
  {
    text: "Dr. Karam Ashoo has a wonderful bedside manner and quickly made me comfortable.",
    author: "John D.",
    date: "4 months ago",
    stars: 5,
  },
  {
    text: "Had an excellent experience at this office. Highly recommend for any endodontic needs.",
    author: "Emily R.",
    date: "1 year ago",
    stars: 5,
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white text-foreground relative overflow-hidden">
      <div className="section-padding max-w-[1400px] mx-auto relative z-10">
        
        {/* Google Reviews Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <GoogleLogo />
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              Google Reviews
            </h2>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-foreground mb-2">
            <span className="text-3xl font-bold">4.7</span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
          </div>
          <span className="text-sm text-muted-foreground">Based on 23 reviews</span>
        </motion.div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 rounded-2xl p-7 flex flex-col transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{t.author}</div>
                  <div className="text-xs text-gray-500">{t.date}</div>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed text-sm flex-1">
                "{t.text}"
              </p>
              
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-2">
                 <GoogleLogo />
                 <span className="text-xs text-gray-500 font-medium">Posted on Google</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
