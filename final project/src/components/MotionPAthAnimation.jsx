import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const MotionPathAnimation = () => {
  const circleRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    gsap.to(circleRef.current, {
      duration: 10,
      scrollTrigger: {
        trigger: pathRef.current,
        markers: true,
        start: "top 50%",
        end: "bottom 70% ",
        scrub: 1.5,
        anticipatePin: 1,
      },
      motionPath: {
        path: pathRef.current,
        align: pathRef.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0.1,
        
        
      },
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="motionpath">
      <svg
        width="882"
        height="1200"
        viewBox="0 0 882 1148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          id="motionPath"
          d="
            M 0 0
            H 880
            V 277
            L 730 381.5
            H 136
            L 4 491.26
            L 5.9 748.74
            H 746.82
            L 862.44 893.95
            L 862.94 1146.74
            H 118
          "
          fill="none"
          stroke="white"
          strokeWidth="4"
        />
      </svg>

      <svg
        ref={circleRef}
        className="circle"
        width="40"
        height="40"
        viewBox="0 0 80 80"
        fill=" linear-gradient(45deg, green, yellow)"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <circle cx="40" cy="40" r="40" fill="#34C759" />
      </svg>
    </div>
  );
};

export default MotionPathAnimation;
