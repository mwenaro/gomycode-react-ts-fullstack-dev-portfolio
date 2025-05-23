import { Hero } from "./Hero";
import { NavBar } from "../NavBar";


export  function HeroSection() {
  return (
    <div className="bg-[#272727] text-white px-0 md:px-16 py-5 w-full min-h-screen ">
      <NavBar/>
      <Hero/>
    </div>
  )
}

