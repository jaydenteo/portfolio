import clsx from "clsx";
import React from "react";

interface ButtonProps {
  className?: string;
  href?: string;
  children: React.ReactNode;
}

const Button = ({ className, href, children }: ButtonProps) => {
  const baseClasses = clsx(
    "px-space-lg py-space-sm bg-purple-700 text-white text-text-base--small font-bold rounded-full uppercase inline-block",
    className,
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return <button className={baseClasses}>{children}</button>;
};

export default Button;
