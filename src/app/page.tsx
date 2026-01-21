import { Hero } from "../components/sections/hero";
import { SocialProof } from "../components/sections/social-proof";
import { Services } from "../components/sections/services";
import { Process } from "../components/sections/process";
import { CTA } from "../components/sections/cta";
import { PricingSection } from "../components/sections/pricing";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Process />
        <PricingSection />
        <CTA />
      </main>
    </>
  );
}
