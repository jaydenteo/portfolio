"use client";

import Lenis from "lenis";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function SmoothScroll({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.2,
      easing: (t) => t,
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
}