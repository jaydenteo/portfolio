"use client";

import Lenis from "lenis";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: Props) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t) => t * (2 - t),
      smoothWheel: true,
      syncTouch: true,
    });

    function animate(time: number) {
      lenis.raf(time);
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
};

export default SmoothScroll;
