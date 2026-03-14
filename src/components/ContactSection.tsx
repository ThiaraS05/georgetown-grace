import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { useState, FormEvent } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-padding max-w-[1400px] mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm tracking-[0.2em] uppercase text-accent mb-4 block">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground leading-tight">
            We'd love to <span className="italic">hear from you.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">92 Guelph St<br />Georgetown, ON L7G 3Z9</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-foreground mb-1">Phone</h4>
                <a href="tel:2898916333" className="text-accent hover:underline">
                  (289) 891-6333
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-foreground mb-1">Office Hours</h4>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                  <p>Saturday: By Appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
              <iframe
                title="Georgetown Endodontics location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.5!2d-79.925!3d43.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s92+Guelph+St+Georgetown+ON!5e0!3m2!1sen!2sca!4v1234567890"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-sage-light rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                  <Send className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">Thank you!</h3>
                <p className="text-muted-foreground">
                  We've received your request and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-cream rounded-2xl p-8 md:p-10 border border-border/50 space-y-5"
              >
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  Request an Appointment
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill out the form below and we'll get back to you promptly.
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Reason for Visit
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30">
                    <option>Root Canal Therapy</option>
                    <option>Emergency / Tooth Pain</option>
                    <option>Consultation</option>
                    <option>Referred by Dentist</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Submit Request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
