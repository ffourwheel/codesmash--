import HeroSection from "@/components/home/HeroSection";
import VisionMission from "@/components/home/VisionMission";
import Capabilities from "@/components/home/Capabilities";
import StatsSection from "@/components/home/StatsSection";
import ClientLogos from "@/components/home/ClientLogos";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import ContactSection from "@/components/home/ContactSection";
import CareersSection from "@/components/home/CareersSection";

import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise });
  const homepage = await payload.findGlobal({ slug: "homepage" });
  const portfoliosRes = await payload.find({
    collection: "portfolios",
    limit: 6,
  });

  return (
    <>
      <HeroSection data={homepage.hero} />
      <VisionMission />
      <Capabilities />
      <StatsSection />
      <ClientLogos />
      <ProjectShowcase portfolios={portfoliosRes.docs} />
      <ContactSection />
      <CareersSection />
    </>
  );
}
