"use client";

import Lenis from "lenis";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: Props) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
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
