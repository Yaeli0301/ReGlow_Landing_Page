import { BrandBar } from "@/components/BrandBar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { SocialProof } from "@/components/SocialProof";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <BrandBar />
      <main>
        {/* 1. Hook */}
        <Hero />
        {/* 2. Pain */}
        <Problem />
        {/* 3. Mechanism */}
        <Solution />
        {/* 4. How */}
        <HowItWorks />
        {/* 5. Value */}
        <Features />
        {/* 6. Proof */}
        <SocialProof />
        {/* 7. Decision */}
        <Pricing />
        {/* 8. Close */}
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
