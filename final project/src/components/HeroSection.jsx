import React from "react";
import { Code } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="hero">
      <h1 className="hero_h1">
        come to us with a <span className="vision">vision</span>
      </h1>
      <div className="first_underline">
        <span className="circle_hed"> </span>  
        <div className="small_" > </div>
        <span className="circle_hed"> </span>
    </div>
     <div className="sec_hed">

      <h2 className="hero_h2">Embrace the Quest</h2>
      <p className="hero_p">
        QuadBTech is a full-service digital agency that helps businesses grow
        through innovative marketing strategies.
      </p>
     </div>

      <button class="codepen-button">
        <span>Get Free Consaltation</span>
      </button>

      <div class="marquee">
        <hr />

        <div class="marquee__inner">
          <div class="marquee__group">
            <span className="gradient-text">
              Web Devlopment <Code size={90} />
            </span>
            <span className="gradient-text">
              Web Devlopment <Code size={90} />
            </span>
            <span className="gradient-text">
              Web Devlopment <Code size={90} />
            </span>
            <span className="gradient-text">
              Web Devlopment <Code size={90} />
            </span>
            <span className="gradient-text">
              Web Devlopment <Code size={90} />
            </span>
            <span>
              Web Devlopment <Code size={90} />
            </span>
            <span className="gradient-text">
              Web Devlopment <Code size={90} />
            </span>
          </div>

          <div class="marquee__group">
            <span className="gradient-text">
              Web Devlopment <Code size={90} />
            </span>
            <span className="gradient-text">
              Web Devlopment <Code size={90} />
            </span>
            <span className="gradient-text">
              Web Devlopment <Code size={90} />
            </span>
            <span className="gradient-text">
              Web Devlopment <Code size={90} />
            </span>
            <span className="gradient-text">
              Web Devlopment <Code size={90} />
            </span>
            <span>
              Web Devlopment <Code size={90} />
            </span>
            <span className="gradient-text">
              Web Devlopment <Code size={90} />
            </span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default HeroSection;
