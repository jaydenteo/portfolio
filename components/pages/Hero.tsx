import React from "react";
import { Logo } from "@/assets/icons";
import Button from "../ui/Button";
import { socials } from "@/data/navData";

function Hero() {
  return (
    <section className="mb-[-100svh]">
      <div className="h-svh sticky top-0 flex items-center justify-center w-full">
        <div className="w-full p-space-sm md:p-space-lg">
          <Logo className="uppercase" />
          <p className="text-text-base--large">
            Software Engineer at Accenture
          </p>
          <div className="py-space-md">
            <Button />
          </div>
          <div className="flex gap-space-xs">
            {socials.map(
              (social, index) =>
                social?.icon && (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-8 h-8" />
                  </a>
                ),
            )}
          </div>
        </div>
      </div>
      <div className="h-[100svh]" />
    </section>
  );
}

export default Hero;
