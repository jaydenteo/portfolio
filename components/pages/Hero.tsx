import React from "react";
import Logo from "@/assets/icons/logo.svg";

function Hero() {
  return (
    <section className="mb-[-100svh]">
      <div className="h-svh sticky top-0 flex items-center justify-center w-full">
        <div className="w-full p-space-lg">
          <Logo className="uppercase" />
          <p className="mt-4 text-lg">Software Engineer at Accenture</p>
          <button className="mt-6 px-4 py-2 bg-blue-800 text-white rounded">
            Get in touch
          </button>
        </div>
      </div>
      <div className="h-[100svh]" />
    </section>
  );
}

export default Hero;
