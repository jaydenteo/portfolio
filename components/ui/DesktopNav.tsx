import React from "react";
import { clsx } from "clsx";
import { navItems } from "@/data/navData";
import { useNavColour } from "../hooks/useNavColour";

const DesktopNav = () => {
  const navColour = useNavColour();

  return (
    <>
      <a
        href="#"
        className={clsx(
          "font-semibold z-20 hidden md:block hover:scale-110 fixed top-space-lg left-space-lg",
          navColour, // Apply the dynamic text color
        )}
      >
        Teo<sup>&copy;</sup>
      </a>
      <div
        className={
          "hidden md:flex space-x-4 fixed top-space-lg right-space-lg z-20"
        }
      >
        {navItems.map(
          (item) =>
            item.name !== "Home" && (
              <a
                key={item.name}
                href={item.href}
                className={clsx("hover:scale-110", navColour)}
              >
                {item.name}
              </a>
            ),
        )}
      </div>
    </>
  );
};

export default DesktopNav;
