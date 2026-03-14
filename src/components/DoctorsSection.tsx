import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor-portrait.jpg";

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-24 md:py-32">
      <div className="section-padding max-w-[1400px] mx-auto">
        <motion.div
          className="max-w-2xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">Meet the Doctors</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground leading-tight">
            Specialized care, <span className="italic">compassionate hearts.</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {/* Dr. Karam Ashoo */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={doctorImg}
                    alt="Dr. Karam Ashoo, DDS, FRCD(C) Endodontist"
                    className="w-full h-[500px] md:h-[600px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-sage-light/40 -z-10" />
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-cream-dark -z-10" />
              </div>
            </motion.div>

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
                DDS, FRCD(C) Endodontist
              </p>

              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-8">
                <p>
                  Dr. Ashoo has been practicing endodontics in the area since 2009. Originally from Mississauga, he attended Columbia University in New York City to attain his dental degree, returning there three years later to complete his specialty training in Endodontics.
                </p>
                <p>
                  Dr. Ashoo is committed to providing ethical, expert care with an experience that is both personalized and comfortable. He adopts the latest technology in his diagnosis and treatment, practicing endodontics at the highest standard.
                </p>
                <p>
                  During his free time, Dr. Ashoo enjoys spending time with his wife and two children. He is an avid tennis fan and enjoys cycling on long country roads.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                {["Columbia University Alumni", "Practicing since 2009", "Personalized Care"].map((c) => (
                  <span key={c} className="px-4 py-2 rounded-full bg-sage-light text-sm text-foreground">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Dr. Michael Tiedemann */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              className="lg:col-span-7 lg:pt-8 order-2 lg:order-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                Dr. Michael Tiedemann
              </h3>
              <p className="text-accent text-sm tracking-[0.15em] uppercase mb-8">
                DDS, MSc, PhD, FRCD(C) Endodontist
              </p>

              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-8">
                <p>
                  Michael was born and raised in Sudbury, Ontario. He completed his BSc and Ph.D. in chemistry at Western University, where he also earned his dental degree in 2017. Michael finished as class president and won the Endodontic Award.
                </p>
                <p>
                  For the next three years he practiced dentistry privately in Hamilton and Grimsby, Ontario, and returned to academia at the University of Toronto for his specialty training in Endodontics. 
                </p>
                <p>
                  He received his MSc from the University of Toronto and his Fellowship (Royal College of Dentists of Canada) in Endodontics in 2022.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                {["Endodontic Award Winner", "Ph.D. in Chemistry", "U of T Alumni"].map((c) => (
                  <span key={c} className="px-4 py-2 rounded-full bg-sage-light text-sm text-foreground">
                    {c}
                  </span>
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
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  {/* You can replace this image src with the second doctor's portrait once uploaded */}
                  <div className="w-full h-[500px] md:h-[600px] bg-gray-200 flex items-center justify-center text-gray-400 text-lg">
                    [Dr. Tiedemann Portrait Placeholder]
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-sage-light/40 -z-10" />
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-cream-dark -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
