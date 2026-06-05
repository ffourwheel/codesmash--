// import Navbar from .'/components/layout/Navbar'
// import Footer from .'/components/layout/Footer'
// import HeroSection from .'/components/sections/HeroSection'
// import WhatWeDoSection from './@components/sections/WhatWeDoSection'
// import VisionMissionSection from .'/components/sections/VisionMissionSection'
// import CapabilitiesSection from .'/components/sections/CapabilitiesSection'
// import ClientsSection from .'/components/sections/ClientsSection'
// import NewsSection from .'/components/sections/NewsSection'
// import ContactSection from .'/components/sections/ContactSection'
// import CareersSection from .'/components/sections/CareersSection'

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import HeroSection from "./components/sections/HeroSection"
import WhatWeDoSection from "./components/sections/WhatWeDoSection"
import VisionMissionSection from "./components/sections/VisionMissionSection"
import CapabilitiesSection from "./components/sections/CapabilitiesSection"
import ClientsSection from "./components/sections/ClientsSection"
import NewsSection from "./components/sections/NewsSection"
import ContactSection from "./components/sections/ContactSection"
import CareersSection from "./components/sections/CareersSection"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <VisionMissionSection />
        <CapabilitiesSection />
        <ClientsSection />
        <NewsSection />
        <ContactSection />
        <CareersSection />
      </main>
      <Footer />
    </>
  )
}
