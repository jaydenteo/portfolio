import React from "react";
import Button from "../ui/Button";

function Contact() {
  return (
    <section className="mt-[-100svh]">
      <div className="h-[100svh]" />
      <div className="h-[100svh] sticky bottom-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <p className="text-3xl">let's build</p>
          <div className="flex items-center justify-center">
            <p className="text-3xl mr-2">something great</p>
            <Button />
          </div>
          <p className="text-3xl">together</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
