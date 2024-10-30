"use client";

import { navItems, socials } from "@/data/navData";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [navColor, setNavColor] = useState("text-black"); // Default to black text

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const totalHeight = document.body.scrollHeight;

    // Determine the scroll position for the conditions
    if (scrollY < windowHeight * 0.95) {
      setNavColor("text-black"); // Black text until 95vh
    } else if (
      scrollY >= windowHeight * 0.95 &&
      scrollY < totalHeight - windowHeight * 1.2
    ) {
      setNavColor("text-white"); // White text between 95vh and 120vh from bottom
    } else {
      setNavColor("text-black"); // Black text when at the Contact section (after 120vh)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Aggressive bounce animation variants
  const bounceVariant = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="flex justify-between items-center p-space-lg fixed w-full z-20">
      <a
        href="#"
        className={clsx(
          "font-semibold z-20 hidden md:block hover:scale-110",
          open && "text-black",
          navColor, // Apply the dynamic text color
        )}
      >
        Teo<sup>&copy;</sup>
      </a>

      {/* Desktop */}
      <div className="hidden md:flex space-x-4">
        {navItems.map(
          (item) =>
            item.name !== "Home" && (
              <a
                key={item.name}
                href={item.href}
                className={clsx("hover:scale-110", navColor)} // Apply the dynamic text color
              >
                {item.name}
              </a>
            ),
        )}
      </div>

      {/* Mobile Button */}
      <div className="md:hidden z-20 fixed top-6 right-6">
        <button
          onClick={toggleMenu}
          className={clsx(
            "w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl focus:outline-none",
          )}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <motion.div
          className="fixed inset-0 bg-white transition-opacity duration-300 md:hidden z-10"
          key={open.toString()} // Forces remount on open state change
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 1 },
          }}
          aria-hidden={!open}
        >
          <div className="container h-full flex flex-col items-start justify-center gap-space-xs">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-item text-7xl font-bold"
                onClick={toggleMenu}
                initial="hidden"
                animate="visible"
                variants={bounceVariant}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 8,
                  delay: index * 0.1,
                }}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="uppercase mt-8">Get in touch</div>
            <div className="flex flex-col mt-4">
              {socials.map(({ name, href, displayName }, index) => (
                <motion.a
                  key={`${name}-${open}`} // Force re-render by including `open` in the key
                  href={href}
                  className="text-xl"
                  target={name === "Email" ? "_self" : "_blank"}
                  rel={name === "Email" ? undefined : "noopener noreferrer"}
                  initial="hidden"
                  animate="visible"
                  variants={bounceVariant}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 8,
                    delay: (index + navItems.length) * 0.1,
                  }}
                >
                  {displayName || name}&nbsp;&#8599;
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
