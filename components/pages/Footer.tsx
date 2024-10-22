import { navItems, socials } from "@/data/navData";
import React from "react";

function Footer() {
  return (
    <section className="h-[100vh] flex items-center justify-center">
      <div className="container h-full flex flex-col items-start justify-center">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="nav-item text-7xl mb-4 font-bold"
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
    </section>
  );
}

export default Footer;
