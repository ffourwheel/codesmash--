import { HeroSection } from "@/components/sections/HeroSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { MediaGallery } from "@/components/sections/MediaGallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <MediaGallery />
      {/* 
        Other components from the original HTML like Contact, Services, 
        and Testimonials can be added here as they are built.
      */}
    </>
  );
}
