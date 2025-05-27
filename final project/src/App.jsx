import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Intro from "./components/Intro";
import FloatingCircle from "./components/Flotingcircle"; // ✅ Make sure to import this

const App = () => {
  return (
    <div className="container">
      <div className="page-wrapper">
        <FloatingCircle />
        
        {/* Overlay Content (both Hero and Intro are on top of background) */}
        <div className="overlay-content">
          <HeroSection />
          <Intro />
        </div>
      </div>
    </div>
  );
};

export default App;
