"use client";

import { navItems, socials } from "@/data/navData";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-transparent">
      <a
        href="#"
        className={twMerge("font-bold text-xl z-20", open && "text-white")}
      >
        Teo<sup>&copy;</sup>
      </a>

      {/* Desktop */}
      <div className="hidden md:flex space-x-4 text-sm">
        {navItems.map(
          (item) =>
            item.name !== "Home" && (
              <a key={item.name} href={item.href}>
                {item.name}
              </a>
            )
        )}
      </div>

      {/* Mobile Button */}
      <div className="md:hidden z-20">
        <button
          onClick={toggleMenu}
          className={twMerge(
            "text-xl focus:outline-none",
            open && "text-white"
          )}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile */}
      <div
        className={twMerge(
          "fixed inset-0 bg-black bg-opacity-90  transition-opacity duration-300 md:hidden z-10",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div className="container h-full text-white flex flex-col items-start justify-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-item text-7xl mb-4 font-bold"
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
          <div className="uppercase">Get in touch</div>
          <div className="flex flex-col mt-8">
            {socials.map(({ name, href, displayName }) => (
              <a
                key={name}
                href={href}
                className="text-xl"
                target={name === "Email" ? "_self" : "_blank"}
                rel={name === "Email" ? undefined : "noopener noreferrer"}
              >
                {displayName || name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
