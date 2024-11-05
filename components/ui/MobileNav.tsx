import React, { useState } from "react";
import { motion } from "framer-motion";
import { navItems, socials } from "@/data/navData";
import clsx from "clsx";

const bounceVariant = {
  hidden: { opacity: 0, x: 300 },
  visible: { opacity: 1, x: 0 },
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className="md:hidden z-30 fixed top-space-lg right-space-lg">
        <button
          onClick={handleToggle}
          className={clsx(
            "w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl focus:outline-none",
          )}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white transition-opacity duration-300 md:hidden z-20"
          initial="hidden"
          animate="visible"
          variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
          aria-hidden={!isOpen}
        >
          <div className="container h-full flex flex-col items-start justify-center gap-space-xs">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-item text-7xl font-bold"
                onClick={handleToggle}
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
                  key={`${name}-${isOpen}`}
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
    </>
  );
};

export default MobileNav;
