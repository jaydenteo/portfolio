import React from "react";
import { Logo } from "@/assets/icons";
import Button from "../ui/Button";
import { socials } from "@/data/navData";
import Reveal from "../ui/Reveal";

function Hero() {
  const emailLink =
    socials.find((social) => social.name === "Email")?.href || "#";

  return (
    <section className="mb-[-100svh]">
      <div className="h-svh sticky top-0 flex items-center justify-center w-full">
        <Reveal direction="up" className="w-full p-space-sm md:p-space-lg">
          <Logo className="uppercase" />

          <div className="text-text-base--large">
            Software Engineer at Accenture
          </div>

          <div className="py-space-md">
            <Button href={emailLink}>Get in touch</Button>
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
                    className="hover:scale-110"
                  >
                    <social.icon className="w-8 h-8" />
                  </a>
                ),
            )}
          </div>
        </Reveal>
      </div>
      <div className="h-[100svh]" />
    </section>
  );
}

export default Hero;
