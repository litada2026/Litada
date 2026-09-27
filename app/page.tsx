import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { CoreCapabilitiesSection } from "@/components/sections/core-capabilities-section";
import { PackagesSection } from "@/components/sections/packages-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { AcademySection } from "@/components/sections/academy-section";
import { AudienceSection } from "@/components/sections/audience-section";
import { HowWeWorkSection } from "@/components/sections/how-we-work-section";
import { LeadershipSection } from "@/components/sections/leadership-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <CoreCapabilitiesSection />
        <PackagesSection />
        <SolutionsSection />
        <AcademySection />
        <AudienceSection />
        <HowWeWorkSection />
        <LeadershipSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
