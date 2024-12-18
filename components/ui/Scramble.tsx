"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 15;
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

type Props = {
  children: string;
};

const ScrambleText: React.FC<Props> = ({ children }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const TARGET_TEXT = children;

  const [text, setText] = useState(TARGET_TEXT);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setText(TARGET_TEXT);
  };

  useEffect(() => {
    if (inView) {
      scramble();
    }
  }, [inView]);

  return (
    <motion.div ref={ref} className="relative overflow-hidden">
      <div className="relative z-10 flex items-center gap-2">
        <span>{text}</span>
      </div>
    </motion.div>
  );
};

export default ScrambleText;
