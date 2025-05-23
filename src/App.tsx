import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection"

import { Companies } from "./components/Companies";
import { Projects } from "./Projects";


export default function App() {
  return (
    <div>

      {/* About */}
      <AboutSection />
      {/* header section */}
      <HeroSection />
      {/* Companies section */}
      <Companies />
      {/* Projects */}
      <Projects />
    </div>
  )
}
