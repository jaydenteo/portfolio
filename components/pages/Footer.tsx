import { navItems, socials } from "@/data/navData";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white p-space-lg rounded-t-3xl">
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

        {/* Nav Links */}
        <nav className="flex flex-col items-center gap-space-xs mb-4 md:mb-0 lg:flex-row">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-text-base font-semibold hover:text-purple-500 transition transform hover:scale-110"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Logo */}
      <div className="flex flex-col items-center mt-6">
        <h1 className="text-4xl font-bold mb-1">Jayden Teo</h1>
        <p className="text-sm">&copy; 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
