import { AboutSection } from "./components/AboutSection";
import { CompanySection } from "./components/company/CompanySection";
import { HeroSection } from "./components/hero/HeroSection";

import { ProjectSection } from "./components/ProjectSection";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto p-3">
      {/* header section */}
      <HeroSection />

      {/* About */}
      <AboutSection />
      {/* Companies section */}
      <CompanySection />
      {/* Projects */}
      <ProjectSection />
    </div>
  );
}
