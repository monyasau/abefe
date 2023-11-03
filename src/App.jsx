import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopNav from "./components/TopNav";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopNav />
      <HeroSection />
      <AboutSection />

      <div className="max-w-screen-xl mx-auto bg-white py-20">
        dhkdhkdhd didudn
      </div>

      <div className="bg-[#222222]">
        <div className="max-w-screen-xl mx-auto  text-white">
          <div className="py-32 text-center">© Olajide Sodiq 2023</div>
        </div>
      </div>
    </>
  );
}

export default App;
