import React from "react";
import Logo from "@/assets/icons/logo.svg";
import Button from "../ui/Button";

function Hero() {
  return (
    <section className="mb-[-100svh]">
      <div className="h-svh sticky top-0 flex items-center justify-center w-full">
        <div className="w-full p-space-lg">
          <Logo className="uppercase" />
          <p className="pt-space-md text-text-base--large">
            Software Engineer at Accenture
          </p>
          <div className="pt-space-md">
            <Button />
          </div>
        </div>
      </div>
      <div className="h-[100svh]" />
    </section>
  );
}

export default Hero;
