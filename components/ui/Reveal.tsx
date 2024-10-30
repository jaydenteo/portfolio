"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

const Reveal = ({
  direction,
  children,
  className = "",
  staggerChildren = 0.1,
  amount = 0.8,
}: {
  direction: "up" | "down";
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  amount?: number;
}) => {
  const FADE_DOWN: Variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    hidden: { opacity: 0, y: direction === "down" ? -20 : 20 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_DOWN}>{child}</motion.div>
        ) : (
          child
        ),
      )}
    </motion.div>
  );
};

export default Reveal;
