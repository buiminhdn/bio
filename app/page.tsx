import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { TrackingHighlightSection } from "@/components/landing/TrackingHighlightSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { CtaBannerSection } from "@/components/landing/CtaBannerSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <TrackingHighlightSection />
        <FaqSection />
        <CtaBannerSection />
      </main>
      <Footer />
    </>
  );
}
