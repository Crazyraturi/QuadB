import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Intro from "./components/Intro";
import FloatingCircle from "./components/Flotingcircle"; 
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div className="container">
      <div className="page-wrapper">
        <FloatingCircle />
        
       
        <div className="overlay-content">
          <HeroSection />
          <Intro />
          <Portfolio/>
        </div>
      </div>
    </div>
  );
};

export default App;
