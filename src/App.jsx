import { useState } from "react";
import "./App.css";
import TopNav from "./components/TopNav";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopNav />
      <HeroSection />
      <AboutSection />
<TestimonialSection/>


      <div className="bg-[#222222]">
        <div className="max-w-screen-xl mx-auto  text-white">
          <div className="py-32 text-center">© Olajide Sodiq 2023</div>
        </div>
      </div>
    </>
  );
}

export default App;
