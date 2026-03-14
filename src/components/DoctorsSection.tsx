import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor-portrait.jpg";

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-24 md:py-32">
      <div className="section-padding max-w-[1400px] mx-auto">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">Meet the Doctors</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground leading-tight">
            Skilled hands, <span className="italic">compassionate hearts.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Portrait */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={doctorImg}
                  alt="Dr. Karam Ashoo, endodontist at Georgetown Endodontics"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-sage-light/40 -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-cream-dark -z-10" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="lg:col-span-7 lg:pt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              Dr. Karam Ashoo
            </h3>
            <p className="text-accent text-sm tracking-[0.15em] uppercase mb-8">
              Endodontist · Root Canal Specialist
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Dr. Ashoo brings years of specialized endodontic training and a genuine commitment
              to patient comfort. His philosophy is simple: no one should dread the dentist.
              With a gentle hand and clear communication, he ensures every patient feels
              informed, respected, and at ease throughout their treatment.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              From complex root canal procedures to emergency care, Dr. Ashoo combines
              advanced techniques with a calm, reassuring approach that patients consistently
              praise.
            </p>

            {/* Quote callout */}
            <div className="bg-cream rounded-2xl p-8 border-l-4 border-accent">
              <p className="text-foreground text-lg italic leading-relaxed mb-3">
                "Dr. Karam Ashoo has a wonderful bedside manner and quickly made me comfortable."
              </p>
              <span className="text-sm text-muted-foreground">— Google Review</span>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["Board Certified", "Advanced Endodontics", "Emergency Care", "Microsurgery"].map(
                (c) => (
                  <span
                    key={c}
                    className="px-4 py-2 rounded-full bg-sage-light text-sm text-foreground"
                  >
                    {c}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
