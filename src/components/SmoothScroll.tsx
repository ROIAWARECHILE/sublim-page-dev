"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function ScrollTriggerBridge() {
  useLenis(ScrollTrigger.update);
  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.4, smoothWheel: true }}>
      <ScrollTriggerBridge />
      {children}
    </ReactLenis>
  );
}
