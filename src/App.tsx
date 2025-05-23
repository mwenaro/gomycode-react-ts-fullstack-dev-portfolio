import { HeroSection } from "./components/HeroSection"

import { Companies } from "./components/Companies";
import { Projects } from "./Projects";


export default function App() {
  return (
    <div className="max-w-[1000px] mx-auto">
      {/* header section */}
      <HeroSection/>
      {/* Companies section */}
      <Companies />
      {/* Projects */}
      <Projects />
    </div>
  )
}
