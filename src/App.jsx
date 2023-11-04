import { useState } from "react";
import "./App.css";
import TopNav from "./components/TopNav";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TestimonialSection from "./components/TestimonialSection";
import FooterSection from "./components/FooterSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopNav />
      <HeroSection />
      <AboutSection />
      <TestimonialSection />
      <FooterSection />
    </>
  );
}

export default App;
