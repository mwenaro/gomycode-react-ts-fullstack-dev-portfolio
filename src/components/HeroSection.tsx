import { Hero } from "./hero/Hero";
import { NavBar } from "./hero/NavBar";


export  function HeroSection() {
  return (
    <div className="bg-[#272727] text-white px-16 py-5 w-full min-h-screen ">
      <NavBar/>
      <Hero/>
    </div>
  )
}

