import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/hero/HeroSection";

import { Companies } from "./components/Companies";
import { ProjectSection } from "./components/ProjectSection";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* header section */}
      <HeroSection />

      {/* About */}
      <AboutSection />
      {/* Companies section */}
      <Companies />
      {/* Projects */}
      <ProjectSection />
    </div>
  );
}
