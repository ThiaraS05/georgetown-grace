//Here are the updated files to reduce the blank space in the hero section, move the "Meet the Doctors" section right after it, and restyle the testimonials to look like imported Google reviews.

1. src/pages/Index.tsx
//This update reorders the components so DoctorsSection appears immediately after HeroSection.

TypeScript
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import DoctorsSection from "@/components/DoctorsSection";
import ServicesSection from "@/components/ServicesSection";
import ExpectSection from "@/components/ExpectSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ReferringSection from "@/components/ReferringSection";
import EmergencyBanner from "@/components/EmergencyBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DoctorsSection />
        <WhyChooseSection />
        <ServicesSection />
        <ExpectSection />
        <TestimonialsSection />
        <EmergencyBanner />
        <FAQSection />
        <ReferringSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
};

export default Index;
2. src/components/HeroSection.tsx
This update removes the min-h-screen property and reduces the vertical padding to remove excess blank space on the landing page.

TypeScript
import { motion } from "framer-motion";
import { Phone, CalendarDays, Star } from "lucide-react";
import heroImage from "@/assets/hero-office.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex items-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-cream" />

      <div className="relative z-10 w-full section-padding max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Copy side */}
          <motion.div
            className="lg:col-span-6 xl:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-sage-light px-4 py-2 rounded-full mb-8">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm text-foreground font-medium">4.7 Stars</span>
              <span className="text-sm text-muted-foreground">· 23 Google Reviews</span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl leading-[1.1] tracking-tight text-foreground mb-6 text-balance">
              Expert root canal care,{" "}
              <span className="italic text-accent">gentle hands.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Georgetown Endodontics provides specialized root canal therapy in a calm,
              caring environment. We're here to relieve your pain — and your worry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
              >
                <CalendarDays className="w-4.5 h-4.5" />
                Request an Appointment
              </a>
              <a
                href="tel:2898916333"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-foreground/15 text-foreground px-7 py-3.5 rounded-full text-base font-medium hover:bg-foreground/5 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12 pt-8 border-t border-border">
              {["Endodontic Specialist", "Patient-First Care", "Georgetown, ON"].map(
                (item) => (
                  <span key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Image side — offset composition */}
          <motion.div
            className="lg:col-span-6 xl:col-span-7 relative"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative mt-8 lg:mt-0">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-foreground/5">
                <img
                  src={heroImage}
                  alt="Modern Georgetown Endodontics office interior with warm, calming atmosphere"
                  className="w-full h-[400px] md:h-[520px] object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating card overlay */}
              <motion.div
                className="absolute -bottom-6 -left-6 md:-left-10 bg-background/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl shadow-foreground/5 border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <p className="text-sm font-medium text-foreground mb-1">Specialized Care</p>
                <p className="text-xs text-muted-foreground max-w-[180px]">
                  Advanced endodontic treatment by experienced specialists
                </p>
              </motion.div>

              {/* Accent shape */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-sage-light/60 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
