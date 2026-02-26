import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Process } from "@/components/sections/process";
import { AboutPreview } from "@/components/sections/about-preview";
import { ForProfessionals } from "@/components/sections/for-professionals";
import { CTA } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";

export default function HomePage() {
  return (
    <>
      <JsonLd type="organization" />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Process />
      <AboutPreview />
      <ForProfessionals />
      <CTA />
    </>
  );
}
