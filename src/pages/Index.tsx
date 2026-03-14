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
import ChatbotWidget from "@/components/ChatbotWidget"; // <-- IMPORT HERE

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
      <ChatbotWidget /> {/* <-- ADD COMPONENT HERE */}
    </>
  );
};

export default Index;
