import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MotionPathAnimation from "./MotionPAthAnimation";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  useEffect(() => {
  gsap.to(firstRef.current, {
    scrollTrigger: {
      trigger: firstRef.current,
      start: "top 50%",
    },
    x: -200,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
  });

  gsap.to(secondRef.current, {
    scrollTrigger: {
      trigger: secondRef.current,
      start: "top 50%",
    },
    x: 200,
    opacity: 1,
    duration: 1,
    ease: "power1.out",
  });

  gsap.to(thirdRef.current, {
    scrollTrigger: {
      trigger: thirdRef.current,
      start: "top 80%",
    },
    x: -200,
    opacity: 1,
    duration: 1,
    ease: "power1.out",
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);

  return (
    <div className="sec_container">
      <h1 className="sec_h1">
        we are designer,developer and marketers from india driven by a common
        purpose to inspire, create and launch ground breaking ideaS.
      </h1>
      <p className="sec_p">
        We love to took your vision to reality.Here's how we work:
      </p>

      <div className="first_div">
        <div className="first_div_inner overlay" ref={firstRef}>
          <h2>We find the Creatives, so you don't have to</h2>
          <p>
            QuadBTech's experience determine the right creative direction based
            on your company's positioning.
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur...</p>
        </div>

        <div className="second_div_inner overlay " ref={secondRef}>
          <h2>We create Technologies you will be proud of</h2>
          <p>
            QuadBTech's experience determine the right creative direction based
            on your company's positioning.
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur...</p>
        </div>

        <div className="third_div_inner overlay" ref={thirdRef}>
          <h2>We find the Creatives, so you don't have to</h2>
          <p>
            QuadBTech's experience determine the right creative direction based
            on your company's positioning.
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur...</p>
        </div>

        <MotionPathAnimation />
      </div>
    </div>
  );
};

export default Intro;
