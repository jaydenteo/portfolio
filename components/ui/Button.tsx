import clsx from "clsx";
import React from "react";

interface ButtonProps {
  className?: string;
}

const Button = ({ className }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "px-space-lg py-space-sm bg-purple-700 text-white font-bold rounded-full uppercase",
        className
      )}
    >
      Get in touch
    </button>
  );
};

export default Button;
