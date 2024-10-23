import React from "react";
import Button from "../ui/Button";

function Contact() {
  return (
    <section className="mt-[-100svh]">
      <div className="h-[100svh]" />
      <div className="h-[100svh] sticky bottom-0 flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <p className="text-heading-1 font-bold tracking-tight leading-[1.0]">
            let's build
          </p>
          <p className="text-heading-1 font-bold mr-2 tracking-tight leading-[1.0]">
            something great
          </p>
          <p className="text-heading-1 font-bold tracking-tight leading-[1.0]">
            together
          </p>
          <div className="mt-space-lg">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
