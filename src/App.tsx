import { Companies } from "./components/Companies";
import { Projects } from "./Projects";


export default function App() {
  return (
    <div className="max-w-[1000px] mx-auto">
      {/* Companies section */}
      <Companies />
      {/* Projects */}
      <Projects />
    </div>
  )
}
