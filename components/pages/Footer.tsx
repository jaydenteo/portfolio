import { socials } from "@/data/navData";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white px-space-lg py-space-xs rounded-t-3xl" id="Contact">
      <div className="flex flex-col justify-between items-center gap-space-xs lg:flex-row ">
        {/* Contact */}
        <div className="flex flex-col items-center gap-space-xs lg:flex-row">
          {socials.map(({ name, href, displayName }) => (
            <a
              key={name}
              href={href}
              className="text-text-base hover:text-purple-500 transition transform hover:scale-110 flex items-center"
              target={name === "Email" ? "_self" : "_blank"}
              rel={name === "Email" ? undefined : "noopener noreferrer"}
            >
              {displayName || name}
              <span className="ml-1">&#8599;</span>
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <h1 className="text-text-base--large font-bold mb-1">Jayden Teo</h1>
          <p className="text-text-base--small">
            &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
