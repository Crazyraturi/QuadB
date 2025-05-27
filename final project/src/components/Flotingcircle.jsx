import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FloatingCircle = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Levitate (Y-axis) + Sway (X-axis)
    tl.to(circleRef.current, {
      y: -70,
      x: 60,
      duration: 1,
      ease: "sine.inOut",
    }).to(circleRef.current, {
      y: 30,
      x: -20,
      duration: 2,
      ease: "sine.inOut",
    });

    // Continuous rotation
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 3,
      ease: "linear",
      repeat: -1,
    });

    // Subtle pulsing
    gsap.to(circleRef.current, {
      scale: 3,
      duration: 1.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="floating-bg">
      <div className="floating-circle" ref={circleRef}></div>
    </div>
  );
};

export default FloatingCircle;
