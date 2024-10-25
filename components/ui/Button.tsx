import { socials } from "@/data/navData";
import clsx from "clsx";
import React from "react";

interface ButtonProps {
  className?: string;
}

const Button = ({ className }: ButtonProps) => {
  const emailLink =
    socials.find((social) => social.name === "Email")?.href || "#";

  return (
    <a href={emailLink} target="_blank" rel="noopener noreferrer">
      <button
        className={clsx(
          "px-space-lg py-space-sm bg-purple-700 text-white font-bold rounded-full uppercase",
          className,
        )}
      >
        Get in touch
      </button>
    </a>
  );
};

export default Button;
